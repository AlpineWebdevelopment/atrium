import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Leak from "@/components/Leak";
import FeatureHero from "@/components/FeatureHero";
import Capabilities from "@/components/Capabilities";
import HowItFits from "@/components/HowItFits";
import FeatureDuo from "@/components/FeatureDuo";
import FeatureQuad from "@/components/FeatureQuad";
import OfferLadder from "@/components/OfferLadder";
import Statement from "@/components/Statement";
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
      <FeatureHero />
      <Capabilities />
      <HowItFits />
      <FeatureDuo />
      <FeatureQuad />
      <OfferLadder />
      <Statement />
      <Defense />
      <Faq />
      <ClosingCta />
      <FinalFooter />
    </div>
  );
}
