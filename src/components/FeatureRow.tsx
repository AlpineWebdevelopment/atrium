const ITEMS = [
  {
    title: "Nincs adatmigráció",
    desc: "A telefonszám, a naptár és a CRM marad. Az Atrium párhuzamosan fut a meglévő eszközei mellett.",
    icon: <><polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" /></>,
  },
  {
    title: "Magyar nyelvű",
    desc: "Természetes magyar beszéd, formális Ön-megszólítás — a telefon másik végén is. Nem gépi menü.",
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  },
  {
    title: "EU hosting, GDPR",
    desc: "Minden adat EU-ban hosztolt szerveren. Adatfeldolgozói szerződés, publikálható tájékoztató.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: "24/7 hívásfogadás",
    desc: "Munkaidő után, hétvégén, ünnepnap. 0–2 mp válaszidő, párhuzamos vonalkezelés.",
    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 11.5 19.79 19.79 0 0 1 1.89 2.18 2 2 0 0 1 3.84 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  },
];

export default function FeatureRow() {
  return (
    <div className="frow">
      {ITEMS.map((item, i) => (
        <div className="frow__item reveal" data-delay={String(i + 1) as "1" | "2" | "3" | "4"} key={i}>
          <svg className="frow__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {item.icon}
          </svg>
          <span className="frow__title">{item.title}</span>
          <p className="frow__desc">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
