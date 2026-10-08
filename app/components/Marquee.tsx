import { countries } from "../lib/content";

export default function Marquee() {
  const items = countries.map((c) => (
    <span className="marquee-item" key={c}>
      {c}
    </span>
  ));

  return (
    <section className="marquee" aria-label="Zemlje u koje vozimo">
      <div className="wrap marquee-head">
        <span>Gde vozimo</span>
        <span>Srbija · Zapadni Balkan · EU</span>
      </div>
      <div className="marquee-track">
        <div className="marquee-group">{items}</div>
        <div className="marquee-group" aria-hidden="true">
          {items}
        </div>
      </div>
    </section>
  );
}
