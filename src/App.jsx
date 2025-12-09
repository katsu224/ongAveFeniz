// src/App.jsx
import React, { useState, Suspense } from 'react';
// IMPORTANTE: Necesitas instalar react-router-dom si no lo tienes
// npm install react-router-dom
import { Routes, Route } from 'react-router-dom';
// --- COMPONENTES CRÍTICOS (Se cargan al instante) ---
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

// --- NUEVA PÁGINA (Lazy Loading) ---
const Transparencia = React.lazy(() => import('./components/transparencia/Transparencia'));

// Un componente simple para mostrar mientras cargan las partes lazy
const LoadingFallback = () => (
  <div style={{ padding: '50px 0', textAlign: 'center' }}>Cargando...</div>
);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDonateModal = () => setIsModalOpen(true);
  const closeDonateModal = () => setIsModalOpen(false);

  return (
    <>
         {/* El Navbar se mantiene fijo en todas las rutas para navegación consistente */}
      <Navbar onDonateClick={openDonateModal} />

      <main>
        {/* Usamos Suspense para manejar la carga de las rutas */}
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            
            {/* RUTA 1: TU LANDING PAGE ORIGINAL (INICIO) */}
            <Route path="/" element={
              <>
                <title>ONG Ave Fénix | Ayuda Humanitaria en Chimbote</title>
                <meta name="description" content="ONG dedicada a la lucha contra el infortunio..." />
                <Hero onCtaClick={openDonateModal} />
                
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
              </>
            } />

            {/* RUTA 2: LA NUEVA PÁGINA DE TRANSPARENCIA */}
            <Route path="/transparencia" element={<Transparencia />} />

          </Routes>
        </Suspense>
      </main>

      <Suspense fallback={null}>
         {/* El Footer se muestra en todas las páginas */}
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