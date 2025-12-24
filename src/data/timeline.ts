/**
 * timeline.ts
 * Sacred Gurupooja Timeline with Tamil + English language support
 */

/* ======================================================
   1. Language & Localization
====================================================== */

export type Language = "en" | "ta";

export type LocalizedText = {
  en: string;
  ta: string;
};

/* ======================================================
   2. Core Data Models
====================================================== */

export interface TimelineEvent {
  id: string;
  date: string;
  title: LocalizedText;
  description: LocalizedText;
  mediaType?: "youtube" | "photos" | "image" | "video" | "none";
  link?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  isMajor?: boolean;
  era: string;
  year: number;
}

export type Era = {
  name: LocalizedText;
  period: string;
  description: LocalizedText;
  events: TimelineEvent[];
};

/* ======================================================
   3. Timeline Events (2009–2025)
====================================================== */

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "gurupooja-1",
    date: "January 26, 2009",
    title: { en: "1st Gurupooja", ta: "முதல் குருபூஜை" },
    description: {
      en: "All Siva Anbers were invited and honored equally with Parivattam. A Sadhu was invited as a guest, establishing equality and collective devotion.",
      ta: "அனைத்து சிவ அன்பர்களும் அழைக்கப்பட்டு சமமாக பரிவட்டம் வழங்கப்பட்டது. ஒரு சாதுவும் விருந்தினராக அழைக்கப்பட்டு சமபாவம் நிறுவப்பட்டது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/1-Gurupooja.png",
    isMajor: true,
    era: "Samabhāva Nivedanam",
    year: 2009,
  },
  {
    id: "gurupooja-2",
    date: "January 14, 2010",
    title: { en: "2nd Gurupooja", ta: "இரண்டாம் குருபூஜை" },
    description: {
      en: "Focus on clarity photography, flower decoration, and Siva banner display.",
      ta: "தெளிவான புகைப்பட பதிவு, மலர் அலங்காரம் மற்றும் சிவா பதாகை காட்சிப்படுத்தல் முக்கியமாக இருந்தது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/2-Gurupooja.png",
    era: "Samabhāva Nivedanam",
    year: 2010,
  },
  {
    id: "gurupooja-3",
    date: "February 2, 2011",
    title: { en: "3rd Gurupooja", ta: "மூன்றாம் குருபூஜை" },
    description: {
      en: "Sivapoojai Anbers were formally introduced.",
      ta: "சிவபூஜை அன்பர்கள் முறையாக அறிமுகப்படுத்தப்பட்டனர்.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/3-Gurupooja.png",
    era: "Samabhāva Nivedanam",
    year: 2011,
  },
  {
    id: "gurupooja-4",
    date: "January 22, 2012",
    title: { en: "4th Gurupooja", ta: "நான்காம் குருபூஜை" },
    description: {
      en: "Group chanting of the Siva Moola Mantra with Siva poojai and flower decoration.",
      ta: "சிவ மூல மந்திர குழு ஜபம், சிவபூஜை மற்றும் மலர் அலங்காரம் நடைபெற்றது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/4-Gurupooja.png",
    era: "Samabhāva Nivedanam",
    year: 2012,
  },
  {
    id: "gurupooja-5",
    date: "February 9, 2013",
    title: { en: "5th Gurupooja", ta: "ஐந்தாம் குருபூஜை" },
    description: {
      en: "Slokas chanting, Siva alankaram arch, pooja books, and Sankalpam including all Siva members.",
      ta: "ஸ்லோக ஜபம், சிவ அலங்கார வளைவு, பூஜை நூல்கள் மற்றும் அனைத்து சிவ அன்பர்களின் பெயர்களுடன் சங்கல்பம் நடைபெற்றது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/5-Gurupooja.png",
    era: "Mantra–Alankāra Arpaṇam",
    year: 2013,
  },
  {
    id: "gurupooja-6",
    date: "January 30, 2014",
    title: { en: "6th Gurupooja", ta: "ஆறாம் குருபூஜை" },
    description: {
      en: "Siva photo decoration, introduction of the first bell, and Sadhu invitation for Annadhanam.",
      ta: "சிவ புகைப்பட அலங்காரம், முதல் மணி நிறுவல் மற்றும் அன்னதானத்திற்காக சாதுவின் வருகை நடைபெற்றது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/6-Gurupooja.png",
    era: "Mantra–Alankāra Arpaṇam",
    year: 2014,
  },
  {
    id: "gurupooja-7",
    date: "January 20, 2015",
    title: { en: "7th Gurupooja", ta: "ஏழாம் குருபூஜை" },
    description: {
      en: "Paal Abhishegam for all, Ganga invitation, Bhajan books distribution, Bilvashtakam chanting, and Siddhargal names display.",
      ta: "அனைவருக்கும் பால் அபிஷேகம், கங்கை அழைப்பு, பஜனை நூல்கள் விநியோகம், பில்வாஷ்டகம் ஜபம் மற்றும் சித்தர்கள் பெயர் காட்சிப்படுத்தல் நடைபெற்றது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/7-Gurupooja.png",
    era: "Mantra–Alankāra Arpaṇam",
    year: 2015,
  },
  {
    id: "gurupooja-8",
    date: "February 8, 2016",
    title: { en: "8th Gurupooja", ta: "எட்டாம் குருபூஜை" },
    description: {
      en: "Visit of Thiru Annamalai Swamigal, Siva poojai, school book and sweet distribution, and Thevaram book pooja.",
      ta: "திரு அண்ணாமலை சுவாமிகள் வருகை, சிவபூஜை, பள்ளி புத்தகங்கள் மற்றும் இனிப்புகள் விநியோகம், தேவாரம் நூல் பூஜை நடைபெற்றது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/8-Gurupooja.png",
    era: "Mantra–Alankāra Arpaṇam",
    year: 2016,
  },
  {
    id: "gurupooja-9",
    date: "January 27, 2017",
    title: { en: "9th Gurupooja", ta: "ஒன்பதாம் குருபூஜை" },
    description: {
      en: "Installation of Gurupooja stone, Ganga Ma offering, Alankaram, and cleanliness initiatives.",
      ta: "குருபூஜை கல் நிறுவல், கங்கை மாதா அர்ப்பணம், அலங்காரம் மற்றும் தூய்மைச் சேவைகள் நடைபெற்றது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/9-Gurupooja.png",
    era: "Sevā–Saṅgama Arpaṇam",
    year: 2017,
  },
  {
    id: "gurupooja-10",
    date: "January 16, 2018",
    title: { en: "10th Gurupooja", ta: "பத்தாம் குருபூஜை" },
    description: {
      en: "Siddhargal Seettu Murai, reception arrangements, and prasadam distribution with care.",
      ta: "சித்தர்கள் சீட்டு முறை, வரவேற்பு ஏற்பாடுகள் மற்றும் பொறுப்புடன் பிரசாத விநியோகம் நடைபெற்றது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/10-Gurupooja.jpg",
    isMajor: true,
    era: "Sevā–Saṅgama Arpaṇam",
    year: 2018,
  },
  {
    id: "gurupooja-11",
    date: "February 4, 2019",
    title: { en: "11th Gurupooja", ta: "பதினொன்றாம் குருபூஜை" },
    description: {
      en: "Special focus on Thirumurai books, devotional dance by Kasi Thotti Gurumoorthy Swamigal, and Siva Vibhoothi.",
      ta: "திருமுறை நூல்கள் மீது கவனம், காசி தொட்டி குருமூர்த்தி சுவாமிகளின் பக்தி நடனம் மற்றும் சிவ விபூதி வழங்கல் நடைபெற்றது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/11-Gurupooja.png",
    era: "Sevā–Saṅgama Arpaṇam",
    year: 2019,
  },
  {
    id: "gurupooja-12",
    date: "January 24, 2020",
    title: { en: "12th Gurupooja", ta: "பன்னிரண்டாம் குருபூஜை" },
    description: {
      en: "Isai Arpanam bhajans, Siva Iyarkkai introduction, discourse by Bhaskar Ayya, and transport seva.",
      ta: "இசை அர்ப்பணம் பஜனைகள், சிவ இயற்கை அறிமுகம், பாஸ்கர் அய்யாவின் உரை மற்றும் போக்குவரத்து சேவை நடைபெற்றது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/12-Gurupooja.png",
    era: "Sevā–Saṅgama Arpaṇam",
    year: 2020,
  },
  {
    id: "gurupooja-13",
    date: "February 11, 2021",
    title: { en: "13th Gurupooja", ta: "பதிமூன்றாம் குருபூஜை" },
    description: {
      en: "Pann Isai offerings, virtual and live streaming Gurupooja, and Sadhu visits.",
      ta: "பண் இசை அர்ப்பணம், இணைய வழி மற்றும் நேரடி ஒளிபரப்பு குருபூஜை, சாதுக்கள் வருகை நடைபெற்றது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/13-gurupooja.jpeg",
    era: "Sākṣāt Anubhava Arpaṇam",
    year: 2021,
  },
  {
    id: "gurupooja-14",
    date: "February 1, 2022",
    title: { en: "14th Gurupooja", ta: "பதிநான்காம் குருபூஜை" },
    description: {
      en: "Gurupooja celebrated across Anbers’ homes with distribution of sacred prasadam including Nataraja Abhisheka Vibhoothi.",
      ta: "பல அன்பர்களின் இல்லங்களில் குருபூஜை நடைபெற்றது; நடராஜ அபிஷேக விபூதி உள்ளிட்ட பிரசாதங்கள் வழங்கப்பட்டன.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/14-gurupooja.jpeg",
    era: "Sākṣāt Anubhava Arpaṇam",
    year: 2022,
  },
  {
    id: "gurupooja-15",
    date: "January 21, 2023",
    title: { en: "15th Gurupooja", ta: "பதினைந்தாம் குருபூஜை" },
    description: {
      en: "Large Linga alankaram, offering of self-made malas, and involvement of local neighbors.",
      ta: "பெரிய லிங்க அலங்காரம், தாங்களே தயாரித்த மாலைகள் அர்ப்பணம் மற்றும் உள்ளூர் அயலாரின் பங்கேற்பு நடைபெற்றது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/15-gurupooja.jpeg",
    era: "Sākṣāt Anubhava Arpaṇam",
    year: 2023,
  },
  {
    id: "gurupooja-16",
    date: "January 21, 2024",
    title: { en: "16th Gurupooja", ta: "பதினாறாம் குருபூஜை" },
    description: {
      en: "Kids Seva, Medai Palakai arrangements for Abhishekam, Iyarkkai Arpanam, and recorded Gurupooja Satsang.",
      ta: "குழந்தைகள் சேவை, அபிஷேகத்திற்கு மேடை பலகை ஏற்பாடு, இயற்கை அர்ப்பணம் மற்றும் பதிவு செய்யப்பட்ட குருபூஜை சத்சங்கம் நடைபெற்றது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/16-gurupooja.jpeg",
    era: "Sākṣāt Anubhava Arpaṇam",
    year: 2024,
  },
  {
    id: "gurupooja-17",
    date: "January 29, 2025",
    title: { en: "17th Gurupooja", ta: "பதினேழாம் குருபூஜை" },
    description: {
      en: "Varkari Yatra, Siva book release, homam and abhishekam for all, continuous 6pm–6pm Gurupooja, and well-packed prasadam distribution.",
      ta: "வர்கரி யாத்திரை, சிவ நூல் வெளியீடு, அனைவருக்கும் ஹோமம் மற்றும் அபிஷேகம், மாலை 6 முதல் மறுநாள் 6 வரை குருபூஜை மற்றும் சிறப்பாக தொகுக்கப்பட்ட பிரசாத விநியோகம் நடைபெற்றது.",
    },
    mediaType: "photos",
    thumbnailUrl: "images/17-gurupooja.jpeg",
    isMajor: true,
    era: "Sākṣāt Anubhava Arpaṇam",
    year: 2025,
  },
];

/* ======================================================
   4. Era Grouping
====================================================== */

export const TIMELINE_BY_ERA: Era[] = [
  {
    name: { en: "Samabhāva Nivedanam", ta: "சமபாவ நிவேதனம்" },
    period: "2009 – 2012",
    description: {
      en: "Foundational years rooted in equality and collective devotion.",
      ta: "சமத்துவம் மற்றும் கூட்டு பக்தியை அடிப்படையாகக் கொண்ட ஆரம்ப ஆண்டுகள்.",
    },
    events: TIMELINE_EVENTS.filter(e => e.era === "Samabhāva Nivedanam"),
  },
  {
    name: { en: "Mantra–Alankāra Arpaṇam", ta: "மந்திர–அலங்கார அர்ப்பணம்" },
    period: "2013 – 2016",
    description: {
      en: "Years of mantra, sacred form, sankalpam, and scripture.",
      ta: "மந்திரம், அலங்காரம், சங்கல்பம் மற்றும் சாஸ்திர அடிப்படையின் ஆண்டுகள்.",
    },
    events: TIMELINE_EVENTS.filter(e => e.era === "Mantra–Alankāra Arpaṇam"),
  },
  {
    name: { en: "Sevā–Saṅgama Arpaṇam", ta: "சேவை–சங்கம அர்ப்பணம்" },
    period: "2017 – 2020",
    description: {
      en: "Devotion expressed through service and community care.",
      ta: "சேவை மற்றும் சமூக பராமரிப்பாக வெளிப்பட்ட பக்தி.",
    },
    events: TIMELINE_EVENTS.filter(e => e.era === "Sevā–Saṅgama Arpaṇam"),
  },
  {
    name: { en: "Sākṣāt Anubhava Arpaṇam", ta: "சாக்ஷாத் அனுபவ அர்ப்பணம்" },
    period: "2021 – 2025",
    description: {
      en: "Gurupooja as a living, immersive experience.",
      ta: "அனுபவ குருபூஜை.",
    },
    events: TIMELINE_EVENTS.filter(e => e.era === "Sākṣāt Anubhava Arpaṇam"),
  },
];

/* ======================================================
   5. Helpers
====================================================== */

export const getText = (text: LocalizedText, lang: Language): string =>
  text[lang] ?? text.en;

export const getEventsByYear = (year: number): TimelineEvent[] =>
  TIMELINE_EVENTS.filter(e => e.year === year);

export const getEventsByEra = (eraName: string): TimelineEvent[] =>
  TIMELINE_EVENTS.filter(e => e.era === eraName);
