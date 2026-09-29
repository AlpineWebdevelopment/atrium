import type { Metadata } from "next";

/* The landing lives at the root, but the root is held back by the
   maintenance notice while we finish it. This route serves the same page at
   its old address, so it can be opened and shown while the root stays down.
   Noindex, and the canonical points at the root, so nothing here competes
   with "/" in search. */
export { default } from "../page";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
  title: "Unalmas már a sok szép AI-show, ami egy forintot se hoz?",
  description:
    "Pedig AI-ból élünk. A villogó demók, az okoskodó chatbotok, a forró levegő: átverés, és kimondjuk. Mi AI értékesítési rendszert építünk, ami megrendelést hoz, és megoldjuk, ami a cégében AI-jal tényleg megoldható.",
};
