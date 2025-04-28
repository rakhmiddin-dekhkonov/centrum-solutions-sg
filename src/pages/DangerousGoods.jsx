import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/product-detail.css';

const DangerousGoods = () => {
  const navigate = useNavigate();

  return (
    <div className="product-detail-page">
      <header className="page-header">
        <h1>Dangerous Goods</h1>
      </header>

      <section className="product-description">
        <p>
          Centrum Solutions is certified to handle the air transport of hazardous materials safely, in full compliance with international regulations.
        </p>

        <ul className="product-features">
          <li>IATA Certified Dangerous Goods handling</li>
          <li>Special packaging and documentation support</li>
          <li>Hazardous cargo insurance advisory</li>
          <li>Emergency response protocols</li>
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

export default DangerousGoods;
