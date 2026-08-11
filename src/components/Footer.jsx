import { ExternalLink } from "lucide-react";
import { publicSite } from "../config/publicSite";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <div>
          <p className="footer-name">{publicSite.practice.name}</p>
          <p>{publicSite.practice.role}</p>
          <p className="footer-registration">{publicSite.practice.registrationLabel}</p>
        </div>
        <nav aria-label="Enlaces del pie de página">
          <p className="footer-label">Navegar</p>
          {publicSite.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div>
          <p className="footer-label">Redes públicas</p>
          <div className="social-links">
            {publicSite.external.social.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label} <ExternalLink aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="section-wrap footer-bottom">
        <p>© {currentYear} {publicSite.practice.name}.</p>
        <a
          className="clinical-link"
          href={publicSite.external.clinicalControl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Acceso profesional <ExternalLink aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
