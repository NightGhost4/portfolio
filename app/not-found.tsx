import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{
        backgroundColor: "#0C0C0C",
        color: "#F0F0F0",
        minHeight: "100vh",
        padding: "0 24px",
      }}
    >
      {/* Faint radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.012) 45%, transparent 75%)",
        }}
      />

      <div className="relative">
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.32em",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "20px",
          }}
        >
          ERROR 404
        </p>

        <h1
          className="leading-none"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(80px, 16vw, 220px)",
            color: "#F0F0F0",
            marginBottom: "20px",
          }}
        >
          LOST THE THREAD
        </h1>

        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "18px",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "40px",
          }}
        >
          This page doesn&apos;t exist — or hasn&apos;t been built yet.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 28px",
            border: "1px solid rgba(255,255,255,0.28)",
            borderRadius: "999px",
            fontSize: "10px",
            letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.7)",
            textDecoration: "none",
          }}
        >
          BACK TO HOME →
        </Link>
      </div>
    </div>
  );
}
