import type { Config } from "tailwindcss";

// Colours mirror the app's design tokens (lib/app/theme/tokens.dart).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0E12",
        surface1: "#10161C",
        surface2: "#161E26",
        surface3: "#1E2833",
        line: "#2A3541",
        emerald: "#2DD4A0",
        cyan: "#5EEAF2",
        amber: "#F5B642",
        violet: "#A78BFA",
        rose: "#F472B6",
        ink: "#E8EEF2",
        dim: "#8A97A3",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        phone: "0 40px 80px -30px rgba(0,0,0,.8), 0 0 0 1px rgba(255,255,255,.06)",
        glow: "0 0 80px -10px rgba(45,212,160,.35)",
      },
    },
  },
  plugins: [],
};

export default config;
