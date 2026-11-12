import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/LinkButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { DISCLAIMER, LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "How PokéPod is built: a local-first Flutter app with pure-Dart rules, PokéAPI data and honest limitations.",
  alternates: { canonical: "/about" },
};

const decisions = [
  ["Riverpod for state", "One mechanism provides state, the repository and the HTTP client, and tests can override any of them."],
  ["A cache-first repository", "Screens never see HTTP. Requests are de-duplicated and anything you've opened is served from the device."],
  ["Defensive models", "PokéAPI models tolerate missing or malformed fields. A bad response becomes a typed error, not a crash."],
  ["Rules in pure Dart", "The type chart, team analysis, research stages, filtering, achievements and the daily challenge are plain Dart, tested without any UI."],
];

const limits = [
  "Only National Dex species 1–1025 are catalogued. Alternate forms (Mega, regional) are not.",
  "The dossier shows a sample of moves (the first 12 alphabetically), not a complete list.",
  "Team analysis uses types only and assumes STAB coverage. There is no battle simulation.",
  "Widgets and reminders are Android-only. iOS, web and desktop builds have not been built or tested.",
  "Backups are clipboard text. There is no file export, cloud backup or cross-device sync.",
  "With no server, moving the device clock forward cannot be prevented from affecting the daily challenge.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A Pokédex built like a research instrument."
        lede="PokéPod is a fan project by ShakyaJU, built with Flutter. It is local-first, explainable and honest about what it doesn't do."
      />
      <div className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-20">
          <section aria-labelledby="eng">
            <h2 id="eng" className="font-display text-3xl font-semibold">Engineering decisions</h2>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {decisions.map(([t, d]) => (
                <div key={t} className="rounded-3xl border border-white/10 bg-surface1 p-7">
                  <dt className="font-display text-xl font-semibold">{t}</dt>
                  <dd className="mt-2 leading-relaxed text-dim">{d}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="stack">
            <h2 id="stack" className="font-display text-3xl font-semibold">Tech stack</h2>
            <p className="mt-4 leading-relaxed text-dim">
              Flutter and Dart, flutter_riverpod, dio, shared_preferences, cached_network_image, audioplayers,
              home_widget, flutter_local_notifications and flutter_timezone. Full licences are listed in the app
              under About and in the repository&rsquo;s third-party notices.
            </p>
          </section>

          <section aria-labelledby="limits">
            <h2 id="limits" className="font-display text-3xl font-semibold">Known limitations</h2>
            <ul className="mt-6 space-y-3">
              {limits.map((l) => (
                <li key={l} className="rounded-2xl border border-white/10 bg-white/[.03] px-5 py-4 text-ink/90">{l}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="credits">
            <h2 id="credits" className="font-display text-3xl font-semibold">Credits &amp; disclaimer</h2>
            <p className="mt-4 leading-relaxed text-dim">
              Pokémon data is provided by{" "}
              <a className="text-emerald underline-offset-4 hover:underline" href={LINKS.pokeapi} target="_blank" rel="noopener noreferrer">PokéAPI</a>
              . Artwork is fetched by the app at runtime from the{" "}
              <a className="text-emerald underline-offset-4 hover:underline" href={LINKS.sprites} target="_blank" rel="noopener noreferrer">PokeAPI sprites</a>{" "}
              repository; the PokéPod source repository stores no Pokémon artwork. The recordings on this website show that runtime artwork inside the app.
            </p>
            <p className="mt-4 leading-relaxed text-dim">{DISCLAIMER}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={LINKS.github} variant="secondary">Source on GitHub</LinkButton>
              <LinkButton href={LINKS.issues} variant="ghost">Report an issue</LinkButton>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
