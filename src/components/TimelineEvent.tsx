import { motion } from "framer-motion";
import { ExternalLink, Play, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  link?: string;
  mediaType?: "youtube" | "photos" | "image" | "video" | "none";
  mediaUrl?: string;
  thumbnailUrl?: string;
  isLeft: boolean;
  index: number;
  isMajor?: boolean;
}

// Helper to extract YouTube video ID
const getYouTubeId = (url: string): string | null => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match ? match[1] : null;
};

const TimelineEvent = ({ 
  date, 
  title, 
  description, 
  link, 
  mediaType = "none",
  mediaUrl,
  thumbnailUrl,
  isLeft, 
  index, 
  isMajor = false 
}: TimelineEventProps) => {
  const [showMedia, setShowMedia] = useState(false);
  const youtubeId = mediaType === "youtube" && mediaUrl ? getYouTubeId(mediaUrl) : null;

  const renderMedia = () => {
    if (mediaType === "youtube" && youtubeId) {
      return (
        <div className="mt-4 rounded-lg overflow-hidden border border-border/30">
          {showMedia ? (
            <div className="relative w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title={title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <button
              onClick={() => setShowMedia(true)}
              className="relative w-full aspect-video bg-background/50 group/play cursor-pointer"
            >
              <img
                src={thumbnailUrl || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                alt={title}
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

    if (mediaType === "image" && mediaUrl) {
      return (
        <div className="mt-4 rounded-lg overflow-hidden border border-border/30">
          <img
            src={mediaUrl}
            alt={title}
            className="w-full h-auto object-cover max-h-64"
            loading="lazy"
          />
        </div>
      );
    }

    if (mediaType === "photos") {
      return (
        <div className="mt-4 rounded-lg overflow-hidden border border-border/30">
          {thumbnailUrl ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group/photo"
            >
              <img
                src={thumbnailUrl}
                alt={title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover/photo:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-2 text-foreground bg-card/80 px-4 py-2 rounded-full">
                  <ImageIcon className="w-4 h-4" />
                  <span className="font-display text-sm">View Album</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          ) : link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-background/30 text-primary hover:text-primary/80 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <ImageIcon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block font-display text-sm">View Photo Album</span>
                <span className="block text-xs text-muted-foreground">Opens Google Photos</span>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </a>
          ) : null}
        </div>
      );
    }

    return null;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-start gap-8 ${isLeft ? 'md:flex-row flex-row' : 'md:flex-row-reverse flex-row'} mb-16 md:mb-24`}
    >
      {/* Content card */}
      <div className={`flex-1 ${isLeft ? 'md:text-right text-left' : 'text-left'}`}>
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="inline-block w-full md:max-w-md"
        >
          <div
            className={`block p-6 md:p-8 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 
              ${isMajor ? 'sacred-glow border-primary/30' : ''} 
              hover:border-primary/50 transition-all duration-300`}
          >
            {/* Date badge */}
            <div className={`inline-flex items-center gap-2 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
              <span className="text-primary text-sm">✦</span>
              <span className="font-display text-lg md:text-xl text-primary tracking-wider">{date}</span>
            </div>

            {/* Title */}
            <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'md:justify-end md:flex-row-reverse' : ''}`}>
              <h3 className={`font-display text-xl md:text-2xl text-foreground ${isMajor ? 'text-gradient-gold' : ''}`}>
                {title}
              </h3>
            </div>

            {/* Description */}
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            {/* Embedded Media */}
            {renderMedia()}

            {/* External link for non-embedded content */}
            {link && mediaType === "none" && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary/80 transition-colors ${isLeft ? 'md:flex-row-reverse' : ''}`}
              >
                <span>View More</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Center timeline marker */}
      <div className="relative flex-shrink-0">
        <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full ${isMajor ? 'bg-primary' : 'bg-primary/50'} 
          border-2 border-primary z-10 relative`}>
          {isMajor && (
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
          )}
        </div>
      </div>

      {/* Spacer for the other side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

export default TimelineEvent;
