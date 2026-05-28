import React, { useState } from 'react';
import { Maximize2, ExternalLink } from 'lucide-react';

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
    materials: 'Calacatta Marble, Brushed Gold, Fluted Panels'
  },
  {
    id: 2,
    title: 'Executive Corporate Suite',
    category: 'Offices',
    desc: 'Professional sound-proofed workstations, warm leather seating, floating bookshelf walls, and indirect light accents.',
    image: '/images/office-1.jpg',
    size: '1,400 sq ft',
    location: 'Hinjawadi, Pune',
    materials: 'Tempered Glass, Black walnut, Acoustic felt'
  },
  {
    id: 3,
    title: 'Minimalist Tech Hub',
    category: 'Offices',
    desc: 'A vibrant yet minimal workspace designed for a modern tech startup with ergonomic zones.',
    image: '/images/office-2.jpg',
    size: '2,100 sq ft',
    location: 'Magarpatta, Pune',
    materials: 'Oak wood, Matte black metal, Glass'
  },
  {
    id: 4,
    title: 'Mid-Century Dining Lounge',
    category: 'Living & Dining',
    desc: 'Spacious dining layout with a floating bar unit, integrated ambient mood lighting, and sleek modern dining tables.',
    image: '/images/living-1.jpg',
    size: '650 sq ft',
    location: 'Aundh, Pune',
    materials: 'Terrazzo, Teak, Leather'
  },
  {
    id: 5,
    title: 'Luxe Living Area',
    category: 'Living & Dining',
    desc: 'Cozy and luxurious family lounge featuring warm recessed lighting and a bespoke media console.',
    image: '/images/living-2.jpg',
    size: '800 sq ft',
    location: 'Koregaon Park, Pune',
    materials: 'Velvet, Walnut veneer, Brass'
  },
  {
    id: 6,
    title: 'Warm Contemporary Bedroom',
    category: 'Bedrooms',
    desc: 'Bespoke walnut paneling, indirect ambient LED borders, plush velvet backings, and minimalist side vanities.',
    image: '/images/bedroom-real-1.jpg',
    size: '420 sq ft',
    location: 'Koregaon Park, Pune',
    materials: 'Oak wood, Velvet, Brass'
  },
  {
    id: 7,
    title: 'Serene Master Suite',
    category: 'Bedrooms',
    desc: 'A tranquil sleeping space focusing on natural textures, soft fabrics, and muted warm tones.',
    image: '/images/bedroom-real-2.jpg',
    size: '500 sq ft',
    location: 'Baner, Pune',
    materials: 'Linen, Teak wood, Ceramic'
  },
  {
    id: 8,
    title: 'Sleek Charcoal Kitchen',
    category: 'Kitchen & Bath',
    desc: 'Integrated dark laminate cabinets, marble countertops, under-shelf warm strip lights, and gold faucets.',
    image: '/images/kitchen-real-1.jpg',
    size: '280 sq ft',
    location: 'Baner, Pune',
    materials: 'Quartz, Walnut veneer, Gold-steel'
  },
  {
    id: 9,
    title: 'Modern Culinary Space',
    category: 'Kitchen & Bath',
    desc: 'An open-plan modular kitchen with a central island and smart storage solutions.',
    image: '/images/kitchen-real-2.jpg',
    size: '350 sq ft',
    location: 'Viman Nagar, Pune',
    materials: 'Acrylic, Quartzite, Stainless Steel'
  },
  {
    id: 10,
    title: 'Monochromatic Spa Bath',
    category: 'Kitchen & Bath',
    desc: 'Walk-in rain shower with slate-grey tile accents, dual floating vanities, and warm backlit mirrors.',
    image: '/images/bath-1.jpg',
    size: '180 sq ft',
    location: 'Viman Nagar, Pune',
    materials: 'Slate, Porcelain, Matte Black Metal'
  }
];

const ProjectShowcase = ({ searchFilter = '' }) => {
  const [selectedTab, setSelectedTab] = useState('All');

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
            Explore our curated portfolio of residential and commercial spaces, each tailored to tell the unique story of its inhabitants.
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
            <article key={project.id} className="project-card">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title serif-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-meta">
                  <span>{project.size}</span>
                  <span>{project.location}</span>
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
    </section>
  );
};

export default ProjectShowcase;
