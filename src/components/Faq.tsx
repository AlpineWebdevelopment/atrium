"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Mibe kerül, és vannak rejtett költségek?",
    a: "Az ár attól függ, mekkora a cége, és mennyi bevétel szivárog el most. Ezt a találkozón, az Ön saját számai alapján számoljuk ki — nem egy általános árlistából. Nincs rejtett tétel: amit megbeszélünk, az a teljes ár, a rendszerrel és a havi felügyelettel együtt.",
  },
  {
    q: "Észreveszik az ügyfelek, hogy AI-val beszélnek?",
    a: "Nem titkoljuk, hogy a rendszer AI — és nem állítjuk, hogy senki nem veszi észre. Amit vállalunk: természetes, magyar nyelvű beszélgetés, menürendszer és robothang nélkül. A cél nem a megtévesztés, hanem hogy az ügyfél gyorsan és érthetően választ kapjon.",
  },
  {
    q: "Mi történik, ha a rendszer hibázik?",
    a: "Minden beszélgetés visszanézhető, és ha valami nem stimmel, a rendszeren javítunk. A bizonytalan vagy összetett eseteket átadja egy munkatársnak, nem próbál mindenáron válaszolni. Az első hetekben együtt hangoljuk be, hogy az Ön cégének nyelvén beszéljen.",
  },
  {
    q: "Egyszerre hány megkeresést kezel?",
    a: "Egyszerre több hívást és üzenetet is kezel, párhuzamosan — szemben egy munkatárssal, aki egyszerre egy hívást tud felvenni. A csúcsidő vagy az esti órák nem jelentenek kiesést.",
  },
  {
    q: "Biztonságban vannak az adatok? Megfelel a GDPR-nak?",
    a: "Igen. Az adatok az Európai Unióban, frankfurti szervereken, titkosítva tárolódnak. A rendszer a magyar és az uniós adatvédelmi elvek szerint működik, és Ön bármikor látja, milyen adatot kezel.",
  },
  {
    q: "Be tud foglalni a naptáramba?",
    a: "Igen. Valós időben nézi a szabad időpontokat, foglal, és visszaigazolja az ügyfélnek SMS-ben és e-mailben. A lemondást és az átütemezést is kezeli, és a meglévő naptárához illeszkedik.",
  },
  {
    q: "Mi van, ha az ügyfél emberrel akar beszélni?",
    a: "Átadja a hívást vagy az üzenetet egy munkatársnak, és röviden összefoglalja, miről volt szó — így az ügyfélnek nem kell mindent elölről kezdenie. Ön dönti el, mely esetek menjenek mindig emberhez.",
  },
  {
    q: "Kell hozzá technikai tudás?",
    a: "Nem. A beállítást mi végezzük, Önnek nem kell új rendszert megtanulnia. A megszokott eszközeit használja tovább; a rendszer a háttérben dolgozik.",
  },
  {
    q: "Honnan tudom, hogy működik?",
    a: "Havonta tiszta képet kap arról, hány hívást fogadott a rendszer, hány időpont lett belőle, és mit hozott vissza. Nem ígéreteket lát, hanem a saját számait.",
  },
  {
    q: "Vissza tudja hozni a régi ügyfeleket?",
    a: "Igen — megkeresi azokat, akik régen jártak Önnél, és személyre szabott üzenettel hívja vissza őket. Őszintén: aki árérzékenység miatt ment el, azt egy üzenet nem hozza vissza. Aki csak elsodródott, azt igen.",
  },
  {
    q: "Milyen garanciát vállalnak?",
    a: "Nem ígérünk varázsszámokat. Amit vállalunk: az ár az Ön számaiból jön, rejtett költség nélkül, és rendszeres rálátása van arra, mit csinál a rendszer. Konkrét bevételi számot nem garantálunk — azt tisztességesen előre senki nem ígérheti meg. A rendszer azt hozza vissza, ami eddig elveszett.",
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
