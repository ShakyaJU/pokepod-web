import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { DISCLAIMER, LINKS, SITE } from "@/lib/site";

const explore = [
  { href: "/features", label: "Features" },
  { href: "/#explore", label: "Explore the app" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface1/60 px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image src="/brand/logo.png" alt="PokéPod" width={132} height={39} className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-dim">
            An unofficial Pokémon research and discovery companion for Android. Local-first: no account, no
            backend, no analytics.
          </p>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink hover:text-emerald"
          >
            <Github size={18} aria-hidden /> ShakyaJU/pokepod
            <span className="sr-only"> (opens GitHub in a new tab)</span>
          </a>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-dim">Explore</h2>
          <ul className="mt-4 space-y-1">
            {explore.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-10 items-center text-sm text-ink hover:text-emerald">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal and credits">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-dim">Legal &amp; credits</h2>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <Link href="/privacy" className="inline-flex min-h-10 items-center text-ink hover:text-emerald">
                Privacy
              </Link>
            </li>
            <li>
              <a href={LINKS.notices} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center text-ink hover:text-emerald">
                Third-party notices
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={LINKS.pokeapi} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center text-ink hover:text-emerald">
                Data: PokéAPI
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-xs leading-relaxed text-dim">
        <p>{DISCLAIMER}</p>
        <p className="mt-3">
          © {new Date().getFullYear()} {SITE.author}. PokéPod&rsquo;s original source code is MIT-licensed; that licence
          does not cover Pokémon names, characters or artwork.
        </p>
      </div>
    </footer>
  );
}
