/* What we sell, in two statements — deliberately not a service list; the
   services get their own page. */
export default function DirectWhat() {
  return (
    <section className="dr-what">
      <div className="dr-wrap">
        <h2 className="dr-h2 reveal">AI, ami dolgozik.<br />Nem ami szerepel.</h2>
        <div className="dr-rival__cols">
          <div className="reveal" data-delay="1">
            <h3 className="dr-what__h">AI értékesítési rendszer</h3>
            <p>
              Ott kezdjük, ahol a legtöbb pénz marad az asztalon: a megkereséstől a
              lezárt megrendelésig. Élesben fut, nem egy prezentációban.
            </p>
          </div>
          <div className="reveal" data-delay="2">
            <h3 className="dr-what__h">És bármi, ami AI-jal megoldható</h3>
            <p>
              Ha van a cégében egy gond, ami időt vagy pénzt visz, és AI-jal
              megoldható, megoldjuk. Ha nem oldható meg, azt is megmondjuk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
