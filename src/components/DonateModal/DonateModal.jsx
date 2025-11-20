import React from 'react';
import ReactDOM from 'react-dom'; // Importante para el Portal
import styles from './DonateModal.module.css';
import { X, CreditCard, Smartphone } from 'lucide-react';
import qr from '../../assets/modalDonar/qr.png';

function DonateModal({ isOpen, onClose }) {
  // Si no está abierto, no renderizamos nada
  if (!isOpen) return null;

  // Evita que el click dentro del modal lo cierre
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  // Usamos createPortal para renderizar el modal directamente en el document.body
  // Esto soluciona el problema de que aparezca "en medio" de la página larga.
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={handleContentClick}>

        {/* --- HEADER --- */}
        <div className={styles.modalHeader}>
          <div>
            <h3>Apoya Nuestra Causa</h3>
            <p>Tu donación nos ayuda a seguir transformando vidas</p>
          </div>
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Cerrar modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* --- BODY --- */}
        <div className={styles.modalBody}>

          {/* QR */}
          <div className={styles.qrSection}>
            <img
              src={qr}
              alt="Código QR Yape"
              className={styles.qrImage}
            />
            <p>Escanea el código QR para donar vía Yape</p>
          </div>

          {/* Transferencia */}
          <div className={styles.infoSection}>
            <h4 className={styles.infoTitle}>
              <CreditCard size={20} color="#1b4d3e" />
              Transferencia Bancaria
            </h4>
            <div className={styles.infoGrid}>
              <span className={styles.infoLabel}>Banco:</span>
              <span className={styles.infoValue}>BCP</span>

              <span className={styles.infoLabel}>Cuenta:</span>
              <span className={styles.infoValue}>XXXX-XXXX-XXXX</span>

              <span className={styles.infoLabel}>Titular:</span>
              <span className={styles.infoValue}>Ave Fénix ONG</span>
            </div>
          </div>

          {/* Yape */}
          <div className={styles.infoSection}>
            <h4 className={styles.infoTitle}>
              <Smartphone size={20} color="#1b4d3e" />
              Yape
            </h4>
            <div className={styles.infoGrid}>
              <span className={styles.infoLabel}>Número:</span>
              <span className={styles.infoValue}>974-985-750</span>

              <span className={styles.infoLabel}>Nombre:</span>
              <span className={styles.infoValue}>Ave Fénix</span>
            </div>
          </div>

          {/* Mensaje Final */}
          <div className={styles.thanksBox}>
            <strong>¡Gracias por tu generosidad!</strong>
            <p>Cada donación nos acerca más a una sociedad inclusiva.</p>
          </div>

        </div>

        {/* --- FOOTER --- */}
        <div className={styles.modalFooter}>
          <button onClick={onClose} className={styles.footerCloseButton}>
            Cerrar
          </button>
        </div>

      </div>
    </div>,
    document.getElementById('modal-root') || document.body
  );
}

export default DonateModal;