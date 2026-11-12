"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

/** Three real app recordings in a layered composition. Side phones are hidden on small screens. */
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
    <div className="relative mx-auto h-[540px] w-full max-w-[520px] sm:h-[640px] lg:h-[700px]" aria-label="PokéPod app screens">
      <div className="absolute inset-x-4 top-1/2 h-72 -translate-y-1/2 rounded-full bg-emerald/20 blur-3xl" aria-hidden />

      <motion.div
        className="absolute left-0 top-16 z-10 hidden w-[190px] -rotate-6 sm:block lg:w-[210px]"
        initial={reduce ? false : { opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        <motion.div {...float(7, 0.4)}>
          <PhoneFrame clip="pokedex" controls={false} />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-0 z-20 w-[230px] -translate-x-1/2 sm:w-[260px] lg:w-[290px]"
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div {...float(6, 0)}>
          <PhoneFrame clip="discover" eager />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-0 top-24 z-10 hidden w-[190px] rotate-6 sm:block lg:w-[210px]"
        initial={reduce ? false : { opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
      >
        <motion.div {...float(8, 0.8)}>
          <PhoneFrame clip="whos-that" controls={false} />
        </motion.div>
      </motion.div>
    </div>
  );
}
