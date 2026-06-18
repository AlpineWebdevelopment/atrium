import type { Metadata } from "next";
import HeroPhysio from "@/components/HeroPhysio";
import RealtimeDashboardPhysio from "@/components/RealtimeDashboardPhysio";
import FullSystemPhysio from "@/components/FullSystemPhysio";
import PositioningPhysio from "@/components/PositioningPhysio";
import HowWeStart from "@/components/HowWeStart";
/* ATRIUM-EDIT SS4 — replaced shared WorkPricing with physio-specific fixed-package section */
import WorkPricingPhysio from "@/components/WorkPricingPhysio";
import QualifierCrmPhysio from "@/components/QualifierCrmPhysio";
import FaqPhysio from "@/components/FaqPhysio";
import FinalCtaPhysio from "@/components/FinalCtaPhysio";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Atrium — Gyógytornász és fizioterapeuta rendelők AI-alapú ügyfélkezelési rendszere",
  description:
    "Magyar nyelvű AI-rendszer gyógytornász és fizioterapeuta rendelőknek: teli naptár, kevesebb no-show, automatikus páciens-utánkövetés — a háttérben, az Ön naptárához kötve.",
};

export default function FizioterapiaPage() {
  return (
    <div className="page page--physio" data-screen-label="atriumscaling.com /fizioterapia">
      <ScrollReveal />
      <HeroPhysio />
      <RealtimeDashboardPhysio />
      <FullSystemPhysio />
      <PositioningPhysio />
      <HowWeStart />
      <WorkPricingPhysio />
      <QualifierCrmPhysio />
      <FaqPhysio />
      <FinalCtaPhysio />
      <Footer />
    </div>
  );
}
