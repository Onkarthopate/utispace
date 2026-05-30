import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import '../styles/BeforeAfterSlider.css';

const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseleave', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="transformations" className="ba-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="hero-subtitle">Visual Proof</span>
          <h2 className="serif-title">Skeleton to Splendor</h2>
          <p>
            Drag the gold slider below to see how we transform raw concrete structures and layouts into fully realized luxury interiors.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="ba-slider-container"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* Before Image (Skeleton) - Background */}
          <div className="ba-img-container ba-before">
            <img 
              src="/images/kitchen.png" // Fallback to kitchen
              alt="Skeleton Phase" 
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80"; // Premium construction site photo
              }}
            />
            <div className="ba-label before-label">Skeleton Layout</div>
          </div>

          {/* After Image (Completed) - Clipped Overlay */}
          <div 
            className="ba-img-container ba-after"
            style={{ clipPath: `inset(0px 0px 0px ${sliderPos}%)` }}
          >
            <img 
              src="/images/bedroom.png" // Exists
              alt="Completed Design" 
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"; // Luxury bedroom photo
              }}
            />
            <div className="ba-label after-label">Completed Finish</div>
          </div>

          {/* Slider Handle */}
          <div 
            className="ba-handle"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="ba-handle-circle">
              <ArrowLeftRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
