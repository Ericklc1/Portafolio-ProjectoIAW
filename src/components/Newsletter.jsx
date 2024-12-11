import React, { useState } from "react";
import "./Css/NewsLetter.css";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Aquí simulem que el correu electrònic s'envia correctament
      setIsSubscribed(true);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>Subscriu-te al nostre butlletí mensual</h2>
        <p>Rebràs les últimes novetats, ofertes i contingut exclusiu directament al teu correu electrònic.</p>

        {isSubscribed ? (
          <div className="success-message">
            <p>Gràcies per subscriure't! Estàs a punt per rebre els nostres butlletins mensuals.</p>
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Introdueix el teu correu electrònic"
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>
            {isError && <p className="error-message">Per favor, introdueix un correu electrònic vàlid.</p>}
            <button type="submit" className="subscribe-button">
              Subscriure <FaPaperPlane className="button-icon" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Newsletter;


