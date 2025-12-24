/**
 * timeline.ts
 * Sacred Timeline of Siva Swamigal (2006–2025)
 * Grouped by the Four Pillars of Guru
 * Language support: English + Tamil
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
   2. Guru Pillars
====================================================== */

export type GuruPillarKey =
  | "GURU_VARDAAN"
  | "GURU_PYAAR"
  | "GURU_VAATHAVARAN"
  | "GURU_ANUSHASAN";

export interface GuruPillar {
  key: GuruPillarKey;
  title: LocalizedText;
  meaning: LocalizedText;
  description: LocalizedText;
  whyThisGrouping: LocalizedText;
}

/* ======================================================
   3. Timeline Models
====================================================== */

export interface TimelineEvent {
  id: string;
  date: string;
  title: LocalizedText;
  description: LocalizedText;
  mediaType?: "image" | "photos" | "video" | "youtube" | "none";
  mediaUrl?: string;
  thumbnailUrl?: string;
  isMajor?: boolean;
  pillar: GuruPillarKey;
  year: number;
}

export interface Era {
  name: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
  events: TimelineEvent[];
}

/* ======================================================
   4. Guru Pillars (Clickable Cards)
====================================================== */

export const GURU_PILLARS: GuruPillar[] = [
  {
    key: "GURU_VARDAAN",
    title: { en: "Guru Vardaan", ta: "குரு வரதான்" },
    meaning: { en: "Guru’s Divine Grace", ta: "குருவின் தெய்வீக அருள்" },
    description: {
      en:
        "The divine empowerment and spiritual inheritance bestowed by the Guru, enabling awakening and continuity beyond form.",
      ta:
        "குருவின் ரூபத்தைத் தாண்டி ஆன்மீக எழுச்சியும் தொடர்ச்சியும் அளிக்கும் தெய்வீக அருள்.",
    },
    whyThisGrouping: {
      en:
        "Moments of grace, transmission, initiation, and irreversible spiritual turning points.",
      ta:
        "அருள் வெளிப்பட்ட மற்றும் ஆன்மீக திருப்புமுனைகள் நிகழ்ந்த தருணங்கள்.",
    },
  },
  {
    key: "GURU_PYAAR",
    title: { en: "Guru Pyaar", ta: "குரு பிரேமை" },
    meaning: { en: "Guru’s Divine Love", ta: "குருவின் அன்பு" },
    description: {
      en:
        "The unconditional love of the Guru that nurtures inclusion, belonging, and emotional safety.",
      ta:
        "அனைவரையும் அரவணைக்கும், பாதுகாப்பும் உறவுமளிக்கும் குருவின் அன்பு.",
    },
    whyThisGrouping: {
      en:
        "Events reflecting equality, compassion, and inclusive care.",
      ta:
        "சமத்துவம், கருணை, அனைவரையும் இணைத்த நிகழ்வுகள்.",
    },
  },
  {
    key: "GURU_VAATHAVARAN",
    title: { en: "Guru Vaathavaran", ta: "குரு வாச்தவாரம்" },
    meaning: { en: "Guru’s Spiritual Environment", ta: "குருவின் ஆன்மீக சூழல்" },
    description: {
      en:
        "The sacred atmosphere created by the Guru through rituals, space, sound, and collective vibration.",
      ta:
        "பூஜை, இடம், ஓசை மற்றும் குழு அதிர்வால் உருவாகும் புனித சூழல்.",
    },
    whyThisGrouping: {
      en:
        "Events focused on consecration, ritual, sacred space, and atmosphere.",
      ta:
        "அபிஷேகம், பூஜை, புனித சூழல் சார்ந்த நிகழ்வுகள்.",
    },
  },
  {
    key: "GURU_ANUSHASAN",
    title: { en: "Guru Anushasan", ta: "குரு அனுஷாசனம்" },
    meaning: { en: "Guru’s Discipline", ta: "குருவின் ஒழுக்கம்" },
    description: {
      en:
        "The disciple’s responsibility to live the Guru’s path with discipline, service, and continuity.",
      ta:
        "குருவின் வழியை ஒழுங்குடன் சேவையாக வாழும் சிஷ்யரின் கடமை.",
    },
    whyThisGrouping: {
      en:
        "Events showing structure, responsibility, continuity, and sustained practice.",
      ta:
        "தொடர்ச்சி, பொறுப்பு மற்றும் ஒழுங்கு வெளிப்பட்ட நிகழ்வுகள்.",
    },
  },
];

/* ======================================================
   5. Timeline Events (2006–2025)
====================================================== */

export const TIMELINE_EVENTS: TimelineEvent[] = [
  /* ---------- 2006–2008 ---------- */

  {
    id: "siva-80th-2006",
    date: "June 7, 2006",
    title: {
      en: "Siva Swamigal Sathiyaptha Poorthi (80th)",
      ta: "சிவா சுவாமிகள் சத்தியப்த பூர்த்தி (80)",
    },
    description: {
      en:
        "Siva Swamigal’s 80th birthday was celebrated grandly at Chidambaram Nataraja Temple with Homa and Kala Abhishekam to Ananda Nataraja.",
      ta:
        "சிதம்பரம் நடராஜர் ஆலயத்தில் ஹோமம் மற்றும் ஆனந்த நடராஜருக்கு கால அபிஷேகத்துடன் 80வது பிறந்த நாள் கொண்டாடப்பட்டது.",
    },
    mediaType: "image",
    mediaUrl: "images/siva80th.JPG",
    pillar: "GURU_VARDAAN",
    year: 2006,
  },
  {
    id: "siva-speech-2007",
    date: "June 20, 2007",
    title: {
      en: "Discourse on Manitha Piravi",
      ta: "மனித பிறவியின் நோக்கம் – உரை",
    },
    description: {
      en:
        "Siva Swamigal spoke on the purpose of human birth and the responsibility of meaningful living.",
      ta:
        "மனித பிறவியின் நோக்கும் வாழ்வின் பொறுப்பும் குறித்து சிவா சுவாமிகள் உரையாற்றினார்.",
    },
    mediaType: "youtube",
    mediaUrl: "https://youtu.be/p-FwIWUBx2I",
    pillar: "GURU_VARDAAN",
    year: 2007,
  },
  {
    id: "mahasamadhi-2008",
    date: "February 7, 2008",
    title: { en: "Mahasamadhi", ta: "மகாசமாதி" },
    description: {
      en:
        "Siva Swamigal attained Mahasamadhi at 5:20 AM on Thai Amavasya.",
      ta:
        "தை அமாவாசை அன்று காலை 5:20 மணிக்கு சிவா சுவாமிகள் மகாசமாதி அடைந்தார்.",
    },
    mediaType: "image",
    mediaUrl: "images/JeevaSamadhiDay.png",
    isMajor: true,
    pillar: "GURU_VARDAAN",
    year: 2008,
  },
  {
    id: "bhana-lingam-2008",
    date: "September 30, 2008",
    title: { en: "Siva Bhana Lingam Arrival", ta: "சிவ பாண லிங்கம் வருகை" },
    description: {
      en:
        "Anbers undertook a sacred journey to Kasi and Yamuna to bring the Siva Bhana Lingam for Siva Adhistanam.",
      ta:
        "சிவ ஆதிஸ்தானத்திற்காக பாண லிங்கத்தை கொண்டு வர காசி–யமுனா யாத்திரை மேற்கொள்ளப்பட்டது.",
    },
    mediaType: "image",
    mediaUrl: "images/SivaBhanaLingam.JPG",
    pillar: "GURU_VARDAAN",
    year: 2008,
  },

  /* ---------- Gurupooja Years 2009–2025 ---------- */

  {
    id: "gurupooja-2009",
    date: "January 26, 2009",
    title: { en: "1st Gurupooja", ta: "முதல் குருபூஜை" },
    description: {
      en:
        "All Siva Anbers were invited and honored equally with Parivattam. A Sadhu was invited as a guest.",
      ta:
        "அனைத்து சிவ அன்பர்களும் சமமாக பரிவட்டம் பெற்றனர்; ஒரு சாதுவும் விருந்தினராக அழைக்கப்பட்டார்.",
    },
    mediaType: "image",
    mediaUrl: "images/1-Gurupooja.png",
    pillar: "GURU_VARDAAN",
    year: 2009,
  },
  {
    id: "kumbabhishegam-2009",
    date: "February 8, 2009",
    title: {
      en: "Siva Adhistanam Kumbabhishekam",
      ta: "சிவ ஆதிஸ்தான கும்பாபிஷேகம்",
    },
    description: {
      en:
        "Grand Kumbabhishekam with Go Pooja and Gaja Pooja at Siva Adhistanam.",
      ta:
        "கோ பூஜை, கஜ பூஜையுடன் கும்பாபிஷேகம் நடைபெற்றது.",
    },
 mediaType: "image",
    mediaUrl: "images/kumbabishegam.JPG",
    pillar: "GURU_VARDAAN",
    year: 2009,
  },

  { id: "gurupooja-2010", date: "January 14, 2010", title: { en: "2nd Gurupooja", ta: "இரண்டாம் குருபூஜை" }, description: { en: "Clarity photography, flower decoration, and Siva banner display.", ta: "தெளிவான புகைப்பட பதிவு, மலர் அலங்காரம், சிவா பதாகை." }, mediaType: "image", mediaUrl: "images/2-Gurupooja.png", pillar: "GURU_PYAAR", year: 2010 },
  { id: "gurupooja-2011", date: "February 2, 2011", title: { en: "3rd Gurupooja", ta: "மூன்றாம் குருபூஜை" }, description: { en: "Sivapoojai Anbers were introduced.", ta: "சிவபூஜை அன்பர்கள் அறிமுகம்." }, mediaType: "image", mediaUrl: "images/3-Gurupooja.png", pillar: "GURU_PYAAR", year: 2011 },
  { id: "gurupooja-2012", date: "January 22, 2012", title: { en: "4th Gurupooja", ta: "நான்காம் குருபூஜை" }, description: { en: "Group Siva Moola Mantra chanting and Siva poojai.", ta: "சிவ மூல மந்திர குழு ஜபம், சிவபூஜை." }, mediaType: "image", mediaUrl: "images/4-Gurupooja.png", pillar: "GURU_PYAAR", year: 2012 },
  { id: "gurupooja-2013", date: "February 9, 2013", title: { en: "5th Gurupooja", ta: "ஐந்தாம் குருபூஜை" }, description: { en: "Slokas chanting, alankaram arch, Sankalpam with all names.", ta: "ஸ்லோக ஜபம், அலங்கார வளைவு, சங்கல்பம்." }, mediaType: "image", mediaUrl: "images/5-Gurupooja.png", pillar: "GURU_PYAAR", year: 2013 },
  { id: "gurupooja-2014", date: "January 30, 2014", title: { en: "6th Gurupooja", ta: "ஆறாம் குருபூஜை" }, description: { en: "Siva photo decoration, first bell, Sadhu annadhanam.", ta: "சிவ புகைப்பட அலங்காரம், முதல் மணி, அன்னதானம்." }, mediaType: "image", mediaUrl: "images/6-Gurupooja.png", pillar: "GURU_PYAAR", year: 2014 },
  { id: "gurupooja-2015", date: "January 20, 2015", title: { en: "7th Gurupooja", ta: "ஏழாம் குருபூஜை" }, description: { en: "Paal Abhishegam for all, Ganga invitation, Bhajan books.", ta: "அனைவருக்கும் பால் அபிஷேகம், கங்கை அழைப்பு." }, mediaType: "image", mediaUrl: "images/7-Gurupooja.png", pillar: "GURU_VAATHAVARAN", year: 2015 },
  { id: "gurupooja-2016", date: "February 8, 2016", title: { en: "8th Gurupooja", ta: "எட்டாம் குருபூஜை" }, description: { en: "Thiru Annamalai Swamigal visit, school outreach, Thevaram pooja.", ta: "திரு அண்ணாமலை சுவாமிகள் வருகை, தேவாரம் பூஜை." }, mediaType: "image", mediaUrl: "images/8-Gurupooja.png", pillar: "GURU_VAATHAVARAN", year: 2016 },
  { id: "gurupooja-2017", date: "January 27, 2017", title: { en: "9th Gurupooja", ta: "ஒன்பதாம் குருபூஜை" }, description: { en: "Gurupooja stone, Ganga Ma, Alankaram.", ta: "குருபூஜை கல், கங்கை மாதா, அலங்காரம்." }, mediaType: "image", mediaUrl: "images/9-Gurupooja.png", pillar: "GURU_VAATHAVARAN", year: 2017 },
  { id: "gurupooja-2018", date: "January 16, 2018", title: { en: "10th Gurupooja", ta: "பத்தாம் குருபூஜை" }, description: { en: "Siddhargal seettu murai, reception, prasadam.", ta: "சித்தர்கள் சீட்டு முறை, வரவேற்பு, பிரசாதம்." }, mediaType: "image", mediaUrl: "images/10-Gurupooja.jpg", pillar: "GURU_VAATHAVARAN", year: 2018 },
  { id: "gurupooja-2019", date: "February 4, 2019", title: { en: "11th Gurupooja", ta: "பதினொன்றாம் குருபூஜை" }, description: { en: "Thirumurai focus, dance, Siva vibhoothi.", ta: "திருமுறை, நடனம், சிவ விபூதி." }, mediaType: "image", mediaUrl: "images/11-Gurupooja.png", pillar: "GURU_VAATHAVARAN", year: 2019 },
  { id: "gurupooja-2020", date: "January 24, 2020", title: { en: "12th Gurupooja", ta: "பன்னிரண்டாம் குருபூஜை" }, description: { en: "Isai arpanam, Siva Iyarkkai, logistics seva.", ta: "இசை அர்ப்பணம், சிவ இயற்கை, சேவை." }, mediaType: "image", mediaUrl: "images/12-Gurupooja.png", pillar: "GURU_ANUSHASAN", year: 2020 },
  { id: "gurupooja-2021", date: "February 11, 2021", title: { en: "13th Gurupooja", ta: "பதிமூன்றாம் குருபூஜை" }, description: { en: "Pann isai, virtual/live streaming.", ta: "பண் இசை, நேரடி/மெய்நிகர் ஒளிபரப்பு." }, mediaType: "image", mediaUrl: "images/13-gurupooja.jpeg", pillar: "GURU_ANUSHASAN", year: 2021 },
  { id: "gurupooja-2022", date: "February 1, 2022", title: { en: "14th Gurupooja", ta: "பதிநான்காம் குருபூஜை" }, description: { en: "Gurupooja across homes, sacred prasadam.", ta: "வீடுகளில் குருபூஜை, பிரசாத விநியோகம்." }, mediaType: "image", mediaUrl: "images/14-gurupooja.jpeg", pillar: "GURU_ANUSHASAN", year: 2022 },
  { id: "gurupooja-2023", date: "January 21, 2023", title: { en: "15th Gurupooja", ta: "பதினைந்தாம் குருபூஜை" }, description: { en: "Large Linga alankaram, neighbor involvement.", ta: "பெரிய லிங்க அலங்காரம், அயலார் பங்கேற்பு." }, mediaType: "image", mediaUrl: "images/15-gurupooja.jpeg", pillar: "GURU_ANUSHASAN", year: 2023 },
  { id: "gurupooja-2024", date: "January 21, 2024", title: { en: "16th Gurupooja", ta: "பதினாறாம் குருபூஜை" }, description: { en: "Kids seva, Iyarkkai arpanam, satsang recording.", ta: "குழந்தைகள் சேவை, இயற்கை அர்ப்பணம்." }, mediaType: "image", mediaUrl: "images/16-gurupooja.jpeg", pillar: "GURU_ANUSHASAN", year: 2024 },
  {
    id: "gurupooja-2025",
    date: "January 29, 2025",
    title: { en: "17th Gurupooja", ta: "பதினேழாம் குருபூஜை" },
    description: {
      en:
        "Varkari Yatra, Siva book release, homam and abhishekam for all, continuous 6pm–6pm Gurupooja.",
      ta:
        "வர்கரி யாத்திரை, சிவ நூல் வெளியீடு, அனைவருக்கும் ஹோமம் மற்றும் அபிஷேகம்.",
    },
    mediaType: "image",
    mediaUrl: "images/17-gurupooja.jpeg",
    isMajor: true,
    pillar: "GURU_ANUSHASAN",
    year: 2025,
  },
];

/* ======================================================
   6. Helpers
====================================================== */

export const getText = (text: LocalizedText, lang: Language): string =>
  text[lang] ?? text.en;

export const getEventsByPillar = (pillar: GuruPillarKey): TimelineEvent[] =>
  TIMELINE_EVENTS.filter(e => e.pillar === pillar);

export const TIMELINE_BY_ERA: Era[] = GURU_PILLARS.map((pillar) => ({
  name: pillar.title,
  period: pillar.meaning,
  description: pillar.description,
  events: getEventsByPillar(pillar.key),
}));
