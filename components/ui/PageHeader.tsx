import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, lede }: { eyebrow: string; title: ReactNode; lede?: ReactNode }) {
  return (
    <header className="relative overflow-hidden px-5 pb-10 pt-32 sm:px-8 lg:pt-40">
      <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {lede && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-dim">{lede}</p>}
      </div>
    </header>
  );
}
