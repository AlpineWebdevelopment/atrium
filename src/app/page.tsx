import SmokeBackground from "@/components/SmokeBackground";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FooterStrip from "@/components/FooterStrip";
import LiveBar from "@/components/LiveBar";

export default function Home() {
  return (
    <>
      <SmokeBackground smokeColor="#3A4470" />
      <div className="page">
        <Nav />
        <Hero headline="long" />
        <FooterStrip />
        <LiveBar />
      </div>
    </>
  );
}
