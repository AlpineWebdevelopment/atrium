const QUEUE_ITEMS = [
  {
    priority: "SÜRGŐS",
    priorityLevel: "urgent",
    name: "Tóth Péter",
    trigger: "No-show · ma 10:00",
    note: "2. visszahívási kísérlet · AI hívás folyamatban",
    channel: "Hívás",
    status: "active",
    statusLabel: "Folyamatban · 00:32",
    preview: true,
  },
  {
    priority: "MAGAS",
    priorityLevel: "high",
    name: "Schmidt Andrea",
    trigger: "FB-lead · 14:22 (22 perce)",
    note: "Fogsor kozmetika iránt érdeklődik · Válasz: 3 percen belül",
    channel: "SMS",
    status: "sent",
    statusLabel: "Kézbesítve · 14:25",
    preview: false,
  },
  {
    priority: "KÉSZ",
    priorityLevel: "done",
    name: "Nagy Éva",
    trigger: "Utókövetés · kezelés után 3 nap",
    note: "Google értékelési kérés elküldve · 5★ visszajelzés",
    channel: "SMS",
    status: "done",
    statusLabel: "★★★★★ Google · 17:03",
    preview: false,
  },
  {
    priority: "TERV.",
    priorityLevel: "scheduled",
    name: "Horváth Miklós",
    trigger: "No-show · holnap 09:00",
    note: "Első visszahívás tervezett: holnap 09:15",
    channel: "Hívás",
    status: "scheduled",
    statusLabel: "Holnap 09:15",
    preview: false,
  },
];

const SMS_THREAD = [
  { from: "system", time: "14:33", text: "Péter, elnézést, hogy zavarjuk! A Harmónia Fogászatnál a mai 10:00-as időpontját sajnos nem tudtuk megtartani. Szeretne egy új időpontot a legközelebbi szabad napra?" },
  { from: "user",   time: "14:34", text: "Igen, holnap délután 14:00 körül tudnék." },
  { from: "system", time: "14:34", text: "Holnap, márc. 16-án 14:00 szabad! Megerősítő SMS-t és emailt küldtünk. Viszontlátásra!" },
  { from: "status", time: "14:34", text: "✓ Időpont rögzítve · naptárba szinkronizálva" },
];

export default function FollowUpSystem() {
  return (
    <section className="section section--alt" id="followup" data-screen-label="Automatikus utánkövetés">
      <div className="container">

        <div className="followup__intro reveal">
          <div>
            <span className="eyebrow">Automatikus utánkövetés</span>
            <h2 className="section__h">
              Senki nem esik ki a rendszerből.<br />
              <em>Automatikusan, emberi szintű kommunikációval.</em>
            </h2>
          </div>
          <p className="section__lede">
            No-show, kései FB-lead, értékelés nélkül távozó ügyfél — az Atrium mindegyiket
            észleli és priorizálva kezeli. Hívás, SMS vagy email útján, az ügyfél nevén szólítva,
            természetes hangon. Az Ön beavatkozása nélkül.
          </p>
        </div>

        <div className="followup__shell reveal" data-delay="1">

          {/* ── Queue panel ── */}
          <div className="followup__queue-panel">
            <div className="followup__panel-header">
              <span className="followup__panel-title">Utánkövetési sor</span>
              <span className="followup__badge">14 aktív</span>
            </div>

            {QUEUE_ITEMS.map((item, i) => (
              <div key={i} className={`followup__item followup__item--${item.priorityLevel}`}>
                <div className="followup__item-top">
                  <span className={`followup__priority followup__priority--${item.priorityLevel}`}>
                    {item.priority}
                  </span>
                  <span className="followup__name">{item.name}</span>
                  <span className="followup__trigger">{item.trigger}</span>
                  <span className={`followup__channel followup__channel--${item.status}`}>
                    {item.channel}
                  </span>
                </div>
                <div className="followup__item-bottom">
                  <span className="followup__note">{item.note}</span>
                  <span className={`followup__status followup__status--${item.status}`}>
                    {item.statusLabel}
                  </span>
                </div>
              </div>
            ))}

            <div className="followup__more">
              <span>+ 10 további utánkövetés ütemezve</span>
            </div>
          </div>

          {/* ── SMS preview panel ── */}
          <div className="followup__convo-panel">
            <div className="followup__panel-header">
              <div>
                <span className="followup__panel-title">SMS előnézet</span>
                <span className="followup__convo-sub">Tóth Péter · +36 20 444 1230</span>
              </div>
              <span className="followup__badge followup__badge--ok">Visszahozva</span>
            </div>

            <div className="followup__thread">
              {SMS_THREAD.map((msg, i) => (
                msg.from === "status"
                  ? (
                    <div key={i} className="followup__status-line">{msg.text}</div>
                  ) : (
                    <div key={i} className={`followup__bubble followup__bubble--${msg.from}`}>
                      <div className="followup__bubble-meta">
                        {msg.from === "system" ? "Atrium" : "Tóth Péter"} · {msg.time}
                      </div>
                      <div className="followup__bubble-text">{msg.text}</div>
                    </div>
                  )
              ))}
            </div>

            {/* Result strip */}
            <div className="followup__result">
              <div className="followup__result-row">
                <span className="followup__result-label">Visszahívási kísérlet</span>
                <span className="followup__result-val">2.</span>
              </div>
              <div className="followup__result-row">
                <span className="followup__result-label">Válasz ideje</span>
                <span className="followup__result-val">1 perc 12 mp</span>
              </div>
              <div className="followup__result-row">
                <span className="followup__result-label">Kimenet</span>
                <span className="followup__result-val followup__result-val--ok">✓ Újrafoglalva</span>
              </div>
              <div className="followup__result-row">
                <span className="followup__result-label">Bevétel visszahozva</span>
                <span className="followup__result-val">~42 000 Ft</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
