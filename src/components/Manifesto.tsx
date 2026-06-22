/* ATRIUM-EDIT — Manifesto: two-column layout with a revenue-gap chart beside the copy. */
export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto__grid reveal">
        <div className="manifesto__inner">
          <h2 className="manifesto__h">
            Eddig az AI-ról beszéltek Önnek. Mi a pénzéről beszélünk.
          </h2>
          <p className="manifesto__p">
            Önt valószínűleg már megkereste pár cég fényes AI-bemutatóval, ami a meetingen jól mutatott, aztán semmit nem hozott. Mi nem AI-t árulunk, hanem egy dolgot szüntetünk meg: a kieső bevételt. Nem dolgozunk kitalált statisztikákkal és esettanulmányokkal — és ha nem tudunk segíteni, nyíltan megmondjuk a meetingen. A látványosság nem a mi dolgunk — az Ön bevétele az.
          </p>
        </div>

        <figure className="manifesto__viz" aria-label="A kieső és a visszaszerzett bevétel viszonya az idő függvényében.">
          <svg viewBox="0 0 440 300" role="img" preserveAspectRatio="xMidYMid meet">
            {/* baseline + verticals */}
            <line className="mviz-axis" x1="40" y1="248" x2="408" y2="248" />
            <line className="mviz-axis-y" x1="40" y1="40" x2="40" y2="248" />

            {/* the gap = lost revenue, closing to the right */}
            <path
              className="mviz-gap"
              d="M40,200 L130,178 L220,150 L312,105 L400,62 L400,58 L312,68 L220,80 L130,95 L40,110 Z"
            />

            {/* potential revenue (where it could be) */}
            <polyline className="mviz-potential" points="40,110 130,95 220,80 312,68 400,58" />

            {/* realized revenue, rising to close the gap */}
            <polyline className="mviz-actual" points="40,200 130,178 220,150 312,105 400,62" />

            {/* node where the gap is eliminated */}
            <circle className="mviz-dot" cx="400" cy="60" r="4.5" />

            {/* labels */}
            <text className="mviz-label" x="150" y="138">kieső bevétel</text>
            <text className="mviz-label mviz-label--accent" x="300" y="44">visszaszerzett</text>
          </svg>
          <figcaption className="manifesto__cap">A rés, amit megszüntetünk — az idő függvényében.</figcaption>
        </figure>
      </div>
    </section>
  );
}
