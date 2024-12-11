import React, { useState } from 'react';
import './Ecommerce.css'
const productsData = [
  {
    id: 1,
    name: "Men's Jacket Style 1",
    category: "Jacket",
    price: 48.00,
    originalPrice: 96.00,
    image: "../img/products/jacket-1.jpg",
    rating: 4,
    offer: "30%",
  },
  {
    id: 2,
    name: "Men's Jacket Style 2",
    category: "Jacket",
    price: 45.00,
    originalPrice: 56.00,
    image: "../img/products/jacket-2.jpg",
    rating: 3,
    offer: "30%",
  },
  {
    id: 3,
    name: "Men's Jacket Style 3",
    category: "Jacket",
    price: 58.00,
    originalPrice: 65.00,
    image: "../img/products/jacket-3.jpg",
    rating: 4,
    offer: "30%",
  },
  {
    id: 4,
    name: "Women's Coat Style 1",
    category: "Coat",
    price: 100.00,
    originalPrice: 150.00,
    image: "../img/products/jacket-4.jpg",
    rating: 4,
    offer: "",
  },
  {
    id: 5,
    name: "Women's Coat Style 2",
    category: "Coat",
    price: 120.00,
    originalPrice: 180.00,
    image: "../img/products/jacket-5.jpg",
    rating: 4,
    offer: "",
  },
  {
    id: 6,
    name: "White Sweater",
    category: "Sweater",
    price: 11.00,
    originalPrice: 17.00,
    image: "../img/products/clothes-1.jpg",
    rating: 5,
    offer: "",
  },
  {
    id: 7,
    name: "Pink Sweater",
    category: "Sweater",
    price: 58.00,
    originalPrice: 89.00,
    image: "../img/products/clothes-2.jpg",
    rating: 5,
    offer: "",
  }
];

function App() {
  // buscar y filtrar state
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // buscar con input
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    // Filtrar productos basados con el buscador
    const filtered = productsData.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div id="page">
      {/* Top Information */}
      <section className="top-info">
        <div>
          <select>
            <option value="en" selected>English</option>
            <option value="es">Spanish</option>
            <option value="ca">Catalan</option>
          </select>
        </div>
        <div className="shipping-text">
          Free shipping this week for orders over 55€
        </div>
        <div className="header-social-container">
          <a href="#" className="social-link">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </section>

       {/* Header */}
      <header>
        <section className="top-header">
          <div className="logo-container">
            <h1>CLOTHES</h1>
          </div>
          <div className="search-container">
            <input
              type="text"
              name="search"
              placeholder="Enter your product name..."
              value={searchTerm}
              onChange={handleSearch}  
            />
            <i className="fa-solid fa-magnifying-glass search-btn"></i>
          </div>
          <div className="icons-container">
            <i className="fa-regular fa-user"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-sharp fa-solid fa-bag-shopping"></i>
          </div>
        </section>
      </header>

       {/* Main Page  */}
      <main>
        <h2>New Products</h2>
        <section className="product-grid">
          {filteredProducts.map((product) => (
            <article className="card" key={product.id}>
              {product.offer && <div className="offer">{product.offer}</div>}
              <div className="info-1">
                <img src={product.image} alt={product.name} />
                <h3>{product.category}</h3>
                <h4>{product.name}</h4>
              </div>
              <div className="info-2">
                <div className="showcase-rating">
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={`fa-solid fa-star ${index < product.rating ? '' : 'grey-star'}`}
                    ></i>
                  ))}
                </div>
                <div className="price-box">
                  <p className="price">
                    {product.price.toFixed(2)} €
                    {product.originalPrice && <del>{product.originalPrice.toFixed(2)} €</del>}
                  </p>
                  <button>Add</button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

     {/* Footer  */}
      <footer>
        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li>
              <h2 className="nav-title">Categories</h2>
            </li>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Electronic</a></li>
            <li><a href="#">Cosmetic</a></li>
            <li><a href="#">Health</a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </nav>
        <section className="footer-bottom">
          <img src="../img/payment.png" alt="payment method" className="payment-img" />
          <p className="copyright">
            Copyright &copy; Dress all rights reserved.
          </p>
        </section>
      </footer>
    </div>
  );
}

export default App;
