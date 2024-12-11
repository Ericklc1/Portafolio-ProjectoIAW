import React from "react";
import { NavLink } from "react-router-dom";
import "./Css/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">My Portfolio</h1>
        <nav className="navbar">
          <NavLink exact to="/" className="nav-link" activeClassName="active-link">
            Home
          </NavLink>
          <NavLink to="/projects" className="nav-link" activeClassName="active-link">
            Projects
          </NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active-link">
            Contact
          </NavLink>
          <NavLink to="/newsletter" className="nav-link" activeClassName="active-link">
            Newsletter
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;



