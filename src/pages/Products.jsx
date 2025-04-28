// src/pages/Products.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/products.css'; // we will create this

const products = [
  {
    title: 'Aerospace',
    description: 'Priority handling for aircraft parts, engines, and aerospace shipments.',
    link: '/products/aerospace'
  },
  {
    title: 'Multimodal Cargo',
    description: 'Integrated air, sea, and land logistics for complex global shipments.',
    link: '/products/multimodal-cargo'
  },
  {
    title: 'Dangerous Goods',
    description: 'Certified and compliant air transport for hazardous and regulated cargo.',
    link: '/products/dangerous-goods'
  },
  {
    title: 'Valuable Goods',
    description: 'High-security transport solutions for valuable and sensitive items.',
    link: '/products/valuable-goods'
  },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="products-page">
      <header className="page-header">
        <h1>Our Products</h1>
      </header>

      <section className="products-grid">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="product-card"
            onClick={() => navigate(product.link)}
          >
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
