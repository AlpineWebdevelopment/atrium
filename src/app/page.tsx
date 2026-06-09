import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Leak from "@/components/Leak";
import ActivityLog from "@/components/ActivityLog";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Capabilities from "@/components/Capabilities";
import HowItFits from "@/components/HowItFits";
import Integrations from "@/components/Integrations";
import ReportPreview from "@/components/ReportPreview";
import OfferLadder from "@/components/OfferLadder";
import Defense from "@/components/Defense";
import Faq from "@/components/Faq";
import ClosingCta from "@/components/ClosingCta";
import FinalFooter from "@/components/FinalFooter";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="page" data-screen-label="atriumscaling.com /">
      <ScrollReveal />
      <Nav />
      <Hero />
      <Leak />
      <ActivityLog />
      <Services />
      <Capabilities />
      <Results />
      <HowItFits />
      <Integrations />
      <ReportPreview />
      <OfferLadder />
      <Defense />
      <Faq />
      <ClosingCta />
      <FinalFooter />
    </div>
  );
}
