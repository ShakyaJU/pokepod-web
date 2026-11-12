export type ClipId =
  | "discover" | "pokedex" | "constellation" | "dna" | "team" | "collections" | "whos-that"
  | "profile" | "achievements" | "journal" | "widgets" | "settings" | "backup" | "help"
  | "about" | "onboarding";

export interface ClipMeta {
  title: string;
  alt: string;
}

/** Screen recordings of the real app, converted from the repository's pokepod-gifs folder. */
export const CLIPS: Record<ClipId, ClipMeta> = {
  discover: { title: "Discover", alt: "PokéPod Discover screen showing the Specimen of the Day" },
  pokedex: { title: "Pokédex", alt: "Browsing, searching, filtering and sorting the Pokédex" },
  constellation: { title: "Evolution Constellation", alt: "Exploring an evolution family as an interactive graph" },
  dna: { title: "Pokémon DNA", alt: "Comparing two Pokémon side by side in Pokémon DNA" },
  team: { title: "Team Architect", alt: "Building a team and reading its defensive and offensive analysis" },
  collections: { title: "Collections", alt: "Collections, showcase and Generation Dex Progress" },
  "whos-that": { title: "Who's That Pokémon?", alt: "Playing the Who's That Pokémon? daily challenge" },
  profile: { title: "Trainer profile", alt: "Trainer profile with avatar, statistics and menu" },
  achievements: { title: "Achievements", alt: "Achievements with progress bars and rarity tiers" },
  journal: { title: "Research journal", alt: "The research journal collecting personal notes" },
  widgets: { title: "Home-screen widgets", alt: "PokéPod Specimen of the Day widgets on an Android home screen" },
  settings: { title: "Settings", alt: "Settings for theme, accent colour, notifications, sound and data" },
  backup: { title: "Backup and restore", alt: "Backing up and restoring progress" },
  help: { title: "Help & User Guide", alt: "The searchable Help and User Guide" },
  about: { title: "About", alt: "About screen with credits, licences and disclaimer" },
  onboarding: { title: "First-launch onboarding", alt: "The first-launch guided tour of PokéPod" },
};

/** Intrinsic size of the poster images in /public/posters. */
export const POSTER = { width: 540, height: 1125 } as const;
