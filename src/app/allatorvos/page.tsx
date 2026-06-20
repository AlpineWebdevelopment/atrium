import type { Metadata } from "next";
import HeroAllatorvos from "@/components/HeroAllatorvos";
import VoiceDemo from "@/components/VoiceDemo";
import RealtimeDashboardAllatorvos from "@/components/RealtimeDashboardAllatorvos";
import FullSystemAllatorvos from "@/components/FullSystemAllatorvos";
import PositioningAllatorvos from "@/components/PositioningAllatorvos";
import HowWeStart from "@/components/HowWeStart";
/* ATRIUM-EDIT AV10 — value-based pricing; AV-C2: QualifierCrm excluded (cost-bar false at value-based pricing) */
import WorkPricingAllatorvos from "@/components/WorkPricingAllatorvos";
import FaqAllatorvos from "@/components/FaqAllatorvos";
import FinalCtaAllatorvos from "@/components/FinalCtaAllatorvos";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
/* AV-C1: CustomSolutions excluded — custom-dev taxonomy is off-strategy for a niche launch page */

export const metadata: Metadata = {
  title: "Atrium — Állatorvosi rendelők AI-alapú értékesítési rendszere",
  description:
    "Magyar nyelvű AI-rendszer állatorvosi rendelőknek: minden hívást fogad, a sürgős eseteket rangsorolja, a rutin időpontokat lefoglalja, és visszahívja a pácienseket az oltás és szűrés esedékességekor.",
};

export default function AllatorvosPage() {
  return (
    <div className="page page--allatorvos" data-screen-label="atriumscaling.com /allatorvos">
      <ScrollReveal />
      <HeroAllatorvos />
      <VoiceDemo />
      {/* AV — problem-led order: two leaks before the system */}
      <PositioningAllatorvos />
      <RealtimeDashboardAllatorvos />
      <FullSystemAllatorvos />
      <HowWeStart />
      <WorkPricingAllatorvos />
      <FaqAllatorvos />
      <FinalCtaAllatorvos />
      <Footer />
    </div>
  );
}
