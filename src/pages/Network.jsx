// src/pages/Network.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/network.css';

const Network = () => {
  const navigate = useNavigate();

  return (
    <div className="network-page">
      <header className="page-header">
        <h1>Where We Fly</h1>
      </header>

      <section className="network-intro">
        <p>
          From Singapore to the world — Centrum Solutions connects businesses across Asia, Europe, the Middle East, and the Americas through seamless, reliable air cargo solutions.
        </p>
      </section>

      <section className="network-map-section">
        <MapContainer center={[1.3521, 103.8198]} zoom={2} scrollWheelZoom={true} className="map-container">
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Marker example for Singapore */}
          <Marker position={[1.3521, 103.8198]}>
            <Popup>Singapore HQ</Popup>
          </Marker>

          {/* You can add more markers here later for Dubai, Frankfurt, etc */}
        </MapContainer>
      </section>

      {/* Destination list stays same below */}
      <section className="destinations-section">
        <div className="destinations-group">
          <h2>Asia</h2>
          <ul>
            <li>Singapore</li>
            <li>Shanghai</li>
            <li>Tokyo</li>
            <li>Seoul</li>
            <li>Bangkok</li>
            <li>Jakarta</li>
          </ul>
        </div>

        <div className="destinations-group">
          <h2>Europe</h2>
          <ul>
            <li>Frankfurt</li>
            <li>London</li>
            <li>Paris</li>
            <li>Amsterdam</li>
            <li>Milan</li>
          </ul>
        </div>

        <div className="destinations-group">
          <h2>Middle East</h2>
          <ul>
            <li>Dubai</li>
            <li>Doha</li>
            <li>Riyadh</li>
          </ul>
        </div>

        <div className="destinations-group">
          <h2>Americas</h2>
          <ul>
            <li>New York</li>
            <li>Los Angeles</li>
            <li>Miami</li>
            <li>Toronto</li>
          </ul>
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

export default Network;
