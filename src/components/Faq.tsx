"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Mennyibe kerül, és vannak rejtett költségek?",
    a: "Rejtett tételek nincsenek. Az árat a megbeszélésen, az Ön saját számaiból állítjuk össze: mennyi hívás jön be, mennyit ér egy ügyfél, és hol folyik most el a bevétel. A végén egyetlen, átlátható összeget kap.",
  },
  {
    q: "Honnan tudja a hívó, hogy AI-jal beszél?",
    a: "Nem rejtjük el: ez egy automatizált rendszer. Viszont természetes, gördülékeny magyarsággal beszél, és ha valaki rákérdez, nyíltan megmondja. Az őszinteséget a GDPR és a mi alapelveink is elvárják.",
  },
  {
    q: "Mi van, ha a rendszer hibázik, vagy az ügyfél emberrel akar beszélni?",
    a: "Ha valamit nem tud elintézni, nem kezd el válaszokat kitalálni — továbbadja Önnek vagy az illetékes kollégának. Amint az ügyfél élő embert kér, rögtön kapcsol. Közben mi figyeljük a beszélgetéseket, és a rendszert folyamatosan a cégéhez igazítjuk.",
  },
  {
    q: "Hány hívást tud egyszerre kezelni?",
    a: "Korlátlan mennyiséget, egyszerre. Soha nem foglalt, és nincs sorban állás — csúcsidőben, hétvégén és zárás után is felveszi az összes hívást.",
  },
  {
    q: "Biztonságban vannak az ügyféladatok? Megfelel a GDPR-nak?",
    a: "Igen. Minden adat EU-s szervereken tárolódik, és az egész folyamat megfelel a GDPR-nak. A rendszer csak azokkal az adatokkal dolgozik, amelyek Önnél eddig is megvoltak — az Ön szabályai mentén.",
  },
  {
    q: "Kell új rendszert bevezetnünk?",
    a: "Nem. Egyenesen a már használt naptárába ír (Google Calendar, Microsoft 365, iCal), az ügyféladatok pedig egy EU-ban hosztolt GoHighLevel-en keresztül frissülnek. A csapata semmit nem cserél le.",
  },
  {
    q: "Kell hozzá technikai tudás?",
    a: "Nincs rá szükség. A beállítást, a bekötést és az üzemeltetést mi végezzük. Önre csak annyi vár, hogy elmesélje, hogyan működik a cége — a többit ránk bízhatja.",
  },
  {
    q: "Mennyi idő alatt térül meg, és hogyan látom?",
    a: "A rendszer általában 60 nap alatt kitermeli az árát a megmentett bevételből — onnantól a többi tiszta nyereség. Havi kimutatásban látja, hány hívás futott be, hány időpont lett belőle, és mennyi bevételt fogott meg.",
  },
  {
    q: "Vissza tudja hozni a régi ügyfeleket?",
    a: "Igen. Sorra veszi a rég nem látott ügyfeleket és a félbehagyott érdeklődőket, és udvariasan újra megkeresi őket — ugyanabból a listából, ami már most a kezében van.",
  },
  {
    q: "Milyen garanciát adnak?",
    a: "Ha nem hozza a közösen meghatározott eredményt, addig finomítjuk — felár nélkül —, amíg eléri. Kéthetente beszámolunk a haladásról, így mindig tudja, mire megy a pénze.",
  },
];

export default function Faq() {
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
