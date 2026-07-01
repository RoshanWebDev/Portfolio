import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <div className="section-header reveal-up text-center">
          <h2 className="section-title"><span className="text-gradient">Expertise</span></h2>
        </div>

        <div className="skills-bento reveal-up delay-1">
          {/* Card 1: Frontend (Top Left & Center - Wide) */}
          <div className="bento-card bento-wide glass-card">
            <div className="bento-header">
              <h3 className="text-gradient">Frontend Development</h3>
              <p>Building modern, responsive and interactive user interfaces.</p>
            </div>
            <div className="premium-tech-grid">
              <div className="tech-pill">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="tech-pill-icon" />
                <span>HTML5</span>
              </div>
              <div className="tech-pill">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" className="tech-pill-icon" />
                <span>CSS3</span>
              </div>
              <div className="tech-pill">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-pill-icon" />
                <span>JavaScript</span>
              </div>
              <div className="tech-pill">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="tech-pill-icon" />
                <span>React</span>
              </div>
              <div className="tech-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-pill-icon" style={{ stroke: '#61DAFB' }}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                <span>Responsive Design</span>
              </div>
            </div>
          </div>

          {/* Card 2: Tools (Right Side - Tall) */}
          <div className="bento-card bento-tall glass-card">
            <div className="bento-header">
              <h3 className="text-gradient">Development Tools</h3>
              <p>Tools that power my workflow.</p>
            </div>
            
            {/* Decorative Terminal */}
            <div className="bento-terminal" style={{ marginTop: 0, marginBottom: '1rem', borderRadius: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <div className="term-dots" style={{ marginBottom: 'auto' }}>
                <span style={{ background: '#ff5f56', width: '12px', height: '12px' }}></span>
                <span style={{ background: '#ffbd2e', width: '12px', height: '12px' }}></span>
                <span style={{ background: '#27c93f', width: '12px', height: '12px' }}></span>
              </div>
              <div className="term-text" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.75rem', marginTop: '1rem' }}>
                <p className="term-success" style={{ fontSize: '0.9em', color: '#4ade80' }}>✔ git commit -m "Optimize"</p>
                <p className="term-success" style={{ fontSize: '0.9em', color: '#4ade80' }}>✔ npm run build --prod</p>
                <p className="term-success" style={{ fontSize: '0.9em', color: '#4ade80' }}>✔ API Endpoints Tested</p>
                <p className="term-success" style={{ fontSize: '0.9em', color: '#4ade80' }}>✔ UI Components Synced</p>
                <p style={{ color: '#60a5fa' }}><span className="term-prompt">~</span> _</p>
              </div>
            </div>

            {/* Dashboard System Status */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', padding: '0.5rem 0.85rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '0.7rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Workflow Status</span>
              <span style={{ fontSize: '0.7rem', color: '#fff', fontWeight: 600, letterSpacing: '0.5px' }}>100% OPTIMAL</span>
            </div>

            <div className="premium-tech-grid">
              <div className="tech-pill">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" className="tech-pill-icon" />
                <span>VS Code</span>
              </div>
              <div className="tech-pill">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="tech-pill-icon" />
                <span>Git</span>
              </div>
              <div className="tech-pill">
                <img src="https://cdn.simpleicons.org/github/ffffff" alt="GitHub" className="tech-pill-icon" />
                <span>GitHub</span>
              </div>
              <div className="tech-pill">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" className="tech-pill-icon" />
                <span>Canva</span>
              </div>
              <div className="tech-pill">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" className="tech-pill-icon" />
                <span>Postman</span>
              </div>
              <div className="tech-pill">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt="Supabase" className="tech-pill-icon" />
                <span>Supabase</span>
              </div>
            </div>
          </div>

          {/* Card 3: Shopify (Bottom Left - Square) */}
          <div className="bento-card bento-square glass-card">
            <div className="bento-header">
              <h3 className="text-gradient">Shopify</h3>
              <p>Custom eCommerce experiences.</p>
            </div>
            
            {/* Creative eCommerce Metric */}
            <div style={{ marginTop: '0.5rem', marginBottom: '1.5rem', padding: '1rem', background: 'rgba(149, 191, 71, 0.05)', border: '1px solid rgba(149, 191, 71, 0.15)', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(149, 191, 71, 0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(149, 191, 71, 0.2)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#95BF47" strokeWidth="2" style={{ width: '20px', height: '20px', strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <div>
                <div style={{ fontSize: '0.75午m', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>E-Commerce</div>
                <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>Conversion Focused</div>
              </div>
            </div>

            <div className="premium-tech-grid">
              <div className="tech-pill">
                <img src="https://cdn.simpleicons.org/shopify/95BF47" alt="Shopify" className="tech-pill-icon" />
                <span>Shopify</span>
              </div>
              <div className="tech-pill">
                <img src="https://cdn.simpleicons.org/shopify/95BF47" alt="Shopify Liquid" className="tech-pill-icon" />
                <span>Liquid</span>
              </div>
              <div className="tech-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-pill-icon" style={{ stroke: '#95BF47' }}><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.35 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4 0-1.67-1.33-3.04-3-3.04z"/></svg>
                <span>Theme Dev</span>
              </div>
              <div className="tech-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-pill-icon" style={{ stroke: '#95BF47' }}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                <span>Custom Sections</span>
              </div>
            </div>
          </div>

          {/* Card 4: WordPress (Bottom Center - Square) */}
          <div className="bento-card bento-square glass-card">
            <div className="bento-header">
              <h3 className="text-gradient">WordPress</h3>
              <p>Modern business websites.</p>
            </div>
            
            {/* Creative WordPress Metric */}
            <div style={{ marginTop: '0.5rem', marginBottom: '1.5rem', padding: '1rem', background: 'rgba(33, 117, 155, 0.05)', border: '1px solid rgba(33, 117, 155, 0.15)', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(33, 117, 155, 0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(33, 117, 155, 0.2)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#21759B" strokeWidth="2" style={{ width: '20px', height: '20px', strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>SEO & Speed</div>
                <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>Performance Optimized</div>
              </div>
            </div>

            <div className="premium-tech-grid">
              <div className="tech-pill">
                <img src="https://cdn.simpleicons.org/wordpress/21759B" alt="WordPress" className="tech-pill-icon" />
                <span>WordPress</span>
              </div>
              <div className="tech-pill">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg" alt="WooCommerce" className="tech-pill-icon" />
                <span>WooCommerce</span>
              </div>
              <div className="tech-pill">
                <img src="https://cdn.simpleicons.org/elementor/92003B" alt="Elementor" className="tech-pill-icon" />
                <span>Elementor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
