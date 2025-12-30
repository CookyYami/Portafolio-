import { useState } from "react";
import "./About.css";
import TiltedCard from "./TiltedCard";

function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about" className="seccion about">
      <h2>Sobre mí</h2>
      <div className="about__container">
        <div className="about__profile">
          <TiltedCard
            imageSrc="Yamilet.jpeg"
            altText="Yamilet Caituiro"
            containerHeight="500px"
            containerWidth="100%"
            imageHeight="400px"
            imageWidth="300px"
            scaleOnHover={1.15}
            rotateAmplitude={10}
            showMobileWarning={false}
            showTooltip={true}
            captionText="Yamilet Caituiro"
          />
        </div>
        <div className="about__content-cards">
          <div className={`about__flip-card ${isFlipped ? 'flipped' : ''}`}>
            <div className="about__flip-card-inner">
              {/* Front - Educación */}
              <div className="about__flip-card-front">
                <div className="about__card-content">
                  <div className="about__front-content">
                    <div className="about__info-item">
                      <h4>Yamilet Caituiro</h4>
                      <p>
                        Desarrolladora web apasionada por crear soluciones funcionales 
                        y de calidad. Me especializo en JavaScript, React y PHP. 
                        He trabajado en equipo desarrollando excelentes habilidades de 
                        comunicación y colaboración, con experiencia en atención al cliente.
                        Estudiante de la Universidad Tecnológica del Perú, actualmente en 8.º ciclo.
                      </p>
                    </div>
                    <div className="about__info-item">
                      <h4>Educación</h4>
                      <p>
                        Universidad Tecnológica del Perú<br />
                        Actualmente estudiando 8.º ciclo<br /><br />
                        Inglés Intermedio<br />
                        Estudiando para obtener nivel avanzado
                      </p>
                    </div>
                  </div>
                </div>
                <button 
                  className="about__flip-arrow"
                  onClick={() => setIsFlipped(true)}
                  aria-label="Girar tarjeta"
                >
                  →
                </button>
              </div>

              {/* Back - Habilidades Blandas */}
              <div className="about__flip-card-back">
                <div className="about__card-content">
                  <h3>Habilidades Blandas</h3>
                  <div className="about__skills-list">
                    <div className="skill-item">
                      <span className="skill-icon">💬</span>
                      <div>
                        <h4>Comunicación</h4>
                        <p>Expreso ideas de forma clara</p>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">👥</span>
                      <div>
                        <h4>Trabajo en Equipo</h4>
                        <p>Colaboro activamente</p>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">🎯</span>
                      <div>
                        <h4>Orientación a Resultados</h4>
                        <p>Soluciones de calidad</p>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">🧠</span>
                      <div>
                        <h4>Aprendizaje Continuo</h4>
                        <p>Mejora constante</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  className="about__flip-arrow"
                  onClick={() => setIsFlipped(false)}
                  aria-label="Girar tarjeta"
                >
                  ←
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
