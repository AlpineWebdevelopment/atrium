import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import RealtimeDashboard from "@/components/RealtimeDashboard";
import FullSystem from "@/components/FullSystem";
import Positioning from "@/components/Positioning";
import CustomSolutions from "@/components/CustomSolutions";
import HowWeStart from "@/components/HowWeStart";
import WorkPricing from "@/components/WorkPricing";
import QualifierCrm from "@/components/QualifierCrm";
// import Reputation from "@/components/Reputation"; // hidden for now — re-enable to bring it back
// import Packages from "@/components/Packages"; // hidden for now — re-enable to bring back the offer-ladder section
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="page" data-screen-label="atriumscaling.com /">
      <ScrollReveal />
      <Hero />
      <Benefits />
      <RealtimeDashboard />
      <FullSystem />
      <Positioning />
      <CustomSolutions />
      <HowWeStart />
      <WorkPricing />
      <QualifierCrm />
      {/* <Reputation /> hidden for now — ask to bring it back */}
      {/* <Packages /> hidden for now — ask to bring it back */}
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
