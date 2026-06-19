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
    "Magyar nyelvű AI-alapú értékesítési rendszer építőipari cégeknek: minden megkeresést fogad és kvalifikál, a megfelelő emberhez irányít, és minden árajánlatot utánkövet — az egészet Ön látja.",
};

export default function EpitoiparPage() {
  return (
    <div className="page page--epitoipar" data-screen-label="atriumscaling.com /epitoipar">
      <ScrollReveal />
      {/* ATRIUM-EDIT KV-C3 — problem-led order: leaks (Positioning) before solution (FullSystem) */}
      <HeroEpitoipar />
      <PositioningEpitoipar />
      <RealtimeDashboard />
      <FullSystemEpitoipar />
      <HowWeStart />
      <WorkPricingEpitoipar />
      <FaqEpitoipar />
      <FinalCtaEpitoipar />
      <Footer />
    </div>
  );
}
