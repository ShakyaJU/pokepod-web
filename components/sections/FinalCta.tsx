import { Download, Github, Play } from "lucide-react";
import { LinkButton } from "@/components/ui/LinkButton";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { LINKS } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="px-5 pb-24 pt-10 sm:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface1 px-8 py-16 sm:px-14 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emerald/20 blur-3xl" aria-hidden />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Your next discovery <span className="text-gradient">starts here.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-dim">
              Get the Android APK, watch the full walkthrough, or read the source. PokéPod isn&rsquo;t on Google Play,
              so the APK is installed outside the store.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton href={LINKS.apk}><Download size={18} aria-hidden /> Download the APK</LinkButton>
              <LinkButton href={LINKS.walkthrough} variant="secondary"><Play size={18} aria-hidden /> Watch the walkthrough</LinkButton>
              <LinkButton href={LINKS.github} variant="ghost"><Github size={18} aria-hidden /> View on GitHub</LinkButton>
            </div>
          </div>
          <div className="mx-auto w-[220px] sm:w-[250px]">
            <PhoneFrame clip="onboarding" />
          </div>
        </div>
      </div>
    </section>
  );
}
