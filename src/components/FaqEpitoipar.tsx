/* ATRIUM-EDIT KV9 — 5 construction-specific FAQ items.
   No GoHighLevel on any public surface (brand spec §10).
   No fabricated figures. Value-based pricing answer. */
"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Mit csinál a rendszer?",
    a: "Felveszi a hívásokat munka közben, visszahívja a hirdetésből érkező érdeklődőket, utánakérdez a kiküldött árajánlatoknak, és időpontot ad a helyszíni felmérésre — magyarul, a meglévő naptárához kötve.",
  },
  {
    q: "Le kell cserélnem a mostani eszközeimet?",
    a: "Nem. A meglévő naptárához és eszközeihez kötjük, a csapatának nem kell új rendszert tanulnia.",
  },
  {
    q: "Mennyibe kerül?",
    a: "Az árat az Ön számaiból állítjuk össze a megbeszélésen — a hívásaiból, az átlagos munkaértékből és az elmaradt érdeklődőkből. Egy általános ár félrevinné.",
  },
  {
    q: "Hol tárolják az adatokat?",
    a: "Az Európai Unióban, frankfurti szervereken, GDPR-konform módon.",
  },
  {
    q: "Tényleg magyarul beszél?",
    a: "Igen — természetes magyar beszéddel fogadja a hívásokat és hív vissza. Nem rejtjük el, hogy automatizált rendszer; ha valaki rákérdez, nyíltan megmondja.",
  },
];

export default function FaqEpitoipar() {
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
