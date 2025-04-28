// src/pages/AboutTeam.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/about-team.css'; // <- we will create this

const teamMembers = [
  { name: 'John Tan', role: 'Founder & CEO' },
  { name: 'Alicia Lim', role: 'Head of Operations' },
  { name: 'David Lee', role: 'Logistics Manager' },
  { name: 'Samantha Ong', role: 'Client Relations Manager' },
  { name: 'Ryan Goh', role: 'Finance & Compliance Lead' },
];

const AboutTeam = () => {
  const navigate = useNavigate();

  return (
    <div className="about-team-page">
      <header className="page-header">
        <h1>Meet Our Team</h1>
      </header>

      <section className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image">
              {/* Placeholder circle for now */}
              <div className="circle-placeholder">{member.name.charAt(0)}</div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </section>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button className="learn-more-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AboutTeam;
