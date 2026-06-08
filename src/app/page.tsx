import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ClientTypes from "@/components/ClientTypes";
import Leak from "@/components/Leak";
import ActivityLog from "@/components/ActivityLog";
import CallDashboard from "@/components/CallDashboard";
import FollowUpSystem from "@/components/FollowUpSystem";
import Capabilities from "@/components/Capabilities";
import HowItFits from "@/components/HowItFits";
import ReportPreview from "@/components/ReportPreview";
import OfferLadder from "@/components/OfferLadder";
import Defense from "@/components/Defense";
import FinalFooter from "@/components/FinalFooter";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="page" data-screen-label="atriumscaling.com /">
      <ScrollReveal />
      <Nav />
      <Hero />
      <ClientTypes />
      <Leak />
      <ActivityLog />
      <CallDashboard />
      <FollowUpSystem />
      <Capabilities />
      <HowItFits />
      <ReportPreview />
      <OfferLadder />
      <Defense />
      <FinalFooter />
    </div>
  );
}
