// src/App.jsx
import React, { useState, Suspense } from 'react';

// --- COMPONENTES CRÍTICOS (Se cargan al instante) ---
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

// --- COMPONENTES NO CRÍTICOS (Lazy Loading) ---
// Estos solo se descargarán cuando el navegador tenga tiempo libre
// o cuando el usuario se acerque a ellos haciendo scroll.
const QuienesSomos = React.lazy(() => import('./components/QuienesSomos/QuienesSomos'));
const MisionVision = React.lazy(() => import('./components/MisionVision/MisionVision'));
const SeparadorParallax = React.lazy(() => import('./components/separador/SeparadorParalax'));
const Valores = React.lazy(() => import('./components/Valores/Valores'));
const ProgramasImpacto = React.lazy(() => import('./components/ProgramasImpacto/ProgramasImpacto'));
const Eventos = React.lazy(() => import('./components/Eventos/Eventos'));
const Contacto = React.lazy(() => import('./components/Contacto/Contacto'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const DonateModal = React.lazy(() => import('./components/DonateModal/DonateModal'));

// Un componente simple para mostrar mientras cargan las partes lazy (opcional pero recomendado)
const LoadingFallback = () => <div style={{ py: 20, textAlign: 'center' }}>Cargando...</div>;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDonateModal = () => setIsModalOpen(true);
  const closeDonateModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onDonateClick={openDonateModal} />

      <main>
        <Hero onCtaClick={openDonateModal} />

        {/* Suspense envuelve a los componentes lazy.
            'fallback' es lo que se muestra mientras cargan. */}
        <Suspense fallback={<LoadingFallback />}>
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
      </main>

      <Suspense fallback={null}>
         <Footer />
         {/* El modal también puede ser lazy. Solo se cargará si se necesita.
             Aunque si pesa poco, podrías dejarlo normal para que abra más rápido al primer clic.
             Pruébalo así primero. */}
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