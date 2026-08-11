import { useState } from "react";
import { Check, Monitor, Sofa } from "lucide-react";

const steps = [
  {
    title: "Entender si este espacio hace sentido para ti",
    description:
      "Conoce el enfoque, las áreas de acompañamiento y la forma de trabajo antes de tomar una decisión.",
  },
  {
    title: "Explorar el tipo de apoyo que buscas",
    description:
      "Revisa los servicios y temas que se abordan para orientar tu solicitud inicial.",
  },
  {
    title: "Elegir cómo prefieres conversar",
    description:
      "La atención puede ser online o presencial; la alternativa se conversa al solicitar una cita.",
  },
  {
    title: "Revisar cómo iniciar el contacto",
    description:
      "Este sitio no recibe solicitudes ni información personal o de salud.",
  },
];

const CarePathway = () => {
  const [selectedMode, setSelectedMode] = useState("online");
  return (
    <section id="acompanamiento" className="pathway-section" aria-labelledby="pathway-title">
      <div className="section-wrap">
        <div className="section-intro pathway-intro">
          <p className="eyebrow">Un recorrido claro</p>
          <h2 id="pathway-title">Antes de empezar, puedes ir paso a paso.</h2>
          <p>
            Buscar apoyo puede requerir tiempo. Esta página está pensada para que
            conozcas la propuesta y elijas cómo iniciar el contacto.
          </p>
        </div>

        <ol className="care-path">
          {steps.map((step, index) => (
            <li key={step.title} className="care-step">
              <span className="care-step-number" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div id="modalidades" className="mode-chooser" aria-labelledby="mode-title">
          <div className="mode-copy">
            <p className="eyebrow">Modalidad de atención</p>
            <h3 id="mode-title">Elige el formato que deseas consultar.</h3>
            <p>
              Ambas modalidades están disponibles para conversar en tu solicitud.
            </p>
          </div>

          <fieldset className="mode-options">
            <legend className="sr-only">Modalidad de atención</legend>
            <label className={`mode-option ${selectedMode === "online" ? "is-selected" : ""}`}>
              <input
                type="radio"
                name="care-mode"
                value="online"
                checked={selectedMode === "online"}
                onChange={() => setSelectedMode("online")}
              />
              <Monitor aria-hidden="true" />
              <span>
                <strong>Atención online</strong>
                <small>Por videollamada</small>
              </span>
              <Check aria-hidden="true" />
            </label>
            <label className={`mode-option ${selectedMode === "in-person" ? "is-selected" : ""}`}>
              <input
                type="radio"
                name="care-mode"
                value="in-person"
                checked={selectedMode === "in-person"}
                onChange={() => setSelectedMode("in-person")}
              />
              <Sofa aria-hidden="true" />
              <span>
                <strong>Atención presencial</strong>
                <small>A coordinar al solicitar la cita</small>
              </span>
              <Check aria-hidden="true" />
            </label>
          </fieldset>

          <button className="appointment-unavailable" type="button" disabled>
            Solicitudes de cita no disponibles en este sitio
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarePathway;
