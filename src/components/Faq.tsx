"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Mennyibe kerül, és vannak rejtett költségek?",
    a: "Nincs rejtett tétel. A pontos árat az Ön számai alapján a megbeszélésen számoljuk ki — a hívásmennyiségből, az átlagos ügyfélértékből és abból, hol szivárog most a bevétel. Egy összeget lát, és tudja, mire megy.",
  },
  {
    q: "Honnan tudja a hívó, hogy AI-jal beszél?",
    a: "Nem titkoljuk, hogy automatizált rendszer — de természetes, folyékony magyarsággal beszél. Ha a hívó rákérdez, egyértelműen megmondja. Az átláthatóságot a GDPR és a saját elveink is megkövetelik.",
  },
  {
    q: "Mi van, ha a rendszer hibázik, vagy az ügyfél emberrel akar beszélni?",
    a: "Amit nem tud lekezelni, azt nem találja ki — átadja Önnek vagy a megfelelő kollégának. Ha az ügyfél embert kér, azonnal továbbítja. A beszélgetéseket figyeljük, és a rendszert folyamatosan az Ön működésére hangoljuk.",
  },
  {
    q: "Hány hívást tud egyszerre kezelni?",
    a: "Egyszerre akárhányat. Nincs foglalt vonal és nincs várakozás — csúcsidőben, hétvégén és munkaidő után is minden hívást felvesz.",
  },
  {
    q: "Biztonságban vannak az ügyféladatok? Megfelel a GDPR-nak?",
    a: "Igen. Az adatok EU-ban hosztolt rendszerben vannak, és a teljes folyamat GDPR-megfelelő. Csak azokat az adatokat kezeli, amelyek Önnél amúgy is megvannak — az Ön szabályai szerint.",
  },
  {
    q: "Kell új rendszert bevezetnünk?",
    a: "Nem. A meglévő naptárába (Google Calendar, Microsoft 365, iCal) közvetlenül ír, az ügyféladatok pedig EU-ban hosztolt GoHighLevel-en keresztül szinkronizálódnak. A csapata ugyanazokkal az eszközökkel dolgozik tovább.",
  },
  {
    q: "Kell hozzá technikai tudás?",
    a: "Nem. Mi állítjuk be, kötjük be és üzemeltetjük. Önnek annyi a dolga, hogy elmondja, hogyan működik a cége — a többi a miénk.",
  },
  {
    q: "Mennyi idő alatt térül meg, és hogyan látom?",
    a: "A rendszer jellemzően 60 nap alatt visszahozza a saját árát a megfogott bevételből; utána a többi felüljáró. Havonta tiszta képet kap arról, hány hívást fogadott, hány időpontot foglalt és mennyi bevételt mentett meg.",
  },
  {
    q: "Vissza tudja hozni a régi ügyfeleket?",
    a: "Igen. Végigmegy a régóta nem jelentkező ügyfeleken és a félbemaradt érdeklődőkön, és udvariasan visszahívja őket — abból a listából, ami már most ott van Önnél.",
  },
  {
    q: "Milyen garanciát adnak?",
    a: "Ha a közösen kitűzött számokat nem hozza, felár nélkül addig hangoljuk, amíg eléri. Kéthetente megmutatjuk, hol tartunk, és bármikor látja, mire megy a pénze.",
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
