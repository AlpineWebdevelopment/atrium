/* Hero for /chatgpt-hirdetes — Atrium as the AI growth partner that runs a
   customer acquisition system on ChatGPT ads. Left: the promise and the one
   CTA. Right: a ChatGPT-style mockup of the sponsored card under an answer,
   labeled szemléltető — the same "this is what it looks like" proof the
   competitor leads with, in our own register.

   Signal rule: the wordmark dot in the nav is this page's one Signal moment;
   everything here stays Ink / Stone. */

export default function HeroChatgpt() {
  return (
    <section className="hero cg-hero" id="rendszer">
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__content reveal reveal--instant visible">
            <span className="hero__eyebrow">AI növekedési partner szolgáltató cégeknek.</span>
            <h1 className="hero__title cg-hero__title">
              Amikor valaki a ChatGPT-től kérdezi, kit hívjon, az Ön cégét ajánlja.
            </h1>
            <p className="hero__sub">
              A ChatGPT-ben 2026 augusztusától hirdetések jelennek meg Magyarországon. Mi beállítjuk, hogy az Ön szakmájában az Ön cége álljon a válasz alatt — és megcsináljuk hozzá a teljes ügyfélszerző rendszert: kérdéskutatás, ajánlat, hirdetés, céloldal, érdeklődő-kezelés, riport. Nem marketinget adunk el. Ügyfeleket szerzünk.
            </p>
            <div className="hero__actions">
              <a className="btn" href="#kapcsolat">Foglaljon időpontot.</a>
              <a className="btn btn--ghost" href="#rendszer-teljes">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                Mit csinálunk
              </a>
            </div>
            <p className="cg-hero__note">Ingyenes, 30 perces beszélgetés. Utána 48 órán belül kampányterv.</p>
          </div>

          {/* ChatGPT-style mockup: question → answer → sponsored card */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">így jelenik meg a válasz alatt · szemléltető</span>
            </div>
            <div className="canvas__stage cg-chat">
              <div className="cg-chat__msg cg-chat__msg--user">
                Kit hívjak, ha a héten kellene egy megbízható szakember, és nem akarok napokat várni a visszahívásra?
              </div>
              <div className="cg-chat__msg cg-chat__msg--ai">
                <p>Érdemes olyan céget választani, amelyik gyorsan visszahív, előre megmondja az árat, és időpontot ad a hétre. Néhány szempont, amit nézzen meg:</p>
                <ul>
                  <li>visszahívás órákon belül, nem napok múlva</li>
                  <li>írásos ajánlat a helyszíni felmérés előtt</li>
                  <li>valós, ellenőrizhető vélemények</li>
                </ul>
              </div>
              <div className="cg-chat__ad">
                <span className="cg-chat__ad-tag">Szponzorált</span>
                <span className="cg-chat__ad-logo">A.</span>
                <span className="cg-chat__ad-body">
                  <span className="cg-chat__ad-t">Az Ön cége</span>
                  <span className="cg-chat__ad-d">Visszahívás percek alatt, felmérés a héten. Írásos ajánlat, mielőtt bárki kijön.</span>
                  <span className="cg-chat__ad-link">azoncege.hu</span>
                </span>
              </div>
              <div className="cg-chat__foot">A hirdetés nem változtatja meg a választ. A kérdés pillanatában az Ön cége áll ott.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
