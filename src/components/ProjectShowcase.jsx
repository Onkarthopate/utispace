import React, { useState, useEffect } from 'react';
import {
  X,
  Ruler,
  MapPin,
  Hammer,
  Clock,
  Sparkles,
  Check,
  Calculator,
  Maximize2,
  ExternalLink,
  Phone,
  Mail,
  User,
  ArrowRight
} from 'lucide-react';
import '../styles/ProjectShowcase.css';

const TABS = ['All', 'Full Home', 'Offices', 'Living & Dining', 'Bedrooms', 'Kitchen & Bath'];

const PROJECTS = [
  {
    id: 1,
    title: 'The Elysian Penthouse',
    category: 'Full Home',
    desc: 'A full-home design with open glass balconies, warm ambient textures, ribbed wall features, and marble flooring.',
    image: '/images/full-home-1.jpg',
    size: '3,800 sq ft',
    location: 'Kalyani Nagar, Pune',
    materials: 'Calacatta Marble, Brushed Gold, Fluted Panels',
    philosophy: 'Designed to emphasize heights and views. It features an open flow where natural Calacatta marble surfaces reflect ambient lights, creating a spacious and airy double-height living atmosphere.',
    highlights: [
      'Seamless Italian Calacatta marble flooring with brass inlays',
      'Double-height fluted panels integrated with dimmable warm 3000K LEDs',
      'Panoramic glass balconies with hidden structural supports',
      'Custom acoustic ceiling treatment with integrated ducted HVAC vents'
    ],
    timeline: '12-14 Weeks',
    budgetTier: 'Ultra-Premium Bespoke',
    basePricePerSqFt: 4500,
    breakdown: [
      'Marble Flooring & Masonry: 35%',
      'Ribbed Fluted Wall Paneling: 25%',
      'Bespoke Ceilings & HVAC Integrations: 20%',
      'Premium Fixtures & Brass Accents: 20%'
    ]
  },
  {
    id: 2,
    title: 'Executive Corporate Suite',
    category: 'Offices',
    desc: 'Professional sound-proofed workstations, warm leather seating, floating bookshelf walls, and indirect light accents.',
    image: '/images/office-1.jpg',
    size: '1,400 sq ft',
    location: 'Hinjawadi, Pune',
    materials: 'Tempered Glass, Black walnut, Acoustic felt',
    philosophy: 'A highly functional office space that balances executive privacy with team collaboration. We implemented deep black walnut textures and acoustic panels to maintain silence during meetings.',
    highlights: [
      'High-performance sound-proofed partition walls (STC 50 rating)',
      'Bespoke black walnut floating library shelves with integrated back-lighting',
      'Ergonomic workstation desks with cable-management pathways',
      'Premium top-grain leather executive chairs and custom guest lounge'
    ],
    timeline: '8-10 Weeks',
    budgetTier: 'Luxe Professional',
    basePricePerSqFt: 3200,
    breakdown: [
      'Acoustic Felt & Double Glazing: 30%',
      'Walnut Wood Millwork: 35%',
      'Smart Wiring & Task Lighting: 15%',
      'Workstations & Soft Seating: 20%'
    ]
  },
  {
    id: 3,
    title: 'Minimalist Tech Hub',
    category: 'Offices',
    desc: 'A vibrant yet minimal workspace designed for a modern tech startup with ergonomic zones.',
    image: '/images/office-2.jpg',
    size: '2,100 sq ft',
    location: 'Magarpatta, Pune',
    materials: 'Oak wood, Matte black metal, Glass',
    philosophy: 'Focuses on transparency, brightness, and agile work styles. Soft natural oak wood balances the industrial matte black metal structures, creating a welcoming and high-energy environment.',
    highlights: [
      'Hot-desking configurations with under-bench power integrations',
      'Collaboration write-able walls with magnetic dry-erase finishes',
      'Glass-walled huddle rooms for instant brainstorming sessions',
      'Cafeteria and micro-pantry corner with sleek integrated matte cabinets'
    ],
    timeline: '9-11 Weeks',
    budgetTier: 'Agile Corporate',
    basePricePerSqFt: 2900,
    breakdown: [
      'Glass Partitions & Framework: 25%',
      'Agile Modular Workbenches: 30%',
      'Dry-erase Walls & Acoustics: 20%',
      'Pantry & Breakout Seating: 20%'
    ]
  },
  {
    id: 4,
    title: 'Mid-Century Dining Lounge',
    category: 'Living & Dining',
    desc: 'Spacious dining layout with a floating bar unit, integrated ambient mood lighting, and sleek modern dining tables.',
    image: '/images/living-1.jpg',
    size: '650 sq ft',
    location: 'Aundh, Pune',
    materials: 'Terrazzo, Teak, Leather',
    philosophy: 'A perfect intersection of dining utility and late-night lounge aesthetic. The terrazzo flooring acts as a clean, speckled canvas for the warm teakwood and rich leather textures.',
    highlights: [
      'Bespoke terrazzo tiles custom-cast with golden granite chips',
      'Teak wood floating dining table seating 8 guests',
      'Suspended brass bar unit with glass racks and amber backlighting',
      'Custom wall-to-wall credenza with soft-close push drawers'
    ],
    timeline: '6-7 Weeks',
    budgetTier: 'Mid-Century Luxe',
    basePricePerSqFt: 3800,
    breakdown: [
      'Terrazzo Casting & Polish: 30%',
      'Teakwood Furniture & Dining Table: 40%',
      'Suspended Bar & Cabinetry: 20%',
      'Custom Lighting & Dimmer Units: 10%'
    ]
  },
  {
    id: 5,
    title: 'Luxe Living Area',
    category: 'Bedrooms',
    desc: 'Cozy and luxurious family lounge featuring warm recessed lighting and a bespoke media console.',
    image: '/images/living-2.jpg',
    size: '800 sq ft',
    location: 'Koregaon Park, Pune',
    materials: 'Velvet, Walnut veneer, Brass',
    philosophy: 'Designed to offer the ultimate cozy sanctuary. We curated deep velvet upholstery and matched it with dark walnut veneers to diffuse warm lighting and eliminate glare during movie nights.',
    highlights: [
      'Curved modular sofa upholstered in stain-resistant velvet fabric',
      'Bookmatched dark walnut veneer TV backdrop paneling',
      'Hidden brass cove lighting lines behind floating shelves',
      'Hand-woven silk area rug designed exclusively for the layout'
    ],
    timeline: '7-8 Weeks',
    budgetTier: 'Residential Premium',
    basePricePerSqFt: 4100,
    breakdown: [
      'Custom Seating & Upholstery: 35%',
      'Walnut Wood Panel Work: 30%',
      'Custom Silk Rug & Drapes: 20%',
      'Indirect Lighting Controls: 15%'
    ]
  },
  {
    id: 6,
    title: 'Warm Contemporary Bedroom',
    category: 'Bedrooms',
    desc: 'Bespoke walnut paneling, indirect ambient LED borders, plush velvet backings, and minimalist side vanities.',
    image: '/images/bedroom-real-1.jpg',
    size: '420 sq ft',
    location: 'Koregaon Park, Pune',
    materials: 'Oak wood, Velvet, Brass',
    philosophy: 'Crafted as a restful oasis. The velvet headboard runs wall-to-wall, visually expanding the bedroom while high-grade sound insulation in the paneling ensures a quiet, peaceful sleep.',
    highlights: [
      'Wall-to-wall padded headboard in custom deep-tufted velvet',
      'Floating oak wood nightstands with integrated wireless charging pads',
      'Warm LED ribbon lights tucked behind headboard and under bedframe',
      'Minimalist sliding wardrobe doors with gold-anodized metal frames'
    ],
    timeline: '5-6 Weeks',
    budgetTier: 'Luxe Residential',
    basePricePerSqFt: 3600,
    breakdown: [
      'Bespoke Padded Paneling: 30%',
      'Wardrobes & Soft-Close Units: 40%',
      'Oak Wood Nightstands & Trim: 15%',
      'Integrated LED & Automation: 15%'
    ]
  },
  {
    id: 7,
    title: 'Serene Master Suite',
    category: 'Full Home',
    desc: 'A tranquil sleeping space focusing on natural textures, soft fabrics, and muted warm tones.',
    image: '/images/bedroom-real-2.jpg',
    size: '500 sq ft',
    location: 'Baner, Pune',
    materials: 'Linen, Teak wood, Ceramic',
    philosophy: 'Emphasizes Zen-like tranquility. Linen curtains filter sunlight into a soft glow that accentuates natural teakwood grains and minimalist ceramic accessories.',
    highlights: [
      'Solid teak bed platform with organic clear oil finish',
      'Imported Belgian linen drapery with motorized curtain tracks',
      'Textured clay-plaster walls that breathe and regulate humidity',
      'Concealed walk-in closet with automatic light sensors'
    ],
    timeline: '6 Weeks',
    budgetTier: 'Zen Organic Luxe',
    basePricePerSqFt: 3500,
    breakdown: [
      'Teak Bedframe & Joinery: 25%',
      'Zen Wall Plaster Work: 20%',
      'Motorized Drapery & Soft Linens: 25%',
      'Walk-In Closet Millwork: 30%'
    ]
  },
  {
    id: 8,
    title: 'Sleek Charcoal',
    category: 'Living & Dining',
    desc: 'Integrated dark laminate cabinets, marble countertops, under-shelf warm strip lights, and gold faucets.',
    image: '/images/kitchen-real-1.jpg',
    size: '280 sq ft',
    location: 'Baner, Pune',
    materials: 'Quartz, Walnut veneer, Gold-steel',
    philosophy: 'A culinary engine designed for professional-grade cooking. Dark anti-fingerprint charcoal surfaces contrast with pure white marble quartz to present a bold, dramatic aesthetic.',
    highlights: [
      'Anti-fingerprint charcoal nano-laminate cabinet shutters',
      'Premium seamless quartz countertop and backsplashes (15mm thick)',
      'Concealed soft-close pullout drawers with customizable spice trays',
      'Signature brushed gold high-arch sink faucet with pull-down spray'
    ],
    timeline: '5 Weeks',
    budgetTier: 'Gourmet Modular Premium',
    basePricePerSqFt: 4800,
    breakdown: [
      'Quartz Countertops & Slabs: 30%',
      'Smart Modular Shutters & Pullouts: 40%',
      'Built-in Chimney & Appliance Housing: 20%',
      'Brushed Gold Fittings & Faucets: 10%'
    ]
  },
  {
    id: 9,
    title: 'Modern Culinary Space',
    category: 'Kitchen & Bath',
    desc: 'An open-plan modular kitchen with a central island and smart storage solutions.',
    image: '/images/kitchen-real-2.jpg',
    size: '350 sq ft',
    location: 'Viman Nagar, Pune',
    materials: 'Acrylic, Quartzite, Stainless Steel',
    philosophy: 'Focuses on the kitchen as an entertainment zone. The central island provides ample preparation space while transitioning seamlessly into a casual breakfast counter.',
    highlights: [
      'High-gloss acrylic modular cabinets with aluminum edge-banding',
      'Massive quartzite central island with waterfall edge detailing',
      'Integrated food disposer and built-in convection microwave',
      'Custom overhead architectural pendant lights in black metal'
    ],
    timeline: '6 Weeks',
    budgetTier: 'Entertainment Kitchen',
    basePricePerSqFt: 4600,
    breakdown: [
      'Waterfall Island & Countertops: 35%',
      'High-Gloss Cabinet systems: 35%',
      'Smart Corner Storage & Pantry: 20%',
      'Pendant & Task Lighting: 10%'
    ]
  },
  {
    id: 10,
    title: 'Monochromatic',
    category: 'Bedrooms',
    desc: 'Walk-in rain shower with slate-grey tile accents, dual floating vanities, and warm backlit mirrors.',
    image: '/images/bath-1.jpg',
    size: '180 sq ft',
    location: 'Viman Nagar, Pune',
    materials: 'Slate, Porcelain, Matte Black Metal',
    philosophy: 'Transfers the peace of a luxury hot-spring spa directly to the home. Raw slate-grey tiles absorb light, creating a moody, meditative shower chamber with high-end fixtures.',
    highlights: [
      'Thermostatic rainfall shower head with multiple body spray nozzles',
      'Floating dual vanity made from solid surface acrylic',
      'Backlit anti-fog mirror with touch sensor color selectors',
      'Linear floor drain hidden flush within matching slate tiles'
    ],
    timeline: '4-5 Weeks',
    budgetTier: 'Luxury Spa Suite',
    basePricePerSqFt: 5200,
    breakdown: [
      'Slate & Porcelain Tile Layout: 30%',
      'Dual Floating Vanities: 25%',
      'Thermostatic Plumbing & Jets: 30%',
      'Backlit Anti-fog Mirror & Trims: 15%'
    ]
  },
  {
    id: 11,
    title: 'Kitchen Noir',
    category: 'Kitchen & Bath',
    desc: 'Integrated dark laminate cabinets, marble countertops, under-shelf warm strip lights, and gold faucets.',
    image: '/images/kitchem.jpeg',
    size: '280 sq ft',
    location: 'Baner, Pune',
    materials: 'Quartz, Walnut veneer, Gold-steel',
    philosophy: 'A culinary engine designed for professional-grade cooking. Dark anti-fingerprint charcoal surfaces contrast with pure white marble quartz to present a bold, dramatic aesthetic.',
    highlights: [
      'Anti-fingerprint charcoal nano-laminate cabinet shutters',
      'Premium seamless quartz countertop and backsplashes (15mm thick)',
      'Concealed soft-close pullout drawers with customizable spice trays',
      'Signature brushed gold high-arch sink faucet with pull-down spray'
    ],
    timeline: '5 Weeks',
    budgetTier: 'Gourmet Modular Premium',
    basePricePerSqFt: 4800,
    breakdown: [
      'Quartz Countertops & Slabs: 30%',
      'Smart Modular Shutters & Pullouts: 40%',
      'Built-in Chimney & Appliance Housing: 20%',
      'Brushed Gold Fittings & Faucets: 10%'
    ]
  },
];

const ProjectShowcase = ({ searchFilter = '' }) => {
  const [selectedTab, setSelectedTab] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Dynamic estimate state
  const [customSize, setCustomSize] = useState('');
  const [calculatedCost, setCalculatedCost] = useState(0);

  // Form states
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', note: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Set up Keyboard Esc event to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Set up custom size default when project details modal opens
  const openModal = (project) => {
    setActiveProject(project);
    const numericSize = parseInt(project.size.replace(/[^0-9]/g, '')) || 1000;
    setCustomSize(numericSize);
    setCalculatedCost(numericSize * project.basePricePerSqFt);
    setFormSubmitted(false);
    setFormData({ name: '', email: '', phone: '', note: `Interested in a custom build similar to ${project.title}` });

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveProject(null);
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Re-calculate cost on size input
  const handleSizeChange = (e) => {
    const value = e.target.value;
    setCustomSize(value);
    const parsed = parseInt(value) || 0;
    if (activeProject) {
      setCalculatedCost(parsed * activeProject.basePricePerSqFt);
    }
  };

  // Format currency in Indian Rupees
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Handle inquiry submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number to request a customized estimate.');
      return;
    }
    setFormSubmitted(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const filteredProjects = PROJECTS.filter((project) => {
    // Category match
    const categoryMatch = selectedTab === 'All' || project.category === selectedTab;
    // Search match
    const searchMatch =
      project.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      project.category.toLowerCase().includes(searchFilter.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchFilter.toLowerCase()) ||
      project.materials.toLowerCase().includes(searchFilter.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="hero-subtitle">Our Gallery</span>
          <h2 className="serif-title">Completed Stories</h2>
          <p>
            Explore our curated portfolio of residential and commercial spaces, each tailored to tell the unique story of its inhabitants. Click on any card below to view custom specifications, floor parameters, materials used, and receive an instant estimation quote.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="project-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${selectedTab === tab ? 'active' : ''}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-card interactive-card"
              onClick={() => openModal(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="project-card-overlay">
                  <span className="overlay-btn gold-border">
                    <Maximize2 size={16} style={{ marginRight: '8px' }} />
                    View Details
                  </span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-category-row">
                  <span className="project-category">{project.category}</span>
                  <span className="project-timeline-tag"><Clock size={11} /> {project.timeline}</span>
                </div>
                <h3 className="project-title serif-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-meta">
                  <span><Ruler size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> {project.size}</span>
                  <span><MapPin size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> {project.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-secondary)' }}>
            No projects found matching your criteria. Try another filter or search word.
          </div>
        )}
      </div>

      {/* STUNNING PROJECT DETAILS MODAL */}
      {activeProject && (
        <div className="project-details-overlay" onClick={closeModal}>
          <div
            className="project-details-modal"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
          >
            {/* Close button on top-right */}
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close details">
              <X size={20} />
            </button>

            {/* Split layout: Visual Showcase Column & Technical Details Column */}
            <div className="details-modal-grid">

              {/* Left Column: Rich Images and Aesthetics */}
              <div className="modal-visual-column">
                <div
                  className="modal-main-img-wrapper clickable-img-wrapper"
                  onClick={() => setIsLightboxOpen(true)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={activeProject.image} alt={activeProject.title} className="modal-main-img" />
                  <div className="modal-img-hover-overlay">
                    <span className="overlay-btn gold-border">
                      <Maximize2 size={16} style={{ marginRight: '8px' }} />
                      View Full Image
                    </span>
                  </div>
                  <div className="visual-image-badge">
                    <Sparkles size={14} style={{ marginRight: '6px', color: 'var(--accent-gold)' }} />
                    {activeProject.budgetTier}
                  </div>
                </div>

                {/* Cost Breakdown Segment */}
                <div className="modal-breakdown-box">
                  <h4 className="detail-subtitle gold-text">
                    <Hammer size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Design & Cost Allocation Breakdown
                  </h4>
                  <div className="breakdown-list">
                    {activeProject.breakdown.map((item, idx) => (
                      <div key={idx} className="breakdown-item">
                        <span className="breakdown-bullet"></span>
                        <span className="breakdown-text">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-philosophy-box">
                  <h4 className="detail-subtitle gold-text">Design Philosophy</h4>
                  <p>{activeProject.philosophy}</p>
                </div>
              </div>

              {/* Right Column: Specification Details & Dynamic Cost Calculator */}
              <div className="modal-specs-column">
                <div className="modal-header-section">
                  <span className="modal-category">{activeProject.category} Portfolio Piece</span>
                  <h2 className="modal-title serif-title">{activeProject.title}</h2>
                  <p className="modal-desc-intro">{activeProject.desc}</p>
                </div>

                {/* Specs Badges Grid */}
                <div className="modal-specs-grid">
                  <div className="spec-badge-item">
                    <span className="spec-icon"><Ruler size={18} /></span>
                    <div className="spec-labels">
                      <span className="spec-label-title">Floor Area</span>
                      <span className="spec-label-value">{activeProject.size}</span>
                    </div>
                  </div>

                  <div className="spec-badge-item">
                    <span className="spec-icon"><MapPin size={18} /></span>
                    <div className="spec-labels">
                      <span className="spec-label-title">Location</span>
                      <span className="spec-label-value">{activeProject.location}</span>
                    </div>
                  </div>

                  <div className="spec-badge-item">
                    <span className="spec-icon"><Clock size={18} /></span>
                    <div className="spec-labels">
                      <span className="spec-label-title">Build Duration</span>
                      <span className="spec-label-value">{activeProject.timeline}</span>
                    </div>
                  </div>

                  <div className="spec-badge-item">
                    <span className="spec-icon"><Sparkles size={18} /></span>
                    <div className="spec-labels">
                      <span className="spec-label-title">Premium Level</span>
                      <span className="spec-label-value" style={{ fontSize: '0.8rem' }}>{activeProject.budgetTier}</span>
                    </div>
                  </div>
                </div>

                {/* Materials & Highlighting Features Section */}
                <div className="modal-highlights-section">
                  <h4 className="detail-subtitle gold-text">Key Features Built</h4>
                  <div className="highlights-grid">
                    {activeProject.highlights.map((highlight, index) => (
                      <div key={index} className="highlight-item">
                        <Check size={14} className="check-gold-icon" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '1.2rem', padding: '0.8rem', borderLeft: '2px solid var(--accent-gold)', backgroundColor: 'var(--bg-tertiary)', fontSize: '0.85rem' }}>
                    <strong>Material Matrix:</strong> {activeProject.materials}
                  </div>
                </div>

                {/* DYNAMIC TURNKEY ESTIMATOR & CTAs */}
                <div className="modal-estimator-section">
                  <div className="estimator-header">
                    <Calculator size={18} className="gold-text" />
                    <h4 className="estimator-title serif-title">Turnkey Layout Estimator</h4>
                  </div>
                  <p className="estimator-desc">
                    Change the floor area size below to estimate custom turnkey build costs using the premium materials and specifications deployed in **{activeProject.title}**.
                  </p>

                  <div className="estimator-calculator-box">
                    <div className="estimator-input-group">
                      <label htmlFor="custom-area-size">Project Space Size (Sq Ft)</label>
                      <div className="input-with-suffix">
                        <input
                          type="number"
                          id="custom-area-size"
                          value={customSize}
                          onChange={handleSizeChange}
                          min="100"
                          max="25000"
                          className="estimator-input"
                        />
                        <span className="input-suffix">sq ft</span>
                      </div>
                    </div>

                    <div className="estimator-result-group">
                      <span className="result-label">Approx Design & Fitout Cost:</span>
                      <span className="result-amount gold-text">{formatCurrency(calculatedCost)}</span>
                      <span className="result-disclaimer">*Includes material sourcing, labor, custom millwork, & architectural supervision.</span>
                    </div>
                  </div>

                  {/* Consultation form inside the estimator to catch leads */}
                  <div className="estimator-form-wrapper">
                    {!formSubmitted ? (
                      <form onSubmit={handleFormSubmit} className="modal-lead-form">
                        <h5 className="lead-form-title">Request Detailed Scope & PDF Blueprint</h5>
                        <p className="lead-form-desc">Fill in details below to receive a formal quotation and a conceptual layout draft from our head architect.</p>

                        <div className="form-row-2">
                          <div className="form-input-field">
                            <span className="field-icon"><User size={13} /></span>
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          <div className="form-input-field">
                            <span className="field-icon"><Phone size={13} /></span>
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Phone Number"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-input-field">
                          <span className="field-icon"><Mail size={13} /></span>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address (Optional)"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>

                        <button type="submit" className="btn btn-gold btn-full-width">
                          Request Proposal for {customSize} sq ft
                          <ArrowRight size={14} style={{ marginLeft: '8px' }} />
                        </button>
                      </form>
                    ) : (
                      <div className="lead-form-success" style={{ animation: 'fadeIn 0.6s ease forwards' }}>
                        <div className="success-icon-badge">
                          <Check size={28} />
                        </div>
                        <h5 className="success-title">Proposal Inquiry Received!</h5>
                        <p className="success-desc">
                          Our chief designer will review your <strong>{customSize} sq ft</strong> spatial specs for <strong>{activeProject.title}</strong> style and contact you at <strong>{formData.phone}</strong> within 2 hours.
                        </p>
                        <button
                          type="button"
                          className="btn btn-border"
                          onClick={() => setFormSubmitted(false)}
                          style={{ marginTop: '1rem', padding: '0.4rem 1.2rem', fontSize: '0.8rem' }}
                        >
                          Modify Parameters
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="modal-footer-buttons">
                  <button className="btn btn-border" onClick={closeModal}>
                    Close Portfolio Specs
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* FULL SCREEN uncropped IMAGE LIGHTBOX */}
      {isLightboxOpen && activeProject && (
        <div
          className="image-lightbox-overlay"
          onClick={() => setIsLightboxOpen(false)}
          style={{ animation: 'modalFadeIn 0.3s ease forwards' }}
        >
          <button className="lightbox-close-btn" onClick={() => setIsLightboxOpen(false)} aria-label="Close lightbox">
            <X size={24} />
          </button>
          <div className="lightbox-img-container">
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="lightbox-caption" onClick={(e) => e.stopPropagation()}>
            <h4 className="serif-title gold-text">{activeProject.title}</h4>
            <p>{activeProject.desc} — {activeProject.size} space in {activeProject.location}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectShowcase;
