/* Footer for /chatgpt-hirdetes only.

   Same rule as the header: no route out of this landing except the booking
   flow. The section list stays in-page and the only external links are the
   two legal documents, which have to be reachable.

   `base` is empty on the landing and "/chatgpt-hirdetes" on the booking
   route, where the anchors have to travel back to the landing. */

const SECTIONS = [
  { href: "#rendszer-teljes", label: "Mit csinálunk" },
  { href: "#ugyfelek", label: "Ügyfelek, nem marketing" },
  { href: "#miert-most", label: "Miért most" },
  { href: "#indulas", label: "Hogyan indul" },
  { href: "#gyik", label: "Gyakori kérdések" },
];

export default function FooterChatgpt({ base = "" }: { base?: string }) {
  const onLanding = base === "";
  const to = (hash: string) => `${base}${hash}`;
  return (
    <footer className="footer footer--cg">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand-col">
            <a href={onLanding ? "#rendszer" : base} className="footer__brand" aria-label={onLanding ? "Atrium — az oldal tetejére" : "Atrium — vissza az oldalra"}>
              Atrium<span className="dot" aria-hidden="true" />
            </a>
            <p className="footer__sub">
              AI növekedési partner szolgáltató cégeknek. Beállítjuk, hogy az Ön szakmájában az Ön cége álljon a ChatGPT válasza alatt, és megépítjük hozzá a teljes ügyfélszerző rendszert.
            </p>
            {onLanding && <a href="#kapcsolat" className="btn footer__cta cg-btn">Foglaljon időpontot.</a>}
          </div>

          <div className="footer__links">
            <div>
              <h4>Az oldalon</h4>
              <ul>
                {SECTIONS.map((s) => (
                  <li key={s.href}><a href={to(s.href)}>{s.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Jogi</h4>
              <ul>
                <li><a href="/adatvedelem">Adatvédelmi tájékoztató</a></li>
                <li><a href="/aszf">ÁSZF</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Atrium · atriumscaling.com</span>
          <span className="footer__note">Az Atrium nem áll kapcsolatban az OpenAI-jal. A ChatGPT az OpenAI védjegye.</span>
        </div>
      </div>
    </footer>
  );
}
