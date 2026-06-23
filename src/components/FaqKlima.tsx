/* ATRIUM-EDIT KV10 — 5 Q&As rebuilt for cégvezető klíma buyer.
   Key change: "Szerez új ügyfeleket?" → honest "Nem." answer about existing demand.
   No GoHighLevel on public surface (brand spec §10).
   No fabricated figures. Value-based pricing answer. */
"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Mit csinál a rendszer?",
    a: "Minden megkeresést azonnal fogad — hívás, webűrlap, e-mail — a hőségcsúcson is, és kvalifikálja a munkát, majd a megfelelő emberhez irányítja a részletekkel együtt. A sürgős esetet soron kívül adja át. A kiküldött ajánlatokat szisztematikusan utánköveti, és jelzi az esedékes karbantartásokat. Minden lépésről riportot ad Önnek.",
  },
  {
    q: "Új ügyfeleket is szerez?",
    a: "Nem. A rendszer a meglévő keresletet hozza vissza — azokat a hívásokat, amelyek a csúcson kicsengtek, azokat az ajánlatokat, amelyek utánkövetés nélkül elhaltak, és azokat a karbantartható ügyfeleket, akik kiestek a körből. A hirdetési büdzsét nem növeljük, de jobban kiaknázzuk azt, amit már most is költ.",
  },
  {
    q: "Le kell cserélnünk a mostani rendszereinket?",
    a: "Nem. Az Atrium a meglévő naptárához, CRM-jéhez és eszközeihez kötve dolgozik. A csapatnak nem kell új szoftvert megtanulnia — a rendszer a háttérben fut.",
  },
  {
    q: "Mennyibe kerül?",
    a: "Az árat az Ön számaiból állítjuk össze a megbeszélésen — a beérkező megkeresések számából, a jellemző beszerelési értékből és az elvárt hatásból. Egy standard ár félrevinné. Az első megbeszélés nem kötelezi Önt semmire.",
  },
  {
    q: "Hol tárolják az adatokat?",
    a: "Az Európai Unióban, frankfurti szervereken, GDPR-konform módon.",
  },
];

export default function FaqKlima() {
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
