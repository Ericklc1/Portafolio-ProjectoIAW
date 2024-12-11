import React from "react";
import {Link } from 'react-router-dom'
import "./Css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-section">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>

        {/* Informació de contacte */}
        <div className="contact-section">
          <h3>Contact Me</h3>
          <p>Email: <Link to="mailto:erick@example.com">elc00@iesemilidarder.com</Link></p>
          <p>Phone: <Link to="tel:+123456789">+777777777</Link></p>
          <p>Location: Palma de mallorca, Spain</p>
        </div>

        {/* Àrea interactiva */}
        <div className="interactive-section">
          <h3>Send a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <p className="footer-rights">&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;


