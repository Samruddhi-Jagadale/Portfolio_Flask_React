import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="app-container">
        <Hero />

        <Section id="education">
          <Education />
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="research">
          <Research />
        </Section>

        <Section id="skills">
          <Skills />
        </Section>

        <Section id="certifications">
          <Certifications />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </main>
    </>
  );
}

function Section({ id, children }) {
  return (
    <section id={id} className="section">
      <div className="section-content">{children}</div>
    </section>
  );
}

export default App;
