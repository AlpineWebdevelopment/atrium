import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import NavChatgpt from "@/components/NavChatgpt";
import FooterChatgpt from "@/components/FooterChatgpt";

/* The booking step for /chatgpt-hirdetes. Same calendar and form as the
   site-wide /foglalas — it is the same component against the same CRM — but
   wrapped in this landing's own header and footer, and the confirmation
   screen returns to the landing rather than to the site root. A visitor who
   arrived from a ChatGPT ad therefore never sees a way into the rest of the
   site, which is the whole point of the landing being a closed surface.

   noindex: this is a funnel step and a near-duplicate of /foglalas, which is
   the indexable one. */

const LANDING = "/chatgpt-hirdetes";

export const metadata: Metadata = {
  title: "Foglaljon időpontot — ChatGPT hirdetés",
  description:
    "Foglaljon egy ingyenes, 30 perces beszélgetést. Megnézzük, milyen kérdésekre jönne szóba az Ön cége a ChatGPT-ben, és mit építenénk rá.",
  alternates: { canonical: `${LANDING}/foglalas` },
  robots: { index: false, follow: true },
};

export default function ChatgptFoglalasPage() {
  return (
    <div className="page page--chatgpt-hirdetes" data-screen-label="atriumscaling.com /chatgpt-hirdetes/foglalas">
      <NavChatgpt base={LANDING} />
      <main className="foglalas">
        <div className="foglalas__card">
          <BookingForm
            niche="chatgpt-hirdetes"
            backHref={LANDING}
            backLabel="Vissza az oldalra"
          />
        </div>
      </main>
      <FooterChatgpt base={LANDING} />
    </div>
  );
}
