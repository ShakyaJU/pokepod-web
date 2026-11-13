import { Check, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PhoneFrame, PhoneStill } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import type { Feature } from "@/types/content";

export function FeatureRow({ feature, flip }: { feature: Feature; flip: boolean }) {
  const hasVisual = feature.clip !== undefined || feature.id === "notifications";
  return (
    <Reveal>
      <article
        id={feature.id}
        className={`grid scroll-mt-24 items-center gap-10 py-14 lg:gap-20 ${hasVisual ? "lg:grid-cols-2" : ""}`}
      >
        <div className={flip && hasVisual ? "lg:order-2" : ""}>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">{feature.kicker}</p>
            {feature.androidOnly && (
              <Badge tone="amber"><Smartphone size={12} aria-hidden /> Android only</Badge>
            )}
          </div>
          <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{feature.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-dim">{feature.summary}</p>
          <ul className="mt-6 space-y-3">
            {feature.points.map((p) => (
              <li key={p} className="flex gap-3 leading-relaxed text-ink/90">
                <Check size={18} className="mt-1 shrink-0 text-emerald" aria-hidden />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          {feature.note && <p className="mt-5 text-sm text-dim">{feature.note}</p>}
        </div>

        {feature.clip && (
          <div className={`mx-auto w-[240px] sm:w-[270px] ${flip ? "lg:order-1" : ""}`}>
            <PhoneFrame clip={feature.clip} />
          </div>
        )}
        {!feature.clip && feature.id === "notifications" && (
          <div className={`mx-auto w-[240px] sm:w-[270px] ${flip ? "lg:order-1" : ""}`}>
            <PhoneStill
              src="/posters/notifications.webp"
              alt="PokéPod daily and streak reminder notifications on Android"
              width={540}
              height={1036}
              sizes="270px"
            />
          </div>
        )}
      </article>
    </Reveal>
  );
}
