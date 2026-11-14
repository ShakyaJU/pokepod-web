import { Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PhoneFrame, PhoneStill } from "@/components/ui/PhoneFrame";
import { Section } from "@/components/ui/Section";

const sizes = ["Compact", "Small", "Medium", "Large"];

export function AndroidSection() {
  return (
    <Section
      eyebrow="On your home screen"
      title={<>Built for Android, <span className="text-dim">right down to the widget.</span></>}
      lede="The Specimen of the Day and gentle reminders follow you outside the app. Both are Android-only."
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex items-start justify-center gap-4 sm:gap-5">
          <div className="w-[150px] min-[420px]:w-[170px] sm:w-[240px]">
            <PhoneFrame clip="widgets" />
          </div>
          <div className="mt-10 w-[140px] min-[420px]:w-[160px] sm:mt-16 sm:w-[220px]">
            <PhoneStill
              src="/posters/notifications-screen.webp"
              alt="PokéPod daily and streak reminder notifications on Android"
              width={540}
              height={1170}
              fit="cover"
              sizes="220px"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <Badge tone="amber"><Smartphone size={13} aria-hidden /> Android only</Badge>
            <h3 className="mt-4 font-display text-3xl font-semibold">Specimen of the Day, four sizes</h3>
            <p className="mt-3 leading-relaxed text-dim">
              The same Specimen of the Day as the app, shown as a compact, small, medium or large widget. Larger
              sizes progressively add artwork, name and number, type badges, the description, and height and
              weight.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Widget sizes">
              {sizes.map((s) => (
                <li key={s} className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-ink">{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-3xl font-semibold">Reminders you opt in to</h3>
            <ul className="mt-3 space-y-2 leading-relaxed text-dim">
              <li>Daily reminders and a Who&rsquo;s That Pokémon? streak reminder, 3 hours before the challenge resets.</li>
              <li>An in-app explanation appears before Android asks for notification permission.</li>
              <li>Local notifications only: no remote push service is used.</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
