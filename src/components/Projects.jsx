import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Css/Projects.css";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
  const [projectList, setProjectList] = useState([]);  
  const [loading, setLoading] = useState(true);         
  const [error, setError] = useState(null);             

  // Usamos useEffect para obtener los datos del JSON desde una URL
  useEffect(() => {
    // Aquí debes colocar la URL de la API o el archivo JSON
    fetch("../data/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar los proyectos');
        }
        return response.json();
      })
      .then((data) => {
        setProjectList(data); 
        setLoading(false);     
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false);
      });
  }, []); 

  // Si los datos están cargando o si hay un error, mostramos un mensaje
  if (loading) {
    return <div>Cargando proyectos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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



