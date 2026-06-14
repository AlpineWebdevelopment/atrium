/* The one named product: the AI qualifier CRM.
   Four reasons it fits — each its own panel with a bespoke graph. */

/* ---- 1: tuned to you — equalizer sliders ---- */
function GfxTuned() {
  const sliders = [
    { lbl: "méret", v: 0.72 },
    { lbl: "folyamat", v: 0.42 },
    { lbl: "kérdések", v: 0.88 },
    { lbl: "hangnem", v: 0.6 },
  ];
  return (
    <svg viewBox="0 0 260 160" role="img" aria-label="A rendszer az Ön paramétereire hangolva">
      {sliders.map((d, i) => {
        const x = 40 + i * 60;
        const ky = 120 - d.v * 92;
        return (
          <g key={i}>
            <line x1={x} y1={24} x2={x} y2={120} stroke="var(--line)" strokeWidth="4" strokeLinecap="round" />
            <line x1={x} y1={120} x2={x} y2={ky} stroke="var(--acc)" strokeWidth="4" strokeLinecap="round" />
            <circle cx={x} cy={ky} r="8" fill="var(--bone)" stroke="var(--acc)" strokeWidth="3" />
            <circle cx={x} cy={ky} r="2.4" fill="var(--acc)" />
            <text className="qben__lbl" x={x} y={142} textAnchor="middle">{d.lbl}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ---- 2: your own CRM — a database that keeps the data ---- */
function GfxOwn() {
  return (
    <svg viewBox="0 0 260 170" role="img" aria-label="Az adatok az Ön saját CRM-jében maradnak">
      {/* data flowing in and staying */}
      {[0, 1, 2].map((i) => (
        <circle key={i} r="3.2" fill="var(--acc)">
          <animateMotion dur="2.6s" begin={`${i * 0.7}s`} repeatCount="indefinite" path={`M${64 + i * 14},6 L${64 + i * 14},40`} />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.7;1" dur="2.6s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* database cylinder */}
      <g stroke="var(--acc)" strokeWidth="2.5" fill="none">
        <path d="M36 50 V122 A42 13 0 0 0 120 122 V50" fill="var(--acc)" fillOpacity="0.07" />
        <ellipse cx="78" cy="50" rx="42" ry="13" fill="var(--bone)" />
        <path d="M36 74 A42 13 0 0 0 120 74" strokeOpacity="0.45" />
        <path d="M36 98 A42 13 0 0 0 120 98" strokeOpacity="0.45" />
      </g>
      {/* lock badge */}
      <g transform="translate(70 30)" fill="none" stroke="var(--acc)" strokeWidth="2" strokeLinecap="round">
        <rect x="0" y="7" width="16" height="11" rx="2.5" fill="var(--bone)" />
        <path d="M3 7V5a5 5 0 0 1 10 0v2" />
      </g>
      <text className="qben__lbl" x="78" y="150" textAnchor="middle" style={{ fill: "var(--acc)" }}>az Ön CRM-je</text>

      {/* the rented alternative — dimmed, kept at arm's length */}
      <g opacity="0.5">
        <rect x="158" y="62" width="80" height="48" rx="10" fill="none" stroke="var(--ink-35)" strokeWidth="1.5" strokeDasharray="5 5" />
        <path d="M174 80h48M174 92h32" stroke="var(--ink-35)" strokeWidth="2" strokeLinecap="round" />
        <text className="qben__lbl" x="198" y="128" textAnchor="middle">bérelt felület</text>
      </g>
    </svg>
  );
}

/* ---- 3: more bookings — two funnels, same leads in ---- */
function GfxFunnels() {
  const Funnel = ({ cx, acc, out, leak }: { cx: number; acc: string; out: number; leak: boolean }) => (
    <g>
      {/* incoming leads — same count for both */}
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={cx - 21 + i * 14} cy={18} r="3.6" fill="var(--ink-35)" />
      ))}
      {/* funnel body */}
      <path
        d={`M${cx - 30} 32 L${cx + 30} 32 L${cx + 8} 84 L${cx + 8} 96 L${cx - 8} 96 L${cx - 8} 84 Z`}
        fill={acc}
        fillOpacity="0.07"
        stroke={acc}
        strokeWidth="2"
        strokeDasharray={leak ? "4 5" : undefined}
      />
      {/* leaked leads (only the leaky funnel) */}
      {leak && (
        <g fill="var(--ink-35)" opacity="0.6">
          <circle cx={cx - 34} cy={64} r="3" />
          <circle cx={cx + 36} cy={72} r="3" />
          <circle cx={cx - 38} cy={80} r="3" />
        </g>
      )}
      {/* result */}
      <text className="qben__num" x={cx} y={134} textAnchor="middle" style={{ fill: acc, fontSize: "30px" }}>{out}</text>
      <text className="qben__lbl" x={cx} y={150} textAnchor="middle">időpont</text>
    </g>
  );
  return (
    <svg viewBox="0 0 260 160" role="img" aria-label="Ugyanannyi érdeklődőből több időpont">
      <text className="qben__lbl" x={70} y={10} textAnchor="middle">rendszer nélkül</text>
      <text className="qben__lbl" x={190} y={10} textAnchor="middle" style={{ fill: "var(--acc)" }}>a rendszerrel</text>
      <Funnel cx={70} acc="var(--ink-35)" out={3} leak />
      <Funnel cx={190} acc="var(--acc)" out={8} leak={false} />
    </svg>
  );
}

/* ---- 4: cost-effective — 24h coverage + lower cost ---- */
function GfxCost() {
  return (
    <svg viewBox="0 0 260 160" role="img" aria-label="A nap minden órájában, egy munkatársnál olcsóbban">
      {/* 24/7 ring */}
      <g transform="translate(72 80)">
        <circle r="46" fill="none" stroke="var(--line)" strokeWidth="11" />
        <circle r="46" fill="none" stroke="var(--acc)" strokeWidth="11" strokeLinecap="round" />
        {/* employee — 8h of the day */}
        <circle r="30" fill="none" stroke="var(--ink-35)" strokeWidth="7" pathLength={24} strokeDasharray="8 24" transform="rotate(-90)" strokeLinecap="round" />
        <text className="qben__num" x="0" y="2" textAnchor="middle" style={{ fill: "var(--ink)", fontSize: "20px" }}>0–24</text>
        <text className="qben__lbl" x="0" y="18" textAnchor="middle">óra</text>
      </g>

      {/* cost: an employee vs the system */}
      <text className="qben__lbl" x={188} y={20} textAnchor="middle">havi költség</text>
      <g>
        <rect x={150} y={42} width="32" height="82" rx="4" fill="var(--ink-35)" fillOpacity="0.55" />
        <rect x={196} y={88} width="32" height="36" rx="4" fill="var(--acc)" />
        <text className="qben__lbl" x={166} y={138} textAnchor="middle">munkatárs</text>
        <text className="qben__lbl" x={212} y={138} textAnchor="middle" style={{ fill: "var(--acc)" }}>rendszer</text>
      </g>
    </svg>
  );
}

const BENEFITS = [
  { b: "Személyre szabva", s: "az Ön cégméretére, folyamatára és kérdéseire építve", c: "#7C5CFF", Gfx: GfxTuned },
  { b: "Saját CRM", s: "az adatok az Ön rendszerében, nem egy bérelt felületen", c: "#4AA3FF", Gfx: GfxOwn },
  { b: "Több időpont", s: "ugyanannyi érdeklődőből — mert egy sem vész el útközben", c: "#54CFC0", Gfx: GfxFunnels },
  { b: "Költséghatékony", s: "a nap minden órájában dolgozik, és kevesebbe kerül, mint egy munkatárs", c: "#34C759", Gfx: GfxCost },
];

export default function QualifierCrm() {
  return (
    <section className="qcrm" id="crm">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Az AI kvalifikáló CRM</span>
          <h2 className="dash__h">Mire Önhöz ér, már komoly.</h2>
          <p className="dash__p">
            Minden megkeresés egy helyre fut be. A rendszer felteszi a megfelelő
            kérdéseket, pontozza az érdeklődőt, és csak azzal foglal időpontot,
            aki tényleg vásárolna.
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
