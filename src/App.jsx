import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import ProjectPage from "./components/Pages/ProjectPage";
import Ecommerce from "./components/Pages/Ecommerce";
import Viajestienda from "./components/Pages/Viajestienda";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas con header y footer */}
        <Route path="/" element={<><Header /><LandingPage /><Footer /></>} />
        <Route path="/projects" element={<><Header /><Projects /><Footer /></>} />
        <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
        <Route path="/newsletter" element={<><Header /><Newsletter /><Footer /></>} />

        {/* Rutas independientes */}
        <Route path="/casas-venta" element={<ProjectPage />} />
         <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/Viajestienda" element={<Viajestienda />} /> 
      </Routes>
    </Router>
  );
}


