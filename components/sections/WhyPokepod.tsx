import { FlaskConical, Gamepad2, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const pillars = [
  {
    icon: FlaskConical,
    title: "Research, not just a list",
    text: "Pokémon move through Discovered, Studied and Mastered stages that only you advance. Opening a dossier marks it Discovered; the rest is your call.",
  },
  {
    icon: Gamepad2,
    title: "A reason to come back daily",
    text: "One Who's That Pokémon? per day, progressive clues, a streak and a Specimen of the Day that follows you to the home screen.",
  },
  {
    icon: ShieldCheck,
    title: "Yours, and only yours",
    text: "No account, no backend, no analytics. Progress, notes and teams live on your device; back them up whenever you like.",
  },
];

export function WhyPokepod() {
  return (
    <Section
      eyebrow="Why PokéPod"
      title={
        <>
          Discovery, research, collection and progress, <span className="text-dim">in one place.</span>
        </>
      }
      lede="Most Pokédex apps stop at a list of stats. PokéPod keeps that list, then adds the tools to study what you find, the analysis to explain it and the habits that keep it fun."
    >
      <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="bg-surface1 p-8 sm:p-10">
            <p.icon className="text-emerald" size={28} aria-hidden />
            <h3 className="mt-6 font-display text-2xl font-semibold">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-dim">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
