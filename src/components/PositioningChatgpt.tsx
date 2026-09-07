/* "Hol szivárog" — problem-led. The leak is not the ad; the leak is what
   happens after the click. No numbers, no studies. */

const LEAKS = [
  {
    n: "01",
    b: "Az űrlap, ami órákig áll.",
    s: "A kattintás beérkezik, az űrlap kitöltve. Valaki holnap ránéz. Az érdeklődő addigra a következő cégnél jár.",
  },
  {
    n: "02",
    b: "A hívás, ami hangpostára megy.",
    s: "Este, hétvégén, vagy amikor a kollégák másik vonalon vannak. A hívó nem hagy üzenetet — tovább keres.",
  },
  {
    n: "03",
    b: "Az ajánlat, amire senki nem kérdez rá.",
    s: "Az árajánlat kimegy, aztán csend. Az érdeklődő nem döntött ellene, csak nem hívta vissza senki.",
  },
];

export default function PositioningChatgpt() {
  return (
    <section className="wpr cg-leak" id="problema">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Hol szivárog</span>
          <h2 className="dash__h">A hirdetés megveszi a pillanatot. Ami utána történik, az viszi el a pénzt.</h2>
          <p className="dash__p">
            Egy ChatGPT-ből érkező kattintás mögött olyan ember áll, aki éppen dönt. Összehasonlít, kérdez, és tíz percen belül továbblép. A kattintás egy weboldalon landol, űrlap vagy telefonhívás lesz belőle — és aztán megtörténik a szokásos: valaki másnap ér rá, vagy senki.
          </p>
        </div>
        <div className="wpr__grid cg-leak__grid reveal" data-delay="1">
          {LEAKS.map((l) => (
            <div className="wpr__item" key={l.n}>
              <span className="wpr__n">{l.n}</span>
              <span className="wpr__t">
                <span className="cg-lead">{l.b}</span>
                <br />
                {l.s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
