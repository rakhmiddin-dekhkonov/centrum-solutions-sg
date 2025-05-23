// src/pages/Products.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/products.css'; // we will create this
import { FaPlaneDeparture, FaBoxes, FaLock } from 'react-icons/fa';
import { GiChemicalDrop } from 'react-icons/gi';


const products = [
  {
    title: 'Aerospace',
    description: 'Priority handling for aircraft parts, engines, and aerospace shipments.',
    icon: <FaPlaneDeparture size={40} color="#d50032" />,
    link: '/products/aerospace'
  },
  {
    title: 'Multimodal Cargo',
    description: 'Integrated air, sea, and land logistics for complex global shipments.',
    icon: <FaBoxes size={40} color="#d50032" />,
    link: '/products/multimodal-cargo'
  },
  {
    title: 'Dangerous Goods',
    description: 'Certified and compliant air transport for hazardous and regulated cargo.',
    icon: <GiChemicalDrop size={40} color="#d50032" />,
    link: '/products/dangerous-goods'
  },
  {
    title: 'Valuable Goods',
    description: 'High-security transport solutions for valuable and sensitive items.',
    icon: <FaLock size={40} color="#d50032" />,
    link: '/products/valuable-goods'
  },
];


const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="products-page">
      <header className="page-header">
        <h1>Our Services</h1>
      </header>

      <section className="products-grid">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="product-card"
            onClick={() => navigate(product.link)}
          >
            <div className="product-icon">{product.icon}</div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
