import React from "react";
import { Link } from "react-router-dom";
import "./Css/Projects.css";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
  const projectList = [
    { 
      title: "Web Venta de cases",
      description: "Una aplicació web per gestionar venta de casas..",
      imageUrl: "../img/ProjectPage.png", 
      link: "/casas-venta"
    },
    { 
      title: "Plataforma E-commerce",
      description: "Una plataforma de comerç electrònic per comprar i vendre productes.",
      imageUrl: "../img/Ecommerce.png",
      link: "/Ecommerce"
    },
    { 
      title: "Web Viatjes",
      description: "Una pagina web de viatjes per donar un poc d'informació als clients dels posibles punt d'arribada",
      imageUrl: "../img/ViajesTienda.png", 
      link: "/Viajestienda"
    },
  ];

  return (
    <div className="projects-container">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.link} className="project-link">
                Ver Proyecto <FaArrowRight className="link-icon" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;


