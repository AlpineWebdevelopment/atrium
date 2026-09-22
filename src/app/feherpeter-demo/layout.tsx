/* Thin route wrappers.
   The demo lives in src/app/_demo/feherpeter/ — a private folder Next keeps
   out of routing. This subtree is the only thing that makes it reachable;
   delete src/app/feherpeter-demo/ and the demo goes dark.

   noindex on purpose: a client demo, not a marketing page, and absent from
   sitemap.ts. The fonts are the ones feherpeter.hu loads — Playfair Display
   for headings, Raleway for body — with latin-ext for ő and ű. */

import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import Shell from "../_demo/feherpeter/ui/Shell";
import { CONFIG } from "../_demo/feherpeter/data/config";

const display = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fp-display",
  display: "swap",
});
const body = Raleway({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fp-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: CONFIG.brandName, template: `%s · ${CONFIG.brandName}` },
  description: "Belső demó: egyszemélyes mentori tagsági platform, mintaadatokkal.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function FeherPeterDemoLayout({ children }: { children: React.ReactNode }) {
  return <Shell fontClass={`${display.variable} ${body.variable}`}>{children}</Shell>;
}
