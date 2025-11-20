import React from 'react';

// Estilos en línea para simplificar, o muévelos a un CSS aparte si prefieres.
const styles = {
  
  parallaxContainer: {
    /* Altura del separador. Ajústala a tu gusto (ej. 300px, 40vh) */
    height: '20vh',
    minHeight: '200px', 
    
    /* LA MAGIA DEL PARALLAX: */
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    
    /* Flex para centrar el texto opcional */
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
 overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    /* ANTES: backgroundColor: 'rgba(0, 0, 0, 0.5)', */
    /* AHORA: Menos oscuro para que la foto brille más */
    backgroundColor: 'rgba(0, 0, 0, 0.35)', 
  },
  text: {
    color: 'white',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1,
    padding: '0 20px',
    /* Aumentamos un poco la sombra del texto para que se lea bien aunque el fondo sea más claro */
    textShadow: '0 4px 8px rgba(0,0,0,0.7)',
  }
};

const SeparadorParallax = ({ imagenFondo, texto }) => {
  return (
    <div 
      style={{ ...styles.parallaxContainer, backgroundImage: `url(${imagenFondo})` }}
      className="separador-parallax"
    >
      <div style={styles.overlay}></div>
      {texto && <h2 style={styles.text}>{texto}</h2>}
    </div>
  );
};

export default SeparadorParallax;