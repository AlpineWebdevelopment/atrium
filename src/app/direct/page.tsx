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
   the argument runs money on the table → the customer decides without you →
   the competitor is faster → the operator's own arithmetic → what we are not
   → one booking. Deliberately no product label and no service list; services
   get their own page. A closed surface, so Nav does not render on it
   (see STANDALONE in Nav.tsx) and every CTA goes to the booking page.

   noindex on purpose: this is a paid-traffic page arguing the same offer as
   the root landing, and two indexed pages competing for the same Hungarian
   queries would split the root's ranking. Drop `robots` and add it to
   sitemap.ts if it should ever be organic. */
export const metadata: Metadata = {
  alternates: { canonical: "/direct" },
  robots: { index: false, follow: true },
  title: "Minden nap pénzt hagy az asztalon",
  description:
    "Szolgáltató cégeknek: 30 perc alatt kiszámoljuk az Ön számaiból, mennyi pénzt hagy az asztalon — és ha megéri, visszahozzuk.",
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
