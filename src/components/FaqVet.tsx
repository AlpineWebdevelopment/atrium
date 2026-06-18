"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Mennyibe kerül állatorvosi rendelőnek?",
    a: "Rejtett tételek nincsenek. Az árat a megbeszélésen, az Ön rendelőjének számaiból állítjuk össze: mennyi hívás jön be, mennyit ér egy visszatérő gazda, és hol folyik most el a bevétel. A végén egyetlen, átlátható összeget kap.",
  },
  {
    q: "Tudja kezelni a sürgősségi hívásokat?",
    a: "Igen. A rendszer az Ön protokollja alapján azonnal kiszűri a sürgős eseteket, és azokat elsőbbséggel kezeli — ha szükséges, azonnal továbbítja Önnek. A kevésbé sürgős hívásokat egyszerűen időpontba foglalja.",
  },
  {
    q: "Honnan tudja a hívó, hogy AI-jal beszél?",
    a: "Nem rejtjük el: ez egy automatizált rendszer. Viszont természetes, gördülékeny magyarsággal beszél, és ha valaki rákérdez, nyíltan megmondja. Az őszinteséget a GDPR és a mi alapelveink is elvárják.",
  },
  {
    q: "Mi van, ha a gazda emberrel akar beszélni?",
    a: "Amint a gazda élő embert kér, a rendszer rögtön átkapcsol — Önhöz vagy az illetékes kollégájához. Ha senki nem elérhető, visszahívást szervez a megadott időpontra. Közben mi figyeljük a beszélgetéseket és folyamatosan finomítjuk.",
  },
  {
    q: "Milyen fajokra és kezelésekre konfigurálható?",
    a: "Teljesen rugalmas — az Ön rendelőjének profilját állítjuk be: kis-, nagy- vagy egzotikus állatok, oltások, műtétek, fogászat, sürgősség. Minden kérdés és szűrőlogika az Ön protokollja szerint épül fel.",
  },
  {
    q: "Hány hívást tud egyszerre kezelni?",
    a: "Korlátlan mennyiséget, egyszerre. Műtét alatt, vizsgálat közben, hétvégén és zárás után is felveszi az összes hívást — soha nem foglalt, nincs sorban állás.",
  },
  {
    q: "Biztonságban vannak a páciensadatok? Megfelel a GDPR-nak?",
    a: "Igen. Minden adat EU-s szervereken tárolódik, és az egész folyamat megfelel a GDPR-nak. A gazdák és páciensek adatai csak azokkal a rendszerekkel szinkronizálnak, amelyeket Ön már most is használ.",
  },
  {
    q: "Kell új szoftvert bevezetnünk?",
    a: "Nem. A rendszer egyenesen a már használt naptárába ír (Google Calendar, Microsoft 365, iCal), az ügyféladatok pedig egy EU-ban hosztolt CRM-en keresztül frissülnek. A csapata semmit nem cserél le.",
  },
  {
    q: "Mennyi idő alatt térül meg, és hogyan látom?",
    a: "A rendszer általában 60 nap alatt kitermeli az árát a megmentett bevételből. Havi kimutatásban látja, hány hívás futott be, hány vizsgálati időpont lett belőle, hány gazda tért vissza — és mennyi bevételt fogott meg.",
  },
  {
    q: "Vissza tudja hozni a rég nem járt gazdákat?",
    a: "Igen. Sorra veszi az éve nem látott gazdákat és a félbehagyott érdeklődőket — például akiknek lejárt az éves oltása —, és udvariasan visszahívja őket. Ugyanabból a listából, ami már most a kezében van.",
  },
];

export default function FaqVet() {
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
