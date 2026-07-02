import { initCursor } from './cursor.js';
import { initAnimations } from './animations.js';
import { initParallax } from './parallax.js';

let orbitsRafId = null;
let roleSwitcherInterval = null;
let projectSliderInterval = null;

const preloadIcons = () => {
  ['https://cdn.simpleicons.org/shopify/95BF47', 'https://cdn.simpleicons.org/wordpress/21759b', 'https://cdn.simpleicons.org/react/61DAFB'].forEach(src => {
    const img = new Image();
    img.src = src;
  });
};
preloadIcons();

export function initAll() {
  initCursor();
  initAnimations();
  initParallax();
  initRoleSwitcher();
  initHeader();
  initSkillsTabs();
  initOrbits();
  initScrollTop();
  initProjectSlider();
  initScrollSpy();
  initContactForm();
  initMobileMenu();
  initScrollIndicator();
}
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  if (!mobileMenuBtn || !navLinks) return;

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

function initScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (!scrollIndicator) return;

  scrollIndicator.style.cursor = 'pointer';
  scrollIndicator.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
      window.scrollTo({
        top: aboutSection.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  });
}

function initRoleSwitcher() {
  const roles = [
    { text: `<span style="font-weight: 700; color: #fff;">Full Stack</span> <span style="font-weight: 400; color: #a1a1aa;">Developer</span>`, icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>` },
    { text: `<span style="font-weight: 700; color: #fff;">Shopify</span> <span style="font-weight: 400; color: #a1a1aa;">Developer</span>`, icon: `<img src="https://cdn.simpleicons.org/shopify/95BF47" style="width: 100%; height: 100%; object-fit: contain;">` },
    { text: `<span style="font-weight: 700; color: #fff;">WordPress</span> <span style="font-weight: 400; color: #a1a1aa;">Developer</span>`, icon: `<img src="https://cdn.simpleicons.org/wordpress/21759b" style="width: 100%; height: 100%; object-fit: contain;">` },
    { text: `<span style="font-weight: 700; color: #fff;">Frontend</span> <span style="font-weight: 400; color: #a1a1aa;">Developer</span>`, icon: `<img src="https://cdn.simpleicons.org/react/61DAFB" style="width: 100%; height: 100%; object-fit: contain;">` },
    { text: `<span style="font-weight: 700; color: #fff;">AI-Assisted</span> <span style="font-weight: 400; color: #a1a1aa;">Developer</span>`, icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#10a37f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>` }
  ];
  
  const roleElement = document.querySelector('.role-switcher');
  const iconElement = document.querySelector('#role-icon-container');
  let currentIndex = 0;

  if (!roleElement || !iconElement) return;

  roleElement.style.transition = 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out';
  iconElement.style.transition = 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out';

  if (roleSwitcherInterval) clearInterval(roleSwitcherInterval);

  roleSwitcherInterval = setInterval(() => {
    roleElement.style.opacity = 0;
    roleElement.style.transform = 'translateY(4px)';
    iconElement.style.opacity = 0;
    iconElement.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % roles.length;
      roleElement.innerHTML = roles[currentIndex].text;
      iconElement.innerHTML = roles[currentIndex].icon;
      
      roleElement.style.opacity = 1;
      roleElement.style.transform = 'translateY(0)';
      iconElement.style.opacity = 1;
      iconElement.style.transform = 'scale(1)';
    }, 400);
  }, 3500);
}

function initHeader() {
  const header = document.querySelector('.site-header');

  if (!header) return;

  let isTicking = false;
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
}

function initSkillsTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (tabBtns.length === 0) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active classes
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Show corresponding pane
      const targetId = btn.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });
}

function initOrbits() {
  const outerIcons = document.querySelectorAll('.orbit-group-outer .orbit-icon-pos');
  const innerIcons = document.querySelectorAll('.orbit-group-inner .orbit-icon-pos');

  if (!outerIcons.length) return;

  const OUTER_R  = 148;   // px
  const INNER_R  = 82;    // px
  const OUTER_MS = 32000; // ms per revolution (CW)
  const INNER_MS = 20000; // ms per revolution (CCW)

  // Read initial angle from --a CSS variable, e.g. "36deg" → radians
  function readAngle(el) {
    const raw = getComputedStyle(el).getPropertyValue('--a').trim();
    return parseFloat(raw) * (Math.PI / 180);
  }

  const outerAngles = Array.from(outerIcons).map(readAngle);
  const innerAngles = Array.from(innerIcons).map(readAngle);

  let start = null;

  if (orbitsRafId) cancelAnimationFrame(orbitsRafId);

  function frame(ts) {
    if (!start) start = ts;
    const elapsed = ts - start;

    // Outer ring — clockwise
    const outerOffset = (elapsed / OUTER_MS) * 2 * Math.PI;
    outerIcons.forEach((el, i) => {
      const angle = outerAngles[i] + outerOffset;
      const x = Math.sin(angle) * OUTER_R;
      const y = -Math.cos(angle) * OUTER_R;
      el.style.transform = `translate(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${y.toFixed(2)}px))`;
    });

    // Inner ring — counter-clockwise
    const innerOffset = (elapsed / INNER_MS) * 2 * Math.PI;
    innerIcons.forEach((el, i) => {
      const angle = innerAngles[i] - innerOffset;
      const x = Math.sin(angle) * INNER_R;
      const y = -Math.cos(angle) * INNER_R;
      el.style.transform = `translate(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${y.toFixed(2)}px))`;
    });

    orbitsRafId = requestAnimationFrame(frame);
  }

  orbitsRafId = requestAnimationFrame(frame);
}

function initScrollTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (!scrollTopBtn) return;

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function initProjectSlider() {
  const slider = document.querySelector('.projects-horizontal-scroll');
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  const startAutoScroll = () => {
    if (projectSliderInterval) clearInterval(projectSliderInterval);
    projectSliderInterval = setInterval(() => {
      if(!isDown) slider.scrollLeft += 1;
    }, 40);
  };

  const stopAutoScroll = () => {
    if (projectSliderInterval) clearInterval(projectSliderInterval);
  };

  startAutoScroll();

  slider.addEventListener('mouseenter', stopAutoScroll);
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
    startAutoScroll();
  });

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - walk;
  });
}

function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const text = `Hi, I am ${name}. I contacted you from your portfolio with the provided details:\n\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    
    const whatsappUrl = `https://wa.me/919345718201?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  });
}

