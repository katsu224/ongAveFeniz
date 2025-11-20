import React from 'react';
import styles from './MisionVision.module.css';
import { Heart, Globe } from "lucide-react";

function MisionVision() {
  return (
    <section className={styles.section} id='mision'>
      <div className={styles.gridContainer}>

        {/* --- Tarjeta 1: Misión --- */}
        <div className={`${styles.card} ${styles.cardMision}`}>
          <div className={`${styles.iconCircle} ${styles.iconRed}`}>
            <Heart size={32} strokeWidth={2.5} />
          </div>

          <h2 className={styles.title}>Nuestra Misión</h2>

          <p className={styles.text}>
            Mejorar la calidad de vida de las personas más desfavorecidas,
            especialmente aquellas con discapacidades, mediante programas
            integrales de salud y desarrollo comunitario.
          </p>

          <a href="#programas" className={styles.btnPrimary}>
            Ver nuestros programas <span>→</span>
          </a>
        </div>

        {/* --- Tarjeta 2: Visión --- */}
        <div className={`${styles.card} ${styles.cardVision}`}>
          <div className={`${styles.iconCircle} ${styles.iconGreen}`}>
            <Globe size={32} strokeWidth={2.5} />
          </div>

          <h2 className={styles.title}>Nuestra Visión</h2>

          <p className={styles.text}>
            Ser un referente en el Perú, donde la integridad y la empatía
            construyan una sociedad inclusiva, garantizando un impacto
            sostenible en todas nuestras comunidades.
          </p>

          {/* SOLUCIÓN AL ESPACIO VACÍO: Botón secundario */}
          {/* Si no tienes una página específica, manda a Contacto o Sobre Nosotros */}
          <a href="#contacto" className={styles.btnSecondary}>
            Únete al cambio
          </a>
        </div>

      </div>
    </section>
  );
}

export default MisionVision;