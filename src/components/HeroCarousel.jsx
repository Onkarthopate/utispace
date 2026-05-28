import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 1,
    title: 'Bespoke Ambient Bed Chambers',
    subtitle: 'Luxury Bedrooms',
    desc: 'Thoughtfully designed personal guest bedrooms featuring soft texturing, custom lighting panels, and exquisite materials.',
    image: '/images/bedroom.png', // Exists
    cta: 'Explore Bedrooms'
  },
  {
    id: 2,
    title: 'Modern Minimalist Kitchen Oasis',
    subtitle: 'Kitchen & Bath',
    desc: 'Premium kitchen models blending under-cabinet backlighting, dark organic woodwork, and luxury marble facades.',
    image: '/images/kitchen.png', // Exists
    cta: 'View Kitchens'
  },
  {
    id: 3,
    title: 'Elegant Structural Spaces',
    subtitle: 'Full Home Renovations',
    desc: 'Complete architectural interior transformations, taking projects from initial structural concrete skeletons to elite signature homes.',
    image: '/images/bedroom.png', // Reuse bedroom as fallback or other path
    cta: 'See Real Stories'
  }
];

const HeroCarousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="hero-section">
      {SLIDES.map((slide, idx) => (
        <div 
          key={slide.id} 
          className={`carousel-slide ${idx === activeIdx ? 'active' : ''}`}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="hero-bg-image" 
          />
          <div className="hero-overlay"></div>
          
          <div className="hero-content">
            <span className="hero-subtitle">{slide.subtitle}</span>
            <h1 className="hero-title serif-title gold-text">{slide.title}</h1>
            <p className="hero-desc">{slide.desc}</p>
            <Link to="/portfolio" className="btn-primary">
              <span>{slide.cta}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      ))}

      {/* Nav Buttons */}
      <button className="carousel-nav-btn prev" onClick={handlePrev} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button className="carousel-nav-btn next" onClick={handleNext} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>

      {/* Indicators / Progress Bars */}
      <div className="carousel-indicators">
        {SLIDES.map((slide, idx) => (
          <div 
            key={slide.id} 
            className={`indicator ${idx === activeIdx ? 'active' : ''}`}
            onClick={() => setActiveIdx(idx)}
          >
            <div className="indicator-bar"></div>
            <span className="indicator-num">0{idx + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
