/* Thin route wrapper.
   The demo itself lives in src/app/_demo/nika/ — a private folder, which Next
   opts out of routing entirely. This page is the only thing that makes it
   reachable; delete it and the demo goes dark without touching the demo code.

   Deliberately noindex: it is a client demo, not a public marketing page, and
   it is not listed in sitemap.ts. */

import type { Metadata } from "next";
import NikaDemo from "../_demo/nika/NikaDemo";

export const metadata: Metadata = {
  title: "NIKA feladatkezelő — demó",
  description: "Belső demó: eladó- és vevőminősítés, adatlapok, pontozott párosítások.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function Page() {
  return <NikaDemo />;
}
