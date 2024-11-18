
import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";

import Skills from "./components/Skills";
import Experience from "./components/Experience";


function App() {
  

  return (
    <>
      <div>
        <Navbar />
      </div>

      <section>
        <div>
          <Introduction />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Experience />
        </div>
      </section>
    </>
  );
}

export default App;
