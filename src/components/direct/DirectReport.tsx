/* The dashboard gets a mention, not a mock-up: the surface is built for each
   client, so drawing one screen here would promise the wrong thing. Four
   columns, each with a small drawing; the fourth is the payback, and the only
   one that carries a coloured rule. No axes, no figures — shape and colour
   only, because a number here would be a claim we cannot back. */

const POINTS = [
  {
    k: "Amit lát",
    t: "Minden beszélgetés, egy helyen",
    d: "Hívás, üzenet, e-mail: visszahallgatható, a végeredménnyel együtt.",
    art: "rows" as const,
    c: "var(--viz-purple)",
  },
  {
    k: "Amit mér",
    t: "Azt, amit Ön akar mérni",
    d: "A mutatókat a bevezetéskor közösen tesszük rá. Nem sablon felületet kap.",
    art: "bars" as const,
    c: "var(--viz-blue)",
  },
  {
    k: "Amikor nézi",
    t: "Bármikor, mobilról is",
    d: "Nem havi riportra vár: belép, és látja a hetet.",
    art: "week" as const,
    c: "var(--viz-cyan)",
  },
  {
    k: "A megtérülés",
    t: "Látja, mennyit hozott",
    d: "Nem érzésre: a rendszerből jött munkák egy helyen, a díj mellett.",
    art: "line" as const,
    c: "var(--viz-green)",
    pay: true,
  },
];

function Art({ kind, c }: { kind: "rows" | "bars" | "week" | "line"; c: string }) {
  if (kind === "rows") {
    return (
      <svg viewBox="0 0 118 46" className="dr-art2" aria-hidden="true">
        {[6, 20, 34].map((y, i) => (
          <g key={y}>
            <circle cx="6" cy={y + 5} r="3.2" style={{ fill: i === 0 ? c : `color-mix(in srgb, ${c} 35%, transparent)` }} />
            <rect
              x="16" y={y + 2} width={i === 0 ? 86 : i === 1 ? 64 : 74} height="6" rx="3"
              style={{ fill: `color-mix(in srgb, ${c} ${i === 0 ? 55 : 22}%, transparent)` }}
            />
          </g>
        ))}
      </svg>
    );
  }
  if (kind === "bars") {
    return (
      <svg viewBox="0 0 118 46" className="dr-art2" aria-hidden="true">
        {[18, 30, 24, 40].map((h, i) => (
          <rect
            key={i} x={8 + i * 28} y={44 - h} width="18" height={h} rx="4"
            style={{ fill: `color-mix(in srgb, ${c} ${40 + i * 18}%, transparent)` }}
          />
        ))}
      </svg>
    );
  }
  if (kind === "week") {
    return (
      <svg viewBox="0 0 118 46" className="dr-art2" aria-hidden="true">
        {Array.from({ length: 7 }, (_, i) => (
          <rect
            key={i} x={6 + i * 16} y={14} width="11" height="11" rx="3"
            style={{ fill: i > 4 ? c : `color-mix(in srgb, ${c} 28%, transparent)` }}
          />
        ))}
        <rect x={6} y={32} width="43" height="4" rx="2" style={{ fill: `color-mix(in srgb, ${c} 22%, transparent)` }} />
      </svg>
    );
  }
  const d = "M4 40 L26 34 L48 30 L70 22 L92 16 L114 6";
  return (
    <svg viewBox="0 0 118 46" className="dr-art2 dr-art2--line" aria-hidden="true">
      <path d={`${d} L114 44 L4 44 Z`} style={{ fill: `color-mix(in srgb, ${c} 14%, transparent)` }} />
      <path d={d} style={{ stroke: c }} />
      <circle cx="114" cy="6" r="3.6" style={{ fill: c }} />
    </svg>
  );
}

export default function DirectReport() {
  return (
    <section className="dr-sec dr-rep-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">Saját irányítópult, az első naptól.</h2>
          <p className="dr-rep__sub reveal" data-delay="1">
            A felületet a cégére szabjuk, nem kész dobozt adunk. Egy dolgot
            mindegyik tud: megmutatja, mi történt, és mi lett belőle.
          </p>
        </div>

        <div className="dr-mention">
          {POINTS.map((p, i) => (
            <div
              className={`dr-mention__item${p.pay ? " dr-mention__item--pay" : ""} reveal`}
              data-delay={i + 1}
              key={p.k}
              style={p.pay ? { borderTopColor: p.c } : undefined}
            >
              <span className="dr-mention__k">{p.k}</span>
              <h3>{p.t}</h3>
              <Art kind={p.art} c={p.c} />
              <p>{p.d}</p>
            </div>
          ))}
        </div>

        <p className="dr-mention__foot reveal">
          A hozzáférés az Öné. Nem kell elhinnie, amit mondunk. Megnézheti.
        </p>
      </div>
    </section>
  );
}
