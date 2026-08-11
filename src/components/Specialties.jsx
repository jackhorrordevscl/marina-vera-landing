const specialties = [
  "Ansiedad, estrés y agotamiento",
  "Estados de ánimo y crisis vitales",
  "Duelo no complicado",
  "Revinculación parental y coparentalidad",
  "Orientación para la derivación oportuna en consumo de sustancias",
];

const Specialties = () => (
  <section id="especialidades" className="specialties-section" aria-labelledby="specialties-title">
    <div className="section-wrap specialties-layout">
      <div className="section-intro">
        <p className="eyebrow">Temas a conversar</p>
        <h2 id="specialties-title">Nombrar lo que está pasando puede ser un comienzo.</h2>
      </div>
      <div className="specialties-copy">
        <p>
          Algunas consultas llegan con un nombre claro; otras, con la sensación
          de que algo necesita atención. Estos temas pueden orientar una primera
          conversación, sin reemplazar una evaluación profesional.
        </p>
        <ul className="specialties-list">
          {specialties.map((specialty) => (
            <li key={specialty}>{specialty}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Specialties;
