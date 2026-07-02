// ============================================
// MAIN ENTRY POINT — Future Pilots (EdTech Standard)
// ============================================

import './styles/main.css';
import { renderTeam, renderTestimonials, renderFAQ, initPricingTabs } from './js/sections.js';
import { initSmoothScroll } from './js/smooth-scroll.js';
import { Sidebar } from './js/sidebar.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
  const staggerGroups = document.querySelectorAll('.js-stagger');
  
  staggerGroups.forEach(group => {
    // If it's a grid or flex container, animate its children
    const children = group.children;
    if (children.length > 1) {
      gsap.from(children, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out', // Silky smooth
        scrollTrigger: {
          trigger: group,
          start: 'top 85%',
        }
      });
    } else {
      // Animate the element itself
      gsap.from(group, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 85%',
        }
      });
    }
  });

  // Floating shapes parallax
  const shapes = document.querySelectorAll('.shape');
  shapes.forEach(shape => {
    gsap.to(shape, {
      y: -50,
      rotation: Math.random() * 45,
      ease: 'none',
      scrollTrigger: {
        trigger: shape.closest('.section'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  });
}

function initMobileNav() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const nav = document.getElementById('top-nav-links');
  
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('is-open');
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = 'Enquiry Sent ✓';
      btn.style.background = 'var(--accent-success)';
      btn.style.color = '#fff';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();

  if (document.getElementById('sidebar')) {
    new Sidebar();
  }

  renderTeam();
  renderTestimonials();
  renderFAQ();
  initPricingTabs();
  initMobileNav();
  initContactForm();
  
  // Wait a tiny bit for render to finish before attaching GSAP
  setTimeout(() => {
    initAnimations();
  }, 50);
});
