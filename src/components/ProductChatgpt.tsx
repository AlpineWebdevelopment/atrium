/* "Mit csinálunk" — the customer acquisition system end to end. Everything
   the competitor lists as a service (question research, competitor analysis,
   offer, copy, campaign management, landing page, measurement, monthly
   consultation) plus the part nobody else covers: what happens to the lead
   after the click. */

const ICONS: Record<string, React.ReactNode> = {
  search:   <g><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></g>,
  compare:  <g><path d="M3 6h7M3 12h7M3 18h7" /><path d="M14 6h7M14 12h7M14 18h7" /></g>,
  offer:    <g><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" /><path d="M2 7h20v5H2z" /><path d="M12 22V7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></g>,
  pen:      <g><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></g>,
  ads:      <g><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 15l3-4 3 3 4-5" /></g>,
  page:     <g><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M7 14h6M7 17h10" /></g>,
  callback: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  bars:     <path d="M12 20V10M18 20V4M6 20v-6" />,
};

const STEPS = [
  { ic: "search",   c: "#628FBC", t: "Kérdéskutatás",            d: "Összegyűjtjük azokat a valós kérdéseket, amelyekre a ChatGPT az Ön cégét ajánlhatja — nem kulcsszavakat, hanem beszélgetéseket." },
  { ic: "compare",  c: "#62BCAC", t: "Versenytárs-elemzés",       d: "Megnézzük, ki hirdet már az Ön szakmájában és hol, és hova érdemes beállni, ahol még senki nem áll." },
  { ic: "offer",    c: "#9662BC", t: "Ajánlat kidolgozása",        d: "Három ajánlat-koncepció, nem egy variáció. Az, amire a kérdező tényleg kattint: gyors visszahívás, konkrét ár, konkrét határidő." },
  { ic: "pen",      c: "#BCA162", t: "Szövegírás és kreatív",      d: "A kártya címe, leírása, képe — a válasz nyelvén, az OpenAI szabályai szerint, hogy át is menjen az elbíráláson." },
  { ic: "ads",      c: "#AD83CC", t: "Kampánykezelés",             d: "Fiók, cégellenőrzés, kontextus-jelzések, büdzsé, optimalizálás. Az Ön fiókjában, az Ön nevén; a költést az OpenAI-nak fizeti." },
  { ic: "page",     c: "#628FBC", t: "Céloldal",                   d: "A kattintás egy oldalon landol, amit erre a kérdésre írtunk. Egy ajánlat, egy gomb, visszahívás-kérés. Az Öné marad." },
  { ic: "callback", c: "#010E1E", t: "Érdeklődő-kezelés",          d: "A beérkező érdeklődőt a rendszerünk percek alatt visszahívja, kvalifikálja és időpontot foglal — hogy a kattintásból ügyfél legyen, ne egy űrlap." },
  { ic: "bars",     c: "#62BCAC", t: "Mérés, riport, havi egyeztetés", d: "Havonta egy tiszta kép: hány kérdésre jelent meg, hány érdeklődő, hány ügyfél, mennyiért. És egy beszélgetés arról, mit változtatunk." },
];

export default function ProductChatgpt() {
  return (
    <section className="sys cg-sys" id="rendszer-teljes">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Mit csinálunk</span>
          <h2 className="dash__h">Nem hirdetést kezelünk. Ügyfélszerző rendszert építünk és üzemeltetünk.</h2>
          <p className="dash__p">
            A hirdetés csak az első lépés. Ami Önnek számít, az a végén van: az ügyfél, aki felhívta, időpontot kért, és eljött. Ezért az egész utat mi visszük, a kérdéstől a foglalásig.
          </p>
        </div>

        <div className="caps cg-caps reveal" data-delay="1">
          <div className="caps__grid cg-caps__grid cg-caps__grid--8">
            {STEPS.map((c, i) => (
              <div className="caps__item" key={i}>
                <span className="caps__ico" style={{ color: c.c }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICONS[c.ic]}</svg>
                </span>
                <span className="caps__t"><span className="cg-caps__n">0{i + 1}</span>{c.t}</span>
                <span className="caps__d">{c.d}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="sys__howline reveal cg-howline" data-delay="2">
          AI növekedési partnerként dolgozunk: ahol egy folyamat AI-val jobban megy — visszahívás, foglalás, utánkövetés, riport — ott AI-val csináljuk. Ahol nem, ott nem. A cél nem az AI, hanem az új ügyfél.
        </p>

        <div className="sec-cta reveal" data-delay="3">
          <a className="btn btn--lg" href="#kapcsolat">Foglaljon időpontot.</a>
        </div>
      </div>
    </section>
  );
}
