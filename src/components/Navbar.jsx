import React, { useState, useEffect } from 'react';
import { Search, Globe, User, Menu, X, ChevronDown } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';
import '../styles/Navbar.css';

const Navbar = ({ onSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  
  // Login states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchVal(val);
    if (onSearch) {
      onSearch(val);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchVal);
    }
  };

  const selectLanguage = (lang) => {
    setSelectedLang(lang);
    setLangMenuOpen(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      const name = email.split('@')[0];
      setUserName(name.charAt(0).toUpperCase() + name.slice(1));
      setLoginModalOpen(false);
      setEmail('');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  const closeDrawer = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="logo-brand serif-title">
            <Logo />
            utispace<span>STUDIO</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
            <NavLink to="/blog" className="nav-link">Blog</NavLink>
            <NavLink to="/about" className="nav-link">About Us</NavLink>
            <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </div>

          {/* Desktop Nav Actions */}
          <div className="nav-actions">
            <form onSubmit={handleSearchSubmit} className="nav-search-bar">
              <Search size={16} className="gold-text" />
              <input
                type="text"
                placeholder="Search ideas..."
                value={searchVal}
                onChange={handleSearchChange}
              />
            </form>

            {isLoggedIn ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)' }}>Hello, {userName}</span>
                <button className="lang-btn" onClick={handleLogout} style={{ padding: '0.3rem 0.6rem' }}>
                  Logout
                </button>
              </div>
            ) : (
              <button className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem' }} onClick={() => setLoginModalOpen(true)}>
                <User size={14} />
                <span>Log In</span>
              </button>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </nav>

      {/* ── Right-Side Drawer Backdrop ── */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* ── Right-Side Sliding Drawer ── */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">

        {/* Drawer Header */}
        <div className="drawer-header">
          <Link to="/" className="logo-brand serif-title" onClick={closeDrawer}>
            <Logo />
            utispace<span>STUDIO</span>
          </Link>
          <button className="drawer-close" onClick={closeDrawer} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        {/* Drawer Body: Search + Nav Links */}
        <div className="drawer-body">
          {/* 1. Search Bar */}
          <form onSubmit={(e) => { handleSearchSubmit(e); closeDrawer(); }} className="drawer-search">
            <Search size={16} className="gold-text" />
            <input
              type="text"
              placeholder="Search ideas..."
              value={searchVal}
              onChange={handleSearchChange}
            />
          </form>

          {/* 2. Nav Links */}
          <nav className="drawer-nav-links">
            <NavLink to="/"         className="drawer-nav-link" onClick={closeDrawer}>Home</NavLink>
            <NavLink to="/portfolio" className="drawer-nav-link" onClick={closeDrawer}>Portfolio</NavLink>
            <NavLink to="/blog"     className="drawer-nav-link" onClick={closeDrawer}>Blog</NavLink>
            <NavLink to="/about"    className="drawer-nav-link" onClick={closeDrawer}>About Us</NavLink>
            <NavLink to="/pricing"  className="drawer-nav-link" onClick={closeDrawer}>Pricing</NavLink>
            <NavLink to="/contact"  className="drawer-nav-link" onClick={closeDrawer}>Contact</NavLink>
          </nav>
        </div>

        {/* 3. Login Button at Bottom */}
        <div className="drawer-footer">
          {isLoggedIn ? (
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '0.8rem' }}>Hello, {userName}</p>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { handleLogout(); closeDrawer(); }}>
                Logout
              </button>
            </div>
          ) : (
            <button
              className="btn-primary"
              onClick={() => { setLoginModalOpen(true); closeDrawer(); }}
            >
              <User size={14} />
              <span>Log In</span>
            </button>
          )}
        </div>
      </div>


      {/* Login Modal Overlay */}
      <div className={`modal-overlay ${loginModalOpen ? 'show' : ''}`} onClick={() => setLoginModalOpen(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-modal" onClick={() => setLoginModalOpen(false)}>
            <X size={24} />
          </button>
          
          <h3 className="modal-title serif-title">Welcome Back</h3>
          
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                className="form-control" 
                required 
                placeholder="utispace01@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                className="form-control" 
                required 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
              Sign In
            </button>
          </form>
          
          <div className="modal-footer">
            <p>Don't have an account? <span className="gold-text" style={{ cursor: 'pointer' }}>Create consultation profile</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
