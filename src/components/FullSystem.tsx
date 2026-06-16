/* The full system as a lead's journey — Meridian-style alternating rows:
   each phase is a full-width row with a large branded graphic on one side and
   its steps on the other, sides alternating. Atrium palette + fonts.
   Megkeresés → Foglalás → Megtartás → result. */

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
  reschedule: <g><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /><path d="M15 13.5l2.5 2.5L15 18.5" /><path d="M17.5 16H12a2 2 0 0 1-2-2" /></g>,
  users: <g><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20v-1a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1" /><circle cx="17.5" cy="9" r="2.4" /><path d="M21.5 20v-.5a4 4 0 0 0-3-3.6" /></g>,
};

/* steps recommended as additions — flagged for review */
const NEW_STEPS = new Set(["Élő átadás", "Átütemezés", "Ajánláskérés"]);

/* recommended system services — labelled for review */
const CAPS = [
  { ic: "mic", t: "Hang-AI", d: "Természetes magyar beszéd — fogadja és indítja a hívásokat." },
  { ic: "chat", t: "Szöveges AI", d: "SMS, WhatsApp, Messenger, Instagram, e-mail és webchat — egy helyen." },
  { ic: "db", t: "Egységes memória", d: "Minden csatornán emlékszik a korábbi beszélgetésre." },
  { ic: "qualify", t: "Kvalifikáció", d: "Felteszi a fontos kérdéseket, és pontozza az érdeklődőt." },
  { ic: "refresh", t: "Naptár- és CRM-szinkron", d: "A meglévő eszközeihez kötve, valós időben." },
  { ic: "bars", t: "Riport", d: "Havi kimutatás: mi működik, és hol szivárog a bevétel." },
];

function Ico({ k, x, y, s = 18 }: { k: string; x: number; y: number; s?: number }) {
  return (
    <svg x={x - s / 2} y={y - s / 2} width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="var(--c)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[k]}
    </svg>
  );
}

/* ---- phase 1: channels converge into a qualified lead ---- */
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

/* ---- phase 2: a booked, confirmed, reminded appointment ---- */
function VizFoglalas() {
  return (
    <svg className="tsr__svg" viewBox="0 0 300 210" role="img" aria-label="Foglalás — időpont a naptárban, megerősítve">
      <rect x="52" y="34" width="174" height="146" rx="16" fill="var(--bone)" stroke="var(--c)" strokeWidth="1.8" />
      <path d="M52 60h174" stroke="var(--c)" strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="68" cy="47" r="3" fill="var(--c)" /><circle cx="80" cy="47" r="3" fill="var(--c)" fillOpacity="0.5" /><circle cx="92" cy="47" r="3" fill="var(--c)" fillOpacity="0.5" />
      {Array.from({ length: 12 }).map((_, i) => {
        const col = i % 4, row = Math.floor(i / 4);
        const x = 68 + col * 38, y = 76 + row * 32;
        const booked = i === 5;
        return (
          <g key={i}>
            <rect x={x} y={y} width="28" height="22" rx="5" fill={booked ? "var(--c)" : "var(--c)"} fillOpacity={booked ? 1 : 0.1} />
            {booked && <path d={`M${x + 9} ${y + 11} l3 3 6-7`} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
          </g>
        );
      })}
      {/* reminder bell */}
      <circle cx="222" cy="48" r="16" fill="var(--bone)" stroke="var(--c)" strokeWidth="1.6" />
      <circle cx="222" cy="48" r="16" fill="none" stroke="var(--c)" strokeWidth="1.6"><animate attributeName="r" values="16;24" dur="2.4s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" /></circle>
      <Ico k="bell" x={222} y={48} s={17} />
      {/* confirmation badge */}
      <circle cx="222" cy="166" r="22" fill="var(--c)" />
      <path d="M213 166l6 6 10-12" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---- phase 3: the retention loop — a customer kept coming back ---- */
function VizMegtartas() {
  const loop = "M150 35 A70 70 0 1 1 149.9 35 Z";
  const nodes = [{ x: 150, y: 35, k: "callback" }, { x: 210, y: 140, k: "star" }, { x: 90, y: 140, k: "refresh" }];
  return (
    <svg className="tsr__svg" viewBox="0 0 300 210" role="img" aria-label="Megtartás — az ügyfél újra és újra visszatér">
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
    n: "01", name: "Megkeresés", cap: "az első érintéstől a minősítésig", c: "#7C5CFF", Viz: VizMegkereses,
    steps: [
      { ic: "phone", t: "Hívásfogadás", s: "minden hívást felvesz, éjjel és hétvégén is" },
      { ic: "chat", t: "Utánkövetés", s: "a webes érdeklődőt is percek alatt visszahívja" },
      { ic: "qualify", t: "Kvalifikáció", s: "felteszi a fontos kérdéseket, és minősíti az érdeklődőt" },
      { ic: "handoff", t: "Élő átadás", s: "ha emberi segítség kell, a megfelelő kollégához kapcsol" },
    ],
  },
  {
    n: "02", name: "Foglalás", cap: "időpont, megerősítve", c: "#4AA3FF", Viz: VizFoglalas,
    steps: [
      { ic: "calendar", t: "Időpontfoglalás", s: "egyenesen a naptárba, ütközés nélkül" },
      { ic: "confirm", t: "Visszaigazolás", s: "azonnal visszaigazolja a foglalást" },
      { ic: "bell", t: "Emlékeztető", s: "emlékeztet, hogy ne maradjon el a látogatás" },
      { ic: "reschedule", t: "Átütemezés", s: "ha változik a terv, átteszi vagy lemondja az időpontot" },
    ],
  },
  {
    n: "03", name: "Megtartás", cap: "vissza, és újra", c: "#34C759", Viz: VizMegtartas,
    steps: [
      { ic: "callback", t: "No-show visszahívás", s: "visszaszerzi az elmaradt időpontot" },
      { ic: "star", t: "Értékelés", s: "elégedett ügyféltől értékelést kér" },
      { ic: "refresh", t: "Reaktiválás", s: "hónapokkal később visszahozza a régit" },
      { ic: "users", t: "Ajánláskérés", s: "az elégedett ügyféltől ajánlást is kér — új ügyfél a meglévőből" },
    ],
  },
];

const CHANNELS = ["Telefon", "SMS", "WhatsApp", "Messenger", "Instagram", "E-mail", "Webchat"];

const POINTS = [
  { t: "Egységes memória", d: "Minden csatornán emlékszik a korábbi beszélgetésekre." },
  { t: "Proaktív megkeresés", d: "Nem csak válaszol — magától kezdeményez és újraaktivál." },
  { t: "Teljes CRM-szinkron", d: "Minden beszélgetés automatikusan a helyére kerül." },
  { t: "Kiszámítható, 24/7", d: "Emberi kiesés nélkül, egy csapat költségének töredékéért." },
];

export default function FullSystem() {
  return (
    <section className="sys" id="rendszer-teljes">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A teljes rendszer</span>
          <h2 className="dash__h">Nem hét eszköz — egyetlen rendszer.</h2>
          <p className="dash__p">
            Az Atrium egy magyar nyelvű, AI-alapú értékesítési rendszer: minden
            csatornán ugyanaz a közös memória dolgozik, és végigkíséri az
            érdeklődőt a hívástól a foglaláson át a visszatérő ügyfélig — a
            háttérben, az Ön meglévő naptárához és eszközeihez kötve.
          </p>
          <p className="sys__howline">
            Hogyan működik? AI-ügynökök kezelik a hang- és szöveges
            beszélgetést, természetes magyar nyelven — a csapatának semmit nem
            kell lecserélnie.
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
                412 hívás fogadva · 0 kihagyva
              </span>
            </div>
            <div className="sysframe__channels">
              {CHANNELS.map((c) => (
                <span className="sysframe__chan" key={c}>{c}</span>
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
                        <b>{NEW_STEPS.has(st.t) && <span className="newtag">új</span>} {st.t}</b>
                        <span>{st.s}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="jrn__result reveal">
          <span className="jrn__result-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{ICONS.result}</svg>
          </span>
          <div className="jrn__result-txt">
            <b className="jrn__result-t">Több foglalás, több bevétel</b>
            <span className="jrn__result-s">és minden lépés mérve — riportálás</span>
          </div>
        </div>
          <div className="sysframe__integ">
            Csatlakozik a meglévő eszközeihez: <b>Google Calendar</b> · <b>Microsoft 365</b> · <b>iCal</b> · <b>GoHighLevel</b>
          </div>
        </div>

        <div className="caps reveal" data-delay="2">
          <div className="caps__head">
            <span className="newtag">új</span>
            <h3 className="caps__h">Mit tud a rendszer?</h3>
          </div>
          <div className="caps__grid">
            {CAPS.map((c, i) => (
              <div className="caps__item" key={i}>
                <span className="caps__ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICONS[c.ic]}</svg>
                </span>
                <span>
                  <b className="caps__t">{c.t}</b>
                  <span className="caps__d">{c.d}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="sys__points reveal" data-delay="3">
          {POINTS.map((p, i) => (
            <div className="sys__point" key={i}>
              <b className="sys__point-t">{p.t}</b>
              <span className="sys__point-d">{p.d}</span>
            </div>
          ))}
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
