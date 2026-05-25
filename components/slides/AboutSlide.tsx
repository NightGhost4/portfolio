"use client";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const stats = [
  { value: "MAY 2026", label: "UNH CS Graduate" },
  { value: "2 YRS", label: "Building in Production" },
  { value: "2", label: "Companies Co-Founded" },
  { value: "4+", label: "AI Projects Shipped" },
];

const skills = [
  "TypeScript", "Python", "React", "Next.js", "Node.js",
  "OpenAI API", "Claude API", "RAG Pipelines", "LangChain",
  "Pinecone", "PostgreSQL", "MongoDB", "GCP", "Docker",
];

const f = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

export default function AboutSlide() {
  return (
    <div
      className="w-full h-full overflow-y-auto touch-pan-y flex items-start md:items-center py-20 md:py-0"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* Large decorative background text */}
      <div
        className="absolute right-0 bottom-0 select-none pointer-events-none leading-none hidden md:block"
        style={{ overflow: "hidden" }}
      >
        <p
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(120px, 22vw, 340px)",
            color: "rgba(255,255,255,0.025)",
            lineHeight: 0.85,
          }}
        >
          ABOUT
        </p>
      </div>

      <div
        className="relative z-10 w-full px-6 md:px-20"
        style={{ maxWidth: "1300px", margin: "0 auto" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left column */}
          <div>
            <motion.p
              className="text-white/22 mb-8"
              style={{ fontSize: "9px", letterSpacing: "0.32em" }}
              {...f(0)}
            >
              [ ABOUT ]
            </motion.p>

            <motion.p
              className="text-white/75 leading-relaxed mb-8"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(16px, 1.8vw, 22px)",
                fontStyle: "italic",
              }}
              {...f(0.08)}
            >
              I&apos;ve spent the last two years building real products rather
              than waiting on my graduation date.
            </motion.p>

            <motion.p
              className="text-white/45 leading-relaxed"
              style={{ fontSize: "13px" }}
              {...f(0.15)}
            >
              My work sits at the intersection of AI infrastructure and product
              engineering. I&apos;ve co-founded a venture-backed SaaS platform,
              shipped client software across finance and healthtech, built
              vector-based matching systems, and designed multimodal AI feedback
              loops... all while competing in and winning university
              entrepreneurship programs.
            </motion.p>

            <motion.p
              className="text-white/45 leading-relaxed mt-4"
              style={{ fontSize: "13px" }}
              {...f(0.2)}
            >
              As a previous founding engineer at Agent Integrator, I&apos;m well-versed in AI-native
              architecture, embedding products inside businesses workflows, and shipping
              agentic systems & orchestration layers.
            </motion.p>
          </div>

          {/* Right column */}
          <div>
            {/* Stats grid */}
            <motion.div
              className="grid grid-cols-2 gap-px mb-12"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              {...f(0.1)}
            >
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="p-5"
                  style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p
                    className="text-white/80 leading-none mb-1"
                    style={{ fontFamily: "var(--font-bebas)", fontSize: "28px" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-white/28"
                    style={{ fontSize: "9px", letterSpacing: "0.14em" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div {...f(0.18)}>
              <p
                className="text-white/22 mb-4"
                style={{ fontSize: "8px", letterSpacing: "0.28em" }}
              >
                SKILLS
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-white/45 rounded-full"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      padding: "4px 12px",
                      border: "1px solid rgba(255,255,255,0.14)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
