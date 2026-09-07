import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { isNicheSlug } from "@/lib/niches";

export const metadata: Metadata = {
  title: "Foglaljon időpontot",
  description:
    "Foglaljon egy 30 perces, kötelezettség nélküli megbeszélést az Atrium csapatával — az Ön számai alapján megnézzük, hol szivárog a bevétel.",
  alternates: { canonical: "/foglalas" },
  robots: { index: true, follow: true },
};

/* ?from=<landing slug> is set by BookingRedirect when the CTA was clicked on
   a landing page; anything unknown falls back to "root". */
export default async function FoglalasPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const from = (await searchParams).from;
  const niche = typeof from === "string" && isNicheSlug(from) ? from : "root";
  return (
    <div className="page">
      <main className="foglalas">
        <div className="foglalas__card">
          <BookingForm niche={niche} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
