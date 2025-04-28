// src/pages/Contact.jsx
import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <header className="page-header">
        <h1>Contact Us</h1>
      </header>

      <section className="contact-intro">
        <p>
          Have a question, need a quote, or want to know more about our services?
          Send us a message — we're ready to help!
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />

            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />

            <textarea 
              name="message" 
              rows="5" 
              placeholder="Your Message" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Centrum Solutions Pte Ltd</h3>
          <p>Address: 123 Cargo Way, Singapore 567890</p>
          <p>Phone: +65 1234 5678</p>
          <p>Email: info@centrumsolutions.com</p>

          <div className="social-links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
