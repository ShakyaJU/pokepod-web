# PokéPod website

Promotional website for **PokéPod**, an unofficial Pokémon research and discovery companion for Android
([source](https://github.com/ShakyaJU/pokepod)). Built with Next.js (App Router), React, strict TypeScript,
Tailwind CSS and Framer Motion. This is a separate project: nothing here touches the Flutter app.

> **Status: written, not yet built.** The code was authored in an environment with no network access, so
> `npm install`, `npm run typecheck`, `npm run lint` and `npm run build` have **not** been run. The only check
> performed was a syntax-only parse of every `.ts`/`.tsx` file (0 errors). Run the commands below and fix anything
> they report before deploying.

## Requirements

- Node.js **20.9 or newer** (Node 22 LTS recommended), npm, Git, VS Code
- Internet access on the first `npm run dev`/`build` (fonts are downloaded from Google Fonts and self-hosted)

## Run locally (Windows PowerShell)

```powershell
cd C:\Users\lenovo\NewProject\pokepod-website   # wherever you unzipped it
npm install
npm run dev          # http://localhost:3000
```

| Task | Command |
| --- | --- |
| Type check | `npm run typecheck` |
| Lint | `npm run lint` |
| Format | `npm run format` |
| Production build | `npm run build` then `npm run start` |

## Project layout

```
app/                 routes: / /features /about /faq /privacy, metadata, sitemap, robots, manifest, OG image
components/layout/   Header (client), Footer
components/sections/ homepage and feature sections
components/ui/       LinkButton, Section, Reveal, PhoneFrame, Badge, PageHeader, JsonLd
data/                features.ts, faq.ts, clips.ts: all site content, kept apart from presentation
lib/site.ts          site URL, external links, nav, disclaimer
public/clips         app recordings (.webm + .mp4), public/posters (.webp), public/brand (logo)
```

## Updating content

- Feature text: `data/features.ts`. FAQ: `data/faq.ts`. Links, nav and disclaimer: `lib/site.ts`.
- Only write what the app's source or README supports. Every current statement was taken from them.

## Adding or replacing screenshots and recordings

The app recordings in `public/clips` were converted from the `pokepod-gifs` folder of your repository (the
original GIFs were 2.7–17 MB each; the clips total about 7 MB). To add or replace one (needs
[ffmpeg](https://ffmpeg.org): `winget install Gyan.FFmpeg`):

```powershell
.\scripts\convert-clip.ps1 -Input "C:\path\to\new.gif" -Name pokedex
```

New names must also be added to `ClipId` and `CLIPS` in `data/clips.ts`. (The PowerShell script is untested.)

## Environment variables

| Name | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No | Public origin (no trailing slash) for canonical URLs, Open Graph, sitemap and robots. |

If unset, the site uses Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, then falls back to `http://localhost:3000`.
No secrets are used anywhere. Never commit a real `.env` file (it is git-ignored).

## GitHub and Vercel

```powershell
git init
git add .
git commit -m "Initial PokéPod website"
git branch -M main
git remote add origin https://github.com/<you>/pokepod-website.git
git push -u origin main
```

1. On vercel.com choose **Add New → Project** and import the GitHub repository.
2. Vercel detects Next.js automatically; keep the defaults (build `next build`) and click **Deploy**.
3. Every push to `main` deploys to production; every other branch or pull request gets a preview URL.
4. **Custom domain:** Project → Settings → Domains → add your domain and create the DNS records Vercel shows.
   Then set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` under Settings → Environment Variables and redeploy.

## Still needs your input

- **Production domain** (set `NEXT_PUBLIC_SITE_URL` after you attach one).
- **Download link:** the buttons point at the Google Drive APK link from your README. If you publish on Google Play,
  change `LINKS.apk` in `lib/site.ts` and reword "outside the Play Store" in `Hero`, `FinalCta` and `data/faq.ts`.
- **Privacy notice** (`app/privacy/page.tsx`) is a clearly marked **draft**. Review it before publishing.
- **Pricing:** the FAQ says no price has been announced, because the project is silent on it. Confirm or edit.
- **GitHub issues** are used as the only contact channel; make sure Issues are enabled on the repository.
- **Pokémon artwork:** the app recordings show artwork the app fetches at runtime. Decide whether that is acceptable
  for your site; your own README does not store artwork in the repository.
- **Widgets recording** (`public/clips/widgets.mp4`) shows your real Android home screen, including other apps.
  Consider re-recording it on a clean screen.
- **Sound effects** are not used on this site. Your `THIRD_PARTY_NOTICES.md` says their redistribution terms are unconfirmed.

## Notes

- The site is dark-only, matching the app. Motion respects `prefers-reduced-motion`: recordings then show a still poster.
- Recordings play only while visible and have a pause button.
- No analytics, cookies or third-party scripts are included. Security headers are set in `next.config.mjs`;
  a strict Content-Security-Policy is not set because Next.js needs inline scripts (add a nonce-based CSP if you want one).
