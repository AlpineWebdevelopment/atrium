import type { Metadata } from "next";
import HeroNapelem from "@/components/HeroNapelem";
import RealtimeDashboardNapelem from "@/components/RealtimeDashboardNapelem";
import FullSystemNapelem from "@/components/FullSystemNapelem";
import PositioningNapelem from "@/components/PositioningNapelem";
import HowWeStart from "@/components/HowWeStart";
/* ATRIUM-EDIT KV8 — value-based solar pricing (no price shown); KV-C1: CustomSolutions excluded */
import WorkPricingNapelem from "@/components/WorkPricingNapelem";
/* ATRIUM-EDIT KV-C2 — QualifierCrm excluded; cost-bar implication false at full-system value-based pricing */
import FaqNapelem from "@/components/FaqNapelem";
import FinalCtaNapelem from "@/components/FinalCtaNapelem";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Atrium — Napelemes cégek AI-alapú értékesítési rendszere",
  description:
    "Magyar nyelvű AI-alapú értékesítési rendszer napelemes cégeknek: minden ajánlatkérésre azonnal reagál, hogy a kifizetett lead ne hűljön ki, a megfelelő emberhez irányít, és minden árajánlatot utánkövet — az egészet Ön látja.",
};

export default function NapelemPage() {
  return (
    <div className="page page--napelem" data-screen-label="atriumscaling.com /napelem">
      <ScrollReveal />
      {/* ATRIUM-EDIT KV-C3 — problem-led order: leaks (Positioning) before solution (FullSystem) */}
      <HeroNapelem />
      <PositioningNapelem />
      <RealtimeDashboardNapelem />
      <FullSystemNapelem />
      <HowWeStart />
      <WorkPricingNapelem />
      <FaqNapelem />
      <FinalCtaNapelem />
      <Footer />
    </div>
  );
}
