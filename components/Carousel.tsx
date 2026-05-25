"use client";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroSlide from "./slides/IntroSlide";
import AboutSlide from "./slides/AboutSlide";
import WorkSlide, { type WorkSlideData } from "./slides/WorkSlide";
import ContactSlide from "./slides/ContactSlide";
import { workItems } from "@/lib/workData";

type Slide =
  | { type: "intro" }
  | { type: "about" }
  | ({ type: "work" } & WorkSlideData)
  | { type: "contact" };

const SLIDES: Slide[] = [
  { type: "intro" },
  { type: "about" },
  ...workItems.map((w) => ({
    type: "work" as const,
    category: w.category,
    name: w.name,
    tagline: w.tagline,
    description: w.description,
    tech: w.tech,
    imageSrc: w.imageSrc,
    videoSrc: w.videoSrc,
    media: w.media,
    imagePlaceholder: w.imagePlaceholder,
    awards: w.awards,
    links: w.carouselLinks,
  })),
  { type: "contact" },
];

const TOTAL = SLIDES.length;

const variants = {
  enter: (d: number) => ({ opacity: 0, y: d * 22 }),
  center: { opacity: 1, y: 0 },
  exit: (d: number) => ({ opacity: 0, y: d * -22 }),
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function NavArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const [active, setActive] = useState(false);
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      aria-label={isLeft ? "Previous slide" : "Next slide"}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={`absolute ${isLeft ? "left-5" : "right-5"} top-1/2 -translate-y-1/2 z-50 flex items-center justify-center`}
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: `1px solid rgba(255,255,255,${active ? 0.55 : 0.2})`,
        color: `rgba(255,255,255,${active ? 0.85 : 0.4})`,
        transition: "border-color 0.2s, color 0.2s",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d={isLeft ? "M9 2L4 7L9 12" : "M5 2L10 7L5 12"}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (step: 1 | -1) => {
      setDir(step);
      setIndex((i) => (i + step + TOTAL) % TOTAL);
    },
    []
  );

  const jumpTo = useCallback(
    (i: number) => {
      setDir(i > index ? 1 : -1);
      setIndex(i);
    },
    [index]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const slide = SLIDES[index];

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: "#0C0C0C" }}>

      {/* ── Slide content ── */}
      <AnimatePresence initial={false} custom={dir} mode="wait">
        <motion.div
          key={index}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease }}
          className="absolute inset-0"
        >
          {slide.type === "intro" && <IntroSlide />}
          {slide.type === "about" && <AboutSlide />}
          {slide.type === "work" && <WorkSlide data={slide} />}
          {slide.type === "contact" && <ContactSlide />}
        </motion.div>
      </AnimatePresence>

      {/* ── Slide counter (top-right) ── */}
      <div className="absolute top-7 right-8 z-50 pointer-events-none">
        <span
          className="text-white/30"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </span>
      </div>

      {/* ── Navigation arrows ── */}
      <NavArrow direction="left" onClick={() => go(-1)} />
      <NavArrow direction="right" onClick={() => go(1)} />

      {/* ── Dot navigation (bottom-center) ── */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-50 flex gap-2 items-center">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => jumpTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300"
            style={{
              height: "4px",
              width: i === index ? "22px" : "6px",
              borderRadius: "2px",
              backgroundColor:
                i === index
                  ? "rgba(255,255,255,0.65)"
                  : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
