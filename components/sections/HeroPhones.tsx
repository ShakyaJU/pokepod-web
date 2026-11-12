"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

/**
 * Three real app recordings in a layered composition, on every screen size.
 * On small screens the side phones are smaller and tuck behind the centre phone.
 *
 * Do not add overflow clipping here: the side phones are rotated and their corners extend past the box.
 * Positioning (centering, rotation) lives on plain wrapper divs. Framer Motion sets an inline
 * `transform` on animated elements, which would silently override Tailwind's translate/rotate
 * classes, so animated elements never carry those classes.
 */
export function HeroPhones() {
  const reduce = useReducedMotion();
  const float = (duration: number, delay: number) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -10, 0] },
          transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <div
      className="relative mx-auto h-[430px] w-full max-w-[520px] min-[420px]:h-[480px] sm:h-[640px] lg:h-[700px]"
      aria-label="PokéPod app screens"
    >
      <div
        className="absolute inset-x-4 top-1/2 h-60 -translate-y-1/2 rounded-full bg-emerald/20 blur-3xl sm:h-72"
        aria-hidden
      />

      {/* Left phone */}
      <div className="absolute left-0 top-14 z-10 w-[120px] -rotate-6 min-[420px]:w-[140px] sm:left-2 sm:top-16 sm:w-[190px] lg:w-[210px]">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <motion.div {...float(7, 0.4)}>
            <PhoneFrame clip="pokedex" controls={false} />
          </motion.div>
        </motion.div>
      </div>

      {/* Centre phone: always centred by flex, never by a transform */}
      <div className="absolute inset-x-0 top-0 z-20 flex justify-center">
        <div className="w-[190px] min-[420px]:w-[220px] sm:w-[260px] lg:w-[290px]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div {...float(6, 0)}>
              <PhoneFrame clip="discover" eager controls={false} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right phone */}
      <div className="absolute right-0 top-20 z-10 w-[120px] rotate-6 min-[420px]:w-[140px] sm:right-2 sm:top-24 sm:w-[190px] lg:w-[210px]">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <motion.div {...float(8, 0.8)}>
            <PhoneFrame clip="whos-that" controls={false} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
