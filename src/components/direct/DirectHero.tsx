/* Hero. Same bone ground as the rest of the page, centred. The page hangs on
   one shared feeling: everyone is sick of the AI circus — the buyer, and us.
   We do not just decline it, we condemn it, then say plainly what we sell. */
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
          Elegünk van az<br />AI-cirkuszból.
        </h1>
        <p className="dr-lead reveal" data-delay="2">
          Önnek is, tudjuk. A demók, a chatbotok, a „forradalmi" AI-megoldások,
          amik egy forintot nem hoztak még soha, senkinek. Mi ezt a cirkuszt
          belülről nézzük — és megvetjük. AI értékesítési rendszert építünk, meg
          bármit, ami a cégében valódi gond és AI-jal megoldható. Élesben.
          Forintban mérve.
        </p>
        <div className="dr-cta-row reveal" data-delay="3">
          <a className="dr-btn" href="/foglalas?from=direct">Foglaljon időpontot</a>
          <span className="dr-cta-note">30 perc. Nulla vetítés. Ha nem éri meg, kimondjuk.</span>
        </div>
        <ul className="dr-proof reveal" data-delay="4">
          <li>Nem demó</li>
          <li>Nem chatbot</li>
          <li>Nem prezentáció</li>
        </ul>
      </div>
    </section>
  );
}
