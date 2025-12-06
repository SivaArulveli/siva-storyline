import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  link?: string;
  isLeft: boolean;
  index: number;
  isMajor?: boolean;
}

const TimelineEvent = ({ date, title, description, link, isLeft, index, isMajor = false }: TimelineEventProps) => {
  const CardWrapper = link ? 'a' : 'div';
  const cardProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-16 md:mb-24`}
    >
      {/* Content card */}
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="inline-block"
        >
          <CardWrapper
            {...cardProps}
            className={`block p-6 md:p-8 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 
              ${isMajor ? 'sacred-glow border-primary/30' : ''} 
              ${link ? 'cursor-pointer hover:border-primary group' : 'hover:border-primary/50'}
              transition-all duration-300 max-w-md`}
          >
            {/* Date badge */}
            <div className={`inline-flex items-center gap-2 mb-3 ${isLeft ? 'flex-row-reverse' : ''}`}>
              <span className="text-primary text-sm">✦</span>
              <span className="font-display text-lg md:text-xl text-primary tracking-wider">{date}</span>
            </div>

            {/* Title with link indicator */}
            <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'justify-end flex-row-reverse' : ''}`}>
              <h3 className={`font-display text-xl md:text-2xl text-foreground ${isMajor ? 'text-gradient-gold' : ''}`}>
                {title}
              </h3>
              {link && (
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </div>

            {/* Description */}
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            {/* Read more indicator */}
            {link && (
              <span className={`inline-flex items-center gap-1 mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity ${isLeft ? 'flex-row-reverse' : ''}`}>
                Learn more <ExternalLink className="w-3 h-3" />
              </span>
            )}
          </CardWrapper>
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
