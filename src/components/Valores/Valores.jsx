import React, { useState, useEffect } from "react";
import { Eye, ShieldCheck, Scale, Flame, Handshake, Lightbulb, Users } from "lucide-react";
import styles from './Valores.module.css';

const valores = [
  { icon: <Eye size={32} />, title: 'Transparencia', text: 'Informamos claramente sobre nuestras actividades y el uso de recursos. Queremos que nuestros donantes y beneficiarios confíen plenamente en nuestra labor.' },
  { icon: <ShieldCheck size={32} />, title: 'Responsabilidad', text: 'Nos hacemos responsables de nuestras acciones y resultados. Gestionamos los recursos con integridad y evaluamos continuamente nuestro impacto.' },
  { icon: <Scale size={32} />, title: 'Integridad', text: 'Actuamos de manera ética y honesta. La coherencia entre lo que decimos y hacemos es esencial para ganar y mantener la confianza de la comunidad.' },
  { icon: <Flame size={32} />, title: 'Compromiso', text: 'Estamos dedicadas a nuestra misión con pasión y determinación. Trabajamos incansablemente para superar desafíos y lograr cambios significativos.' },
  { icon: <Handshake size={32} />, title: 'Respeto', text: 'Valoramos y tratamos a todos con dignidad. Escuchamos y atendemos las necesidades de las comunidades a las que servimos.' },
  { icon: <Scale size={32} />, title: 'Equidad', text: 'Promovemos la justicia y la igualdad en la distribución de recursos y oportunidades, sin favoritismos ni discriminación.' },
  { icon: <Lightbulb size={32} />, title: 'Innovación', text: 'Buscamos soluciones nuevas y creativas para enfrentar problemas. Nos adaptamos a los cambios para ser más efectivos en nuestra labor.' },
  { icon: <Users size={32} />, title: 'Colaboración', text: 'Trabajamos en equipo con otras organizaciones y comunidades para fortalecer nuestros esfuerzos y ampliar nuestro impacto.' }
];

const Valores = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 768);
    checkSize(); // corre al inicio
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const valoresToShow = isMobile && !showAll ? valores.slice(0, 3) : valores;

  return (
    <section className={styles.valoresSection}>
      <div className="container">
        <div className={styles.valoresWrapper}>
          <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          <div className={styles.titleDecorator}></div>

          <div className={styles.valoresGrid}>
            {valoresToShow.map((valor) => (
              <div key={valor.title} className={styles.valorCard}>
                <div className={styles.valorCardInner}>
                  <div className={styles.valorCardFront}>
                    <div className={styles.iconWrapper}>
                      {valor.icon}
                    </div>
                    <h4>{valor.title}</h4>
                  </div>

                  <div className={styles.valorCardBack}>
                    <p>{valor.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón solo en móvil */}
          {isMobile && (
            <button
              className={styles.verMasBtn}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Ver menos" : "Ver más"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Valores;