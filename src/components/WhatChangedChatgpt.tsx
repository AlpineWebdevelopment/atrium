/* "Mi változott" — the dated facts about ChatGPT Ads in Hungary as three
   tinted fact cards. The one currency figure (5 500 Ft) is OpenAI's own
   minimum daily budget. */

const FACTS = [
  {
    c: "var(--viz-purple)",
    k: "Hol jelenik meg",
    t: "A válasz alatt, egy kártyán.",
    d: "Az ingyenes és a Go csomag felhasználói a válasz alatt egy megjelölt, szponzorált kártyát látnak — címmel, rövid leírással, képpel és linkkel. A kártya nem változtatja meg a választ.",
    ico: <g><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 9h8M8 13h5" /></g>,
  },
  {
    c: "var(--viz-blue)",
    k: "Mi hívja elő",
    t: "A kérdés témája, nem kulcsszó.",
    d: "Az jelenik meg, ami a beszélgetéshez illik. Európában induláskor nincs személyre szabás — a beszélgetés kontextusa, a nyelv és a hozzávetőleges hely számít.",
    ico: <g><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></g>,
  },
  {
    c: "var(--viz-amber)",
    k: "Mibe kerül a felület",
    t: "Napi minimum 5 500 Ft, az Ön fiókjából.",
    d: "Az önkiszolgáló hirdetéskezelő 2026 szeptemberétől érhető el európai hirdetőknek. A hirdetési fiók a cégé, a költést közvetlenül az OpenAI-nak fizeti — nálunk is így marad.",
    ico: <g><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18" /><path d="M7 15h3" /></g>,
  },
];

export default function WhatChangedChatgpt() {
  return (
    <section className="wpr cg-changed" id="mi-valtozott">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow cg-eyebrow-txt" style={{ color: "var(--viz-purple)" }}>Mi változott</span>
          <h2 className="dash__h">2026 augusztusától a ChatGPT-ben is megjelennek hirdetések Magyarországon.</h2>
        </div>

        <div className="cg-facts reveal" data-delay="1">
          {FACTS.map((f) => (
            <div className="cg-fact" style={{ ["--c" as string]: f.c }} key={f.k}>
              <span className="cg-fact__ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{f.ico}</svg>
              </span>
              <span className="cg-fact__k">{f.k}</span>
              <span className="cg-fact__t">{f.t}</span>
              <span className="cg-fact__d">{f.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
