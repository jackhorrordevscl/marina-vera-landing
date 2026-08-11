import { useState } from "react";
import { publicSite } from "../config/publicSite";

const Contact = () => {
  const [request, setRequest] = useState({
    name: "",
    contact: "",
    modality: "",
    message: "",
  });

  const updateRequest = (event) => {
    const { name, value } = event.target;
    setRequest((currentRequest) => ({ ...currentRequest, [name]: value }));
  };

  return (
    <section id="contacto" className="contact-section" aria-labelledby="contact-title">
      <div className="section-wrap contact-panel">
        <div className="contact-intro">
          <p className="eyebrow">Solicitar una cita</p>
          <h2 id="contact-title">Cuando lo desees, puedes dar el siguiente paso.</h2>
          <p>
            Puedes dejar preparada una solicitud de contacto. No incluyas antecedentes
            clínicos, diagnósticos, medicamentos ni situaciones urgentes.
          </p>
        </div>

        <form
          className="appointment-form"
          aria-labelledby="contact-title"
          onSubmit={(event) => event.preventDefault()}
        >
          <p id="appointment-scope" className="form-guidance">
            Indica solo los datos necesarios para solicitar contacto y la modalidad que
            prefieres conversar.
          </p>

          <div className="form-field">
            <label htmlFor="appointment-name">Nombre <span aria-hidden="true">*</span></label>
            <input
              id="appointment-name"
              name="name"
              type="text"
              autoComplete="name"
              value={request.name}
              onChange={updateRequest}
              required
              aria-describedby="appointment-scope"
            />
          </div>

          <div className="form-field">
            <label htmlFor="appointment-contact">Contacto preferido <span aria-hidden="true">*</span></label>
            <input
              id="appointment-contact"
              name="contact"
              type="text"
              autoComplete="off"
              value={request.contact}
              onChange={updateRequest}
              required
              aria-describedby="appointment-scope"
            />
          </div>

          <fieldset className="appointment-modalities" aria-describedby="appointment-scope">
            <legend>Modalidad preferida <span aria-hidden="true">*</span></legend>
            <div className="appointment-mode-options">
              <label className={request.modality === "online" ? "is-selected" : ""}>
                <input
                  name="modality"
                  type="radio"
                  value="online"
                  checked={request.modality === "online"}
                  onChange={updateRequest}
                  required
                />
                Online
              </label>
              <label className={request.modality === "in-person" ? "is-selected" : ""}>
                <input
                  name="modality"
                  type="radio"
                  value="in-person"
                  checked={request.modality === "in-person"}
                  onChange={updateRequest}
                  required
                />
                Presencial
              </label>
            </div>
          </fieldset>

          <div className="form-field">
            <label htmlFor="appointment-message">Mensaje breve (opcional)</label>
            <textarea
              id="appointment-message"
              name="message"
              rows="3"
              maxLength="500"
              value={request.message}
              onChange={updateRequest}
              aria-describedby="appointment-message-guidance"
            />
            <p id="appointment-message-guidance" className="field-guidance">
              No incluyas información clínica ni situaciones urgentes.
            </p>
          </div>

          <button
            className="primary-button appointment-unavailable"
            type="submit"
            disabled
            aria-describedby="appointment-unavailable"
          >
            Envío no disponible
          </button>
          <p id="appointment-unavailable" className="form-unavailable">
            El envío estará disponible cuando se configure el canal de contacto.
          </p>
        </form>

        {publicSite.external.email && (
          <a className="contact-email" href={`mailto:${publicSite.external.email}`}>
            {publicSite.external.email}
          </a>
        )}
      </div>
    </section>
  );
};

export default Contact;
