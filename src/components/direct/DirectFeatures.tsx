/* The difference, as a comparison table under "Amit mi AI-nak hívunk.":
   four rows — package, technology, value, transparency — with what the
   market sells as AI on the left (muted, crossed) and what we do on the
   right (the highlighted column). No illustrations: the contrast is the
   design. No published prices and no unverifiable figures. */

const ROWS = [
  {
    k: "Csomag",
    show: "Dobozos megoldás, mindenkinek ugyanaz.",
    us: "Az Ön méretéhez és folyamatához szabva, saját CRM-mel és folyamatos támogatással.",
  },
  {
    k: "Technológia",
    show: "Egy chatablak a weboldal sarkában.",
    us: "Telefon, SMS, WhatsApp, Messenger, Instagram, e-mail, webchat — egy memóriával. Az ügyfélnek semmit nem kell kétszer elmondania.",
  },
  {
    k: "Érték",
    show: "Szép bemutató. Az eredményt senki nem méri.",
    us: "Több megkeresésből lesz megrendelés. Hogy mennyivel, azt az Ön számaiból számoljuk.",
  },
  {
    k: "Átláthatóság",
    show: "Fekete doboz. El kell hinnie, hogy működik.",
    us: "Minden beszélgetés, ügyfél és eredmény egy felületen, valós időben — mobilon is.",
  },
];

const X = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="dr-cmp__x"><path d="M6 6l12 12M18 6L6 18" /></svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="dr-cmp__ok"><path d="M5 13l4 4L19 7" /></svg>
);

export default function DirectFeatures() {
  return (
    <section className="dr-sec dr-cmp-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">A különbség.</h2>
        </div>
        <div className="dr-cmp reveal" data-delay="1" role="table" aria-label="AI-show és az Atrium összehasonlítása">
          <div className="dr-cmp__row dr-cmp__row--head" role="row">
            <span role="columnheader" className="dr-cmp__k" />
            <span role="columnheader" className="dr-cmp__show"><X />AI-show</span>
            <span role="columnheader" className="dr-cmp__us"><Check />Nálunk</span>
          </div>
          {ROWS.map((r) => (
            <div className="dr-cmp__row" role="row" key={r.k}>
              <span role="rowheader" className="dr-cmp__k">{r.k}</span>
              <span role="cell" className="dr-cmp__show"><X />{r.show}</span>
              <span role="cell" className="dr-cmp__us"><Check />{r.us}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
