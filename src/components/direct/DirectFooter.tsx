/* Footer for /direct only.

   Same rule as the page header: this is a closed surface, so the only routes
   out are the booking flow and the two legal documents, which have to be
   reachable. The shared Footer is not reused here because its column of
   in-page anchors (#rendszer-teljes, #egyedi, #gyik) points at sections that
   only exist on the root and niche landings — on /direct those links would
   scroll nowhere and lead the visitor out of the funnel. */
export default function DirectFooter() {
  return (
    <footer className="dr-foot">
      <div className="dr-wrap">
        <div className="dr-foot__row">
          <div>
            <span className="dr-foot__brand">Atrium<span className="dr-top__dot">.</span></span>
            <p className="dr-foot__sub">
              Szolgáltató cégeknek. Kiszámoljuk, mennyit hagy az asztalon — és visszahozzuk.
            </p>
          </div>
          <ul className="dr-foot__links">
            <li><a href="/foglalas?from=direct">Foglaljon időpontot</a></li>
            <li><a href="/adatvedelem">Adatvédelmi tájékoztató</a></li>
            <li><a href="/aszf">ÁSZF</a></li>
          </ul>
        </div>
        <div className="dr-foot__bottom">© 2026 Atrium · atriumscaling.com</div>
      </div>
    </footer>
  );
}
