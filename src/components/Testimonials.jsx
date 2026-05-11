import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Llegué a la consulta de Marina sintiéndome muy perdida en mi propia historia. Gracias a su trabajo humano y respetuoso y al uso del journaling, logré identificar muchas cosas a nivel familiar que venía repitiendo sin darme cuenta. Es una profesional cálida que realmente te escucha sin juzgar.",
      author: "Ana M.",
      role: "Terapia Individual",
    },
    {
      text: "Como padres, estábamos muy angustiados por el comportamiento de nuestro hijo. Marina realizó una evaluación impecable, explicando de forma técnica pero muy humana qué era lo que estaba pasando con sus emociones. Lo que más valoramos fue la asesoría en parentalidad: nos dio herramientas concretas y fáciles para nosotros porque cambiaron algunas cosas que pasaban en nuestro entorno como familia. Sentimos que ahora entendemos a nuestro hijo desde la empatía.",
      author: "Carlos y Patricia",
      role: "Asesoría Parental",
    },
    {
      text: "Llegué a consulta con el pecho apretado y mucha angustia por el día a día. Marina me enseñó a ver la ansiedad no como una enemiga, sino como una señal que necesitaba mi atención. Me dio herramientas prácticas que puedo usar en mi vida cotidiana para volver a la calma. Hoy me siento mucho más tranquila y con la seguridad de que puedo manejar mis emociones sin que me desborden.",
      author: "Sofía R.",
      role: "Manejo de Ansiedad",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonios"
      className="section-container bg-linear-to-br from-accent-50 to-primary-50"
    >
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-wide">
            Prueba Social
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4">
            Lo que dicen mis consultantes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experiencias reales de personas que han confiado en este proceso
            terapéutico
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Carousel Container */}
          <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14 min-h-105 flex flex-col justify-between border border-accent-50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-accent-300" />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-accent-100 text-gray-700 hover:text-accent-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-accent-600 w-8"
                        : "bg-gray-300 hover:bg-accent-300"
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-accent-100 text-gray-700 hover:text-accent-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-200 rounded-full blur-2xl opacity-50 -z-10" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-300 rounded-full blur-2xl opacity-50 -z-10" />
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 text-sm text-gray-500"
        >
          <p>
            * Los testimonios reflejan experiencias individuales. Los resultados
            pueden variar según cada caso.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
