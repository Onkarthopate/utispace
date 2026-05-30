import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/PricingSection.css';

const PACKAGES = [
  {
    name: 'Virtual Consultation',
    price: '₹14,999',
    period: 'per room layout',
    desc: 'Ideal for those seeking stylistic guidance but wanting to manage the local contractor execution themselves.',
    features: [
      'Personal 1-on-1 video call session',
      'Curated moodboard & color selection',
      '2D space planning & furniture layout',
      'Shopping list link recommendations',
      '1 revision iteration included'
    ],
    premium: false
  },
  {
    name: 'Concept & 3D Render',
    price: '₹44,999',
    period: 'per room layout',
    desc: 'High-fidelity visualizations of your dream home with exact measurements and material blueprints.',
    features: [
      'Comprehensive 3D photorealistic renders',
      'Bespoke material palette selection',
      'Electrical & false ceiling drawings',
      'Detailed contractor estimation sheet',
      '3 revision iterations included'
    ],
    premium: true // highlights card
  },
  {
    name: 'Elite Turnkey Handover',
    price: '₹2,49,999',
    period: 'onwards / project',
    desc: 'Complete end-to-end design & site execution. We manage contractors, skeleton works, and final styling.',
    features: [
      'Dedicated project manager assignment',
      'Complete skeleton structural execution',
      'Custom modular kitchen & wardrobes',
      'Quality assurance inspections',
      'Move-in ready cleaning & styling'
    ],
    premium: false
  }
];

const PricingSection = () => {
  const [area, setArea] = useState(1000);
  const [designType, setDesignType] = useState('Full Home');
  const [materialTier, setMaterialTier] = useState('Premium');

  const calculateEstimate = () => {
    let baseRate = 1800; // standard price per sq ft in Pune
    
    if (materialTier === 'Standard') baseRate = 1500;
    else if (materialTier === 'Luxury') baseRate = 2600;

    let multiplier = 1;
    if (designType === 'Offices') multiplier = 0.85;
    else if (designType === 'Kitchen & Bath') multiplier = 1.3;
    else if (designType === 'Bedrooms') multiplier = 1.1;

    const total = area * baseRate * multiplier;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(total);
  };

  return (
    <section id="pricing" className="pricing-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="hero-subtitle">Transparent Rates</span>
          <h2 className="serif-title">Design Packages & Estimation</h2>
          <p>
            No hidden costs. Choose from our standard consultation options or utilize our interactive calculator to estimate turnkey costs.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="pricing-grid">
          {PACKAGES.map((pkg, idx) => (
            <div key={idx} className={`pricing-card ${pkg.premium ? 'premium' : ''}`}>
              {pkg.premium && <div className="pricing-badge">Popular</div>}
              <div>
                <h3 className="package-name serif-title">{pkg.name}</h3>
                <div className="package-price">
                  {pkg.price} <span>{pkg.period}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  {pkg.desc}
                </p>
                <ul className="package-features">
                  {pkg.features.map((feat, fidx) => (
                    <li key={fidx}>
                      <Check size={14} className="gold-text" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Select Package</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Interactive Estimator Card */}
        <div className="calculator-card" style={{ marginTop: '5rem' }}>
          <h3 className="calc-title serif-title gold-text">Estimate Your Turnkey Project</h3>
          
          <div className="calc-row">
            {/* Slider Group: Area */}
            <div className="slider-group">
              <label>
                <span>Space Area</span>
                <span className="value">{area} sq ft</span>
              </label>
              <input 
                type="range" 
                min="300" 
                max="5000" 
                step="50" 
                value={area} 
                onChange={(e) => setArea(Number(e.target.value))}
                className="premium-range"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                <span>300 sq ft</span>
                <span>5,000 sq ft</span>
              </div>
            </div>

            {/* Selection Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', display: 'block' }}>Space Layout Type</label>
                <select 
                  className="form-control" 
                  value={designType} 
                  onChange={(e) => setDesignType(e.target.value)}
                  style={{ background: 'var(--bg-secondary)' }}
                >
                  <option value="Full Home">Full Home Design</option>
                  <option value="Bedrooms">Bedrooms Only</option>
                  <option value="Kitchen & Bath">Kitchens & Baths</option>
                  <option value="Offices">Office / Commercial Space</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', display: 'block' }}>Material Finishing Quality</label>
                <select 
                  className="form-control" 
                  value={materialTier} 
                  onChange={(e) => setMaterialTier(e.target.value)}
                  style={{ background: 'var(--bg-secondary)' }}
                >
                  <option value="Standard">Standard Premium (Elegant & Sturdy)</option>
                  <option value="Premium">Elite Executive (Bespoke Veneer & Fixtures)</option>
                  <option value="Luxury">Signature Luxury (Imported Stone & Backlit Glass)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Estimation Result Panel */}
          <div className="calc-result-box">
            <div>
              <div className="result-label">Approximate Project Budget</div>
              <div className="result-val">{calculateEstimate()}</div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                *Estimation covers materials, structure execution, furniture installation, and studio charges.
              </p>
            </div>
            <a 
              href={'https://wa.me/919999999999?text=' + encodeURIComponent('Hello utispace, I used your estimator and got an estimate of ' + calculateEstimate() + ' for a ' + area + ' sq ft ' + designType + '. I\'d like to schedule a consultation.')}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              <span>Consult on WhatsApp</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
