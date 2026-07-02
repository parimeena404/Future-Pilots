// ============================================
// ANIMATIONS — GSAP ScrollTrigger driven
// Scroll-scrubbed timeline, stat counters,
// 3D tilt cards, hero reveal, section reveals.
// ============================================

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initAnimations() {
  if (isReduced) {
    showAllContent();
    return;
  }

  initHeroReveal();
  initStatCounters();
  initStatRings();
  initTimelineScrub();
  initTiltCards();
  initSectionReveals();
  initPaperPlane();
}

// ---- Show all content immediately for reduced motion ----
function showAllContent() {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  document.querySelectorAll('.how__step').forEach(el => el.classList.add('is-active'));
  
  // Set stat values directly
  document.querySelectorAll('[data-counter]').forEach(el => {
    const parent = el.closest('[data-count]');
    if (parent) {
      const suffix = parent.dataset.suffix || '';
      el.textContent = parent.dataset.count + suffix;
    }
  });
  
  document.querySelectorAll('[data-ring-value]').forEach(el => {
    const parent = el.closest('[data-value]');
    if (parent) el.textContent = parent.dataset.value;
  });

  document.querySelectorAll('[data-ring]').forEach(ring => {
    const parent = ring.closest('[data-value]');
    if (parent) {
      const pct = parseInt(parent.dataset.value) / 100;
      ring.style.strokeDashoffset = 326.73 * (1 - pct);
    }
  });
}

// ---- Hero Reveal ----
function initHeroReveal() {
  const tl = gsap.timeline({ delay: 0.3 });

  tl.from('.hero__tagline', {
    y: 20, opacity: 0, duration: 0.6, ease: 'power3.out'
  })
  .from('.hero__headline-line', {
    y: 60, opacity: 0, duration: 0.8, ease: 'power3.out',
    stagger: 0.12
  }, '-=0.3')
  .from('.hero__sub', {
    y: 20, opacity: 0, duration: 0.6, ease: 'power3.out'
  }, '-=0.4')
  .from('.hero__ctas', {
    y: 20, opacity: 0, duration: 0.5, ease: 'power3.out'
  }, '-=0.3')
  .from('.hero__visual', {
    scale: 0.8, opacity: 0, duration: 1, ease: 'power3.out'
  }, '-=0.6')
  .from('.hero__scroll-hint', {
    opacity: 0, duration: 0.5
  }, '-=0.3');
}

// ---- Trust Bar Stat Counters — scroll-scrubbed ----
function initStatCounters() {
  const stats = document.querySelectorAll('[data-counter]');
  
  stats.forEach(el => {
    const parent = el.closest('[data-count]');
    if (!parent) return;

    const target = parseInt(parent.dataset.count);
    const suffix = parent.dataset.suffix || '';
    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: parent,
      start: 'top 85%',
      end: 'top 30%',
      scrub: 1.5,
      onUpdate: (self) => {
        const current = Math.round(target * self.progress);
        el.textContent = current + suffix;
      }
    });
  });
}

// ---- How We Teach — Stat Rings (scroll-scrubbed) ----
function initStatRings() {
  const rings = document.querySelectorAll('.how__stat-ring');
  const circumference = 2 * Math.PI * 52; // r=52

  rings.forEach(container => {
    const value = parseInt(container.dataset.value);
    const ring = container.querySelector('[data-ring]');
    const valueEl = container.querySelector('[data-ring-value]');
    if (!ring || !valueEl) return;

    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference;

    ScrollTrigger.create({
      trigger: container,
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1,
      onUpdate: (self) => {
        const pct = self.progress;
        const currentVal = Math.round(value * pct);
        valueEl.textContent = currentVal;
        ring.style.strokeDashoffset = circumference * (1 - (value / 100) * pct);
      }
    });
  });
}

// ---- How We Teach — Timeline Scrub ----
function initTimelineScrub() {
  const section = document.getElementById('how-we-teach');
  const progress = document.getElementById('timeline-progress');
  const steps = document.querySelectorAll('.how__step');
  if (!section || !progress || !steps.length) return;

  ScrollTrigger.create({
    trigger: '.how__timeline',
    start: 'top 70%',
    end: 'bottom 30%',
    scrub: 1,
    onUpdate: (self) => {
      // Update progress bar height
      progress.style.height = (self.progress * 100) + '%';

      // Activate steps based on progress
      const stepProgress = self.progress * steps.length;
      steps.forEach((step, i) => {
        step.classList.toggle('is-active', i < stepProgress);
      });
    }
  });
}

// ---- 3D Tilt Cards ----
function initTiltCards() {
  const cards = document.querySelectorAll('[data-tilt]');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotateY: x * 8,  // max 8 degrees
        rotateX: -y * 8,
        transformPerspective: 800,
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)'
      });
    });
  });
}

// ---- Section Reveals (reserved for key moments only) ----
function initSectionReveals() {
  // Only animate section labels and titles — not every element
  const reveals = document.querySelectorAll('.section__label, .section__title, .section__sub');
  
  reveals.forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  });

  // Pricing cards — one of the 2-3 reserved entrance animations
  const pricingCards = document.querySelectorAll('.pricing__card');
  if (pricingCards.length) {
    gsap.from(pricingCards, {
      scrollTrigger: {
        trigger: '.section--pricing',
        start: 'top 60%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out'
    });
  }

  // About cards
  const aboutCards = document.querySelectorAll('.about__story');
  if (aboutCards.length) {
    gsap.from(aboutCards, {
      scrollTrigger: {
        trigger: '.section--about',
        start: 'top 70%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }

  // Vertical cards
  const verticalCards = document.querySelectorAll('.vertical-card');
  if (verticalCards.length) {
    gsap.from(verticalCards, {
      scrollTrigger: {
        trigger: '.section--verticals',
        start: 'top 70%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }
}

// ---- Paper Plane — cursor-following + scroll position ----
function initPaperPlane() {
  const plane = document.getElementById('hero-plane');
  if (!plane) return;

  // Cursor-following gaze (subtle tilt toward cursor)
  const heroSection = document.querySelector('.section--hero');
  if (!heroSection) return;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(plane, {
      rotateY: x * 12,
      rotateX: -y * 8,
      x: x * 20,
      y: y * 15,
      transformPerspective: 600,
      duration: 0.8,
      ease: 'power2.out'
    });
  });

  heroSection.addEventListener('mouseleave', () => {
    gsap.to(plane, {
      rotateY: 0,
      rotateX: 0,
      x: 0,
      y: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.5)'
    });
  });

  // Scroll-linked fade + scale as user scrolls past hero
  ScrollTrigger.create({
    trigger: heroSection,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      const p = self.progress;
      gsap.set(plane, {
        opacity: 1 - p * 1.5,
        scale: 1 - p * 0.3
      });
    }
  });
}
