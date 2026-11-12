# PokéPod Website

<p align="center">
  <img src="public/brand/wordmark.png" alt="PokéPod" width="300">
</p>

<h3 align="center">Your Pokémon journey. Reimagined.</h3>

<p align="center">
  A promotional website for PokéPod — a feature-rich Pokémon discovery, research, and collection companion for Android.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vercel-Ready-black?logo=vercel" alt="Vercel">
</p>

<p align="center">
  <a href="https://github.com/ShakyaJU/pokepod">PokéPod Android App</a>
  ·
  <a href="#getting-started">Getting Started</a>
  ·
  <a href="#deployment">Deployment</a>
</p>

---

## Overview

**PokéPod Website** is the official promotional website for my PokéPod mobile application.

Built to introduce the app and showcase its capabilities, the website presents PokéPod through immersive visuals, application recordings, interactive feature demonstrations, and a responsive user experience.

The website follows the visual identity of the mobile application while providing a dedicated platform for visitors to explore its features, understand its functionality, and access project information.

This is a standalone web project, independently maintained from the Flutter application.

## Features

- **Premium Product Presentation** — A visually engaging landing page introducing PokéPod and its capabilities.
- **Interactive Feature Showcase** — Explore the application's discovery, Pokédex, research, collection, and daily challenge experiences.
- **Real Application Previews** — Actual app recordings presented in responsive device mockups.
- **Interactive Gallery** — Browse application screens and view them in an expanded gallery.
- **Responsive Design** — Optimised layouts for desktop, tablet, and mobile devices.
- **Smooth Animations** — Purposeful transitions and scroll-based animations with reduced-motion support.
- **Dedicated Information Pages** — Features, About, FAQ, and Privacy sections.
- **SEO and Social Sharing** — Page metadata, Open Graph previews, sitemap, and structured data.
- **Accessibility and Performance** — Semantic markup, keyboard-friendly interactions, optimised media, and efficient rendering.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage and product introduction |
| `/features` | Detailed overview of PokéPod features |
| `/about` | Project background, technology, and limitations |
| `/faq` | Frequently asked questions |
| `/privacy` | Privacy information (currently a draft) |

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework and application routing |
| React 19 | User interface development |
| TypeScript | Type-safe development |
| Tailwind CSS 3 | Styling and responsive layouts |
| Framer Motion | Animations and interactions |
| Lucide React | Interface icons |
| Vercel | Deployment and hosting |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.9 or later
- npm
- Git
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### Installation

Clone the repository:

```bash
git clone https://github.com/ShakyaJU/pokepod-website.git
cd pokepod-website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Testing on a Mobile Device

To access the development server from a phone connected to the same Wi-Fi network:

```bash
npm run dev -- -H 0.0.0.0
```

Find your computer's local IPv4 address using:

```powershell
ipconfig
```

Then visit `http://YOUR-IP-ADDRESS:3000` on your mobile device.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run lint` | Check code quality with ESLint |
| `npm run format` | Format project files with Prettier |
| `npm run format:check` | Check formatting without modifying files |

## Project Structure

```text
pokepod-website/
├── app/                  # Pages, layouts, metadata and routing
├── components/
│   ├── layout/           # Header and footer
│   ├── sections/         # Homepage and feature sections
│   └── ui/               # Reusable UI components
├── data/                 # Feature descriptions, FAQ and content
├── lib/                  # Shared utilities and configuration
├── types/                # TypeScript types
├── public/
│   ├── brand/            # Logos and branding assets
│   ├── clips/            # Application recordings
│   └── posters/          # Video poster images
├── scripts/              # Asset conversion utilities
├── .env.example
├── next.config.mjs
├── package.json
└── README.md
```

## Updating Website Content

Most website content is maintained separately from the UI components.

| Content | Location |
|---|---|
| Feature descriptions | `data/features.ts` |
| FAQ content | `data/faq.ts` |
| Application recordings | `data/clips.ts` |
| Navigation and external links | `lib/site.ts` |
| Privacy information | `app/privacy/page.tsx` |
| Branding assets | `public/brand/` |

When updating feature descriptions, ensure that information accurately reflects the current functionality of the PokéPod application.

## Environment Variables

The website supports the following optional environment variable:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public website URL used for canonical metadata, sitemap, robots, and social sharing. |

For local configuration, copy `.env.example` to `.env.local` and update the value if necessary.

Never commit private credentials or environment files containing secrets.

## Deployment

The website is designed for deployment on **[Vercel](https://vercel.com/)**.

1. Push the project to GitHub.
2. Sign in to Vercel.
3. Select **Add New → Project**.
4. Import the `pokepod-website` repository.
5. Keep the detected Next.js build settings.
6. Configure `NEXT_PUBLIC_SITE_URL` when a production domain is available.
7. Deploy the project.

Vercel can automatically build and deploy future changes pushed to the connected GitHub repository.

## Credits and Disclaimer

- Pokémon data is provided by [PokéAPI](https://pokeapi.co).
- Pokémon artwork displayed within the application originates from the [PokéAPI Sprites repository](https://github.com/PokeAPI/sprites).
- Application branding and website design are part of the PokéPod project.

**PokéPod is an unofficial fan-made project.** It is not affiliated with, endorsed by, or sponsored by Nintendo, Game Freak, Creatures Inc., or The Pokémon Company.

Pokémon and all related names, characters, artwork, and trademarks belong to their respective owners.

For information about the mobile application, visit the [PokéPod repository](https://github.com/ShakyaJU/pokepod).

---

<p align="center">
  Built with care by <a href="https://github.com/ShakyaJU">ShakyaJU</a>.
</p>

<p align="center">
  <sub>PokéPod — Discover. Research. Collect.</sub>
</p>