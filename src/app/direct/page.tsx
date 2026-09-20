import type { Metadata } from "next";
import DirectHero from "@/components/direct/DirectHero";
import DirectNow from "@/components/direct/DirectNow";
import DirectRival from "@/components/direct/DirectRival";
import DirectMath from "@/components/direct/DirectMath";
import DirectNoShow from "@/components/direct/DirectNoShow";
import DirectClose from "@/components/direct/DirectClose";
import DirectFooter from "@/components/direct/DirectFooter";
import ScrollReveal from "@/components/ScrollReveal";

/* Direct-response surface. It deliberately does not reuse the root page's
   section taxonomy (Manifesto / dashboard / full system tour / custom builds):
   the argument runs loss → competitor → the operator's own arithmetic → what
   we are not → one booking. A closed surface, so Nav does not render on it
   (see STANDALONE in Nav.tsx) and every CTA goes to the booking page.

   noindex on purpose: this is a paid-traffic page arguing the same offer as
   the root landing, and two indexed pages competing for the same Hungarian
   queries would split the root's ranking. Drop `robots` and add it to
   sitemap.ts if it should ever be organic. */
export const metadata: Metadata = {
  alternates: { canonical: "/direct" },
  robots: { index: false, follow: true },
  title: "Mennyi bevétel megy el a nem fogadott hívásokon?",
  description:
    "Magyar nyelvű AI-alapú értékesítési rendszer szolgáltató cégeknek: felveszi a telefont éjjel és hétvégén is, időpontot foglal, és utánamegy az árajánlatnak. Számolja ki, mennyi megy el Önnél havonta.",
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
      <DirectRival />
      <DirectMath />
      <DirectNoShow />
      <DirectClose />
      <DirectFooter />
    </div>
  );
}
