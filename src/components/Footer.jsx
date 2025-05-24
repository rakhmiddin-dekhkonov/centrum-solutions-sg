import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaFacebookF } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">

        {/* Pages */}
        <div className="footer-column">
          <h4>Pages</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about/company">About Us</NavLink></li>
            <li><NavLink to="/network">Network</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><NavLink to="/products/aerospace">Aerospace</NavLink></li>
            <li><NavLink to="/products/multimodal-cargo">Multimodal Cargo</NavLink></li>
            <li><NavLink to="/products/dangerous-goods">Dangerous Goods</NavLink></li>
            <li><NavLink to="/products/valuable-goods">Valuable Goods</NavLink></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Centrum Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
