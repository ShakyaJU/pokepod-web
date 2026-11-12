"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { CLIPS, POSTER, type ClipId } from "@/data/clips";

interface Props {
  clip: ClipId;
  /** Load the video immediately (use only for the hero). */
  eager?: boolean;
  /** Show a pause/play button. Leave on for anything that autoplays for more than 5 seconds. */
  controls?: boolean;
  className?: string;
}

/**
 * A device frame around a real screen recording of the app. The recording is shown at its native
 * aspect ratio (nothing is cropped or stretched). It plays only while visible, never for visitors
 * who prefer reduced motion, and can always be paused.
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
    <div
      className={`relative rounded-[2.6rem] bg-gradient-to-b from-[#2a3541] to-[#0d1319] p-[7px] shadow-phone ${className}`}
    >
      <div
        className="relative overflow-hidden rounded-[2.1rem] bg-obsidian"
        style={{ aspectRatio: "800 / 1667" }}
      >
        {reduce ? (
          <Image
            src={`/posters/${clip}.webp`}
            alt={meta.alt}
            width={POSTER.width}
            height={POSTER.height}
            sizes="(max-width: 640px) 70vw, 320px"
            priority={eager}
            className="h-full w-full object-contain"
          />
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
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
      </div>
    </div>
  );
}
