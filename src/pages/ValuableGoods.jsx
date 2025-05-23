import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/product-detail.css';
import valuableImage from '../assets/images/valuable-banner.jpeg'; // Make sure to place your image here

const ValuableGoods = () => {
  const navigate = useNavigate();

  return (
    <div className="product-detail-page">
      {/* Hero Banner */}
      <div className="product-hero valuable">
        <div className="overlay">
          <h1>Valuable Goods</h1>
          <p>Confidential, secure transport for high-value cargo</p>
        </div>
      </div>

      {/* Info Section */}
      <section className="product-info-section">
        <div className="product-image">
          <img src={valuableImage} alt="Valuable Goods Transport" />
        </div>
        <div className="product-content">
          <p>
            Centrum Solutions provides best-in-class logistics for valuable cargo such as electronics, luxury goods, currency, and confidential shipments. Our secure chain-of-custody ensures your shipment is protected at every checkpoint.
          </p>

          <ul className="product-features">
            <li>🔐 High-security screening and armored transport</li>
            <li>📋 End-to-end chain of custody documentation</li>
            <li>💰 Valuation and insurance coordination</li>
            <li>🕶 Discreet routing and confidential handling</li>
          </ul>

        </div>
      </section>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button className="learn-more-button" onClick={() => navigate('/products')}>
          Back to Products
        </button>
      </div>
    </div>
  );
};

export default ValuableGoods;
