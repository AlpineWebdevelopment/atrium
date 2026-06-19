/* ATRIUM-EDIT AV6/AV7 — vet full system, 3 phases.
   Phase 01: Fogadás és sürgősségi rangsorolás
   Phase 02: Foglalás és emlékeztetés
   Phase 03: A bázis megtartása — Visszahívás esedékességkor + Riport get .tsr__step--lead
   CHANNELS: Telefon · SMS · E-mail (3 only — vet is phone-led; AV6)
   AV5 framing: "nem szűrünk" carried in Phase 01 step copy (not separate element)
   No qualify-out / filtering language anywhere. */

const ICONS: Record<string, React.ReactNode> = {
  phone:    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  triage:   <g><path d="M9 12h6M12 9v6" /><circle cx="12" cy="12" r="9" /></g>,
  chat:     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  bell:     <g><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></g>,
  callback: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  refresh:  <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  star:     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />,
  bars:     <path d="M12 20V10M18 20V4M6 20v-6" />,
  confirm:  <g><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></g>,
  result:   <g><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></g>,
  user:     <g><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></g>,
  mic:      <g><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0M12 19v3" /></g>,
};

function Ico({ k, x, y, s = 18 }: { k: string; x: number; y: number; s?: number }) {
  return (
    <svg x={x - s / 2} y={y - s / 2} width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="var(--c)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[k]}
    </svg>
  );
}

/* Phase 01: channels converge, sorted by urgency — NOT filtered out */
function VizFogadas() {
  const ch = [{ y: 50, k: "phone" }, { y: 105, k: "triage" }, { y: 160, k: "phone" }];
  return (
    <svg className="tsr__svg" viewBox="0 0 300 210" role="img" aria-label="Fogadás és sürgősségi rangsorolás — minden hívás a helyére kerül">
      {ch.map((c, i) => {
        const path = `M74 ${c.y} C 130 ${c.y}, 150 105, 196 105`;
        return (
          <g key={i}>
            <path d={path} fill="none" stroke="var(--c)" strokeWidth="1.5" strokeOpacity="0.4" />
            <circle r="2.6" fill="var(--c)"><animateMotion dur="2.6s" begin={`${i * 0.5}s`} repeatCount="indefinite" path={path} /></circle>
            <circle cx="52" cy={c.y} r="17" fill="var(--bone)" stroke="var(--c)" strokeWidth="1.7" />
            <Ico k={c.k} x={52} y={c.y} />
          </g>
        );
      })}
      <circle cx="226" cy="105" r="34" fill="var(--c)" fillOpacity="0.1" stroke="var(--c)" strokeWidth="2" />
      <circle cx="226" cy="105" r="34" fill="none" stroke="var(--c)" strokeWidth="2">
        <animate attributeName="r" values="34;46" dur="2.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.6s" repeatCount="indefinite" />
      </circle>
      <Ico k="triage" x={226} y={105} s={28} />
      <text className="tsr__viz-lbl" x="226" y="160" textAnchor="middle">rangsorolva</text>
    </svg>
  );
}

/* Phase 02: booking calendar with reminder */
function VizFoglalas() {
  return (
    <svg className="tsr__svg" viewBox="0 0 300 210" role="img" aria-label="Foglalás és emlékeztetés — időpont a naptárban, megerősítve">
      <rect x="52" y="34" width="174" height="146" rx="16" fill="var(--bone)" stroke="var(--c)" strokeWidth="1.8" />
      <path d="M52 60h174" stroke="var(--c)" strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="68" cy="47" r="3" fill="var(--c)" /><circle cx="80" cy="47" r="3" fill="var(--c)" fillOpacity="0.5" /><circle cx="92" cy="47" r="3" fill="var(--c)" fillOpacity="0.5" />
      {Array.from({ length: 12 }).map((_, i) => {
        const col = i % 4, row = Math.floor(i / 4);
        const x = 68 + col * 38, y = 76 + row * 32;
        const booked = i === 5;
        return (
          <g key={i}>
            <rect x={x} y={y} width="28" height="22" rx="5" fill="var(--c)" fillOpacity={booked ? 1 : 0.1} />
            {booked && <path d={`M${x + 9} ${y + 11} l3 3 6-7`} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
          </g>
        );
      })}
      <circle cx="222" cy="48" r="16" fill="var(--bone)" stroke="var(--c)" strokeWidth="1.6" />
      <circle cx="222" cy="48" r="16" fill="none" stroke="var(--c)" strokeWidth="1.6"><animate attributeName="r" values="16;24" dur="2.4s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" /></circle>
      <Ico k="bell" x={222} y={48} s={17} />
      <circle cx="222" cy="166" r="22" fill="var(--c)" />
      <path d="M213 166l6 6 10-12" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Phase 03: recall loop — the base coming back */
function VizBazis() {
  const loop = "M150 35 A70 70 0 1 1 149.9 35 Z";
  const nodes = [{ x: 150, y: 35, k: "refresh" }, { x: 210, y: 140, k: "star" }, { x: 90, y: 140, k: "bars" }];
  return (
    <svg className="tsr__svg" viewBox="0 0 300 210" role="img" aria-label="A bázis megtartása — visszahívva esedékességkor, láthatóan">
      <circle cx="150" cy="105" r="70" fill="none" stroke="var(--c)" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="3 7" />
      <circle r="3.2" fill="var(--c)"><animateMotion dur="7s" repeatCount="indefinite" path={loop} /></circle>
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="19" fill="var(--bone)" stroke="var(--c)" strokeWidth="1.7" />
          <Ico k={n.k} x={n.x} y={n.y} />
        </g>
      ))}
      <circle cx="150" cy="105" r="24" fill="var(--c)" fillOpacity="0.1" stroke="var(--c)" strokeWidth="2" />
      <Ico k="user" x={150} y={105} s={22} />
    </svg>
  );
}

/* AV6 — 3 phases, vet-native steps */
const PHASES: {
  n: string; name: string; cap: string; c: string; Viz: () => React.ReactElement;
  steps: { ic: string; t: string; s: string; lead?: boolean }[];
}[] = [
  {
    n: "01", name: "Fogadás és sürgősségi rangsorolás", cap: "minden hívástól a helyére kerülésig", c: "#9662BC", Viz: VizFogadas,
    steps: [
      { ic: "phone",   t: "Hívásfogadás",            s: "minden hívást fogad: zárás után, hétvégén, amíg Ön egy állattal van — nyugodt, magyar beszéd, mert a hívó gyakran megijedt" },
      { ic: "triage",  t: "Sürgősségi rangsorolás",  s: "vészhelyzet vagy rutin? A sürgőset a rendelő protokollja szerint eszkalálja, a rutint lefoglalja — senkit nem szűr ki, mindenkit a helyére irányít" },
      { ic: "chat",    t: "Kérdéskezelés",            s: "nyitvatartás, egzotikus állatok, kell-e időpont, nagyjából mennyi egy oltás — a pult nem fullad bele" },
    ],
  },
  {
    n: "02", name: "Foglalás és emlékeztetés", cap: "időpont, megerősítve, megtartva", c: "#628FBC", Viz: VizFoglalas,
    steps: [
      { ic: "calendar", t: "Foglalás",                      s: "a rendelő meglévő naptárába, az ügyfélnek visszaigazolva" },
      { ic: "bell",     t: "Emlékeztető",                   s: "az időpont előtt, kevesebb elmaradt vizit" },
      { ic: "callback", t: "Elmaradt időpont visszahívása", s: "a kihagyott vizitre újrafoglalási megkeresés" },
    ],
  },
  {
    n: "03", name: "A bázis megtartása", cap: "visszahívva, mielőtt elsodródna", c: "#2D9B7F", Viz: VizBazis,
    steps: [
      /* ATRIUM-EDIT AV6 — Visszahívás esedékességkor gets extra visual weight: .tsr__step--lead */
      { ic: "refresh", t: "Visszahívás esedékességkor", s: "a rendszer figyeli a bázist, és szól, ha egy kedvenc oltása vagy szűrése esedékes — ez hozza vissza az elsodródott gazdikat: saját, meglévő bevétel, nem új ügyfélszerzés", lead: true },
      { ic: "star",    t: "Értékeléskérés",             s: "vizit után" },
      /* ATRIUM-EDIT AV6 — Riport gets extra visual weight: .tsr__step--lead */
      { ic: "bars",    t: "Riport",                     s: "kezelt hívások, elkapott zárás utáni hívások, kiküldött és lefoglalt visszahívások, és a bázisból visszaszerzett bevétel", lead: true },
    ],
  },
];

/* AV6 — 3 channels: Telefon · SMS · E-mail */
const CHANNELS: { n: string; c: string; ic: React.ReactNode }[] = [
  { n: "Telefon", c: "#6DBC61", ic: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /> },
  { n: "SMS", c: "#628FBC", ic: <g><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20.5l1.4-5.1A8.5 8.5 0 1 1 21 11.5z" /><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" /></g> },
  { n: "E-mail", c: "#C46C64", ic: <g><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></g> },
];

/* AV6 — 6 vet-native capabilities */

export default function FullSystemAllatorvos() {
  return (
    <section className="sys" id="rendszer-teljes">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A teljes rendszer</span>
          <h2 className="dash__h">Nem hét eszköz — egyetlen rendszer.</h2>
          <p className="dash__p">
            Az Atrium egy magyar nyelvű, AI-alapú értékesítési rendszer
            állatorvosi rendelőknek: minden hívást fogad és rangsorol, lefoglalja
            a rutin időpontokat, és visszahívja a pácienseket, mielőtt
            lemaradnának az oltásról — a háttérben, a meglévő naptárához kötve.
          </p>
          {/* ATRIUM-EDIT AV7 — AI named honestly; CRM mention; disclosure sentence */}
          <p className="sys__howline">
            AI-ügynökök kezelik a hang- és szöveges kommunikációt, természetes
            magyar nyelven — a rendelő meglévő naptárához kötve. A csapatának nem
            kell rendszert váltania. Ha kérdezi, hogyan működik: igen, ez egy
            AI-alapú rendszer — pontosan megmutatjuk, mit csinál.
          </p>
        </div>

        <div className="sysframe reveal" data-delay="1">
          <div className="sysframe__bar">
            <div className="sysframe__bar-top">
              <span className="sysframe__label">
                <span className="sysframe__dot" aria-hidden="true" />
                Az Atrium rendszer · egységes memória
              </span>
              <span className="sysframe__live">
                <span className="sysframe__live-dot" aria-hidden="true" />
                Minden hívás egy helyen · egy sem vész el
              </span>
            </div>
            {/* AV6 — 3 channels only */}
            <div className="sysframe__channels">
              {CHANNELS.map((c) => (
                <span className="sysframe__chan" key={c.n}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ color: c.c }}>{c.ic}</svg>
                  {c.n}
                </span>
              ))}
            </div>
          </div>

          <div className="tsr">
            {PHASES.map((p, i) => (
              <div className={"tsr__row reveal" + (i % 2 ? " tsr__row--flip" : "")} key={i} style={{ ["--c" as string]: p.c } as React.CSSProperties}>
                <div className="tsr__viz">
                  <p.Viz />
                </div>
                <div className="tsr__body">
                  <div className="tsr__head">
                    <span className="tsr__num">{p.n}</span>
                    <span className="tsr__headtxt">
                      <b className="tsr__name">{p.name}</b>
                      <span className="tsr__cap">{p.cap}</span>
                    </span>
                  </div>
                  <ul className="tsr__steps">
                    {p.steps.map((st, j) => (
                      /* ATRIUM-EDIT AV6 — lead steps (Visszahívás + Riport) get .tsr__step--lead visual weight */
                      <li className={"tsr__step" + (st.lead ? " tsr__step--lead" : "")} key={j}>
                        <span className="tsr__step-ico">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{ICONS[st.ic]}</svg>
                        </span>
                        <span className="tsr__step-txt">
                          <b>{st.t}</b>
                          <span>{st.s}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="sysframe__integ">
            Mérés végig — havonta megmutatja, hány páciense csúszott le a rendről, és mennyit hozott vissza a rendszer.
          </div>

          <div className="jrn__result reveal">
            <span className="jrn__result-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{ICONS.result}</svg>
            </span>
            <div className="jrn__result-txt">
              <b className="jrn__result-t">Teli naptár — és a bázis visszajön</b>
            </div>
          </div>

          <div className="sysframe__integ">
            Csatlakozik a meglévő eszközeihez: <b>Google Calendar</b> · <b>Microsoft 365</b> · <b>iCal</b> · a meglévő CRM-jéhez
          </div>
        </div>

        {/* AV13 — trust strip */}
        <div className="sys__badges reveal" data-delay="3">
          <span className="sys__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></svg>
            Magyar nyelvű
          </span>
          <span className="sys__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="8" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 8h.01M7 17h.01" /></svg>
            EU hosting
          </span>
          <span className="sys__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5z" /><path d="M9 12l2 2 4-4" /></svg>
            GDPR-konform
          </span>
        </div>
      </div>
    </section>
  );
}
