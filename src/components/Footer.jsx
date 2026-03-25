import { motion } from "framer-motion";
import {
  Instagram,
  Music2,
  Mail,
  Phone,
  MapPin,
  Youtube,
  Facebook,
} from "lucide-react";
import { scrollToSection } from "../utils/scrollUtils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      url:
        import.meta.env.VITE_INSTAGRAM_URL ||
        "https://www.instagram.com/psico_marinade_colores",
      color: "hover:text-pink-500",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      url:
        import.meta.env.VITE_TIKTOK_URL ||
        "https://www.tiktok.com/@marinna_decolores",
      color: "hover:text-black",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: "Youtube",
      icon: Youtube,
      url: "https://www.youtube.com/@Psico_marinadecolores",
      color: "hover:text-black",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/people/Marinna-de-Colores/61582718874848/?rdid=QcPIbYoyISqzSYDX&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F17zMTNjsaz%252F",
      color: "hover:text-black",
    },
  ];

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t-4 border-accent-500">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold bg-linear-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent mb-4">
                Marina Vera Guzmán
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Psicóloga Clínica especializada en enfoque sistémico-funcional y
                transgeneracional. Acompañamiento profesional basado en
                evidencia para tu bienestar integral.
              </p>
              <div className="flex items-center gap-2 text-sm text-accent-400">
                <span className="font-semibold">Registro SIS N° 829352</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Teleconsulta y Atención Presencial
                  <br />
                  <span className="text-xs">(Consultar disponibilidad)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
                  className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                >
                  +{import.meta.env.VITE_WHATSAPP_NUMBER || "56 9 1234 5678"}
                  <br />
                  <span className="text-xs">(WhatsApp disponible)</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${import.meta.env.VITE_EMAIL}`}
                  className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                >
                  {import.meta.env.VITE_EMAIL || "lic.ps.marinaverag@gmail.com"}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">Sígueme en redes sociales</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    aria-label={social.name}
                  >
                    {social.svg
                      ? social.svg
                      : Icon && <Icon className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Legal Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h5 className="text-white font-semibold mb-3 text-sm">
              Información Legal
            </h5>
            <div className="text-gray-400 text-xs leading-relaxed space-y-2">
              <p>
                La atención clínica se rige bajo la{" "}
                <strong className="text-gray-300">Ley 20.584</strong> de
                Derechos y Deberes del Paciente y la{" "}
                <strong className="text-gray-300">Ley 19.628</strong> de
                Protección de la Vida Privada.
              </p>
              <p>
                Las intervenciones en contextos judiciales se realizan bajo el
                rol de profesional tratante.
              </p>
              <p className="text-accent-400 font-medium">
                Registro Superintendencia de Salud: SIS N° 829352 
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} Marina Vera Guzmán. Todos los derechos reservados.
            </p>
            <p className="text-xs">
              Diseño y desarrollo:{" "}
              <span className="text-accent-400">GroundZero Development</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
