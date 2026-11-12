import { Download, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";
import { LINKS } from "@/lib/site";
import { HeroPhones } from "./HeroPhones";

const stats = [
  ["1,025", "species"],
  ["9", "generations"],
  ["20", "achievements"],
  ["4", "widget sizes"],
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:pb-24 lg:pt-36">
      <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-emerald/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Badge>
            <Sparkles size={14} aria-hidden /> Beyond the Pokédex
          </Badge>
          <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Your Pokémon journey, <span className="text-gradient">reimagined.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-dim sm:text-xl">
            PokéPod treats the Pokédex as a research instrument. Browse all 1,025 species, open research
            dossiers, compare specimens, build teams and play a daily challenge, all on your Android phone.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={LINKS.apk}>
              <Download size={18} aria-hidden /> Download for Android
            </LinkButton>
            <LinkButton href="/features" variant="secondary">
              Explore features
            </LinkButton>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-dim">
            Android only. The APK opens on Google Drive and is installed outside the Play Store. An unofficial fan
            project.
          </p>
          <dl className="mt-10 grid max-w-md grid-cols-4 gap-4 border-t border-white/10 pt-6">
            {stats.map(([n, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-2xl font-semibold text-ink sm:text-3xl">{n}</dd>
                <dd className="mt-1 text-xs text-dim">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroPhones />
      </div>
    </section>
  );
}
