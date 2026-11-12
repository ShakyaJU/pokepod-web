import { ArrowRight, CloudOff, Database, Globe, Trash2 } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

const items = [
  { icon: Database, title: "On your device", text: "Progress, favourites, collections, teams, notes, profile and daily history are stored only on your phone." },
  { icon: CloudOff, title: "No account, no analytics", text: "There is no account, no custom backend and no advertising or analytics in the app." },
  { icon: Globe, title: "What does leave the device", text: "Requests to PokéAPI for data and to a GitHub-hosted sprites repository for artwork. Like any web request, they reveal your IP address to those services." },
  { icon: Trash2, title: "You hold the backup", text: "Back up progress copies text to your clipboard. Uninstalling or clearing app data erases local progress, so back up first." },
];

export function PrivacySummary() {
  return (
    <Section
      eyebrow="Privacy & data"
      title="Local-first, and honest about it."
      lede="What the app stores, what it sends, and where the edges are."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <div key={i.title} className="rounded-3xl border border-white/10 bg-surface1 p-7">
            <i.icon className="text-cyan" size={24} aria-hidden />
            <h3 className="mt-4 font-display text-xl font-semibold">{i.title}</h3>
            <p className="mt-2 leading-relaxed text-dim">{i.text}</p>
          </div>
        ))}
      </div>
      <Link href="/privacy" className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-emerald hover:underline">
        Read the full privacy notice <ArrowRight size={16} aria-hidden />
      </Link>
    </Section>
  );
}
