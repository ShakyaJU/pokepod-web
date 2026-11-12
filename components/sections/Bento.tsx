import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

// Colours are the app's own tokens (tokens.dart, rarity.dart).
const TYPES: Array<[string, string]> = [
  ["Normal", "#A8A77A"], ["Fire", "#EE8130"], ["Water", "#6390F0"], ["Electric", "#F7D02C"],
  ["Grass", "#7AC74C"], ["Ice", "#96D9D6"], ["Fighting", "#C22E28"], ["Poison", "#A33EA1"],
  ["Ground", "#E2BF65"], ["Flying", "#A98FF3"], ["Psychic", "#F95587"], ["Bug", "#A6B91A"],
  ["Rock", "#B6A136"], ["Ghost", "#735797"], ["Dragon", "#6F35FC"], ["Dark", "#705746"],
  ["Steel", "#B7B7CE"], ["Fairy", "#D685AD"],
];
const RARITY: Array<[string, string]> = [
  ["Common", "#9AA5AD"], ["Uncommon", "#4ADE80"], ["Rare", "#F4D03F"], ["Epic", "#A78BFA"],
  ["Double Rare", "#4F8DFD"], ["Ultra Rare", "#2CC9DC"], ["Illustration Rare", "#FF7E67"],
  ["Special Illustration Rare", "#D6339C"], ["Hyper Rare", "#D08A1E"],
];
const ACCENTS: Array<[string, string]> = [
  ["Emerald", "#2DD4A0"], ["Cyan", "#5EEAF2"], ["Amber", "#F5B642"], ["Violet", "#A78BFA"], ["Rose", "#F472B6"],
];
const STAGES = ["Unseen", "Discovered", "Studied", "Mastered"];

const card = "rounded-3xl border border-white/10 bg-surface1 p-7 sm:p-8";

export function Bento() {
  return (
    <Section
      eyebrow="Inside the toolkit"
      title="Small details, thoughtfully built."
      lede="The pieces that make PokéPod feel like an instrument rather than a list."
    >
      <div className="grid gap-4 md:grid-cols-6">
        <Reveal className={`${card} md:col-span-4`}>
          <h3 className="font-display text-2xl font-semibold">Your research, stage by stage</h3>
          <p className="mt-2 max-w-lg text-dim">
            Opening a dossier marks a Pokémon Discovered. Studied and Mastered are explicit choices you make, one
            step at a time.
          </p>
          <ol className="mt-8 grid grid-cols-4 gap-2" aria-label="Research stages">
            {STAGES.map((s, i) => (
              <li key={s} className="text-center">
                <div
                  className="mx-auto h-1.5 w-full rounded-full"
                  style={{ background: i === 0 ? "#2A3541" : `rgba(45,212,160,${0.35 + i * 0.22})` }}
                  aria-hidden
                />
                <span className="mt-3 block text-xs font-semibold text-ink sm:text-sm">{s}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.08} className={`${card} md:col-span-2`}>
          <h3 className="font-display text-2xl font-semibold">Five accents</h3>
          <p className="mt-2 text-dim">Choose how PokéPod looks, with System, Dark or Light themes.</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {ACCENTS.map(([name, hex]) => (
              <li key={name} className="flex items-center gap-2 text-xs text-ink">
                <span className="h-6 w-6 rounded-full ring-2 ring-white/20" style={{ background: hex }} aria-hidden />
                {name}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className={`${card} md:col-span-3`}>
          <h3 className="font-display text-2xl font-semibold">Defense Profile</h3>
          <p className="mt-2 text-dim">
            Weaknesses, resistances and immunities on every dossier, using the 18-type chart with dual-type
            multipliers.
          </p>
          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="The 18 types">
            {TYPES.map(([name, hex]) => (
              <li
                key={name}
                className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-black/80"
                style={{ background: hex }}
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08} className={`${card} md:col-span-3`}>
          <h3 className="font-display text-2xl font-semibold">Nine rarity tiers</h3>
          <p className="mt-2 text-dim">20 achievements unlock from real progress, each with its own progress bar.</p>
          <ul className="mt-6 space-y-2" aria-label="Rarity tiers">
            {RARITY.map(([name, hex]) => (
              <li key={name} className="flex items-center gap-3 text-sm text-ink">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: hex }} aria-hidden />
                {name}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className={`${card} md:col-span-2`}>
          <h3 className="font-display text-2xl font-semibold">Explained connections</h3>
          <p className="mt-2 text-dim">
            Unexpected Connections link Pokémon through shared abilities, similar stat shapes and shared
            evolution families, and always show the data behind them.
          </p>
        </Reveal>

        <Reveal delay={0.08} className={`${card} md:col-span-2`}>
          <h3 className="font-display text-2xl font-semibold">Living Dex</h3>
          <p className="mt-2 text-dim">
            Optionally silhouette every Pokémon you haven&rsquo;t discovered yet in the Pokédex.
          </p>
        </Reveal>

        <Reveal delay={0.16} className={`${card} md:col-span-2`}>
          <h3 className="font-display text-2xl font-semibold">Help built in</h3>
          <p className="mt-2 text-dim">A searchable, collapsible User Guide and a first-launch tour of every tab.</p>
        </Reveal>
      </div>
    </Section>
  );
}
