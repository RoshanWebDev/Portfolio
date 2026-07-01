import React, { useState, useRef } from 'react';

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    if (!isDragging || !containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const position = ((clientX - left) / width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  const handleDown = () => setIsDragging(true);
  const handleUp = () => setIsDragging(false);

  return (
    <div 
      className="ba-slider-container" 
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseUp={handleUp}
      onTouchEnd={handleUp}
      onMouseLeave={handleUp}
      onPointerDown={(e) => {
        // Prevent project card swipe/click
        e.stopPropagation();
        handleDown();
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
        handleDown();
      }}
    >
      {/* After image is the base */}
      <div className="ba-image-after" style={{ backgroundImage: `url(${afterImage})` }}>
        <span className="ba-label ba-label-after">After</span>
      </div>
      
      {/* Before image overlays and gets clipped */}
      <div 
        className="ba-image-before" 
        style={{ 
          backgroundImage: `url(${beforeImage})`,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
        }}
      >
        <span className="ba-label ba-label-before">Before</span>
      </div>
      
      {/* Draggable Handle */}
      <div className="ba-slider-handle" style={{ left: `${sliderPos}%` }}>
        <div className="ba-slider-line"></div>
        <div className="ba-slider-button">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
