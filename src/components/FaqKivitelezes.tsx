"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Mennyi megrendelést hagyok valójában az asztalon?",
    a: "A legtöbb kivitelező cégvezető nem tudja — és pont ez a baj. Hány esti hívás megy veszendőbe, miközben Ön a helyszínen van? Hány árajánlat hűl ki utánkövetés nélkül? Hány felmérési időpont esik ki visszahívás nélkül? Ami nincs mérve, az csendben szivárog hónapról hónapra. A találkozón az Ön valós adataiból kiszámoljuk a pontos összeget — utána nem tippel, hanem tudja.",
  },
  {
    q: "Észreveszik a megrendelők, hogy AI-val beszélnek?",
    a: "Őszintén: a hívók túlnyomó többsége nem veszi észre, hogy AI-val beszél — nagyon ritkán fordul elő. Természetes ütemben, valódi szünetekkel és élő beszédfordulatokkal beszél, magyarul, menü és robothang nélkül. Nem titkoljuk, hogy AI; a beszélgetés egyszerűen annyira gördülékeny, hogy a legtöbben bele sem gondolnak.",
  },
  {
    q: "Mennyire természetes a magyar beszéd?",
    a: "Ezt nem szépítjük: ha gépiesen szólalna meg, az első mondatból le is tennék. Ezért hétköznapi, formális Ön-megszólítású magyarral beszél, és a hangot az Ön cégéhez hangoljuk, mielőtt élesedik.",
  },
  {
    q: "Milyen rendszert kapok mellé?",
    a: "Egy teljes, kész rendszert — saját CRM-mel, beüzemelve, az első naptól használhatóan. Ezt ajánljuk: minden egy helyen van, így hozza ki magából a legtöbbet. Ha viszont a megszokott eszközeinél maradna, ahhoz is csatlakozunk — a döntés az Öné.",
  },
  {
    q: "Működik-e, ha Ön egész nap a helyszínen van?",
    a: "Pontosan erre lett tervezve. A rendszer akkor is fogadja a hívásokat és egyezteti a felmérési időpontokat, amikor Ön épp falat húz, anyagot szervez vagy az alvállalkozókkal egyeztet. Nem kell félbehagynia a munkát — a rendszer nem fárad el és nem felejt.",
  },
  {
    q: "Kié lesz az adat?",
    a: "Az Öné, és bármikor elviheti — nem zárjuk magunkhoz. Amíg üzemeltetjük, hozzáférünk, de ha elválunk, minden Önnél marad.",
  },
  {
    q: "Tudok rajta változtatni később?",
    a: "Igen. A cége változik, a rendszer vele változik — ez a karbantartás része, nem új számla minden apró módosításért. A rendszer Önt szolgálja, nem fordítva.",
  },
];

export default function FaqKivitelezes() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq" id="gyik">
      <div className="wrap">
        <div className="faq__head reveal">
          <span className="dash__eyebrow">GYIK</span>
          <h2 className="faq__h">A kérdések,<br />amelyeket mindenki feltesz.</h2>
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
