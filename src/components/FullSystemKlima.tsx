/* ATRIUM-EDIT KV5/KV6 — full system rebuilt for cégvezető klíma buyer.
   Phase 01: Fogadás és kvalifikálás (was Megkeresés)
   Phase 02: Irányítás és foglalás (was Felmérés és ajánlat)
   Phase 03: Lezárás és rálátás — Riport és rálátás step gets .tsr__step--lead visual weight
   CHANNELS: trimmed to 3 — Telefon, Webűrlap, E-mail (KV5 instruction)
   KV6 sys__howline: CRM mentioned; AI disclosure added.
   CAPS: 6 klíma capabilities, unchanged structure from previous build. */

const ICONS: Record<string, React.ReactNode> = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
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
  bars: <path d="M12 20V10M18 20V4M6 20v-6" />,
  handoff: <g><path d="M14 3h7v7" /><path d="M21 3l-8 8" /><circle cx="7" cy="9" r="3" /><path d="M2 21v-1a5 5 0 0 1 5-5h1a5 5 0 0 1 4 2" /></g>,
  send: <g><path d="M22 2 11 13" /><path d="M22 2l-7 20-4-9-9-4z" /></g>,
  users: <g><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20v-1a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1" /><circle cx="17.5" cy="9" r="2.4" /><path d="M21.5 20v-.5a4 4 0 0 0-3-3.6" /></g>,
};

/* KV5 — 6 klíma capabilities */

function Ico({ k, x, y, s = 18 }: { k: string; x: number; y: number; s?: number }) {
  return (
    <svg x={x - s / 2} y={y - s / 2} width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="var(--c)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[k]}
    </svg>
  );
}

function VizMegkereses() {
  const ch = [{ y: 50, k: "phone" }, { y: 105, k: "chat" }, { y: 160, k: "qualify" }];
  return (
    <svg className="tsr__svg" viewBox="0 0 300 210" role="img" aria-label="Fogadás és kvalifikálás — minden csatorna egy minősített érdeklődővé">
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
      <Ico k="users" x={226} y={105} s={28} />
      <text className="tsr__viz-lbl" x="226" y="160" textAnchor="middle">kvalifikálva</text>
    </svg>
  );
}

function VizIranyitas() {
  return (
    <svg className="tsr__svg" viewBox="0 0 300 210" role="img" aria-label="Irányítás és foglalás — a megfelelő emberhez, a naptárba">
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
      <Ico k="handoff" x={222} y={48} s={17} />
      <circle cx="222" cy="166" r="22" fill="var(--c)" />
      <path d="M213 166l6 6 10-12" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VizRalatas() {
  const loop = "M150 35 A70 70 0 1 1 149.9 35 Z";
  const nodes = [{ x: 150, y: 35, k: "send" }, { x: 210, y: 140, k: "confirm" }, { x: 90, y: 140, k: "bars" }];
  return (
    <svg className="tsr__svg" viewBox="0 0 300 210" role="img" aria-label="Lezárás és rálátás — ajánlat utánkövetve, eredmény látható">
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

/* KV5 — three phases, klíma-specific */
const PHASES: {
  n: string; name: string; cap: string; c: string; Viz: () => React.ReactElement;
  steps: { ic: string; t: string; s: string; lead?: boolean }[];
}[] = [
  {
    n: "01", name: "Fogadás és kvalifikálás", cap: "minden megkereséstől a minősített érdeklődőig", c: "#9662BC", Viz: VizMegkereses,
    steps: [
      { ic: "phone",   t: "Azonnali fogadás",   s: "minden megkeresést fogad: hívás, webűrlap, e-mail — a hőségcsúcson és munkaidőn túl is, professzionális magyar nyelven" },
      { ic: "qualify", t: "Kvalifikálás",        s: "klíma típusa, helyiség mérete, beszerelés vagy szerviz, sürgősség, helyszín, komolyság — és aszerint szűr, milyen munkát keres a cég" },
      { ic: "users",   t: "Szűrés",             s: "a nem komoly, rossz illeszkedésű megkeresés nem ér el a szerelőkig" },
      { ic: "handoff", t: "Élő átadás",          s: "a szerelő vagy diszpécser csak valós, előszűrt lehetőséget kap" },
    ],
  },
  {
    n: "02", name: "Irányítás és foglalás", cap: "a megfelelő emberhez, időponttal megerősítve", c: "#628FBC", Viz: VizIranyitas,
    steps: [
      { ic: "handoff",  t: "Irányítás",            s: "a kvalifikált megkeresést a megfelelő emberhez küldi, a részletekkel együtt; a sürgős esetet soron kívül a diszpécserhez irányítja" },
      { ic: "calendar", t: "Kiszállás foglalása",  s: "a felmérést vagy a kiszállást a naptárba teszi, és visszaigazolja az ügyfélnek" },
      { ic: "confirm",  t: "Visszaigazolás",        s: "azonnal visszaigazolja a foglalást az ügyfélnek" },
      { ic: "bell",     t: "Emlékeztető",           s: "emlékezteti az ügyfelet a kiszállás előtt" },
    ],
  },
  {
    n: "03", name: "Lezárás és rálátás", cap: "utánkövetéstől a teljes képig", c: "#6DBC61", Viz: VizRalatas,
    steps: [
      { ic: "send",     t: "Ajánlat-utánkövetés",                s: "minden kiküldött beszerelési ajánlatot szisztematikusan utánkövet, amíg az ügyfél nem válaszol vagy el nem utasít — semmi nem marad el azért, mert a csapat épp kint dolgozott" },
      { ic: "refresh",  t: "Esedékes karbantartás",              s: "jelzi az esedékes karbantartásokat és újraegyezteti őket, mielőtt a visszatérő ügyfélkör szétesik" },
      { ic: "callback", t: "Túlcsordulás és csúcsterhelés",      s: "amit a csúcson elszalasztanának, az nem vész el — a hőségben, munkaidőn túl és hétvégén is" },
      { ic: "bars",     t: "Riport és rálátás",                  s: "Ön végre látja: hány megkeresés jött be, milyen gyorsan válaszoltak, hány ajánlat van függőben, mi foglalt le, és mit hozott vissza az utánkövetés", lead: true },
    ],
  },
];

/* KV5 — 3 channels only */
const CHANNELS: { n: string; c: string; ic: React.ReactNode }[] = [
  { n: "Telefon", c: "#6DBC61", ic: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /> },
  { n: "Webűrlap", c: "#9662BC", ic: <g><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" /></g> },
  { n: "E-mail", c: "#C46C64", ic: <g><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></g> },
];

export default function FullSystemKlima() {
  return (
    <section className="sys" id="rendszer-teljes">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A teljes rendszer</span>
          <h2 className="dash__h">Nem hét eszköz — egyetlen rendszer.</h2>
          <p className="dash__p">
            Az Atrium egy magyar nyelvű, AI-alapú értékesítési rendszer: minden
            megkeresést azonnal fogad és kvalifikál, a megfelelő emberhez irányít,
            és minden kiküldött ajánlatot utánkövet — a háttérben, az Ön meglévő
            naptárához, CRM-jéhez és eszközeihez kötve.
          </p>
          {/* ATRIUM-EDIT KV6 — CRM named; AI disclosure added for the more sceptical cégvezető buyer */}
          <p className="sys__howline">
            AI-ügynökök kezelik a hang- és szöveges kommunikációt, természetes
            magyar nyelven — a meglévő naptárához, CRM-jéhez és eszközeihez kötve.
            A csapatának nem kell rendszert váltania. Ha kérdezi, hogyan működik:
            igen, ez egy AI-alapú rendszer — pontosan megmutatjuk, mit csinál, és
            hol adja vissza az embereinek a döntést.
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
                Minden megkeresés egy helyen · egy sem vész el
              </span>
            </div>
            {/* KV5 — 3 channels only: Telefon, Webűrlap, E-mail */}
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
                      /* ATRIUM-EDIT KV5 — lead step gets extra visual weight via .tsr__step--lead */
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
            Mérés végig — havonta megmutatja, mit hozott a rendszer, és hol szivárog még a bevétel.
          </div>

          <div className="jrn__result reveal">
            <span className="jrn__result-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{ICONS.result}</svg>
            </span>
            <div className="jrn__result-txt">
              <b className="jrn__result-t">Több beszerelés — és Ön először látja, hogyan</b>
            </div>
          </div>

          <div className="sysframe__integ">
            Csatlakozik a meglévő eszközeihez: <b>Google Calendar</b> · <b>Microsoft 365</b> · <b>iCal</b> · a meglévő CRM-jéhez
          </div>
        </div>

        {/* KV12 — trust strip */}
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
