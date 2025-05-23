// src/pages/AboutTeam.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/about-team.css'; // <- we will create this
import teamMember1 from '../assets/images/team/team-member1.jpg';
import teamMember2 from '../assets/images/team/team-member2.jpg';
import teamMember3 from '../assets/images/team/team-member3.jpg';


const teamMembers = [
  { name: 'Abdulaliz Abdurakhmanov', role: 'Founder', image: teamMember1 },
  { name: 'Guzal Yusupova', role: 'Head of Finance Department', image: teamMember2 },
  { name: 'Dilovar Kalandarov', role: 'Managing Director', image: teamMember3 },
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
              <img src={member.image} alt={member.name} className="team-photo" />
            </div>
            <h2>{member.name}</h2>
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
