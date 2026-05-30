import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Logo from './components/Logo';
import './styles/Footer.css';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {
  const [searchVal, setSearchVal] = useState('');

  const handleNavbarSearch = (value) => {
    setSearchVal(value);
  };

  return (
    <Router>
      {/* Header & Navbar */}
      <Navbar onSearch={handleNavbarSearch} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio searchFilter={searchVal} />} />
        <Route path="/blog" element={<Blog searchFilter={searchVal} />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        {/* Redirect unknown paths to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Floating chatbot assistant */}
      <Chatbot />

      {/* Premium Studio Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-col">
              <div className="logo-brand serif-title gold-text" style={{ marginBottom: '1.5rem', fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Logo style={{ height: '38px'}}/>
                utispace
              </div>
              <p className="footer-desc">
                Award-winning interior architecture studio crafting high-end warm residences and ergonomic offices in Pune.
              </p>
            </div>

            <div className="footer-col">
              <h4>Portfolio</h4>
              <ul>
                <li><Link to="/portfolio">Full Homes</Link></li>
                <li><Link to="/portfolio">Executive Offices</Link></li>
                <li><Link to="/portfolio">Living & Dining</Link></li>
                <li><Link to="/portfolio">Bespoke Bedrooms</Link></li>
                <li><Link to="/portfolio">Kitchen & Bath</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about">About Our Studio</Link></li>
                <li><Link to="/about">Meet The Team</Link></li>
                <li><Link to="/pricing">Design Packages</Link></li>
                <li><Link to="/pricing">Turnkey Estimator</Link></li>
                <li><Link to="/contact">Consultation Form</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Instagram Journal</h4>
              <p className="footer-desc" style={{ fontSize: '0.8rem' }}>
                Follow us at <a href="https://instagram.com/utispace_" target="_blank" rel="noopener noreferrer" className="gold-text">@utispace_</a> for daily layout updates, ambient lighting ideas, and active skeleton-to-completed updates.
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © 2026 utispace Studio. All Rights Reserved. Designed by Omkara.
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Consultation</a>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;