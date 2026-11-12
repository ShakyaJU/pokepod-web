"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { FEATURES, TAB_IDS } from "@/data/features";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

const tabs = TAB_IDS.map((id) => FEATURES.find((f) => f.id === id)).filter(
  (f): f is NonNullable<typeof f> => f !== undefined && f.clip !== undefined,
);

export function FeatureTabs() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = tabs[index] ?? tabs[0];
  if (!active || !active.clip) return null;

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (index + dir + tabs.length) % tabs.length;
    setIndex(next);
    refs.current[next]?.focus();
  }

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_300px_1fr]">
      <div
        role="tablist"
        aria-label="PokéPod features"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
      >
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={i === index}
            aria-controls="feature-panel"
            tabIndex={i === index ? 0 : -1}
            onClick={() => setIndex(i)}
            className={`shrink-0 rounded-2xl border px-5 py-4 text-left transition lg:w-full ${
              i === index
                ? "border-emerald/50 bg-emerald/10 text-ink"
                : "border-white/10 bg-white/[.03] text-dim hover:border-white/25 hover:text-ink"
            }`}
          >
            <span className="block font-display text-lg font-semibold">{t.title}</span>
            <span className="hidden text-sm lg:block">{t.kicker}</span>
          </button>
        ))}
      </div>

      <div className="mx-auto w-[240px] sm:w-[270px] lg:w-full">
        <PhoneFrame key={active.clip} clip={active.clip} />
      </div>

      <div id="feature-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} tabIndex={0}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">{active.kicker}</p>
            <h3 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{active.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-dim">{active.summary}</p>
            <ul className="mt-6 space-y-3">
              {active.points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink/90">
                  <Check size={18} className="mt-1 shrink-0 text-emerald" aria-hidden />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
