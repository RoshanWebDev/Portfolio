export function initAnimations() {
  const revealElements = document.querySelectorAll('.reveal-up');
  const statNumbers = document.querySelectorAll('.stat-number');

  // Intersection Observer for Reveals
  const revealOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // Intersection Observer for Counters
  const countOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, countOptions);

  statNumbers.forEach(el => {
    countObserver.observe(el);
  });
}

function startCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const suffix = el.getAttribute('data-suffix') || '';
  if (isNaN(target)) return; // Safety guard

  const duration = 1800;
  const steps = 60;
  const stepTime = duration / steps;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      clearInterval(timer);
      el.textContent = target + suffix;
    } else {
      el.textContent = Math.floor(current) + suffix;
    }
  }, stepTime);
}
