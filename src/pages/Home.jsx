// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import planeHeader from '../assets/images/plane-header.png'; 
import storyImage from '../assets/images/our-story.jpg';
import networkMap from '../assets/images/network-map.jpg';
import partner1 from '../assets/images/partner-images/partner1.jpg';
import partner2 from '../assets/images/partner-images/partner2.jpg';
import partner3 from '../assets/images/partner-images/partner3.jpg';
import partner4 from '../assets/images/partner-images/partner4.jpg';
import partner5 from '../assets/images/partner-images/partner5.jpg';
import partner6 from '../assets/images/partner-images/partner6.jpg';
import partner7 from '../assets/images/partner-images/partner7.jpg';
import partner8 from '../assets/images/partner-images/partner8.jpg';
import partner9 from '../assets/images/partner-images/partner9.jpg';
import partner10 from '../assets/images/partner-images/partner10.jpg';
import partner11 from '../assets/images/partner-images/partner11.jpg';
import partner12 from '../assets/images/partner-images/partner12.jpg';
import partner13 from '../assets/images/partner-images/partner13.jpg';
import '../styles/main.css';
import { useState, useEffect, useRef } from 'react';
import { FaPlaneDeparture, FaBoxes, FaLock } from 'react-icons/fa';
import { GiChemicalDrop } from 'react-icons/gi';


const Home = () => {
  const navigate = useNavigate();
  const storyRef = useRef(null);
  const networkRef = useRef(null);

  const [isStoryVisible, setStoryVisible] = useState(false);
  const [isNetworkVisible, setNetworkVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === storyRef.current) {
            setStoryVisible(entry.isIntersecting);
          }
          if (entry.target === networkRef.current) {
            setNetworkVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (storyRef.current) observer.observe(storyRef.current);
    if (networkRef.current) observer.observe(networkRef.current);

    return () => {
      if (storyRef.current) observer.unobserve(storyRef.current);
      if (networkRef.current) observer.unobserve(networkRef.current);
    };
  }, []);


  return (
    <div className="home-page">
      {/* Header Section */}
      <section className="hero-full">
  <div className="hero-content">
    <h1>Centrum Solutions Pte Ltd</h1>
    <p>Reliable Global Air Cargo Solutions</p>
    <button className="hero-button" onClick={() => navigate('/products')}>
      Explore Our Services
    </button>
  </div>
</section>




      {/* Our Story Section */}
      {/* Our Story Section */}
      <section className={`our-story-section fade-in-section ${isStoryVisible ? 'is-visible' : ''}`} ref={storyRef}>
        <div className="story-content">
          <div className="story-image">
            <img src={storyImage} alt="Our Story" />
          </div>
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Centrum Solutions Pte Ltd is a trusted name in air cargo freight forwarding, delivering reliable, efficient, and tailored logistics solutions from Singapore to the world.
            </p>
            <p>
              Founded to simplify international air freight, we offer seamless, end-to-end cargo services backed by an experienced team and a robust global network. From express shipments to project cargo, we ensure every consignment moves securely, on time, and with precision.
            </p>
            <p>
              Driven by our core values — Reliability, Responsiveness, and Results — we continue to grow, providing value-driven solutions that help businesses thrive in today’s fast-paced, connected world.
            </p>
            <p>
              <strong>Centrum Solutions Pte Ltd — moving your business forward.</strong>
            </p>
            <button 
              className="learn-more-button"
              onClick={() => navigate('/about/company')}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>


      {/* Our Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card" onClick={() => navigate('/products/aerospace')}>
            <FaPlaneDeparture size={40} color="#d50032" />
            <h3>Aerospace</h3>
            <p>Priority handling for aerospace cargo shipments.</p>
          </div>
          <div className="service-card" onClick={() => navigate('/products/multimodal-cargo')}>
            <FaBoxes size={40} color="#d50032" />
            <h3>Multimodal Cargo</h3>
            <p>Integrated transport solutions combining air, sea, and land.</p>
          </div>
          <div className="service-card" onClick={() => navigate('/products/dangerous-goods')}>
            <GiChemicalDrop size={40} color="#d50032" />
            <h3>Dangerous Goods</h3>
            <p>Certified safe handling of hazardous cargo across the globe.</p>
          </div>
          <div className="service-card" onClick={() => navigate('/products/valuable-goods')}>
            <FaLock size={40} color="#d50032" />
            <h3>Valuable Goods</h3>
            <p>Secure and discreet shipment of high-value assets.</p>
          </div>
        </div>
      </section>

      {/* Our Network Section */}
      {/* Our Network Section */}
      {/* Our Network Section */}
      <section className={`network-section fade-in-section ${isNetworkVisible ? 'is-visible' : ''}`} ref={networkRef}>
        <h2>Our Network</h2>
        <div className="network-content">
          <div className="network-text">
            <p>
              At Centrum Solutions Pte Ltd, our global network powers seamless, reliable air cargo solutions across Asia, Europe, the Middle East, and the Americas. With global coverage through major air routes and trade hubs, priority cargo space via trusted airline partnerships, and time-critical deliveries for urgent, high-value shipments, we offer end-to-end coordination from origin to final destination. Supported by trusted local agents in every key market, we provide customised solutions for industries like pharma, e-commerce, automotive, and more. Fast, secure, and connected — Centrum Solutions is moving your business forward.
            </p>

            <button 
              className="learn-more-button"
              onClick={() => navigate('/network')}
            >
              Where We Fly
            </button>
          </div>

          <div className="network-image">
            <img src={networkMap} alt="Global Network Map" />
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="partners-section">
        <h2>Our Partners</h2>
        <div className="partners-slider">
          <div className="partners-track">
            <img src={partner1} alt="Partner 1" />
            <img src={partner2} alt="Partner 2" />
            <img src={partner3} alt="Partner 3" />
            <img src={partner4} alt="Partner 4" />
            <img src={partner5} alt="Partner 5" />
            <img src={partner6} alt="Partner 6" />
            <img src={partner7} alt="Partner 7" />
            <img src={partner8} alt="Partner 8" />
            <img src={partner9} alt="Partner 9" />
            <img src={partner10} alt="Partner 10" />
            <img src={partner11} alt="Partner 11" />
            <img src={partner12} alt="Partner 12" />
            <img src={partner13} alt="Partner 13" />
            {/* Repeat images to make it continuous */}
            <img src={partner1} alt="Partner 1" />
            <img src={partner2} alt="Partner 2" />
            <img src={partner3} alt="Partner 3" />
            <img src={partner4} alt="Partner 4" />
            <img src={partner5} alt="Partner 5" />
            <img src={partner6} alt="Partner 6" />
            <img src={partner7} alt="Partner 7" />
            <img src={partner8} alt="Partner 8" />
            <img src={partner9} alt="Partner 9" />
            <img src={partner10} alt="Partner 10" />
            <img src={partner11} alt="Partner 11" />
            <img src={partner12} alt="Partner 12" />
            <img src={partner13} alt="Partner 13" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
