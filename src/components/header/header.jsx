import React, { useState } from "react";
import "../header/header.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Your Logo</h1>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleNavbar}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item" style={{ color: "red" }}>
            <a href="/services">Services</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
