import FadingVideo from "./FadingVideo";
import Image from "next/image";

const CAPABILITIES = [
  {
    title: "Answer the call",
    body:  "24/7 reception across every channel, multilingual by default. One conversation, every channel.",
    tags:  ["Voice", "WhatsApp", "Instagram", "Web chat"],
    icon:  "/icon-phone.svg",
  },
  {
    title: "Book the appointment",
    body:  "Direct integration with the scheduler you already use. The next morning, your team has the booked appointment.",
    tags:  ["Existing scheduler", "HU · EN · DE", "Calendar sync", "No double-book"],
    icon:  "/icon-calendar.svg",
  },
  {
    title: "Recover the no-show",
    body:  "Outbound voice and SMS in the high-recovery window around a missed appointment. Calm, considered, in the patient's language.",
    tags:  ["Within 30 min", "Polite tone", "SMS + voice", "Auto-reschedule"],
    icon:  "/icon-pulse.svg",
  },
  {
    title: "Reactivate the dormant",
    body:  "Outbound campaigns to records that have gone quiet — overdue patients, leads that never converted, plans that were quoted but never started.",
    tags:  ["Overdue checks", "Cold leads", "Quoted plans", "Win-back"],
    icon:  "/icon-inbox.svg",
  },
] as const;

function CapabilityCard({
  title, body, tags, icon,
}: { title: string; body: string; tags: readonly string[]; icon: string }) {
  return (
    <article className="cap-card liquid-glass">
      <div className="cap-card__top">
        <div className="cap-card__icon liquid-glass">
          <Image src={icon} alt="" width={20} height={20} />
        </div>
        <div className="cap-card__tags">
          {tags.map((t) => (
            <span key={t} className="cap-tag liquid-glass">{t}</span>
          ))}
        </div>
      </div>
      <div className="cap-card__body">
        <h3 className="cap-card__title">{title}</h3>
        <p className="cap-card__copy">{body}</p>
      </div>
    </article>
  );
}

export default function Capabilities() {
  return (
    <section className="caps" id="capabilities">
      <FadingVideo src="/caps-bg.mp4" className="caps__video" />
      <div className="caps__scrim" aria-hidden="true" />

      <div className="caps__inner">
        <div className="caps__heading">
          <h2 className="caps__title">Front of house, evolved.</h2>
          <p className="caps__sub">
            One unified system. Seven jobs. One voice. These are where the pilot starts.
          </p>
        </div>
        <div className="caps__grid">
          {CAPABILITIES.map((c) => (
            <CapabilityCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
