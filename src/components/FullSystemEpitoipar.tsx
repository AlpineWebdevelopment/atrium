/* ATRIUM-EDIT KV5/KV6 — full system kept; copy adapted for construction.
   Phase 01: Megkeresés — unchanged structure, construction step labels.
   Phase 02: renamed Felmérés és ajánlat (replaces appointment Foglalás).
   Phase 03: Megtartás — Elmaradt felmérés visszaszerzése replaces Elmaradtak visszahívása.
   CAPS: 6 KV5 items replace the 8-item root grid.
   CHANNELS: trimmed to 4 (Telefon, SMS, WhatsApp, E-mail) per Section C.
   sys__howline: KV6 text. jrn__result: construction outcome.
   SVG gradients: no defs IDs used in Viz components — no collision risk. */

const ICONS: Record<string, React.ReactNode> = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  web: <g><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></g>,
  qualify: <g><rect x="5" y="4" width="14" height="18" rx="2" /><path d="M9 4V2.5h6V4" /><path d="M8.5 13l2 2 4-4.5" /></g>,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  confirm: <g><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></g>,
  bell: <g><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></g>,
  callback: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />,
  refresh: <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  user: <g><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></g>,
  result: <g><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></g>,
  mic: <g><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0M12 19v3" /></g>,
  db: <g><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></g>,
  bars: <path d="M12 20V10M18 20V4M6 20v-6" />,
  handoff: <g><path d="M14 3h7v7" /><path d="M21 3l-8 8" /><circle cx="7" cy="9" r="3" /><path d="M2 21v-1a5 5 0 0 1 5-5h1a5 5 0 0 1 4 2" /></g>,
  send: <g><path d="M22 2 11 13" /><path d="M22 2l-7 20-4-9-9-4z" /></g>,
  users: <g><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20v-1a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1" /><circle cx="17.5" cy="9" r="2.4" /><path d="M21.5 20v-.5a4 4 0 0 0-3-3.6" /></g>,
  doc: <g><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h6M8 17h4" /></g>,
};

/* KV5 — 6 construction-specific capabilities */
const CAPS = [
  { ic: "mic", c: "#9662BC", t: "Hívásfogadás", d: "Minden hívást felvesz: munka közben, este, hétvégén. Magyarul, természetes beszéddel." },
  { ic: "callback", c: "#628FBC", t: "Érdeklődő-utánkövetés", d: "A hirdetésből érkező érdeklődőt percek alatt visszahívja, nem napok múlva." },
  { ic: "send", c: "#AD83CC", t: "Árajánlat-utánkövetés", d: "A kiküldött, de még el nem fogadott ajánlatokra rákérdez: „két hete küldtünk egy árajánlatot — van kérdése?"" },
  { ic: "calendar", c: "#62BCAC", t: "Helyszíni felmérés", d: "Időpontot ad a felmérésre, egyenesen a naptárába." },
  { ic: "refresh", c: "#BCA162", t: "Elmaradt felmérés visszaszerzése", d: "A lemondott vagy elmaradt helyszíni látogatást újraegyezteti." },
  { ic: "bars", c: "#6DBC61", t: "Riport", d: "Havonta megmutatja, honnan jött a munka, mi maradt ki, és mit hozott vissza a rendszer." },
];

function Ico({ k, x, y, s = 18 }: { k: string; x: number; y: number; s?: number }) {
  return (
    <svg x={x - s / 2} y={y - s / 2} width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="var(--c)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[k]}
    </svg>
  );
}

function VizMegkereses() {
  const ch = [{ y: 50, k: "phone" }, { y: 105, k: "web" }, { y: 160, k: "chat" }];
  return (
    <svg className="tsr__svg" viewBox="0 0 300 210" role="img" aria-label="Megkeresés — minden csatorna egy minősített érdeklődővé">
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
      <Ico k="qualify" x={226} y={105} s={28} />
      <text className="tsr__viz-lbl" x="226" y="160" textAnchor="middle">minősítve</text>
    </svg>
  );
}

function VizFelmeres() {
  return (
    <svg className="tsr__svg" viewBox="0 0 300 210" role="img" aria-label="Felmérés és ajánlat — időpont a naptárban, ajánlat utánkövetve">
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

function VizMegtartas() {
  const loop = "M150 35 A70 70 0 1 1 149.9 35 Z";
  const nodes = [{ x: 150, y: 35, k: "callback" }, { x: 210, y: 140, k: "star" }, { x: 90, y: 140, k: "refresh" }];
  return (
    <svg className="tsr__svg" viewBox="0 0 300 210" role="img" aria-label="Megtartás — a megbízó újra és újra visszatér">
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

const PHASES = [
  {
    n: "01", name: "Megkeresés", cap: "az első hívástól a minősített érdeklődőig", c: "#9662BC", Viz: VizMegkereses,
    steps: [
      { ic: "phone", t: "Hívásfogadás", s: "minden hívást felvesz, munka közben, este, hétvégén, magyarul" },
      { ic: "callback", t: "Érdeklődő-utánkövetés", s: "a webes és hirdetési érdeklődőt percek alatt visszahívja" },
      { ic: "qualify", t: "Kvalifikáció", s: "felteszi a fontos kérdéseket, és minősíti az érdeklődőt" },
      { ic: "handoff", t: "Élő átadás", s: "ha emberi segítség kell, a megfelelő kollégához kapcsol" },
    ],
  },
  {
    n: "02", name: "Felmérés és ajánlat", cap: "időpont, megerősítve és utánkövetve", c: "#628FBC", Viz: VizFelmeres,
    steps: [
      { ic: "calendar", t: "Helyszíni felmérés", s: "időpontot ad a felmérésre, egyenesen a naptárba" },
      { ic: "confirm", t: "Visszaigazolás", s: "azonnal visszaigazolja a felmérési időpontot" },
      { ic: "bell", t: "Emlékeztető", s: "emlékezteti a megbízót a felmérés előtt" },
      { ic: "send", t: "Árajánlat-utánkövetés", s: "a kiküldött, de még el nem fogadott ajánlatokra visszakérdez" },
    ],
  },
  {
    n: "03", name: "Megtartás", cap: "vissza, és újra", c: "#6DBC61", Viz: VizMegtartas,
    steps: [
      { ic: "callback", t: "Elmaradt felmérés visszaszerzése", s: "a lemondott vagy elmaradt helyszíni látogatást újraegyezteti" },
      { ic: "star", t: "Értékelés", s: "elégedett megbízótól értékelést kér" },
      { ic: "refresh", t: "Reaktiválás", s: "régi megbízókat hónapokkal később finoman visszahívja" },
      { ic: "users", t: "Ajánláskérés", s: "az elégedett megbízótól ajánlást is kér — új munka a meglévőből" },
    ],
  },
];

/* KV11 — trimmed to 4 phone-led channels */
const CHANNELS: { n: string; c: string; ic: React.ReactNode }[] = [
  { n: "Telefon", c: "#6DBC61", ic: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /> },
  { n: "SMS", c: "#628FBC", ic: <g><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20.5l1.4-5.1A8.5 8.5 0 1 1 21 11.5z" /><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" /></g> },
  { n: "WhatsApp", c: "#6DBC61", ic: <g><path d="M3.2 20.8l1.4-3.7A8 8 0 1 1 7.7 19.8z" /><path d="M9 9c.2 2.4 3.4 5.6 5.8 5.8.5 0 1.2-.5 1.4-1" /></g> },
  { n: "E-mail", c: "#C46C64", ic: <g><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></g> },
];

export default function FullSystemEpitoipar() {
  return (
    <section className="sys" id="rendszer-teljes">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A teljes rendszer</span>
          <h2 className="dash__h">Nem hét eszköz — egyetlen rendszer.</h2>
          <p className="dash__p">
            Az Atrium egy magyar nyelvű, AI-alapú értékesítési rendszer: minden
            hívást felvesz, minden érdeklődőt visszahív, és minden kiküldött
            ajánlatot utánkövet — a háttérben, az Ön meglévő naptárához és
            eszközeihez kötve.
          </p>
          {/* ATRIUM-EDIT KV6 — construction how-it-works line */}
          <p className="sys__howline">
            AI-ügynökök kezelik a hang- és szöveges kommunikációt, természetes
            magyar nyelven — a meglévő eszközeihez kötve. A csapatának semmit
            nem kell lecserélnie.
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
                      <li className="tsr__step" key={j}>
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
            Mérés végig — havonta megmutatja, mit hozott a rendszer, és hol szivárog még a bevétel.
          </div>

          <div className="jrn__result reveal">
            <span className="jrn__result-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{ICONS.result}</svg>
            </span>
            <div className="jrn__result-txt">
              <b className="jrn__result-t">Több megrendelés, elszalasztott munka nélkül</b>
            </div>
          </div>

          <div className="sysframe__integ">
            Csatlakozik a meglévő eszközeihez: <b>Google Calendar</b> · <b>Microsoft 365</b> · <b>iCal</b> · a meglévő CRM-jéhez
          </div>
        </div>

        {/* KV5 — 6 construction capability cards */}
        <div className="caps reveal" data-delay="2">
          <div className="caps__head">
            <h3 className="caps__h">Mit tud a rendszer?</h3>
          </div>
          <div className="caps__grid">
            {CAPS.map((c, i) => (
              <div className="caps__item" key={i}>
                <span className="caps__ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICONS[c.ic]}</svg>
                </span>
                <b className="caps__t">{c.t}</b>
                <span className="caps__d">{c.d}</span>
              </div>
            ))}
          </div>
        </div>

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
