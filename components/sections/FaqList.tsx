import { ChevronDown } from "lucide-react";
import { FAQ } from "@/data/faq";

/** Native <details> keeps the accordion accessible and working without JavaScript. */
export function FaqList({ limit }: { limit?: number }) {
  const items = limit ? FAQ.slice(0, limit) : FAQ;
  return (
    <div className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-surface1">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-display text-lg font-semibold text-ink hover:bg-white/[.03] sm:px-8">
            {item.q}
            <ChevronDown className="shrink-0 text-emerald transition group-open:rotate-180" size={20} aria-hidden />
          </summary>
          <p className="px-6 pb-6 leading-relaxed text-dim sm:px-8">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
