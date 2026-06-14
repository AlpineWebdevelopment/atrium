import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import RealtimeDashboard from "@/components/RealtimeDashboard";
import FullSystem from "@/components/FullSystem";
import CustomSolutions from "@/components/CustomSolutions";
import HowWeStart from "@/components/HowWeStart";
import QualifierCrm from "@/components/QualifierCrm";
// import Reputation from "@/components/Reputation"; // hidden for now — re-enable to bring it back
// import Packages from "@/components/Packages"; // hidden for now — re-enable to bring back the pricing section
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="page" data-screen-label="atriumscaling.com /">
      <ScrollReveal />
      <Nav />
      <Hero />
      <RealtimeDashboard />
      <FullSystem />
      <CustomSolutions />
      <HowWeStart />
      <QualifierCrm />
      {/* <Reputation /> hidden for now — ask to bring it back */}
      {/* <Packages /> hidden for now — ask to bring it back */}
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
