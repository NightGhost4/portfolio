"use client";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

interface HeroMediaProps {
  name: string;
  imagePlaceholder: string;
  imageSrc?: string;
  videoSrc?: string;
  /** "mobile" => portrait phone assets, shown contained over a blurred backdrop. */
  media?: "desktop" | "mobile";
  /** Poster shown before/instead of the video; defaults to imageSrc. */
  poster?: string;
  /** Mark as LCP (detail-page hero). */
  priority?: boolean;
}

/**
 * Background media layer for a work hero. Fills its (absolutely-positioned)
 * parent. Handles four cases: autoplaying video, desktop image, portrait/mobile
 * image, and a labelled placeholder. Honors prefers-reduced-motion by showing a
 * still poster instead of autoplaying video.
 */
export default function HeroMedia({
  name,
  imagePlaceholder,
  imageSrc,
  videoSrc,
  media = "desktop",
  poster,
  priority,
}: HeroMediaProps) {
  const reduceMotion = useReducedMotion();

  if (videoSrc && !reduceMotion) {
    return (
      <video
        src={videoSrc}
        poster={poster ?? imageSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
      />
    );
  }

  // Reduced motion (or no video): fall back to the still image.
  const stillSrc = videoSrc ? poster ?? imageSrc : imageSrc;

  if (stillSrc) {
    if (media === "mobile") {
      return (
        <>
          {/* Blurred ambient backdrop so portrait assets fill the wide frame */}
          <Image
            src={stillSrc}
            alt=""
            aria-hidden
            fill
            priority={priority}
            sizes="100vw"
            style={{ objectFit: "cover", filter: "blur(48px) brightness(0.4)", transform: "scale(1.15)" }}
          />
          {/* Sharp phone screenshot, rounded like a device, left of center */}
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "40%",
              transform: "translate(-50%, -50%)",
              height: "72%",
              aspectRatio: "339 / 706",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Image
              src={stillSrc}
              alt={name}
              fill
              sizes="(max-width: 768px) 60vw, 360px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </>
      );
    }
    return (
      <Image
        src={stillSrc}
        alt={name}
        fill
        priority={priority}
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center top" }}
      />
    );
  }

  // No media yet — labelled placeholder.
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <p
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ fontSize: "10px", letterSpacing: "0.3em", color: "rgba(255,255,255,0.08)" }}
      >
        [ {imagePlaceholder} ]
      </p>
    </>
  );
}
