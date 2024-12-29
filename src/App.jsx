import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Counter from './components/Counter';

function App() {
  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <Counter />
      <div className="pt-10">
        <section id="home" className="py-10">
          <Introduction />
        </section>
        <section id="about" className="py-10">
          <About />
        </section>
        <section id="projects" className="py-10">
          <Projects />
        </section>
        <section id="skills" className="py-10">
          <Skills />
        </section>
        <section id="experience" className="py-10">
          <Experience />
        </section>
        <section id="contact" className="py-10">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;