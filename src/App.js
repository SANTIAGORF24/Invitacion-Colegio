import React, { useEffect, useState } from "react";
import "./App.css";
import ConfirmacionForm from "./ConfirmacionForm";

function App() {
  const [seccionActual, setSeccionActual] = useState(0);
  const [animando, setAnimando] = useState(false);
  const [direccion, setDireccion] = useState("enter");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Distancia mínima para considerar un swipe (en px)
  const minSwipeDistance = 50;

  // Auto-avance cada 10 segundos
  useEffect(() => {
    if (seccionActual < 3) {
      const timer = setTimeout(() => {
        handleSiguiente();
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [seccionActual]);

  // Manejadores de touch para swipe en móviles
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe izquierda = siguiente
      handleSiguiente();
    } else if (isRightSwipe) {
      // Swipe derecha = anterior
      handleAnterior();
    }
  };

  const handleSiguiente = () => {
    if (seccionActual < 3 && !animando) {
      setAnimando(true);
      setDireccion("exit");

      setTimeout(() => {
        setSeccionActual((prev) => prev + 1);
        setDireccion("enter");
        setAnimando(false);
      }, 800);
    }
  };

  const handleAnterior = () => {
    if (seccionActual > 0 && !animando) {
      setAnimando(true);
      setDireccion("exit");

      setTimeout(() => {
        setSeccionActual((prev) => prev - 1);
        setDireccion("enter");
        setAnimando(false);
      }, 800);
    }
  };

  const handleVolver = () => {
    if (seccionActual > 0 && !animando) {
      setAnimando(true);
      setDireccion("exit");

      setTimeout(() => {
        setSeccionActual((prev) => prev - 1);
        setDireccion("enter");
        setAnimando(false);
      }, 800);
    }
  };

  // Mensajes del robot según la sección
  const getMensajeRobot = () => {
    switch (seccionActual) {
      case 0:
        return "¡Hola! Esta es una invitación especial para celebrar 30 años de excelencia. ¿Quieres conocer más?";
      case 1:
        return "Aquí está el programa completo del evento. ¡Dos días increíbles te esperan!";
      case 2:
        return "Esta es la información importante. ¿Listo para confirmar tu asistencia?";
      default:
        return "¡Bienvenido!";
    }
  };

  if (seccionActual === 3) {
    return <ConfirmacionForm onVolver={handleVolver} mostrarRobot={true} />;
  }

  return (
    <div
      className="App"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="scroll-container">
        {/* Sección 1: Título y 30 Años */}
        {seccionActual === 0 && (
          <div
            className={`seccion seccion-1 ${
              direccion === "enter" ? "slide-in" : "slide-out"
            }`}
          >
            {/* Header decorativo */}
            <div
              className={`header-decoration animate-item animate-delay-1 ${
                direccion === "exit" ? "animate-out" : ""
              }`}
            >
              <div className="line left-line"></div>
              <div className="ornament">✦</div>
              <div className="line right-line"></div>
            </div>

            {/* Título principal */}
            <div className="main-title">
              <h1
                className={`title-line-1 animate-item animate-delay-2 ${
                  direccion === "exit" ? "animate-out" : ""
                }`}
              >
                Colegio Nacional De
              </h1>
              <h1
                className={`title-line-2 animate-item animate-delay-3 ${
                  direccion === "exit" ? "animate-out" : ""
                }`}
              >
                Curadores Urbanos
              </h1>
            </div>

            {/* Número de aniversario */}
            <div
              className={`anniversary-number animate-item animate-delay-4 ${
                direccion === "exit" ? "animate-out" : ""
              }`}
            >
              <div className="number-container">
                <span className="number">30</span>
                <span className="years-text">AÑOS</span>
              </div>
            </div>

            {/* Mensaje de invitación */}
            <div className="invitation-message">
              <p
                className={`message-intro animate-item animate-delay-5 ${
                  direccion === "exit" ? "animate-out" : ""
                }`}
              >
                Tiene el honor de invitarle a celebrar
              </p>
              <h2
                className={`event-title animate-item animate-delay-6 ${
                  direccion === "exit" ? "animate-out" : ""
                }`}
              >
                Tres Décadas de Excelencia
              </h2>
              <p
                className={`message-subtitle animate-item animate-delay-7 ${
                  direccion === "exit" ? "animate-out" : ""
                }`}
              >
                en la formación de profesionales comprometidos con el desarrollo
                urbano
              </p>
            </div>

            {/* Footer decorativo */}
            <div
              className={`footer-decoration animate-item animate-delay-8 ${
                direccion === "exit" ? "animate-out" : ""
              }`}
            >
              <div className="line left-line"></div>
              <div className="ornament">✦</div>
              <div className="line right-line"></div>
            </div>

            {/* Elementos flotantes */}
            <div className="floating-elements">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-4"></div>
            </div>
          </div>
        )}

        {/* Sección 2: Programa y ubicación (28 y 29 de noviembre, Montería) */}
        {seccionActual === 1 && (
          <div
            className={`seccion seccion-2 ${
              direccion === "enter" ? "slide-in" : "slide-out"
            }`}
          >
            {/* Header decorativo */}
            <div
              className={`header-decoration animate-item animate-delay-1 ${
                direccion === "exit" ? "animate-out" : ""
              }`}
            >
              <div className="line left-line"></div>
              <div className="ornament">✦</div>
              <div className="line right-line"></div>
            </div>

            <h2
              className={`seccion-titulo animate-item animate-delay-2 ${
                direccion === "exit" ? "animate-out" : ""
              }`}
            >
              Programa del Evento
            </h2>

            <div className="event-schedule">
              <div
                className={`schedule-item schedule-day-1 animate-item animate-delay-3 ${
                  direccion === "exit" ? "animate-out" : ""
                }`}
              >
                <div className="schedule-header">
                  <div className="schedule-day-badge">
                    <span className="day-number">28</span>
                    <span className="day-month">NOV</span>
                  </div>
                  <div className="schedule-divider"></div>
                </div>
                <div className="schedule-content">
                  <h3 className="schedule-title">
                    🎓 Evento Académico y Celebración 30 Años
                  </h3>
                  <p className="schedule-description">
                    Conferencias magistrales, paneles de discusión y acto
                    protocolario de aniversario.
                  </p>
                  <div className="schedule-tags">
                    <span className="tag">📚 Conferencias</span>
                    <span className="tag">🎤 Paneles</span>
                    <span className="tag">🎊 Celebración</span>
                  </div>
                </div>
              </div>

              <div
                className={`schedule-item schedule-day-2 animate-item animate-delay-4 ${
                  direccion === "exit" ? "animate-out" : ""
                }`}
              >
                <div className="schedule-header">
                  <div className="schedule-day-badge">
                    <span className="day-number">29</span>
                    <span className="day-month">NOV</span>
                  </div>
                  <div className="schedule-divider"></div>
                </div>
                <div className="schedule-content">
                  <h3 className="schedule-title">
                    🤝 Actividad de Integración
                  </h3>
                  <p className="schedule-description">
                    Encuentros profesionales, actividades de networking y
                    fortalecimiento de lazos.
                  </p>
                  <div className="schedule-tags">
                    <span className="tag">👥 Networking</span>
                    <span className="tag">🎯 Integración</span>
                  </div>
                </div>
              </div>

              <div
                className={`schedule-location animate-item animate-delay-5 ${
                  direccion === "exit" ? "animate-out" : ""
                }`}
              >
                <div className="location-card">
                  <div className="location-icon">📍</div>
                  <div className="location-info">
                    <h4>Montería, Córdoba</h4>
                    <p>Noviembre 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer decorativo */}
            <div
              className={`footer-decoration animate-item animate-delay-6 ${
                direccion === "exit" ? "animate-out" : ""
              }`}
            >
              <div className="line left-line"></div>
              <div className="ornament">✦</div>
              <div className="line right-line"></div>
            </div>

            {/* Elementos flotantes */}
            <div className="floating-elements">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
            </div>
          </div>
        )}

        {/* Sección 3: Código de Vestimenta e Información de Contacto */}
        {seccionActual === 2 && (
          <div
            className={`seccion seccion-3 ${
              direccion === "enter" ? "slide-in" : "slide-out"
            }`}
          >
            {/* Header decorativo */}
            <div
              className={`header-decoration animate-item animate-delay-1 ${
                direccion === "exit" ? "animate-out" : ""
              }`}
            >
              <div className="line left-line"></div>
              <div className="ornament">✦</div>
              <div className="line right-line"></div>
            </div>

            <h2
              className={`seccion-titulo animate-item animate-delay-2 ${
                direccion === "exit" ? "animate-out" : ""
              }`}
            >
              Información Importante
            </h2>

            {/* Cards de información */}
            <div className="info-grid">
              {/* Card de Código de Vestimenta */}
              <div
                className={`info-card dress-code-card animate-item animate-delay-3 ${
                  direccion === "exit" ? "animate-out" : ""
                }`}
              >
                <div className="info-card-icon">👔</div>
                <div className="info-card-content">
                  <h3 className="info-card-title">Código de Vestimenta</h3>
                  <p className="info-card-value">Formal / Etiqueta</p>
                  <p className="info-card-description">
                    Te invitamos a vestir elegante para esta ocasión especial
                  </p>
                </div>
              </div>

              {/* Card de Confirmación */}
              <div
                className={`info-card contact-card animate-item animate-delay-4 ${
                  direccion === "exit" ? "animate-out" : ""
                }`}
              >
                <div className="info-card-icon">📞</div>
                <div className="info-card-content">
                  <h3 className="info-card-title">Confirma tu Asistencia</h3>
                  <div className="contact-methods">
                    <div className="contact-item">
                      <span className="contact-icon">📧</span>
                      <span className="contact-value">
                        eventos@curadores.org
                      </span>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">📱</span>
                      <span className="contact-value">+52 55 1234 5678</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div
              className={`cta-banner animate-item animate-delay-5 ${
                direccion === "exit" ? "animate-out" : ""
              }`}
            >
              <div className="cta-content">
                <h3 className="cta-title">
                  ¡No te pierdas esta celebración única!
                </h3>
                <p className="cta-subtitle">
                  Haz clic en "Siguiente" para confirmar tu asistencia de forma
                  rápida
                </p>
                <div className="cta-icon">✨</div>
              </div>
            </div>

            {/* Footer decorativo */}
            <div
              className={`footer-decoration animate-item animate-delay-6 ${
                direccion === "exit" ? "animate-out" : ""
              }`}
            >
              <div className="line left-line"></div>
              <div className="ornament">✦</div>
              <div className="line right-line"></div>
            </div>

            {/* Elementos flotantes */}
            <div className="floating-elements">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
            </div>
          </div>
        )}

        {/* Robot de navegación */}
        <div className="robot-navegacion">
          {/* Bocadillo de diálogo del robot */}
          <div className="robot-dialogo">
            <p className="robot-mensaje">{getMensajeRobot()}</p>
            <div className="robot-botones">
              {seccionActual > 0 && (
                <button
                  className="robot-btn robot-btn-anterior"
                  onClick={handleAnterior}
                  disabled={animando}
                >
                  ← Regresar
                </button>
              )}

              {seccionActual < 2 && (
                <button
                  className="robot-btn robot-btn-siguiente"
                  onClick={handleSiguiente}
                  disabled={animando}
                >
                  Siguiente →
                </button>
              )}

              {seccionActual === 2 && (
                <button
                  className="robot-btn robot-btn-confirmar"
                  onClick={handleSiguiente}
                  disabled={animando}
                >
                  ✓ Confirmar
                </button>
              )}
            </div>
          </div>

          {/* Robot CSS */}
          <div className="robot">
            {/* Antena */}
            <div className="robot-antena">
              <div className="antena-bola"></div>
            </div>

            {/* Cabeza */}
            <div className="robot-cabeza">
              {/* Ojos */}
              <div className="robot-ojos">
                <div className="ojo ojo-izquierdo"></div>
                <div className="ojo ojo-derecho"></div>
              </div>
              {/* Boca */}
              <div className="robot-boca"></div>
            </div>

            {/* Cuerpo */}
            <div className="robot-cuerpo">
              <div className="robot-panel">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`panel-luz ${
                      seccionActual === index ? "activa" : ""
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Brazos */}
            <div className="robot-brazos">
              <div className="brazo brazo-izquierdo"></div>
              <div className="brazo brazo-derecho"></div>
            </div>

            {/* Piernas */}
            <div className="robot-piernas">
              <div className="pierna pierna-izquierda"></div>
              <div className="pierna pierna-derecha"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
