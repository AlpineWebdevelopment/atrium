import type { CSSProperties } from "react";

/* "Amit mi AI-nak hívunk." as five statements: the claim large on one side,
   the explanation and the proof on the other, sides swapping row by row. The
   half of each claim that carries the point is set in that row's colour, over
   the one word that names what the row is about: revenue, size, channels,
   the dashboard, the payback. The five colours sit a wide step
   apart, and none of them is red. No boxes, no drawings. No published prices,
   no unverifiable figures. */

type Row = { k: string; accent: string; k2: string; t: string; hi: string; d: string; items: string[] };

const ROWS: Row[] = [
  {
    k: "ertek",
    accent: "#46168F",
    k2: "Bevétel",
    t: "Egy dolga van:",
    hi: "pénzt hozni.",
    d: "Nem képgenerálás, nem csevegőablak a weboldal sarkában. Az a dolga, hogy több megkeresésből legyen megrendelés.",
    items: ["Több ügyfél, több foglalás, több bevétel", "Megtérülés az Ön számaiból, nem ígéretből", "Mérhető növekedés, nem bemutató"],
  },
  {
    k: "meret",
    accent: "#0B6C79",
    k2: "Méret",
    t: "Cégre szabva,",
    hi: "nem dobozból",
    d: "A folyamatához és a méretéhez igazítjuk, a pár fős csapattól a nagyvállalatig.",
    items: ["Saját CRM minden csomagban", "Díj a cég méretéhez igazítva", "Folyamatos támogatás"],
  },
  {
    k: "csatorna",
    accent: "#9E1459",
    k2: "Csatornák",
    t: "Minden csatorna,",
    hi: "egy memória",
    d: "Amit a cége használ, azt bekötjük: telefon, SMS, WhatsApp, Viber, Messenger, Instagram, e-mail, webchat. Mindegyik ugyanabból a memóriából dolgozik.",
    items: ["Semmit nem kell kétszer elmondani", "Természetes magyar beszéd, robothang nélkül", "Valós idejű CRM-szinkron"],
  },
  {
    k: "adat",
    accent: "#17399E",
    k2: "Irányítópult",
    t: "Egy felület,",
    hi: "minden adat",
    d: "Egy felületen látja az összes beszélgetést, ügyfelet és eredményt, valós időben.",
    items: ["Minden beszélgetés visszanézhető", "Élő mutatók és statisztikák", "Több AI-ügynök egy helyen, mobilon is"],
  },
  {
    k: "megterules",
    accent: "#0D4C39",
    k2: "Megtérülés",
    t: "Nem érzésre:",
    hi: "látja, mit hozott",
    d: "A felületet a cégére szabjuk, nem kész dobozt adunk. A mutatókat a bevezetéskor közösen tesszük rá, és a rendszerből jött munkák a díj mellett állnak.",
    items: ["Saját irányítópult az első naptól", "Nem havi riportra vár: belép, és látja a hetet", "A hozzáférés az Öné, bármikor megnézheti"],
  },
];

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
);

export default function DirectFeatures() {
  return (
    <section className="dr-sec dr-bento-sec">
      <div className="dr-wrap">
        <div className="nx-band">
          {ROWS.map((r, i) => (
            <div
              className={`nx-row${i % 2 ? " nx-row--flip" : ""}`}
              key={r.k}
              style={{ "--art-accent": r.accent } as CSSProperties}
            >
              <div className="nx-row__head">
                <span className="nx-row__k reveal">{r.k2}</span>
                <h3 className="nx-row__t reveal">{r.t}<em>{r.hi}</em></h3>
              </div>
              <div className="nx-row__body">
                <p className="reveal" data-delay="1">{r.d}</p>
                <ul className="nx-list reveal" data-delay="2">
                  {r.items.map((t) => (
                    <li key={t}><Check /><span>{t}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
