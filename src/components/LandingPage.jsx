import React from "react";
import {Link } from 'react-router-dom'
import "./Css/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing">
      {/* Capa de fondo sin movimiento */}
      <div className="background"></div>

      <div className="intro">
        <img src="../img/programador.png" alt="Profile" className="profile-picture" />
        <div className="intro-text">
          <h2>Hola, soy Erick!</h2>
          <p>
          Soy un desarrollador web profesional apasionado por crear contenido moderno y
            Aplicaciones web innovadoras y fáciles de usar. Con experiencia en
            desarrollo frontend y backend, me encanta resolver problemas y
            entregando resultados de alta calidad.
          </p>
          <div className="buttons">
            <Link to="/projects" className="btn">Mirar mis proyectos</Link>
            <Link to="/contact" className="btn secondary">Contactame</Link>
          </div>
        </div>
      </div>

      <div className="card-section">
        <div className="card">
          <h3>Web Development</h3>
          <p>Construyendo aplicaciones web responsivas y modernas con las últimas tecnologías.</p>
        </div>
        <div className="card">
          <h3>UI/UX Design</h3>
          <p>Crear diseños centrados en el usuario para mejorar la experiencia del usuario y las interacciones de la interfaz.</p>
        </div>
        <div className="card">
          <h3>SEO Optimization</h3>
          <p>Mejorar el rendimiento y la visibilidad del sitio web para mejorar la clasificación en los motores de búsqueda.</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;








