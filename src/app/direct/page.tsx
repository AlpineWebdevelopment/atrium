import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import DirectHero from "@/components/direct/DirectHero";
import DirectNow from "@/components/direct/DirectNow";
import DirectWhat from "@/components/direct/DirectWhat";
import DirectFeatures from "@/components/direct/DirectFeatures";
import DirectReport from "@/components/direct/DirectReport";
import DirectClose from "@/components/direct/DirectClose";
import DirectFooter from "@/components/direct/DirectFooter";
import ScrollReveal from "@/components/ScrollReveal";

/* Direct-response surface, being shaped into the next root landing. The
   argument: the AI show that brings no money → "Ismerős?", what the buyer
   has already paid for, measured in forint, hours and orders → what we call
   AI (the sales system, and anything else AI can solve) → four rows on
   packages, technology, value and the dashboard → one booking. No
   service list; services get their own page. A closed surface: Nav does not
   render (STANDALONE in Nav.tsx) and every CTA goes to the booking page.

   noindex on purpose: it argues the same offer as the root landing, and two
   indexed pages competing for the same Hungarian queries would split the
   root's ranking. Drop `robots` and add it to sitemap.ts when it replaces
   the root. */
export const metadata: Metadata = {
  alternates: { canonical: "/direct" },
  robots: { index: false, follow: true },
  title: "Unalmas már a sok szép AI-show, ami egy forintot se hoz?",
  description:
    "Pedig AI-ból élünk. A villogó demók, az okoskodó chatbotok, a forró levegő — átverés, és kimondjuk. Mi AI értékesítési rendszert építünk, ami megrendelést hoz, és megoldjuk, ami a cégében AI-jal tényleg megoldható.",
};

/* Body face for /direct only: Barlow's narrow, slightly technical shapes sit
   next to the Bebas headlines; the rest of the site keeps Outfit. */
const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-src",
});

export default function DirectPage() {
  return (
    <div className={`page page--direct ${barlow.variable}`} data-screen-label="atriumscaling.com /direct">
      <ScrollReveal />
      <DirectHero />
      <DirectNow />
      <DirectWhat />
      <DirectFeatures />
      <DirectReport />
      <DirectClose />
      <DirectFooter />
    </div>
  );
}
