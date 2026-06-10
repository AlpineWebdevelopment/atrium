"use client";
import { useState } from "react";

/* The one named product: the AI qualifier CRM.
   Four tabs walk a lead through it — arrive, qualify, score, handoff. */

const TABS = [
  {
    t: "Beérkezés",
    desc: "Telefon, űrlap, Messenger, e-mail — minden érdeklődő ugyanabba a rendszerbe érkezik.",
  },
  {
    t: "Kvalifikálás",
    desc: "A rendszer felteszi a kérdéseket, amiket Ön tenne fel — természetes magyar nyelven.",
  },
  {
    t: "Pontozás",
    desc: "Minden érdeklődő pontszámot kap: ki komoly, és ki csak nézelődik.",
  },
  {
    t: "Átadás",
    desc: "A komoly érdeklődő időponttal érkezik az Ön CRM-jébe. A többi nem viszi el az idejét.",
  },
];

/* ---- 1: channels converging into one system ---- */
function GfxInbound() {
  const sources = [
    { b: "Telefon", y: 40 },
    { b: "Webes űrlap", y: 110 },
    { b: "Messenger", y: 180 },
    { b: "E-mail", y: 250 },
  ];
  return (
    <div className="qcrm__chart">
      <svg className="qcrm__svg" viewBox="0 0 1000 290" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gIn" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(124,92,255,0.55)" />
            <stop offset="100%" stopColor="#4AA3FF" />
          </linearGradient>
        </defs>
        {sources.map((s, i) => (
          <path
            key={i}
            d={`M190,${s.y} C450,${s.y} 560,145 780,145`}
            fill="none"
            stroke="url(#gIn)"
            strokeWidth="1.8"
            opacity="0.7"
          />
        ))}
        {sources.map((s, i) => (
          <circle key={i} cx="190" cy={s.y} r="6" fill="#7C5CFF" stroke="var(--bone)" strokeWidth="3" />
        ))}
        <circle cx="780" cy="145" r="8" fill="#4AA3FF" stroke="var(--bone)" strokeWidth="3" />
      </svg>
      {sources.map((s, i) => (
        <div className="funnel__stage" key={i} style={{ left: "9%", top: `${(s.y / 290) * 100}%` }}>
          <b>{s.b}</b>
        </div>
      ))}
      <div className="funnel__stage" style={{ left: "80%", top: "50%" }}>
        <b>Egy rendszer</b><span>semmi nem vész el</span>
      </div>
    </div>
  );
}

/* ---- 2: qualification — questions, then a fork ---- */
function GfxQualify() {
  return (
    <div className="qcrm__chart">
      <svg className="qcrm__svg" viewBox="0 0 1000 290" preserveAspectRatio="none">
        <path d="M110,145 C250,145 280,145 360,145" fill="none" stroke="rgba(1,14,30,0.18)" strokeWidth="1.8" />
        <path d="M560,145 C660,145 700,75 800,75" fill="none" stroke="rgba(109,188,97,0.6)" strokeWidth="2" />
        <path d="M560,145 C660,145 700,215 800,215" fill="none" stroke="rgba(1,14,30,0.15)" strokeWidth="1.8" />
        <circle cx="110" cy="145" r="6" fill="#7C5CFF" stroke="var(--bone)" strokeWidth="3" />
        <circle cx="800" cy="75" r="6" fill="#6DBC61" stroke="var(--bone)" strokeWidth="3" />
        <circle cx="800" cy="215" r="6" fill="#8C8579" stroke="var(--bone)" strokeWidth="3" />
      </svg>
      <div className="funnel__stage" style={{ left: "11%", top: "32%" }}>
        <b>Új érdeklődő</b>
      </div>
      <div className="funnel__stage" style={{ left: "46%", top: "22%" }}>
        <b>Pontosan mire van szüksége?</b>
      </div>
      <div className="funnel__stage" style={{ left: "46%", top: "50%" }}>
        <b>Mikorra tervezi?</b>
      </div>
      <div className="funnel__stage" style={{ left: "46%", top: "78%" }}>
        <b>Mekkora a keret?</b>
      </div>
      <div className="funnel__stage funnel__stage--sig" style={{ left: "86%", top: "26%" }}>
        <b>Komoly</b><span>időpont</span>
      </div>
      <div className="funnel__stage" style={{ left: "86%", top: "74%" }}>
        <b>Még nem</b><span>utánkövetés</span>
      </div>
    </div>
  );
}

/* ---- 3: scoring bars ---- */
function GfxScore() {
  const rows = [
    { k: "Időpontot kérne a héten", v: "forró", w: "88%", c: "#6DBC61" },
    { k: "Árat kérdez, határidőt mond", v: "meleg", w: "56%", c: "#E8A33D" },
    { k: "Csak nézelődik", v: "hideg", w: "20%", c: "#8C8579" },
  ];
  return (
    <div className="perf__bars qcrm__bars">
      {rows.map((b, i) => (
        <div key={i}>
          <div className="perf__bar-top">
            <span className="perf__bar-k">{b.k}</span>
            <span className="perf__bar-v">{b.v}</span>
          </div>
          <div className="perf__bar-track">
            <div className="perf__bar-fill" style={{ width: b.w, background: b.c }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---- 4: handoff pipeline ---- */
function GfxHandoff() {
  const cols: { d: string; slots: { cls: string; t: string }[] }[] = [
    {
      d: "Új megkeresés",
      slots: [{ cls: "", t: "" }, { cls: "", t: "" }, { cls: "", t: "" }],
    },
    {
      d: "Kvalifikált",
      slots: [{ cls: "cal__slot--book", t: "" }, { cls: "cal__slot--book", t: "" }],
    },
    {
      d: "Időpont foglalva",
      slots: [{ cls: "cal__slot--book", t: "kedd 14:30" }],
    },
  ];
  return (
    <div className="cal qcrm__cal" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
      {cols.map((c, i) => (
        <div className="cal__col" key={i}>
          <div className="cal__day">{c.d}</div>
          {c.slots.map((s, j) => (
            <div className={"cal__slot " + s.cls} key={j}>{s.t}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

const GRAPHICS = [GfxInbound, GfxQualify, GfxScore, GfxHandoff];

const BENEFITS = [
  { b: "Személyre szabva", s: "az Ön folyamatára és kérdéseire építve" },
  { b: "Saját CRM", s: "az adatok az Ön rendszerében, nem egy bérelt felületen" },
  { b: "Több időpont", s: "ugyanannyi érdeklődőből — mert egy sem vész el útközben" },
  { b: "Költséghatékony", s: "a nap minden órájában dolgozik, kérdésenként ugyanolyan türelmes" },
];

export default function QualifierCrm() {
  const [tab, setTab] = useState(0);
  const Gfx = GRAPHICS[tab];

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

        <div className="qcrm__grid reveal" data-delay="1">
          <div className="dash__card qcrm__card">
            <div className="dash__tabs" role="tablist">
              {TABS.map((t, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={tab === i}
                  className={"dash__tab" + (tab === i ? " dash__tab--active" : "")}
                  onClick={() => setTab(i)}
                >
                  {i + 1} · {t.t}
                </button>
              ))}
            </div>
            <div className="qcrm__panel">
              <p className="dash__desc">{TABS[tab].desc}</p>
              <Gfx />
            </div>
          </div>

          <ul className="qcrm__list">
            {BENEFITS.map((f, i) => (
              <li className="qcrm__item" key={i}>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <div>
                  <b>{f.b}</b>
                  <span>{f.s}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
