import type { Metadata } from "next";
import HeroGyorsLead from "@/components/HeroGyorsLead";
import PositioningGyorsLead from "@/components/PositioningGyorsLead";
import RealtimeDashboardGyorsLead from "@/components/RealtimeDashboardGyorsLead";
/* LR6 — focused caps grid (5 capabilities); no full-system tour, no channel chip row */
import ProductGyorsLead from "@/components/ProductGyorsLead";
/* LR8 — placeholder price; confirm before publishing */
import WorkPricingGyorsLead from "@/components/WorkPricingGyorsLead";
import HowWeStart from "@/components/HowWeStart";
import FaqGyorsLead from "@/components/FaqGyorsLead";
import FinalCtaGyorsLead from "@/components/FinalCtaGyorsLead";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
/* LR-C1: RealtimeDashboard excluded — fabricated stats, wrong frame for cross-niche service */
/* LR-C2: QualifierCrm excluded — cost-bar frame is niche-specific, not cross-niche */

export const metadata: Metadata = {
  title: "Atrium — Gyors lead-válasz: minden leadre válasz perceken belül",
  description:
    "AI-alapú lead-kezelés Meta- és Google-hirdetésekhez. Azonnali válasz, kvalifikáció, foglalás — mielőtt a versenytárs megteszi. Magyar nyelvű, EU hosting.",
};

export default function GyorsLeadValaszPage() {
  return (
    <div className="page page--gyors-lead-valasz" data-screen-label="atriumscaling.com /gyors-lead-valasz">
      <ScrollReveal />
      <HeroGyorsLead />
      {/* LR — problem-led: three lead-loss patterns + HBR stat before the product */}
      <PositioningGyorsLead />
      <RealtimeDashboardGyorsLead />
      <ProductGyorsLead />
      <WorkPricingGyorsLead />
      <HowWeStart />
      <FaqGyorsLead />
      <FinalCtaGyorsLead />
      <Footer />
    </div>
  );
}
