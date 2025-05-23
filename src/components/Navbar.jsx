import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : undefined}>
          Centrum Solutions
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : undefined}>
            Home
          </NavLink>
        </li>

        <li className="dropdown">
          <span>About Us</span>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/about/company" className={({ isActive }) => isActive ? 'active-link' : undefined}>
                Our Company
              </NavLink>
            </li>
            <li>
              <NavLink to="/about/team" className={({ isActive }) => isActive ? 'active-link' : undefined}>
                Our Team
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Products</span>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/products/aerospace" className={({ isActive }) => isActive ? 'active-link' : undefined}>
                Aerospace
              </NavLink>
            </li>
            <li>
              <NavLink to="/products/multimodal-cargo" className={({ isActive }) => isActive ? 'active-link' : undefined}>
                Multimodal Cargo
              </NavLink>
            </li>
            <li>
              <NavLink to="/products/dangerous-goods" className={({ isActive }) => isActive ? 'active-link' : undefined}>
                Dangerous Goods
              </NavLink>
            </li>
            <li>
              <NavLink to="/products/valuable-goods" className={({ isActive }) => isActive ? 'active-link' : undefined}>
                Valuable Goods
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/network" className={({ isActive }) => isActive ? 'active-link' : undefined}>
            Network
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : undefined}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
