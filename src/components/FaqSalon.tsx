"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Mennyibe kerül egy szépségszalonnak?",
    a: "Nincs egységes árlista — az árat az Ön szalonjának számaiból állítjuk össze: mennyi hívás jön be, mennyi a no-show arány, és mennyit ér egy visszatérő vendég. A megbeszélésen kap egy konkrét összeget, meglepetés nélkül.",
  },
  {
    q: "Kezelés közben is felveszi a hívásokat?",
    a: "Igen — pontosan erre terveztük. Festés, műköröm, masszázs közben a rendszer veszi fel a telefont, tájékoztatja a vendéget, és ha szükséges, foglalást is vesz fel. Ön dolgozik, a rendszer kommunikál.",
  },
  {
    q: "Mi van, ha a vendég személlyel akar beszélni?",
    a: "Amint a vendég élő személyt kér, a rendszer rögtön átkapcsol — Önhöz vagy a kollégájához. Ha senki nem elérhető, visszahívást szervez a megadott időpontra. Közben figyeljük a hívásokat és folyamatosan finomítjuk.",
  },
  {
    q: "Hogyan csökkenti a no-show-k számát?",
    a: "A rendszer automatikusan emlékeztetőt küld SMS-ben vagy WhatsAppon 24 és 2 órával az időpont előtt. Ha a vendég mégsem jön, azonnal értesíti a várólistán lévőket — így az üres hely feltöltődik.",
  },
  {
    q: "Tudja kezelni a különböző kezelési típusokat és mestereket?",
    a: "Igen. Minden mestert, kezelést és annak időtartamát beállítjuk: hajfestés, műköröm, masszázs, arckezelés — mindegyiknek más naptár, más időtartam. A vendég pontosan ahhoz a mesterhez és kezeléshez foglal, amelyet szeretne.",
  },
  {
    q: "Hány hívást tud egyszerre kezelni?",
    a: "Korlátlan mennyiséget, egyszerre. Hétvégén, ünnepnapon, zárás után is felveszi az összes hívást — soha nem foglalt, nincs sorban állás, nincs elveszett foglalás.",
  },
  {
    q: "Biztonságban vannak a vendégadatok? Megfelel a GDPR-nak?",
    a: "Igen. Minden adat EU-s szervereken tárolódik, és az egész folyamat megfelel a GDPR-nak. A vendégek adatai csak azokkal a rendszerekkel szinkronizálnak, amelyeket Ön már most is használ.",
  },
  {
    q: "Kell új szoftvert bevezetnünk?",
    a: "Nem. A rendszer az Ön meglévő naptárába ír (Google Calendar, Microsoft 365, iCal), az ügyféladatok pedig egy EU-ban hosztolt CRM-en keresztül frissülnek. A csapata semmit nem cserél le.",
  },
  {
    q: "Mennyi idő alatt térül meg?",
    a: "A rendszer általában 60 nap alatt kitermeli az árát a megmentett bevételből — a feltöltött no-show helyekből és a visszahozott régi vendégekből. Havi kimutatásban látja pontosan, mennyit fogott meg.",
  },
  {
    q: "Vissza tudja hozni a régen nem járt vendégeket?",
    a: "Igen. Sorra veszi azokat, akik hónapok óta nem jártak, és egy udvarias üzenettel visszahívja őket — például egy szezonális ajánlattal, vagy csak egy egyszerű \"Mikor jön legközelebb?\" kérdéssel. Ugyanabból a listából, ami már most a kezében van.",
  },
];

export default function FaqSalon() {
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
