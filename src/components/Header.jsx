import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <a href="#hero" className="logo magnetic-btn" aria-label="Home">
          Roshan
        </a>
        <ul className="nav-links">
          <li><a href="#hero" className="nav-link magnetic-btn active">Home</a></li>
          <li><a href="#about" className="nav-link magnetic-btn">About</a></li>
          <li><a href="#skills" className="nav-link magnetic-btn">Expertise</a></li>
          <li><a href="#timeline" className="nav-link magnetic-btn">Journey</a></li>
          <li><a href="#projects" className="nav-link magnetic-btn">Projects</a></li>
        </ul>
        <a href="#contact" className="header-cta magnetic-btn">Let's Talk</a>
        <div className="mobile-menu-btn">
          <span></span><span></span><span></span>
        </div>
      </nav>
    </header>
  );
}
