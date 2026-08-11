import { ArrowUpRight } from "lucide-react";
import marinaAbout from "../assets/images/sobremi.png";
import { publicSite } from "../config/publicSite";

const About = () => (
  <section id="sobre-mi" className="about-section" aria-labelledby="about-title">
    <div className="section-wrap about-grid">
      <figure className="about-portrait">
        <img
          src={marinaAbout}
          alt="Marina Vera Guzmán"
          width="800"
          height="1000"
          loading="lazy"
          decoding="async"
        />
      </figure>
      <div className="about-copy">
        <p className="eyebrow">Sobre mí</p>
        <h2 id="about-title">Una escucha que considera la historia y el contexto.</h2>
        <p>
          Soy {publicSite.practice.role} y trabajo desde un enfoque
          sistémico-funcional y transgeneracional, comprometida con un
          acompañamiento respetuoso de los procesos de salud mental.
        </p>
        <p>
          Mi labor busca facilitar espacios donde cada persona pueda explorar su
          propia narrativa, resignificar experiencias y construir caminos que
          hagan sentido para su vida.
        </p>
        <div className="about-registration">
          <span>{publicSite.practice.registrationLabel}</span>
          <a href="#contacto">
            Solicitar contacto <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
