import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import RealtimeDashboard from "@/components/RealtimeDashboard";
import StartAnywhere from "@/components/StartAnywhere";
import SeriousBusiness from "@/components/SeriousBusiness";
import Showcase from "@/components/Showcase";
import Reputation from "@/components/Reputation";
import Packages from "@/components/Packages";
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
      <StartAnywhere />
      <SeriousBusiness />
      <Showcase />
      <Reputation />
      <Packages />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
