// src/components/Transparencia/Transparencia.jsx
import React from 'react';
import styles from './Transparencia.module.css';

const Transparencia = () => {
  // Datos exactos basados en tus archivos de la carpeta public/documentos
  const secciones = [
    {
      titulo: "Documentos de la Asociación",
      items: [
        { 
          nombre: "Certificado de Vigencia – SUNARP (2024)", 
          desc: "Superintendencia Nacional de los Registros Publicos", 
          // Nombre exacto según tu imagen
          link: "/documentos/certificado de vigencia_sunarp.pdf" 
        },
        { 
          nombre: "Constitución e Inscripción – SUNARP (2022)", 
          desc: "Superintendencia Nacional de los Registros Publicos", 
          // Nombre exacto según tu imagen
          link: "/documentos/inscripcion de asociaciones_sunarp.pdf" 
        },
      ]
    },
    {
      titulo: "Datos Fiscales",
      items: [
        { 
          nombre: "Ficha RUC – SUNAT (2024)", 
          desc: "Superintendencia Nacional de Aduanas y de Administración Tributaria", 
          // Nombre exacto según tu imagen
          link: "/documentos/ficha ruc_sunat.pdf" 
        },
        { 
          nombre: "Resolución de Perceptora de Donaciones – SUNAT (2023)", 
          desc: "Superintendencia Nacional de Aduanas", 
          // Nombre exacto según tu imagen
          link: "/documentos/resolucion de perceptora de donaciones_sunat.pdf" 
        },
      ]
    },
    {
      titulo: "Autorizaciones Nacionales",
      items: [
        { 
          nombre: "Registro ONGD – APCI (2024)", 
          desc: "Agencia Peruana de Cooperación Internacional", 
          // Nombre exacto según tu imagen
          link: "/documentos/resolucion_apci.pdf" 
        },
      ]
    },
    {
      titulo: "Propiedad Intelectual",
      items: [
        { 
          nombre: "Certificado de Marca – INDECOPI (2025)", 
          desc: "Registro de la Propiedad Intelectual", 
          // Nombre exacto según tu imagen
          link: "/documentos/registro de la propiedad_indecopi.pdf" 
        },
        { 
          nombre: "Resolución de Registro – INDECOPI (2025)", 
          desc: "Resolución oficial de registro", 
          // Nombre exacto según tu imagen
          link: "/documentos/resolucion de registro_indecopi.pdf" 
        },
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Transparencia y <br /> Documentos Legales</h1>
      </header>

      <div className={styles.content}>
        {secciones.map((seccion, index) => (
          <section key={index} className={styles.section}>
            <h2 className={styles.sectionTitle}>{seccion.titulo}</h2>
            
            <div className={styles.grid}>
              {seccion.items.map((item, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.info}>
                    <h3>{item.nombre}</h3>
                    {item.desc && <p>{item.desc}</p>}
                  </div>
                  <div className={styles.action}>
                    {/* target="_blank": Abre en nueva pestaña (Vista Previa)
                        rel="noopener noreferrer": Seguridad obligatoria en React
                    */}
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.button}
                    >
                      Descargar PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Transparencia;