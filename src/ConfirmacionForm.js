import React, { useState } from "react";
import "./ConfirmacionForm.css";

function ConfirmacionForm({ onVolver }) {
  const [formData, setFormData] = useState({
    cedula: "",
    nombre: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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
      <div className="confirmation-success">
        <div className="success-container animate-scale">
          <div className="success-icon">✓</div>
          <h2 className="success-title">¡Confirmación Exitosa!</h2>
          <p className="success-message">
            Gracias <strong>{formData.nombre}</strong> por confirmar tu
            asistencia.
          </p>
          <p className="success-subtitle">
            Nos vemos el 15 de noviembre para celebrar juntos.
          </p>
          <button className="btn-volver" onClick={onVolver}>
            Volver a la Invitación
          </button>
        </div>

        {/* Elementos decorativos */}
        <div className="confetti">
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`confetti-piece confetti-${i % 5}`}></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="confirmacion-container">
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

        <button className="btn-back" onClick={onVolver}>
          ← Volver a la invitación
        </button>

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
    </div>
  );
}

export default ConfirmacionForm;
