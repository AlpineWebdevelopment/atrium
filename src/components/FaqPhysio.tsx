"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Mennyibe kerül egy gyógytornász vagy fizioterapeuta rendelőnek?",
    a: "Nincs egységes árlista — az árat az Ön rendelőjének számaiból állítjuk össze: mennyi hívás jön be, mennyi a no-show arány, és mennyit ér egy visszatérő páciens. A megbeszélésen kap egy konkrét összeget, meglepetés nélkül.",
  },
  {
    q: "Kezelés közben is felveszi a hívásokat?",
    a: "Igen — pontosan erre terveztük. Manuálterápia, ultrahangos kezelés, gyógytorna közben a rendszer veszi fel a telefont, tájékoztatja a pácienst, és ha szükséges, foglalást is vesz fel. Ön kezel, a rendszer kommunikál.",
  },
  {
    q: "Mi van, ha a páciens személlyel akar beszélni?",
    a: "Amint a páciens élő személyt kér, a rendszer rögtön átkapcsol — Önhöz vagy a kollégájához. Ha senki nem elérhető, visszahívást szervez a megadott időpontra. Közben figyeljük a hívásokat és folyamatosan finomítjuk.",
  },
  {
    q: "Hogyan csökkenti a no-show-k számát?",
    a: "A rendszer automatikusan emlékeztetőt küld SMS-ben vagy WhatsAppon 24 és 2 órával az időpont előtt. Ha a páciens mégsem jön, azonnal értesíti a várólistán lévőket — így az üres idősáv feltöltődik.",
  },
  {
    q: "Tudja kezelni a különböző kezelési típusokat és terapeutákat?",
    a: "Igen. Minden terapeutát, kezelési típust és annak időtartamát beállítjuk: gyógytorna, manuálterápia, ultrahang, masszázs, McKenzie-módszer, Bobath — mindegyiknek más naptár, más időtartam. A páciens pontosan ahhoz a terapeutához és kezeléshez foglal, amelyre szüksége van.",
  },
  {
    q: "Hány hívást tud egyszerre kezelni?",
    a: "Korlátlan mennyiséget, egyszerre. Hétvégén, ünnepnapon, zárás után is felveszi az összes hívást — soha nem foglalt, nincs sorban állás, nincs elveszett foglalás.",
  },
  {
    q: "Biztonságban vannak a páciensadatok? Megfelel a GDPR-nak?",
    a: "Igen. Minden adat EU-s szervereken tárolódik, és az egész folyamat megfelel a GDPR-nak. A páciensek adatai csak azokkal a rendszerekkel szinkronizálnak, amelyeket Ön már most is használ.",
  },
  {
    q: "Kell új szoftvert bevezetnünk?",
    a: "Nem. A rendszer az Ön meglévő naptárába ír (Google Calendar, Microsoft 365, iCal), az ügyféladatok pedig egy EU-ban hosztolt CRM-en keresztül frissülnek. A csapata semmit nem cserél le.",
  },
  {
    q: "Mennyi idő alatt térül meg?",
    a: "A rendszer általában 60 nap alatt kitermeli az árát a megmentett bevételből — a feltöltött no-show helyekből és a visszahozott régi páciensekből. Havi kimutatásban látja pontosan, mennyit fogott meg.",
  },
  {
    q: "Vissza tudja hozni a régen nem járt pácienseket?",
    a: "Igen. Sorra veszi azokat, akik hónapok óta nem jártak, és egy udvarias üzenettel emlékezteti őket a kezelési folyamat folytatásának fontosságára — vagy egy szezonális ajánlattal hívja vissza. Ugyanabból a listából, ami már most a kezében van.",
  },
];

export default function FaqPhysio() {
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
