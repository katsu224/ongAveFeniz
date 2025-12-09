import React from 'react';
import styles from './Footer.module.css';

import logo from '../../assets/logo.jpg'; // Logo real de la ONG
import { Link } from 'react-router-dom';
// Iconos de redes sociales
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

// --- Links principales del sitio ---
const navItems = [
  { label: 'Inicio', href: '#' },
  { label: 'Misión', href: '#mision' },
  { label: 'Programas', href: '#programas' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Eventos', href: '#eventos' },

];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">

        {/* --- GRID PRINCIPAL (3 columnas) --- */}
        <div className={styles.footerGrid}>

          {/* --- Columna 1: Logo + Descripción + Redes --- */}
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
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
            </div>
          </div>

          {/* --- Columna 2: Enlaces Rápidos --- */}
          <div className={styles.footerLinks}>
            <h4>Enlaces Rápidos</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Columna 3: Contacto Real --- */}
          <div className={styles.footerContact}>
            <h4>Contacto</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} />
                Jr. Ladislao Espinar 513, Chimbote, Áncash, Perú
              </li>
              <li>
                <Phone size={18} />
                +51 974985750
              </li>
              <li>
                <Mail size={18} />
                crjm2013@gmail.com
              </li>
              <li>
                <Link to="/transparencia" className={styles.link}>
                  Transparencia
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* --- 2. Sub-Footer (Información Legal + Derechos) --- */}
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
