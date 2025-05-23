import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/product-detail.css';
import dangerousImage from '../assets/images/dangerous-banner.jpg'; // Save your new image here

const DangerousGoods = () => {
  const navigate = useNavigate();

  return (
    <div className="product-detail-page">
      {/* Hero Banner */}
      <div className="product-hero dangerous">
        <div className="overlay">
          <h1>Dangerous Goods</h1>
          <p>Certified transport of hazardous materials by air</p>
        </div>
      </div>

      {/* Info Section */}
      <section className="product-info-section">
        <div className="product-image">
          <img src={dangerousImage} alt="Dangerous Goods Cargo" />
        </div>
        <div className="product-content">
          <p>
            Centrum Solutions is fully certified and equipped to handle the air transport of dangerous goods — from chemicals to batteries and biological substances. We ensure end-to-end compliance, safety, and visibility for your most sensitive shipments.
          </p>

          <ul className="product-features">
            <li>☣ IATA-certified DG cargo handling team</li>
            <li>📦 UN-compliant packaging & documentation</li>
            <li>🛡 Hazardous cargo insurance & risk management</li>
            <li>🚨 24/7 monitoring & emergency response protocols</li>
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

export default DangerousGoods;
