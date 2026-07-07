// ============================================
// FLY-OUT EXPLORE DRAWER SYSTEM
// Handles Team Profile details & Workshop syllabus exploration
// ============================================

import gsap from 'gsap';

// ---- Detailed Team Profiles Data ----
const teamProfiles = {
  'AT': {
    name: 'Anurag Tiwari',
    role: 'CEO / Founder',
    initials: 'AT',
    avatarClass: '',
    bio: 'Visionary leader driving experiential learning and digital innovation across India.',
    skills: ['STEM Leadership', 'Brand Strategy', 'Partnerships', 'Public Speaking', 'EV Technology', 'Business Strategy'],
    qa: [
      {
        q: 'What inspired you to start Future Pilots?',
        a: 'I realized that textbook-based education leaves a massive gap when students face the real industry. I wanted to create a platform that delivers real, hand-crafted, hardware-and-code immersion with zero operational hassle for schools.'
      },
      {
        q: 'What is your core focus area at Future Pilots?',
        a: 'I divide my time between designing new experiential learning labs for schools and consulting businesses on digital growth strategies.'
      },
      {
        q: 'What is your vision for the next 2 years?',
        a: 'To make Future Pilots the most trusted name in school STEM workshops across India, training over 10,000+ young innovators in AI, Robotics, and future mobility.'
      }
    ]
  },
  'PM': {
    name: 'Pari Meena',
    role: 'Co-Founder / Manager',
    initials: 'PM',
    avatarClass: 'explore-profile__avatar--teal',
    bio: 'Strategic operations and partnership management for education and digital verticals.',
    skills: ['Operations Management', 'Finance & Billing', 'Client Success', 'Partner Relations', 'Event Coordination'],
    qa: [
      {
        q: 'How does Future Pilots manage logistics for school workshops?',
        a: 'We have built a standardized pipeline. We ship custom hardware kits, configure web hosting, and allocate top-tier mentors in advance, ensuring that schools face absolutely zero operational friction.'
      },
      {
        q: 'What is the most rewarding part of your role?',
        a: 'Seeing the sheer excitement of school children when they build a working electric vehicle circuit or code their first AI agent from scratch.'
      },
      {
        q: 'What is the Zero Hassle Promise?',
        a: 'It means schools only need to provide a space and students. We bring all hardware, software tools, training mentors, and handle certifications end-to-end.'
      }
    ]
  },
  'KS': {
    name: 'Kavyansh Saxena',
    role: 'Chief Marketing Officer',
    initials: 'KS',
    avatarClass: '',
    bio: 'Brand strategy and market positioning for premium education and digital services.',
    skills: ['Search Engine Optimization', 'Social Media Campaigns', 'Lead Generation', 'Copywriting', 'Conversion Optimization'],
    qa: [
      {
        q: 'What makes Future Pilots Digital different from regular marketing agencies?',
        a: 'We do not sell vanity impressions. We optimize for high-intent leads, organic rankings, and real customer acquisitions. Our approach is highly bespoke and manually tailored.'
      },
      {
        q: 'How do you structure SEO campaigns for educational institutes?',
        a: 'We focus on local visibility, authority building, and content that answers exactly what students and parents are searching for in that specific region.'
      },
      {
        q: 'What advice do you give to startups starting out on SEO?',
        a: 'Build a solid website structure, write authentic, helpful content that solves customer issues, and verify your local Google Business profile from Day 1.'
      }
    ]
  },
  'CS': {
    name: 'Chitransh Sahu',
    role: 'Chief Technical Officer',
    initials: 'CS',
    avatarClass: 'explore-profile__avatar--teal',
    bio: 'Technical architecture and innovation leadership across all product verticals.',
    skills: ['Full-Stack Web Dev', 'Internet of Things (IoT)', 'Embedded Systems', 'AI Deployments', 'Cloud Architecture'],
    qa: [
      {
        q: 'How do you keep the workshop syllabus up to date?',
        a: 'Technology shifts fast. As AI moves from simple prompts to complex agentic coding, our syllabus updates alongside it. We focus on tools actually used in startups and tech companies.'
      },
      {
        q: 'What is the hardware-to-theory ratio in your labs?',
        a: 'We maintain a strict 3:1 ratio. Out of a 4-hour session, 3 hours are dedicated to student building, coding, testing, and troubleshooting.'
      },
      {
        q: 'What is your favorite stack for building websites currently?',
        a: 'I love Vite, React/Next.js, Tailwind or clean custom CSS, Supabase, and GSAP for ultra-premium transitions.'
      }
    ]
  }
};

// ---- Detailed Workshops & Services Data ----
const exploreDetails = {
  // Education tracks
  'ai-ml': {
    type: 'workshop',
    badge: 'Software Track',
    badgeClass: '',
    title: 'AI/ML & Agentic AI Workshop',
    desc: 'Deep-dive into Prompt Engineering, LLM models, API integration, and building custom multi-agent coding systems. No coding prerequisites required.',
    sections: [
      {
        title: 'Syllabus & Milestones',
        layout: 'syllabus',
        items: [
          { day: 'Day 1', name: 'Foundations of AI & Prompting', desc: 'Understanding Large Language Models, prompt engineering design patterns, and systemic workflows.' },
          { day: 'Day 2', name: 'Building Smart Chatbots', desc: 'Working with APIs to build conversational interfaces and custom system instructions.' },
          { day: 'Day 3', name: 'Agentic AI Workflows', desc: 'Designing multi-agent frameworks where specialized AI agents collaborate to solve complex problems.' },
          { day: 'Day 4', name: 'Full Project Deployment', desc: 'Integrating the AI backend with a web UI and launching it live for public use.' }
        ]
      },
      {
        title: 'What Students Build (Projects)',
        layout: 'list',
        items: [
          'Personal Smart Agentic Assistant (tailored for studies or scheduling)',
          'AI-powered Customer Support Bot with contextual knowledge base',
          'Automated Content Generator web tool'
        ]
      },
      {
        title: 'Resource Kit Provided',
        layout: 'list',
        items: [
          'Future Pilots official cloud sandbox API key access',
          'Preloaded repository templates & setup guides',
          'Official printed certificate of accomplishment',
          'Take-home handbook on Agentic Workflows'
        ]
      }
    ]
  },
  'cyber-sec': {
    type: 'workshop',
    badge: 'Security Track',
    badgeClass: 'explore-workshop__badge--teal',
    title: 'Cyber Security & Ethical Hacking',
    desc: 'Learn the fundamentals of penetration testing, network security, web app defenses, and threat analysis. Hands-on labs in controlled virtual environments.',
    sections: [
      {
        title: 'Syllabus & Milestones',
        layout: 'syllabus',
        items: [
          { day: 'Day 1', name: 'Linux Basics & Networking Essentials', desc: 'Getting familiar with Kali Linux command line, IP subnets, ports, and protocols.' },
          { day: 'Day 2', name: 'Vulnerability Analysis & OWASP Top 10', desc: 'Scanning networks for vulnerabilities, SQL injection, XSS, and secure coding practices.' },
          { day: 'Day 3', name: 'Network Penetration & MitM', desc: 'Understanding Man-in-the-Middle concepts, sniffing packets safely, and firewall protection.' },
          { day: 'Day 4', name: 'Live CTF Hackathon', desc: 'Applying skills in a 3-hour Capture The Flag challenge to hack mock targets and secure flags.' }
        ]
      },
      {
        title: 'Key Practical Projects',
        layout: 'list',
        items: [
          'Secure Network Firewall configuration',
          'Vulnerability assessment report of a test web application',
          'Custom Python-based port scanner tool'
        ]
      },
      {
        title: 'Tools & Lab Access',
        layout: 'list',
        items: [
          'Future Pilots custom Ethical Hacking VM image',
          'Private CTF arena dashboard credentials',
          'Printed Cybersecurity Roadmap & Cheat Sheets',
          'Certificate of Ethical Hacking completion'
        ]
      }
    ]
  },
  'web-dev': {
    type: 'workshop',
    badge: 'Software Track',
    badgeClass: '',
    title: 'Web & App Development',
    desc: 'From a blank text file to a live web application. Master HTML5 semantic structure, modern CSS layouts, dynamic JavaScript, responsive navigation, and automated production deployment.',
    sections: [
      {
        title: 'Syllabus & Milestones',
        layout: 'syllabus',
        items: [
          { day: 'Day 1', name: 'Structure & Style (HTML5 & CSS3)', desc: 'CSS Flexbox/Grid systems, design tokens, typography, and building layout skeletons.' },
          { day: 'Day 2', name: 'Interactivity with Javascript', desc: 'Dynamic UI rendering, DOM event handlers, custom cursors, and mobile menu toggles.' },
          { day: 'Day 3', name: 'Modern Build Tools (Vite & NPM)', desc: 'Setting up developer tooling, package management, and configuring modular components.' },
          { day: 'Day 4', name: 'API Integrations & Live Deployments', desc: 'Fetching public data, connecting forms, and hosting the final website live on Vercel.' }
        ]
      },
      {
        title: 'Key Projects Built',
        layout: 'list',
        items: [
          'Interactive Professional Portfolio Site with micro-animations',
          'Dynamic Task Management Dashboard (Kanban style)',
          'Local Weather App pulling live public weather API data'
        ]
      },
      {
        title: 'What\'s Included',
        layout: 'list',
        items: [
          'Lifetime access to Future Pilots WebDev starter templates',
          'Hosting credentials on Vercel & Netlify integration guide',
          'NPM package checklist & VS Code shortcuts cheat sheet',
          'Printed project completion certificate'
        ]
      }
    ]
  },
  'robotics-iot': {
    type: 'workshop',
    badge: 'Hardware Track',
    badgeClass: 'explore-workshop__badge--teal',
    title: 'Robotics, IoT & Drone Tech',
    desc: 'Breathe life into physical objects. Program microcontrollers, wire complex sensor circuits, connect hardware to cloud dashboards, and assemble autonomous mobile vehicles.',
    sections: [
      {
        title: 'Syllabus & Milestones',
        layout: 'syllabus',
        items: [
          { day: 'Day 1', name: 'Microcontroller Basics & Circuits', desc: 'Getting started with Arduino & ESP32, understanding voltage, resistance, and basic LED code.' },
          { day: 'Day 2', name: 'Sensor & Actuator Integrations', desc: 'Connecting ultrasonic distance sensors, temperature gauges, buzzers, and servo motors.' },
          { day: 'Day 3', name: 'IoT Cloud Dashboards', desc: 'Connecting ESP32 to local WiFi, transmitting sensor telemetry to an online Web Dashboard.' },
          { day: 'Day 4', name: 'Robot Chassis & Motor Control', desc: 'Assembling a 2-wheel drive robot chassis and coding autonomous obstacle avoidance/line-following.' }
        ]
      },
      {
        title: 'Key Hardware Projects',
        layout: 'list',
        items: [
          'Connected Smart Home Controller (monitoring temperature & motion online)',
          'Autonomous Obstacle Avoiding Mobile Car',
          'Smart Irrigation system simulation'
        ]
      },
      {
        title: 'Hardware Kit Access',
        layout: 'list',
        items: [
          'Take-home hardware kit (for Premium 7-Day students): Arduino/ESP32, breadboard, 20+ wires, 6 sensors, motors, chassis, batteries',
          'Workshop-access hardware set (for 1-Day & 4-Day students)',
          'Custom C++ code repository with sensor library references',
          'Official hardware laboratory certificate'
        ]
      }
    ]
  },
  'ev-auto': {
    type: 'workshop',
    badge: 'Automobile Track',
    badgeClass: '',
    title: 'Electric Vehicle & Automobile Engineering',
    desc: 'Unveil the future of mobility. Understand EV architecture, Lithium-ion battery packs, motor controllers, regenerative braking systems, and hybrid powertrain designs.',
    sections: [
      {
        title: 'Syllabus & Milestones',
        layout: 'syllabus',
        items: [
          { day: 'Day 1', name: 'EV vs ICE Engine Architectures', desc: 'Anatomy of an electric car, component placement, chassis design, and safety protocols.' },
          { day: 'Day 2', name: 'Battery Chemistry & pack Building', desc: 'Cell types (18650), series vs parallel layouts, cell balancing, and Battery Management Systems (BMS).' },
          { day: 'Day 3', name: 'Motor Technologies & Speed Control', desc: 'Brushless DC (BLDC) motors, motor controllers, wiring up variable throttle circuits.' },
          { day: 'Day 4', name: 'Assembly, Wiring & Diagnostics', desc: 'Hands-on wiring of a scaled EV powertrain, troubleshooting circuit issues with multimeters.' }
        ]
      },
      {
        title: 'Key Practical Projects',
        layout: 'list',
        items: [
          'Wired Scaled EV Powertrain setup with working throttle & motor controller',
          'BMS cell monitoring and thermal management simulation',
          'Efficiency analysis of regenerative braking scenarios'
        ]
      },
      {
        title: 'Resources Provided',
        layout: 'list',
        items: [
          'Scale BLDC motors & BMS boards for laboratory testing',
          'EV wiring schematics and diagnostics cheat sheet',
          'Future Pilots printed EV Academy completion certificate',
          'Industry report on India\'s EV startup ecosystem'
        ]
      }
    ]
  },
  'business': {
    type: 'workshop',
    badge: 'Leadership Track',
    badgeClass: 'explore-workshop__badge--teal',
    title: 'Entrepreneurship & Innovation',
    desc: 'Turn a spark of an idea into a structured business roadmap. Learn customer discovery, product-market fit, unit economics, branding, and high-impact pitching.',
    sections: [
      {
        title: 'Syllabus & Milestones',
        layout: 'syllabus',
        items: [
          { day: 'Day 1', name: 'Ideation & Problem Identification', desc: 'How to spot market gaps, validate user problems, and draft value propositions.' },
          { day: 'Day 2', name: 'Business Model Canvas (BMC)', desc: 'Key channels, resources, customer relations, and cost vs revenue structures.' },
          { day: 'Day 3', name: 'Unit Economics & Pitch Crafting', desc: 'Calculating Customer Acquisition Cost (CAC), Lifetime Value (LTV), and structuring a 5-minute pitch deck.' },
          { day: 'Day 4', name: 'Pitch Showcase / Demo Day', desc: 'Presenting the business model slide deck to an active industry panel for review.' }
        ]
      },
      {
        title: 'Key Submissions',
        layout: 'list',
        items: [
          'Completed Business Model Canvas for the startup concept',
          '5-slide Investor Pitch Deck (ideation stage)',
          'Financial blueprint spreadsheet'
        ]
      },
      {
        title: 'What\'s Provided',
        layout: 'list',
        items: [
          'Investor pitch deck template slides',
          'One-page Startup blueprint checklist',
          'List of startup incubation grants in India',
          'Leadership academy certificate'
        ]
      }
    ]
  },

  // Digital services
  'seo-digital': {
    type: 'service',
    badge: 'Digital Vertical',
    badgeClass: 'explore-workshop__badge--teal',
    title: 'SEO & Digital Marketing Solutions',
    desc: 'Bespoke, growth-first organic traffic and search engine optimization systems designed to build real authority and capture high-intent inquiries.',
    sections: [
      {
        title: 'Our Methodical Process',
        layout: 'syllabus',
        items: [
          { day: 'Stage 1', name: 'Discovery & Deep Audit', desc: 'We scan your current website structural issues, competitor keywords, and local listing optimization.' },
          { day: 'Stage 2', name: 'On-Page Optimization', desc: 'Fixing meta tags, heading hierarchies, site loading speeds, and optimizing core conversion pages.' },
          { day: 'Stage 3', name: 'Premium Content Strategy', desc: 'Writing high-quality blogs and articles answering exactly what your target audience queries online.' },
          { day: 'Stage 4', name: 'Authority Building & Backlinks', desc: 'Acquiring premium backlinks from trustworthy educational and business directories to rank higher.' }
        ]
      },
      {
        title: 'Bespoke Tech & Tools Used',
        layout: 'list',
        items: [
          'Google Search Console & Google Analytics (GA4)',
          'Ahrefs / SEMrush for advanced competitor intelligence',
          'Screaming Frog for technical crawl diagnostics',
          'Google My Business APIs for local optimization'
        ]
      },
      {
        title: 'What We Deliver Monthly',
        layout: 'list',
        items: [
          'Keywords ranking movement tracker reports',
          'Organic traffic conversions and lead attribution data',
          'Detailed competitive gap analysis updates',
          'Social media creative posts with premium graphics'
        ]
      }
    ]
  },
  'ai-automation': {
    type: 'service',
    badge: 'Automation Vertical',
    badgeClass: '',
    title: 'AI Automation & Workflow Engineering',
    desc: 'Integrate custom AI assistant APIs, build intelligent chatbots, automate outbound leads tracking, and streamline business CRM workflows to run 24/7.',
    sections: [
      {
        title: 'Implementation Stages',
        layout: 'syllabus',
        items: [
          { day: 'Stage 1', name: 'Workflow Analysis', desc: 'Identifying bottlenecks in your current lead generation, scheduling, or customer support.' },
          { day: 'Stage 2', name: 'API & Pipeline Design', desc: 'Connecting OpenAI, Gemini, or custom models into automation pipelines (Make.com, n8n).' },
          { day: 'Stage 3', name: 'Knowledge Base Setup', desc: 'Indexing your documents into vector databases for context-aware customer queries.' },
          { day: 'Stage 4', name: 'Integration & Live Deployment', desc: 'Embedding the chatbot on your site, linking it with your CRM, and setting up error alerts.' }
        ]
      },
      {
        title: 'Tech Stack Implemented',
        layout: 'list',
        items: [
          'Make.com, n8n, Zapier for workflow piping',
          'OpenAI Assistants API, Claude API, Gemini API',
          'Vector stores: Pinecone, Supabase pgvector',
          'Retell AI / Vapi for voice assistant workflows',
          'CRM Syncs: HubSpot, Salesforce, custom Webhooks'
        ]
      },
      {
        title: 'Key Solutions Built',
        layout: 'list',
        items: [
          'AI support agents responding to customer chats in under 2 seconds',
          'Outbound booking calendars syncing automatically with sales reps',
          'Automated data extraction and formatting pipelines'
        ]
      }
    ]
  },
  'web-app-dev': {
    type: 'service',
    badge: 'Development Vertical',
    badgeClass: 'explore-workshop__badge--teal',
    title: 'Premium Web & Web App Development',
    desc: 'Fully bespoke web builds using high-speed frameworks, beautiful responsive user interfaces, premium micro-animations, and secure database backends.',
    sections: [
      {
        title: 'Syllabus & Milestones',
        layout: 'syllabus',
        items: [
          { day: 'Stage 1', name: 'Design Tokens & Wireframing', desc: 'Establishing custom color palettes, UI components layout patterns, and responsive spacing guidelines.' },
          { day: 'Stage 2', name: 'Framework Development', desc: 'Writing clean code in React, Next.js, or Vite, using modular and reusable UI components.' },
          { day: 'Stage 3', name: 'Animation & Interaction Polish', desc: 'Adding GSAP scroll triggers, custom cursor interactions, and fluid transitions (Lenis).' },
          { day: 'Stage 4', name: 'Performance Optimization & Launch', desc: 'Aiming for 95+ Lighthouse scores, structural SEO tagging, SSL configuration, and deployment.' }
        ]
      },
      {
        title: 'Supported Tech Stack',
        layout: 'list',
        items: [
          'Frontend: Next.js, React, Vite, Vanilla JS',
          'Styling: Custom Vanilla CSS (Tailwind CSS optional)',
          'Interactions: GSAP (GreenSock), Framer Motion, Lenis Scroll',
          'Backend: Node.js, Express, Supabase, Firebase',
          'Hosting: Vercel, Netlify, AWS CloudFront'
        ]
      },
      {
        title: 'What is Included in Every Build',
        layout: 'list',
        items: [
          '100% custom codebase (no heavy visual-builder bloat)',
          'Integrated headless CMS options for easy content editing',
          'SEO best practices (metadata, responsive images, canonical tags)',
          '1 year of hosting support & minor updates assistance'
        ]
      }
    ]
  }
};

// ---- Explore Drawer Controller Class ----
export class ExploreDrawer {
  constructor() {
    this.drawer = document.getElementById('explore-drawer');
    this.backdrop = document.getElementById('explore-drawer-backdrop');
    this.closeBtn = document.getElementById('explore-drawer-close');
    this.body = document.getElementById('explore-drawer-body');

    if (!this.drawer || !this.backdrop || !this.closeBtn || !this.body) return;

    this.initEvents();
  }

  initEvents() {
    // Event delegation on body to handle dynamically generated triggers
    document.body.addEventListener('click', (e) => {
      // 1. Team Profile Triggers
      const teamTrigger = e.target.closest('[data-explore-member]');
      if (teamTrigger) {
        e.preventDefault();
        const memberId = teamTrigger.dataset.exploreMember;
        this.openTeamProfile(memberId);
        return;
      }

      // 2. Generic Explore Triggers
      const exploreTrigger = e.target.closest('[data-explore-id]');
      if (exploreTrigger) {
        e.preventDefault();
        const id = exploreTrigger.dataset.exploreId;
        this.openExploreDetails(id);
        return;
      }
    });

    // Close events
    this.closeBtn.addEventListener('click', () => this.close());
    this.backdrop.addEventListener('click', () => this.close());

    // Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }

  isOpen() {
    return this.drawer.classList.contains('is-open');
  }

  open() {
    this.drawer.classList.add('is-open');
    this.drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Stop page scrolling
  }

  close() {
    this.drawer.classList.remove('is-open');
    this.drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore scrolling
  }

  openTeamProfile(memberId) {
    const data = teamProfiles[memberId];
    if (!data) return;

    const avatarHtml = `<div class="explore-profile__avatar ${data.avatarClass || ''}">${data.initials}</div>`;
    
    const skillsHtml = data.skills.map(s => `<span class="explore-skill__tag">${s}</span>`).join('');
    
    const qaHtml = data.qa.map(item => `
      <div class="explore-qa__item">
        <div class="explore-qa__q">Q: ${item.q}</div>
        <div class="explore-qa__a">${item.a}</div>
      </div>
    `).join('');

    this.body.innerHTML = `
      <div class="explore-profile__header">
        ${avatarHtml}
        <div class="explore-profile__meta">
          <h3>${data.name}</h3>
          <span class="explore-profile__role">${data.role}</span>
        </div>
      </div>
      
      <div>
        <h4 class="explore-section__title">About Me</h4>
        <p class="explore-profile__bio">"${data.bio}"</p>
      </div>

      <div>
        <h4 class="explore-section__title">Core Expertise</h4>
        <div class="explore-skills__grid">
          ${skillsHtml}
        </div>
      </div>

      <div>
        <h4 class="explore-section__title">Interview & Insights</h4>
        <div>
          ${qaHtml}
        </div>
      </div>
      
      <div style="margin-top:auto; padding-top:var(--space-6);">
        <a href="/contact.html" class="btn btn--primary btn--full">Get In Touch</a>
      </div>
    `;

    this.open();
  }

  openExploreDetails(id) {
    const data = exploreDetails[id];
    if (!data) return;

    let sectionsHtml = '';
    data.sections.forEach(sec => {
      let contentHtml = '';
      if (sec.layout === 'syllabus') {
        contentHtml = `
          <div class="explore-workshop__syllabus">
            ${sec.items.map(item => `
              <div class="explore-syllabus__day">
                <div class="explore-syllabus__day-title">
                  <span>${item.name}</span>
                  <span class="explore-syllabus__day-num">${item.day}</span>
                </div>
                <div class="explore-syllabus__day-desc">${item.desc}</div>
              </div>
            `).join('')}
          </div>
        `;
      } else if (sec.layout === 'list') {
        contentHtml = `
          <ul class="explore-list">
            ${sec.items.map(item => `<li class="explore-list__item">${item}</li>`).join('')}
          </ul>
        `;
      }

      sectionsHtml += `
        <div>
          <h4 class="explore-section__title">${sec.title}</h4>
          ${contentHtml}
        </div>
      `;
    });

    const isTeal = data.badgeClass && data.badgeClass.includes('teal');
    const btnStyle = isTeal 
      ? 'background:var(--accent-teal); border-color:var(--accent-teal);' 
      : '';

    this.body.innerHTML = `
      <div class="explore-workshop__header">
        <span class="explore-workshop__badge ${data.badgeClass || ''}">${data.badge}</span>
        <h2 class="explore-workshop__title">${data.title}</h2>
        <p class="explore-workshop__desc">${data.desc}</p>
      </div>

      ${sectionsHtml}

      <div style="margin-top:auto; padding-top:var(--space-6);">
        <a href="/contact.html" class="btn btn--primary btn--full" style="${btnStyle}">
          ${data.type === 'service' ? 'Get Started' : 'Book a Workshop'}
        </a>
      </div>
    `;

    this.open();
  }
}

export function initExploreDrawer() {
  new ExploreDrawer();
}
