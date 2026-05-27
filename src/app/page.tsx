import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Leak from "@/components/Leak";
import Capabilities from "@/components/Capabilities";
import HowItFits from "@/components/HowItFits";
import ReportPreview from "@/components/ReportPreview";
import OfferLadder from "@/components/OfferLadder";
import Defense from "@/components/Defense";
import FinalFooter from "@/components/FinalFooter";

export default function Home() {
  return (
    <div className="page" data-screen-label="atriumscaling.com /">
      <Nav />
      <Hero />
      <Leak />
      <Capabilities />
      <HowItFits />
      <ReportPreview />
      <OfferLadder />
      <Defense />
      <FinalFooter />
    </div>
  );
}
