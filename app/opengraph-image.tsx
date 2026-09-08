import { ImageResponse } from "next/og";

export const alt = "Tyler Norcross — Software Engineer @ SideShift";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social share card, echoing the site's dark, diagonal aesthetic.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#0C0C0C",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Diagonal accent line */}
        <div
          style={{
            position: "absolute",
            top: "115px",
            left: "330px",
            width: "4px",
            height: "900px",
            backgroundColor: "rgba(255,255,255,0.5)",
            boxShadow: "0 0 18px rgba(255,255,255,0.6)",
            transform: "rotate(28deg)",
          }}
        />

        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            color: "rgba(255,255,255,0.42)",
            marginBottom: 22,
          }}
        >
          FULL STACK SOFTWARE ENGINEER
        </div>

        <div
          style={{
            fontSize: 132,
            fontWeight: 700,
            color: "#F0F0F0",
            lineHeight: 1,
            letterSpacing: -3,
          }}
        >
          TYLER NORCROSS
        </div>

        <div
          style={{
            fontSize: 30,
            color: "rgba(255,255,255,0.5)",
            marginTop: 30,
            width: 880,
            lineHeight: 1.35,
          }}
        >
          AI-native software — agentic systems, full-stack platforms, and the
          infrastructure that makes intelligent products work in production.
        </div>
      </div>
    ),
    { ...size }
  );
}
