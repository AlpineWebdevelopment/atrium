import type { Metadata } from "next";
import HeroKlima from "@/components/HeroKlima";
import RealtimeDashboardKlima from "@/components/RealtimeDashboardKlima";
import FullSystemKlima from "@/components/FullSystemKlima";
import PositioningKlima from "@/components/PositioningKlima";
import HowWeStart from "@/components/HowWeStart";
/* ATRIUM-EDIT KV8 — value-based klíma pricing (no price shown); KV-C1: CustomSolutions excluded */
import WorkPricingKlima from "@/components/WorkPricingKlima";
/* ATRIUM-EDIT KV-C2 — QualifierCrm excluded; cost-bar implication false at full-system value-based pricing */
import FaqKlima from "@/components/FaqKlima";
import FinalCtaKlima from "@/components/FinalCtaKlima";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Atrium — Klímaszervizek AI-alapú értékesítési rendszere",
  description:
    "Magyar nyelvű AI-alapú értékesítési rendszer klímaszervizeknek: a hőségcsúcson is minden hívást fogad és kvalifikál, a megfelelő emberhez irányít, minden ajánlatot utánkövet és jelzi az esedékes karbantartásokat — az egészet Ön látja.",
};

export default function KlimaPage() {
  return (
    <div className="page page--klima" data-screen-label="atriumscaling.com /klima">
      <ScrollReveal />
      {/* ATRIUM-EDIT KV-C3 — problem-led order: leaks (Positioning) before solution (FullSystem) */}
      <HeroKlima />
      <PositioningKlima />
      <RealtimeDashboardKlima />
      <FullSystemKlima />
      <HowWeStart />
      <WorkPricingKlima />
      <FaqKlima />
      <FinalCtaKlima />
      <Footer />
    </div>
  );
}
