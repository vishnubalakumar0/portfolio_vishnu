import About from "./components/About";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import  { useState} from "react";



const App = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active) }
      onMouseMove={(e) => {
        if (!active) return;
        const root = e.currentTarget;
        root.style.setProperty("--mouse-x", `${e.clientX}px`);
        root.style.setProperty("--mouse-y", `${e.clientY}px`);
      }}
      className="overflow-x-hidden text-neutral-300 antialiased
     selection:bg-cyan-300 selection:text-cyan-900"
      style={{
        background:active
         ? "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(120,150,255,0.18), transparent 40%) "
         : "transparent",
        }}
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-125 w-125 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-125 w-125 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      {active && (
        <div
        className="pointer-events-none fixed inset-0 -z-10 transition "
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(110,10,255,0.22), rgba(0,0,0,0) 40%)",
        }}
      />
      )}
      <div className="container mx-auto px-8">
        <Nav />
        <Hero />
        <About />
        <Technologies />
        <Education />
        <Projects />
        <Certificate />
        <Contact />
      </div>
    </div>
  );
};

export default App;
