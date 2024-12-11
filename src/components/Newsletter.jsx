import React from "react";
import "./Css/NewsLetter.css";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>Manténgase actualizado</h2>
        <p>Suscríbete a mi boletín y recibe las últimas actualizaciones directamente en tu bandeja de entrada!</p>
        <form className="newsletter-form">
          <div className="form-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Enter your email address" required />
          </div>
          <button type="submit" className="subscribe-button">
            Subscribe <FaPaperPlane className="button-icon" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;

