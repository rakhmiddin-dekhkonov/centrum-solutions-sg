// src/pages/Aerospace.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/product-detail.css'; // We will create one CSS for all

const Aerospace = () => {
  const navigate = useNavigate();

  return (
    <div className="product-detail-page">
      <header className="page-header">
        <h1>Aerospace Cargo</h1>
      </header>

      <section className="product-description">
        <p>
          Centrum Solutions offers specialized air freight services for aerospace shipments — from critical aircraft parts to oversized engines. We understand the urgency, precision, and care required for aviation cargo.
        </p>

        <ul className="product-features">
          <li>Priority uplift on leading airlines</li>
          <li>Specialized handling and storage</li>
          <li>Real-time tracking for critical shipments</li>
          <li>24/7 aerospace logistics support team</li>
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

export default Aerospace;
