/* Egyedi rendszerek — four pillars, each an alternating graph row:
   packages/pricing, the technology, real value (ROI), and the dashboard.
   Copy paraphrased to brand voice (no banned vocab); the AI is kept honest —
   no "undetectable AI" claim, just natural Hungarian speech. */

/* ---- 1: packages sized to the company ---- */
function GfxTiers() {
  const tiers = [
    { l: "Kicsi", h: 52 },
    { l: "Közepes", h: 96 },
    { l: "Nagy", h: 140 },
  ];
  return (
    <svg viewBox="0 0 420 200" role="img" aria-label="Cégmérethez szabott csomagok és árazás">
      <text className="cxr__lbl" x="24" y="22">Beállítás · 100 000 – 4 000 000 Ft</text>
      <text className="cxr__lbl" x="24" y="40">Havi · 40 000 – 1 500 000 Ft</text>
      {tiers.map((t, i) => {
        const x = 70 + i * 120;
        const y = 170 - t.h;
        const last = i === tiers.length - 1;
        return (
          <g key={i}>
            <rect x={x} y={y} width="80" height={t.h} rx="8" fill="var(--acc)" fillOpacity={last ? 1 : 0.16} stroke="var(--acc)" strokeWidth={last ? 0 : 1.5} />
            <text className="cxr__lbl" x={x + 40} y="188" textAnchor="middle">{t.l}</text>
          </g>
        );
      })}
      <polyline points="110,118 230,74 350,30" fill="none" stroke="var(--acc)" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.6" />
      {[[110, 118], [230, 74], [350, 30]].map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3.5" fill="var(--acc)" />
      ))}
    </svg>
  );
}

/* ---- 2: seven channels, one shared memory ---- */
function GfxChannels() {
  const ch = ["Hívás", "SMS", "WhatsApp", "Messenger", "Instagram", "E-mail", "Webchat"];
  const coreX = 330, coreY = 120;
  return (
    <svg viewBox="0 0 420 240" role="img" aria-label="Hét csatorna, egyetlen közös memória">
      {ch.map((c, i) => {
        const y = 30 + i * 30;
        const path = `M96 ${y} C 180 ${y}, 230 ${coreY}, ${coreX - 30} ${coreY}`;
        return (
          <g key={i}>
            <path d={path} fill="none" stroke="var(--acc)" strokeWidth="1.5" strokeOpacity="0.35" />
            <circle r="2.6" fill="var(--acc)">
              <animateMotion dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" path={path} />
            </circle>
            <circle cx="90" cy={y} r="5" fill="var(--bone)" stroke="var(--acc)" strokeWidth="2" />
            <text className="cxr__lbl" x="80" y={y + 3.5} textAnchor="end">{c}</text>
          </g>
        );
      })}
      <circle cx={coreX} cy={coreY} r="34" fill="var(--acc)" fillOpacity="0.08" stroke="var(--acc)" strokeWidth="2" />
      <circle cx={coreX} cy={coreY} r="34" fill="none" stroke="var(--acc)" strokeWidth="2">
        <animate attributeName="r" values="34;52" dur="2.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0" dur="2.6s" repeatCount="indefinite" />
      </circle>
      <text className="cxr__num" x={coreX} y={coreY - 2} textAnchor="middle" style={{ fill: "var(--ink)", fontSize: "13px" }}>egységes</text>
      <text className="cxr__num" x={coreX} y={coreY + 14} textAnchor="middle" style={{ fill: "var(--ink)", fontSize: "13px" }}>memória</text>
    </svg>
  );
}

/* ---- 3: revenue-first — ROI within 1–3 months ---- */
function GfxRoi() {
  return (
    <svg viewBox="0 0 420 210" role="img" aria-label="Megtérülés 1–3 hónapon belül">
      <line x1="40" y1="175" x2="395" y2="175" stroke="var(--line)" strokeWidth="1.5" />
      <line x1="40" y1="120" x2="395" y2="120" stroke="var(--ink-35)" strokeWidth="1.5" strokeDasharray="5 5" />
      <text className="cxr__lbl" x="393" y="114" textAnchor="end">költség</text>
      <path d="M40 168 C 110 158, 150 140, 200 110 S 320 50, 395 36 L 395 175 L 40 175 Z" fill="var(--acc)" fillOpacity="0.12" />
      <path d="M40 168 C 110 158, 150 140, 200 110 S 320 50, 395 36" fill="none" stroke="var(--acc)" strokeWidth="2.5" />
      <line x1="178" y1="120" x2="178" y2="175" stroke="var(--acc)" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
      <circle cx="178" cy="120" r="5" fill="var(--bone)" stroke="var(--acc)" strokeWidth="2.5" />
      <text className="cxr__lbl" x="178" y="195" textAnchor="middle" style={{ fill: "var(--acc)" }}>megtérülés · ~2. hónap</text>
      <text className="cxr__lbl" x="385" y="32" textAnchor="end" style={{ fill: "var(--acc)" }}>bevétel</text>
    </svg>
  );
}

/* ---- 4: one dashboard, on mobile too ---- */
function GfxDash() {
  return (
    <svg viewBox="0 0 420 230" role="img" aria-label="Egységes irányítópult, mobilon is">
      <rect x="18" y="22" width="288" height="186" rx="12" fill="var(--bone)" stroke="var(--acc)" strokeWidth="2" />
      <path d="M18 34 a12 12 0 0 1 12 -12 h264 a12 12 0 0 1 12 12 v18 h-288 z" fill="var(--acc)" fillOpacity="0.10" />
      <circle cx="36" cy="37" r="4" fill="var(--acc)" />
      <rect x="48" y="34" width="70" height="6" rx="3" fill="var(--ink-35)" fillOpacity="0.5" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={34 + i * 86} y="64" width="72" height="40" rx="7" fill="var(--acc)" fillOpacity="0.07" stroke="var(--acc)" strokeOpacity="0.4" />
          <rect x={44 + i * 86} y="74" width="30" height="7" rx="3.5" fill="var(--acc)" />
          <rect x={44 + i * 86} y="88" width="48" height="5" rx="2.5" fill="var(--ink-35)" fillOpacity="0.5" />
        </g>
      ))}
      {[20, 34, 28, 46, 38].map((h, i) => (
        <rect key={i} x={40 + i * 22} y={186 - h} width="13" height={h} rx="3" fill="var(--acc)" fillOpacity={i === 3 ? 1 : 0.3} />
      ))}
      <polyline points="180,180 205,164 230,170 255,150 280,140" fill="none" stroke="var(--acc)" strokeWidth="2" />
      <rect x="330" y="40" width="72" height="150" rx="14" fill="var(--bone)" stroke="var(--acc)" strokeWidth="2" />
      <rect x="354" y="48" width="24" height="5" rx="2.5" fill="var(--ink-35)" fillOpacity="0.5" />
      <rect x="342" y="66" width="48" height="26" rx="6" fill="var(--acc)" fillOpacity="0.12" />
      <rect x="350" y="74" width="20" height="6" rx="3" fill="var(--acc)" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x="342" y={102 + i * 22} width="48" height="14" rx="4" fill="var(--acc)" fillOpacity="0.06" stroke="var(--acc)" strokeOpacity="0.3" />
      ))}
      <text className="cxr__lbl" x="366" y="204" textAnchor="middle">mobil app</text>
    </svg>
  );
}

const PILLARS: {
  acc: string; eyebrow: string; h: string; d: string; items: string[]; Gfx: () => React.ReactElement;
}[] = [
  {
    acc: "#7C5CFF",
    eyebrow: "Egyedi csomagok",
    h: "Minden cégmérethez szabott rendszer.",
    d: "A kis rendelőtől a több telephelyes cégig — a rendszer az Ön méretére és működésére épül.",
    items: [
      "Beállítási díj 100 000 – 4 000 000 Ft között",
      "Havi díj 40 000 – 1 500 000 Ft között",
      "Teljes, saját CRM-integráció minden csomagban",
      "Felügyelet és karbantartás, a nap minden órájában",
    ],
    Gfx: GfxTiers,
  },
  {
    acc: "#4AA3FF",
    eyebrow: "A technológia",
    h: "Fejlett képességek, az Ön javára.",
    d: "Minden csatornán ugyanaz a rendszer dolgozik — pontosan, gyorsan, megszakítás nélkül.",
    items: [
      "Egységes memória hét csatornán — sosem felejt",
      "Proaktív kimenő megkeresés és újraaktiválás",
      "Természetes, gördülékeny magyar beszéd",
      "Hívás, SMS, WhatsApp, Messenger, Instagram, e-mail, webchat",
      "Automatikus folyamatkezelés és értesítések",
      "Valós idejű szinkron az Ön CRM-jével",
    ],
    Gfx: GfxChannels,
  },
  {
    acc: "#34C759",
    eyebrow: "Valódi érték",
    h: "Bevétel-központú, nem látványosság.",
    d: "Nem demók és nem alapszintű botok. A rendszer egyetlen dologért van: hogy több bevételt hozzon.",
    items: [
      "Valódi üzleti problémákra, nem látványos bemutatókra",
      "Konkrét eredmények: több ügyfél, több foglalás, több bevétel",
      "Többszörös megtérülés 1–3 hónapon belül",
      "Mérhető bevételnövekedés, nem technológiai demó",
    ],
    Gfx: GfxRoi,
  },
  {
    acc: "#E8A33D",
    eyebrow: "Egyedi irányítópult",
    h: "Minden adat egy helyen, valós időben.",
    d: "Egy átlátható felület, ahol minden beszélgetést, ügynököt és eredményt nyomon követhet.",
    items: [
      "Minden beszélgetés megtekintése és elemzése",
      "Valós idejű teljesítménymutatók és statisztikák",
      "Több AI-ügynök kezelése egy helyen",
      "Mobilalkalmazás",
    ],
    Gfx: GfxDash,
  },
];

export default function CustomSolutions() {
  return (
    <section className="cux" id="egyedi">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Egyedi rendszerek</span>
          <h2 className="dash__h">Az Ön cégére szabva — az első naptól.</h2>
          <p className="dash__p">
            A kész csomagoktól a teljesen egyedi fejlesztésig: a rendszert az Ön
            folyamataira építjük, fejlett technológiával és mérhető eredményért —
            mindezt egyetlen átlátható felületen követheti.
          </p>
        </div>

        <div className="cux__rows">
          {PILLARS.map((p, i) => (
            <article className="cxr reveal" data-delay={(i % 2) + 1} key={i} style={{ ["--acc" as string]: p.acc } as React.CSSProperties}>
              <div className="cxr__gfx">
                <p.Gfx />
              </div>
              <div className="cxr__body">
                <span className="cxr__eyebrow">{p.eyebrow}</span>
                <h3 className="cxr__h">{p.h}</h3>
                <p className="cxr__d">{p.d}</p>
                <ul className="cxr__list">
                  {p.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
