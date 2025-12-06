import TimelineEvent from "./TimelineEvent";
import LeafDivider from "./LeafDivider";
import { motion } from "framer-motion";

const timelineData = [
  {
    date: "May 29, 2006",
    title: "Sri Siva's 80th Birthday",
    description: "A blessed celebration marking eight decades of divine presence and spiritual guidance. The auspicious beginning of this sacred chronicle.",
    link: "https://sivapithan.com/80th-birthday",
    isMajor: true,
  },
  {
    date: "September 15, 2006",
    title: "Siva Gnana Malar",
    description: "Publication of the first sacred book, 'Siva Gnana Malar', preserving the divine teachings and wisdom for future generations.",
    link: "https://sivapithan.com/siva-gnana-malar",
    isMajor: false,
  },
  {
    date: "February 7, 2008",
    title: "Maha Jeeva Samadhi",
    description: "On the sacred morning at 4:50 AM, Sri Siva Swamigal attained Maha Jeeva Samadhi, transcending the physical realm while remaining eternally present in spirit.",
    link: "https://sivapithan.com/maha-jeeva-samadhi",
    isMajor: true,
  },
  {
    date: "February 7, 2009",
    title: "2nd Gurupooja",
    description: "The second annual observance honoring the divine master, gathering devotees in sacred remembrance and gratitude.",
    link: "https://sivapithan.com/2nd-gurupooja",
    isMajor: false,
  },
  {
    date: "March 21, 2009",
    title: "Kumbhabishegam",
    description: "The sacred temple consecration ceremony, invoking divine blessings and sanctifying the holy space.",
    link: "https://sivapithan.com/kumbhabishegam",
    isMajor: true,
  },
  {
    date: "February 7, 2011",
    title: "3rd Gurupooja",
    description: "Continued devotion through the third annual commemoration, strengthening the spiritual bond with the master's eternal presence.",
    link: "https://sivapithan.com/3rd-gurupooja",
    isMajor: false,
  },
  {
    date: "February 7, 2012",
    title: "4th Gurupooja",
    description: "Growing community of devotees gathering for the fourth annual sacred observance.",
    link: "https://sivapithan.com/4th-gurupooja",
    isMajor: false,
  },
  {
    date: "February 7, 2013",
    title: "5th Gurupooja",
    description: "Half a decade of unbroken tradition, celebrating the fifth anniversary of remembrance.",
    link: "https://sivapithan.com/5th-gurupooja",
    isMajor: false,
  },
  {
    date: "February 7, 2014",
    title: "6th Gurupooja",
    description: "The sacred flame of devotion continues to burn bright through the sixth annual commemoration.",
    link: "https://sivapithan.com/6th-gurupooja",
    isMajor: false,
  },
  {
    date: "February 7, 2015",
    title: "7th Gurupooja",
    description: "Seven years of continuous reverence and spiritual practice in honor of the divine master.",
    link: "https://sivapithan.com/7th-gurupooja",
    isMajor: false,
  },
  {
    date: "February 7, 2016",
    title: "8th Gurupooja",
    description: "A significant milestone marking eight years of devoted observance and growing spiritual community.",
    link: "https://sivapithan.com/8th-gurupooja",
    isMajor: false,
  },
  {
    date: "February 7, 2017",
    title: "9th Gurupooja",
    description: "The ninth annual celebration, drawing devotees closer to the eternal teachings.",
    link: "https://sivapithan.com/9th-gurupooja",
    isMajor: false,
  },
  {
    date: "February 7, 2018",
    title: "10th Gurupooja",
    description: "A decade of devotion — the tenth Gurupooja marks ten years since the Maha Jeeva Samadhi, celebrating an enduring spiritual legacy.",
    link: "https://sivapithan.com/10th-gurupooja",
    isMajor: true,
  },
  {
    date: "February 7, 2019",
    title: "11th Gurupooja",
    description: "Continuing the sacred tradition into a new decade, with prayers and ceremonies honoring the immortal spirit of Sri Siva Swamigal.",
    link: "https://sivapithan.com/11th-gurupooja",
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
          <div key={index}>
            <TimelineEvent
              date={event.date}
              title={event.title}
              description={event.description}
              link={event.link}
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
