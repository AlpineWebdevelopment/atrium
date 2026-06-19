import type { Metadata } from "next";
import HeroSzepsegipar from "@/components/HeroSzepsegipar";
import PositioningSzepsegipar from "@/components/PositioningSzepsegipar";
import RealtimeDashboardSzepsegipar from "@/components/RealtimeDashboardSzepsegipar";
/* SZ5 — focused product section (not full system); SZ CUTS: FullSystem, channel row, value-based grid all excluded */
import ProductSzepsegipar from "@/components/ProductSzepsegipar";
/* SZ6 — fixed packages (39/49/99k); NO value-based WorkPricing block */
import WorkPricingSzepsegipar from "@/components/WorkPricingSzepsegipar";
import HowWeStart from "@/components/HowWeStart";
import FaqSzepsegipar from "@/components/FaqSzepsegipar";
import FinalCtaSzepsegipar from "@/components/FinalCtaSzepsegipar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
/* SZ-C1: RealtimeDashboard excluded — shared with root, appointment-business language with fabricated numbers */
/* SZ-C2: QualifierCrm excluded — munkatárs vs rendszer cost-bar is false at 49k/hó fixed price */

export const metadata: Metadata = {
  title: "Atrium — Foglalási asszisztens szépségszalonoknak, körmösöknek, kozmetikusoknak",
  description:
    "Magyar nyelvű AI-alapú foglalási rendszer: a Messengeren és Instagramon érkező foglalási üzeneteket megválaszolja, időpontot ad, és visszahozza az elmaradt vendéget. Fix árak: 39 / 49 / 99 000 Ft.",
};

export default function SzepsegiparPage() {
  return (
    <div className="page page--szepsegipar" data-screen-label="atriumscaling.com /szepsegipar">
      <ScrollReveal />
      <HeroSzepsegipar />
      {/* SZ — problem-led: three leaks before the product */}
      <PositioningSzepsegipar />
      <RealtimeDashboardSzepsegipar />
      <ProductSzepsegipar />
      <WorkPricingSzepsegipar />
      <HowWeStart />
      <FaqSzepsegipar />
      <FinalCtaSzepsegipar />
      <Footer />
    </div>
  );
}
