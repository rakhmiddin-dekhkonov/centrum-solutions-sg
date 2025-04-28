// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutCompany from './pages/AboutCompany';
import AboutTeam from './pages/AboutTeam';
import Products from './pages/Products';
import Aerospace from './pages/Aerospace';
import MultimodalCargo from './pages/MultimodalCargo';
import DangerousGoods from './pages/DangerousGoods';
import ValuableGoods from './pages/ValuableGoods';
import Network from './pages/Network';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/company" element={<AboutCompany />} />
        <Route path="/about/team" element={<AboutTeam />} />
        
        <Route path="/products" element={<Products />} />
        <Route path="/products/aerospace" element={<Aerospace />} />
        <Route path="/products/multimodal-cargo" element={<MultimodalCargo />} />
        <Route path="/products/dangerous-goods" element={<DangerousGoods />} />
        <Route path="/products/valuable-goods" element={<ValuableGoods />} />

        <Route path="/network" element={<Network />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
