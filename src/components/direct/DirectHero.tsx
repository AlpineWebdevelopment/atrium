/* Hero. Same bone ground as the rest of the page, centred. Money-first and
   second-person: AI has only taken their money so far — we build the kind
   that brings it back, and we say so without any stagecraft. */
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
          Az AI eddig csak<br />vitte a pénzét.
        </h1>
        <p className="dr-lead reveal" data-delay="2">
          Fizetett már demóért, chatbotért, tanácsadásért — és maradt utánuk bármi?
          Mi arra szerződünk, ami marad. AI értékesítési rendszert építünk, ami a
          megkeresésből megrendelést csinál. És ha más éget pénzt a cégében, azt is
          megoldjuk, ha AI-jal megoldható.
        </p>
        <div className="dr-cta-row reveal" data-delay="3">
          <a className="dr-btn" href="/foglalas?from=direct">Foglaljon időpontot</a>
          <span className="dr-cta-note">Fél óra. Egyenes válaszokkal távozik.</span>
        </div>
        <ul className="dr-proof reveal" data-delay="4">
          <li>Nincs demó</li>
          <li>Nincs dia</li>
          <li>Nincs duma</li>
        </ul>
      </div>
    </section>
  );
}
