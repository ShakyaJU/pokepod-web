"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * A back-to-top button wrapped in a progress ring, shown once you have scrolled down.
 * Works the same on phones and desktop. The native scrollbar is kept (themed in globals.css)
 * because keyboards, assistive technology and touch scrolling rely on it.
 */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });
  const progress = reduce ? scrollYProgress : smooth;
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 600));

  function toTop() {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <>
      <button
        type="button"
        onClick={toTop}
        aria-label="Back to top"
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-40 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-surface2/90 text-ink shadow-lg backdrop-blur transition duration-300 hover:border-emerald/60 hover:text-emerald ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90" aria-hidden>
          <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" />
          <motion.circle
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke="#2DD4A0"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{ pathLength: progress }}
          />
        </svg>
        <ArrowUp size={18} aria-hidden />
      </button>
    </>
  );
}
