import Navbar from "./components/layout/Navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Experience from "./sections/experience/Experience";
import Education from "./sections/education/Education";
import Certifications from "./sections/certifications/Certifications";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
