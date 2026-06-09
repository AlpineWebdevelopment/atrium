import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StartAnywhere from "@/components/StartAnywhere";
import SeriousBusiness from "@/components/SeriousBusiness";
import Showcase from "@/components/Showcase";
import Reputation from "@/components/Reputation";
import Band from "@/components/Band";
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
      <StartAnywhere />
      <SeriousBusiness />
      <Showcase />
      <Reputation />
      <Band />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
