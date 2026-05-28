import React, { useState } from 'react';
import { Play } from 'lucide-react';

const REELS = [
  {
    id: 1,
    title: 'Site Visit: Living Room Setup',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Demo video
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
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const handlePlayClick = (id) => {
    setPlayingVideoId(id);
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
            const isPlaying = playingVideoId === reel.id;
            const hasVideo = Boolean(reel.videoUrl);

            return (
              <div key={reel.id} className="reel-card">
                {isPlaying && hasVideo ? (
                  <video 
                    src={reel.videoUrl} 
                    controls
                    autoPlay
                    className="reel-video"
                  />
                ) : (
                  <div 
                    className="reel-placeholder" 
                    style={{ backgroundImage: `url(${reel.thumbnail})`, cursor: hasVideo ? 'pointer' : 'default' }}
                    onClick={() => hasVideo && handlePlayClick(reel.id)}
                  >
                    <div className="reel-overlay">
                      <button 
                        className="reel-play-btn" 
                        aria-label="Play Reel"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (hasVideo) handlePlayClick(reel.id);
                        }}
                      >
                        <Play size={24} fill="currentColor" />
                      </button>
                      <h4 className="reel-title">{reel.title}</h4>
                      {!hasVideo && (
                        <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Video coming soon</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
