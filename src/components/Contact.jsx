import { motion } from "framer-motion";
import { Calendar, Mail, MessageSquare, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const googleForms = [
    {
      title: "Agendar Sesión",
      description: "Reserva tu hora de atención online o presencial",
      url:
        import.meta.env.VITE_FORM_AGENDAR ||
        "https://docs.google.com/forms/d/e/1FAIpQLScilz-ybuMX2PUvhZB2sThEVbSmVEFUzCjUfr4lgMqcvs8X-g/viewform?pli=1",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Consulta General",
      description: "Envía tus dudas o consultas sobre los servicios",
      url:
        import.meta.env.VITE_FORM_CONSULTA ||
        "https://docs.google.com/forms/d/e/1FAIpQLScilz-ybuMX2PUvhZB2sThEVbSmVEFUzCjUfr4lgMqcvs8X-g/viewform?pli=1",
      icon: MessageSquare,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Otro Formulario",
      description: "Formulario adicional para casos específicos",
      url:
        import.meta.env.VITE_FORM_OTRO ||
        "https://docs.google.com/forms/d/e/1FAIpQLScilz-ybuMX2PUvhZB2sThEVbSmVEFUzCjUfr4lgMqcvs8X-g/viewform?pli=1",
      icon: Mail,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Modalidad",
      detail: "Teleconsulta y Atención Presencial",
      subdetail: "Consultar disponibilidad por comuna",
    },
    {
      icon: Clock,
      title: "Horarios",
      detail: "Lunes a Viernes",
      subdetail: "Horarios flexibles según disponibilidad",
    },
  ];

  return (
    <section id="contacto" className="section-container bg-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-wide">
            Agendamiento y Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4">
            Comienza tu proceso
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estoy aquí para acompañarte. Elige la opción que mejor se ajuste a
            tus necesidades
          </p>
        </motion.div>
      </div>

      {/* Formularios de Google */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {googleForms.map((form, index) => {
          const Icon = form.icon;
          return (
            <motion.a
              key={index}
              href={form.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-accent-100 hover:border-accent-400 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${form.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${form.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent-700 transition-colors">
                  {form.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{form.description}</p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-accent-600 font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Completar formulario</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Información de contacto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-linear-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 mb-12"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                  <p className="text-gray-700">{info.detail}</p>
                  <p className="text-sm text-gray-600 mt-1">{info.subdetail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* WhatsApp Button - Flotante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <div className="inline-block bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <p className="text-gray-700 mb-4 font-medium">
            ¿Prefieres una respuesta más rápida?
          </p>
          <a
            href={`"https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hola,%20quisiera%20información%20sobre%20los%20servicios"`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Enviar WhatsApp
          </a>
          <p className="text-xs text-gray-500 mt-3">
            +56 9 3706 2554
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
