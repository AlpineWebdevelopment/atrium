const HEADLINES = {
  long:  ["The front desk", "that never closes."],
  short: ["Every patient.", "Every channel. Every hour."],
  hu:    ["A recepció,", "ami sosem zár be."],
} as const;

const SUBLINES = {
  long:  "Atrium answers every call, message, and DM. In Hungarian, English, and German. The next morning, your team has the booked appointment.",
  short: "One unified front-of-house across voice, SMS, WhatsApp, Messenger, Instagram, email, and web chat. One memory. One voice.",
  hu:    "Hívás, üzenet, e-mail — egy hangon, magyarul, angolul és németül. Reggelre az időpont a naptárban.",
} as const;

type HeadlineKey = keyof typeof HEADLINES;

export default function Hero({ headline = "long" }: { headline?: HeadlineKey }) {
  const [h1, h2] = HEADLINES[headline] ?? HEADLINES.long;
  const sub = SUBLINES[headline] ?? SUBLINES.long;

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__eyebrow atr-eyebrow">
          Atrium for dental clinics &nbsp;·&nbsp; budapest, district v
        </div>
        <h1 className="hero__title">
          <span>{h1}</span>
          <span>{h2}</span>
        </h1>
        <p className="hero__sub">{sub}</p>
        <div className="hero__ctas">
          <a href="#pilot" className="btn btn--primary btn--lg">
            Start a 30-day pilot
          </a>
          <a href="#demo" className="btn btn--ghost btn--lg">
            Listen to a call &nbsp;→
          </a>
        </div>
        <div className="hero__meta">
          <span className="atr-mono-xs">350,000 HUF</span>
          <span className="hero__meta-sep">·</span>
          <span className="atr-mono-xs">30 days</span>
          <span className="hero__meta-sep">·</span>
          <span className="atr-mono-xs">one use case</span>
          <span className="hero__meta-sep">·</span>
          <span className="atr-mono-xs">fixed fee, no contract</span>
        </div>
      </div>
    </section>
  );
}
