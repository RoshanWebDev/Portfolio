import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        {/* Section header */}
        <div className="section-header reveal-up text-center">
          <h2 className="section-title"><span className="text-gradient">About</span></h2>
        </div>

        <div className="about-new-layout">
          {/* LEFT: Circular orbit icon system */}
          <div className="about-visual reveal-up delay-1">
            <div className="orbit-system">
              {/* Decorative ring borders */}
              <div className="orbit-ring-border outer-orbit-border"></div>
              <div className="orbit-ring-border inner-orbit-border"></div>

              {/* Center orb */}
              <div className="orbit-center">
                <div className="orbit-center-glow"></div>
                <span className="orbit-center-label">&lt;/&gt;</span>
              </div>

              {/* OUTER ring group: rotates clockwise, 30s */}
              <div className="orbit-group orbit-group-outer">
                <div className="orbit-icon-pos" style={{ '--a': '0deg', '--r': '148px' }}><div className="oi-counter"><div className="oi-wrap" style={{ '--d': '0s' }}>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" /><span className="oi-tip">HTML5</span></div></div></div>
                <div className="orbit-icon-pos" style={{ '--a': '36deg', '--r': '148px' }}><div className="oi-counter"><div className="oi-wrap" style={{ '--d': '0.4s' }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" /><span className="oi-tip">CSS3</span></div></div></div>
                <div className="orbit-icon-pos" style={{ '--a': '72deg', '--r': '148px' }}><div className="oi-counter"><div className="oi-wrap" style={{ '--d': '0.8s' }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" /><span className="oi-tip">JavaScript</span></div></div></div>
                <div className="orbit-icon-pos" style={{ '--a': '108deg', '--r': '148px' }}><div className="oi-counter"><div className="oi-wrap" style={{ '--d': '1.2s' }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /><span className="oi-tip">React</span></div></div></div>
                <div className="orbit-icon-pos" style={{ '--a': '144deg', '--r': '148px' }}><div className="oi-counter"><div className="oi-wrap" style={{ '--d': '1.6s' }}><img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" /><span className="oi-tip">Shopify</span></div></div></div>
                <div className="orbit-icon-pos" style={{ '--a': '180deg', '--r': '148px' }}><div className="oi-counter"><div className="oi-wrap" style={{ '--d': '2.0s' }}><span style={{ fontWeight: 800, fontSize: '16px', color: '#95bf47', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>{'{}'}</span><span className="oi-tip">Shopify Liquid</span></div></div></div>
                <div className="orbit-icon-pos" style={{ '--a': '216deg', '--r': '148px' }}><div className="oi-counter"><div className="oi-wrap" style={{ '--d': '2.4s' }}><img src="https://cdn.simpleicons.org/wordpress/21759B" alt="WordPress" /><span className="oi-tip">WordPress</span></div></div></div>
                <div className="orbit-icon-pos" style={{ '--a': '252deg', '--r': '148px' }}><div className="oi-counter"><div className="oi-wrap" style={{ '--d': '2.8s' }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg" alt="WooCommerce" /><span className="oi-tip">WooCommerce</span></div></div></div>
                <div className="orbit-icon-pos" style={{ '--a': '288deg', '--r': '148px' }}><div className="oi-counter"><div className="oi-wrap" style={{ '--d': '3.2s' }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt="Supabase" /><span className="oi-tip">Supabase</span></div></div></div>
                <div className="orbit-icon-pos" style={{ '--a': '324deg', '--r': '148px' }}><div className="oi-counter"><div className="oi-wrap" style={{ '--d': '3.6s' }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" /><span className="oi-tip">MySQL</span></div></div></div>
              </div>

              {/* INNER ring group: rotates counter-clockwise, 20s */}
              <div className="orbit-group orbit-group-inner">
                <div className="orbit-icon-pos" style={{ '--a': '0deg', '--r': '82px' }}><div className="oi-counter-in"><div className="oi-wrap oi-inner" style={{ '--d': '0.3s' }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" /><span className="oi-tip">Git</span></div></div></div>
                <div className="orbit-icon-pos" style={{ '--a': '72deg', '--r': '82px' }}><div className="oi-counter-in"><div className="oi-wrap oi-inner" style={{ '--d': '0.8s' }}><img src="https://cdn.simpleicons.org/github/ffffff" alt="GitHub" /><span className="oi-tip">GitHub</span></div></div></div>
                <div className="orbit-icon-pos" style={{ '--a': '144deg', '--r': '82px' }}><div className="oi-counter-in"><div className="oi-wrap oi-inner" style={{ '--d': '1.4s' }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" /><span className="oi-tip">VS Code</span></div></div></div>
                <div className="orbit-icon-pos" style={{ '--a': '216deg', '--r': '82px' }}><div className="oi-counter-in"><div className="oi-wrap oi-inner" style={{ '--d': '2.0s' }}><img src="https://cdn.simpleicons.org/postman/FF6C37" alt="REST API" /><span className="oi-tip">REST API</span></div></div></div>
                <div className="orbit-icon-pos" style={{ '--a': '288deg', '--r': '82px' }}><div className="oi-counter-in"><div className="oi-wrap oi-inner" style={{ '--d': '2.6s' }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" /><span className="oi-tip">Canva</span></div></div></div>
              </div>
            </div>
          </div>

          {/* RIGHT: Heading + Bio + Stats + CTA */}
          <div className="about-content reveal-up delay-2">
            <h3 className="about-headline-new" style={{ color: '#a1a1aa', fontWeight: 400, letterSpacing: '0px' }}>Who is <span style={{ color: '#ffffff', fontWeight: 600 }}>Roshan Asraf?</span></h3>
            <p className="about-bio">I'm a Full Stack Web Developer with 1+ year of professional experience in Shopify and WordPress development. I specialize in building modern websites, custom Shopify themes, responsive user interfaces, and scalable web applications using HTML, CSS, JavaScript, React, Shopify Liquid, and AI-assisted development workflows.</p>

            <div className="about-stats-minimalist" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', marginTop: '2rem', marginBottom: '3.5rem' }}>
              
              <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px' }}>
                <span className="stat-number" data-target="1" data-suffix="+" style={{ fontSize: '3.2rem', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.02em', color: '#ffffff' }}>0+</span>
                <span className="stat-label" style={{ textTransform: 'uppercase', fontSize: '0.7rem', lineHeight: 1.5, letterSpacing: '0.15em', fontWeight: 500, color: '#a1a1aa', marginTop: '2px' }}>Years of<br />Experience</span>
              </div>
              
              <div className="stat-divider" style={{ width: '1px', height: '45px', background: 'rgba(255, 255, 255, 0.15)' }}></div>
              
              <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px' }}>
                <span className="stat-number" style={{ fontSize: '1.8rem', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.01em', color: '#ffffff' }}>E-Comm</span>
                <span className="stat-label" style={{ textTransform: 'uppercase', fontSize: '0.7rem', lineHeight: 1.5, letterSpacing: '0.15em', fontWeight: 500, color: '#a1a1aa', marginTop: '2px' }}>Shopify &bull;<br />WordPress</span>
              </div>
              
              <div className="stat-divider" style={{ width: '1px', height: '45px', background: 'rgba(255, 255, 255, 0.15)' }}></div>
              
              <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px' }}>
                <span className="stat-number" style={{ fontSize: '1.8rem', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.01em', color: '#ffffff' }}>Web Dev</span>
                <span className="stat-label" style={{ textTransform: 'uppercase', fontSize: '0.7rem', lineHeight: 1.5, letterSpacing: '0.15em', fontWeight: 500, color: '#a1a1aa', marginTop: '2px' }}>Frontend &bull;<br />Full Stack</span>
              </div>
              
            </div>

            <div className="about-actions">
              <a href="#timeline" className="btn btn-primary btn-large">
                View Journey
              </a>
              <span className="about-signature">Roshan Asraf</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
