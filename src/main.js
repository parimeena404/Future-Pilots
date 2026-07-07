// ============================================
// MAIN ENTRY POINT — Future Pilots PREMIUM
// ============================================

import './styles/main.css';
import { renderTeam, renderTestimonials, renderFAQ, initPricingTabs } from './js/sections.js';
import { initSmoothScroll } from './js/smooth-scroll.js';
import { Sidebar } from './js/sidebar.js';
import { initAnimations } from './js/animations.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ---- Custom Cursor ----
function initCursor() {
  // Only on desktop with fine pointer (non-touch)
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = document.getElementById('fp-cursor');
  const ring = document.getElementById('fp-cursor-ring');
  if (!cursor || !ring) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    gsap.to(cursor, { x: mx, y: my, duration: 0.1, ease: 'none' });
  });

  // Ring follows with slight lag
  function lerp(a, b, t) { return a + (b - a) * t; }
  function animateRing() {
    rx = lerp(rx, mx, 0.12);
    ry = lerp(ry, my, 0.12);
    gsap.set(ring, { x: rx, y: ry });
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.body.classList.add('cursor-active');

  // Hover states
  const hoverables = document.querySelectorAll('a, button, [data-tilt], .card, .faq__question');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor--hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor--hover'));
  });
}

// ---- Scroll Progress Bar ----
function initProgressBar() {
  const bar = document.getElementById('fp-progress');
  if (!bar) return;

  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      bar.style.width = (self.progress * 100) + '%';
    }
  });
}

// ---- Header Scroll Behavior ----
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  ScrollTrigger.create({
    trigger: document.body,
    start: '80px top',
    onEnter: () => header.classList.add('is-scrolled'),
    onLeaveBack: () => header.classList.remove('is-scrolled'),
  });
}

// ---- Testimonials Auto Carousel ----
function initTestimonialsCarousel() {
  const track = document.querySelector('.testimonials__track');
  const dots = document.querySelectorAll('.testimonials__dot');
  if (!track || !dots.length) return;

  const cards = track.querySelectorAll('.testimonials__card');
  if (cards.length < 2) return;

  let current = 0;
  const total = Math.ceil(cards.length / 2);

  function goTo(idx) {
    current = idx;
    const cardWidth = cards[0].offsetWidth + 24; // gap = 24px
    gsap.to(track, { x: -(current * cardWidth * 2), duration: 0.6, ease: 'power3.out' });
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  let interval = setInterval(() => {
    goTo((current + 1) % total);
  }, 4500);

  track.addEventListener('mouseenter', () => clearInterval(interval));
  track.addEventListener('mouseleave', () => {
    interval = setInterval(() => goTo((current + 1) % total), 4500);
  });

  goTo(0);
}

// ---- Pricing Tabs (extended for pricing.html panels) ----
function initPricingPanels() {
  const tabs = document.querySelectorAll('.pricing__tab[data-tab]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.toggle('active', t === tab));

      const eduPanel = document.getElementById('panel-education');
      const digiPanel = document.getElementById('panel-digital');
      const panels = document.querySelectorAll('.pricing__panel');

      if (eduPanel && digiPanel) {
        eduPanel.style.display = target === 'education' ? '' : 'none';
        digiPanel.style.display = target === 'digital'  ? '' : 'none';
      } else if (panels.length) {
        panels.forEach(p => p.classList.toggle('active', p.dataset.panel === target));
      }

      // Refresh ScrollTrigger to ensure triggers align with newly visible/hidden content
      ScrollTrigger.refresh();
    });
  });
}

// ---- Mobile Nav ----
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

// ---- Contact Form ----
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = 'Enquiry Sent ✓';
      btn.style.background = 'var(--brand-teal)';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    }
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();

  if (document.getElementById('sidebar')) new Sidebar();

  renderTeam();
  renderTestimonials();
  renderFAQ();
  initPricingTabs();
  initPricingPanels();
  initMobileNav();
  initContactForm();

  setTimeout(() => {
    initCursor();
    initProgressBar();
    initHeader();
    initAnimations();
    initTestimonialsCarousel();
    ScrollTrigger.refresh();
  }, 100);
});

