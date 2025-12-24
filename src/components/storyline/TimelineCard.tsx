import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Play, Image as ImageIcon, Eye } from "lucide-react";
import { useState, useRef } from "react";
import { TIMELINE_EVENTS, type TimelineEvent, getText } from "@/data/timeline";
import { useLanguage } from "@/contexts/LanguageContext";

interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
  onViewDetails?: (event: TimelineEvent) => void;
}

// Helper to extract YouTube video ID
const getYouTubeId = (url: string): string | null => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match ? match[1] : null;
};

const TimelineCard = ({ event, index, onViewDetails }: TimelineCardProps) => {
  const { language } = useLanguage();
  const [showMedia, setShowMedia] = useState(false);
  const youtubeId = event.mediaType === "youtube" && event.mediaUrl ? getYouTubeId(event.mediaUrl) : null;

  // 3D tilt effect
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const renderMedia = () => {
    if (event.mediaType === "youtube" && youtubeId) {
      return (
        <div className="mt-4 rounded-lg overflow-hidden border border-border/30">
          {showMedia ? (
            <div className="relative w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title={getText(event.title, language)}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowMedia(true);
              }}
              className="relative w-full aspect-video bg-background/50 group/play cursor-pointer"
            >
              <img
                src={event.thumbnailUrl || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                alt={getText(event.title, language)}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/30 group-hover/play:bg-background/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover/play:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
          )}
        </div>
      );
    }

    if (event.mediaType === "image" && event.mediaUrl) {
      return (
        <div className="mt-4 rounded-lg overflow-hidden border border-border/30">
          <img
            src={event.mediaUrl}
            alt={getText(event.title, language)}
            className="w-full h-auto object-cover max-h-64"
            loading="lazy"
          />
        </div>
      );
    }

    if (event.mediaType === "photos" && event.thumbnailUrl) {
      return (
        <div className="mt-4 rounded-lg overflow-hidden border border-border/30">
          <div className="relative group/photo">
            <img
              src={event.thumbnailUrl}
              alt={getText(event.title, language)}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover/photo:scale-105"
              loading="lazy"
            />
            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute inset-0 bg-background/40 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center"
              >
                <div className="flex items-center gap-2 text-foreground bg-card/80 px-4 py-2 rounded-full">
                  <ImageIcon className="w-4 h-4" />
                  <span className="font-display text-sm">View Album</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            )}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer focus-within:outline-none"
      onClick={() => onViewDetails?.(event)}
    >
      <Card
        className={`group hover:border-primary/50 transition-all duration-300 relative overflow-hidden ${
          event.isMajor ? "sacred-glow border-primary/30" : ""
        }`}
        tabIndex={0}
        data-timeline-card
        data-card-index={TIMELINE_EVENTS.findIndex(e => e.id === event.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onViewDetails?.(event);
          }
        }}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* View details button overlay */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
          <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
            <Eye className="w-4 h-4" />
          </div>
        </div>

        {/* Keyboard hint */}
        <div className="absolute top-4 left-4 z-10 opacity-0 group-focus-within:opacity-100 transition-opacity">
          <div className="bg-card/90 backdrop-blur-sm border border-primary/30 px-2 py-1 rounded text-xs text-primary font-display">
            Press Enter or Click
          </div>
        </div>

        <CardHeader className="space-y-3 relative">
          {/* Date badge */}
          <div className="flex items-center gap-2">
            <span className="text-primary text-sm">✦</span>
            <CardDescription className="font-display text-base md:text-lg text-primary tracking-wider">
              {event.date}
            </CardDescription>
          </div>

          {/* Title */}
          <CardTitle className={`text-xl md:text-2xl ${event.isMajor ? "text-gradient-gold" : ""}`}>
            {getText(event.title, language)}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 relative">
          {/* Description */}
          <p className="font-body text-base text-muted-foreground leading-relaxed line-clamp-3">
            {getText(event.description, language)}
          </p>

          {/* Media */}
          {renderMedia()}

          {/* External link for non-embedded content */}
          {event.link && event.mediaType === "none" && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <span>View More</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TimelineCard;
