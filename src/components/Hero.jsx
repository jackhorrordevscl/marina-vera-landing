import { ArrowDown } from "lucide-react";
import marinaHero from "../assets/images/foto1.jpeg";
import { publicSite } from "../config/publicSite";

const Hero = () => (
  <section id="inicio" className="hero" aria-labelledby="hero-title">
    <div className="section-wrap hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">{publicSite.practice.registrationLabel}</p>
        <p className="hero-role">{publicSite.practice.role}</p>
        <h1 id="hero-title">Un espacio para mirar tu historia con más calma.</h1>
        <p className="hero-description">
          {publicSite.practice.approach}, centrado en la singularidad de cada
          consultante.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#contacto">
            Solicitar una cita
          </a>
          <a className="secondary-link" href="#acompanamiento">
            Conocer el recorrido <ArrowDown aria-hidden="true" />
          </a>
        </div>
        <p className="mode-confirmation">Atención online y presencial.</p>
      </div>

      <figure className="hero-portrait">
        <div className="portrait-frame">
          <img
            src={marinaHero}
            alt="Marina Vera Guzmán"
            width="800"
            height="1067"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <figcaption>
          Acompañamiento profesional para explorar procesos personales y
          familiares.
        </figcaption>
      </figure>
    </div>
  </section>
);

export default Hero;
