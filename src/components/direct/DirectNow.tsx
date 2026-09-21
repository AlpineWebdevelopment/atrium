/* FOMO, stated as what the customer does next — checkable against the
   operator's own week, no invented scarcity, no countdown. Three blunt lines
   instead of a leak inventory, so the page does not turn into a feature
   list. */
const LINES = [
  "Nem várja meg, hogy visszahívja. Megkeresi a következőt.",
  "Nem emlékezteti senki az árajánlatra. Elfelejti.",
  "Nem jelentkezik újra. Máshova megy.",
];

export default function DirectNow() {
  return (
    <section className="dr-now">
      <div className="dr-wrap">
        <h2 className="dr-h2 reveal">Amíg Ön gondolkodik,<br />a megrendelő már döntött.</h2>
        <ul className="dr-lines">
          {LINES.map((t, i) => (
            <li className="reveal" data-delay={i + 1} key={t}>{t}</li>
          ))}
        </ul>
        <p className="dr-now__close reveal" data-delay="4">
          Ez nem egyszer történik meg. Minden héten.
        </p>
      </div>
    </section>
  );
}
