import { motion } from "framer-motion";
import { Award, BookOpen, Shield, Heart } from "lucide-react";
import marinaAbout from '../assets/images/about.png';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Formación Constante",
      description:
        "Actualización continua en técnicas terapéuticas basadas en evidencia científica.",
    },
    {
      icon: BookOpen,
      title: "Supervisión Clínica",
      description:
        "Revisión permanente de casos para garantizar la calidad del proceso terapéutico.",
    },
    {
      icon: Shield,
      title: "Registro Oficial",
      description: "Registro SIS N° 829354 en Superintendencia de Salud.",
    },
    {
      icon: Heart,
      title: "Enfoque Humanizado",
      description:
        "Respeto profundo por la singularidad y el proceso de cada consultante.",
    },
  ];

  return (
    <section id="sobre-mi" className="section-container bg-white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Imagen/Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative">
            {/* Placeholder para segunda foto o imagen profesional */}
            <div className="aspect-4/5 bg-linear-to-br from-accent-100 via-white to-accent-50 rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
              <img
                src={marinaAbout}
                alt="Marina Vera - Espacio de consulta terapéutica con enfoque cálido y profesional"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decoración */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent-200 rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary-300 rounded-full blur-3xl opacity-30 -z-10" />
          </div>
        </motion.div>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <div className="mb-8">
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wide">
              Perfil Técnico y Ético
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-6">
              Sobre Mí
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Soy <strong>Psicóloga Clínica</strong> con enfoque
                sistémico-funcional y transgeneracional, comprometida con el
                acompañamiento respetuoso de procesos de salud mental.
              </p>

              <p>
                Mi labor se centra en facilitar espacios seguros donde cada
                persona pueda explorar su propia narrativa, resignificar
                experiencias y construir caminos hacia el bienestar integral.
              </p>

              <p>
                Trabajo desde la convicción de que cada consultante es único/a,
                y por ello cada proceso terapéutico se adapta a las necesidades
                específicas de quien llega a consulta.
              </p>
            </div>
          </div>

          {/* Sello Ético - Destacado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-linear-to-br from-accent-50 to-primary-50 border-2 border-accent-200 rounded-2xl p-6 mb-8"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Compromiso Profesional
                </h3>
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  "Mi labor facilita procesos de salud mental basados en
                  evidencia para promover el bienestar integral"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Valores */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-accent-300 hover:shadow-md transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-accent-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                    {value.title}
                  </h4>
                  <p className="text-xs text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
