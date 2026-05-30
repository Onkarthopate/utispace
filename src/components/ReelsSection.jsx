import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import '../styles/ReelsSection.css';

const REELS = [
  {
    id: 1,
    title: 'Site Visit: Living Room Setup',
    videoUrl: '/videos/video.mp4', // User uploaded video
    thumbnail: '/images/living-1.jpg',
  },
  {
    id: 2,
    title: 'Before & After: Kitchen',
    videoUrl: '',
    thumbnail: '/images/kitchen-real-1.jpg',
  },
  {
    id: 3,
    title: 'Client Handover Day',
    videoUrl: '',
    thumbnail: '/images/bedroom-real-1.jpg',
  },
  {
    id: 4,
    title: 'Office Workspace Reveal',
    videoUrl: '',
    thumbnail: '/images/office-1.jpg',
  },
  {
    id: 5,
    title: 'Material Selection Vlog',
    videoUrl: '',
    thumbnail: '/images/bath-1.jpg',
  }
];

const ReelsSection = () => {
  const [activeModalReel, setActiveModalReel] = useState(null);

  // Close modal on Escape key press and manage body overflow scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalReel(null);
      }
    };

    if (activeModalReel) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModalReel]);

  const handlePlayClick = (reel) => {
    setActiveModalReel(reel);
  };

  return (
    <section id="reels" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="hero-subtitle">Real Stories</span>
          <h2 className="serif-title">Behind the Scenes Reels</h2>
          <p>
            Watch our active projects transform from bare skeletons to beautifully completed spaces.
          </p>
        </div>

        <div className="reels-grid">
          {REELS.map((reel) => {
            const hasVideo = Boolean(reel.videoUrl);

            return (
              <div 
                key={reel.id} 
                className={`reel-card ${hasVideo ? 'has-video' : ''}`}
                style={{ cursor: hasVideo ? 'pointer' : 'default' }}
                onClick={() => hasVideo && handlePlayClick(reel)}
              >
                <div 
                  className="reel-placeholder" 
                  style={{ backgroundImage: `url(${reel.thumbnail})` }}
                >
                  <div className="reel-overlay">
                    {hasVideo && (
                      <button 
                        className="reel-play-btn" 
                        aria-label="Play Reel"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayClick(reel);
                        }}
                      >
                        <Play size={24} fill="currentColor" />
                      </button>
                    )}
                    <h4 className="reel-title">{reel.title}</h4>
                    {!hasVideo ? (
                      <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Video coming soon</p>
                    ) : (
                      <p style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: '500' }}>Click to play</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Premium Fullscreen Video Modal (Lightbox) */}
      {activeModalReel && (
        <div className="reel-modal-overlay" onClick={() => setActiveModalReel(null)}>
          <div className="reel-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="reel-modal-header">
              <h3 className="serif-title">{activeModalReel.title}</h3>
              <button 
                className="reel-modal-close" 
                onClick={() => setActiveModalReel(null)}
                aria-label="Close video player"
              >
                <X size={24} />
              </button>
            </div>
            <div className="reel-modal-body">
              <video 
                src={activeModalReel.videoUrl} 
                controls 
                autoPlay 
                className="reel-modal-video"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReelsSection;
