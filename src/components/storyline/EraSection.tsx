import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import TimelineCard from "./TimelineCard";
import type { Era, TimelineEvent } from "@/data/timeline";
import { getText } from "@/data/timeline";
import { useLanguage } from "@/contexts/LanguageContext";

interface EraSectionProps {
  era: Era;
  index: number;
  totalEras: number;
  onViewDetails?: (event: TimelineEvent) => void;
}

const EraSection = ({ era, index, totalEras, onViewDetails }: EraSectionProps) => {
  const { language } = useLanguage();
  
  return (
    <section id={`era-${getText(era.name, language).toLowerCase().replace(/\s+/g, "-")}`} className="mb-20 md:mb-32">
      {/* Era header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        {/* Decorative top */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-primary text-2xl">❈</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Era name */}
        <h2 className="font-display text-3xl md:text-4xl text-gradient-gold mb-3">
          {getText(era.name, language)}
        </h2>

        {/* Period */}
        <p className="font-display text-lg md:text-xl text-primary/80 mb-4">
          {getText(era.period, language)}
        </p>

        {/* Description */}
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {getText(era.description, language)}
        </p>
      </motion.div>

      {/* Events grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {era.events.map((event, eventIndex) => (
          <TimelineCard key={event.id} event={event} index={eventIndex} onViewDetails={onViewDetails} />
        ))}
      </div>

      {/* Separator after each era except the last */}
      {index < totalEras - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24"
        >
          <Separator className="bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </motion.div>
      )}
    </section>
  );
};

export default EraSection;

