import type { ClipId } from "@/data/clips";

export interface Feature {
  id: string;
  group: "Explore" | "Analyse & build" | "Play & progress" | "Your device";
  title: string;
  kicker: string;
  summary: string;
  points: string[];
  clip?: ClipId;
  androidOnly?: boolean;
  note?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
