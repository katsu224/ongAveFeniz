import React from 'react';
import './QuienesSomos.css';
import quienessomos from '../../assets/quienesSomos/quienessomos.webp'; // Asegúrate de tener esta imagen en la carpeta assets
const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="quienes-somos-section">
      <div className="container quienes-somos-container">
        {/* Lado Izquierdo: Texto */}
        <div className="quienes-somos-texto fadeIn">
          <h2 className="section-title-left">Nuestra Historia</h2>
          <div className="title-decorator-left"></div>

          <p className="quienes-somos-lead">
            Todo comenzó con una idea simple pero poderosa: <strong>nadie debería enfrentar sus dificultades solo</strong>.
          </p>

          <p>
            La ONG Ave Fénix nació en Chimbote del deseo de tender una mano a quienes más lo necesitan, en especial a las personas con discapacidad y familias que viven situaciones de vulnerabilidad. Empezamos con pocos recursos, pero con un corazón lleno de empatía y la firme convicción de que cada ser humano merece una oportunidad para levantarse y volver a creer en sí mismo.
          </p>



          <p>
            En Ave Fénix creemos que el cambio comienza con pequeños gestos de amor y solidaridad. Cada proyecto, cada sonrisa y cada historia transformada nos recuerda por qué existimos: <strong>para ayudar a que más personas renazcan y alcancen su máximo potencial</strong>.
          </p>
          <button className="btn-conoce-equipo" hidden>Conoce a nuestro equipo →</button>
        </div>

        {/* Lado Derecho: Imagen */}
        <div className="quienes-somos-imagen-wrapper fadeInDelay">
          {/* Reemplaza con una foto real de tu equipo o fundadores */}
          <img
            src={quienessomos}
            alt="Equipo fundador de ONG Ave Fénix"
            className="quienes-somos-img"
            loading="lazy"
            width="600"
            height="400"
          />
          <div className="experiencia-badge">
            <span className="experiencia-numero">1+</span>
            <span className="experiencia-texto">Años de<br />Experiencia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;