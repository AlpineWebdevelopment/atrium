/* "We know what we are doing" — what the buyer gets instead of the show.
   Three blunt lines, no capability list. */
const GET = [
  "Élesben működő rendszert, nem demót.",
  "Egy számot, amit ellenőrizni tud.",
  "Valakit, aki üzemelteti — nem Önnek kell.",
];

export default function DirectNoShow() {
  return (
    <section className="dr-show">
      <div className="dr-wrap">
        <h2 className="dr-h2 reveal">Nem prezentálunk.<br />Megcsináljuk.</h2>
        <ul className="dr-lines">
          {GET.map((t, i) => (
            <li className="reveal" data-delay={i + 1} key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
