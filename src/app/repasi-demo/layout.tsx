/* Thin route wrappers.
   The demo itself lives in src/app/_demo/repasi/ — a private folder, which
   Next opts out of routing entirely. This subtree is the only thing that makes
   it reachable; delete src/app/repasi-demo/ and the demo goes dark without
   touching the demo code.

   Deliberately noindex: it is a client demo, not a public marketing page, and
   it is not listed in sitemap.ts. */

import type { Metadata } from "next";
import Shell from "../_demo/repasi/ui/Shell";
import { APP_NAME } from "../_demo/repasi/lib/data";

export const metadata: Metadata = {
  title: `${APP_NAME} — demó konzol`,
  description: "Belső demó: többügyfeles AI értékesítési konzol, kitalált adatokkal.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function RepasiDemoLayout({ children }: { children: React.ReactNode }) {
  return <Shell>{children}</Shell>;
}
