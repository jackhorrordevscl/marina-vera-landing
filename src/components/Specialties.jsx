import { motion } from "framer-motion";
import { Heart, Zap, CloudRain, Home, ShieldAlert } from "lucide-react";

const Specialties = () => {
  const specialties = [
    {
      icon: Zap,
      title: "Ansiedad, estrés y agotamiento",
      subtitle: "Burnout",
      color: "bg-yellow-100 text-yellow-700 border-yellow-300",
    },
    {
      icon: CloudRain,
      title: "Estados de ánimo y crisis vitales",
      subtitle: "Acompañamiento en momentos difíciles",
      color: "bg-blue-100 text-blue-700 border-blue-300",
    },
    {
      icon: Heart,
      title: "Duelo no complicado",
      subtitle: "Proceso de pérdida",
      color: "bg-purple-100 text-purple-700 border-purple-300",
    },
    {
      icon: Home,
      title: "Especialidad Familia",
      subtitle:
        "Revinculación parental, coparentalidad en alta conflictividad y asesoría en habilidades parentales",
      color: "bg-green-100 text-green-700 border-green-300",
    },
    {
      icon: ShieldAlert,
      title: "Prevención",
      subtitle:
        "Orientación en consumo de sustancias para la derivación oportuna",
      color: "bg-red-100 text-red-700 border-red-300",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="especialidades"
      className="section-container bg-linear-to-br from-primary-50 to-accent-50"
    >
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-wide">
            Esferas de abordaje
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4">
            Especialidades
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Áreas de atención clínica con enfoque personalizado y basado en
            evidencia
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {specialties.map((specialty, index) => {
          const Icon = specialty.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`${specialty.color} rounded-xl p-7 border-2 backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg`}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{specialty.title}</h3>
                  <p className="text-sm opacity-90">{specialty.subtitle}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Info adicional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-accent-200 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Enfoque Personalizado
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cada persona es única, por eso cada proceso terapéutico se adapta a
            tus necesidades específicas. Mi labor facilita procesos de salud
            mental basados en evidencia para promover el bienestar integral.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
              Terapia Sistémica
            </span>
            <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
              Enfoque Transgeneracional
            </span>
            <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
              Basado en Evidencia
            </span>
            <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
              Atención Personalizada
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Specialties;
