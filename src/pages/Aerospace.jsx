import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/product-detail.css';
import planeEngine from '../assets/images/aerospace-engine.png'; // Add a real image here

const Aerospace = () => {
  const navigate = useNavigate();

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <div className="product-hero aerospace">
        <div className="overlay">
          <h1>Aerospace Cargo</h1>
          <p>Specialized air freight for critical aircraft parts and engines</p>
        </div>
      </div>

      {/* Info Section */}
      <section className="product-info-section">
        <div className="product-image">
          <img src={planeEngine} alt="Aerospace Cargo" />
        </div>
        <div className="product-content">
          <p>
            Centrum Solutions offers industry-leading air freight services for aerospace shipments — from time-critical aircraft components to oversized engines and rotables. We know how much every minute counts in aviation, and we handle every consignment with unmatched precision and urgency.
          </p>

          <ul className="product-features">
            <li>🔧 Priority uplift on leading airlines</li>
            <li>📦 Specialized handling & warehouse safety zones</li>
            <li>📍 Real-time shipment tracking</li>
            <li>🕐 24/7 aerospace logistics desk</li>
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

export default Aerospace;
