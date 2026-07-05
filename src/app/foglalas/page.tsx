import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Foglaljon időpontot",
  description:
    "Foglaljon egy 30 perces, kötelezettség nélküli megbeszélést az Atrium csapatával — az Ön számai alapján megnézzük, hol szivárog a bevétel.",
  alternates: { canonical: "/foglalas" },
  robots: { index: true, follow: true },
};

export default function FoglalasPage() {
  return (
    <div className="page">
      <main className="foglalas">
        <div className="foglalas__card">
          <BookingForm niche="root" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
