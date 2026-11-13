"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { Check } from "lucide-react";
import { FEATURES, TAB_IDS } from "@/data/features";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

const steps = TAB_IDS.map((id) => FEATURES.find((f) => f.id === id)).filter(
  (f): f is NonNullable<typeof f> => f !== undefined && f.clip !== undefined,
);

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Scroll-driven feature story. The phone stays pinned while the features scroll past; whichever
 * feature crosses the middle of the screen becomes active and the phone switches to its recording.
 * A progress line fills as you scroll, and the dots under the phone jump to any feature.
 * Phones and tablets: the phone pins at the top and the text scrolls beneath it.
 * Desktop: the phone pins beside the text.
 */
export function FeatureStory() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const lockUntil = useRef(0);

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 55%", "end 55%"] });

  // The step that crosses a thin band at the middle of the viewport is the active one.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < lockUntil.current) return; // ignore while a dot-click scroll is in flight
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = Number((entry.target as HTMLElement).dataset.index);
          if (!Number.isNaN(i)) setIndex(i);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function jumpTo(i: number) {
    setIndex(i);
    lockUntil.current = Date.now() + (reduce ? 150 : 900);
    stepRefs.current[i]?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  }

  const current = steps[index] ?? steps[0];
  if (!current || !current.clip) return null;
  const clip = current.clip;

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_360px] lg:gap-16">
      {/* Pinned phone */}
      <div className="sticky top-16 z-10 -mx-5 border-b border-white/10 bg-obsidian/90 px-5 pb-1 pt-3 backdrop-blur-md sm:-mx-8 sm:px-8 lg:z-0 lg:col-start-2 lg:row-start-1 lg:mx-0 lg:self-start lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none lg:top-28">
        <div className="mx-auto w-[112px] min-[420px]:w-[124px] sm:w-[140px] lg:w-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={clip}
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <PhoneFrame clip={clip} controls={false} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-2 flex flex-col items-center lg:mt-6">
          <p aria-live="polite" aria-atomic="true" className="text-xs font-semibold text-dim lg:text-sm">
            <span className="text-emerald">{pad(index + 1)}</span> / {pad(steps.length)} · {current.title}
          </p>
          <nav aria-label="Feature steps" className="flex">
            {steps.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => jumpTo(i)}
                aria-label={`Show ${s.title}`}
                aria-current={i === index ? "step" : undefined}
                className="grid h-11 w-9 place-items-center"
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-emerald" : "w-1.5 bg-white/25"
                  }`}
                />
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Scrolling features */}
      <div ref={trackRef} className="relative lg:col-start-1 lg:row-start-1">
        <div className="absolute bottom-0 left-0 top-0 w-px bg-white/10" aria-hidden>
          <motion.div style={{ scaleY: scrollYProgress }} className="h-full w-px origin-top bg-emerald" />
        </div>
        <ol>
          {steps.map((s, i) => (
            <li
              key={s.id}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              data-index={i}
              className={`flex min-h-[60vh] flex-col justify-center py-10 pl-6 transition-opacity duration-300 lg:min-h-[72vh] lg:pl-10 ${
                i === index ? "opacity-100" : "opacity-40"
              }`}
            >
              <span aria-hidden className="font-display text-6xl font-semibold text-white/10 lg:text-7xl">
                {pad(i + 1)}
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald">{s.kicker}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{s.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-dim">{s.summary}</p>
              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink/90">
                    <Check size={18} className="mt-1 shrink-0 text-emerald" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
