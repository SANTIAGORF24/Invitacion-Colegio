import React, { useState } from "react";
import "./ConfirmacionForm.css";

function ConfirmacionForm({ onVolver, mostrarRobot }) {
  const [formData, setFormData] = useState({
    cedula: "",
    nombre: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Distancia mínima para considerar un swipe (en px)
  const minSwipeDistance = 50;

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
    const isRightSwipe = distance < -minSwipeDistance;

    // Solo swipe derecha para volver
    if (isRightSwipe && onVolver) {
      onVolver();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnimating(true);

    // Simular envío
    setTimeout(() => {
      setEnviado(true);
      console.log("Confirmación enviada:", formData);
    }, 1000);
  };

  if (enviado) {
    return (
      <div
        className="confirmation-success"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="success-container animate-scale">
          <div className="success-icon">✓</div>
          <h2 className="success-title">¡Confirmación Exitosa!</h2>
          <p className="success-message">
            Gracias <strong>{formData.nombre}</strong> por confirmar tu
            asistencia.
          </p>
          <p className="success-subtitle">
            Nos vemos en noviembre para celebrar juntos.
          </p>
        </div>

        {/* Elementos decorativos */}
        <div className="confetti">
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`confetti-piece confetti-${i % 5}`}></div>
          ))}
        </div>

        {/* Robot de navegación */}
        {mostrarRobot && (
          <div className="robot-navegacion">
            {/* Bocadillo de diálogo del robot */}
            <div className="robot-dialogo">
              <p className="robot-mensaje">
                ¡Perfecto! Tu confirmación ha sido registrada. ¡Nos vemos en el
                evento!
              </p>
              <div className="robot-botones">
                <button
                  className="robot-btn robot-btn-anterior"
                  onClick={onVolver}
                >
                  ← Volver
                </button>
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
                  <div className="panel-luz activa"></div>
                  <div className="panel-luz activa"></div>
                  <div className="panel-luz activa"></div>
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
        )}
      </div>
    );
  }

  return (
    <div
      className="confirmacion-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="form-wrapper animate-fade-in">
        {/* Header decorativo */}
        <div className="form-header">
          <div className="line left-line"></div>
          <div className="ornament">✦</div>
          <div className="line right-line"></div>
        </div>

        <h1 className="form-title animate-slide-down">
          Confirmación de Asistencia
        </h1>
        <p className="form-subtitle animate-fade-in-delay">
          Por favor completa tus datos para confirmar tu presencia
        </p>

        <form
          onSubmit={handleSubmit}
          className="confirmation-form animate-fade-in-delay-2"
        >
          <div className="form-group">
            <label htmlFor="cedula" className="form-label">
              <span className="label-icon">🆔</span>
              Cédula / Identificación
            </label>
            <input
              type="text"
              id="cedula"
              name="cedula"
              value={formData.cedula}
              onChange={handleChange}
              placeholder="Ingresa tu número de cédula"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="nombre" className="form-label">
              <span className="label-icon">👤</span>
              Nombre Completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingresa tu nombre completo"
              required
              className="form-input"
            />
          </div>

          <button
            type="submit"
            className={`btn-submit ${isAnimating ? "loading" : ""}`}
            disabled={isAnimating}
          >
            {isAnimating ? (
              <>
                <span className="spinner"></span>
                Enviando...
              </>
            ) : (
              <>
                <span className="btn-icon">📧</span>
                Confirmar Asistencia
              </>
            )}
          </button>
        </form>

        {/* Footer decorativo */}
        <div className="form-footer">
          <div className="line left-line"></div>
          <div className="ornament">✦</div>
          <div className="line right-line"></div>
        </div>

        {/* Elementos decorativos flotantes */}
        <div className="floating-elements">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </div>

      {/* Robot de navegación */}
      {mostrarRobot && (
        <div className="robot-navegacion">
          {/* Bocadillo de diálogo del robot */}
          <div className="robot-dialogo">
            <p className="robot-mensaje">
              {enviado
                ? "¡Perfecto! Tu confirmación ha sido registrada. ¡Nos vemos en el evento!"
                : "Por favor completa el formulario para confirmar tu asistencia."}
            </p>
            <div className="robot-botones">
              <button
                className="robot-btn robot-btn-anterior"
                onClick={onVolver}
              >
                ← Volver
              </button>
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
                <div className="panel-luz activa"></div>
                <div className="panel-luz activa"></div>
                <div className="panel-luz activa"></div>
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
      )}
    </div>
  );
}

export default ConfirmacionForm;
