/* ATRIUM-EDIT SZ7 — 5 Q&As for the broad beauty lane.
   "Ez csak egy foglalási link?" is the key differentiator question.
   Pricing answer names the fixed packages explicitly.
   No GoHighLevel on public surface (brand spec §10). */
"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Mit csinál a rendszer?",
    a: "A foglalási üzeneteket kezeli Ön helyett: válaszol Messengeren, Instagramon és telefonon, foglal, emlékeztet, feltölti a lemondásokat várólistáról, és visszahívja az elmaradt vendégeket.",
  },
  {
    q: "Ez csak egy foglalási link?",
    a: "Nem. A rendszer magától, emberi módon megválaszolja az üzenetet abban a csatornában, ahol a vendég amúgy is ír, és lefoglalja az időpontot. A vendégnek nem kell új alkalmazást megtanulnia, és nem kell önkiszolgáló linket kitöltenie.",
  },
  {
    q: "Le kell cserélnem a naptáramat?",
    a: "Nem. A meglévő naptárához kötjük — Google Calendar, Microsoft 365, iCal. A csapatának semmit nem kell lecserélnie.",
  },
  {
    q: "Mennyibe kerül?",
    a: "Fix áron dolgozunk: 39 000 Ft próbahónap (egyszeri), 49 000 Ft / hó Alap, 99 000 Ft / hó Teljes. Nincs rejtett tétel, és bármikor válthat a csomagok között.",
  },
  {
    q: "Hol tárolják az adatokat?",
    a: "Az Európai Unióban, frankfurti szervereken, GDPR-konform módon.",
  },
];

export default function FaqSzepsegipar() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq" id="gyik">
      <div className="wrap">
        <div className="faq__head reveal">
          <span className="dash__eyebrow">GYIK</span>
          <h2 className="faq__h">A kérdések, amelyeket mindenki feltesz.</h2>
        </div>
        <div className="faq__list reveal" data-delay="1">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={"faq__item" + (isOpen ? " faq__item--open" : "")} key={i}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>
                  <svg className="faq__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="faq__a-wrap">
                  <div className="faq__a">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
