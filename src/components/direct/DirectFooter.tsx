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
              AI értékesítési rendszer szolgáltató cégeknek. Bemutatót nem tartunk — rendszert szállítunk.
            </p>
          </div>
          <ul className="dr-foot__links">
            <li><a href="/szolgaltatasok">Szolgáltatások</a></li>
            <li><a href="/foglalas?from=direct">Foglaljon időpontot</a></li>
            <li><a href="/adatvedelem">Adatvédelmi tájékoztató</a></li>
            <li><a href="/aszf">ÁSZF</a></li>
          </ul>
        </div>
        <div className="dr-foot__bottom">
          <span>© 2026 Atrium · atriumscaling.com</span>
          {/* The channel marks on this page name the services the system
              connects to. They belong to their owners, and saying so is the
              condition of naming them at all. */}
          <span className="dr-foot__tm">
            A megnevezett csatornák és emblémáik a jogtulajdonosaik tulajdonát képezik.
            Az Atrium nem áll velük üzleti kapcsolatban; a névhasználat csak azt jelzi,
            hogy a rendszer az adott csatornán is működik.
          </span>
        </div>
      </div>
    </footer>
  );
}
