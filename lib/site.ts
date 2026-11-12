function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000"; // development placeholder, never a real domain
}

export const SITE = {
  name: "PokéPod",
  tagline: "Beyond the Pokédex.",
  description:
    "PokéPod is an unofficial Pokémon research and discovery companion for Android: browse all 1,025 species, open research dossiers, compare, build teams and play a daily challenge.",
  url: resolveSiteUrl(),
  author: "ShakyaJU",
} as const;

export const LINKS = {
  github: "https://github.com/ShakyaJU/pokepod",
  issues: "https://github.com/ShakyaJU/pokepod/issues",
  notices: "https://github.com/ShakyaJU/pokepod/blob/main/THIRD_PARTY_NOTICES.md",
  authorProfile: "https://github.com/ShakyaJU",
  // Both links are taken from the app's README. Replace APK with a Play Store URL if one is ever published.
  apk: "https://drive.google.com/file/d/1FX1KTglpklE0uzv8gGRtavpW9SLwUpl8/view?usp=sharing",
  walkthrough: "https://drive.google.com/file/d/1mC15HkOd97j_yW7tOFx_2wqBNsXa5Kaf/view?usp=sharing",
  pokeapi: "https://pokeapi.co",
  sprites: "https://github.com/PokeAPI/sprites",
} as const;

export const DISCLAIMER =
  "PokéPod is an unofficial fan-made project and is not affiliated with, endorsed by, or sponsored by Nintendo, Game Freak, Creatures Inc., or The Pokémon Company. Pokémon and related names, characters and artwork are trademarks and copyrights of their respective owners.";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/#explore", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;
