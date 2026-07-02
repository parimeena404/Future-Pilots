// ============================================
// SIDEBAR NAVIGATION
// Vertical left rail, collapsed by default,
// spring-eased expand, scroll-spy active state.
// ============================================

import gsap from 'gsap';

export class Sidebar {
  constructor() {
    this.sidebar = document.getElementById('sidebar');
    this.toggle = document.getElementById('sidebar-toggle');
    this.links = document.querySelectorAll('.sidebar__link');
    this.sections = [];
    this.isExpanded = false;
    this.isMobile = window.innerWidth <= 768;

    this.init();
  }

  init() {
    // Create mobile toggle
    this.createMobileToggle();

    // Toggle expand/collapse
    this.toggle.addEventListener('click', () => this.toggleSidebar());

    // Nav link clicks — smooth scroll
    this.links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          // Use lenis if available, otherwise native
          if (window.__lenis) {
            window.__lenis.scrollTo(target, { offset: -20 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
          // Close sidebar on mobile after click
          if (this.isMobile) this.collapseSidebar();
        }
      });
    });

    // Scroll spy -> URL Path matching
    this.setupActiveState();

    // Resize handler
    window.addEventListener('resize', () => {
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth <= 768;
      if (wasMobile !== this.isMobile) {
        if (!this.isMobile) {
          this.sidebar.style.transform = '';
          this.collapseSidebar();
        }
      }
    }, { passive: true });

    // Close on overlay click (mobile)
    document.addEventListener('click', (e) => {
      if (this.isMobile && this.isExpanded) {
        if (!this.sidebar.contains(e.target) && !this.mobileBtn?.contains(e.target)) {
          this.collapseSidebar();
        }
      }
    });

    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isExpanded) {
        this.collapseSidebar();
        this.toggle.focus();
      }
    });
  }

  createMobileToggle() {
    this.mobileBtn = document.createElement('button');
    this.mobileBtn.className = 'mobile-toggle';
    this.mobileBtn.setAttribute('aria-label', 'Open navigation');
    this.mobileBtn.innerHTML = '<span></span><span></span><span></span>';
    document.body.appendChild(this.mobileBtn);

    this.mobileBtn.addEventListener('click', () => this.toggleSidebar());
  }

  toggleSidebar() {
    if (this.isExpanded) {
      this.collapseSidebar();
    } else {
      this.expandSidebar();
    }
  }

  expandSidebar() {
    this.isExpanded = true;
    this.sidebar.classList.add('is-expanded');
    this.toggle.setAttribute('aria-expanded', 'true');
    
    if (!this.isMobile) {
      document.querySelector('.main-content').style.marginLeft = 'var(--sidebar-expanded)';
    }
  }

  collapseSidebar() {
    this.isExpanded = false;
    this.sidebar.classList.remove('is-expanded');
    this.toggle.setAttribute('aria-expanded', 'false');
    
    if (!this.isMobile) {
      document.querySelector('.main-content').style.marginLeft = 'var(--sidebar-collapsed)';
    }
  }

  setupActiveState() {
    this.updateActiveLink();

    // The Router will trigger this event after swapping content
    window.addEventListener('popstate', () => this.updateActiveLink());
    
    // We can also poll or listen to clicks if needed, but Router handles URL updates
  }

  updateActiveLink() {
    const currentPath = window.location.pathname;
    
    this.links.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      const isActive = currentPath === linkPath || (currentPath === '/' && linkPath === '/index.html');
      link.classList.toggle('active', isActive);
    });
  }
}
