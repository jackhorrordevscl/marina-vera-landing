import Header from "./components/Header";
import Hero from "./components/Hero";
import CarePathway from "./components/CarePathway";
import Services from "./components/Services";
import Specialties from "./components/Specialties";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-shell">
        <a className="skip-link" href="#contenido-principal">
          Ir al contenido principal
        </a>
        <Header />
        <main id="contenido-principal" tabIndex="-1">
          <Hero />
          <CarePathway />
          <Services />
          <Specialties />
          <About />
          <Contact />
        </main>
        <Footer />

    </div>
  );
}

export default App;
