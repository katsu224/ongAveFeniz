// src/components/Navbar/Navbar.jsx
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from './Navbar.module.css'; // 1. Importamos nuestro CSS
import logo from '../../assets/logo.jpg'; // Importamos el logo

// 2. Necesitamos importar los estilos globales


function Navbar({ onDonateClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Misión', href: '#mision' },
    { label: 'Programas', href: '#programas' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      {/* Usamos la clase global .container (Esto está perfecto) */}
      <div className="container">
        <div className={styles.navContainer}>
          <div className={styles.logoGroup}>
            <div className={styles.logoIcon}>
              <img src={logo} alt="Ave Fénix Logo" />
            </div>

            <div className={styles.logoTextContainer}>
              <div className={styles.logoTitle}>AVE FÉNIX</div>
              <div className={styles.logoSubtitle}>ONG LUCHA CONTRA EL INFORTUNIO</div>
            </div>
          </div>

          <nav className={styles.navDesktop}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={styles.navLink}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onDonateClick}
              className={styles.donateButton}
            >
              Donar
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menuToggle}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={`${styles.navMobile} fadeIn`}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={styles.navLinkMobile}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onDonateClick?.();
                setIsMenuOpen(false);
              }}
              className={styles.donateButtonMobile}
            >
              Donar
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;