import {
  Brain,
  FileText,
  Palette,
  Scale,
  Sparkles,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Psicoterapia para personas adultas",
    description:
      "Enfoque sistémico-funcional y transgeneracional centrado en la singularidad de cada consultante.",
  },
  {
    icon: FileText,
    title: "Evaluación y psicodiagnóstico",
    description: "Procesos clínicos y cualitativos para niños, niñas y personas adultas.",
  },
  {
    icon: Sparkles,
    title: "Abordaje cognitivo-funcional",
    description:
      "Abordaje cognitivo neuroafirmativo, fortalecimiento socioemocional y temas de neurodivergencia y desarrollo.",
  },
  {
    icon: Users,
    title: "Parentalidad y crianza",
    description:
      "Consejería técnica para madres, padres y personas adultas cuidadoras.",
  },
  {
    icon: Scale,
    title: "Informes técnicos",
    description:
      "Elaboración de informes de proceso y competencias parentales para contextos judiciales de familia.",
  },
  {
    icon: Palette,
    title: "Journaling y arteterapia",
    description:
      "Herramientas de escritura y arte orientadas a la resignificación de la experiencia.",
  },
];

const Services = () => (
  <section id="servicios" className="services-section" aria-labelledby="services-title">
    <div className="section-wrap">
      <div className="section-intro services-intro">
        <p className="eyebrow">Explorar apoyos</p>
        <h2 id="services-title">Distintas formas de acompañar un proceso.</h2>
        <p>
          Estas son las áreas que hoy se presentan en la práctica. La pertinencia
          de cada alternativa se conversa directamente al solicitar una cita.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="service-card">
              <Icon aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
