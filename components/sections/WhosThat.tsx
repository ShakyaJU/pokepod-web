"use client";

import { useState } from "react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Section } from "@/components/ui/Section";

// Stages follow lib/features/mystery/reveal.dart: "?" -> blurred silhouette that sharpens with each wrong guess -> muted colour on the last attempt.
const STAGES = [
  { label: "A question mark", desc: "Before any guess, you only see a “?”.", style: {} },
  { label: "Blurred silhouette", desc: "After a wrong guess, a blurred silhouette appears.", style: { filter: "brightness(0) blur(14px)" } },
  { label: "Sharper silhouette", desc: "Every wrong guess sharpens the silhouette.", style: { filter: "brightness(0) blur(4px)" } },
  { label: "Muted colour", desc: "On the last attempt the artwork returns in muted colour.", style: { filter: "saturate(.45) brightness(.9)" } },
] as const;

export function WhosThat() {
  const [stage, setStage] = useState(0);
  const current = STAGES[stage] ?? STAGES[0];

  return (
    <Section
      id="whos-that"
      eyebrow="The daily challenge"
      title="Who's that Pokémon?"
      lede="One Pokémon per local calendar day. Six guesses. Progressive clues. A picture that sharpens as you struggle."
      className="bg-gradient-to-b from-transparent via-violet/[.06] to-transparent"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[300px_1fr]">
        <div className="mx-auto w-[240px] sm:w-[270px] lg:w-full">
          <PhoneFrame clip="whos-that" />
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold">How the picture sharpens</h3>
          <p className="mt-2 text-dim">
            An illustration of the reveal stages: step through them below. This is a website illustration with a
            stand-in shape, not the game itself; the real challenge is in the app.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-[200px_1fr]">
            <div
              className="relative grid aspect-square place-items-center overflow-hidden rounded-3xl border border-white/10 bg-surface2"
              role="img"
              aria-label={`Reveal stage ${stage + 1} of 4: ${current.label}`}
            >
              {stage === 0 ? (
                <span className="font-display text-8xl font-bold text-violet" aria-hidden>?</span>
              ) : (
                <div
                  className="h-28 w-28 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-gradient-to-br from-emerald to-cyan"
                  style={current.style}
                  aria-hidden
                />
              )}
            </div>

            <div>
              <div role="group" aria-label="Reveal stage" className="flex flex-wrap gap-2">
                {STAGES.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    aria-pressed={i === stage}
                    onClick={() => setStage(i)}
                    className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition ${
                      i === stage
                        ? "border-violet bg-violet/15 text-ink"
                        : "border-white/10 text-dim hover:border-white/30 hover:text-ink"
                    }`}
                  >
                    {i + 1}. {s.label}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-ink/90" aria-live="polite">{current.desc}</p>
            </div>
          </div>

          <ul className="mt-10 grid gap-3 text-[15px] text-ink/90 sm:grid-cols-2">
            {[
              "Searchable guess picker",
              "Clues: generation, type, size, stat total",
              "Description with the name hidden, name length, first letter",
              "Current and best streak, win rate, saved history",
              "A finished day can't be replayed after a restart",
              "Optional streak reminder, 3 hours before reset (Android)",
            ].map((t) => (
              <li key={t} className="rounded-2xl border border-white/10 bg-white/[.03] px-4 py-3">{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
