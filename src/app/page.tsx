import Hero from "@/components/Hero";
import RealtimeDashboard from "@/components/RealtimeDashboard";
import FullSystem from "@/components/FullSystem";
import CustomSolutions from "@/components/CustomSolutions";
/* ATRIUM-EDIT MEG2 — salvaged value strip (replaces parts of the deleted Miért éri meg block) */
import ValueStrip from "@/components/ValueStrip";
import WorkFlow from "@/components/WorkFlow";
// import Reputation from "@/components/Reputation"; // hidden for now — re-enable to bring it back
// import Packages from "@/components/Packages"; // hidden for now — re-enable to bring back the offer-ladder section
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="page" data-screen-label="atriumscaling.com /">
      <ScrollReveal />
      <Hero />
      <RealtimeDashboard />
      <FullSystem />
      <CustomSolutions />
      {/* ATRIUM-EDIT MEG1 — deleted the Miért éri meg / QualifierCrm block (off-brand filter + cost-table); MEG2 strip below */}
      <ValueStrip />
      <WorkFlow />
      {/* <Reputation /> hidden for now — ask to bring it back */}
      {/* <Packages /> hidden for now — ask to bring it back */}
      <Faq />
      <Footer />
    </div>
  );
}
