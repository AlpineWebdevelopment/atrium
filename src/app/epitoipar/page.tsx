import type { Metadata } from "next";
import HeroEpitoipar from "@/components/HeroEpitoipar";
import RealtimeDashboard from "@/components/RealtimeDashboard";
import FullSystemEpitoipar from "@/components/FullSystemEpitoipar";
import PositioningEpitoipar from "@/components/PositioningEpitoipar";
import HowWeStart from "@/components/HowWeStart";
/* ATRIUM-EDIT KV8 — value-based construction pricing (no price shown); KV-C1: CustomSolutions excluded */
import WorkPricingEpitoipar from "@/components/WorkPricingEpitoipar";
/* ATRIUM-EDIT KV-C2 — QualifierCrm excluded; cost-bar implication false at full-system value-based pricing */
import FaqEpitoipar from "@/components/FaqEpitoipar";
import FinalCtaEpitoipar from "@/components/FinalCtaEpitoipar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Atrium — Építőipari cégek AI-alapú értékesítési rendszere",
  description:
    "Magyar nyelvű AI-rendszer építőipari cégeknek: minden hívást fogad, minden érdeklődőt visszahív, és minden árajánlatot utánkövet — amíg Ön a munkán van.",
};

export default function EpitoiparPage() {
  return (
    <div className="page page--epitoipar" data-screen-label="atriumscaling.com /epitoipar">
      <ScrollReveal />
      <HeroEpitoipar />
      <RealtimeDashboard />
      <FullSystemEpitoipar />
      <PositioningEpitoipar />
      <HowWeStart />
      <WorkPricingEpitoipar />
      <FaqEpitoipar />
      <FinalCtaEpitoipar />
      <Footer />
    </div>
  );
}
