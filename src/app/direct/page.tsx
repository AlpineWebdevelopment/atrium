import type { Metadata } from "next";
import DirectHero from "@/components/direct/DirectHero";
import DirectNow from "@/components/direct/DirectNow";
import DirectWhat from "@/components/direct/DirectWhat";
import DirectRival from "@/components/direct/DirectRival";
import DirectMath from "@/components/direct/DirectMath";
import DirectNoShow from "@/components/direct/DirectNoShow";
import DirectClose from "@/components/direct/DirectClose";
import DirectFooter from "@/components/direct/DirectFooter";
import ScrollReveal from "@/components/ScrollReveal";

/* Direct-response surface, being shaped into the next root landing. The
   argument: enough of the AI circus → the show the buyer already sat through
   → what we sell (an AI sales system, and anything else AI can fix in the
   business) → the competitor already runs it → the operator's own
   arithmetic → what they get instead of a show → one booking. No service
   list; services get their own page. A closed surface: Nav does not render
   (STANDALONE in Nav.tsx) and every CTA goes to the booking page.

   noindex on purpose: it argues the same offer as the root landing, and two
   indexed pages competing for the same Hungarian queries would split the
   root's ranking. Drop `robots` and add it to sitemap.ts when it replaces
   the root. */
export const metadata: Metadata = {
  alternates: { canonical: "/direct" },
  robots: { index: false, follow: true },
  title: "Elég az AI-cirkuszból",
  description:
    "AI értékesítési rendszer szolgáltató cégeknek — és bármi, ami a cégében AI-jal megoldható. Demó és cirkusz nélkül: élesben fut, és forintban mérhető, mit hoz.",
};

export default function DirectPage() {
  return (
    <div className="page page--direct" data-screen-label="atriumscaling.com /direct">
      <ScrollReveal />
      <header className="dr-top">
        <a className="dr-top__brand" href="/direct">Atrium<span className="dr-top__dot">.</span></a>
        <a className="dr-top__cta" href="/foglalas?from=direct">Foglaljon időpontot</a>
      </header>
      <DirectHero />
      <DirectNow />
      <DirectWhat />
      <DirectRival />
      <DirectMath />
      <DirectNoShow />
      <DirectClose />
      <DirectFooter />
    </div>
  );
}
