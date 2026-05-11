import { motion  } from 'framer-motion';
import { Brain, FileText, Sparkles, Users, Scale, Palette, AlertCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Psicoterapia Adultos/as",
      description:
        "Enfoque sistémico-funcional con abordaje transgeneracional, centrado en la singularidad del o la consultante.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FileText,
      title: "Evaluación y Psicodiagnóstico",
      description:
        "Procesos clínicos y cualitativos para niños/as y adultos/as.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Sparkles,
      title: "Programa de Abordaje Cognitivo-Funcional",
      description:
        "Abordaje cognitivo neuroafirmativo (TEA, TDAH) y fortalecimiento socioemocional. Neurodivergencia y Desarrollo.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Asesoría en Parentalidad y Crianza",
      description:
        "Consejería técnica basada en evidencia para padres, madres y adultos/as cuidadores.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Scale,
      title: "Informes Técnicos para Contextos Judiciales",
      description:
        "Elaboración de informes de proceso y competencias parentales para Tribunales de Familia.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Palette,
      title: "Talleres de Journaling y Arteterapia",
      description:
        "Herramientas creativas de escritura y arte para la resignificación de la experiencia.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: AlertCircle,
      title: "Prevención y Orientación en Consumo",
      description: "Información técnica y guía para la derivación oportuna.",
      color: "from-red-500 to-red-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="servicios" className="section-container bg-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-wide">
            Qué hago
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4">
            Servicios Profesionales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acompañamiento terapéutico integral basado en evidencia científica y
            respeto por la singularidad de cada persona
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          const isCenteredLastCard = services.length % 3 === 1 && index === services.length - 1;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className={`group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-accent-100 overflow-hidden ${
                isCenteredLastCard ? "lg:col-start-2" : ""
              }`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-md`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent-700 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative line */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div
                    className={`w-0 h-1 bg-linear-to-r ${service.color} group-hover:w-full transition-all duration-500`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <p className="text-gray-600 mb-6">
          ¿Necesitas orientación sobre cuál servicio es el adecuado para ti?
        </p>
        <a
          href="#contacto"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#contacto")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="btn-primary inline-flex items-center gap-2"
        >
          Agenda una consulta inicial
        </a>
      </motion.div>
    </section>
  );
};
 
export default Services;
