export function initParallax() {
  // Simple parallax for blobs
  const blobs = document.querySelectorAll('.aurora-blob');
  
  let isTicking = false;
  window.addEventListener('scroll', () => {
    // Disable parallax on mobile to fix shaking and lag
    if (window.innerWidth <= 768) return;

    if (!isTicking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        blobs.forEach((blob, index) => {
          const speed = 0.05 * (index + 1);
          const yPos = -(scrollY * speed);
          blob.style.transform = `translateY(${yPos}px)`;
        });
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header
          behavior: 'smooth'
        });
      }
    });
  });
}
