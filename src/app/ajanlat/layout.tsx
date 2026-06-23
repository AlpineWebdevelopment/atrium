import Footer from "@/components/Footer";

// Appends the site Footer to every /ajanlat route ([slug] advertorials). The root
// layout only renders <Nav>; advertorial pages don't include a Footer themselves.
export default function AjanlatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
