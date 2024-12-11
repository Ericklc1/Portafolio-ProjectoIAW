import React, { useState } from "react";
import "./ProjectPage.css";

const houses = [
  { id: 1, name: "Casa Bonita", price: 120000, imageUrl: "../img/casa-bonita.jpg" },
  { id: 2, name: "Villa Lujo", price: 250000, imageUrl: "../img/villa-luo.jpg" },
  { id: 3, name: "Apartamento Moderno", price: 80000, imageUrl: "../img/apartamento-moderno.jpg" },
];

const RealEstatePage = () => {
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHouses = houses
    .filter((house) => house.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="real-estate-page">
      <h1>Casas en Venta</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Ordenar por precio</option>
          <option value="asc">De menor a mayor</option>
          <option value="desc">De mayor a menor</option>
        </select>
      </div>
      <div className="houses-grid">
        {filteredHouses.map((house) => (
          <div key={house.id} className="house-card">
            <img src={house.imageUrl} alt={house.name} className="house-image" />
            <div className="house-info">
              <h3>{house.name}</h3>
              <p>Precio: ${house.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealEstatePage;

