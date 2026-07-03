export function initCursor() {
  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');
  const magneticEls = document.querySelectorAll('.magnetic-btn');
  
  // Check if touch device
  if (window.matchMedia("(pointer: coarse)").matches) {
    if(cursorDot) cursorDot.style.display = 'none';
    if(cursorOutline) cursorOutline.style.display = 'none';
    return;
  }

  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    if(cursorDot) {
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
    }

    if(cursorOutline) {
      // Small delay for the outline using animate (requires WAAPI)
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" });
    }
  });

  // Hover states for magnetic buttons
  magneticEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
      // Reset magnetic transform
      el.style.transform = `translate(0px, 0px)`;
    });

    el.addEventListener('mousemove', (e) => {
      const position = el.getBoundingClientRect();
      const x = e.clientX - position.left - position.width / 2;
      const y = e.clientY - position.top - position.height / 2;
      
      // Magnetic pull
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
  });
}
