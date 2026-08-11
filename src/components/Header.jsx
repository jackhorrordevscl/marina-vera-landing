import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";
import { publicSite } from "../config/publicSite";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    firstMobileLinkRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  const closeMobileMenuAtDestination = (href) => {
    const destination = document.querySelector(href) || document.querySelector("main");
    if (destination) {
      destination.tabIndex = -1;
      destination.focus({ preventScroll: true });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegación principal">
        <a href="#inicio" className="brand-link" aria-label="Ir al inicio">
          <img src={logo} alt="" width="48" height="48" />
          <span>{publicSite.practice.name}</span>
        </a>

        <div className="desktop-nav">
          {publicSite.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="header-cta" href="#contacto">
          Solicitar cita
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className="menu-button"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        {isMobileMenuOpen && (
          <div id="mobile-menu" className="mobile-nav">
            {publicSite.navigation.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstMobileLinkRef : null}
                href={item.href}
                onClick={() => closeMobileMenuAtDestination(item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
