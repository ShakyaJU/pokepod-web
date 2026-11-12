import type { Metadata } from "next";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHeader } from "@/components/ui/PageHeader";
import { FEATURES, GROUPS } from "@/data/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Every PokéPod feature: Discover, the Pokédex, research dossiers, Evolution Constellation, Pokémon DNA, Team Architect, collections, the daily challenge, widgets and more.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  let n = 0;
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Everything PokéPod does, and nothing it doesn't."
        lede="Each feature below is described from the app's source and documentation and shown with a real recording."
      />
      <nav aria-label="Feature groups" className="px-5 sm:px-8">
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-2">
          {FEATURES.map((f) => (
            <li key={f.id}>
              <a
                href={`#${f.id}`}
                className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-4 text-sm text-dim transition hover:border-emerald/50 hover:text-ink"
              >
                {f.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-5 pb-10 sm:px-8">
        <div className="mx-auto max-w-6xl">
          {GROUPS.map((group) => (
            <section key={group} aria-labelledby={`group-${group}`} className="pt-16">
              <h2 id={`group-${group}`} className="border-b border-white/10 pb-4 font-display text-2xl font-semibold text-dim">
                {group}
              </h2>
              {FEATURES.filter((f) => f.group === group).map((f) => (
                <FeatureRow key={f.id} feature={f} flip={n++ % 2 === 1} />
              ))}
            </section>
          ))}
        </div>
      </div>
      <FinalCta />
    </>
  );
}
