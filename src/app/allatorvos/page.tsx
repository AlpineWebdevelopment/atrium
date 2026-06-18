import type { Metadata } from "next";
import HeroVet from "@/components/HeroVet";
import RealtimeDashboardVet from "@/components/RealtimeDashboardVet";
import FullSystemVet from "@/components/FullSystemVet";
import PositioningVet from "@/components/PositioningVet";
import HowWeStart from "@/components/HowWeStart";
import WorkPricing from "@/components/WorkPricing";
import QualifierCrmVet from "@/components/QualifierCrmVet";
import FaqVet from "@/components/FaqVet";
import FinalCtaVet from "@/components/FinalCtaVet";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Atrium — Állatorvosi rendelők AI-alapú ügyfélkezelési rendszere",
  description:
    "Magyar nyelvű AI-rendszer állatorvosi rendelőknek: minden hívást felvesz, minden vizsgálati időpontot lefoglal, minden gazdát utánkövet — a háttérben.",
};

export default function AllatorvosPage() {
  return (
    <>
      <HeroVet />
      <RealtimeDashboardVet />
      <FullSystemVet />
      <PositioningVet />
      <HowWeStart />
      <WorkPricing />
      <QualifierCrmVet />
      <FaqVet />
      <FinalCtaVet />
      <Footer />
      <ScrollReveal />
    </>
  );
}
