import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isAboutActive = location.pathname.startsWith('/about');
  const isProductsActive = location.pathname.startsWith('/products');

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="logo-text">
          Centrum Solutions
        </NavLink>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>

        <li className={`dropdown ${isAboutActive ? 'active-parent' : ''}`}>
          <span>About Us</span>
          <ul className="dropdown-menu">
            <li><NavLink to="/about/company" onClick={() => setMenuOpen(false)}>Our Company</NavLink></li>
            <li><NavLink to="/about/team" onClick={() => setMenuOpen(false)}>Our Team</NavLink></li>
          </ul>
        </li>

        <li className={`dropdown ${isProductsActive ? 'active-parent' : ''}`}>
          <span>Products</span>
          <ul className="dropdown-menu">
            <li><NavLink to="/products/aerospace" onClick={() => setMenuOpen(false)}>Aerospace</NavLink></li>
            <li><NavLink to="/products/multimodal-cargo" onClick={() => setMenuOpen(false)}>Multimodal Cargo</NavLink></li>
            <li><NavLink to="/products/dangerous-goods" onClick={() => setMenuOpen(false)}>Dangerous Goods</NavLink></li>
            <li><NavLink to="/products/valuable-goods" onClick={() => setMenuOpen(false)}>Valuable Goods</NavLink></li>
          </ul>
        </li>

        <li><NavLink to="/network" onClick={() => setMenuOpen(false)}>Network</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
