import { motion } from "framer-motion";
import { Calendar, MessageSquare } from "lucide-react";
import marinaHero from '../assets/images/foto1.jpeg'
import { scrollToSection } from "../utils/scrollUtils";


const Hero = () => {
    
    return (
      <section
        id="inicio"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-accent-50"
      >
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Contenido de texto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="badge badge-primary inline-block"
              >
                Registro SIS N° 829352
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-gray-900 leading-tight"
              >
                Psicología, narrativa y{" "}
                <span className="gradient-text">transformación</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3"
              >
                <p className="text-xl md:text-2xl text-gray-800 font-medium">
                  Psicóloga Clínica
                </p>
                <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                  Enfoque Sistémico-Funcional y Transgeneracional centrado en la
                  singularidad de cada consultante
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              >
                <button
                  onClick={() => scrollToSection("#contacto")}
                  className="btn-primary flex items-center justify-center gap-2 group"
                >
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Agendar Sesión
                </button>
                <button
                  onClick={() => scrollToSection("#servicios")}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Conocer Servicios
                </button>
              </motion.div>

              {/* Stats mejorados */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-accent-200"
              >
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold gradient-text">+5</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Años de experiencia
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Confidencialidad
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold gradient-text">7</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Áreas de atención
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Imagen optimizada */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative lg:order-2"
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                {/* Placeholder para la foto de Marina */}
                <div className="w-full h-full bg-gradient-to-br from-accent-100 via-white to-accent-50 rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                  <img
                    src={marinaHero}
                    alt="Marina Vera Guzmán - Psicóloga Clínica especializada en terapia sistémica y transgeneracional"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decoración sutil */}
                <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-accent-200 rounded-full blur-3xl opacity-20 -z-10" />
                <div className="absolute -top-8 -left-8 w-72 h-72 bg-primary-300 rounded-full blur-3xl opacity-20 -z-10" />
              </div>

              {/* Tarjeta flotante optimizada */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-left-8 lg:bottom-12 bg-white px-6 py-4 rounded-2xl shadow-xl border border-accent-100 max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      Atención personalizada
                    </div>
                    <div className="text-xs text-gray-600">
                      Basada en evidencia
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    );
};

export default Hero;