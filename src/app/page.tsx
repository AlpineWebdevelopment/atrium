import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import DirectHero from "@/components/direct/DirectHero";
import DirectNow from "@/components/direct/DirectNow";
import DirectWhat from "@/components/direct/DirectWhat";
import DirectFeatures from "@/components/direct/DirectFeatures";
import DirectReport from "@/components/direct/DirectReport";
import DirectFaq from "@/components/direct/DirectFaq";
import DirectClose from "@/components/direct/DirectClose";
import DirectFooter from "@/components/direct/DirectFooter";
import ScrollReveal from "@/components/ScrollReveal";

/* The root landing. The argument: the AI talk being sold everywhere and what
   it actually brought → "Ismerős?", what the buyer has already paid for,
   measured in forint, hours and orders → what we call AI (the sales system,
   and bespoke work beside it) → four tiles on packages, technology, value and
   the dashboard → the questions everyone asks → one booking. No service list;
   the services have their own page.

   This was /direct while it was being shaped. /direct now redirects here
   (see proxy.ts), and the page it replaced is kept, unlinked and noindex, at
   /regi-fooldal. */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Unalmas már a sok szép AI-show, ami egy forintot se hoz?",
  description:
    "Pedig AI-ból élünk. A villogó demók, az okoskodó chatbotok, a forró levegő: átverés, és kimondjuk. Mi AI értékesítési rendszert építünk, ami megrendelést hoz, és megoldjuk, ami a cégében AI-jal tényleg megoldható.",
};

/* Body face for /direct only: Barlow's narrow, slightly technical shapes sit
   next to the Bebas headlines; the rest of the site keeps Outfit. */
const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-src",
});

export default function Home() {
  return (
    <div className={`page page--direct ${barlow.variable}`} data-screen-label="atriumscaling.com /">
      <ScrollReveal />
      <DirectHero />
      <DirectNow />
      <DirectWhat />
      <DirectFeatures />
      <DirectReport />
      <DirectFaq />
      <DirectClose />
      <DirectFooter />
    </div>
  );
}
