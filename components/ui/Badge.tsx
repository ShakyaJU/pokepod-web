import type { ReactNode } from "react";

export function Badge({ children, tone = "emerald" }: { children: ReactNode; tone?: "emerald" | "amber" | "cyan" }) {
  const tones = {
    emerald: "border-emerald/30 bg-emerald/10 text-emerald",
    amber: "border-amber/30 bg-amber/10 text-amber",
    cyan: "border-cyan/30 bg-cyan/10 text-cyan",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
