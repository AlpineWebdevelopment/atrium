import type { Metadata } from "next";
import HeroFogaszat from "@/components/HeroFogaszat";
import VoiceDemo from "@/components/VoiceDemo";
import RealtimeDashboardFogaszat from "@/components/RealtimeDashboardFogaszat";
import FullSystemFogaszat from "@/components/FullSystemFogaszat";
import PositioningFogaszat from "@/components/PositioningFogaszat";
import HowWeStart from "@/components/HowWeStart";
/* ATRIUM-EDIT FG10 — value-based pricing; FG-C2: QualifierCrm excluded (cost-bar false at value-based pricing) */
import WorkPricingFogaszat from "@/components/WorkPricingFogaszat";
import FaqFogaszat from "@/components/FaqFogaszat";
import FinalCtaFogaszat from "@/components/FinalCtaFogaszat";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
/* FG-C1: CustomSolutions excluded — custom-dev taxonomy is off-strategy for a niche launch page */

export const metadata: Metadata = {
  title: "Atrium — Fogászati rendelők AI-alapú értékesítési rendszere",
  description:
    "Magyar nyelvű AI-rendszer fogászati rendelőknek: minden hívást fogad, a sürgős eseteket rangsorolja, a rutin időpontokat lefoglalja, és visszahívja a pácienseket a kontroll és a higiéniai kezelés esedékességekor.",
};

export default function FogaszatPage() {
  return (
    <div className="page page--fogaszat" data-screen-label="atriumscaling.com /fogaszat">
      <ScrollReveal />
      <HeroFogaszat />
      <VoiceDemo />
      {/* FG — problem-led order: two leaks before the system */}
      <PositioningFogaszat />
      <RealtimeDashboardFogaszat />
      <FullSystemFogaszat />
      <HowWeStart />
      <WorkPricingFogaszat />
      <FaqFogaszat />
      <FinalCtaFogaszat />
      <Footer />
    </div>
  );
}
