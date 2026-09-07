/* "Mi változott" — the dated facts about ChatGPT Ads in Hungary as three
   softly tinted cards, line icons in the tint's own hue. */

const FACTS = [
  {
    c: "var(--t-slate)",
    k: "Hol jelenik meg",
    t: "A válasz alatt, egy kártyán.",
    d: "Az ingyenes és a Go csomag felhasználói a válasz alatt egy megjelölt, szponzorált kártyát látnak — címmel, rövid leírással, képpel és linkkel. A kártya nem változtatja meg a választ.",
    ico: <g><path d="M20 11.5a2 2 0 0 1-2 2h-7l-4 3.5V13.5H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" /><rect x="6.5" y="16.5" width="11" height="4" rx="1" /></g>,
  },
  {
    c: "var(--t-teal)",
    k: "Mi hívja elő",
    t: "A kérdés témája, nem kulcsszó.",
    d: "Az jelenik meg, ami a beszélgetéshez illik. Európában induláskor nincs személyre szabás — a beszélgetés kontextusa, a nyelv és a hozzávetőleges hely számít.",
    ico: <g><circle cx="12" cy="12" r="8.5" /><path d="M9.6 10.2a2.4 2.4 0 1 1 3.2 2.3v1.3" /><path d="M12.8 16.4v.01" /></g>,
  },
  {
    c: "var(--t-sand)",
    k: "Mibe kerül a felület",
    t: "Napi minimum 5 500 Ft, az Ön fiókjából.",
    d: "Az önkiszolgáló hirdetéskezelő 2026 szeptemberétől érhető el európai hirdetőknek. A hirdetési fiók a cégé, a költést közvetlenül az OpenAI-nak fizeti — nálunk is így marad.",
    ico: <g><rect x="3.5" y="6" width="17" height="12" rx="2" /><path d="M3.5 10h17" /><path d="M7 14.5h3.5" /></g>,
  },
];

export default function WhatChangedChatgpt() {
  return (
    <section className="wpr cg-changed" id="mi-valtozott">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow cg-eyebrow-txt">Mi változott</span>
          <h2 className="dash__h">2026 augusztusától a ChatGPT-ben is megjelennek hirdetések Magyarországon.</h2>
        </div>

        <div className="cg-facts reveal" data-delay="1">
          {FACTS.map((f) => (
            <div className="cg-fact" style={{ ["--c" as string]: f.c }} key={f.k}>
              <span className="cg-fact__ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{f.ico}</svg>
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
