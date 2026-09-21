/* "A különbség." — four comparison bands under "Amit mi AI-nak hívunk.":
   package, technology, value, transparency. Each band: a big number and
   label, the AI-show card (dashed, struck title, why it fails), an arrow,
   and our card (icon, title, one line, three checks). No published prices,
   no unverifiable figures. */

type Row = {
  n: string;
  k: string;
  show: { t: string; d: string };
  us: { t: string; d: string; items: string[] };
  Icon: () => React.JSX.Element;
};

const IconBox = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" /><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" /></svg>
);
const IconChannels = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3" /><circle cx="4" cy="6" r="2" /><circle cx="20" cy="6" r="2" /><circle cx="4" cy="18" r="2" /><circle cx="20" cy="18" r="2" /><path d="M6 7l3.5 3M18 7l-3.5 3M6 17l3.5-3M18 17l-3.5-3" /></svg>
);
const IconTrend = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg>
);
const IconEye = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>
);

const ROWS: Row[] = [
  {
    n: "01",
    k: "Csomag",
    show: {
      t: "Dobozos csomag",
      d: "Mindenki ugyanazt kapja, a cégnek kell igazodnia a szoftverhez. Ami nem fér bele, az kimarad.",
    },
    us: {
      t: "Az Ön cégére szabva",
      d: "Előbb megnézzük, hogyan dolgozik, és ahhoz építjük a rendszert — a pár fős csapattól a nagyvállalatig.",
      items: ["Saját CRM minden csomagban", "Beállítás és havidíj a cég méretéhez igazítva", "Folyamatos támogatás és karbantartás"],
    },
    Icon: IconBox,
  },
  {
    n: "02",
    k: "Technológia",
    show: {
      t: "Egy chatablak",
      d: "A weboldal sarkában ül, és csak azt látja, amit ott írnak neki. A telefonról és az e-mailről nem tud semmit.",
    },
    us: {
      t: "Minden csatorna, egy memória",
      d: "Akárhol keresi az ügyfél, a rendszer ugyanazt a beszélgetést viszi tovább. Semmit nem kell kétszer elmondania.",
      items: ["Telefon, SMS, WhatsApp, Messenger, Instagram, e-mail, webchat", "Magától megkeresi a régi és elhidegült ügyfeleket", "A CRM valós időben frissül"],
    },
    Icon: IconChannels,
  },
  {
    n: "03",
    k: "Érték",
    show: {
      t: "Szép bemutató",
      d: "A meetingen lenyűgöző. Hogy utána hoz-e pénzt, azt senki nem méri — és senki nem is kérdezi.",
    },
    us: {
      t: "Mérhető bevétel",
      d: "Egy dolga van: hogy több megkeresésből legyen megrendelés. A megtérülést az Ön számaiból számoljuk, nem ígéretből.",
      items: ["Kevesebb elveszett érdeklődő", "Heti riport, forintban", "A számok alapján folyamatos finomítás"],
    },
    Icon: IconTrend,
  },
  {
    n: "04",
    k: "Átláthatóság",
    show: {
      t: "Fekete doboz",
      d: "Fut valami a háttérben, de nem látja, mit csinál. El kell hinnie, hogy működik.",
    },
    us: {
      t: "Minden látszik",
      d: "Egy felületen látja az összes beszélgetést, ügyfelet és eredményt, valós időben.",
      items: ["Minden beszélgetés visszanézhető", "Valós idejű mutatók és statisztikák", "Több AI-ügynök egy helyen, mobilon is"],
    },
    Icon: IconEye,
  },
];

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="dr-vs__ok"><path d="M5 13l4 4L19 7" /></svg>
);

export default function DirectFeatures() {
  return (
    <section className="dr-sec dr-vs-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">A különbség.</h2>
        </div>

        <div className="dr-vs__head reveal" data-delay="1" aria-hidden="true">
          <span />
          <span className="dr-vs__pill dr-vs__pill--show">AI-show</span>
          <span />
          <span className="dr-vs__pill dr-vs__pill--us">Atrium</span>
        </div>

        <div className="dr-vs">
          {ROWS.map((r, i) => (
            <div className="dr-vs__row reveal" data-delay={(i % 2) + 1} key={r.n}>
              <div className="dr-vs__meta">
                <span className="dr-vs__n">{r.n}</span>
                <span className="dr-vs__k">{r.k}</span>
              </div>

              <div className="dr-vs__show">
                <span className="dr-vs__tag">AI-show</span>
                <h3 className="dr-vs__st">{r.show.t}</h3>
                <p>{r.show.d}</p>
              </div>

              <div className="dr-vs__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </div>

              <div className="dr-vs__us">
                <div className="dr-vs__ustop">
                  <span className="dr-vs__icon"><r.Icon /></span>
                  <div>
                    <span className="dr-vs__tag dr-vs__tag--us">Atrium</span>
                    <h3 className="dr-vs__ut">{r.us.t}</h3>
                  </div>
                </div>
                <p>{r.us.d}</p>
                <ul>
                  {r.us.items.map((t) => (
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
