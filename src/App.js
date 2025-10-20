import React, { useEffect, useState } from "react";
import "./App.css";
import ConfirmacionForm from "./ConfirmacionForm";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleConfirmarClick = () => {
    setMostrarFormulario(true);
  };

  const handleVolver = () => {
    setMostrarFormulario(false);
  };

  if (mostrarFormulario) {
    return <ConfirmacionForm onVolver={handleVolver} />;
  }

  return (
    <div className="App">
      <div className={`invitation-container ${isVisible ? "fade-in" : ""}`}>
        {/* Header decorativo */}
        <div className="header-decoration">
          <div className="line left-line"></div>
          <div className="ornament">✦</div>
          <div className="line right-line"></div>
        </div>

        {/* Título principal */}
        <div className="main-title">
          <h1 className="title-line-1 animate-slide-down">
            Colegio Nacional De
          </h1>
          <h1 className="title-line-2 animate-slide-up">Curadores Urbanos</h1>
        </div>

        {/* Número de aniversario */}
        <div className="anniversary-number animate-scale">
          <div className="number-container">
            <span className="number">30</span>
            <span className="years-text">AÑOS</span>
          </div>
        </div>

        {/* Mensaje de invitación */}
        <div className="invitation-message animate-fade-in-delay">
          <p className="message-intro">
            Tiene el honor de invitarle a celebrar
          </p>
          <h2 className="event-title">Tres Décadas de Excelencia</h2>
          <p className="message-subtitle">
            en la formación de profesionales comprometidos con el desarrollo
            urbano
          </p>
        </div>

        {/* Detalles del evento */}
        <div className="event-details animate-fade-in-delay-2">
          <div className="detail-item">
            <div className="detail-icon">📅</div>
            <div className="detail-content">
              <p className="detail-label">Fecha</p>
              <p className="detail-value">15 de Noviembre, 2025</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">⏰</div>
            <div className="detail-content">
              <p className="detail-label">Hora</p>
              <p className="detail-value">19:00 hrs</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">📍</div>
            <div className="detail-content">
              <p className="detail-label">Lugar</p>
              <p className="detail-value">Salón de Eventos Grand Palace</p>
              <p className="detail-address">Av. Principal #123, Ciudad</p>
            </div>
          </div>
        </div>

        {/* Código de vestimenta */}
        <div className="dress-code animate-fade-in-delay-3">
          <p className="dress-code-label">Código de vestimenta</p>
          <p className="dress-code-value">Formal / Etiqueta</p>
        </div>

        {/* Confirmación */}
        <div className="rsvp animate-fade-in-delay-4">
          <p className="rsvp-text">Favor de confirmar su asistencia</p>
          <div className="rsvp-contact">
            <p>📧 eventos@curadores.org</p>
            <p>📱 +52 55 1234 5678</p>
          </div>

          <button className="btn-confirmar" onClick={handleConfirmarClick}>
            <span className="btn-icon">✓</span>
            Confirmar Asistencia
          </button>
        </div>

        {/* Footer decorativo */}
        <div className="footer-decoration">
          <div className="line left-line"></div>
          <div className="ornament">✦</div>
          <div className="line right-line"></div>
        </div>

        {/* Elementos decorativos flotantes */}
        <div className="floating-elements">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
