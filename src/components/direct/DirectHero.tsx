/* Hero on the Ink ground — the one dark opening the spec reserves for
   dramatic moments. The top bar lives inside it so the dark band runs from
   the very top. The CTA is the light pressable button. */
export default function DirectHero() {
  return (
    <section className="dr-hero">
      <header className="dr-top">
        <a className="dr-top__brand" href="/direct">Atrium<span className="dr-top__dot">.</span></a>
        <a className="dr-top__cta" href="/foglalas?from=direct">Foglaljon időpontot</a>
      </header>
      <div className="dr-wrap dr-hero__in">
        <span className="dr-eyebrow reveal">AI értékesítési rendszer · szolgáltató cégeknek</span>
        <h1 className="dr-h1 reveal" data-delay="1">
          Elég az<br />AI-cirkuszból.
        </h1>
        <p className="dr-lead reveal" data-delay="2">
          Mindenki AI-t árul: demókat, chatbotokat, jövőképeket. Mi AI értékesítési
          rendszert építünk — és bármit, ami ma gond a cégében és AI-jal megoldható.
          Nem bemutatjuk. Megcsináljuk, és forintban mérhető, mit hoz.
        </p>
        <div className="dr-cta-row reveal" data-delay="3">
          <a className="dr-btn dr-btn--light" href="/foglalas?from=direct">Foglaljon időpontot</a>
          <span className="dr-cta-note">30 perc. Nincs demó. Ha nem éri meg, megmondjuk.</span>
        </div>
        <ul className="dr-proof reveal" data-delay="4">
          <li>Élesben fut, nem demó</li>
          <li>Forintban mérve</li>
          <li>Prezentáció nélkül</li>
        </ul>
      </div>
    </section>
  );
}
