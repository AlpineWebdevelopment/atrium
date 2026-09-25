import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import BookingForm from "@/components/BookingForm";
import DirectFooter from "@/components/direct/DirectFooter";
import { isBookingSource } from "@/lib/niches";

/* The booking page every CTA points at, so it wears the same clothes as the
   pages that send people here: bone ground, Bebas over Barlow, the /direct
   header and footer. The form itself is untouched — it talks to the CRM and
   that logic has no business being restyled.

   Left column: what the half hour is and what it is not, so the visitor knows
   what they are agreeing to before they pick a slot. Right column: the form. */

const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-src",
});

export const metadata: Metadata = {
  title: "Foglaljon időpontot",
  description:
    "Foglaljon egy 30 perces, kötelezettség nélküli megbeszélést az Atrium csapatával — az Ön számai alapján megnézzük, mit hozna a rendszer.",
  alternates: { canonical: "/foglalas" },
  robots: { index: true, follow: true },
};

const STEPS: [string, string][] = [
  ["Kérdezünk", "Hány megkeresés jön, mi történik velük, mennyit ér egy ügyfél."],
  ["Számolunk", "Az Ön számaiból, nem sablonból. Élőben, a beszélgetés alatt."],
  ["Megmondjuk", "Mit hozna a rendszer — és azt is, ha nem érné meg Önnek."],
];

/* ?from=<landing slug> is set by BookingRedirect when the CTA was clicked on
   a landing page; anything unknown falls back to "root". */
export default async function FoglalasPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const from = (await searchParams).from;
  const niche = typeof from === "string" && isBookingSource(from) ? from : "root";
  return (
    <div className={`page page--direct page--fogl ${barlow.variable}`}>
      <header className="dr-top">
        <a className="dr-top__brand" href="/">Atrium<span className="dr-top__dot">.</span></a>
        <nav className="dr-top__nav">
          <a href="/">Főoldal</a>
          <a href="/szolgaltatasok">Szolgáltatások</a>
        </nav>
      </header>

      <main className="fogl">
        <div className="fogl__wrap">
          <div className="fogl__grid">
            <div className="fogl__side">
              <span className="dr-eyebrow">Időpontfoglalás</span>
              <h1 className="fogl__h1">Fél óra beszélgetés.<br />Nem prezentáció.</h1>
              <p className="fogl__lead">
                Nem diákat mutatunk. Kérdezünk, Ön válaszol, aztán mi mondunk
                számokat — a végén tudni fogja, megéri-e.
              </p>

              <ol className="fogl__steps">
                {STEPS.map(([t, d], i) => (
                  <li key={t}>
                    <span className="fogl__n">{String(i + 1).padStart(2, "0")}</span>
                    <b>{t}</b>
                    <em>{d}</em>
                  </li>
                ))}
              </ol>

              <p className="fogl__note">
                Online, 30 perc. Nem küldünk utána heteken át ajánlatokat: ha
                nem illünk egymáshoz, azt a beszélgetés végén kimondjuk.
              </p>
            </div>

            <div className="fogl__card">
              <BookingForm niche={niche} backHref="/" backLabel="Vissza a főoldalra" />
            </div>
          </div>
        </div>
      </main>

      <DirectFooter />
    </div>
  );
}
