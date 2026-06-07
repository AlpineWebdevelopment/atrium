"use client";

const ITEMS = [
  "Fogadja a hívást",
  "Lefoglalja az időpontot",
  "Visszahívja az elmaradtakat",
  "Visszahozza a régieket",
  "Utánköveti az érdeklődőt",
  "Kéri az értékelést",
  "Megmutatja, mi működik",
];

// Double the items for a seamless loop
const TRACK = [...ITEMS, ...ITEMS];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {TRACK.map((item, i) => (
          <span key={i} className="ticker__item">
            {item}
            <span className="ticker__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
