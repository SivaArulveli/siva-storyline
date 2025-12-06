import TimelineEvent from "./TimelineEvent";
import LeafDivider from "./LeafDivider";
import { motion } from "framer-motion";

const timelineData = [
  {
    date: "June 7, 2006",
    title: "Sri Siva's 80th Birthday",
    description: "A blessed celebration marking eight decades of divine presence and spiritual guidance. The auspicious beginning of this sacred chronicle.",
    link: "",
    isMajor: true,
  },
  {
    date: "June 7, 2006",
    title: "Siva Gnana Malar",
    description: "Publication of the first sacred book, 'Siva Gnana Malar', preserving the divine teachings and wisdom for future generations.",
    link: "",
    isMajor: false,
  },
  {
    date: "February 7, 2008",
    title: "Maha Jeeva Samadhi",
    description: "On the sacred morning, Sri Siva Swamigal attained Maha Jeeva Samadhi, transcending the physical realm while remaining eternally present in spirit.",
    link: "",
    isMajor: true,
  },
  {
    date: "February 11, 2008",
    title: "Siva Swamigal Jeeva Samadhi",
    description: "Siva Maha Jeeva Samadhi Day — a day of sacred remembrance and spiritual significance.",
    link: "https://photos.google.com/share/AF1QipMtEufm6jYSQfPBKGmuMuXAj9f_1QDTQ-WVmtSJROeOyF_NGjw4ayPdOvhtLz_TdQ?key=R1pDdkJuYlBkSjMwNmZSM1dwYXBxTm9tdXZnZFZB",
    isMajor: true,
  },
  {
    date: "January 26, 2009",
    title: "1st Gurupooja",
    description: "The first annual observance honoring the divine master, gathering devotees in sacred remembrance and gratitude.",
    link: "https://photos.google.com/share/AF1QipOxoqAbKXriavRxRSpZydBiagvyeU2ztGMnNsr-GOLkjoBnFwiY35-XENimSTPrBw?key=X01aMThLOHRuX252SHp3V1hqeHdUQ2RtX2N2QmV3",
    isMajor: false,
  },
  {
    date: "February 8, 2009",
    title: "Jeeva Samadhi Mandabam Kumbhabishegam",
    description: "The sacred temple consecration ceremony of the Jeeva Samadhi Mandabam, invoking divine blessings and sanctifying the holy space.",
    link: "https://photos.app.goo.gl/7rRroxV9ZzCA5anU6",
    isMajor: true,
  },
  {
    date: "January 14, 2010",
    title: "2nd Gurupooja",
    description: "The second annual commemoration, strengthening the spiritual bond with the master's eternal presence.",
    link: "https://drive.google.com/file/d/1XCsaaHSBncH--yhHsWbByD85oPMC_DgY/view?usp=sharing",
    isMajor: false,
  },
  {
    date: "November 2, 2010",
    title: "Sri Surandai Brahmanayagam Swamigal Jeeva Samadhi",
    description: "Sri Surandai Brahmanayagam Swamigal attained Jeeva Samadhi, joining the eternal divine presence.",
    link: "https://sivapithan.wordpress.com/gallery/",
    isMajor: true,
  },
  {
    date: "February 2, 2011",
    title: "3rd Gurupooja",
    description: "Continued devotion through the third annual commemoration, strengthening the spiritual bond with the master's eternal presence.",
    link: "https://photos.google.com/share/AF1QipONAXZ50KAkL0GS3cbr2hfGUvHc-LNYAkWYolsBtGnROMWGW9TqmKZmbj891rHNrA?key=bEUzYkpPVnhXSE5QQkczU2RjTzVhN2hBVC1PdUtB",
    isMajor: false,
  },
  {
    date: "January 22, 2012",
    title: "4th Gurupooja",
    description: "Growing community of devotees gathering for the fourth annual sacred observance.",
    link: "https://photos.google.com/share/AF1QipM19ozQX8964snuXX-m4FcFftR6TpS3Bey6kiOzHlzglq7xp_s6eYbcvyoo8odavg?key=a0pTZndKVTg3TDNlUkhlSEprMmV2bzJaNGIwemJB",
    isMajor: false,
  },
  {
    date: "February 9, 2013",
    title: "5th Gurupooja",
    description: "Half a decade of unbroken tradition, celebrating the fifth anniversary of remembrance.",
    link: "https://photos.google.com/share/AF1QipN_hLNkUpaKCO9xLSZdtSaADswF1LWVoeuGQig9mCb4Cbl5TWSedKN_Ihhp3m6cgw?key=T0JrSURrdkVqeXprM2ZmNENvZUh5RkZvbTkyUzRR",
    isMajor: false,
  },
  {
    date: "January 30, 2014",
    title: "6th Gurupooja",
    description: "The sacred flame of devotion continues to burn bright through the sixth annual commemoration.",
    link: "https://photos.google.com/share/AF1QipPkeoRJUv_Bkx9wtCexsfYfPmTU8EP_tTJ4KXalFduIXjhz6uV9r1-rEm-D7inNyw?key=MGQ2WHlCQ3VzUE8xVEh1QV9namExMjBHWEdFNVRR",
    isMajor: false,
  },
  {
    date: "January 20, 2015",
    title: "7th Gurupooja",
    description: "Seven years of continuous reverence and spiritual practice in honor of the divine master.",
    link: "https://photos.google.com/share/AF1QipPBGsD4GltQillGMp9BgWS_OLe4DxZcTlno3gd07RCjedxUOyXUDqKszW7naFfZIQ?key=TmZFZlp3N243YnktN2hoNzhlRkZiRzBGS1k3NTNR",
    isMajor: false,
  },
  {
    date: "February 8, 2016",
    title: "8th Gurupooja",
    description: "A significant milestone marking eight years of devoted observance and growing spiritual community.",
    link: "https://photos.google.com/share/AF1QipOYVVXkmsTy0w9nr3xoeDCe4P59QNePCC_YtyhKf4cJk4hDStMU8rixIgsxYWOs5w?key=c0FVTDlrMkpZSXIyT0xhRjl3al9RWkt1eUpMNE5n",
    isMajor: false,
  },
  {
    date: "January 27, 2017",
    title: "9th Gurupooja",
    description: "The ninth annual celebration, drawing devotees closer to the eternal teachings.",
    link: "https://photos.google.com/share/AF1QipN2bBltPM7uUgGCGUL03UBDqjZq2FYMUeSw3ewaC0D_X0WbU0l94FDtHSXb-Zgiyw?key=ajhnLXhWcm4tX1E3TzR4eTNLZFpGWElkY0p4MkdB",
    isMajor: false,
  },
  {
    date: "January 16, 2018",
    title: "10th Gurupooja",
    description: "A decade of devotion — the tenth Gurupooja marks ten years since the Maha Jeeva Samadhi, celebrating an enduring spiritual legacy.",
    link: "https://photos.google.com/share/AF1QipO--wrPr8_q2b_7m9CmZdHyhpDWD0bwC90Mt4v-RVpWtn2znw2TfQoLD2GU2z06fQ?key=WFNNWnk1RW9qTVVyalN2UXdBaVE4VWhaX0V1Qml3",
    isMajor: true,
  },
  {
    date: "February 4, 2019",
    title: "11th Gurupooja",
    description: "Continuing the sacred tradition into a new decade, with prayers and ceremonies honoring the immortal spirit of Sri Siva Swamigal.",
    link: "https://photos.google.com/share/AF1QipPRlVf0shFOWgeF1ZMeJvOpg71PCerOqvSB-ZzT8ZWsm6nqpDsKKrSwCszOydB6ww?key=Y21QX0NsQ281VWwxRjVGR2JBWHZDLTFRVEJOa3d3",
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
