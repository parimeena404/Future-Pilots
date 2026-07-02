// ============================================
// SMOOTH SCROLL — Lenis + GSAP Sync
// Single RAF loop, scroll-triggered animations
// ============================================

import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initSmoothScroll() {
  // Check reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Still register ScrollTrigger but skip Lenis
    return null;
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    syncTouch: true,
    touchMultiplier: 2,
  });

  // Sync Lenis with GSAP ticker — single RAF loop
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Expose globally for sidebar nav
  window.__lenis = lenis;

  return lenis;
}
