import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/product-detail.css';
import multimodalImage from '../assets/images/multimodal-banner.png'; // Use the image you saved

const MultimodalCargo = () => {
  const navigate = useNavigate();

  return (
    <div className="product-detail-page">
      {/* Hero Banner */}
      <div className="product-hero multimodal">
        <div className="overlay">
          <h1>Multimodal Cargo</h1>
          <p>Seamless logistics combining air, sea, and land</p>
        </div>
      </div>

      {/* Info Section */}
      <section className="product-info-section">
        <div className="product-image">
          <img src={multimodalImage} alt="Multimodal Cargo" />
        </div>
        <div className="product-content">
          <p>
            Our multimodal logistics solutions integrate air, sea, and land transport to deliver cargo globally with maximum speed, efficiency, and flexibility. Whether you need time-sensitive air freight, cost-effective ocean shipping, or final-mile trucking, we customize a plan that meets your business goals.
          </p>

          <ul className="product-features">
            <li>🚛 Tailored multi-leg transport plans</li>
            <li>🌐 Global warehouse and agent network</li>
            <li>📦 Live shipment tracking & coordination</li>
            <li>📅 Flexible routing for changing priorities</li>
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

export default MultimodalCargo;
