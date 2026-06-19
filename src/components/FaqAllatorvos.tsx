/* ATRIUM-EDIT AV11 — 6 Q&As for the owner-operator vet.
   Key: "Kiszűri a kisebb ügyfeleket?" → explicit "Nem" (route-not-filter guard).
   "Új gazdikat is szerez?" → honest "Nem — meglévő kereslet és bázis."
   No GoHighLevel (brand spec §10). No fabricated numbers. */
"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Mit csinál a rendszer?",
    a: "Fogadja a hívásokat, rangsorolja a sürgős eseteket, lefoglalja a rutin időpontokat, emlékeztet, és visszahívja a pácienseket, amikor az oltás vagy szűrés esedékes — magyarul, a meglévő naptárához kötve.",
  },
  {
    q: "Kiszűri a kisebb ügyfeleket?",
    a: "Nem. Minden gazdi egy évekig tartó kapcsolat. A rendszer nem szűr ki senkit — sürgősség szerint rangsorol, és megtartja a bázist.",
  },
  {
    q: "Új gazdikat is szerez?",
    a: "Nem. A rendszer a meglévő keresletet és a meglévő bázist hozza vissza. Új gazdikat nem szerez — ha hirdetésből jönnek érdeklődők, azokat utánköveti, de ügyfélszerzést nem ígérünk.",
  },
  {
    q: "Le kell cserélnünk a naptárunkat?",
    a: "Nem. A rendelő meglévő naptárához kötjük — Google Calendar, Microsoft 365, iCal. A csapatnak semmit nem kell lecserélnie.",
  },
  {
    q: "Mennyibe kerül?",
    a: "Az árat az Ön számaiból állítjuk össze a megbeszélésen — az aktív páciensek számából, az egy kedvencre jutó éves értékből és a lecsúszott páciensek arányából. Egy általános ár félrevinné.",
  },
  {
    q: "Hol tárolják az adatokat?",
    a: "Az Európai Unióban, frankfurti szervereken, GDPR-konform módon.",
  },
];

export default function FaqAllatorvos() {
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
