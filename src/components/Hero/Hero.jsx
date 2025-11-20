import React from 'react';
import styles from './Hero.module.css';
import heroBackground from '../../assets/hero/heroBackground.webp';
import { ChevronDown } from 'lucide-react';

function Hero({ onCtaClick }) {
  return (
    <section className={styles.hero}>

      {/* 1. Capa de Fondo (Imagen + Overlay) */}
      <div className={styles.backgroundImageWrapper}>
        <img
          src={heroBackground}
          alt="Equipo de Ave Fénix"
          className={styles.backgroundImage}
          // fetchPriority ayuda al LCP (carga más rápido la imagen principal)
          fetchPriority="high"
        />
        <div className={styles.overlay}></div>
      </div>

      {/* 2. Contenido Principal */}
      <div className='container'>
        <div className={styles.content}>

          <h1 className={`${styles.titleHero} fadeIn`}>
            Renaciendo de las
            <span className={styles.textHero}>
              Adversidades
            </span>
          </h1>

          <p className={`${styles.subtitleHero} fadeInDelay1`}>
            Ave Fénix es una organización dedicada a brindar apoyo integral a personas en situación de vulnerabilidad, promoviendo la inclusión y el desarrollo de capacidades.
          </p>

          <div className={`${styles.buttonContainer} fadeInDelay2`}>
            <button onClick={onCtaClick} className={styles.buttonPrimary}>
              Apoyar Nuestra Causa <span>→</span>
            </button>

            <a href="#quienes-somos" className={styles.buttonSecondary}>
              Conocer Más
            </a>
          </div>

        </div>
      </div>

      {/* 3. Indicador de Scroll */}
      <div className={styles.bounceIndicator}>
        <ChevronDown size={48} strokeWidth={1.5} />
      </div>

    </section>
  );
}

export default Hero;