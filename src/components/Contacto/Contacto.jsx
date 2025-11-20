import React from 'react';
import styles from './Contacto.module.css';
import '../../index.css'; // Para el .container

// Importamos los iconos
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// --- Datos de Contacto Reales ---
const contactInfo = [
  {
    icon: <MapPin size={20} />,
    label: 'Dirección',
    text: 'Jr. Ladislao Espinar 513, Chimbote, Áncash, Perú'
  },
  {
    icon: <Phone size={20} />,
    label: 'Teléfono',
    text: '+51 43 974985750'
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    text: 'crjm2013@gmail.com'
  },
  {
    icon: <Clock size={20} />,
    label: 'Horarios',
    text: 'Lunes a Viernes: 9:00 AM - 6:00 PM\nSábados: 9:00 AM - 1:00 PM'
  }
];

function Contacto() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado (simulación)');
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className="container">

        {/* --- 1. Título de la Sección --- */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Contáctanos</h2>
          <div className={styles.titleDecorator}></div>
          <p>
            En <strong>ONG Ave Fénix</strong> trabajamos por una sociedad más inclusiva. 
            Si deseas colaborar, participar o conocer más sobre nuestros programas, 
            ponte en contacto con nosotros.
          </p>
        </div>

        {/* --- 2. Contenido Principal (Grid de 2 columnas) --- */}
        <div className={styles.contentWrapper}>

          {/* --- Columna Izquierda: Información --- */}
          <div className={styles.infoWrapper}>
            <h3>Información de Contacto</h3>
            
            <ul className={styles.infoList}>
              {contactInfo.map((item) => (
                <li key={item.label} className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    {item.icon}
                  </div>
                  <div className={styles.infoText}>
                    <strong>{item.label}</strong>
                    <pre>{item.text}</pre>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Columna Derecha: Formulario --- */}
          <div className={styles.formWrapper}>
            <h3>Envíanos un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" id="nombre" placeholder="Tu nombre" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="apellido">Apellido</label>
                  <input type="text" id="apellido" placeholder="Tu apellido" required />
                </div>
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="tu@email.com" required />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="asunto">Asunto</label>
                <input type="text" id="asunto" placeholder="¿En qué podemos ayudarte?" required />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" rows="6" placeholder="Escribe tu mensaje aquí..." required></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
