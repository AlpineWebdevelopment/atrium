import type { Metadata } from "next";
import DirectHero from "@/components/direct/DirectHero";
import DirectNow from "@/components/direct/DirectNow";
import DirectWhat from "@/components/direct/DirectWhat";
import DirectRival from "@/components/direct/DirectRival";
import DirectPayback from "@/components/direct/DirectPayback";
import DirectNoShow from "@/components/direct/DirectNoShow";
import DirectClose from "@/components/direct/DirectClose";
import DirectFooter from "@/components/direct/DirectFooter";
import ScrollReveal from "@/components/ScrollReveal";

/* Direct-response surface, being shaped into the next root landing. The
   argument: enough of the AI circus → the show the buyer already sat through
   → what we sell (an AI sales system, and anything else AI can fix in the
   business) → the competitor already runs it → payback in forint from
   their own numbers → what they get instead of a show → one booking. No service
   list; services get their own page. A closed surface: Nav does not render
   (STANDALONE in Nav.tsx) and every CTA goes to the booking page.

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

export default function DirectPage() {
  return (
    <div className="page page--direct" data-screen-label="atriumscaling.com /direct">
      <ScrollReveal />
      <DirectHero />
      <DirectNow />
      <DirectWhat />
      <DirectRival />
      <DirectPayback />
      <DirectNoShow />
      <DirectClose />
      <DirectFooter />
    </div>
  );
}
