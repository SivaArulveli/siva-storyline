/**
 * Sacred Timeline Data Structure
 * A typed representation of Sri Siva Swamigal's Gurupooja timeline
 */

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  mediaType?: "youtube" | "photos" | "image" | "video" | "none";
  link?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  isMajor?: boolean;
  era: string;
  year: number;
}

export type Era = {
  name: string;
  period: string;
  description: string;
  events: TimelineEvent[];
};

/**
 * All Gurupooja events from 2009 to 2025
 */
export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "gurupooja-1",
    date: "January 26, 2009",
    title: "1st Gurupooja",
    description: "The inaugural Gurupooja set a sacred foundation with the humble invitation of a Sadhu as a revered guest. The offering of Parivattam symbolized respect and unity, while the spirit of equality was deeply upheld, giving the same importance and reverence to all who gathered in the divine presence.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "images/1-Gurupooja.png",
    isMajor: true,
    era: "Foundation Years",
    year: 2009,
  },
  {
    id: "gurupooja-2",
    date: "January 14, 2010",
    title: "2nd Gurupooja",
    description: "This year marked a refined focus on preserving divinity through quality spiritual photography and detailed Alankaram. Every offering, decoration, and visual record was carefully crafted to honor Siva Swamigal with clarity, beauty, and deep devotional intent.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "images/2-Gurupooja.png",
    isMajor: false,
    era: "Foundation Years",
    year: 2010,
  },
  {
    id: "gurupooja-3",
    date: "February 2, 2011",
    title: "3rd Gurupooja",
    description: "The third Gurupooja unfolded in quiet spiritual continuity, strengthening the growing circle of devotees through disciplined worship, heartfelt prayer, and silent remembrance of the Guru's living presence.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "images/3-Gurupooja.png",
    isMajor: false,
    era: "Foundation Years",
    year: 2011,
  },
  {
    id: "gurupooja-4",
    date: "January 22, 2012",
    title: "4th Gurupooja",
    description: "A powerful collective vibration filled the sacred space as devotees united in a Group Chant of the Moola Manthra. The shared sound, breath, and intention created a deeply transformative atmosphere of inner awakening.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "images/4-Gurupooja.png",
    isMajor: false,
    era: "Foundation Years",
    year: 2012,
  },
  {
    id: "gurupooja-5",
    date: "February 9, 2013",
    title: "5th Gurupooja",
    description: "This Gurupooja emphasized collective resolve through Group Chanting and a shared Sangalpam that included every devotee by name. The sense of spiritual family and shared accountability was deeply strengthened.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "images/5-Gurupooja.png",
    isMajor: false,
    era: "Expansion Years",
    year: 2013,
  },
  {
    id: "gurupooja-6",
    date: "January 30, 2014",
    title: "6th Gurupooja",
    description: "The divine presence was magnified with the installation of Siva's sacred photo and the resonant ringing of a Big Bell. Each sound and visual served as a constant reminder of the eternal Guru tattva.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "images/6-Gurupooja.png",
    isMajor: false,
    era: "Expansion Years",
    year: 2014,
  },
  {
    id: "gurupooja-7",
    date: "January 20, 2015",
    title: "7th Gurupooja",
    description: "A year of expansive seva and sacred sharing — Paal Abhishegam was lovingly offered to all, accompanied by Bilvashtakam chanting. The introduction of screens, sign boards, group chanting books, and the display of Siddhargal names marked a powerful step in structured spiritual propagation.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "images/7-Gurupooja.png",
    isMajor: false,
    era: "Expansion Years",
    year: 2015,
  },
  {
    id: "gurupooja-8",
    date: "February 8, 2016",
    title: "8th Gurupooja",
    description: "With the unveiling of banners and organized Sivapoojai, this Gurupooja extended its grace beyond worship into education through school book distribution. The consecration of Thevaram books reflected the union of devotion and learning.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "images/8-Gurupooja.png",
    isMajor: false,
    era: "Expansion Years",
    year: 2016,
  },
  {
    id: "gurupooja-9",
    date: "January 27, 2017",
    title: "9th Gurupooja",
    description: "The sacred installation of the Gurupooja Stone established a permanent spiritual anchor. Alongside practical offerings like dustbin bags for cleanliness and refined Alankaram, this year beautifully balanced divinity with discipline.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "images/9-Gurupooja.png",
    isMajor: false,
    era: "Maturity Years",
    year: 2017,
  },
  {
    id: "gurupooja-10",
    date: "January 16, 2018",
    title: "10th Gurupooja",
    description: "This Gurupooja was sanctified by the symbolic invitation of Mother Ganga, representing purity, flow, and renewal. The spiritual energy felt like a divine blessing of continuity, cleansing, and grace upon the entire Gurupooja lineage.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "images/10-Gurupooja.jpg",
    isMajor: true,
    era: "Maturity Years",
    year: 2018,
  },
  {
    id: "gurupooja-11",
    date: "February 4, 2019",
    title: "11th Gurupooja",
    description: "Continuing the sacred Gurupooja lineage with collective prayers, devotion, and remembrance of Sri Siva Swamigal's eternal guidance.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "images/11-Gurupooja.png",
    isMajor: false,
    era: "Maturity Years",
    year: 2019,
  },
  {
    id: "gurupooja-12",
    date: "January 24, 2020",
    title: "12th Gurupooja",
    description: "The twelfth year of uninterrupted remembrance strengthened the spiritual continuity and collective discipline of the devotee family.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "images/12-Gurupooja.png",
    isMajor: false,
    era: "Maturity Years",
    year: 2020,
  },
  {
    id: "gurupooja-13",
    date: "February 11, 2021",
    title: "13th Gurupooja",
    description: "Amid changing times, devotion remained unshaken as prayers and remembrance flowed in quiet surrender at the Guru's feet.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop",
    isMajor: false,
    era: "Contemporary Years",
    year: 2021,
  },
  {
    id: "gurupooja-14",
    date: "February 4, 2022",
    title: "14th Gurupooja",
    description: "The Gurupooja continued as a living tradition, nurturing resilience, faith, and inner stillness through the Guru's unseen grace.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop",
    isMajor: false,
    era: "Contemporary Years",
    year: 2022,
  },
  {
    id: "gurupooja-15",
    date: "February 4, 2023",
    title: "15th Gurupooja",
    description: "Fifteen years of sacred remembrance marked an unbroken stream of devotion, seva, and silent transformation guided by the Guru's presence.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop",
    isMajor: false,
    era: "Contemporary Years",
    year: 2023,
  },
  {
    id: "gurupooja-16",
    date: "February 4, 2024",
    title: "16th Gurupooja",
    description: "The sixteenth Gurupooja reflected maturity in faith, where devotion deepened into silent surrender and steady spiritual discipline.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop",
    isMajor: false,
    era: "Contemporary Years",
    year: 2024,
  },
  {
    id: "gurupooja-17",
    date: "February 4, 2025",
    title: "17th Gurupooja",
    description: "The seventeenth Gurupooja stood as a timeless offering of gratitude, reaffirming the Guru–Shishya bond across generations of seekers.",
    mediaType: "photos",
    link: "",
    thumbnailUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop",
    isMajor: false,
    era: "Contemporary Years",
    year: 2025,
  },
];

/**
 * Events grouped by era for easier navigation and display
 */
export const TIMELINE_BY_ERA: Era[] = [
  {
    name: "Foundation Years",
    period: "2009 - 2012",
    description: "The sacred beginning of the Gurupooja tradition, establishing the foundation of devotion and community.",
    events: TIMELINE_EVENTS.filter((e) => e.era === "Foundation Years"),
  },
  {
    name: "Expansion Years",
    period: "2013 - 2016",
    description: "A period of growth and structured spiritual propagation, expanding the reach and depth of the tradition.",
    events: TIMELINE_EVENTS.filter((e) => e.era === "Expansion Years"),
  },
  {
    name: "Maturity Years",
    period: "2017 - 2020",
    description: "The tradition deepened with permanent installations and refined practices, balancing divinity with discipline.",
    events: TIMELINE_EVENTS.filter((e) => e.era === "Maturity Years"),
  },
  {
    name: "Contemporary Years",
    period: "2021 - 2025",
    description: "Continuing the unbroken lineage with resilience and faith, nurturing inner transformation across changing times.",
    events: TIMELINE_EVENTS.filter((e) => e.era === "Contemporary Years"),
  },
];

/**
 * Get all major milestone events
 */
export const MAJOR_EVENTS = TIMELINE_EVENTS.filter((e) => e.isMajor);

/**
 * Get events by year
 */
export const getEventsByYear = (year: number): TimelineEvent[] => {
  return TIMELINE_EVENTS.filter((e) => e.year === year);
};

/**
 * Get events by era
 */
export const getEventsByEra = (eraName: string): TimelineEvent[] => {
  return TIMELINE_EVENTS.filter((e) => e.era === eraName);
};
