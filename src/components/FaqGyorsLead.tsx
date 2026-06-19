/* ATRIUM-EDIT LR9 — 5 Q&As for the lead-response service landing.
   Key guard: no GoHighLevel on public surface (brand spec §10).
   Pricing answer is honest: depends on volume — no fabricated anchor. */
"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Mit csinál pontosan a rendszer?",
    a: "Megkeresi a beérkező leadeket az első perceken belül, minősíti az érdeklődést, foglal vagy átad — és addig megy utána, amíg valóban el nem éri. Havonta riportot küld: hány lead érkezett, mennyit ért el, milyen gyorsan.",
  },
  {
    q: "Csak válaszol, vagy valóban kvalifikál is?",
    a: "Kvalifikál is. Felteszi az első kérdéseket és megerősíti az érdeklődést — hogy Ön tényleg minőségi leadekkel foglalkozzon, ne csupán egy kontaktlistával.",
  },
  {
    q: "Milyen hirdetési platformokkal működik?",
    a: "Meta (Facebook, Instagram) és Google — ahol a leadek a legtöbb esetben keletkeznek. Más platform esetén a megbeszélésen megnézzük.",
  },
  {
    q: "Milyen gyorsan van éles?",
    a: "Jellemzően 5–10 munkanap. A megbeszélésen végigmegyünk azon, hány csatornáról és milyen volumenről van szó, és megmondjuk pontosan.",
  },
  {
    q: "Mennyibe kerül?",
    a: "Az ár a lead-volumentől és a csatornák számától függ. A megbeszélésen a saját számaiból megmutatjuk a pontos összeget — mielőtt bármit dönt.",
  },
];

export default function FaqGyorsLead() {
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
