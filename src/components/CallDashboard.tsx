const QUEUE = [
  { priority: "high", name: "+36 30 112 3456", note: "Fogászati konzultáció érdeklődés", wait: "00:43", color: "red" },
  { priority: "mid",  name: "Kovács Bt. · visszahívás", note: "Schmidt Béla · sürgős ajánlatkérés", wait: "Terv.: 09:55", color: "amber" },
  { priority: "ok",   name: "Schmidt Andrea · FB-lead", note: "Fogsor kozmetikai kezelés iránt érdeklődik", wait: "Beérkezett: 09:51", color: "green" },
];

const WEEK = [
  { day: "H",  pct: 62 },
  { day: "K",  pct: 78 },
  { day: "Sze",pct: 55 },
  { day: "Cs", pct: 91 },
  { day: "P",  pct: 84 },
  { day: "Szo",pct: 28 },
  { day: "V",  pct: 12 },
];

export default function CallDashboard() {
  return (
    <section className="section" id="calls" data-screen-label="Élő híváskezelés">
      <div className="container">

        <div className="calldash__intro reveal">
          <div>
            <span className="eyebrow">Élő híváskezelés</span>
            <h2 className="section__h">
              Minden hívás megválaszolva.<br />
              <em>Munkaidőtől függetlenül.</em>
            </h2>
          </div>
          <p className="section__lede">
            Az Atrium AI-recepciója valós időben fogadja a hívásokat, azonosítja a hívó
            szándékát, lefoglalja az időpontot a meglévő naptárba, és értesíti az ügyfelet —
            miközben az Ön csapata a páciensekkel és ügyfelekkel foglalkozik.
          </p>
        </div>

        <div className="calldash__shell reveal" data-delay="1">

          {/* ── Top bar ── */}
          <div className="calldash__bar">
            <span className="calldash__live">
              <span className="calldash__dot" />
              Atrium Élő Rendszer
            </span>
            <span className="calldash__bardate">2026 · márc. 15. · 09:42</span>
          </div>

          {/* ── Main panes ── */}
          <div className="calldash__body">

            {/* Left: active call */}
            <div className="calldash__call">
              <div className="calldash__section-label">AKTÍV HÍVÁS</div>

              <div className="calldash__caller">
                <span className="calldash__caller-num">+36 20 445 2231</span>
                <span className="calldash__timer">02 : 14</span>
              </div>

              {/* Waveform */}
              <div className="calldash__wave" aria-hidden="true">
                {[28,46,62,38,72,54,80,34,60,44,76,32,58,70,42,66,36,52,78,40,64,30,50,68,38].map((h, i) => (
                  <span key={i} className="calldash__bar" style={{ height: `${h}%` }} />
                ))}
              </div>

              {/* Transcript */}
              <div className="calldash__transcript">
                <div className="calldash__msg calldash__msg--ai">
                  <span className="calldash__speaker">AI</span>
                  <span>Jó napot, Harmónia Fogászat, miben segíthetek?</span>
                </div>
                <div className="calldash__msg calldash__msg--user">
                  <span className="calldash__speaker">Hívó</span>
                  <span>Fogsor kezelésre szeretnék időpontot foglalni.</span>
                </div>
                <div className="calldash__msg calldash__msg--ai">
                  <span className="calldash__speaker">AI</span>
                  <span>Természetesen! Mikor lenne Önnek megfelelő — napszak vagy nap szerint?</span>
                </div>
                <div className="calldash__msg calldash__msg--typing">
                  <span className="calldash__speaker">Hívó</span>
                  <span className="calldash__typing-dots"><span/><span/><span/></span>
                </div>
              </div>

              {/* AI analysis row */}
              <div className="calldash__analysis">
                <div className="calldash__chip">
                  <span className="calldash__chip-label">Szándék</span>
                  <span className="calldash__chip-val">Időpontfoglalás</span>
                </div>
                <div className="calldash__chip">
                  <span className="calldash__chip-label">Hangulat</span>
                  <span className="calldash__chip-val calldash__chip-val--ok">Pozitív</span>
                </div>
                <div className="calldash__chip">
                  <span className="calldash__chip-label">Bizalom</span>
                  <span className="calldash__chip-val">89%</span>
                </div>
              </div>

              {/* Booking action */}
              <div className="calldash__booking">
                <div className="calldash__booking-label">Foglalás folyamatban</div>
                <div className="calldash__booking-detail">
                  <span>2026. márc. 18. · Kedd · 10:30</span>
                  <span className="calldash__booking-status">Megerősítés alatt…</span>
                </div>
              </div>
            </div>

            {/* Right: queue + today stats */}
            <div className="calldash__side">
              <div className="calldash__section-label">VÁRAKOZÓ SOR <span className="calldash__count">3</span></div>

              <div className="calldash__queue">
                {QUEUE.map((item, i) => (
                  <div key={i} className={`calldash__qitem calldash__qitem--${item.color}`}>
                    <span className={`calldash__qdot calldash__qdot--${item.color}`} />
                    <div className="calldash__qinfo">
                      <div className="calldash__qname">{item.name}</div>
                      <div className="calldash__qnote">{item.note}</div>
                    </div>
                    <span className="calldash__qwait">{item.wait}</span>
                  </div>
                ))}
              </div>

              <div className="calldash__divider" />

              <div className="calldash__section-label">MAI NAP</div>
              <div className="calldash__today">
                <div className="calldash__today-row">
                  <span>Fogadott hívások</span><strong>47</strong>
                </div>
                <div className="calldash__today-row">
                  <span>Új foglalások</span><strong>19</strong>
                </div>
                <div className="calldash__today-row">
                  <span>Visszahozott no-show</span><strong>4</strong>
                </div>
                <div className="calldash__today-row">
                  <span>Kihagyott hívás</span><strong className="calldash__zero">0</strong>
                </div>
                <div className="calldash__progress-row">
                  <span>Foglalási arány</span>
                  <span>87%</span>
                </div>
                <div className="calldash__progress-track">
                  <div className="calldash__progress-fill" style={{ width: "87%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Weekly bar chart ── */}
          <div className="calldash__week">
            <div className="calldash__section-label">HETI TELJESÍTMÉNY · Hívások száma</div>
            <div className="calldash__bars">
              {WEEK.map((d, i) => (
                <div key={i} className="calldash__weekbar">
                  <div className="calldash__weekbar-track">
                    <div
                      className={`calldash__weekbar-fill${d.day === "P" ? " calldash__weekbar-fill--today" : ""}`}
                      style={{ height: `${d.pct}%` }}
                    />
                  </div>
                  <span className="calldash__weekbar-day">{d.day}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
