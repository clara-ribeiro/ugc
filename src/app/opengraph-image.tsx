import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { landing } from "@/content/landing";

export const alt = landing.site.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/clara.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#F9F8F6",
          color: "#1A1A1A",
          padding: "64px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            paddingRight: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "ui-monospace, monospace",
              fontSize: 22,
            }}
          >
            {landing.site.brand}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 54, lineHeight: 1.15, letterSpacing: "-0.03em" }}>
              Tech UGC for B2B SaaS, DevTools, and AI.
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontSize: 24,
                color: "#5C5C5C",
                lineHeight: 1.4,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Video ads written and recorded by software engineer {landing.person.name}.
            </div>
          </div>
        </div>
        <img
          src={photoSrc}
          width={420}
          height={502}
          alt=""
          style={{
            objectFit: "cover",
            borderRadius: 24,
            border: "1px solid #E5E5E5",
          }}
        />
      </div>
    ),
    size,
  );
}
