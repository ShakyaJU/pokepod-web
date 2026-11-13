"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { CLIPS, POSTER, type ClipId } from "@/data/clips";

/**
 * The shared device chrome (Galaxy S25 Ultra proportions, see .phone-* in globals.css).
 * Everything that shows an app screen goes through this, so all phones on the site match.
 * The screen is 19.5:9; recordings are fitted inside it with `object-contain`, never cropped or stretched.
 */
export function PhoneShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`phone-wrap ${className}`}>
      <div className="phone-shell shadow-phone ring-1 ring-white/10">
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  );
}

interface StillProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/** A still screenshot inside the same device chrome. */
export function PhoneStill({ src, alt, width, height, sizes, priority = false, className = "" }: StillProps) {
  return (
    <PhoneShell className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="absolute inset-0 h-full w-full object-contain"
      />
    </PhoneShell>
  );
}

interface Props {
  clip: ClipId;
  /** Load the video immediately (use only for the hero). */
  eager?: boolean;
  /** Show a pause/play button. */
  controls?: boolean;
  className?: string;
}

/**
 * A device frame around a real screen recording of the app. It plays only while visible, never for
 * visitors who prefer reduced motion, and can be paused when controls are shown.
 */
export function PhoneFrame({ clip, eager = false, controls = true, className = "" }: Props) {
  const meta = CLIPS[clip];
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting && !userPaused.current) {
          video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduce]);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().then(() => setPlaying(true)).catch(() => undefined);
    } else {
      userPaused.current = true;
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <PhoneShell className={className}>
      {reduce ? (
        <Image
          src={`/posters/${clip}.webp`}
          alt={meta.alt}
          width={POSTER.width}
          height={POSTER.height}
          sizes="(max-width: 640px) 70vw, 320px"
          priority={eager}
          className="absolute inset-0 h-full w-full object-contain"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-contain"
          poster={`/posters/${clip}.webp`}
          muted
          loop
          playsInline
          preload={eager ? "auto" : "none"}
          aria-label={meta.alt}
        >
          <source src={`/clips/${clip}.webm`} type="video/webm" />
          <source src={`/clips/${clip}.mp4`} type="video/mp4" />
        </video>
      )}
      {controls && !reduce && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Pause ${meta.title} preview` : `Play ${meta.title} preview`}
          className="absolute bottom-3 right-3 grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80"
        >
          {playing ? <Pause size={18} aria-hidden /> : <Play size={18} aria-hidden />}
        </button>
      )}
    </PhoneShell>
  );
}
