/* Hero. The subject must land in one glance — the AI talk being sold
   everywhere, in every form — together with our verdict on it. The hook is
   the paradox: we hate it too, and we build AI for a living. */
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
          Mi is utáljuk<br />az AI-show-t.
        </h1>
        <p className="dr-lead reveal" data-delay="2">
          Pedig AI-ból élünk. Pont ezért fáj nézni, mit adnak el ezen a néven:
          villogó demót, okoskodó chatbotot, forró levegőt. Kimondjuk, amit Ön is
          gondol: ez átverés. Mi AI értékesítési rendszert építünk, ami
          megrendelést hoz — és megoldjuk, ami a cégében AI-jal tényleg megoldható.
        </p>
        <div className="dr-cta-row reveal" data-delay="3">
          <a className="dr-btn" href="/foglalas?from=direct">Foglaljon időpontot</a>
          <span className="dr-cta-note">Fél óra. Egyenes válaszokkal távozik.</span>
        </div>
        <ul className="dr-proof reveal" data-delay="4">
          <li>Nincs demó</li>
          <li>Nincs dia</li>
          <li>Nincs ígérgetés</li>
        </ul>
      </div>
    </section>
  );
}
