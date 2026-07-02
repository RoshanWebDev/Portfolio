import React, { useState } from 'react';

export default function Experience() {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (id) => {
    setExpandedItem(prev => prev === id ? null : id);
  };

  return (
    <section id="timeline" className="awwwards-resume-section section">
      <div className="container">
        
        <div className="section-header reveal-up text-center">
          <h2 className="section-title"><span className="text-gradient">Journey</span></h2>
        </div>

        <div className="resume-grid reveal-up delay-1">
          
          {/* Education Card */}
          <div className="resume-card">
            <div className="resume-card-glow"></div>
            <div className="resume-card-header">
              <div className="resume-icon-wrapper">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>
              <h3 className="resume-card-title">Education</h3>
            </div>
            
            <div className="resume-list">
              {/* Item 1 */}
              <div 
                className={`resume-item ${expandedItem === 'edu1' ? 'is-expanded' : ''}`}
                onClick={() => toggleItem('edu1')}
                style={{ cursor: 'pointer' }}
              >
                <div className="resume-item-top">
                  <div className="resume-item-left">
                    <h4>B.Sc. Information Technology</h4>
                    <p>RD National College of Arts and Science, Erode</p>
                  </div>
                  <div className="resume-item-right">
                    <span className="resume-date-pill">2022 - 2025</span>
                  </div>
                </div>
                <div className="resume-desc"><div className="resume-desc-inner"><p>Graduated with a CGPA of 8.5. Specialized in modern web technologies, software engineering, and database management systems.</p></div></div>
              </div>

              {/* Item 2 */}
              <div 
                className={`resume-item ${expandedItem === 'edu2' ? 'is-expanded' : ''}`}
                onClick={() => toggleItem('edu2')}
                style={{ cursor: 'pointer' }}
              >
                <div className="resume-item-top">
                  <div className="resume-item-left">
                    <h4>Higher Secondary Certificate</h4>
                    <p>Government Higher Secondary School, Erode</p>
                  </div>
                  <div className="resume-item-right">
                    <span className="resume-date-pill">2020 - 2022</span>
                  </div>
                </div>
                <div className="resume-desc"><div className="resume-desc-inner"><p>Graduated with an outstanding 93%. Built a strong foundation in logic, mathematics, and computer sciences.</p></div></div>
              </div>
            </div>
          </div>

          {/* Work Experience Card */}
          <div className="resume-card">
            <div className="resume-card-glow"></div>
            <div className="resume-card-header">
              <div className="resume-icon-wrapper">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path></svg>
              </div>
              <h3 className="resume-card-title">Work Experience</h3>
            </div>
            
            <div className="resume-list">
              {/* Item 1 */}
              <div 
                className={`resume-item ${expandedItem === 'work1' ? 'is-expanded' : ''}`}
                onClick={() => toggleItem('work1')}
                style={{ cursor: 'pointer' }}
              >
                <div className="resume-item-top">
                  <div className="resume-item-left">
                    <h4>Full Stack & E-Commerce Developer</h4>
                    <p>Papero Private Limited, Chennai</p>
                  </div>
                  <div className="resume-item-right">
                    <span className="resume-date-pill">Aug 2025 - Present</span>
                  </div>
                </div>
                <div className="resume-desc"><div className="resume-desc-inner"><p>Expertise in Shopify theme development using Liquid, alongside custom WordPress development. Built full-stack solutions and responsive front-end interfaces using custom code.</p></div></div>
              </div>

              {/* Item 2 */}
              <div 
                className={`resume-item ${expandedItem === 'work2' ? 'is-expanded' : ''}`}
                onClick={() => toggleItem('work2')}
                style={{ cursor: 'pointer' }}
              >
                <div className="resume-item-top">
                  <div className="resume-item-left">
                    <h4>Frontend Developer Intern</h4>
                    <p>Skynet Bee, Erode</p>
                  </div>
                  <div className="resume-item-right">
                    <span className="resume-date-pill">July 2024 - Dec 2024</span>
                  </div>
                </div>
                <div className="resume-desc"><div className="resume-desc-inner"><p>Contributed to a college startup by developing responsive web interfaces. Built interactive UI components and small projects using HTML, CSS, and React JS.</p></div></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
