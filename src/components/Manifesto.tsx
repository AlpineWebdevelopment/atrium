/* ATRIUM-EDIT — Manifesto: two-column card, copy left + money art (coin stacks) right. */
const STACKS = [
  { x: 78, n: 3 },
  { x: 176, n: 5 },
  { x: 274, n: 7 },
];
const BASE_Y = 250;
const PITCH = 17;
const RX = 40;
const RY = 12;
const BODY = 14;

export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto__inner reveal">
        <div className="manifesto__text">
          <div className="manifesto__top" aria-hidden="true">
            <span className="manifesto__mark" />
            <span className="manifesto__hair" />
          </div>
          <h2 className="manifesto__h">
            Eddig az AI-ról beszéltek Önnek. Mi a pénzéről fogunk<span className="manifesto__dot">.</span>
          </h2>
          <p className="manifesto__p">
            Valószínűleg már jónéhány cég megkereste fényes AI-bemutatóval, ami a meetingen jól mutatott, aztán semmit nem hozott. Mi nem AI-t árulunk, hanem egy dolgot szüntetünk meg: a kieső bevételt. Nem dolgozunk kitalált statisztikákkal és esettanulmányokkal — és ha nem tudunk segíteni, nyíltan megmondjuk a meetingen.
          </p>
        </div>

        <div className="manifesto__art" aria-hidden="true">
          <svg viewBox="0 0 360 300" role="img" preserveAspectRatio="xMidYMid meet">
            {/* rising revenue trend + arrowhead */}
            <path className="mart-trend" d="M28,214 C96,196 128,164 176,142 C232,116 286,92 332,52" />
            <path className="mart-arrow" d="M309,49 L334,50 L330,74" />

            {/* coin stacks, increasing height left→right */}
            {STACKS.map((s, si) =>
              Array.from({ length: s.n }).map((_, i) => {
                const cy = BASE_Y - i * PITCH;
                const isTop = si === STACKS.length - 1 && i === s.n - 1;
                return (
                  <g key={`${si}-${i}`} className={isTop ? "mart-coin mart-coin--top" : "mart-coin"}>
                    <path className="mart-coin-side" d={`M${s.x - RX},${cy} v${BODY} a${RX},${RY} 0 0 0 ${RX * 2},0 v-${BODY}`} />
                    <ellipse className="mart-coin-top" cx={s.x} cy={cy} rx={RX} ry={RY} />
                  </g>
                );
              })
            )}

            {/* Ft mark on the tallest (recovered) coin */}
            <text className="mart-ft" x={274} y={BASE_Y - (7 - 1) * PITCH + 5} textAnchor="middle">Ft</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
