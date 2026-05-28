import { Mail } from 'lucide-react';

const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TEAM = [
  {
    id: 1,
    name: 'Amit Sharma',
    role: 'Principal Architect',
    bio: 'Alumnus of IIT Bombay with 12+ years of experience designing premium residential structures.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    insta: '#',
    linkedin: '#',
    mail: 'amit@utispace.com'
  },
  {
    id: 2,
    name: 'Neha Deshmukh',
    role: 'Lead Interior Stylist',
    bio: 'Dedicated to luxury materials, soft warm lighting design, and personalized bespoke spaces.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    insta: '#',
    linkedin: '#',
    mail: 'neha@utispace.com'
  },
  {
    id: 3,
    name: 'Vikram Patil',
    role: 'Execution Manager',
    bio: 'Ensures that raw construction skeleton phases transform into completed finishes with surgical precision.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    insta: '#',
    linkedin: '#',
    mail: 'vikram@utispace.com'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        {/* Intro Grid */}
        <div className="about-intro-grid">
          <div className="about-text-content">
            <span className="hero-subtitle">Our Story</span>
            <h3 className="serif-title gold-text">Crafting Spaces, Inspiring Lives</h3>
            <p>
              Founded in Pune, <strong>utispace</strong> has established itself as a premier boutique interior design house. We bridge the gap between architectural structures and human emotion.
            </p>
            <p>
              We believe a home is a living gallery of its residents. Our philosophy focuses on ambient light structures, organic warm textures, and smart space layout integration to build spaces that feel luxurious yet deeply comforting.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h4>150+</h4>
                <p>Homes Completed</p>
              </div>
              <div className="stat-item">
                <h4>12+</h4>
                <p>Awards Won</p>
              </div>
              <div className="stat-item">
                <h4>99%</h4>
                <p>Client Trust</p>
              </div>
            </div>
          </div>

          <div className="about-image-collage">
            <img 
              src="/images/bedroom.png" 
              alt="utispace Office Atmosphere" 
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"; // Luxury studio image
              }}
            />
          </div>
        </div>

        {/* Team Grid */}
        <div className="section-header" style={{ marginTop: '5rem', marginBottom: '3.5rem' }}>
          <span className="hero-subtitle">The Visionaries</span>
          <h2 className="serif-title">Meet The Team</h2>
          <p>
            The dedicated team of creators, architects, and execution managers who make the magic of utispace possible.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-member-img">
                <img src={member.image} alt={member.name} />
              </div>
              <h4 className="team-member-name serif-title">{member.name}</h4>
              <div className="team-member-role">{member.role}</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.2rem', padding: '0 1rem' }}>
                {member.bio}
              </p>
              <div className="team-socials">
                <a href={member.insta} aria-label="Instagram"><Instagram size={16} /></a>
                <a href={member.linkedin} aria-label="LinkedIn"><Linkedin size={16} /></a>
                <a href={`mailto:${member.mail}`} aria-label="Email"><Mail size={16} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
