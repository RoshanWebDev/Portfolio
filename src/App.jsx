import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import AuroraBackground from './components/AuroraBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';

// Temporarily call the original vanilla JS logic for animations and interactions
import { initAll } from './js/main.js';

export default function App() {
  useEffect(() => {
    // Small timeout ensures all components are fully mounted before querying DOM elements
    const timer = setTimeout(() => {
      initAll();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AuroraBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppIcon />
    </>
  );
}
