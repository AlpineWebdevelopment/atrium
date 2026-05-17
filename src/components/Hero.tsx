import FadingVideo from "./FadingVideo";

export default function Hero() {
  return (
    <section className="hero">
      <FadingVideo src="/hero-bg.mp4" className="hero__video" />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner">
        <h1 className="hero__title">
          <span>The front desk</span>
          <span>that never closes.</span>
        </h1>
        <p className="hero__sub">
          Atrium answers every call, message, and DM. In Hungarian,
          English, and German. The next morning, your team has the
          booked appointment.
        </p>
        <div className="hero__ctas">
          <a href="#pilot" className="btn btn--primary btn--lg btn--pill">
            Start a 30-day pilot
          </a>
        </div>
      </div>
    </section>
  );
}
