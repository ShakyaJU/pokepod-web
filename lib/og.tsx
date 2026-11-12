import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_ALT = "PokéPod: Beyond the Pokédex.";

/** Branded 1200x630 social preview, shared by the Open Graph and Twitter image routes. */
export async function renderOgImage() {
  const logo = await readFile(path.join(process.cwd(), "public", "brand", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const chips = ["1,025 species", "Daily challenge", "Android widgets", "Local-first"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#0A0E12",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(45,212,160,0.35), rgba(10,14,18,0) 45%), radial-gradient(circle at 10% 100%, rgba(94,234,242,0.18), rgba(10,14,18,0) 50%)",
          color: "#E8EEF2",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={330} height={97} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Your Pokémon journey, reimagined.
          </div>
          <div style={{ marginTop: 20, fontSize: 30, color: "#8A97A3" }}>
            A research and discovery companion for Android
          </div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {chips.map((c) => (
            <div
              key={c}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(45,212,160,0.5)",
                color: "#2DD4A0",
                fontSize: 24,
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
