// src/components/Navbar/Navbar.jsx
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Agregamos hooks útiles
import styles from './Navbar.module.css';
import logo from '../../assets/logo.jpg';

function Navbar({ onDonateClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Hooks para saber dónde estamos y para navegar
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Inicio', href: '/' }, // Cambiado a '/' para ir al Home real
    { label: 'Misión', href: '#mision' },
    { label: 'Programas', href: '#programas' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Contacto', href: '#contacto' },
    { label: 'Transparencia', href: '/transparencia' }, // Ruta nueva
  ];

  const handleNavigation = (href) => {
    setIsMenuOpen(false);

    // CASO 1: Es una ruta de página distinta (empieza con '/')
    // Ejemplo: /transparencia
    if (href.startsWith('/') && !href.includes('#')) {
      navigate(href);
      window.scrollTo(0, 0); // Asegurar que empiece arriba
      return;
    }

    // CASO 2: Es el Inicio ('/')
    if (href === '/') {
        if (location.pathname !== '/') {
            navigate('/'); // Si estamos fuera, ir al home
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Si estamos en home, subir suave
        }
        return;
    }

    // CASO 3: Es un ancla (#mision, #contacto)
    if (href.startsWith('#')) {
      // Si NO estamos en el Home, primero vamos al Home y luego scrolleamos
      if (location.pathname !== '/') {
        navigate('/');
        // Damos un pequeño tiempo para que cargue el home antes de buscar el ID
        setTimeout(() => {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Si YA estamos en el Home, scrolleamos normal
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navContainer}>
          
          {/* LOGO - Clic lleva al inicio */}
          <Link to="/" className={styles.logoGroup} style={{ textDecoration: 'none' }}>
            <div className={styles.logoIcon}>
              <img src={logo} alt="Ave Fénix Logo" />
            </div>
            <div className={styles.logoTextContainer}>
              <div className={styles.logoTitle}>AVE FÉNIX</div>
              <div className={styles.logoSubtitle}>ONG LUCHA CONTRA EL INFORTUNIO</div>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <nav className={styles.navDesktop}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className={styles.navLink}
              >
                {item.label}
              </button>
            ))}
            <button onClick={onDonateClick} className={styles.donateButton}>
              Donar
            </button>
          </nav>

          {/* BOTÓN HAMBURGUESA MÓVIL */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menuToggle}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MENU MÓVIL */}
        {isMenuOpen && (
          <div className={`${styles.navMobile} fadeIn`}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
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