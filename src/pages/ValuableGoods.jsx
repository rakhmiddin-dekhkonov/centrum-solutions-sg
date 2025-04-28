import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/product-detail.css';

const ValuableGoods = () => {
  const navigate = useNavigate();

  return (
    <div className="product-detail-page">
      <header className="page-header">
        <h1>Valuable Goods</h1>
      </header>

      <section className="product-description">
        <p>
          Our secure valuable cargo services ensure high-value items are transported discreetly and securely, minimizing risks every step of the journey.
        </p>

        <ul className="product-features">
          <li>High-security screening and transport</li>
          <li>Chain of custody protocols</li>
          <li>Insurance and valuation support</li>
          <li>Confidential handling practices</li>
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

export default ValuableGoods;
