"use client";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const links = [
  {
    label: "EMAIL",
    display: "tylernorcross04@gmail.com",
    href: "mailto:tylernorcross04@gmail.com",
  },
  {
    label: "LINKEDIN",
    display: "linkedin.com/in/tyler-norcross",
    href: "https://linkedin.com/in/tyler-norcross",
  },
  {
    label: "GITHUB",
    display: "github.com/NightGhost4",
    href: "https://github.com/NightGhost4",
  },
  {
    label: "RESUME",
    display: "Download PDF",
    href: "/tyler_norcross_resume.pdf",
  },
];

const f = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

export default function ContactSlide() {
  return (
    <div
      className="w-full h-full overflow-y-auto touch-pan-y flex items-start md:items-center py-20 md:py-0"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* Large decorative bg text */}
      <div
        className="absolute right-0 bottom-0 select-none pointer-events-none hidden md:block"
        style={{ lineHeight: 0.85, overflow: "hidden" }}
      >
        <p
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(100px, 20vw, 300px)",
            color: "rgba(255,255,255,0.022)",
          }}
        >
          CONTACT
        </p>
      </div>

      <div
        className="relative z-10 px-6 md:px-20"
        style={{ maxWidth: "900px" }}
      >
        <motion.p
          className="text-white/22 mb-10"
          style={{ fontSize: "9px", letterSpacing: "0.32em" }}
          {...f(0)}
        >
          [ AVAILABLE FROM MAY 2026 ]
        </motion.p>

        <motion.h2
          className="text-white leading-none mb-6"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(40px, 9vw, 118px)",
          }}
          {...f(0.06)}
        >
          CURRENTLY
          <br />
          OPEN TO
          <br />
          <span style={{ color: "rgba(255,255,255,0.28)" }}>
            FULL-TIME ROLES.
          </span>
        </motion.h2>

        <motion.p
          className="text-white/40 mb-12"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "16px",
            fontStyle: "italic",
            maxWidth: "480px",
          }}
          {...f(0.14)}
        >
          If you&apos;re building something at the intersection of AI and
          product — let&apos;s talk.
        </motion.p>

        {/* Contact links */}
        <motion.div className="flex flex-col gap-3" {...f(0.2)}>
          {links
            .filter((l) => !l.href.startsWith("["))
            .map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.href.startsWith("http") || l.href.endsWith(".pdf")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group inline-flex items-center gap-5 transition-all"
              style={{ width: "fit-content" }}
            >
              <span
                className="text-white/22 group-hover:text-white/50 transition-colors"
                style={{ fontSize: "8px", letterSpacing: "0.25em", minWidth: "64px" }}
              >
                {l.label}
              </span>
              <span
                className="text-white/55 group-hover:text-white/85 transition-colors"
                style={{ fontSize: "13px" }}
              >
                {l.display}
              </span>
              <span
                className="text-white/20 group-hover:text-white/45 transition-all group-hover:translate-x-1"
                style={{ display: "inline-block", fontSize: "11px" }}
              >
                →
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
