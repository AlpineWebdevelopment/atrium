/* Four alternating rows under "Amit mi AI-nak hívunk." — the layout of a
   reference the user shared (text on one side, a line-art illustration on a
   dotted field on the other, sides swapping; coloured mono eyebrow, title,
   one line, a checklist in the row's colour), with our own topics and
   examples: sales, retention, internal processes, measurement. No
   published prices and no unverifiable figures. */

type Row = {
  eyebrow: string;
  color: string;
  title: string;
  lead: string;
  items: string[];
  Art: () => React.JSX.Element;
};

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

function ArtLoop() {
  return (
    <svg viewBox="0 0 240 240" aria-hidden="true">
      <path d="M120 176 L196 206 L120 236 L44 206 Z" />
      <path d="M82 191 L158 221 M158 191 L82 221" />
      <path d="M70 110 A50 50 0 0 1 164 88" />
      <path d="M170 130 A50 50 0 0 1 76 152" />
      <path d="M152 76 L166 88 L150 98 M88 164 L74 152 L90 142" />
      <circle cx="120" cy="120" r="20" />
      <path d="M112 120 L118 126 L130 113" />
    </svg>
  );
}

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

function ArtChart() {
  return (
    <svg viewBox="0 0 240 240" aria-hidden="true">
      <path d="M40 60 L200 60 L200 190 L40 190 Z" />
      <path d="M40 80 L200 80" />
      <circle cx="54" cy="70" r="3" /><circle cx="66" cy="70" r="3" /><circle cx="78" cy="70" r="3" />
      <path d="M62 170 L62 140 M92 170 L92 124 M122 170 L122 132 M152 170 L152 108 M182 170 L182 96" />
      <path d="M58 132 L92 112 L122 120 L152 96 L184 84" />
      <path d="M170 84 L184 84 L180 98" />
    </svg>
  );
}

const ROWS: Row[] = [
  {
    eyebrow: "Értékesítés",
    color: "#4F9E43",
    title: "Egyetlen megkeresés se vész el.",
    lead: "Aki ma megkeresi, és nem kap időben választ, holnap már a versenytársánál van. A rendszer ezt a rést zárja be.",
    items: [
      "Minden hívást felvesz, éjjel és hétvégén is",
      "Percek alatt válaszol a webes és közösségi érdeklődőkre",
      "Utánamegy a kiküldött árajánlatnak",
      "Időpontot foglal, egyenesen a naptárába",
    ],
    Art: ArtComputer,
  },
  {
    eyebrow: "Ügyfélmegtartás",
    color: "#9662BC",
    title: "A régi ügyfél is pénz.",
    lead: "A legolcsóbb megrendelés attól jön, aki már vásárolt Öntől. Csak valakinek szólnia kell neki, időben.",
    items: [
      "Szól, amikor esedékes a következő alkalom",
      "Visszahívja, aki hónapok óta nem jelentkezett",
      "Rákérdez, minden rendben volt-e a munkával",
      "Az elégedett ügyféltől értékelést kér",
    ],
    Art: ArtLoop,
  },
  {
    eyebrow: "Belső folyamatok",
    color: "#2C6FB5",
    title: "Ami ma kézzel megy, holnap magától.",
    lead: "Ha valami a cégében rendszeresen órákat visz el, és AI-jal megoldható, megépítjük. Ha nem, megmondjuk.",
    items: [
      "Árajánlat-piszkozat a felmérés jegyzeteiből",
      "Számlák, szerződések adatainak kiolvasása",
      "Adatátvitel a meglévő rendszerei között",
      "Belső tudásbázis, amitől bármit meg lehet kérdezni",
    ],
    Art: ArtBox,
  },
  {
    eyebrow: "Mérés",
    color: "#B8862B",
    title: "Minden héten tudja, mit hozott.",
    lead: "Nem kell elhinnie, hogy működik. Látja: hány megkeresés jött, mennyiből lett megrendelés, és hol akad el még.",
    items: [
      "Heti riport, forintban",
      "Minden beszélgetés visszanézhető",
      "Látszik, hol morzsolódnak le az érdeklődők",
      "A számok alapján hétről hétre finomítjuk",
    ],
    Art: ArtChart,
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
