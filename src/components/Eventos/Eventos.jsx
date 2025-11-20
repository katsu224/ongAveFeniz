import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import './Eventos.css';

// CONSTANTE: ¿Cuántas fotos quieres en el carrusel principal?
const NUM_FOTOS_CARRUSEL = 12;

// 1. CONFIGURACIÓN DE IMÁGENES (VITE)
// =========================================
// Importa automáticamente TODAS las fotos dentro de src/assets/eventos/
const images = import.meta.glob('../../assets/eventos/**/*.{jpeg,jpg,png,webp}', { eager: true });

// Función auxiliar para obtener la URL correcta
const getImageUrl = (path) => {
  // Construye la ruta completa relativa desde este archivo
  const fullPath = `../../assets/${path}`;
  // Devuelve la URL final procesada por Vite
  return images[fullPath]?.default;
};

// =========================================
// 2. DATOS DE LOS EVENTOS
// =========================================
const eventosData = [
  {
    id: 'navidad-2024',
    titulo: 'Navidad de Esperanza',
    fecha: '23 de Diciembre, 2024',
    ano: '2024',
    impacto: [
      { cifra: '150+', etiqueta: 'Familias Asistentes' },
      { cifra: '200', etiqueta: 'Regalos Entregados' },
      { cifra: '∞', etiqueta: 'Sonrisas Compartidas' }
    ],
    descripcionCorta: 'Llevando alegría, regalos y unión a más de 150 familias en una jornada inolvidable.',
    historiaCompleta: `
      La Navidad es una época de unión, pero para muchas familias que enfrentan desafíos diarios debido a la discapacidad, también puede ser un momento de aislamiento. Este año, en Ave Fénix, nos propusimos cambiar esa realidad y crear un recuerdo imborrable.
      
      Desde tempranas horas, nuestros voluntarios transformaron el local en un espacio mágico lleno de color y música. Cuando llegaron las primeras familias, sus caras de asombro y felicidad lo dijeron todo. No fue solo la entrega de canastas con alimentos esenciales o los juguetes para los niños; fue el compartir un baile, el reír juntos con el show infantil y el sentir que pertenecen a una comunidad que verdaderamente los valora y apoya.

      Cada sonrisa capturada ese día es un testimonio del poder de la solidaridad. Gracias a nuestros donantes, pudimos asegurar que ninguna familia se fuera sin un presente y, más importante aún, sin la certeza de que no están solos en su lucha.
    `,
    // Usamos la función auxiliar aquí
    imagenPortada: getImageUrl('eventos/navidadEsperanza/2024/portada.webp'),
    galeria: [
      { src: getImageUrl('eventos/navidadEsperanza/2024/1.webp'), caption: 'La alegría de compartir momentos juntos.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/2.webp'), caption: 'Disfrutando el show.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/3.webp'), caption: 'Niños disfrutando del show infantil.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/4.webp'), caption: 'Sonrisas inolvidables.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/5.webp'), caption: 'Niños disfrutando de una danza típica con alegría.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/6.webp'), caption: 'Presentación llena de color y energía infantil.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/7.webp'), caption: 'Baile tradicional interpretado por los más pequeños.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/8.webp'), caption: 'Niños mostrando su talento en una danza cultural.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/9.webp'), caption: 'Un momento de alegría y expresión a través del baile.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/10.webp'), caption: 'Entregando las canastas.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/11.webp'), caption: 'Sonrisas que nos llenan de ternura.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/12.webp'), caption: 'Un momento de alegría compartida.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/13.webp'), caption: 'Voluntarios y familias en armonía.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/14.webp'), caption: 'Compartiendo momentos especiales.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/15.webp'), caption: 'La fuerza de la comunidad.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/16.webp'), caption: 'Regalos que traen esperanza.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/17.webp'), caption: 'Unión familiar en Navidad.' },
      { src: getImageUrl('eventos/navidadEsperanza/2024/18.webp'), caption: 'ONG Ave Fénix.' },
    ]
  }
];

// --- SUBCOMPONENTE: CARRUSEL AUTOMÁTICO ---
const EventoCarousel = ({ imagenes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1));
  }, [imagenes.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1));
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000); // 4 segundos por slide
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  if (!imagenes || imagenes.length === 0) return null;

  return (
    <section
      id='eventos'
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {imagenes.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={img.src}
              alt={img.caption || `Foto ${index}`}
              loading={index === 0 ? "eager" : "lazy"}
              width="800"
              height="600"
            />
            <div className="carousel-caption-overlay">
              <p>{img.caption}</p>
              <span className="carousel-counter">{index + 1} / {imagenes.length}</span>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="carousel-btn prev" aria-label="Ver foto anterior"><ChevronLeft size={32} /></button>
      <button onClick={nextSlide} className="carousel-btn next" aria-label="Ver siguiente foto"><ChevronRight size={32} /></button>

      <div className="carousel-indicators">
        {imagenes.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

// --- COMPONENTE PRINCIPAL: EVENTOS ---
const Eventos = ({ onDntClick }) => {
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
  const [mostrarGaleriaCompleta, setMostrarGaleriaCompleta] = useState(false);
  const [imagenLightbox, setImagenLightbox] = useState(null);

  const handleOpenDonate = (e) => {
    e.preventDefault(); // Evita el salto del enlace href="#"
    cerrarModal();      // 1. Cierra el modal narrativo
    onDntClick();       // 2. Abre el modal principal de donación
  };
  // Resetear estados al cerrar modal
  const cerrarModal = () => {
    setEventoSeleccionado(null);
    setMostrarGaleriaCompleta(false);
  };

  // Bloquear scroll del body
  useEffect(() => {
    if (eventoSeleccionado || imagenLightbox) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [eventoSeleccionado, imagenLightbox]);

  return (
    <section id="eventos" className="eventos-section">
      <div className="container">
        <h2 className="section-title">Nuestros Eventos</h2>
        <p className="section-subtitle">
          Más que eventos, creamos momentos que fortalecen nuestra comunidad y llenan el alma.
        </p>

        {/* GRID INICIAL DE EVENTOS */}
        <div className="eventos-grid">
          {eventosData.map((evento) => (
            <div key={evento.id} className="evento-card fadeIn" onClick={() => setEventoSeleccionado(evento)}>
              <div className="evento-card-img-wrapper">
                <img
                  src={evento.imagenPortada}
                  alt={evento.titulo}
                  className="evento-card-img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="evento-year-badge">{evento.ano}</div>
              </div>
              <div className="evento-card-content">
                <h3>{evento.titulo}</h3>
                <p>{evento.descripcionCorta}</p>
                <button className="btn-ver-historia">Leer Historia</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL NARRATIVO --- */}
      {eventoSeleccionado && (
        <div className="modal-narrativo-overlay fadeIn" onClick={cerrarModal}>
          <div className="modal-narrativo-container" onClick={(e) => e.stopPropagation()}>
            <button className="btn-cerrar-narrativo" onClick={cerrarModal} aria-label="Cerrar">
              <X size={32} />
            </button>

            {/* HERO */}
            <div className="narrativo-hero" style={{ backgroundImage: `url(${eventoSeleccionado.imagenPortada})` }}>
              <div className="narrativo-hero-gradient"></div>
              <div className="narrativo-hero-content">
                <span className="evento-fecha-badge">{eventoSeleccionado.fecha}</span>
                <h2>{eventoSeleccionado.titulo}</h2>
              </div>
            </div>

            <div className="narrativo-body">
              {/* IMPACTO */}
              <div className="impacto-grid">
                {eventoSeleccionado.impacto.map((item, idx) => (
                  <div key={idx} className="impacto-item">
                    <span className="impacto-cifra">{item.cifra}</span>
                    <span className="impacto-etiqueta">{item.etiqueta}</span>
                  </div>
                ))}
              </div>

              {/* HISTORIA */}
              <div className="narrativo-historia">
                {eventoSeleccionado.historiaCompleta.split('\n\n').map((parrafo, index) => (
                  <p key={index}>{parrafo}</p>
                ))}
              </div>

              {/* CARRUSEL (TOP 10 FOTOS) */}
              <h3 className="galeria-titulo">Momentos Destacados</h3>
              <div className="galeria-carousel-wrapper">
                <EventoCarousel imagenes={eventoSeleccionado.galeria.slice(0, NUM_FOTOS_CARRUSEL)} />
              </div>

              {/* BOTÓN Y GRID DE GALERÍA COMPLETA */}
              {eventoSeleccionado.galeria.length > NUM_FOTOS_CARRUSEL && (
                <div className="galeria-completa-section">
                  {!mostrarGaleriaCompleta ? (
                    <button
                      className="btn-ver-galeria-completa"
                      onClick={() => setMostrarGaleriaCompleta(true)}
                    >
                      <Camera size={20} />
                      Ver galería completa ({eventoSeleccionado.galeria.length} fotos)
                    </button>
                  ) : (
                    <div className="galeria-grid-completa fadeIn">
                      {eventoSeleccionado.galeria.map((img, index) => (
                        <div key={index} className="galeria-item-mini" onClick={() => setImagenLightbox(img)}>
                          <img src={img.src} alt={img.caption || `Foto ${index}`} loading="lazy" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* CTA FINAL */}
              <div className="narrativo-cta">
                <h3>¿Te gustaría ser parte de nuestra próxima historia?</h3>
                <p>Tu apoyo hace posible que sigamos creando momentos de alegría.</p>
                <a href="#donar" className="btn-donar-evento" onClick={handleOpenDonate}>
                  Apoyar esta causa
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- LIGHTBOX --- */}
      {imagenLightbox && (
        <div className="lightbox-overlay fadeIn" onClick={() => setImagenLightbox(null)}>
          <button className="btn-cerrar-lightbox"><X size={40} /></button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={imagenLightbox.src} alt="Zoom" />
            {imagenLightbox.caption && <p className="lightbox-caption">{imagenLightbox.caption}</p>}
          </div>
        </div>
      )}
    </section>
  );
};

export default Eventos;