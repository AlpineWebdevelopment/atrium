import FeatureCards from "./FeatureCards";
import FeatureRow from "./FeatureRow";

export default function SeriousBusiness() {
  return (
    <section id="illeszkedik">
      <div className="wrap">
        <div className="split reveal">
          <h2 className="split__h">Komoly üzletre építve.</h2>
          <p className="split__p">
            Az Atrium operátorként gondolkodik, nem szoftvervendorként.
            Magyar nyelven, az Ön számai mellett, a meglévő eszközeibe
            integrálva — nem egy újabb felület, amit a csapatnak meg kell tanulnia.
          </p>
        </div>
        <div className="divider" />
        <FeatureCards />
        <div className="divider" />
        <FeatureRow />
      </div>
    </section>
  );
}
