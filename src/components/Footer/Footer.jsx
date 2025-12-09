// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Agregamos hooks para navegación inteligente
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Función inteligente para navegar (igual que en el Navbar)
  const handleNavigation = (e, href) => {
    e.preventDefault(); // Evitamos el comportamiento por defecto

    // Si es Transparencia, usamos navigate
    if (href === '/transparencia') {
      navigate('/transparencia');
      window.scrollTo(0, 0);
      return;
    }

    // Si es el inicio
    if (href === '#') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // Si es un ancla (#mision, #contacto, etc.)
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Misión', href: '#mision' },
    { label: 'Programas', href: '#programas' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Contacto', href: '#contacto' },
    // AHORA SÍ: Transparencia está donde debe estar
    { label: 'Transparencia', href: '/transparencia' }, 
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">

        {/* --- GRID PRINCIPAL --- */}
        <div className={styles.footerGrid}>

          {/* COLUMNA 1: INFO */}
          <div className={styles.footerAbout}>
            <div className={styles.logoGroup}>
              <div className={styles.logoIcon}>
                <img src={logo} alt="Logo Ave Fénix" />
              </div>
              <div className={styles.logoTextContainer}>
                <div className={styles.logoTitle}>ONG AVE FÉNIX</div>
                <div className={styles.logoSubtitle}>LUCHA CONTRA EL INFORTUNIO</div>
              </div>
            </div>

            <p>
              Trabajamos por la inclusión social, el desarrollo humano y la
              mejora de la calidad de vida de las personas en situación de
              vulnerabilidad en el Perú.
            </p>

            <div className={styles.socialIcons}>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
            </div>
          </div>

          {/* COLUMNA 2: ENLACES RÁPIDOS (Ahora incluye Transparencia) */}
          <div className={styles.footerLinks}>
            <h4>Enlaces Rápidos</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleNavigation(e, item.href)}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: CONTACTO (Limpio, solo datos reales) */}
          <div className={styles.footerContact}>
            <h4>Contacto</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} style={{ minWidth: '18px' }} />
                <span>Jr. Ladislao Espinar 513, Chimbote, Áncash, Perú</span>
              </li>
              <li>
                <Phone size={18} style={{ minWidth: '18px' }} />
                <span>+51 974985750</span>
              </li>
              <li>
                <Mail size={18} style={{ minWidth: '18px' }} />
                <span>crjm2013@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SUB-FOOTER */}
        <hr className={styles.divider} />
        <div className={styles.subFooter}>
          <p>© {new Date().getFullYear()} ONG Ave Fénix (RUC: 20610193341). Todos los derechos reservados.</p>
          <p>Hecho con ♥ desde Chimbote, Perú</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;