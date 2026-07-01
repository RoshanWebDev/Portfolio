export function initParallax() {
  // Simple parallax for blobs
  const blobs = document.querySelectorAll('.aurora-blob');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    blobs.forEach((blob, index) => {
      const speed = 0.05 * (index + 1);
      const yPos = -(scrollY * speed);
      // We apply this on top of existing transform in CSS by using translate3d
      // Note: This might conflict with the float animation in CSS.
      // A better approach is to wrap blobs in a parallax container.
      // But for simplicity, we just adjust their top/margin.
      blob.style.transform = `translateY(${yPos}px)`;
    });
  });

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
