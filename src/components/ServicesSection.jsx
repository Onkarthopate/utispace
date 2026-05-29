import React from 'react';
import { Palette, Home, Eye, KeyRound, Layout, Hammer } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Interior Design',
    description: 'Crafting bespoke luxury aesthetics tailored to your personality. We harmonize organic textures, refined color palettes, and ambient lighting to create timeless masterpieces.',
    icon: Palette
  },
  {
    id: 2,
    title: 'Residential / Commercial',
    description: 'From warm, high-end private family residences to highly ergonomic, premium corporate office hubs, we design spaces that inspire daily living and collaborative success.',
    icon: Home
  },
  {
    id: 3,
    title: '3D Visualisation',
    description: 'Experience your future space before construction begins. We produce immersive, ultra-realistic 3D walkthroughs and photorealistic renders detailing every texture and shadow.',
    icon: Eye
  },
  {
    id: 4,
    title: 'Turnkey Projects',
    description: 'Surgically precise execution from initial layout skeletons to the final key handover. We manage all procurement, material sourcing, scheduling, and contractor coordination.',
    icon: KeyRound
  },
  {
    id: 5,
    title: 'Space Planning',
    description: 'Maximizing flow, functional volume, and ergonomic efficiency. We carefully map traffic patterns, natural lighting paths, and structural layouts for seamless daily utility.',
    icon: Layout
  },
  {
    id: 6,
    title: 'Renovations',
    description: 'Breathing modern sophistication and luxurious energy into existing properties. We reconstruct outdated structures into modern architectural masterpieces.',
    icon: Hammer
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section section-padding" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(197, 168, 128, 0.04) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="hero-subtitle">Our Expertise</span>
          <h2 className="serif-title" style={{ fontSize: '3.5rem', marginBottom: '1.2rem', background: 'linear-gradient(135deg, var(--text-primary) 30%, var(--accent-gold) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Bespoke Services
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            We provide full-service design solutions, seamlessly translating architectural skeletons into high-end, luxury environments.
          </p>
        </div>

        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          marginTop: '4rem'
        }}>
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card-premium" style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                padding: '3rem 2.5rem',
                borderRadius: '4px',
                transition: 'var(--transition-smooth)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                {/* Thin top border that highlights on hover */}
                <div className="hover-line" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '0%',
                  height: '2px',
                  backgroundColor: 'var(--accent-gold)',
                  transition: 'var(--transition-smooth)'
                }} />

                <div className="service-icon-box" style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(197, 168, 128, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  transition: 'var(--transition-smooth)'
                }}>
                  <IconComponent size={26} strokeWidth={1.5} />
                </div>

                <h3 className="serif-title" style={{ fontSize: '1.6rem', color: 'var(--text-primary)', margin: 0 }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Styled JSX for Premium Hover Micro-animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .service-card-premium:hover {
          transform: translateY(-8px);
          border-color: var(--border-color-light) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(197, 168, 128, 0.03);
        }
        .service-card-premium:hover .hover-line {
          width: 100% !important;
        }
        .service-card-premium:hover .service-icon-box {
          background-color: var(--accent-gold) !important;
          color: var(--bg-primary) !important;
          transform: scale(1.1);
        }
      `}} />
    </section>
  );
};

export default ServicesSection;
