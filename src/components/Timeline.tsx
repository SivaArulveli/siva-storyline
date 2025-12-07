import TimelineEvent from "./TimelineEvent";
import LeafDivider from "./LeafDivider";
import { motion } from "framer-motion";
import timelineData from "@/data/timeline-events.json";
import type { TimelineEventData } from "@/types/timeline";

const Timeline = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Section header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24"
      >
        <span className="text-primary text-3xl mb-4 block">❈</span>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
          Sacred <span className="text-gradient-gold">Timeline</span>
        </h2>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
          <span className="text-accent">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
        </div>
        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
          Journey through the milestones of divine grace and spiritual heritage
        </p>
      </motion.div>

      {/* Timeline line */}
      <div className="absolute left-1/2 top-48 bottom-32 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 hidden md:block" />

      {/* Timeline events */}
      <div className="max-w-5xl mx-auto relative">
        {/* Mobile timeline line */}
        <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 md:hidden" />
        
        {(timelineData as TimelineEventData[]).map((event, index) => (
          <div key={index}>
            <TimelineEvent
              date={event.date}
              title={event.title}
              description={event.description}
              link={event.link}
              mediaType={event.mediaType}
              mediaUrl={event.mediaUrl}
              thumbnailUrl={event.thumbnailUrl}
              isLeft={index % 2 === 0}
              index={index}
              isMajor={event.isMajor}
            />
            {/* Add leaf divider after every 3rd event, but not after the last */}
            {(index + 1) % 3 === 0 && index < timelineData.length - 1 && (
              <LeafDivider index={index} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
