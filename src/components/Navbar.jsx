import React, { useState, useEffect } from 'react';
import { Search, Globe, User, Menu, X, ChevronDown } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

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

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="logo-brand serif-title">
            <Logo />
            utispace<span>STUDIO</span>
          </Link>

          {/* Navigation Links */}
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <NavLink to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="/portfolio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Portfolio</NavLink>
            <NavLink to="/blog" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</NavLink>
            <NavLink to="/pricing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</NavLink>
            <NavLink to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
          </div>

          {/* Nav Actions */}
          <div className={`nav-actions ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="nav-search-bar">
              <Search size={16} className="gold-text" />
              <input 
                type="text" 
                placeholder="Search ideas..." 
                value={searchVal}
                onChange={handleSearchChange}
              />
            </form>

            {/* Language Selector */}
            {/* <div className="lang-dropdown-container">
              <button className="lang-btn" onClick={() => setLangMenuOpen(!langMenuOpen)}>
                <Globe size={15} />
                <span>{selectedLang}</span>
                <ChevronDown size={12} />
              </button>
              <div className={`lang-menu ${langMenuOpen ? 'show' : ''}`}>
                <div className="lang-item" onClick={() => selectLanguage('English')}>English</div>
                <div className="lang-item" onClick={() => selectLanguage('Español')}>Español</div>
                <div className="lang-item" onClick={() => selectLanguage('Français')}>Français</div>
                <div className="lang-item" onClick={() => selectLanguage('Deutsch')}>Deutsch</div>
              </div>
            </div> */}

            {/* Login / Auth */}
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

          {/* Mobile Toggle Button */}
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

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
                placeholder="design@utispace.com"
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
