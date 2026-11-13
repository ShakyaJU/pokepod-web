import type { Metadata } from "next";
import { AndroidSection } from "@/components/sections/AndroidSection";
import { Bento } from "@/components/sections/Bento";
import { FaqList } from "@/components/sections/FaqList";
import { FeatureStory } from "@/components/sections/FeatureStory";
import { FinalCta } from "@/components/sections/FinalCta";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { PrivacySummary } from "@/components/sections/PrivacySummary";
import { WhosThat } from "@/components/sections/WhosThat";
import { WhyPokepod } from "@/components/sections/WhyPokepod";
import { JsonLd } from "@/components/ui/JsonLd";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { LINKS, SITE } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: SITE.name,
          description: SITE.description,
          applicationCategory: "EntertainmentApplication",
          operatingSystem: "Android",
          url: SITE.url,
          codeRepository: LINKS.github,
          author: { "@type": "Person", name: SITE.author, url: LINKS.authorProfile },
        }}
      />
      <Hero />
      <WhyPokepod />
      <Section
        id="features"
        eyebrow="Features"
        title="Six instruments, one app."
        lede="Scroll to watch each tool come to life in the real app."
      >
        <FeatureStory />
        <div className="mt-12">
          <LinkButton href="/features" variant="secondary">See every feature</LinkButton>
        </div>
      </Section>
      <Bento />
      <WhosThat />
      <AndroidSection />
      <Gallery />
      <PrivacySummary />
      <Section eyebrow="FAQ" title="Questions, answered." className="pb-4">
        <FaqList limit={5} />
        <div className="mt-8">
          <LinkButton href="/faq" variant="secondary">All questions</LinkButton>
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
