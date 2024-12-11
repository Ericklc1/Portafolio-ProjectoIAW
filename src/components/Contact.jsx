import React from "react";
import "./Css/Contact.css";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contactame</h2>
      <p>¡No dudes en comunicarte conmigo para cualquier proyecto, colaboración o simplemente para saludar!!</p>
      <form className="contact-form">
        <div className="form-group">
          <FaUser className="icon" />
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <FaEnvelope className="icon" />
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message <FaPaperPlane className="button-icon" />
        </button>
      </form>
    </div>
  );
}

export default Contact;

