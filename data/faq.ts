import type { FaqItem } from "@/types/content";

// Answers come from the PokéPod README and source. Where the project is silent, the answer says so.
export const FAQ: FaqItem[] = [
  {
    q: "What is PokéPod?",
    a: "PokéPod is an unofficial Pokémon research, challenge and discovery companion built with Flutter. It treats the Pokédex as a research instrument: you browse all species, open research dossiers, compare specimens, build teams, organise collections and play a daily Who's That Pokémon? challenge.",
  },
  {
    q: "Is PokéPod free?",
    a: "The project documents no purchase, subscription, advertising or account. The Android APK is shared through a Google Drive link, and the source code is MIT-licensed on GitHub. No store listing or pricing has been announced.",
  },
  {
    q: "Where can I get it? Is it on Google Play?",
    a: "There is no Google Play listing at the moment. The Android APK is shared on Google Drive, so it is installed outside the Play Store and Android may ask you to allow installs from your browser or file manager.",
  },
  {
    q: "Which Pokémon are included?",
    a: "National Pokédex species 1–1025, across all nine generations. Alternate forms such as Mega and regional variants are not catalogued yet.",
  },
  {
    q: "Is an internet connection required?",
    a: "The first time you open something, yes: data comes from PokéAPI and artwork from the PokeAPI sprites repository. Anything you've opened before is served from a cache on your device. Artwork you have never loaded can't appear offline, and the daily challenge answer is chosen without needing a connection.",
  },
  {
    q: "Is PokéPod available on iOS?",
    a: "No. PokéPod is built and tested for Android. The project contains iOS, web and desktop folders from the Flutter template, but they have not been built or tested, so nothing is promised there.",
  },
  {
    q: "Does PokéPod support Android widgets?",
    a: "Yes. There are four Specimen of the Day home-screen widget sizes: compact, small, medium and large. Widgets and reminders are Android-only.",
  },
  {
    q: "Can I customise the app?",
    a: "Yes. Choose a System, Dark or Light theme, one of five accent colours (Emerald, Cyan, Amber, Violet, Rose), turn sound effects on or off, and opt in to daily and streak reminders. You also pick your trainer nickname and avatar.",
  },
  {
    q: "Does PokéPod store my progress? Is it synced?",
    a: "Your research progress, favourites, collections, teams, notes, profile and daily-challenge history are stored only on your device. There is no account and no cloud sync. Back up progress copies a backup to your clipboard as text, and uninstalling the app or clearing its data erases your local progress.",
  },
  {
    q: "How can I report a bug or suggest a feature?",
    a: "Open an issue on the PokéPod GitHub repository. No other contact channel is published yet.",
  },
];
