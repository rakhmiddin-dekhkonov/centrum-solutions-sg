// src/pages/Network.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/network.css';
import L from 'leaflet';
import locationIconImg from '../assets/images/location-icon.png'; // you can replace this path


const locationIcon = L.icon({
  iconUrl: locationIconImg,
  iconSize: [30, 30], // size of the icon
  iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -30], // point from which the popup should open relative to the iconAnchor
});

const locations = [
  { name: "Singapore HQ", position: [1.3521, 103.8198] },
  { name: "Tashkent (TAS)", position: [41.2995, 69.2401] },
  { name: "Frankfurt (FRA)", position: [50.1109, 8.6821] },
  { name: "Paris (CDG)", position: [49.0097, 2.5479] },
  { name: "London (LGG)", position: [51.4700, -0.4543] },
  { name: "Tokyo (NRT)", position: [35.7767, 140.3188] },
  { name: "New York (JFK)", position: [40.6413, -73.7781] },
  { name: "Seoul (ICN)", position: [37.4602, 126.4407] },
  { name: "Shanghai (PVG)", position: [31.1443, 121.8083] },
  { name: "Hong Kong (HKG)", position: [22.3080, 113.9185] },
  { name: "Dubai (DWC)", position: [24.8964, 55.1614] },
  { name: "Los Angeles (LAX)", position: [33.9416, -118.4085] },
];


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
        <MapContainer center={[30, 20]} zoom={2} scrollWheelZoom={true} className="map-container">
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((loc, index) => (
            <Marker key={index} position={loc.position} icon={locationIcon}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>

      {/* Destination list stays same below */}
      <section className="destinations-section">
        <div className="destinations-group">
          <h2>Asia</h2>
          <ul>
            <li>Singapore</li>
            <li>Tashkent</li>
            <li>Tokyo</li>
            <li>Seoul</li>
            <li>Hong Kong</li>
          </ul>
        </div>

        <div className="destinations-group">
          <h2>Europe</h2>
          <ul>
            <li>Frankfurt</li>
            <li>London</li>
            <li>Paris</li>
          </ul>
        </div>

        <div className="destinations-group">
          <h2>Middle East</h2>
          <ul>
            <li>Dubai</li>
          </ul>
        </div>

        <div className="destinations-group">
          <h2>Americas</h2>
          <ul>
            <li>New York</li>
            <li>Los Angeles</li>
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
