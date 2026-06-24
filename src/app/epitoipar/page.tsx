import type { Metadata } from "next";
import HeroKivitelezes from "@/components/HeroKivitelezes";
import Manifesto from "@/components/Manifesto";
import RealtimeDashboardKivitelezes from "@/components/RealtimeDashboardKivitelezes";
import FullSystemKivitelezes from "@/components/FullSystemKivitelezes";
import WorkFlow from "@/components/WorkFlow";
import CustomSolutionsKivitelezes from "@/components/CustomSolutionsKivitelezes";
import FaqKivitelezes from "@/components/FaqKivitelezes";
import FinalCtaEpitoipar from "@/components/FinalCtaEpitoipar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Atrium — Kivitelező cégek AI-alapú értékesítési rendszere",
  description:
    "Magyar nyelvű AI-alapú értékesítési rendszer kivitelező cégeknek: minden megkeresést fogad és kvalifikál, minden árajánlatot utánkövet, minden helyszíni felmérést beütemez — az egészet Ön látja.",
};

export default function EpitoiparPage() {
  return (
    <div className="page page--epitoipar" data-screen-label="atriumscaling.com /epitoipar">
      <ScrollReveal />
      <HeroKivitelezes />
      <Manifesto />
      <RealtimeDashboardKivitelezes />
      <FullSystemKivitelezes />
      <WorkFlow />
      <CustomSolutionsKivitelezes />
      <FaqKivitelezes />
      <FinalCtaEpitoipar />
      <Footer />
    </div>
  );
}
