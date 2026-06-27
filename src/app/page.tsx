import Hero from "@/components/Hero";
import RealtimeDashboard from "@/components/RealtimeDashboard";
import FullSystem from "@/components/FullSystem";
import Manifesto from "@/components/Manifesto";
import CustomSolutions from "@/components/CustomSolutions";
import WorkFlow from "@/components/WorkFlow";
// import Reputation from "@/components/Reputation"; // hidden for now — re-enable to bring it back
// import Packages from "@/components/Packages"; // hidden for now — re-enable to bring back the offer-ladder section
import Faq from "@/components/Faq";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="page" data-screen-label="atriumscaling.com /">
      <ScrollReveal />
      <Hero />
      <Manifesto />
      <RealtimeDashboard />
      <FullSystem />
      <WorkFlow />
      <CustomSolutions />
      {/* <Reputation /> hidden for now — ask to bring it back */}
      {/* <Packages /> hidden for now — ask to bring it back */}
      <Faq />
      <Footer />
      <BookingModal niche="root" />
    </div>
  );
}
