import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/about-company.css';
import CountUp from 'react-countup';
import { FaEye, FaBullseye, FaHandshake } from 'react-icons/fa';


const AboutCompany = () => {
  const navigate = useNavigate();

  return (
    <div className="about-company-page">
      <header className="page-header">
        <h1>Our Company</h1>
      </header>

      <section className="about-intro">
        <p>
          Centrum Solutions Pte Ltd proudly operates under Centrum Holding, the largest multimodal logistics and transport group in Uzbekistan and a major player in Central Asia. Through this partnership, we’re connected to a powerful logistics network spanning air cargo, passenger operations, and ground logistics, linking the region with global markets.
        </p>
        <p>
          As the Group’s Singapore-based air freight forwarding arm, Centrum Solutions strengthens this global network by providing agile, reliable, and efficient cargo solutions across Asia and beyond.
        </p>
        <p>
          Centrum Solutions Pte Ltd — proudly part of a group moving industries and economies forward.
        </p>
      </section>

      <section className="company-stats">
        <div className="stat-card">
          <div className="stat-number">
            <CountUp end={2600} duration={2.5} separator="," />+
          </div>
          <p className="stat-label">Flights Operated in 2024</p>
        </div>

        <div className="stat-card">
          <div className="stat-number">
            <CountUp end={16000} duration={2.5} separator="," />+
          </div>
          <p className="stat-label">Containers Moved</p>
        </div>

        <div className="stat-card">
          <div className="stat-number">
            <CountUp end={500000} duration={3.5} separator="," />+
          </div>
          <p className="stat-label">Air Passengers Transported</p>
        </div>

        <div className="stat-card">
          <div className="stat-number">
            <CountUp end={2026} duration={1.5} />
          </div>
          <p className="stat-label">IPO Target Year</p>
        </div>
      </section>



      <section className="about-intro">
        <p>
          Backed by a growing fleet of aircraft, trucks, rail platforms, and warehouses, Centrum Holding is on track for continued expansion. 
        </p>
        <p>
          Backed by an experienced team and trusted airline partners, we handle everything from express deliveries to project cargo, ensuring reliable, secure, and timely transportation every time.
        </p>
      </section>

      <section className="about-values">
        <div className="value-card">
          <FaEye className="value-icon" />
          <h3>Our Vision</h3>
          <p>To be the global leader in fast, secure, and intelligent air cargo logistics.</p>
        </div>
        <div className="value-card">
          <FaBullseye className="value-icon" />
          <h3>Our Mission</h3>
          <p>Deliver logistics excellence through reliability, responsiveness, and results.</p>
        </div>
        <div className="value-card">
          <FaHandshake className="value-icon" />
          <h3>Core Values</h3>
          <p>Reliability. Responsiveness. Results. The foundation of every solution we deliver.</p>
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
