"use client";
import { useState } from "react";

const PANELS = [
  {
    tab: "Tökéletes minősítés",
    desc: "A rendszer felteszi a megfelelő kérdéseket, és komoly érdeklőre szűr. Mire Ön leül tárgyalni, a másik fél már minősített — az ideje a valódi tárgyalásra megy.",
    metrics: [
      { k: "Beérkező megkeresések", c: "var(--ink)",     v: "Minden nap",  d: "hívás, űrlap, üzenet" },
      { k: "Komoly érdeklők",       c: "var(--signal)",  v: "Kiemelve",    d: "az előszűrés után" },
      { k: "Az Ön ideje",           c: "var(--signal)",  v: "Megvédve",    d: "csak minősített partnerekkel" },
      { k: "Konverzió",             c: "var(--signal)",  v: "Magasabb",    d: "kevesebb felesleges egyeztetéssel" },
    ],
    gain: { label: "Az eredmény", note: "A rendszer szűri a nézelődőket — Ön csak azokkal tárgyal, akik tényleg vásárolnának.", v: "Csak komoly vásárlók jutnak el Önhöz." },
  },
  {
    tab: "24/7 híváskezelés",
    desc: "Minden hívást fogad, munkaidő után és hétvégén is. Egyetlen érdeklő sem kerül hangpostára — mindenki azonnal visszaigazolást kap.",
    metrics: [
      { k: "Fogadott hívások",    c: "var(--signal)", v: "Minden",       d: "munkaidő után is" },
      { k: "Munkaidő",            c: "var(--signal)", v: "Nincs hatása", d: "rendszer 24/7 aktív" },
      { k: "Visszaigazolás",      c: "var(--signal)", v: "Azonnali",     d: "minden hívónak" },
      { k: "Elszalasztott lead",  c: "var(--signal)", v: "Nulla",        d: "minden hívás feldolgozva" },
    ],
    gain: { label: "Az eredmény", note: "Minden hívás egy lehetőség — egyik sem vész el attól, hogy épp nem ér rá felvenni.", v: "24 óra, 7 nap — egy hívás sem vész el." },
  },
  {
    tab: "Perceken belüli válasz",
    desc: "A hirdetésből érkező érdeklők perceken belül választ kapnak — amikor még a döntés előtt vannak. Az első reagáló viszi a legtöbb ügyletet.",
    metrics: [
      { k: "Érdeklő érkezett",  c: "var(--ink)",    v: "14:30",        d: "hirdetésből" },
      { k: "Első válasz",       c: "var(--signal)", v: "< 5 perc",     d: "a rendszertől" },
      { k: "Az érdeklő",        c: "var(--signal)", v: "Aktív",        d: "döntés előtt van még" },
      { k: "Utánkövetés",       c: "var(--signal)", v: "Automatikus",  d: "amíg választ ad" },
    ],
    gain: { label: "Az eredmény", note: "A lead az első percekben a legfogékonyabb — a leggyorsabb reagáló viszi az ügyletet.", v: "Gyorsabb válasz, több zárt ügylet." },
  },
  {
    tab: "No-show csökkentés",
    desc: "Időpont előtt emlékeztet, utána visszahívja a no-show-t. A naptár lyukai bezárulnak — a kieső bevétel visszatér.",
    metrics: [
      { k: "Emlékeztető",    c: "var(--signal)", v: "Automatikus", d: "minden időpont előtt" },
      { k: "No-show arány",  c: "var(--signal)", v: "Csökken",     d: "visszaigazolással" },
      { k: "Üres slot",      c: "var(--signal)", v: "Feltöltve",   d: "várólistáról" },
      { k: "A naptár",       c: "var(--signal)", v: "Teli",        d: "kézi munka nélkül" },
    ],
    gain: { label: "Az eredmény", note: "Az emlékeztető és a visszahívás együtt tartja teli a naptárt — manuális utánkövetés nélkül.", v: "Teli naptár. Kézi munka nélkül." },
  },
];

/* ── Graphic 1: before / after conversion funnel ──────────────────────── */
function GfxFunnel() {
  const leads = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="qual">
      <svg className="qual__svg" viewBox="0 0 800 210" role="img" aria-label="A rendszerrel több érdeklőből lesz vevő">
        <line x1="400" y1="0" x2="400" y2="210" stroke="rgba(1,14,30,0.07)" strokeWidth="1" strokeDasharray="4 4" />

        {/* LEFT — without */}
        <text x="196" y="13" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fill: "rgba(1,14,30,0.38)", letterSpacing: "0.07em" }}>RENDSZER NÉLKÜL</text>
        {leads.map((i) => <circle key={`la${i}`} cx={104 + i * 20} cy={26} r={5.5} fill="rgba(1,14,30,0.16)" />)}
        <path d="M72 36 L320 36 L278 96 L272 110 L120 110 L114 96 Z" fill="none" stroke="rgba(1,14,30,0.2)" strokeWidth="1.8" strokeDasharray="6 4" />
        {([[64,60,0.4],[60,76,0.28],[328,56,0.4],[332,72,0.28],[62,94,0.2]] as [number,number,number][]).map(([x,y,o],i) => (
          <circle key={`lk${i}`} cx={x} cy={y} r={4} fill="rgba(1,14,30,0.18)" opacity={o} />
        ))}
        {[160, 232].map((x, i) => <circle key={`lo${i}`} cx={x} cy={148} r={7} fill="rgba(1,14,30,0.28)" />)}
        <text x="196" y="174" textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: "500", fill: "rgba(1,14,30,0.35)" }}>kevesebb</text>
        <text x="196" y="192" textAnchor="middle" style={{ fontSize: "10px", fill: "rgba(1,14,30,0.35)" }}>zárt ügylet</text>

        {/* RIGHT — with system */}
        <text x="604" y="13" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fill: "#6DBC61", letterSpacing: "0.07em" }}>A RENDSZERREL</text>
        {leads.map((i) => <circle key={`rb${i}`} cx={504 + i * 20} cy={26} r={5.5} fill="#6DBC61" fillOpacity="0.65" />)}
        <text x="604" y="50" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: "8px", fill: "#6DBC61", letterSpacing: "0.06em" }}>▼  MINŐSÍTÉS · UTÁNKÖVETÉS</text>
        <path d="M472 56 L736 56 L700 106 L694 118 L514 118 L508 106 Z" fill="rgba(109,188,97,0.1)" stroke="#6DBC61" strokeWidth="1.8" />
        {[516, 558, 604, 650, 692].map((x, i) => <circle key={`ro${i}`} cx={x} cy={150} r={7} fill="#6DBC61" />)}
        <text x="604" y="174" textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: "500", fill: "#6DBC61" }}>több</text>
        <text x="604" y="192" textAnchor="middle" style={{ fontSize: "10px", fill: "#6DBC61" }}>zárt ügylet</text>
      </svg>
      <div className="qual__legend">
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "rgba(1,14,30,0.2)" }} />Rendszer nélkül</span>
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "#6DBC61" }} />A rendszerrel</span>
        <span className="qual__note">Az előszűrés kiemeli a komolyakat — Ön már csak velük beszél.</span>
      </div>
    </div>
  );
}

/* ── Graphic 2: 24h donut vs 8h donut ────────────────────────────────── */
function GfxCoverage() {
  const R = 66, SW = 14, CY = 105;
  const circ = 2 * Math.PI * R;
  const eight = (8 / 24) * circ;
  return (
    <div className="qual">
      <svg className="qual__svg" viewBox="0 0 800 210" role="img" aria-label="24 órás elérhetőség a rendszerrel">
        <line x1="400" y1="0" x2="400" y2="210" stroke="rgba(1,14,30,0.07)" strokeWidth="1" strokeDasharray="4 4" />

        {/* LEFT — 8h/day */}
        <text x="196" y="16" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fill: "rgba(1,14,30,0.38)", letterSpacing: "0.07em" }}>RENDSZER NÉLKÜL</text>
        <circle cx="196" cy={CY} r={R} fill="none" stroke="rgba(1,14,30,0.08)" strokeWidth={SW} />
        <circle cx="196" cy={CY} r={R} fill="none" stroke="rgba(1,14,30,0.25)" strokeWidth={SW}
          strokeDasharray={`${eight} ${circ}`} strokeLinecap="round"
          transform={`rotate(-90 196 ${CY})`} />
        <text x="196" y={CY - 10} textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: "500", fill: "rgba(1,14,30,0.35)" }}>8</text>
        <text x="196" y={CY + 14} textAnchor="middle" style={{ fontSize: "11px", fill: "rgba(1,14,30,0.35)" }}>óra / nap</text>
        <text x="196" y="197" textAnchor="middle" style={{ fontSize: "10px", fill: "rgba(1,14,30,0.35)" }}>hétköznap, munkaidőben</text>

        {/* RIGHT — 24/7 */}
        <text x="604" y="16" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fill: "#6DBC61", letterSpacing: "0.07em" }}>A RENDSZERREL</text>
        <circle cx="604" cy={CY} r={R} fill="none" stroke="rgba(109,188,97,0.15)" strokeWidth={SW} />
        <circle cx="604" cy={CY} r={R} fill="none" stroke="#6DBC61" strokeWidth={SW}
          strokeLinecap="round" transform={`rotate(-90 604 ${CY})`} />
        <text x="604" y={CY - 10} textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: "500", fill: "#6DBC61" }}>24/7</text>
        <text x="604" y={CY + 14} textAnchor="middle" style={{ fontSize: "11px", fill: "#6DBC61" }}>minden órában</text>
        <text x="604" y="197" textAnchor="middle" style={{ fontSize: "10px", fill: "#6DBC61" }}>éjjel-nappal, hétvégén is</text>
      </svg>
      <div className="qual__legend">
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "rgba(1,14,30,0.2)" }} />Kézi fogadás</span>
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "#6DBC61" }} />A rendszerrel</span>
        <span className="qual__note">Minden hívás fogadva — munkaidő, éjszaka és hétvége egyaránt.</span>
      </div>
    </div>
  );
}

/* ── Graphic 3: response-time bar comparison ─────────────────────────── */
function GfxSpeed() {
  return (
    <div className="qual">
      <svg className="qual__svg" viewBox="0 0 800 210" role="img" aria-label="A rendszer perceken belül válaszol">
        <text x="16" y="18" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fill: "rgba(1,14,30,0.38)", letterSpacing: "0.07em" }}>ELSŐ VÁLASZ IDEJE</text>

        {/* Manual — next day (wide bar) */}
        <text x="16" y="56" style={{ fontSize: "11.5px", fill: "rgba(1,14,30,0.45)" }}>Kézi utánkövetés</text>
        <rect x="16" y="64" width="660" height="28" rx="6" fill="rgba(1,14,30,0.09)" />
        <rect x="16" y="64" width="660" height="28" rx="6" fill="none" stroke="rgba(1,14,30,0.12)" strokeWidth="1" />
        <text x="684" y="83" style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: "500", fill: "rgba(1,14,30,0.38)" }}>Másnap</text>

        {/* System — < 5 min (narrow bar) */}
        <text x="16" y="130" style={{ fontSize: "11.5px", fill: "#6DBC61" }}>A rendszerrel</text>
        <rect x="16" y="138" width="72" height="28" rx="6" fill="#6DBC61" fillOpacity="0.85" />
        <text x="96" y="157" style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: "500", fill: "#6DBC61" }}>&lt; 5 perc</text>

        {/* axis label */}
        <line x1="16" y1="192" x2="784" y2="192" stroke="rgba(1,14,30,0.08)" strokeWidth="1" />
        <text x="16" y="206" style={{ fontSize: "9.5px", fill: "rgba(1,14,30,0.3)" }}>Gyors</text>
        <text x="784" y="206" textAnchor="end" style={{ fontSize: "9.5px", fill: "rgba(1,14,30,0.3)" }}>Lassú</text>
      </svg>
      <div className="qual__legend">
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "rgba(1,14,30,0.2)" }} />Kézi utánkövetés</span>
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "#6DBC61" }} />A rendszerrel</span>
        <span className="qual__note">Az első reagáló viszi a legtöbb ügyletet — a lead az első percekben a legfogékonyabb.</span>
      </div>
    </div>
  );
}

/* ── Graphic 4: before/after calendar ────────────────────────────────── */
function GfxCalendar() {
  const times = ["9:00", "11:00", "13:00", "15:00"];
  const days = ["H", "K", "Sze", "Cs", "P"];

  type SlotState = "book" | "noshow" | "filled";
  const before: SlotState[][] = [
    ["book", "book", "noshow", "book"],
    ["book", "noshow", "book", "book"],
    ["book", "book", "book", "noshow"],
    ["noshow", "book", "noshow", "book"],
    ["book", "book", "noshow", "book"],
  ];
  const after: SlotState[][] = before.map((col) =>
    col.map((s) => (s === "noshow" ? "filled" : s))
  );

  const slotColor = (s: SlotState) =>
    s === "book" ? "rgba(1,14,30,0.08)" : s === "filled" ? "rgba(109,188,97,0.22)" : "rgba(196,108,100,0.18)";
  const slotBorder = (s: SlotState) =>
    s === "book" ? "rgba(1,14,30,0.1)" : s === "filled" ? "rgba(109,188,97,0.5)" : "rgba(196,108,100,0.4)";
  const slotText = (s: SlotState) =>
    s === "filled" ? "✓" : s === "noshow" ? "✗" : "";
  const slotTextColor = (s: SlotState) =>
    s === "filled" ? "#6DBC61" : "#C46C64";

  const CAL_W = 340, CAL_H = 164, COL_W = 62, ROW_H = 34, HEAD_H = 22, MX = 12;

  const renderCal = (data: SlotState[][], ox: number, label: string, labelColor: string) => (
    <g transform={`translate(${ox}, 24)`}>
      <text x={CAL_W / 2} y="-10" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fill: labelColor, letterSpacing: "0.07em" }}>{label}</text>
      {days.map((d, ci) => (
        <text key={`h${ci}`} x={MX + ci * COL_W + COL_W / 2} y={HEAD_H - 6} textAnchor="middle"
          style={{ fontSize: "9.5px", fill: "rgba(1,14,30,0.45)" }}>{d}</text>
      ))}
      {data.map((col, ci) =>
        col.map((s, ri) => {
          const x = MX + ci * COL_W;
          const y = HEAD_H + ri * ROW_H;
          return (
            <g key={`${ci}-${ri}`}>
              <rect x={x + 2} y={y + 2} width={COL_W - 6} height={ROW_H - 5} rx="5"
                fill={slotColor(s)} stroke={slotBorder(s)} strokeWidth="1" />
              <text x={x + COL_W / 2} y={y + ROW_H / 2 + 4} textAnchor="middle"
                style={{ fontSize: "11px", fontWeight: "600", fill: slotTextColor(s) }}>
                {slotText(s)}
              </text>
              {ri === 0 && ci === 0 && (
                <text x={x + 4} y={y + 12} style={{ fontSize: "7px", fill: "rgba(1,14,30,0.3)" }}>
                  {times[0]}
                </text>
              )}
            </g>
          );
        })
      )}
    </g>
  );

  return (
    <div className="qual">
      <svg className="qual__svg" viewBox="0 0 800 210" role="img" aria-label="A rendszer emlékeztetőkkel teli tartja a naptárt">
        <line x1="400" y1="0" x2="400" y2="210" stroke="rgba(1,14,30,0.07)" strokeWidth="1" strokeDasharray="4 4" />
        {renderCal(before, 22, "RENDSZER NÉLKÜL", "rgba(1,14,30,0.38)")}
        {renderCal(after, 428, "A RENDSZERREL", "#6DBC61")}
      </svg>
      <div className="qual__legend">
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "rgba(196,108,100,0.5)" }} />No-show (emlékeztető nélkül)</span>
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "#6DBC61" }} />Megjelent (emlékeztető után)</span>
        <span className="qual__note">Az automatikus emlékeztető drasztikusan csökkenti az elmaradást — a naptár teli marad.</span>
      </div>
    </div>
  );
}

const GRAPHICS = [GfxFunnel, GfxCoverage, GfxSpeed, GfxCalendar];

export default function RealtimeDashboard() {
  const [tab, setTab] = useState(0);
  const panel = PANELS[tab];
  const Gfx = GRAPHICS[tab];

  return (
    <section className="dash">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Miért tér meg</span>
          <h2 className="dash__h">Drasztikusan magasabb konverzió.</h2>
          <p className="dash__p">
            Több érdeklőből lesz ügyfél — tökéletes minősítéssel, soha el nem
            felejtett utánkövetéssel. Csak a komoly vásárlók jutnak el Önhöz.
          </p>
          <p className="dash__exnote">
            Az alábbi példák illusztrálják, hogyan működik a rendszer.
          </p>
        </div>

        <div className="dash__card reveal" data-delay="1">
          <div className="dash__tabs" role="tablist">
            {PANELS.map((p, i) => (
              <button key={i} role="tab" aria-selected={tab === i}
                className={"dash__tab" + (tab === i ? " dash__tab--active" : "")}
                onClick={() => setTab(i)}>
                {p.tab}
              </button>
            ))}
          </div>

          <div className="dash__panel">
            <p className="dash__desc">{panel.desc}</p>

            <div className="dash__metrics">
              {panel.metrics.map((m, i) => (
                <div key={i}>
                  <div className="dash__metric-k">
                    <span className="dash__metric-dot" style={{ background: m.c }} />
                    {m.k}
                  </div>
                  <div className="dash__metric-v">{m.v}</div>
                  <div className="dash__metric-d flat">{m.d}</div>
                </div>
              ))}
            </div>

            {/* Outcome box — signal-tinted, replaces the red loss box */}
            <div className="dash__loss" style={{ borderColor: "color-mix(in srgb, var(--signal) 35%, var(--line))", background: "color-mix(in srgb, var(--signal) 6%, var(--bone))" }}>
              <div className="dash__loss-l">
                <div className="dash__loss-head">
                  <svg className="dash__loss-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--signal)" }}>
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  <span className="dash__loss-label" style={{ color: "var(--signal)" }}>{panel.gain.label}</span>
                </div>
                <span className="dash__loss-math">{panel.gain.note}</span>
              </div>
              <div className="dash__loss-v" style={{ color: "var(--signal)", fontSize: "clamp(13px, 1.6vw, 17px)", maxWidth: "240px", textAlign: "right", lineHeight: "1.3" }}>
                {panel.gain.v}
              </div>
            </div>

            <Gfx />
          </div>
        </div>
      </div>
    </section>
  );
}
