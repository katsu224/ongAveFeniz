import React from 'react';
import CountUp from 'react-countup'; // Importamos el componente de animación
import { useInView } from 'react-intersection-observer'; // Importamos el hook para detectar scroll
import styles from './ProgramasImpacto.module.css';
import { Users, HeartHandshake, Calendar, SmilePlus } from 'lucide-react';
// --- Datos de los Programas ---
import imgVida from '../../assets/programasImpacto/vida.webp';
import imgFamilia from '../../assets/programasImpacto/familia.webp';
import imgComunidad from '../../assets/programasImpacto/comunidad.webp';

// --- Datos de los Programas ---
const programas = [
  {
    // 2. USA LAS VARIABLES IMPORTADAS EN LUGAR DEL STRING DIRECTO
    imgSrc: imgVida,
    title: 'Vida Plena',
    text: 'Promovemos hábitos saludables y actividades que mejoran la calidad de vida de las personas con discapacidad y sus familias.'
  },
  {
    imgSrc: imgFamilia,
    title: 'Familias Fuertes',
    text: 'Fomentamos la unión familiar y el apoyo mutuo a través de charlas, dinámicas y espacios de encuentro comunitario.'
  },
  {
    imgSrc: imgComunidad,
    title: 'Comunidad Solidaria',
    text: 'Impulsamos la participación ciudadana y el voluntariado para fortalecer la ayuda mutua en nuestras comunidades.'
  }
];


// --- Datos de Impacto (Separamos el número del sufijo para poder animarlo bien) ---
// --- Datos de Impacto ---
const impacto = [
  {
    number: 500, suffix: '+', label: 'Personas Beneficiadas',
    icon: <Users size={40} strokeWidth={1.5} /> // Icono añadido
  },
  {
    number: 5, suffix: '+', label: 'Programas Activos',
    icon: <HeartHandshake size={40} strokeWidth={1.5} />
  },
  {
    number: 1, suffix: '+', label: 'Años de Experiencia',
    icon: <Calendar size={40} strokeWidth={1.5} />
  },
  {
    number: 100, suffix: '+', label: 'Voluntarios',
    icon: <SmilePlus size={40} strokeWidth={1.5} />
  }
];

function ProgramasImpacto() {
  // Hook para detectar cuándo la sección de impacto entra en la vista.
  // triggerOnce: true hace que la animación solo ocurra la primera vez que se ve.
  // threshold: 0.3 significa que se activa cuando el 30% del elemento es visible.
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="programas" className={styles.section}>
      <div className="container">
        {/* --- 1. Sección Nuestros Programas --- */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Nuestros Programas</h2>
          <div className={styles.titleDecorator}></div>
          <p>
            Desarrollamos programas integrales que promueven la salud, la inclusión,
            la autonomía y el bienestar de las personas más vulnerables.
          </p>
        </div>

        {/* Parrilla (Grid) de Programas */}
        <div className={styles.programasGrid}>
          {programas.map((programa) => (
            <div key={programa.title} className={styles.programaCard}>
              <div className={styles.cardImage}>
                <img src={programa.imgSrc} alt={programa.title} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <h3>{programa.title}</h3>
                <p>{programa.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- 2. Sección Nuestro Impacto (MEJORADA) --- */}
        <div className={styles.impactoWrapper} ref={ref}>
          {/* Fondo con textura sutil (opcional, si tienes una imagen) */}
          {/* <div className={styles.impactoBgTexture}></div> */}

          <div className={styles.impactoContentRelative}> {/* Contenedor para asegurar que el texto quede sobre el fondo */}
            <h2 className={styles.impactoTitle}>Nuestro Impacto</h2>
            <p className={styles.impactoSubtitle}>Transformando vidas y construyendo un futuro más inclusivo</p>

            <div className={styles.impactoGrid}>
              {impacto.map((item, index) => (
                <div key={item.label} className={styles.impactoItem}>
                  {/* ICONO AÑADIDO AQUÍ */}
                  <div className={styles.impactoIcon}>
                    {item.icon}
                  </div>

                  <span className={styles.impactoNumber}>
                    {inView ? (
                      <CountUp start={0} end={item.number} duration={2.5} separator="," suffix={item.suffix} />
                    ) : (
                      <span>0{item.suffix}</span>
                    )}
                  </span>
                  <span className={styles.impactoLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramasImpacto;