/* ATRIUM-EDIT NK0 — generated from szépségszalon (/szepsegszalon) template;
   vocabulary swapped to nail niche and corrected copy applied from the start.
   No broken hero, no value-based pricing, no ügyfélkezelési, no audit-to-cold-visitor. */
import type { Metadata } from "next";
import HeroKormos from "@/components/HeroKormos";
import RealtimeDashboardKormos from "@/components/RealtimeDashboardKormos";
import FullSystemKormos from "@/components/FullSystemKormos";
import PositioningKormos from "@/components/PositioningKormos";
import HowWeStart from "@/components/HowWeStart";
import WorkPricingKormos from "@/components/WorkPricingKormos";
import QualifierCrmKormos from "@/components/QualifierCrmKormos";
import FaqKormos from "@/components/FaqKormos";
import FinalCtaKormos from "@/components/FinalCtaKormos";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Atrium — Körmösök és műkörömépítők AI-alapú értékesítési rendszere",
  description:
    "Magyar nyelvű AI-rendszer körmösöknek és műkörömépítőknek: teli naptár, kevesebb no-show, automatikus vendégvisszahívás — a háttérben, az Ön naptárához kötve.",
};

export default function KormosPage() {
  return (
    <div className="page page--kormos" data-screen-label="atriumscaling.com /kormos">
      <ScrollReveal />
      <HeroKormos />
      <RealtimeDashboardKormos />
      <FullSystemKormos />
      <PositioningKormos />
      <HowWeStart />
      <WorkPricingKormos />
      <QualifierCrmKormos />
      <FaqKormos />
      <FinalCtaKormos />
      <Footer />
    </div>
  );
}
