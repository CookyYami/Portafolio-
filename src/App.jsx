import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Particles from "./components/Particles";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".seccion");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <div style={{ width: '100%', height: '100%' }}>
          <Particles
            particleCount={800}
            particleSpread={15}
            speed={0.5}
            particleColors={['#22c55e', '#4ade80', '#86efac', '#bbf7d0', '#10b981']}
            moveParticlesOnHover={true}
            particleHoverFactor={1}
            alphaParticles={false}
            particleBaseSize={80}
            sizeRandomness={1.5}
            cameraDistance={12}
            disableRotation={false}
          />
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 1, pointerEvents: 'auto' }}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </>
  );
}

export default App;
