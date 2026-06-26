import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at top left, rgba(0,82,255,0.28), transparent 32%), linear-gradient(180deg, #111111, #171717)",
          color: "#e5e2e1",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "56px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            border: "1px solid rgba(141,144,162,0.2)",
            borderRadius: "999px",
            color: "#b7c4ff",
            display: "flex",
            fontSize: 18,
            letterSpacing: 4,
            padding: "10px 18px",
            textTransform: "uppercase",
          }}
        >
          Systems Engineering Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 900 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            Building reliable mobile systems
          </div>
          <div style={{ display: "flex", fontSize: 28, lineHeight: 1.45, opacity: 0.82 }}>
            Flutter, backend services, payments, synchronization, and stateful UX.
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 24, fontWeight: 600 }}>
            {siteConfig.shortName}
          </div>
          <div style={{ color: "#b7c4ff", display: "flex", fontSize: 20 }}>
            ekearua@gmail.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
