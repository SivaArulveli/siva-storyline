export interface TimelineEventData {
  date: string;
  title: string;
  description: string;
  mediaType: "youtube" | "photos" | "image" | "video" | "none";
  mediaUrl?: string;
  thumbnailUrl?: string;
  link?: string;
  isMajor: boolean;
}
