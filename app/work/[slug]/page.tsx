import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { workItems, getWorkItem } from "@/lib/workData";
import BackLink from "@/components/BackLink";
import HeroMedia from "@/components/HeroMedia";

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto");
}

export function generateStaticParams() {
  return workItems.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) return {};
  return {
    title: `${item.name} — Tyler Norcross`,
    description: item.tagline,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) notFound();

  return (
    <div style={{ backgroundColor: "#0C0C0C", color: "#F0F0F0", minHeight: "100vh" }}>

      {/* ── Fixed back nav ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          padding: "20px 40px",
          background: "linear-gradient(to bottom, rgba(12,12,12,0.9) 0%, transparent 100%)",
        }}
      >
        <BackLink />
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "11px",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          TYLER NORCROSS
        </span>
      </div>

      {/* ── Hero — full viewport, screenshot + gradient ── */}
      <div className="relative overflow-hidden h-dvh">
        {/* Background: image / video / mobile / placeholder */}
        <div className="absolute inset-0" style={{ backgroundColor: "#111111" }}>
          <HeroMedia
            name={item.name}
            imagePlaceholder={item.imagePlaceholder}
            imageSrc={item.imageSrc}
            imageSrcMobile={item.imageSrcMobile}
            videoSrc={item.videoSrc}
            media={item.media}
            priority
          />
        </div>

        {/* Base dim layer */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(12,12,12,1) 0%, rgba(12,12,12,0.8) 35%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        {/* Diagonal break — solid black wedge from top-left to bottom-center,
            matching the home-page background so the bottom-left headers stand out */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            clipPath: "polygon(0 0, 50% 100%, 0 100%)",
            backgroundColor: "#0C0C0C",
          }}
        />

        {/* Glistening white border along the diagonal edge (desktop only) */}
        <div className="absolute inset-0 diagonal-edge hidden md:block" />

        {/* Hero content — bottom left (full-width on mobile) */}
        <div className="absolute left-6 right-6 bottom-12 md:left-16 md:right-[40%] md:bottom-16">
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.38)",
              marginBottom: "12px",
            }}
          >
            {item.category}
          </p>
          <h1
            className="leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(36px, 8vw, 120px)",
              color: "#F0F0F0",
              marginBottom: "12px",
            }}
          >
            {item.name}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "18px",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {item.tagline}
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute hidden md:block"
          style={{
            bottom: "32px",
            right: "40px",
            fontSize: "8px",
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          SCROLL ↓
        </div>
      </div>

      {/* ── Content sections ── */}
      <div className="px-6 pt-16 pb-24 md:px-16 md:pt-20 md:pb-30" style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Overview */}
        <section style={{ marginBottom: "80px" }}>
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.22)",
              marginBottom: "20px",
            }}
          >
            OVERVIEW
          </p>
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(18px, 2vw, 24px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.72)",
              maxWidth: "760px",
            }}
          >
            {item.overview}
          </p>
        </section>

        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
            marginBottom: "80px",
          }}
        />

        {/* Highlights */}
        <section style={{ marginBottom: "80px" }}>
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.22)",
              marginBottom: "28px",
            }}
          >
            HIGHLIGHTS
          </p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
            {item.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-5"
                style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.2)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {h}
              </li>
            ))}
          </ul>
        </section>

        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
            marginBottom: "80px",
          }}
        />

        {/* Awards */}
        {item.awards.length > 0 && (
          <>
            <section style={{ marginBottom: "80px" }}>
              <p
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.3em",
                  color: "rgba(255,255,255,0.22)",
                  marginBottom: "20px",
                }}
              >
                RECOGNITION
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {item.awards.map((a) => (
                  <div
                    key={a}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 16px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      width: "fit-content",
                    }}
                  >
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>★</span>
                    <span style={{ fontSize: "12px", letterSpacing: "0.05em", color: "rgba(255,255,255,0.55)" }}>
                      {a}
                    </span>
                  </div>
                ))}
              </div>
            </section>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "rgba(255,255,255,0.06)",
                marginBottom: "80px",
              }}
            />
          </>
        )}

        {/* Tech stack */}
        <section style={{ marginBottom: "80px" }}>
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.22)",
              marginBottom: "28px",
            }}
          >
            TECH STACK
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            {Object.entries(item.stack).map(([group, items]) => (
              <div key={group}>
                <p
                  style={{
                    fontSize: "8px",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.2)",
                    marginBottom: "12px",
                  }}
                >
                  {group.toUpperCase()}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {items.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "10px",
                        padding: "4px 12px",
                        border: "1px solid rgba(255,255,255,0.14)",
                        color: "rgba(255,255,255,0.48)",
                        borderRadius: "999px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
            marginBottom: "80px",
          }}
        />

        {/* Screenshot placeholder strip */}
        <section style={{ marginBottom: "80px" }}>
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.22)",
              marginBottom: "20px",
            }}
          >
            SCREENSHOTS
          </p>
          {item.screenshots && item.screenshots.length > 0 ? (
            item.media === "mobile" ? (
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
                {item.screenshots.map((src, i) => (
                  <div
                    key={src}
                    className="relative"
                    style={{
                      width: "min(240px, 70vw)",
                      aspectRatio: "340 / 705",
                      backgroundColor: "#0d0d0d",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "18px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={src}
                      alt={`${item.name} screenshot ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 70vw, 240px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {item.screenshots.map((src, i) => (
                  <div
                    key={src}
                    className="relative"
                    style={{ height: "260px", backgroundColor: "#111111", overflow: "hidden" }}
                  >
                    <Image
                      src={src}
                      alt={`${item.name} screenshot ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  style={{
                    height: "260px",
                    backgroundColor: "#111111",
                    border: "1px dashed rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "8px",
                      letterSpacing: "0.25em",
                      color: "rgba(255,255,255,0.15)",
                    }}
                  >
                    [ SCREENSHOT {n} ]
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* External links */}
        {item.externalLinks.length > 0 && (
          <section>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.3em",
                color: "rgba(255,255,255,0.22)",
                marginBottom: "20px",
              }}
            >
              LINKS
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {item.externalLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...(isExternal(l.href)
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 22px",
                    border: "1px solid rgba(255,255,255,0.22)",
                    borderRadius: "999px",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                  }}
                >
                  {l.label} {isExternal(l.href) ? "↗" : "→"}
                </a>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "9px",
            letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.25)",
            textDecoration: "none",
          }}
        >
          ← BACK TO ALL WORK
        </Link>
        <p
          style={{
            fontSize: "8px",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.15)",
          }}
        >
          TYLER NORCROSS · 2026
        </p>
      </div>
    </div>
  );
}
