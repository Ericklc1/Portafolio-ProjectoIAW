import React from 'react';
import './Viajestienda.css';

const ViajesTienda = () => {
  // Datos de los destinos (JSON incluido en el mismo archivo)
  const trips = [
    {
      id: 1,
      destination: "Paris, France",
      description: "Explora la ciudad de las luces y su icónica Torre Eiffel.",
      price: "$1200",
      operator: "Global Travels",
      contact: "info@globaltravels.com",
      image: "../img/Paris.jpg",
      category: "Romantic"
    },
    {
      id: 2,
      destination: "Tokyo, Japan",
      description: "Experimente la vibrante cultura y los cerezos en flor.",
      price: "$1800",
      operator: "Japan Tours",
      contact: "contact@japantours.com",
      image: "../img/Japon.jpg",
      category: "Cultural"
    },
    {
      id: 3,
      destination: "New York, USA",
      description: "Descubre las bulliciosas calles de la Gran Manzana.",
      price: "$1500",
      operator: "City Explorers",
      contact: "support@cityexplorers.com",
      image: "../img/NuevaYork.jpg",
      category: "Urban"
    },
    {
      id: 4,
      destination: "Islas Galápagos, Ecuador",
      description: "Un paraíso natural único. Descubre especies exclusivas y disfruta de impresionantes paisajes.",
      price: "$1500",
      operator: "Ecuador Explorers.",
      contact: "info@ecuexplorers.com",
      image: "../img/IslaGalapagos.jpg",
      category: "Cultural"
    }
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="navbar-logo">ViajesTienda</h2>
        <ul className="navbar-links">
          <li>Home</li>
          <li>Destinations</li>
          <li>Categories</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Header */}
      <header className="app-header">
        <h1>Explore Your Next Adventure</h1>
        <p>Find the perfect destination for your dream trip.</p>
      </header>

      {/* Cards Container */}
      <div className="cards-container">
        {trips.map((trip) => (
          <div key={trip.id} className="card">
            <img src={trip.image} alt={trip.destination} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{trip.destination}</h3>
              <p className="card-description">{trip.description}</p>
              <p className="card-price"><strong>Price:</strong> {trip.price}</p>
              <p className="card-operator"><strong>Operator:</strong> {trip.operator}</p>
              <p className="card-contact"><strong>Contact:</strong> {trip.contact}</p>
              <p className="card-category"><strong>Category:</strong> {trip.category}</p>
              <button className="card-button">See More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 ViajesTienda - All Rights Reserved.</p>
        <ul className="footer-links">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Support</li>
        </ul>
      </footer>
    </div>
  );
};

export default ViajesTienda;




