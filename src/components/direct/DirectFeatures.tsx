/* Four alternating rows under "Amit mi AI-nak hívunk." — packages, the
   technology, the value, the dashboard. Each row: a coloured mono eyebrow,
   a title, one line, a checklist in the row's colour, and a line-art
   illustration on a dotted field. Adapted from a reference layout; copy is
   our own. No published prices and no unverifiable figures (detection
   rates, ROI windows) — the brand spec rules both out. */

type Row = {
  eyebrow: string;
  color: string;
  title: string;
  lead: string;
  items: string[];
  Art: () => React.JSX.Element;
};

function ArtBox() {
  return (
    <svg viewBox="0 0 240 240" aria-hidden="true">
      <path d="M120 40 L200 86 L120 132 L40 86 Z" />
      <path d="M40 86 L40 174 L120 220 L120 132" />
      <path d="M200 86 L200 174 L120 220" />
      <g transform="translate(160 154) skewY(-30)">
        <circle r="24" />
        <circle r="10" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          return <line key={i} x1={Math.cos(a) * 24} y1={Math.sin(a) * 24} x2={Math.cos(a) * 32} y2={Math.sin(a) * 32} />;
        })}
      </g>
      <path d="M62 108 L98 129 M62 124 L98 145 M62 140 L86 154" />
    </svg>
  );
}

function ArtComputer() {
  return (
    <svg viewBox="0 0 240 240" aria-hidden="true">
      <path d="M56 46 L168 36 L168 142 L56 152 Z" />
      <path d="M168 36 L190 50 L190 154 L168 142" />
      <path d="M56 152 L78 166 L190 154" />
      <path d="M70 60 L154 52 L154 128 L70 136 Z" />
      <path d="M80 76 L120 72 M80 88 L140 83 M80 100 L110 97 M80 112 L132 107" />
      <path d="M44 178 L166 166 L208 188 L86 202 Z" />
      <path d="M70 182 L170 172 M84 190 L184 180" />
      <path d="M108 158 L108 170 M140 155 L140 167" />
    </svg>
  );
}

function ArtRocket() {
  return (
    <svg viewBox="0 0 240 240" aria-hidden="true">
      <path d="M120 24 C138 44 142 78 138 120 L102 120 C98 78 102 44 120 24 Z" />
      <circle cx="120" cy="70" r="9" />
      <path d="M102 104 L86 126 L102 122 M138 104 L154 126 L138 122" />
      <path d="M110 124 L112 150 M120 124 L120 160 M130 124 L128 150" />
      <path d="M120 176 L196 206 L120 236 L44 206 Z" />
      <path d="M82 191 L158 221 M158 191 L82 221 M101 183.5 L177 213.5 M139 183.5 L63 213.5" />
    </svg>
  );
}

function ArtSatellite() {
  return (
    <svg viewBox="0 0 240 240" aria-hidden="true">
      <path d="M104 96 L136 96 L136 136 L104 136 Z" />
      <path d="M104 106 L40 86 L40 126 L104 126 M136 106 L200 126 L200 166 L136 146" />
      <path d="M56 91 L56 131 M72 96 L72 136 M88 101 L88 141 M152 111 L152 151 M168 116 L168 156 M184 121 L184 161" />
      <path d="M40 106 L104 116 M136 126 L200 146" />
      <path d="M120 96 L120 70" />
      <path d="M100 70 A20 12 0 0 0 140 70 Z" />
      <path d="M150 52 A34 34 0 0 1 172 76 M158 38 A50 50 0 0 1 188 70" />
      <path d="M92 188 C110 176 130 176 148 188 C166 200 186 200 204 188" />
    </svg>
  );
}

const ROWS: Row[] = [
  {
    eyebrow: "Egyedi csomagok",
    color: "#4F9E43",
    title: "A cég méretéhez szabva.",
    lead: "Pár fős csapattól a nagyvállalatig. A rendszert az Ön folyamatához és számaihoz állítjuk be, nem Önnek kell hozzá igazodnia.",
    items: [
      "Beállítás és havidíj az Ön méretéhez igazítva",
      "Saját CRM minden csomagban",
      "Folyamatos támogatás és karbantartás",
      "Heti riport, és a számok alapján finomítás",
    ],
    Art: ArtBox,
  },
  {
    eyebrow: "A technológia",
    color: "#9662BC",
    title: "Minden csatorna, egy memória.",
    lead: "Akárhol keresi az ügyfél, ugyanazt a beszélgetést folytatja. Nem kell kétszer elmondania, és a rendszer nem felejt.",
    items: [
      "Telefon, SMS, WhatsApp, Messenger, Instagram, e-mail, webchat",
      "Egységes memória minden csatornán",
      "Proaktív megkeresés és régi ügyfelek visszahozása",
      "Automatikus pipeline-kezelés és értesítések",
      "Valós idejű CRM-szinkron",
    ],
    Art: ArtComputer,
  },
  {
    eyebrow: "Valódi érték",
    color: "#2C6FB5",
    title: "Egy dolga van: pénzt hozni.",
    lead: "Nem képgenerálás, nem csevegőablak a weboldal sarkában. Ez a rendszer arra van, hogy több megkeresésből legyen megrendelés.",
    items: [
      "Valódi üzleti gondot old meg, nem technológiát mutogat",
      "Több ügyfél, több foglalás, több bevétel",
      "Megtérülés az Ön számaiból számolva, nem ígéretből",
      "Mérhető növekedés, nem bemutató",
    ],
    Art: ArtRocket,
  },
  {
    eyebrow: "Irányítópult",
    color: "#B8862B",
    title: "Minden adat egy helyen.",
    lead: "Egy felületen látja az összes beszélgetést, ügyfelet és eredményt, valós időben. Nem kell elhinnie semmit, amit nem lát.",
    items: [
      "Minden beszélgetés visszanézhető és elemezhető",
      "Valós idejű mutatók és statisztikák",
      "Több AI-ügynök egy felületen",
      "Mobilról is",
    ],
    Art: ArtSatellite,
  },
];

export default function DirectFeatures() {
  return (
    <section className="dr-feats">
      <div className="dr-wrap">
        {ROWS.map((r, i) => (
          <div className={`dr-feat${i % 2 ? " dr-feat--flip" : ""}`} key={r.eyebrow}>
            <div className="dr-feat__text reveal">
              <span className="dr-feat__eyebrow" style={{ color: r.color }}>{r.eyebrow}</span>
              <h3 className="dr-feat__t">{r.title}</h3>
              <p className="dr-feat__p">{r.lead}</p>
              <ul className="dr-feat__list">
                {r.items.map((t) => (
                  <li key={t}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ stroke: r.color }}><path d="M5 13l4 4L19 7" /></svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dr-feat__art reveal" data-delay="1">
              <r.Art />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
