"use client";
import { useState } from "react";

/* The payback section. The brand does not publish a figure it cannot stand
   behind, so this section publishes no figure at all — the operator's own
   three inputs produce the number, and the copy says plainly that a bad
   estimate gives a bad result. Same three numbers the meeting starts from. */

const FIELDS = [
  {
    k: "lost" as const,
    label: "Havonta hány megkeresés vész el?",
    hint: "Nem fogadott hívás, megválaszolatlan űrlap, utánkövetetlen árajánlat együtt.",
    min: 0,
    max: 200,
    step: 1,
    suffix: "db / hó",
  },
  {
    k: "close" as const,
    label: "Ebből mennyi zárulna munkával?",
    hint: "A saját záródási aránya — ne a legjobb hónapot vegye.",
    min: 1,
    max: 100,
    step: 1,
    suffix: "%",
  },
  {
    k: "value" as const,
    label: "Mennyit ér egy átlagos munka?",
    hint: "Árbevétel egy megrendelésen, nem a haszon.",
    min: 10000,
    max: 5000000,
    step: 10000,
    suffix: "Ft",
  },
];

const huf = (n: number) => new Intl.NumberFormat("hu-HU").format(Math.round(n));

export default function DirectMath() {
  const [v, setV] = useState({ lost: 18, close: 30, value: 180000 });
  const monthly = v.lost * (v.close / 100) * v.value;

  return (
    <section className="dr-math">
      <div className="dr-wrap">
        <h2 className="dr-h2 reveal">Számolja ki a sajátját.</h2>
        <p className="dr-sub reveal" data-delay="1">
          Három szám kell hozzá. Mindhármat Ön adja meg — mi nem teszünk hozzá semmit.
        </p>

        <div className="dr-calc reveal" data-delay="2">
          <div className="dr-calc__fields">
            {FIELDS.map((f) => (
              <label className="dr-field" key={f.k}>
                <span className="dr-field__label">{f.label}</span>
                <span className="dr-field__row">
                  <input
                    className="dr-field__range"
                    type="range"
                    min={f.min}
                    max={f.max}
                    step={f.step}
                    value={v[f.k]}
                    onChange={(e) => setV({ ...v, [f.k]: Number(e.target.value) })}
                    aria-label={f.label}
                  />
                  <span className="dr-field__val">
                    {f.k === "value" ? huf(v[f.k]) : v[f.k]} <i>{f.suffix}</i>
                  </span>
                </span>
                <span className="dr-field__hint">{f.hint}</span>
              </label>
            ))}
          </div>

          <div className="dr-calc__out">
            <span className="dr-calc__out-label">Ennyi megy el havonta</span>
            <strong className="dr-calc__out-val">{huf(monthly)} Ft</strong>
            <span className="dr-calc__out-year">{huf(monthly * 12)} Ft egy év alatt</span>
            <p className="dr-calc__out-note">
              {v.lost} elveszett megkeresés × {v.close}% záródás × {huf(v.value)} Ft munka.
            </p>
          </div>
        </div>

        <p className="dr-math__honest reveal" data-delay="3">
          Ha a becslése rossz, ez a szám is rossz — ezért nem ezzel dolgozunk. A meetingen
          a valós hívásnaplójából és a kiküldött árajánlataiból pontosítjuk. A rendszer ára
          ugyanebből a számból jön ki: ha nem hozza vissza a költségét, nincs miről beszélni.
        </p>
      </div>
    </section>
  );
}
