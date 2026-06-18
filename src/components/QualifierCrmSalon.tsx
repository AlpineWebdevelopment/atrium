/* The one named product: the AI qualifier CRM — salon edition.
   Four reasons it fits — each its own panel with a bespoke graph. */

/* ---- 1: Szalonára szabva — staircase: salon sizes, each with a solution ---- */
function GfxTuned() {
  const sizes = [
    { lbl: "1 mester", h: 32 },
    { lbl: "2–5 mester", h: 56 },
    { lbl: "6+ mester", h: 80 },
  ];
  const BAR_W = 60, BASE_Y = 112;
  const centers = [48, 130, 212];
  return (
    <svg viewBox="0 0 260 160" role="img" aria-label="Minden szalonméretre van megoldásunk">
      <text className="qben__lbl" x={130} y={16} textAnchor="middle"
        style={{ fill: "var(--acc)", fontSize: "9.5px", letterSpacing: "0.06em" }}>MINDEN SZALONMÉRETRE</text>
      {sizes.map((t, i) => {
        const cx = centers[i];
        const topY = BASE_Y - t.h;
        const ckY = topY + 16;
        return (
          <g key={i}>
            <rect x={cx - BAR_W / 2} y={topY} width={BAR_W} height={t.h} rx={6}
              fill="var(--acc)" fillOpacity={0.18 + i * 0.22} />
            <circle cx={cx} cy={ckY} r={10} fill="var(--bone)" stroke="var(--acc)" strokeWidth="1.8" />
            <path d={`M${cx - 5} ${ckY} L${cx - 1} ${ckY + 4} L${cx + 6} ${ckY - 5}`}
              fill="none" stroke="var(--acc)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <text className="qben__lbl" x={cx} y={129} textAnchor="middle">{t.lbl}</text>
          </g>
        );
      })}
      <text className="qben__lbl" x={130} y={148} textAnchor="middle"
        style={{ fontSize: "9.5px" }}>mindegyikre egyedi megoldás</text>
    </svg>
  );
}

/* ---- 2: Saját vendég-CRM — data fork: rented (×) vs yours (✓) ---- */
function GfxOwn() {
  return (
    <svg viewBox="0 0 260 160" role="img" aria-label="Az adatok az Ön saját CRM-jében maradnak">
      {/* incoming data dots at top center */}
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={112 + i * 18} cy={12} r={5} fill="var(--ink-35)" />
      ))}
      {/* fork: left → rented (dashed, gray), right → yours (solid, accent) */}
      <path d="M112 22 Q86 36 62 54" stroke="var(--ink-35)" strokeWidth="1.8" strokeDasharray="4 3" fill="none" strokeLinecap="round" />
      <path d="M148 22 Q172 36 196 54" stroke="var(--acc)" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* LEFT: rented — bad */}
      <path d="M46 34 L58 46 M58 34 L46 46" stroke="#E05252" strokeWidth="2.5" strokeLinecap="round" />
      <rect x={16} y={56} width={90} height={62} rx={10}
        fill="none" stroke="var(--ink-35)" strokeWidth="1.5" strokeDasharray="5 4" />
      {/* cloud icon inside rented box */}
      <path d="M30 97 Q30 87 39 87 Q41 81 51 81 Q65 81 65 89 Q73 89 73 97"
        fill="none" stroke="var(--ink-35)" strokeWidth="2" strokeLinecap="round" />
      <text className="qben__lbl" x={61} y={132} textAnchor="middle">bérelt felület</text>

      {/* RIGHT: yours — good */}
      <circle cx={196} cy={42} r={10} fill="var(--acc)" fillOpacity="0.15" stroke="var(--acc)" strokeWidth="1.8" />
      <path d="M190 42 L195 47 L203 36" stroke="var(--acc)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x={152} y={56} width={92} height={62} rx={10}
        fill="var(--acc)" fillOpacity="0.07" stroke="var(--acc)" strokeWidth="1.8" />
      {/* database inside own box */}
      <g stroke="var(--acc)" strokeWidth="2" fill="none">
        <path d="M168 80 V102 A26 8 0 0 0 228 102 V80" fill="var(--acc)" fillOpacity="0.1" />
        <ellipse cx={198} cy={80} rx={26} ry={8} fill="var(--bone)" />
        <path d="M168 91 A26 8 0 0 0 228 91" strokeOpacity="0.45" />
      </g>
      {/* lock badge on database */}
      <g transform="translate(190 58)" fill="none" stroke="var(--acc)" strokeWidth="1.7" strokeLinecap="round">
        <rect x="0" y="7" width="14" height="9" rx="2" fill="var(--bone)" />
        <path d="M2.5 7V5a4.5 4.5 0 0 1 9 0v2" />
      </g>
      <text className="qben__lbl" x={198} y={132} textAnchor="middle" style={{ fill: "var(--acc)" }}>az Ön rendszere</text>
    </svg>
  );
}

/* ---- 3: Több kezelés — same 8 leads, 3 vs 8 bookings ---- */
function GfxFunnels() {
  return (
    <svg viewBox="0 0 260 160" role="img" aria-label="Ugyanannyi érdeklődőből több foglalás">
      <text className="qben__lbl" x={65} y={12} textAnchor="middle">rendszer nélkül</text>
      <text className="qben__lbl" x={195} y={12} textAnchor="middle" style={{ fill: "var(--acc)" }}>a rendszerrel</text>

      {/* 8 leads in — same for both */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <circle key={`la${i}`} cx={19 + i * 12} cy={24} r={3.8} fill="var(--ink-35)" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <circle key={`lb${i}`} cx={149 + i * 12} cy={24} r={3.8} fill="var(--acc)" />
      ))}

      {/* LEFT funnel: dashed = leaky */}
      <path d="M12 32 L118 32 L94 78 L94 90 L36 90 L36 78 Z"
        fill="none" stroke="var(--ink-35)" strokeWidth="2" strokeDasharray="5 4" />
      {/* leaked dots escaping through the sides */}
      <circle cx={7} cy={56} r={3.5} fill="var(--ink-35)" opacity="0.55" />
      <circle cx={5} cy={70} r={3.5} fill="var(--ink-35)" opacity="0.45" />
      <circle cx={123} cy={52} r={3.5} fill="var(--ink-35)" opacity="0.55" />
      <circle cx={126} cy={66} r={3.5} fill="var(--ink-35)" opacity="0.45" />
      <circle cx={6} cy={84} r={3} fill="var(--ink-35)" opacity="0.35" />
      <text className="qben__num" x={65} y={128} textAnchor="middle" style={{ fill: "var(--ink-35)", fontSize: "36px" }}>3</text>
      <text className="qben__lbl" x={65} y={148} textAnchor="middle">foglalás</text>

      {/* RIGHT funnel: solid = no leaks */}
      <path d="M142 32 L248 32 L224 78 L224 90 L166 90 L166 78 Z"
        fill="var(--acc)" fillOpacity="0.10" stroke="var(--acc)" strokeWidth="2" />
      <text className="qben__num" x={195} y={128} textAnchor="middle" style={{ fill: "var(--acc)", fontSize: "36px" }}>8</text>
      <text className="qben__lbl" x={195} y={148} textAnchor="middle" style={{ fill: "var(--acc)" }}>foglalás</text>
    </svg>
  );
}

/* ---- 4: Receptionnél olcsóbb — 24h ring + cost bar comparison ---- */
function GfxCost() {
  const r24 = 46, r8 = 30;
  const circum8 = 2 * Math.PI * r8;
  return (
    <svg viewBox="0 0 260 160" role="img" aria-label="A nap minden órájában, egy recepciásnál olcsóbban">
      {/* LEFT: availability rings */}
      <text className="qben__lbl" x={70} y={14} textAnchor="middle">elérhetőség</text>
      {/* outer ring = system (full 24h, accent) */}
      <circle cx={70} cy={83} r={r24} fill="none" stroke="var(--line)" strokeWidth="10" />
      <circle cx={70} cy={83} r={r24} fill="none" stroke="var(--acc)" strokeWidth="10"
        strokeLinecap="round" transform="rotate(-90 70 83)" />
      {/* inner ring = employee (8/24h, gray) */}
      <circle cx={70} cy={83} r={r8} fill="none" stroke="var(--line)" strokeWidth="7" />
      <circle cx={70} cy={83} r={r8} fill="none" stroke="var(--ink-35)" strokeWidth="7"
        strokeDasharray={`${(8 / 24) * circum8} ${circum8}`}
        strokeLinecap="round" transform="rotate(-90 70 83)" />
      {/* center labels */}
      <text className="qben__num" x={70} y={80} textAnchor="middle"
        style={{ fontSize: "14px", fill: "var(--acc)" }}>24 óra</text>
      <text className="qben__lbl" x={70} y={96} textAnchor="middle"
        style={{ fill: "var(--ink-35)", fontSize: "9.5px" }}>8 óra</text>
      {/* legend */}
      <text className="qben__lbl" x={70} y={148} textAnchor="middle"
        style={{ fill: "var(--acc)" }}>rendszer · munkatárs</text>

      {/* RIGHT: cost bars */}
      <text className="qben__lbl" x={190} y={14} textAnchor="middle">havi költség</text>
      {/* employee bar (tall, gray) */}
      <rect x={152} y={30} width={38} height={86} rx={5} fill="var(--ink-35)" fillOpacity="0.45" />
      {/* system bar (short, accent) */}
      <rect x={202} y={80} width={38} height={36} rx={5} fill="var(--acc)" />
      {/* labels */}
      <text className="qben__lbl" x={171} y={130} textAnchor="middle">munkatárs</text>
      <text className="qben__lbl" x={221} y={130} textAnchor="middle" style={{ fill: "var(--acc)" }}>rendszer</text>
    </svg>
  );
}

const BENEFITS = [
  { b: "Szalonára szabva", s: "kezelések, mesterek és kapacitás szerint konfigurálva", c: "#BC6285", Gfx: GfxTuned },
  { b: "Saját vendég-CRM", s: "a vendégadatok az Ön rendszerében, nem egy bérelt felületen", c: "#628FBC", Gfx: GfxOwn },
  { b: "Több kezelés", s: "ugyanannyi megkeresésből — mert egy foglalás sem vész el útközben", c: "#62BCAC", Gfx: GfxFunnels },
  { b: "Receptionnél olcsóbb", s: "a nap minden órájában dolgozik, és kevesebbe kerül, mint egy recepciós", c: "#BCA162", Gfx: GfxCost },
];

export default function QualifierCrmSalon() {
  return (
    <section className="qcrm" id="crm">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">új</span> Miért éri meg</span>
          <h2 className="dash__h">Amit a rendszer az Ön szalonjának hoz.</h2>
          <p className="dash__p">
            Minden megkeresés egy helyre fut be. A rendszer felteszi a megfelelő
            kérdéseket, minősíti a vendéget, és csak azzal foglal kezelési időpontot,
            aki tényleg le akar ülni a székbe.
          </p>
        </div>

        <div className="qben reveal" data-delay="1">
          {BENEFITS.map((f, i) => (
            <article className="qben__cell" key={i} style={{ ["--acc" as string]: f.c }}>
              <div className="qben__gfx">
                <f.Gfx />
              </div>
              <div className="qben__txt">
                <b>{f.b}</b>
                <span>{f.s}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
