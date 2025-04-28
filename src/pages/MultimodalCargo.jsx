import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/product-detail.css';

const MultimodalCargo = () => {
  const navigate = useNavigate();

  return (
    <div className="product-detail-page">
      <header className="page-header">
        <h1>Multimodal Cargo</h1>
      </header>

      <section className="product-description">
        <p>
          Our multimodal logistics solutions integrate air, sea, and land transport to optimize time, cost, and reliability for complex cargo movements worldwide.
        </p>

        <ul className="product-features">
          <li>Custom multimodal solutions tailored to your needs</li>
          <li>Global network of warehouses and partners</li>
          <li>End-to-end visibility and tracking</li>
          <li>Flexible routing and scheduling</li>
        </ul>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="learn-more-button" onClick={() => navigate('/products')}>
            Back to Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default MultimodalCargo;
