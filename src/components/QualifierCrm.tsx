"use client";
import { useState } from "react";

/* The one named product: the AI qualifier CRM.
   The benefit list on the right drives the graph in the card. */

/* ---- 1: sized to the company ---- */
function GfxSized() {
  const cols: { d: string; slots: string[] }[] = [
    { d: "Kis cég", slots: ["kvalifikáció", "időpont"] },
    { d: "Közepes cég", slots: ["kvalifikáció", "időpont", "utánkövetés"] },
    { d: "Nagy cég", slots: ["kvalifikáció", "időpont", "utánkövetés", "riportálás", "több telephely"] },
  ];
  return (
    <div className="cal qcrm__cal" style={{ gridTemplateColumns: "repeat(3, 1fr)", alignItems: "end" }}>
      {cols.map((c, i) => (
        <div className="cal__col" key={i}>
          <div className="cal__day">{c.d}</div>
          {c.slots.map((s, j) => (
            <div className="cal__slot cal__slot--book" key={j}>{s}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ---- 2: your own CRM, not a rented platform ---- */
function GfxOwnCrm() {
  return (
    <div className="qcrm__own">
      <div className="qcrm__own-box">
        <b>Az Ön CRM-je</b>
        <span>minden adat itt marad</span>
        <div className="qcrm__dots">
          {Array.from({ length: 21 }).map((_, i) => (
            <i key={i} />
          ))}
        </div>
      </div>
      <div className="qcrm__own-box qcrm__own-box--dim">
        <b>Bérelt felület</b>
        <span>havidíj, az adat máshol</span>
        <div className="qcrm__dots qcrm__dots--dim">
          {Array.from({ length: 6 }).map((_, i) => (
            <i key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---- 3: more bookings from the same leads ---- */
function GfxConversion() {
  const without = [true, false, true, false, false, true, false, false];
  const withSys = [true, true, true, true, true, true, true, true];
  return (
    <div className="qcrm__conv">
      <div className="qcrm__lane">
        <span className="qcrm__lane-k">Rendszer nélkül</span>
        <span className="qcrm__lane-dots">
          {without.map((ok, i) => (
            <i key={i} className={ok ? "" : "lost"} />
          ))}
        </span>
        <span className="qcrm__lane-end">foghíjas naptár</span>
      </div>
      <div className="qcrm__lane">
        <span className="qcrm__lane-k">A rendszerrel</span>
        <span className="qcrm__lane-dots">
          {withSys.map((ok, i) => (
            <i key={i} className={ok ? "" : "lost"} />
          ))}
        </span>
        <span className="qcrm__lane-end qcrm__lane-end--sig">tele naptár</span>
      </div>
      <p className="qcrm__note">Ugyanannyi érdeklődő. A különbség az, hány ér célba.</p>
    </div>
  );
}

/* ---- 4: cost-effective vs an employee ---- */
function GfxCost() {
  const rows = [
    { k: "Elérhetőség", a: "munkatárs · 8 óra", aw: "33%", b: "a rendszer · 0–24", bw: "100%" },
    { k: "Türelem", a: "a nap végére fogy", aw: "44%", b: "az ezredik kérdésnél is ugyanaz", bw: "100%" },
    { k: "Utánkövetés", a: "néha kimarad", aw: "55%", b: "soha nem felejt el visszahívni", bw: "100%" },
  ];
  return (
    <div className="qcrm__cmp">
      {rows.map((r, i) => (
        <div className="qcrm__cmp-row" key={i}>
          <span className="qcrm__cmp-k">{r.k}</span>
          <div className="qcrm__cmp-bars">
            <div className="qcrm__cmp-bar">
              <i style={{ width: r.aw, background: "var(--ink-35)" }} />
              <em>{r.a}</em>
            </div>
            <div className="qcrm__cmp-bar">
              <i style={{ width: r.bw, background: "var(--signal)" }} />
              <em>{r.b}</em>
            </div>
          </div>
        </div>
      ))}
      <p className="qcrm__note">És összességében kevesebbe kerül, mint egy munkatárs.</p>
    </div>
  );
}

const BENEFITS = [
  {
    b: "Személyre szabva",
    s: "az Ön cégméretére, folyamatára és kérdéseire építve",
    desc: "Kis rendelő vagy többtelephelyes cég — a rendszer az Ön méretére épül, az Ön kérdéseivel kvalifikál.",
    Gfx: GfxSized,
  },
  {
    b: "Saját CRM",
    s: "az adatok az Ön rendszerében, nem egy bérelt felületen",
    desc: "Minden érdeklődő, minden beszélgetés, minden időpont az Ön CRM-jében marad — nem egy felületen, amit bérel.",
    Gfx: GfxOwnCrm,
  },
  {
    b: "Több időpont",
    s: "ugyanannyi érdeklődőből — mert egy sem vész el útközben",
    desc: "A konverzió ott nő, ahol eddig veszett el: minden érdeklődő választ kap, kvalifikálva ér Önhöz, és időpontig jut.",
    Gfx: GfxConversion,
  },
  {
    b: "Költséghatékony",
    s: "a nap minden órájában dolgozik, és kevesebbe kerül, mint egy munkatárs",
    desc: "Nem fárad, nem felejt, éjjel is felveszi — ugyanazt a munkát többet bírja, és kevesebbe kerül.",
    Gfx: GfxCost,
  },
];

export default function QualifierCrm() {
  const [idx, setIdx] = useState(0);
  const { desc, Gfx } = BENEFITS[idx];

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
            <div className="qcrm__panel">
              <p className="dash__desc">{desc}</p>
              <Gfx />
            </div>
          </div>

          <div className="qcrm__list" role="tablist" aria-label="Miért ez a CRM">
            {BENEFITS.map((f, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={idx === i}
                className={"qcrm__item" + (idx === i ? " qcrm__item--active" : "")}
                onClick={() => setIdx(i)}
              >
                <b>{f.b}</b>
                <span>{f.s}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
