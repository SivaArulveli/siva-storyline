import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { ExternalLink, Calendar, MapPin, Play, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import type { TimelineEvent } from "@/data/timeline";
import { useMediaQuery } from "@/hooks/use-media-query";

interface EventDetailsProps {
  event: TimelineEvent | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EventDetails = ({ event, open, onOpenChange }: EventDetailsProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!event) return null;

  const getYouTubeId = (url: string): string | null => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = event.mediaType === "youtube" && event.mediaUrl ? getYouTubeId(event.mediaUrl) : null;

  const content = (
    <div className="space-y-6">
      {/* Event metadata */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="w-4 h-4 text-primary" />
          <span>{event.date}</span>
        </div>
        {event.year && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Year {event.year}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="prose prose-invert max-w-none">
        <p className="text-base leading-relaxed text-foreground/90">{event.description}</p>
      </div>

      {/* Media */}
      {event.mediaType === "youtube" && youtubeId && (
        <div className="rounded-lg overflow-hidden border border-border/30">
          {showVideo ? (
            <div className="relative w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title={event.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <button
              onClick={() => setShowVideo(true)}
              className="relative w-full aspect-video bg-background/50 group/play cursor-pointer"
            >
              <img
                src={event.thumbnailUrl || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/30 group-hover/play:bg-background/10 transition-colors">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover/play:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
          )}
        </div>
      )}

      {event.mediaType === "image" && event.mediaUrl && (
        <div className="rounded-lg overflow-hidden border border-border/30">
          <img src={event.mediaUrl} alt={event.title} className="w-full h-auto object-cover" />
        </div>
      )}

      {event.mediaType === "photos" && event.thumbnailUrl && (
        <div className="rounded-lg overflow-hidden border border-border/30">
          <img src={event.thumbnailUrl} alt={event.title} className="w-full h-auto object-cover" />
        </div>
      )}

      {/* External link */}
      {event.link && (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <ImageIcon className="w-4 h-4" />
          <span>View Full Album</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className={`text-2xl ${event.isMajor ? "text-gradient-gold" : ""}`}>
              {event.title}
            </DialogTitle>
            <DialogDescription className="text-base">{event.era}</DialogDescription>
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className={`text-xl ${event.isMajor ? "text-gradient-gold" : ""}`}>
            {event.title}
          </DrawerTitle>
          <DrawerDescription>{event.era}</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-8 overflow-y-auto max-h-[70vh]">{content}</div>
      </DrawerContent>
    </Drawer>
  );
};

export default EventDetails;
