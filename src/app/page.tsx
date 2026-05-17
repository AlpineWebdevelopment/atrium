import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import LiveBar from "@/components/LiveBar";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <Capabilities />
      <LiveBar />
    </div>
  );
}
