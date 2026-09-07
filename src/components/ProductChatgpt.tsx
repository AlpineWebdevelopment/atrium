/* "Mit csinálunk" — the customer acquisition system end to end, as eight
   tiles. Each tile carries a muted, desaturated tint from a five-hue family
   and a thin line icon in that same hue — no filled badges, no candy
   pastels. One cell stays dark: the step that is the actual differentiator,
   what happens to the lead after the click. */

const ICONS: Record<string, React.ReactNode> = {
  // magnifier over a conversation — real questions, not keywords
  research: <g><path d="M20 13.5a2 2 0 0 1-2 2h-6l-4 3.5V15.5H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" /><circle cx="11.2" cy="10" r="2.6" /><path d="M13.2 12l1.9 1.9" /></g>,
  // two unequal columns — who is already there, where the gap is
  rivals: <g><path d="M4 20h16" /><rect x="5.5" y="12" width="4.5" height="8" /><rect x="14" y="6" width="4.5" height="14" /><path d="M7.75 9.5V7M16.25 3.5V6" /></g>,
  // three stacked offers, the top one chosen
  offer: <g><rect x="6" y="4" width="12" height="6" rx="1.5" /><path d="M4.5 12.5h15M6 16h12M8 19.5h8" /></g>,
  // pen nib
  pen: <g><path d="M12 3.5 5.5 17 12 20.5 18.5 17z" /><path d="M12 3.5V20.5" /><path d="M8.4 12.8h7.2" /></g>,
  // faders — campaign settings under control
  campaign: <g><path d="M5 4v6M5 14v6M12 4v3M12 11v9M19 4v9M19 17v3" /><circle cx="5" cy="12" r="2" /><circle cx="12" cy="9" r="2" /><circle cx="19" cy="15" r="2" /></g>,
  // a page with one offer and one button
  page: <g><rect x="3.5" y="4.5" width="17" height="15" rx="2" /><path d="M3.5 8.5h17" /><path d="M7 12h6" /><rect x="7" y="15" width="7" height="2.5" rx="1.25" /></g>,
  // phone with an outbound arrow — the callback
  callback: <g><path d="M21 16.9v2.6a1.8 1.8 0 0 1-2 1.8 18.4 18.4 0 0 1-8-2.9 18.1 18.1 0 0 1-5.6-5.6 18.4 18.4 0 0 1-2.9-8.1A1.8 1.8 0 0 1 4.3 3h2.6a1.8 1.8 0 0 1 1.8 1.6c.1.9.3 1.7.6 2.5a1.8 1.8 0 0 1-.4 1.9L7.8 10.2a14.6 14.6 0 0 0 5.5 5.5l1.2-1.1a1.8 1.8 0 0 1 1.9-.4c.8.3 1.6.5 2.5.6A1.8 1.8 0 0 1 21 16.9z" /><path d="M15.5 8.5 21 3M21 8.5V3h-5.5" /></g>,
  // a line going up over a baseline
  report: <g><path d="M4 4v16h16" /><path d="M7.5 15.5 11 11l3 2.5 5-6.5" /><path d="M16.5 7h2.5v2.5" /></g>,
};

const STEPS = [
  { ic: "research", c: "var(--t-slate)", t: "Kérdéskutatás",              d: "Összegyűjtjük azokat a valós kérdéseket, amelyekre a ChatGPT az Ön cégét ajánlhatja, nem kulcsszavakat, hanem beszélgetéseket." },
  { ic: "rivals",   c: "var(--t-teal)",  t: "Versenytárs-elemzés",        d: "Megnézzük, ki hirdet már az Ön szakmájában és hol, és hova érdemes beállni, ahol még senki nem áll." },
  { ic: "offer",    c: "var(--t-sage)",  t: "Ajánlat kidolgozása",        d: "Három ajánlat-koncepció, nem egy variáció. Az, amire a kérdező tényleg kattint: gyors visszahívás, konkrét ár, konkrét határidő." },
  { ic: "pen",      c: "var(--t-sand)",  t: "Szövegírás és kreatív",      d: "A kártya címe, leírása, képe, a válasz nyelvén, az OpenAI szabályai szerint, hogy át is menjen az elbíráláson." },
  { ic: "campaign", c: "var(--t-clay)",  t: "Kampánykezelés",             d: "Fiók, cégellenőrzés, kontextus-jelzések, büdzsé, optimalizálás. Az Ön fiókjában, az Ön nevén; a költést az OpenAI-nak fizeti." },
  { ic: "page",     c: "var(--t-plum)",  t: "Céloldal",                   d: "A kattintás egy oldalon landol, amit erre a kérdésre írtunk. Egy ajánlat, egy gomb, visszahívás-kérés. Az Öné marad." },
  { ic: "callback", c: "",               t: "Érdeklődő-kezelés",          d: "A beérkező érdeklődőt a rendszerünk percek alatt visszahívja, kvalifikálja és időpontot foglal, hogy a kattintásból ügyfél legyen, ne egy űrlap.", dark: true },
  { ic: "report",   c: "var(--t-slate)", t: "Mérés, riport, havi egyeztetés", d: "Havonta egy tiszta kép: hány kérdésre jelent meg, hány érdeklődő, hány ügyfél, mennyiért. És egy beszélgetés arról, mit változtatunk." },
];

export default function ProductChatgpt() {
  return (
    <section className="sys cg-sys" id="rendszer-teljes">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow cg-eyebrow-txt">Mit csinálunk</span>
          <h2 className="dash__h">Nem hirdetést kezelünk. Ügyfélszerző rendszert építünk és üzemeltetünk.</h2>
          <p className="dash__p">
            A hirdetés csak az első lépés. Ami Önnek számít, az a végén van: az ügyfél, aki felhívta, időpontot kért, és eljött. Ezért az egész utat mi visszük, a kérdéstől a foglalásig.
          </p>
        </div>

        <div className="cg-tiles reveal" data-delay="1">
          {STEPS.map((c, i) => (
            <div
              className={"cg-tile" + (c.dark ? " cg-tile--dark" : "")}
              style={c.c ? ({ ["--c" as string]: c.c }) : undefined}
              key={c.t}
            >
              <span className="cg-tile__n">{String(i + 1).padStart(2, "0")}</span>
              <span className="cg-tile__ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{ICONS[c.ic]}</svg>
              </span>
              <span className="cg-tile__t">{c.t}</span>
              <span className="cg-tile__d">{c.d}</span>
            </div>
          ))}
        </div>

        <p className="sys__howline reveal cg-howline" data-delay="2">
          AI növekedési partnerként dolgozunk: ahol egy folyamat AI-val jobban megy, visszahívás, foglalás, utánkövetés, riport, ott AI-val csináljuk. Ahol nem, ott nem. A cél nem az AI, hanem az új ügyfél.
        </p>

        <div className="sec-cta reveal" data-delay="3">
          <a className="btn btn--lg cg-btn" href="#kapcsolat">Foglaljon időpontot.</a>
        </div>
      </div>
    </section>
  );
}
