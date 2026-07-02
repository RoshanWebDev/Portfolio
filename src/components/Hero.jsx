import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section section">
      <div className="container hero-content">
        {/* Left Side: Text Content */}
        <div className="hero-text-side" style={{ maxWidth: '550px' }}>
          {/* Minimal Modern Pre-title */}
          <div className="hero-pre-title reveal-up" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
             <div id="role-icon-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px' }}>
               <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
             </div>
             <span className="role-switcher" style={{ fontSize: '1.05rem', fontWeight: 500, letterSpacing: '0.5px', color: '#f4f4f5' }}>Full Stack Developer</span>
          </div>
          
          <h1 className="hero-title reveal-up delay-1" style={{ fontSize: 'clamp(3rem, 4.5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 700, letterSpacing: '-1px' }}>
            Hi, I'm Roshan.<br />
            I build modern<br />
            <span className="text-gradient">digital products.</span>
          </h1>
          
          <p className="hero-subtitle reveal-up delay-2" style={{ fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '500px', marginBottom: '2.5rem', color: '#a1a1aa' }}>
            Full Stack Web Developer specializing in Shopify, WordPress, and modern web technologies. I build fast, scalable, and user-focused digital experiences.
          </p>
          
          <div className="hero-actions reveal-up delay-3" style={{ display: 'flex', gap: '1rem' }}>
            {/* Fully rounded buttons */}
            <a href="#projects" className="btn btn-primary magnetic-btn" style={{ padding: '14px 32px', fontSize: '1rem', borderRadius: '100px', fontWeight: 600, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
              View my works
            </a>
            <a href="/Resume.pdf" className="btn btn-secondary magnetic-btn" download style={{ padding: '14px 32px', fontSize: '1rem', borderRadius: '100px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '18px', height: '18px', marginRight: '8px' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Resume
            </a>
          </div>
        </div>

        {/* Right Side: Stats / Visuals */}
        <div className="hero-visual-side reveal-up delay-4">
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <div className="hero-image-inner glass-card" style={{ padding: '10px' }}>
              {/* Using the user's avatar */}
              <img src="/Profile.png" alt="Roshan Asraf" className="hero-profile-img" style={{ objectPosition: 'center 20%' }} />
            </div>
            
            {/* Shopify Specialist Badge */}
            <div className="floating-badge top-badge float-anim" style={{ top: '20px', left: '-30px', padding: '10px 14px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(20, 20, 25, 0.7)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
              <img src="https://cdn.simpleicons.org/shopify/95BF47" width="18" height="18" alt="Shopify Logo" />
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#fff', letterSpacing: '0.5px', lineHeight: 1 }}>Shopify</span>
            </div>
            
            {/* WordPress Developer Badge */}
            <div className="floating-badge float-anim-delayed" style={{ top: '50%', right: '-40px', position: 'absolute', transform: 'translateY(-50%)', padding: '10px 14px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(20, 20, 25, 0.7)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
              <img src="https://cdn.simpleicons.org/wordpress/21759b" width="18" height="18" alt="WordPress Logo" />
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#fff', letterSpacing: '0.5px', lineHeight: 1 }}>WordPress</span>
            </div>
            
            {/* Full Stack Developer Badge */}
            <div className="floating-badge bottom-badge float-anim" style={{ bottom: '20px', left: '-20px', right: 'auto', padding: '10px 14px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(20, 20, 25, 0.7)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
              <img src="https://cdn.simpleicons.org/react/61DAFB" width="18" height="18" alt="React Logo" />
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#fff', letterSpacing: '0.5px', lineHeight: 1 }}>Full Stack</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}
