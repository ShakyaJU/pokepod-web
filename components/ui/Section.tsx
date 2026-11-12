import type { ReactNode } from "react";

interface Props {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function Section({ id, eyebrow, title, lede, children, className = "", align = "left" }: Props) {
  const center = align === "center";
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <header className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald">{eyebrow}</p>
          )}
          <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {title}
          </h2>
          {lede && <p className="mt-5 text-lg leading-relaxed text-dim">{lede}</p>}
        </header>
        {children && <div className="mt-12 lg:mt-16">{children}</div>}
      </div>
    </section>
  );
}
