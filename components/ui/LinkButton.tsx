import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition duration-200 active:scale-[.98]";
const variants: Record<Variant, string> = {
  primary: "bg-emerald text-obsidian shadow-glow hover:bg-[#52e3b6]",
  secondary: "border border-white/15 bg-white/5 text-ink hover:border-white/30 hover:bg-white/10",
  ghost: "text-ink hover:text-emerald",
};

interface Props {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

/** Internal links use next/link; absolute URLs open in a new tab with safe rel values. */
export function LinkButton({ href, children, variant = "primary", className = "" }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
