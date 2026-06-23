import Footer from "@/components/Footer";

// Appends the site Footer to every /blog route (index + [slug]). The root layout
// only renders <Nav>; blog pages don't include a Footer themselves.
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
