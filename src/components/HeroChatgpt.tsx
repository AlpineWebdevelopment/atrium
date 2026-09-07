/* Hero for /chatgpt-hirdetes — Atrium as the AI growth partner that runs a
   customer acquisition system on ChatGPT ads. Left: the promise with an
   underlined phrase and the one CTA. Right: a ChatGPT-style mockup of the
   sponsored card under an answer, tinted so the ad reads as the ad. */

export default function HeroChatgpt() {
  return (
    <section className="hero cg-hero" id="rendszer">
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__content reveal reveal--instant visible">
            <span className="hero__eyebrow cg-eyebrow"><i /> Új felület · ChatGPT-hirdetés magyar cégeknek</span>
            <h1 className="hero__title cg-hero__title">
              Amikor valaki a ChatGPT-től kérdezi, kit hívjon, <span className="cg-hl">az Ön cégét ajánlja.</span>
            </h1>
            <p className="hero__sub">
              A ChatGPT-ben 2026 augusztusától hirdetések jelennek meg Magyarországon. Mi beállítjuk, hogy az Ön szakmájában az Ön cége álljon a válasz alatt, és megcsináljuk hozzá a teljes ügyfélszerző rendszert: kérdéskutatás, ajánlat, hirdetés, céloldal, érdeklődő-kezelés, riport. Nem marketinget adunk el. Ügyfeleket szerzünk.
            </p>
            <div className="hero__actions">
              <a className="btn cg-btn" href="#kapcsolat">Foglaljon időpontot.</a>
              <a className="btn btn--ghost" href="#rendszer-teljes">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                Mit csinálunk
              </a>
            </div>
            <ul className="cg-hero__pills" aria-label="Amit az első beszélgetés után kap">
              <li style={{ ["--c" as string]: "var(--t-slate)" }}><i />Ingyenes, 30 perces beszélgetés</li>
              <li style={{ ["--c" as string]: "var(--t-sage)" }}><i />48 órán belül kampányterv</li>
              <li style={{ ["--c" as string]: "var(--t-clay)" }}><i />Egy szakmában, egy régióban egy cég</li>
            </ul>
          </div>

          {/* ChatGPT-style mockup: question → answer → sponsored card */}
          <div className="canvas cg-canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">így jelenik meg a válasz alatt · szemléltető</span>
            </div>
            <div className="canvas__stage cg-chat">
              <div className="cg-chat__msg cg-chat__msg--user">
                Kit hívjak, ha a héten kellene egy megbízható szakember, és nem akarok napokat várni a visszahívásra?
              </div>
              <div className="cg-chat__msg cg-chat__msg--ai">
                <span className="cg-chat__avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5l1.7 4.8 4.8 1.7-4.8 1.7L12 16.5l-1.7-4.8-4.8-1.7 4.8-1.7z" /></svg>
                </span>
                <div>
                  <p>Érdemes olyan céget választani, amelyik gyorsan visszahív, előre megmondja az árat, és időpontot ad a hétre. Néhány szempont:</p>
                  <ul>
                    <li>visszahívás órákon belül, nem napok múlva</li>
                    <li>írásos ajánlat a helyszíni felmérés előtt</li>
                    <li>valós, ellenőrizhető vélemények</li>
                  </ul>
                </div>
              </div>
              <div className="cg-chat__ad">
                <span className="cg-chat__ad-tag">Szponzorált</span>
                <span className="cg-chat__ad-logo">A.</span>
                <span className="cg-chat__ad-body">
                  <span className="cg-chat__ad-t">Az Ön cége</span>
                  <span className="cg-chat__ad-d">Visszahívás percek alatt, felmérés a héten. Írásos ajánlat, mielőtt bárki kijön.</span>
                  <span className="cg-chat__ad-link">azoncege.hu</span>
                </span>
                <span className="cg-chat__ad-cta">Visszahívást kérek</span>
              </div>
              <div className="cg-chat__foot">A hirdetés nem változtatja meg a választ. A kérdés pillanatában az Ön cége áll ott.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
