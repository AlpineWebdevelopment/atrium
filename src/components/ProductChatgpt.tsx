/* The seven core capabilities, reworded for a ChatGPT-sourced inquiry —
   follow-up first, because that is the whole point of this landing.
   System as subject in every line. Only the seven confirmed capabilities;
   no candidate components (quote follow-up, payment, intake, waitlist,
   translation) appear on public surfaces. */

const ICONS: Record<string, React.ReactNode> = {
  callback: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  phone:    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  bell:     <g><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></g>,
  refresh:  <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  star:     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />,
  bars:     <path d="M12 20V10M18 20V4M6 20v-6" />,
};

const CAPS = [
  { ic: "callback", c: "#628FBC", t: "Utánköveti az érdeklődőt.",     d: "A ChatGPT-ből, hirdetésből vagy űrlapról érkező érdeklődőt a rendszer percek alatt visszahívja — hangon és üzenetben, magyarul, az Ön cége nevében." },
  { ic: "phone",    c: "#62BCAC", t: "Fogadja a hívást.",              d: "Este, hétvégén, és amikor a kollégák másik vonalon vannak. Természetes magyar beszélgetés, Ön-megszólítással." },
  { ic: "calendar", c: "#9662BC", t: "Lefoglalja az időpontot.",       d: "Közvetlenül az Ön meglévő naptárába. Az ügyfél visszaigazolást kap, Ön egy bejegyzést." },
  { ic: "bell",     c: "#BCA162", t: "Visszahívja az elmaradtakat.",   d: "Minden elmaradt időpontra vagy helyszíni felmérésre a rendszer időben rákérdez, és újat egyeztet." },
  { ic: "refresh",  c: "#AD83CC", t: "Visszahozza a régieket.",        d: "Az elcsendesedett ügyfeleket a rendszer megkeresi, mielőtt máshol kötnének ki." },
  { ic: "star",     c: "#628FBC", t: "Kéri az értékelést.",            d: "Az elégedett ügyfelet nyilvános értékeléshez vezeti, az elégedetlent egy zárt csatornába." },
  { ic: "bars",     c: "#010E1E", t: "Megmutatja, mi működik.",        d: "Havonta egy tiszta kép: honnan jött a bevétel, mi lett a hirdetési költésből, mit hozott vissza a rendszer." },
];

export default function ProductChatgpt() {
  return (
    <section className="sys cg-sys" id="rendszer-teljes">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A rendszer</span>
          <h2 className="dash__h">Mit csinál a rendszer egy ChatGPT-s érdeklődővel.</h2>
          <p className="dash__p">
            AI-ügynökök viszik a hang- és szöveges kommunikációt, természetes magyar nyelven, az Ön cégére hangolva. Nem egy ügyfélszolgálati központ, és nem egy automatikus e-mail — egy rendszer, amely felveszi a kapcsolatot, foglal, utánamegy, és megmutatja, mi lett belőle.
          </p>
        </div>

        <div className="caps cg-caps reveal" data-delay="1">
          <div className="caps__grid cg-caps__grid">
            {CAPS.map((c, i) => (
              <div className={"caps__item" + (i === 0 ? " cg-caps__item--lead" : "")} key={i}>
                <span className="caps__ico" style={{ color: c.c }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICONS[c.ic]}</svg>
                </span>
                <span className="caps__t">{c.t}</span>
                <span className="caps__d">{c.d}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="sys__howline reveal cg-howline" data-delay="2">
          Az Ön csapata nem vált rendszert. Amit ma használnak, azt használják tovább; a rendszer mellé épül, nem a helyére.
        </p>

        <div className="sec-cta reveal" data-delay="3">
          <a className="btn btn--lg" href="#kapcsolat">Foglaljon időpontot.</a>
        </div>
      </div>
    </section>
  );
}
