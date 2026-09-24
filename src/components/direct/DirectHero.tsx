/* Hero. The subject must land in one glance — the AI talk being sold
   everywhere, in every form — together with our verdict on it. The hook is
   the paradox: we hate it too, and we build AI for a living.

   A rounded sky band: a real sky photograph behind white copy, nothing
   else — the picture carries the mood, the words carry the argument. */

export default function DirectHero() {
  return (
    <section className="sk-hero">
      <div className="sk-hero__bg" aria-hidden="true" />
      <header className="sk-top">
        <a className="sk-top__brand" href="/direct">Atrium<i /></a>
        <nav className="sk-top__nav">
          <a href="/szolgaltatasok">Szolgáltatások</a>
          <a href="#hogyan">Hogyan dolgozunk</a>
        </nav>
        <a className="sk-top__cta" href="/foglalas?from=direct">Foglaljon időpontot</a>
      </header>
      <div className="sk-in">
        <span className="sk-pill reveal"><b>Új</b>Már WhatsAppon és Viberen is válaszol</span>
        <h1 className="sk-h1 reveal" data-delay="1">
          Unalmas már a sok szép{" "}
          <em className="sk-q">
            „AI-show”
            <svg className="sk-q__line" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 5.2 C42 2.4 88 6.4 136 3.4 C160 2 180 4.6 198 2.6" />
            </svg>
          </em>
          ,
          <span>ami egy forintot se hoz?</span>
        </h1>
        <p className="sk-lead reveal" data-delay="2">
          Nálunk az első kérdés nem az, hogy mit tud az AI. Hanem az, hogy mennyit hoz.
          Egy rendszer, ami fogad, foglal, utánkövet — és hetente megmutatja, mi lett belőle.
        </p>
        <div className="sk-ctas reveal" data-delay="2">
          <a className="sk-btn" href="/foglalas?from=direct">Foglaljon időpontot</a>
          <a className="sk-btn sk-btn--ghost" href="#hogyan">Hogyan működik</a>
        </div>
        <ul className="sk-proof reveal" data-delay="3">
          <li>Fél óra, nem prezentáció</li>
          <li>Az Ön számaiból</li>
          <li>Ha nem éri meg, megmondjuk</li>
        </ul>
      </div>
    </section>
  );
}
