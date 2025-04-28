// src/pages/AboutCompany.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/about-company.css';

const AboutCompany = () => {
  const navigate = useNavigate();

  return (
    <div className="about-company-page">
      <header className="page-header">
        <h1>About Our Company</h1>
      </header>

      <section className="about-intro">
        <p>
        Centrum Solutions Pte Ltd proudly operates under Centrum Holding, the largest multimodal logistics and transport group in Uzbekistan and a major player in Central Asia. Through this partnership, we’re connected to a powerful logistics network spanning air cargo, passenger operations, and ground logistics, linking the region with global markets.

        In 2024 alone, the Group handled over 2,600 flights, moved 16,000 containers, and transported 500,000 air passengers — doubling its previous year’s volumes. Backed by a growing fleet of aircraft, trucks, rail platforms, and warehouses, Centrum Holding is on track for continued expansion, with an IPO targeted for 2026.

        As the Group’s Singapore-based air freight forwarding arm, Centrum Solutions strengthens this global network by providing agile, reliable, and efficient cargo solutions across Asia and beyond.

        Centrum Solutions Pte Ltd — proudly part of a group moving industries and economies forward.
        </p>
        <p>
          Backed by an experienced team and trusted airline partners, we handle everything from express deliveries to project cargo, ensuring reliable, secure, and timely transportation every time.
        </p>
      </section>

      <section className="about-values">
        <div className="value-card">
          <h3>Our Vision</h3>
          <p>To be the leading global partner for businesses seeking fast, secure, and innovative air cargo logistics solutions.</p>
        </div>
        <div className="value-card">
          <h3>Our Mission</h3>
          <p>Deliver excellence through reliability, responsiveness, and results-driven logistics tailored to every client’s needs.</p>
        </div>
        <div className="value-card">
          <h3>Our Core Values</h3>
          <p>Reliability, Responsiveness, Results — the foundation of every solution we offer to move your business forward.</p>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button className="learn-more-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AboutCompany;
