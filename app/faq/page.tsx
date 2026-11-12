import type { Metadata } from "next";
import { FaqList } from "@/components/sections/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { LinkButton } from "@/components/ui/LinkButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { FAQ } from "@/data/faq";
import { LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about PokéPod: availability, Android widgets, offline use, data storage and how to report a bug.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHeader eyebrow="FAQ" title="Frequently asked questions" lede="Answered from the app's source and documentation. Where the project is silent, the answer says so." />
      <div className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <FaqList />
          <p className="mt-10 text-dim">Still curious? Open an issue and ask.</p>
          <LinkButton href={LINKS.issues} variant="secondary" className="mt-4">Open a GitHub issue</LinkButton>
        </div>
      </div>
    </>
  );
}
