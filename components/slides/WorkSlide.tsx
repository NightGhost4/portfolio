"use client";
import { motion } from "framer-motion";
import HeroMedia from "@/components/HeroMedia";

export interface WorkSlideData {
  category: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  imageSrc?: string;
  imageSrcMobile?: string;
  videoSrc?: string;
  media?: "desktop" | "mobile";
  imagePlaceholder: string;
  awards: string[];
  links: { label: string; href: string }[];
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto");
}

export default function WorkSlide({ data }: { data: WorkSlideData }) {
  return (
    <div className="relative w-full h-full">

      {/* ── Background: image / video / mobile / placeholder ── */}
      <div className="absolute inset-0" style={{ backgroundColor: "#111111" }}>
        <HeroMedia
          name={data.name}
          imagePlaceholder={data.imagePlaceholder}
          imageSrc={data.imageSrc}
          imageSrcMobile={data.imageSrcMobile}
          videoSrc={data.videoSrc}
          media={data.media}
        />
      </div>

      {/* ── Base dim layer ── */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} />

      {/* ── Gradient overlay — heavy at bottom ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* ── Diagonal break — solid black wedge from top-left to bottom-center,
          matching the home-page background so the bottom-left headers stand out ── */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          clipPath: "polygon(0 0, 50% 100%, 0 100%)",
          backgroundColor: "#0C0C0C",
        }}
      />

      {/* ── Glistening white border along the diagonal edge (desktop only) ── */}
      <div className="absolute inset-0 diagonal-edge hidden md:block" />

      {/* ── Content — anchored bottom-left (full-width on mobile) ── */}
      <div className="absolute left-6 right-6 bottom-12 md:left-16 md:right-[40%] md:bottom-20">
        {/* Category */}
        <motion.p
          className="text-white/38 mb-3"
          style={{ fontSize: "10px", letterSpacing: "0.28em" }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5, ease }}
        >
          {data.category}
        </motion.p>

        {/* Project name */}
        <motion.h2
          className="text-white leading-none mb-3"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(36px, 7.5vw, 110px)",
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease }}
        >
          {data.name}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-white/55 mb-2"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "16px",
            fontStyle: "italic",
          }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease }}
        >
          {data.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-white/35 leading-relaxed mb-5"
          style={{ fontSize: "12px", maxWidth: "480px" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5, ease }}
        >
          {data.description}
        </motion.p>

        {/* Awards */}
        {data.awards.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2 mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease }}
          >
            {data.awards.map((a) => (
              <span
                key={a}
                className="text-white/45 rounded-full"
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.12em",
                  padding: "3px 10px",
                  border: "1px solid rgba(255,255,255,0.22)",
                }}
              >
                ★ {a}
              </span>
            ))}
          </motion.div>
        )}

        {/* Tech pills */}
        <motion.div
          className="flex flex-wrap gap-2 mb-7"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5, ease }}
        >
          {data.tech.map((t) => (
            <span
              key={t}
              className="text-white/50 rounded-full"
              style={{
                fontSize: "9px",
                letterSpacing: "0.15em",
                padding: "4px 13px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5, ease }}
        >
          {data.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(isExternal(l.href)
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex items-center gap-2 text-white/80 rounded-full transition-all hover:bg-white/12 hover:text-white"
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                padding: "9px 22px",
                border: "1px solid rgba(255,255,255,0.28)",
              }}
            >
              {l.label}&nbsp;{l.label === "LIVE" ? "↗" : "→"}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
