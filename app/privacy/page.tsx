import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What the PokéPod app stores on your device, what it sends to third parties, and how backups work.",
  alternates: { canonical: "/privacy" },
};

const sections: Array<[string, string[]]> = [
  ["Summary", [
    "PokéPod is local-first. It has no accounts, no custom backend, and no analytics or advertising.",
  ]],
  ["Stored on your device", [
    "Research progress, favourites, collections, teams, notes, trainer profile and daily-challenge history are stored only on your device, in the app's local storage. A cache of Pokémon data you have opened is stored there too.",
    "Uninstalling the app or clearing its data erases your local progress.",
  ]],
  ["What leaves your device", [
    "The app requests Pokémon data from PokéAPI and artwork from the PokeAPI sprites repository on GitHub. These are ordinary HTTPS requests and necessarily reveal your IP address to those services, which have their own privacy practices.",
    "Notifications are scheduled locally on the device. No remote push service is used.",
  ]],
  ["Backups", [
    "Back up progress copies a versioned backup to your clipboard as text. Nothing is uploaded unless you paste it somewhere yourself. Restore validates the text and asks for confirmation before replacing anything.",
  ]],
  ["This website", [
    "This website sets no cookies and includes no analytics or third-party scripts. Fonts are self-hosted by Next.js at build time. Your host (for example Vercel) may keep standard server logs.",
    "Links to the APK and walkthrough open on Google Drive, which is governed by Google's own terms.",
  ]],
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Privacy" title="Privacy notice" />
      <div className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div role="note" className="rounded-2xl border border-amber/40 bg-amber/10 p-5 text-sm leading-relaxed text-amber">
            <strong>Draft for the author&rsquo;s review.</strong> This notice describes the app as documented in its
            README and source code. It has not been reviewed as a legal document. No company, address or contact
            details are given because none have been supplied.
          </div>
          {sections.map(([title, paras]) => (
            <section key={title} className="mt-12" aria-labelledby={`p-${title}`}>
              <h2 id={`p-${title}`} className="font-display text-2xl font-semibold">{title}</h2>
              {paras.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-dim">{p}</p>
              ))}
            </section>
          ))}
          <section className="mt-12" aria-labelledby="p-contact">
            <h2 id="p-contact" className="font-display text-2xl font-semibold">Questions</h2>
            <p className="mt-3 leading-relaxed text-dim">
              Open an issue on the{" "}
              <a className="text-emerald underline-offset-4 hover:underline" href={LINKS.issues} target="_blank" rel="noopener noreferrer">PokéPod GitHub repository</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
