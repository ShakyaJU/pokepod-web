"use client";

import { useRef, useState } from "react";
import { X } from "lucide-react";
import { CLIPS, POSTER, type ClipId } from "@/data/clips";
import { PhoneFrame, PhoneStill } from "@/components/ui/PhoneFrame";
import { Section } from "@/components/ui/Section";

const ITEMS: ClipId[] = [
  "onboarding", "discover", "pokedex", "constellation", "dna", "team", "collections", "whos-that",
  "profile", "achievements", "journal", "settings", "backup", "help", "about", "widgets",
];

export function Gallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<ClipId | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  function show(id: ClipId, el: HTMLElement) {
    triggerRef.current = el;
    setOpen(id);
    dialogRef.current?.showModal();
  }
  function close() {
    dialogRef.current?.close();
  }

  return (
    <Section
      id="explore"
      eyebrow="Explore the experience"
      title="Every screen, up close."
      lede="Real recordings from the app. Select any screen to open it larger."
    >
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {ITEMS.map((id) => (
          <li key={id}>
            <button
              type="button"
              onClick={(e) => show(id, e.currentTarget)}
              aria-haspopup="dialog"
              className="group block w-full text-left"
            >
              <span className="block transition duration-200 group-hover:-translate-y-1">
                <PhoneStill
                  src={`/posters/${id}.webp`}
                  alt={CLIPS[id].alt}
                  width={POSTER.width}
                  height={POSTER.height}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                />
              </span>
              <span className="mt-3 block text-sm font-semibold text-ink">{CLIPS[id].title}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => {
          setOpen(null);
          triggerRef.current?.focus();
        }}
        onClick={(e) => e.target === dialogRef.current && close()}
        aria-label={open ? `${CLIPS[open].title} preview` : "Screen preview"}
        className="m-auto max-h-[96vh] w-[min(92vw,380px)] overflow-visible bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        {open && (
          <div className="relative">
            <button
              type="button"
              onClick={close}
              aria-label="Close preview"
              className="absolute -top-14 right-0 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X size={20} aria-hidden />
            </button>
            <p className="mb-3 text-center font-display text-xl font-semibold text-white">{CLIPS[open].title}</p>
            <div className="mx-auto w-[min(70vw,300px)] sm:w-[300px]">
              <PhoneFrame clip={open} eager />
            </div>
          </div>
        )}
      </dialog>
    </Section>
  );
}
