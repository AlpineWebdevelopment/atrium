import type { Metadata } from "next";
import HeroSalon from "@/components/HeroSalon";
import RealtimeDashboardSalon from "@/components/RealtimeDashboardSalon";
import FullSystemSalon from "@/components/FullSystemSalon";
import PositioningSalon from "@/components/PositioningSalon";
import HowWeStart from "@/components/HowWeStart";
import WorkPricing from "@/components/WorkPricing";
import QualifierCrmSalon from "@/components/QualifierCrmSalon";
import FaqSalon from "@/components/FaqSalon";
import FinalCtaSalon from "@/components/FinalCtaSalon";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Atrium — Szépségszalonok AI-alapú ügyfélkezelési rendszere",
  description:
    "Magyar nyelvű AI-rendszer szépségszalonoknak: teli naptár, kevesebb no-show, automatikus várólistakezelés — a háttérben, az Ön eszközeihez kötve.",
};

export default function SzepsegszalonPage() {
  return (
    <div className="page page--salon" data-screen-label="atriumscaling.com /szepsegszalon">
      <ScrollReveal />
      <HeroSalon />
      <RealtimeDashboardSalon />
      <FullSystemSalon />
      <PositioningSalon />
      <HowWeStart />
      <WorkPricing />
      <QualifierCrmSalon />
      <FaqSalon />
      <FinalCtaSalon />
      <Footer />
    </div>
  );
}
