// src/App.jsx
import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// --- COMPONENTES CRÍTICOS (Carga inmediata) ---
// El Hero NO debe ser Lazy para que salga al instante
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

// --- COMPONENTES NO CRÍTICOS (Lazy Loading) ---
const QuienesSomos = React.lazy(() => import('./components/QuienesSomos/QuienesSomos'));
const MisionVision = React.lazy(() => import('./components/MisionVision/MisionVision'));
const SeparadorParallax = React.lazy(() => import('./components/separador/SeparadorParalax'));
const Valores = React.lazy(() => import('./components/Valores/Valores'));
const ProgramasImpacto = React.lazy(() => import('./components/ProgramasImpacto/ProgramasImpacto'));
const Eventos = React.lazy(() => import('./components/Eventos/Eventos'));
const Contacto = React.lazy(() => import('./components/Contacto/Contacto'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const DonateModal = React.lazy(() => import('./components/DonateModal/DonateModal'));
const Transparencia = React.lazy(() => import('./components/transparencia/Transparencia'));

// Cargador grande para cambios de página completos (ej: ir a Transparencia)
const PageLoader = () => (
  <div style={{ padding: '100px 0', textAlign: 'center', color: '#064e3b' }}>
    Cargando...
  </div>
);

// Cargador pequeño o invisible para las secciones de abajo
// (Usamos null para que no parpadee nada, simplemente aparezca cuando esté listo)
const SectionLoader = () => null; 

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openDonateModal = () => setIsModalOpen(true);
  const closeDonateModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onDonateClick={openDonateModal} />

      <main>
        {/* SUSPENSE PRINCIPAL: Solo maneja la navegación entre páginas */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            
            {/* --- RUTA INICIO --- */}
            <Route path="/" element={
              <>
                {/* SEO Nativo */}
                <title>ONG Ave Fénix | Ayuda Humanitaria en Chimbote</title>
                <meta name="description" content="ONG dedicada a la lucha contra el infortunio y ayuda social en Nuevo Chimbote. Voluntariado y donaciones." />

                {/* 1. EL HERO SE CARGA FUERA DEL SUSPENSE INTERNO */}
                {/* Esto garantiza que la portada aparezca INMEDIATAMENTE */}
                <Hero onCtaClick={openDonateModal} />

                {/* 2. EL RESTO SE CARGA SILENCIOSAMENTE ABAJO */}
                <Suspense fallback={<SectionLoader />}>
                  <QuienesSomos />
                  <MisionVision />
                  
                  <SeparadorParallax
                    imagenFondo="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1920&q=80"
                    texto="Nuestra fuerza radica en la unión de cada voluntad"
                  />

                  <Valores />
                  <ProgramasImpacto />
                  <Eventos onDntClick={openDonateModal} />

                  <SeparadorParallax
                    imagenFondo="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80"
                    texto="¿Listo para ser parte del cambio? Tu apoyo hace la diferencia."
                  />

                  <Contacto />
                </Suspense>
              </>
            } />

            {/* --- RUTA TRANSPARENCIA --- */}
            {/* Al ser una página nueva completa, usará el PageLoader de arriba */}
            <Route path="/transparencia" element={<Transparencia />} />

          </Routes>
        </Suspense>
      </main>

      {/* Footer y Modal también cargan silenciosamente */}
      <Suspense fallback={null}>
         <Footer />
         {isModalOpen && (
           <DonateModal
             isOpen={isModalOpen}
             onClose={closeDonateModal}
           />
         )}
      </Suspense>
    </>
  );
}

export default App;