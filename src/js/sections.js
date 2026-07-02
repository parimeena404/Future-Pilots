// ============================================
// DATA-DRIVEN SECTIONS
// Team, Testimonials, FAQ — rendered from data
// ============================================

// ---- Team Data (CMS-editable) ----
const teamData = [
  {
    name: 'Anurag Tiwari',
    role: 'CEO / Founder',
    initials: 'AT',
    bio: 'Visionary leader driving experiential learning and digital innovation across India.',
  },
  {
    name: 'Pari Meena',
    role: 'Co-Founder / Manager',
    initials: 'PM',
    bio: 'Strategic operations and partnership management for education and digital verticals.',
  },
  {
    name: 'Kavyansh Saxena',
    role: 'Chief Marketing Officer',
    initials: 'KS',
    bio: 'Brand strategy and market positioning for premium education and digital services.',
  },
  {
    name: 'Chitransh Sahu',
    role: 'Chief Technical Officer',
    initials: 'CS',
    bio: 'Technical architecture and innovation leadership across all product verticals.',
  },
];

// ---- Testimonials Data ----
const testimonialsData = [
  {
    quote: 'Future Pilots transformed how our students think about technology. The hands-on approach was unlike anything we\'d seen from other workshop providers.',
    author: 'School Principal',
    role: 'CBSE School, Madhya Pradesh',
  },
  {
    quote: 'The AI/ML workshop gave our students real confidence to build projects. The 2:1 practical-to-theory ratio made all the difference.',
    author: 'Science Department Head',
    role: 'ICSE School, Rajasthan',
  },
  {
    quote: 'Our website traffic increased 340% within three months of working with Future Pilots Digital. Their SEO expertise is genuinely impressive.',
    author: 'Business Owner',
    role: 'Healthcare Startup, Indore',
  },
  {
    quote: 'The robotics workshop was the highlight of our innovation week. Students were building functional IoT devices by day three.',
    author: 'Academic Coordinator',
    role: 'State Board School, Gujarat',
  },
  {
    quote: 'Professional, punctual, and deeply knowledgeable. Future Pilots delivered exactly what they promised and then some.',
    author: 'Training Director',
    role: 'Corporate Training Program',
  },
];

// ---- FAQ Data ----
const faqData = [
  {
    q: 'What age groups are your workshops designed for?',
    a: 'Our workshops are primarily designed for students in Classes 8–12, with content calibrated for different skill levels within that range. We also offer specialized workshops for college students and corporate teams.',
  },
  {
    q: 'How many students can participate in a single workshop?',
    a: 'We recommend batches of 25–40 students for optimal hands-on learning. For larger groups, we run parallel sessions with dedicated instructors for each batch.',
  },
  {
    q: 'Do students need prior technical knowledge?',
    a: 'No prior experience is required. Our workshops are designed to take students from zero to functional project completion. Each track begins with foundational concepts before progressing to hands-on building.',
  },
  {
    q: 'What do students receive after completing a workshop?',
    a: 'All students receive an official Future Pilots certificate of completion. Premium (7-day) workshop participants also receive prizes for outstanding projects and portfolio-ready documentation of their work.',
  },
  {
    q: 'Can you customize workshops for our school\'s curriculum?',
    a: 'Absolutely. We regularly align workshop content with CBSE, ICSE, and State Board curricula, particularly for computer science, physics, and entrepreneurship-adjacent subjects. Contact us to discuss your specific requirements.',
  },
  {
    q: 'What equipment do you bring for hardware workshops?',
    a: 'For IoT, Robotics, Drone, and EV workshops, we bring all necessary hardware kits, tools, and components. Schools only need to provide classroom space with power outlets. Students work with real hardware from day one.',
  },
  {
    q: 'How does the SEO/Digital service work?',
    a: 'We start with a comprehensive audit of your current online presence, then implement a tailored strategy based on your chosen package. Monthly reporting keeps you informed of progress. All packages include dedicated account management.',
  },
];

// ---- Render Functions ----
export function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;

  grid.innerHTML = teamData.map(member => `
    <div class="card team__card">
      <div class="team__avatar">${member.initials}</div>
      <h4 class="team__name">${member.name}</h4>
      <span class="team__role">${member.role}</span>
    </div>
  `).join('');
}

export function renderTestimonials() {
  const track = document.getElementById('testimonials-track');
  if (!track) return;

  track.innerHTML = testimonialsData.map(t => `
    <div class="card testimonial__card">
      <p class="testimonial__quote">${t.quote}</p>
      <div style="margin-top:16px;">
        <span class="testimonial__author" style="font-weight:600; display:block;">${t.author}</span>
        <span class="testimonial__role" style="font-size:var(--text-sm); color:var(--text-secondary);">${t.role}</span>
      </div>
    </div>
  `).join('');
}

export function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;

  list.innerHTML = faqData.map((item, i) => `
    <div class="faq__item" id="faq-item-${i}">
      <button class="faq__question" aria-expanded="false" aria-controls="faq-answer-${i}">
        <span>${item.q}</span>
        <svg class="faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      </button>
      <div class="faq__answer" id="faq-answer-${i}" role="region">
        <p class="faq__answer-inner">${item.a}</p>
      </div>
    </div>
  `).join('');

  // FAQ accordion behavior
  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq__question');
    if (!btn) return;

    const item = btn.closest('.faq__item');
    const isOpen = item.classList.contains('is-open');

    // Close all
    list.querySelectorAll('.faq__item.is-open').forEach(openItem => {
      openItem.classList.remove('is-open');
      openItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
    });

    // Toggle current
    if (!isOpen) {
      item.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}

// ---- Pricing Tabs ----
export function initPricingTabs() {
  const tabs = document.querySelectorAll('.pricing__tab');
  const panels = document.querySelectorAll('.pricing__panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      panels.forEach(p => p.classList.toggle('active', p.dataset.panel === target));
    });
  });
}
