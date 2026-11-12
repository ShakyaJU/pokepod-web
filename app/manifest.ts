import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PokéPod",
    short_name: "PokéPod",
    description: "An unofficial Pokémon research and discovery companion for Android.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0E12",
    theme_color: "#0A0E12",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
