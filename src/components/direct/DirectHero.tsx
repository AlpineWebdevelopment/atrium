/* Hero. Harsh and short: one claim, one line on where the money goes, one
   action. No product label, no feature list — the page argues cost and
   speed, and the call explains the rest. */
export default function DirectHero() {
  return (
    <section className="dr-hero">
      <div className="dr-wrap">
        <span className="dr-eyebrow reveal">Szolgáltató cégeknek</span>
        <h1 className="dr-h1 reveal" data-delay="1">
          Minden nap pénzt<br />hagy az asztalon.
        </h1>
        <p className="dr-lead reveal" data-delay="2">
          Nem a piac a gond, és nem is a hirdetés. Hanem az, ami a megkeresés után
          történik — vagy nem történik. Kiszámoljuk, mennyibe kerül ez Önnek, és
          rendbe tesszük.
        </p>
        <div className="dr-cta-row reveal" data-delay="3">
          <a className="dr-btn" href="/foglalas?from=direct">Foglaljon időpontot</a>
          <span className="dr-cta-note">
            30 perc. Az Ön számaival. Ha nem éri meg, megmondjuk.
          </span>
        </div>
      </div>
    </section>
  );
}
