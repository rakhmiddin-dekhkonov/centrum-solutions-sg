import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Centrum Solutions</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <span>About Us</span>
          <ul className="dropdown-menu">
            <li><Link to="/about/company">Our Company</Link></li>
            <li><Link to="/about/team">Our Team</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <span>Products</span>
          <ul className="dropdown-menu">
            <li><Link to="/products/aerospace">Aerospace</Link></li>
            <li><Link to="/products/multimodal-cargo">Multimodal Cargo</Link></li>
            <li><Link to="/products/dangerous-goods">Dangerous Goods</Link></li>
            <li><Link to="/products/valuable-goods">Valuable Goods</Link></li>
          </ul>
        </li>
        <li><Link to="/network">Network</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
