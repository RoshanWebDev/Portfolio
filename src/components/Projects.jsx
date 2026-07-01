import React, { useState, useEffect } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

const ShopifyIcon = () => (
  <svg width="14" height="16" viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg">
    <path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z" fill="#95BF46"/>
    <path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357" fill="#5E8E3E"/>
    <path d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338" fill="#FFF"/>
  </svg>
);

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCompare, setSelectedCompare] = useState(null);

  const cards = [
    { 
      num: "01", 
      category: "Shopify",
      hasShopifyIcon: true,
      title: "Papero Notebooks",
      desc: "Notebook manufacture company",
      tech: "Shopify, Liquid, HTML5, CSS3, JavaScript", 
      img: "/papero-preview.png",
      live: "https://paperonotebooks.com"
    },
    { 
      num: "02", 
      category: "Shopify",
      hasShopifyIcon: true,
      title: "Tint and Shade",
      desc: "Kawaii stationery",
      tech: "Shopify, Custom Liquid, HTML5, CSS3, JS", 
      img: "/tintandshade-preview.png",
      live: "https://tintandshade.in" 
    },
    { 
      num: "03", 
      category: "Web",
      title: "Pics N Prompts",
      desc: "AI Prompts",
      tech: "React JS, Tailwind CSS, Supabase", 
      img: "/picsandpromps.png",
      live: "https://picsandprompts.com" 
    },
    { 
      num: "04", 
      category: "Web",
      title: "Modern Web Based ERP",
      desc: "Customized ERP to solve business errors",
      tech: "React JS, Supabase", 
      img: "/erp-preview.png",
      live: "https://erp.paperonotebooks.com" 
    },
    { 
      num: "05", 
      category: "AI Tools",
      title: "Leon Clothing AI Campaigns",
      desc: "Over 50+ products styled & generated. Legacy to modern AI fashion generation.",
      tech: "ChatGPT, Gemini, & other AI Tools", 
      isCompare: true,
      beforeImg: "/before-leon.jpg",
      afterImg: "/after-leon.webp",
      live: "https://leonclothing.com/products/solid-pullover-hoodie?variant=45396365115449" 
    },
    { 
      num: "06", 
      category: "AI Tools",
      title: "Tint and Shade Kawaii Generation",
      desc: "Aesthetic Korean lifestyle image generation for Kawaii products. Over 100+ products done.",
      tech: "ChatGPT, Gemini, & other AI Tools", 
      isCustomUI: 'kawaiiLinks',
      sampleLinks: [
        { name: "Gloves Pen", url: "https://tintandshade.in/products/boxing-gloves-pop-out-pen-kawaii-pen" },
        { name: "Avengers Keychains", url: "https://tintandshade.in/products/avengers-superhero-keychains-car-danglers" },
        { name: "Lollipop Eraser", url: "https://tintandshade.in/products/aqua-theme-lollipop-eraser-kawaii-eraser" },
        { name: "Fries Glue Stick", url: "https://tintandshade.in/products/french-fries-burger-glue-stick-kawaii-glue-stick" }
      ],
      live: "https://tintandshade.in/" 
    },
    { 
      num: "07", 
      category: "React",
      title: "Modern Premium Portfolio",
      desc: "My personal portfolio featuring glassmorphism, dynamic sliders, and premium UI.",
      tech: "React JS, CSS, Vite", 
      img: "/portfolio.png",
      live: "#" 
    }
  ];

  const totalCards = cards.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % totalCards);
      }, 2500); // Auto slide every 2.5 seconds
    }
    return () => clearInterval(interval);
  }, [isHovered, totalCards]);

  const getOffset = (index) => {
    let offset = index - activeIndex;
    if (offset > Math.floor(totalCards / 2)) offset -= totalCards;
    if (offset < -Math.floor(totalCards / 2)) offset += totalCards;
    return offset;
  };

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="section-header reveal-up text-center">
          <h2 className="section-title"><span className="text-gradient">Projects</span></h2>
        </div>
      </div>
      
      <div 
        className="aw-slider-wrapper reveal-up delay-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div className="slide-deck-container">
          {cards.map((card, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;
            
            // Positioning logic
            const scale = 1 - Math.abs(offset) * 0.12; // 12% smaller for each step
            // For negative offset (left), we move left. 
            // The value is driven by CSS variable --translate-x
            const zIndex = 10 - Math.abs(offset);
            const opacity = Math.abs(offset) > 1 ? 0.4 : 1;
            const pointerEvents = 'auto'; // allow clicking on all cards

            return (
              <div 
                className={`aw-project-card glass-card ${isActive ? 'is-active' : ''}`} 
                key={index}
                onClick={() => {
                  if (!isActive) setActiveIndex(index);
                }}
                style={{
                  transform: `translateX(calc(${offset} * var(--translate-x, 105%))) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity,
                  pointerEvents: pointerEvents,
                  cursor: isActive ? 'default' : 'pointer',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div className="aw-card-top">
                  <span className="aw-number">{card.num}</span>
                  <span className="aw-category" style={card.hasShopifyIcon ? { display: 'flex', alignItems: 'center', gap: '4px' } : {}}>
                    {card.hasShopifyIcon && <ShopifyIcon />}
                    {card.category}
                  </span>
                </div>
                <h3 className="aw-title">{card.title}</h3>
                {card.desc && <p className="aw-desc" style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', margin: '-0.25rem 0 1rem 0' }}>{card.desc}</p>}
                <div className="aw-tech-stack">
                  <p className="aw-tech-label">Techstack used</p>
                  <p className="aw-tech-list">{card.tech}</p>
                </div>
                {card.isCustomUI === 'kawaiiLinks' ? (
                  <div className="kawaii-inline-ui">
                    <span className="kw-inline-label">View some products:</span>
                    <div className="kw-inline-grid">
                      {card.sampleLinks.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noreferrer" className="kw-inline-item" title={link.name}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                          <span className="kw-item-text">{link.name}</span>
                        </a>
                      ))}
                    </div>
                    <a href={card.live} target="_blank" rel="noreferrer" className="kw-inline-footer">
                      View website to see all products ↗
                    </a>
                  </div>
                ) : (
                  <div 
                    className="aw-image-wrapper" 
                    style={{ cursor: card.isCompare ? 'pointer' : 'default' }}
                    onClick={(e) => {
                      if (card.isCompare) {
                        e.stopPropagation();
                        setSelectedCompare(card);
                      }
                    }}
                  >
                    {card.isCompare ? (
                      <div className="compare-overlay-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                        Tap to Compare
                      </div>
                    ) : (
                      <a href={card.live || "#"} target="_blank" rel="noreferrer" className="aw-live-btn" aria-label="Live Preview" tabIndex={isActive ? 0 : -1}>
                        Preview
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
                      </a>
                    )}
                    <div className="aw-image" style={{ background: `url('${card.afterImg || card.img}') center top / cover no-repeat` }}></div>
                  </div>
                )}
                <div className="aw-card-glow"></div>
              </div>
            );
          })}
        </div>
        
        {/* Modern Slider Controls */}
        <div className="aw-slider-controls">
          <button className="aw-slider-btn prev" onClick={handlePrev} aria-label="Previous Project">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="aw-slider-dots">
            {cards.map((_, index) => (
              <button 
                key={index} 
                className={`aw-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
          
          <button className="aw-slider-btn next" onClick={handleNext} aria-label="Next Project">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
      
      {selectedCompare && (
        <div className="compare-modal-overlay" onClick={() => setSelectedCompare(null)}>
          <button className="compare-modal-close" onClick={() => setSelectedCompare(null)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div className="compare-modal-content" onClick={e => e.stopPropagation()}>
            <BeforeAfterSlider beforeImage={selectedCompare.beforeImg} afterImage={selectedCompare.afterImg} />
            <a href={selectedCompare.live} target="_blank" rel="noreferrer" className="modal-live-link">
              View Full Product on Website
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
