"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { FEATURES, TAB_IDS } from "@/data/features";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

const tabs = TAB_IDS.map((id) => FEATURES.find((f) => f.id === id)).filter(
  (f): f is NonNullable<typeof f> => f !== undefined && f.clip !== undefined,
);

export function FeatureTabs() {
  const [index, setIndex] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: true });
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = tabs[index] ?? tabs[0];

  const updateEdges = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdge({ start: el.scrollLeft <= 2, end: el.scrollLeft >= max - 2 });
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    updateEdges();
    const observer = new ResizeObserver(updateEdges);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateEdges]);

  // Keep the selected tab centred in the horizontal strip (only when the strip actually scrolls).
  useEffect(() => {
    const el = listRef.current;
    const btn = refs.current[index];
    if (!el || !btn || el.scrollWidth <= el.clientWidth) return;
    el.scrollTo({
      left: btn.offsetLeft - (el.clientWidth - btn.offsetWidth) / 2,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [index, reduce]);

  function scrollList(dir: 1 | -1) {
    const el = listRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: reduce ? "auto" : "smooth" });
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const dir =
      e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (index + dir + tabs.length) % tabs.length;
    setIndex(next);
    refs.current[next]?.focus();
  }

  if (!active || !active.clip) return null;

  const scrollable = !(edge.start && edge.end);
  const arrow =
    "absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-surface3/95 text-ink shadow-lg transition hover:border-emerald/60 hover:text-emerald lg:hidden";

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_300px_1fr]">
      <div className="relative min-w-0">
        <div
          ref={listRef}
          role="tablist"
          aria-label="PokéPod features"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          onScroll={updateEdges}
          className="relative flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] lg:snap-none lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
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
              className={`min-h-14 shrink-0 snap-center rounded-2xl border px-5 py-4 text-left transition lg:w-full ${
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

        {scrollable && !edge.start && (
          <button type="button" aria-label="Show previous features" onClick={() => scrollList(-1)} className={`${arrow} left-0`}>
            <ChevronLeft size={22} aria-hidden />
          </button>
        )}
        {scrollable && !edge.end && (
          <button type="button" aria-label="Show more features" onClick={() => scrollList(1)} className={`${arrow} right-0`}>
            <ChevronRight size={22} aria-hidden />
          </button>
        )}
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
