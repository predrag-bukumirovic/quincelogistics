import Faq from "./Faq";
import { site } from "../lib/site";

export default function FaqSection() {
  return (
    <section className="section">
      <div className="wrap faq-grid">
        <div className="faq-aside" data-reveal>
          <p className="label">
            Pitanja
          </p>
          <h2 className="title">Česta pitanja</h2>
          <p className="lead">
            Niste našli odgovor? Pozovite dispečera ili nam pišite na{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <a href={site.phone.href} className="faq-phone">
            {site.phone.display}
          </a>
        </div>
        <Faq />
      </div>
    </section>
  );
}
