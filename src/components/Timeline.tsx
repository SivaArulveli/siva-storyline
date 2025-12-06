import TimelineEvent from "./TimelineEvent";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2006",
    title: "Sri Siva's 80th Birthday",
    description: "A blessed celebration marking eight decades of divine presence and spiritual guidance. The auspicious beginning of this sacred chronicle.",
    isMajor: true,
  },
  {
    year: "2006",
    title: "Siva Gnana Malar",
    description: "Publication of the first sacred book, 'Siva Gnana Malar', preserving the divine teachings and wisdom for future generations.",
    isMajor: false,
  },
  {
    year: "2008",
    title: "Maha Jeeva Samadhi",
    description: "On the sacred morning of February 7th at 4:50 AM, Sri Siva Swamigal attained Maha Jeeva Samadhi, transcending the physical realm while remaining eternally present in spirit.",
    isMajor: true,
  },
  {
    year: "2009",
    title: "2nd Gurupooja",
    description: "The second annual observance honoring the divine master, gathering devotees in sacred remembrance and gratitude.",
    isMajor: false,
  },
  {
    year: "2009",
    title: "Kumbhabishegam",
    description: "The sacred temple consecration ceremony, invoking divine blessings and sanctifying the holy space.",
    isMajor: true,
  },
  {
    year: "2011",
    title: "3rd Gurupooja",
    description: "Continued devotion through the third annual commemoration, strengthening the spiritual bond with the master's eternal presence.",
    isMajor: false,
  },
  {
    year: "2012",
    title: "4th Gurupooja",
    description: "Growing community of devotees gathering for the fourth annual sacred observance.",
    isMajor: false,
  },
  {
    year: "2013",
    title: "5th Gurupooja",
    description: "Half a decade of unbroken tradition, celebrating the fifth anniversary of remembrance.",
    isMajor: false,
  },
  {
    year: "2014",
    title: "6th Gurupooja",
    description: "The sacred flame of devotion continues to burn bright through the sixth annual commemoration.",
    isMajor: false,
  },
  {
    year: "2015",
    title: "7th Gurupooja",
    description: "Seven years of continuous reverence and spiritual practice in honor of the divine master.",
    isMajor: false,
  },
  {
    year: "2016",
    title: "8th Gurupooja",
    description: "A significant milestone marking eight years of devoted observance and growing spiritual community.",
    isMajor: false,
  },
  {
    year: "2017",
    title: "9th Gurupooja",
    description: "The ninth annual celebration, drawing devotees closer to the eternal teachings.",
    isMajor: false,
  },
  {
    year: "2018",
    title: "10th Gurupooja",
    description: "A decade of devotion — the tenth Gurupooja marks ten years since the Maha Jeeva Samadhi, celebrating an enduring spiritual legacy.",
    isMajor: true,
  },
  {
    year: "2019",
    title: "11th Gurupooja",
    description: "Continuing the sacred tradition into a new decade, with prayers and ceremonies honoring the immortal spirit of Sri Siva Swamigal.",
    isMajor: false,
  },
];

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
        
        {timelineData.map((event, index) => (
          <TimelineEvent
            key={index}
            year={event.year}
            title={event.title}
            description={event.description}
            isLeft={index % 2 === 0}
            index={index}
            isMajor={event.isMajor}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
