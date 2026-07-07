import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the shell from index.html
let indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

const mainOpen = '<main id="main-content" class="main-content">';
const mainClose = '</main>';
const mainStartIndex = indexHtml.indexOf(mainOpen) + mainOpen.length;
const mainEndIndex = indexHtml.indexOf(mainClose, mainStartIndex);

const beforeMain = indexHtml.substring(0, mainStartIndex);
const afterMain = indexHtml.substring(mainEndIndex);

// Helper to set active nav link
function buildShell(activeHref, beforeMain, afterMain) {
  let shell = beforeMain;
  // remove all active classes
  shell = shell.replace(/class="header__link active"/g, 'class="header__link"');
  // set the correct active link
  shell = shell.replace(`href="${activeHref}" class="header__link"`, `href="${activeHref}" class="header__link active"`);
  return shell;
}

// ── PAGE CONTENT DEFINITIONS ─────────────────────────────────────────────────

const pages = {

  // ── ABOUT ────────────────────────────────────────────────────────────────
  'about.html': {
    activeHref: '/about.html',
    content: `
    <section class="section section--hero" style="padding-bottom:var(--space-12);">
      <div class="shape shape--blob1 shape--orange" style="width:300px;height:300px;top:-60px;left:-80px;"></div>
      <div class="shape shape--blob2 shape--purple" style="width:400px;height:400px;bottom:-80px;right:-100px;"></div>
      <div class="container js-stagger" style="position:relative;z-index:2;">
        <p class="hero__tagline" style="color:var(--accent-teal); background:rgba(13,148,136,0.1);">About Us</p>
        <h1 class="hero__headline" style="font-size:3rem;">Shaping the Future<br/>of Education.</h1>
        <p class="hero__sub" style="max-width:620px;">Future Pilots was founded with a single belief — every student deserves access to the skills that will define the future. We bring the innovation economy into the classroom.</p>
      </div>
    </section>

    <section class="section section--alt" style="padding-top:0; margin-top:-1px;">
      <div class="container">
        <div class="stat-row js-stagger">
          <div class="stat-row__item"><span class="stat-row__number" style="color:var(--accent-orange);">500+</span><span class="stat-row__label">Students Trained</span></div>
          <div class="stat-row__item"><span class="stat-row__number">50+</span><span class="stat-row__label">Workshops Conducted</span></div>
          <div class="stat-row__item"><span class="stat-row__number" style="color:var(--accent-teal);">25+</span><span class="stat-row__label">Partner Schools</span></div>
          <div class="stat-row__item"><span class="stat-row__number">15+</span><span class="stat-row__label">Curriculum Tracks</span></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="feature-row js-stagger">
          <div class="feature-row__img">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop" alt="Vision" />
          </div>
          <div class="feature-row__content">
            <span class="feature-row__tag">Our Vision</span>
            <h2 class="feature-row__title">Learners to Innovators.</h2>
            <p class="feature-row__desc">We believe education should shift from memorisation toward curiosity, experimentation, and real-world application. By introducing emerging technologies and innovation-driven thinking at an early stage, we unlock every student's potential to become a future creator.</p>
            <ul class="feature-checklist">
              <li>Move beyond textbooks to real-world projects</li>
              <li>Develop innovation and problem-solving mindset</li>
              <li>Expose students to industry-relevant technologies</li>
              <li>Build confidence through hands-on achievement</li>
            </ul>
          </div>
        </div>

        <div class="feature-row feature-row--reverse js-stagger" style="border-top:1px solid var(--border-light); margin-top:var(--space-8);">
          <div class="feature-row__img">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop" alt="Mission" />
          </div>
          <div class="feature-row__content">
            <span class="feature-row__tag">Our Mission</span>
            <h2 class="feature-row__title">Build Future-Ready Innovators.</h2>
            <p class="feature-row__desc">To deliver engaging, hands-on, experiential learning that exposes students to emerging technologies, innovation, entrepreneurship, leadership, and future career pathways — building innovators and lifelong learners.</p>
            <ul class="feature-checklist">
              <li>Deliver engaging experiential learning sessions</li>
              <li>Expose students to future career pathways</li>
              <li>Build entrepreneurship and leadership skills</li>
              <li>Create lifelong learners and innovators</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">Why Choose Us</span>
          <h2 class="section__title">What Makes Us Different.</h2>
        </div>
        <div class="grid-3 js-stagger">
          <div class="card">
            <div style="font-size:2.5rem; margin-bottom:var(--space-4);">🏆</div>
            <h3 style="font-weight:700; margin-bottom:var(--space-3);">National Innovation Champions</h3>
            <p style="color:var(--text-secondary); font-size:var(--text-sm); line-height:1.6;">Our programs produce students who compete and win at national-level innovation and technology competitions.</p>
          </div>
          <div class="card">
            <div style="font-size:2.5rem; margin-bottom:var(--space-4);">👨‍🏫</div>
            <h3 style="font-weight:700; margin-bottom:var(--space-3);">Industry-Vetted Mentors</h3>
            <p style="color:var(--text-secondary); font-size:var(--text-sm); line-height:1.6;">Every mentor is carefully vetted by industry experts to ensure students receive the highest quality guidance.</p>
          </div>
          <div class="card">
            <div style="font-size:2.5rem; margin-bottom:var(--space-4);">⚡</div>
            <h3 style="font-weight:700; margin-bottom:var(--space-3);">Zero Operational Hassle</h3>
            <p style="color:var(--text-secondary); font-size:var(--text-sm); line-height:1.6;">We handle everything — equipment, curriculum, mentors, and logistics. Schools simply provide the space and students.</p>
          </div>
          <div class="card">
            <div style="font-size:2.5rem; margin-bottom:var(--space-4);">📜</div>
            <h3 style="font-weight:700; margin-bottom:var(--space-3);">Certificate + Prizes</h3>
            <p style="color:var(--text-secondary); font-size:var(--text-sm); line-height:1.6;">Every participant receives a certificate. Premium workshops include prizes and special recognition for top performers.</p>
          </div>
          <div class="card">
            <div style="font-size:2.5rem; margin-bottom:var(--space-4);">🎓</div>
            <h3 style="font-weight:700; margin-bottom:var(--space-3);">Student Friendly Design</h3>
            <p style="color:var(--text-secondary); font-size:var(--text-sm); line-height:1.6;">No prerequisite knowledge required. Our programs are specifically designed for students in Classes 8–12.</p>
          </div>
          <div class="card">
            <div style="font-size:2.5rem; margin-bottom:var(--space-4);">🌐</div>
            <h3 style="font-weight:700; margin-bottom:var(--space-3);">Proven Across India</h3>
            <p style="color:var(--text-secondary); font-size:var(--text-sm); line-height:1.6;">Trusted by CBSE, ICSE, and State Board schools and coaching institutes across the country.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">Our Team</span>
          <h2 class="section__title">Meet the People Behind the Mission.</h2>
        </div>
        <div id="team-grid" class="team__grid js-stagger"></div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container cta-banner__inner js-stagger">
        <div class="cta-banner__label">Partner With Us</div>
        <h2 class="cta-banner__title">Bring Future Pilots to Your School.</h2>
        <p class="cta-banner__sub">Let's schedule a free consultation to discuss how we can design the perfect workshop experience for your students.</p>
        <div class="cta-banner__actions">
          <a href="/contact.html" class="btn btn--primary">Book a Free Consultation</a>
          <a href="/pricing.html" class="btn btn--outline" style="color:white; border-color:rgba(255,255,255,0.3);">View Pricing Plans</a>
        </div>
        <div class="cta-banner__contact">
          <a href="tel:+916261072872" class="cta-banner__contact-item">📞 +91 62610 72872</a>
          <a href="mailto:hr.futurepilot@gmail.com" class="cta-banner__contact-item">✉️ hr.futurepilot@gmail.com</a>
        </div>
      </div>
    </section>
    `
  },

  // ── EDUCATION ────────────────────────────────────────────────────────────
  'education.html': {
    activeHref: '/education.html',
    content: `
    <section class="section section--hero" style="padding-bottom:var(--space-12);">
      <div class="shape shape--blob1 shape--teal" style="width:350px;height:350px;top:-70px;left:-100px;"></div>
      <div class="shape shape--blob2 shape--orange" style="width:400px;height:400px;bottom:-100px;right:-100px;"></div>
      <div class="container js-stagger" style="position:relative;z-index:2;">
        <p class="hero__tagline">Education Vertical · For Classes 8–12</p>
        <h1 class="hero__headline" style="font-size:3rem;">Future Pilots Education.</h1>
        <p class="hero__sub" style="max-width:640px;">Premium school and coaching institute workshops that bridge the gap between classroom theory and real-world industry skills. Hands-on. Expert-led. Future-focused.</p>
        <div class="hero__ctas">
          <a href="/contact.html" class="btn btn--primary">Book a Workshop</a>
          <a href="/pricing.html" class="btn btn--outline">View Pricing →</a>
        </div>
      </div>
    </section>

    <section class="trusted-by">
      <div class="container">
        <p class="trusted-by__label">Delivered Across All Major School Boards</p>
        <div class="trusted-by__logos">
          <div class="trusted-by__logo-item"><span class="trusted-by__logo-icon">🏛️</span><span class="trusted-by__logo-name">CBSE Schools</span></div>
          <div class="trusted-by__logo-item"><span class="trusted-by__logo-icon">📚</span><span class="trusted-by__logo-name">ICSE Schools</span></div>
          <div class="trusted-by__logo-item"><span class="trusted-by__logo-icon">🎓</span><span class="trusted-by__logo-name">State Board Schools</span></div>
          <div class="trusted-by__logo-item"><span class="trusted-by__logo-icon">📐</span><span class="trusted-by__logo-name">Coaching Institutes</span></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">Workshops On</span>
          <h2 class="section__title">6 Technology Tracks Designed for School Students.</h2>
          <p class="section__sub">Every track is designed with no prerequisites — any student in Classes 8–12 can participate and build real-world projects from Day 1.</p>
        </div>
        <div class="topics__grid js-stagger">
          <div class="topic__card">
            <div class="topic__icon">🤖</div>
            <div class="topic__text">
              <h4>AI/ML &amp; Agentic AI</h4>
              <p>Build AI models and websites using Prompt Engineering and Agentic AI frameworks. The skill of the decade.</p>
            </div>
          </div>
          <div class="topic__card">
            <div class="topic__icon">🔒</div>
            <div class="topic__text">
              <h4>Cyber Security</h4>
              <p>Understand ethical hacking, network security, and how to protect digital systems from real-world threats.</p>
            </div>
          </div>
          <div class="topic__card">
            <div class="topic__icon">🌐</div>
            <div class="topic__text">
              <h4>Web &amp; App Development</h4>
              <p>Build functional websites and mobile apps from scratch — from concept to deployed product.</p>
            </div>
          </div>
          <div class="topic__card">
            <div class="topic__icon">🚁</div>
            <div class="topic__text">
              <h4>Robotics, IoT &amp; Drone Tech</h4>
              <p>Assemble and program robots and drones. Learn sensors, microcontrollers, and connected systems.</p>
            </div>
          </div>
          <div class="topic__card">
            <div class="topic__icon">🚗</div>
            <div class="topic__text">
              <h4>Electric Vehicle &amp; Automobile</h4>
              <p>Explore EV systems, battery technology, and the engineering behind next-gen vehicles.</p>
            </div>
          </div>
          <div class="topic__card">
            <div class="topic__icon">💼</div>
            <div class="topic__text">
              <h4>Entrepreneurship &amp; Leadership</h4>
              <p>Learn to build businesses, pitch ideas, manage teams, and lead in the innovation economy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">Our Methodology</span>
          <h2 class="section__title">The Proven 5-Step Learning Approach.</h2>
          <p class="section__sub">We follow a structured methodology that ensures learning sticks long after the workshop ends.</p>
        </div>
        <div class="approach__steps js-stagger">
          <div class="approach__step">
            <div class="approach__step-icon">📖</div>
            <div class="approach__step-title">Theory + Practical</div>
            <div class="approach__step-desc">1 hour theory + 3 hours of hands-on practical for every session</div>
          </div>
          <div class="approach__step">
            <div class="approach__step-icon">🔧</div>
            <div class="approach__step-title">Hands-On Learning</div>
            <div class="approach__step-desc">Students build, not just watch. Real hardware and software tools</div>
          </div>
          <div class="approach__step">
            <div class="approach__step-icon">👨‍🏫</div>
            <div class="approach__step-title">Expert Trainers</div>
            <div class="approach__step-desc">Industry-vetted mentors who work with real-world technology daily</div>
          </div>
          <div class="approach__step">
            <div class="approach__step-icon">💬</div>
            <div class="approach__step-title">Doubt Solving</div>
            <div class="approach__step-desc">Post-session Q&A and doubt solving for deep understanding</div>
          </div>
          <div class="approach__step">
            <div class="approach__step-icon">🏆</div>
            <div class="approach__step-title">Certificate &amp; Prizes</div>
            <div class="approach__step-desc">Official certificate + prizes for outstanding projects and effort</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">Workshop Formats</span>
          <h2 class="section__title">Three Levels of Immersive Learning.</h2>
          <p class="section__sub">From a focused single-day introduction to a full 7-day premium immersion — there is a format for every school's schedule and budget.</p>
        </div>
        <div class="pricing__tier-wrap js-stagger">
          <div class="pricing__tier">
            <div class="pricing__tier-name">1-Day Workshop</div>
            <div class="pricing__tier-duration">4 Hours · Introduction Level</div>
            <div class="pricing__tier-rows">
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">💼 Career Counselling</span><span class="pricing__tier-row-price">₹2,000</span></div>
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🤖 AIML / Agentic AI / WebDev</span><span class="pricing__tier-row-price">₹4,000</span></div>
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🚁 IoT / Robotronics / Drone</span><span class="pricing__tier-row-price">₹5,500</span></div>
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🚗 Automobile &amp; EV</span><span class="pricing__tier-row-price">₹7,000</span></div>
            </div>
            <ul class="pricing__tier-includes">
              <li>Theory + Practical (1 hr + 3 hrs)</li>
              <li>Expert mentor guidance</li>
              <li>Digital certificate for every participant</li>
            </ul>
            <a href="/contact.html" class="btn btn--outline btn--full">Book Now</a>
          </div>
          <div class="pricing__tier pricing__tier--featured">
            <div class="pricing__tier-badge">⭐ Most Popular</div>
            <div class="pricing__tier-name">4-Day Workshop</div>
            <div class="pricing__tier-duration">12–15 Hours · + Certificate</div>
            <div class="pricing__tier-rows">
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🤖 AI/ML, App Dev, Cyber Security</span><span class="pricing__tier-row-price" style="color:var(--accent-orange);">₹8,000</span></div>
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🚁 IoT, Robotronics</span><span class="pricing__tier-row-price" style="color:var(--accent-orange);">₹12,000</span></div>
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🚗 For EV, Automobiles</span><span class="pricing__tier-row-price" style="color:var(--accent-orange);">₹15,000</span></div>
            </div>
            <ul class="pricing__tier-includes">
              <li>Deep theory + extended practical sessions</li>
              <li>Full hands-on project build</li>
              <li>Expert mentor + personalized guidance</li>
              <li>Printed certificate included</li>
            </ul>
            <a href="/contact.html" class="btn btn--primary btn--full">Book Now</a>
          </div>
          <div class="pricing__tier">
            <div class="pricing__tier-badge" style="background:var(--accent-teal);">🎁 Real Hands-On + Certificate + Prizes</div>
            <div class="pricing__tier-name">7-Day Premium</div>
            <div class="pricing__tier-duration">Full Immersion · Premium Level</div>
            <div class="pricing__tier-rows">
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🤖 AI/ML, App Dev, Cyber Security</span><span class="pricing__tier-row-price">₹10,000</span></div>
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🚁 IoT, Robotronics</span><span class="pricing__tier-row-price">₹14,000</span></div>
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🚗 For EV, Automobiles</span><span class="pricing__tier-row-price">₹17,000</span></div>
            </div>
            <ul class="pricing__tier-includes">
              <li>Maximum depth of learning and hands-on time</li>
              <li>Full certificate + prizes for outstanding students</li>
              <li>Personalized mentor guidance throughout</li>
              <li>Post-session doubt solving included</li>
            </ul>
            <a href="/contact.html" class="btn btn--outline btn--full">Book Now</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">Why Join</span>
          <h2 class="section__title">5 Reasons Schools Choose Future Pilots.</h2>
        </div>
        <div class="why-join__grid js-stagger">
          <div class="why-join__item"><div class="why-join__icon">🏆</div><div class="why-join__label">National Innovation Champions</div></div>
          <div class="why-join__item"><div class="why-join__icon">👥</div><div class="why-join__label">Community Proven Mentors</div></div>
          <div class="why-join__item"><div class="why-join__icon">✅</div><div class="why-join__label">Vetted Under Industry Experts</div></div>
          <div class="why-join__item"><div class="why-join__icon">⚡</div><div class="why-join__label">Zero Operational Hassle</div></div>
          <div class="why-join__item"><div class="why-join__icon">🎓</div><div class="why-join__label">Accessible &amp; Student Friendly</div></div>
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container cta-banner__inner js-stagger">
        <div class="cta-banner__label">Let's Get Started</div>
        <h2 class="cta-banner__title">Book a Workshop for Your School.</h2>
        <p class="cta-banner__sub">Contact us today and we will design the perfect workshop experience for your students — from scheduling to delivery.</p>
        <div class="cta-banner__actions">
          <a href="/contact.html" class="btn btn--primary">Contact Us Today</a>
          <a href="/pricing.html" class="btn btn--outline" style="color:white; border-color:rgba(255,255,255,0.3);">Full Pricing Details</a>
        </div>
        <div class="cta-banner__contact">
          <a href="tel:+916261072872" class="cta-banner__contact-item">📞 +91 62610 72872</a>
          <a href="mailto:hr.futurepilot@gmail.com" class="cta-banner__contact-item">✉️ hr.futurepilot@gmail.com</a>
        </div>
      </div>
    </section>
    `
  },

  // ── DIGITAL ──────────────────────────────────────────────────────────────
  'digital.html': {
    activeHref: '/digital.html',
    content: `
    <section class="section section--hero" style="padding-bottom:var(--space-12);">
      <div class="shape shape--blob1 shape--purple" style="width:350px;height:350px;top:-70px;right:-100px;"></div>
      <div class="shape shape--blob2 shape--teal" style="width:400px;height:400px;bottom:-100px;left:-100px;"></div>
      <div class="container js-stagger" style="position:relative;z-index:2;">
        <p class="hero__tagline" style="color:var(--accent-purple); background:rgba(139,92,246,0.1);">Digital Solutions</p>
        <h1 class="hero__headline" style="font-size:3rem;">Future Pilots Digital.</h1>
        <p class="hero__sub" style="max-width:640px;">Smart SEO, AI-powered digital marketing, and full-stack development for educational institutions and growing businesses. More visibility. More traffic. More leads.</p>
        <div class="hero__ctas">
          <a href="/contact.html" class="btn btn--primary">Get a Free Audit</a>
          <a href="/pricing.html" class="btn btn--outline">View SEO Packages →</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">What We Offer</span>
          <h2 class="section__title">Complete Digital Growth Solutions.</h2>
          <p class="section__sub">From building your foundation to scaling your reach — we cover the full digital growth journey.</p>
        </div>

        <div class="feature-row js-stagger">
          <div class="feature-row__img">
            <img src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=900&auto=format&fit=crop" alt="SEO and digital marketing" />
          </div>
          <div class="feature-row__content">
            <span class="feature-row__tag">SEO &amp; Digital Marketing</span>
            <h3 class="feature-row__title">Get Found Online. Grow Fast.</h3>
            <p class="feature-row__desc">We deliver smart, data-driven SEO strategies that increase your rankings, drive qualified traffic, and generate real leads — not just vanity metrics.</p>
            <ul class="feature-checklist">
              <li>Keyword Research &amp; On-Page SEO</li>
              <li>Advanced Content Strategy (Blogs / Articles)</li>
              <li>Social Media Post Creation with Better Design</li>
              <li>Backlink Building &amp; Domain Authority Growth</li>
              <li>Competitor Analysis &amp; Monthly Reports</li>
              <li>Local SEO &amp; Google Business Optimization</li>
            </ul>
            <a href="/pricing.html" class="btn btn--primary">See SEO Packages</a>
          </div>
        </div>

        <div class="feature-row feature-row--reverse js-stagger" style="border-top:1px solid var(--border-light); margin-top:var(--space-8);">
          <div class="feature-row__img">
            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=900&auto=format&fit=crop" alt="AI automation" />
          </div>
          <div class="feature-row__content">
            <span class="feature-row__tag">AI Automation</span>
            <h3 class="feature-row__title">Let AI Work For You 24/7.</h3>
            <p class="feature-row__desc">From intelligent chatbots to CRM automation and voice agents — we build AI-powered systems that handle routine tasks so your team can focus on growth.</p>
            <ul class="feature-checklist">
              <li>AI Chatbot &amp; Conversational Agents</li>
              <li>Voice Agent Integration</li>
              <li>CRM Workflow Automation</li>
              <li>Lead Generation (Inbound Automation)</li>
              <li>Ads Generation on YouTube, Google &amp; SEO Platforms</li>
              <li>Conversion Tracking Setup &amp; Analytics</li>
            </ul>
            <a href="/contact.html" class="btn btn--primary" style="background:var(--accent-purple); border-color:var(--accent-purple);">Book a Consultation</a>
          </div>
        </div>

        <div class="feature-row js-stagger" style="border-top:1px solid var(--border-light); margin-top:var(--space-8);">
          <div class="feature-row__img">
            <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=900&auto=format&fit=crop" alt="Web development" />
          </div>
          <div class="feature-row__content">
            <span class="feature-row__tag">Web &amp; App Development</span>
            <h3 class="feature-row__title">Premium Digital Presence.</h3>
            <p class="feature-row__desc">We design and build stunning, high-performance websites and mobile applications that convert visitors into customers — with ongoing maintenance and cloud hosting.</p>
            <ul class="feature-checklist">
              <li>Custom Website &amp; Web App Development</li>
              <li>Mobile Application Engineering (iOS &amp; Android)</li>
              <li>UI/UX Design &amp; Brand Identity</li>
              <li>LinkedIn, Instagram &amp; Social Media Profile Generation</li>
              <li>Branding &amp; Profile Optimization</li>
              <li>Cloud Hosting, Maintenance &amp; 24/7 Support</li>
            </ul>
            <a href="/contact.html" class="btn btn--primary">Get Your Website Built</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">SEO Pricing</span>
          <h2 class="section__title">Smart SEO Packages for Every Stage.</h2>
          <p class="section__sub">From building your digital foundation to advanced lead generation — choose the plan that fits your goals.</p>
        </div>
        <div class="seo__cards js-stagger">
          <div class="seo__card">
            <div class="seo__card-name">Setup Package</div>
            <div class="seo__card-subtitle">Complete Foundation</div>
            <div class="seo__card-price">₹15,000</div>
            <div class="seo__card-period">One-Time Payment</div>
            <ul class="seo__feature-list">
              <li>LinkedIn, Instagram + social media profile generation</li>
              <li>Content for first month</li>
              <li>Branding &amp; profile optimization</li>
              <li>Bio, description &amp; keyword setup</li>
              <li>Contact &amp; lead form setup</li>
              <li>1 Month content calendar</li>
              <li>15 Social media creatives</li>
            </ul>
            <a href="/contact.html" class="btn btn--outline btn--full">Get Started</a>
          </div>
          <div class="seo__card">
            <div class="seo__card-name">Starter Package</div>
            <div class="seo__card-subtitle">Ideal for New Businesses</div>
            <div class="seo__card-price">₹8,000</div>
            <div class="seo__card-period">per month</div>
            <ul class="seo__feature-list">
              <li>Basic page creation</li>
              <li>Normal content (Articles / Posts)</li>
              <li>Post making (Social Media)</li>
              <li>Basic on-page SEO</li>
              <li>Keyword research (Basic)</li>
              <li>Google Business updates</li>
              <li>Monthly posting schedule</li>
              <li>Monthly performance summary</li>
            </ul>
            <a href="/contact.html" class="btn btn--outline btn--full">Get Started</a>
          </div>
          <div class="seo__card seo__card--popular">
            <div class="seo__card-name">Growth Package</div>
            <div class="seo__card-subtitle">Best Value for Rankings</div>
            <div class="seo__card-price" style="color:var(--accent-teal);">₹11,000</div>
            <div class="seo__card-period">per month</div>
            <ul class="seo__feature-list">
              <li>Everything in Starter Package</li>
              <li>Advanced content (Blogs / Articles)</li>
              <li>Social media posts with better design</li>
              <li>Advanced on-page SEO</li>
              <li>Keyword research (Advanced)</li>
              <li>Monthly detailed report</li>
              <li>Competitor analysis (Basic)</li>
              <li>Backlink building (Basic)</li>
              <li>Content strategy planning</li>
              <li>Local SEO optimization</li>
            </ul>
            <a href="/contact.html" class="btn btn--primary btn--full" style="background:var(--accent-teal); border-color:var(--accent-teal);">Get Started</a>
          </div>
          <div class="seo__card">
            <div class="seo__card-name">Premium Package</div>
            <div class="seo__card-subtitle">Complete Growth &amp; Leads</div>
            <div class="seo__card-price">₹14,000</div>
            <div class="seo__card-period">per month</div>
            <ul class="seo__feature-list">
              <li>Everything in Growth Package</li>
              <li>Ads generation on YouTube, Google &amp; SEO platforms</li>
              <li>Higher report (Detailed Analysis)</li>
              <li>Students interest tracking from ads</li>
              <li>Marketing suggestions</li>
              <li>Lead generation (Inbound)</li>
              <li>Conversion tracking setup</li>
              <li>Priority support &amp; consultation</li>
            </ul>
            <a href="/contact.html" class="btn btn--outline btn--full">Get Started</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">Our Approach</span>
          <h2 class="section__title">How We Grow Your Business.</h2>
        </div>
        <div class="approach__steps js-stagger">
          <div class="approach__step">
            <div class="approach__step-icon">🔍</div>
            <div class="approach__step-title">Keyword Research</div>
            <div class="approach__step-desc">Identify high-value keywords your audience is searching for</div>
          </div>
          <div class="approach__step">
            <div class="approach__step-icon">📄</div>
            <div class="approach__step-title">On-Page Optimization</div>
            <div class="approach__step-desc">Optimize every page for search engines and conversions</div>
          </div>
          <div class="approach__step">
            <div class="approach__step-icon">🔗</div>
            <div class="approach__step-title">Quality Backlinks</div>
            <div class="approach__step-desc">Build domain authority through high-quality link building</div>
          </div>
          <div class="approach__step">
            <div class="approach__step-icon">📊</div>
            <div class="approach__step-title">Content Strategy</div>
            <div class="approach__step-desc">Consistent, SEO-optimized content that builds trust and rankings</div>
          </div>
          <div class="approach__step">
            <div class="approach__step-icon">📈</div>
            <div class="approach__step-title">Ranking Growth</div>
            <div class="approach__step-desc">More traffic, more leads, and measurable business growth</div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container cta-banner__inner js-stagger">
        <div class="cta-banner__label">Let's Grow Together</div>
        <h2 class="cta-banner__title">Get a Free Digital Audit.</h2>
        <p class="cta-banner__sub">We'll analyse your current digital presence and show you exactly where the biggest growth opportunities are — for free.</p>
        <div class="cta-banner__actions">
          <a href="/contact.html" class="btn btn--primary">Request a Free Audit</a>
          <a href="/pricing.html" class="btn btn--outline" style="color:white; border-color:rgba(255,255,255,0.3);">See All Packages</a>
        </div>
        <div class="cta-banner__contact">
          <a href="tel:+916261072872" class="cta-banner__contact-item">📞 +91 62610 72872</a>
          <a href="mailto:hr.futurepilot@gmail.com" class="cta-banner__contact-item">✉️ hr.futurepilot@gmail.com</a>
        </div>
      </div>
    </section>
    `
  },

  // ── PRICING ──────────────────────────────────────────────────────────────
  'pricing.html': {
    activeHref: '/pricing.html',
    content: `
    <section class="section section--hero" style="padding-bottom:var(--space-12);">
      <div class="shape shape--blob1 shape--orange" style="width:300px;height:300px;top:-60px;right:-80px;"></div>
      <div class="shape shape--blob2 shape--teal" style="width:400px;height:400px;bottom:-100px;left:-100px;"></div>
      <div class="container js-stagger" style="position:relative;z-index:2; text-align:center;">
        <p class="hero__tagline" style="display:inline-block;">Transparent Pricing</p>
        <h1 class="hero__headline" style="font-size:3rem;">Pick the Plan That Fits Your Goals.</h1>
        <p class="hero__sub" style="max-width:600px; margin:0 auto var(--space-8);">No hidden costs. No surprises. Every plan includes our expert mentors, hands-on learning, and participation certificates.</p>
      </div>
    </section>

    <section class="section section--alt" style="padding-top:0;">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">Education Workshops</span>
          <h2 class="section__title">1-Day Workshop (4 Hours) Pricing.</h2>
          <p class="section__sub">Perfect for schools that want to give students a focused, impactful introduction to a technology field.</p>
        </div>
        <div class="pricing__cards pricing__cards--four js-stagger">
          <div class="card pricing__card" style="text-align:center;">
            <div style="font-size:2.5rem; margin-bottom:var(--space-4);">💼</div>
            <h4>Career Counselling</h4>
            <div class="pricing__price" style="color:var(--accent-orange);">₹2,000</div>
            <p style="color:var(--text-secondary); font-size:var(--text-sm);">per student</p>
            <ul class="vertical-card__list" style="text-align:left; margin-top:var(--space-4);">
              <li>Industry career roadmap</li>
              <li>Future skill assessment</li>
              <li>Digital certificate</li>
            </ul>
            <a href="/contact.html" class="btn btn--outline btn--full" style="margin-top:var(--space-6);">Book Now</a>
          </div>
          <div class="card pricing__card" style="text-align:center; border-color:var(--accent-orange);">
            <div style="font-size:2.5rem; margin-bottom:var(--space-4);">🤖</div>
            <h4>AIML / Agentic AI / Prompt Eng / WebDev</h4>
            <div class="pricing__price" style="color:var(--accent-orange);">₹4,000</div>
            <p style="color:var(--text-secondary); font-size:var(--text-sm);">per student</p>
            <ul class="vertical-card__list" style="text-align:left; margin-top:var(--space-4);">
              <li>Hands-on AI model building</li>
              <li>Prompt engineering basics</li>
              <li>Mini project deliverable</li>
              <li>Digital certificate</li>
            </ul>
            <a href="/contact.html" class="btn btn--primary btn--full" style="margin-top:var(--space-6);">Book Now</a>
          </div>
          <div class="card pricing__card" style="text-align:center;">
            <div style="font-size:2.5rem; margin-bottom:var(--space-4);">🚁</div>
            <h4>IoT, Robotronics &amp; Drone Project</h4>
            <div class="pricing__price" style="color:var(--accent-teal);">₹5,500</div>
            <p style="color:var(--text-secondary); font-size:var(--text-sm);">per student</p>
            <ul class="vertical-card__list" style="text-align:left; margin-top:var(--space-4);">
              <li>Hardware kit assembly</li>
              <li>Programming fundamentals</li>
              <li>Working project build</li>
              <li>Digital certificate</li>
            </ul>
            <a href="/contact.html" class="btn btn--outline btn--full" style="margin-top:var(--space-6);">Book Now</a>
          </div>
          <div class="card pricing__card" style="text-align:center;">
            <div style="font-size:2.5rem; margin-bottom:var(--space-4);">🚗</div>
            <h4>Automobile &amp; EV Workshop</h4>
            <div class="pricing__price">₹7,000</div>
            <p style="color:var(--text-secondary); font-size:var(--text-sm);">per student</p>
            <ul class="vertical-card__list" style="text-align:left; margin-top:var(--space-4);">
              <li>EV system exploration</li>
              <li>Automobile engineering concepts</li>
              <li>Hands-on components</li>
              <li>Digital certificate</li>
            </ul>
            <a href="/contact.html" class="btn btn--outline btn--full" style="margin-top:var(--space-6);">Book Now</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">Multi-Day Workshops</span>
          <h2 class="section__title">4-Day &amp; 7-Day Workshop Pricing.</h2>
          <p class="section__sub">For schools wanting a deeper, more comprehensive learning experience with premium outcomes.</p>
        </div>
        <div class="pricing__tier-wrap js-stagger">
          <div class="pricing__tier">
            <div class="pricing__tier-name">4-Day Workshop</div>
            <div class="pricing__tier-duration">12–15 Hours · + Certificate</div>
            <div class="pricing__tier-rows">
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🤖 AI/ML, App Dev, Cyber Security</span><span class="pricing__tier-row-price">₹8,000</span></div>
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🚁 IoT, Robotronics</span><span class="pricing__tier-row-price">₹12,000</span></div>
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🚗 EV, Automobiles</span><span class="pricing__tier-row-price">₹15,000</span></div>
            </div>
            <ul class="pricing__tier-includes">
              <li>Theory + Practical sessions across 4 days</li>
              <li>Full hands-on project development</li>
              <li>Expert mentor + doubt solving sessions</li>
              <li>Printed certificate for every student</li>
            </ul>
            <a href="/contact.html" class="btn btn--outline btn--full">Book Now</a>
          </div>
          <div class="pricing__tier pricing__tier--featured">
            <div class="pricing__tier-badge">🎁 Real Hands-On + Certificate + Prizes</div>
            <div class="pricing__tier-name">7-Day Premium Workshop</div>
            <div class="pricing__tier-duration">Full Immersion · Premium Level</div>
            <div class="pricing__tier-rows">
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🤖 AI/ML, App Dev, Cyber Security</span><span class="pricing__tier-row-price" style="color:var(--accent-orange);">₹10,000</span></div>
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🚁 IoT, Robotronics</span><span class="pricing__tier-row-price" style="color:var(--accent-orange);">₹14,000</span></div>
              <div class="pricing__tier-row"><span class="pricing__tier-row-label">🚗 EV, Automobiles</span><span class="pricing__tier-row-price" style="color:var(--accent-orange);">₹17,000</span></div>
            </div>
            <ul class="pricing__tier-includes">
              <li>Maximum depth real hands-on learning</li>
              <li>Official certificate + prizes for top students</li>
              <li>Personalized mentor guidance throughout</li>
              <li>Post-session doubt solving included</li>
            </ul>
            <a href="/contact.html" class="btn btn--primary btn--full">Book Now</a>
          </div>
          <div class="pricing__tier" style="background:var(--bg-secondary);">
            <div class="pricing__tier-name" style="color:var(--text-secondary);">Need Something Custom?</div>
            <div class="pricing__tier-duration">Custom Duration &amp; Curriculum</div>
            <div style="padding:var(--space-6) 0; color:var(--text-secondary); line-height:1.7; font-size:var(--text-sm);">
              Have a specific requirement? We can design custom workshop formats tailored to your school's schedule, student level, and learning objectives.
            </div>
            <ul class="pricing__tier-includes">
              <li>Custom curriculum design</li>
              <li>Flexible scheduling options</li>
              <li>Multi-session program packages</li>
              <li>Annual school partnership deals</li>
            </ul>
            <a href="/contact.html" class="btn btn--outline btn--full">Discuss Custom Plans</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">Digital Solutions Pricing</span>
          <h2 class="section__title">SEO &amp; Digital Marketing Packages.</h2>
          <p class="section__sub">Smart SEO solutions for more visibility, more traffic &amp; more leads — designed for educational institutions and growing businesses.</p>
        </div>
        <div class="seo__cards js-stagger">
          <div class="seo__card">
            <div class="seo__card-name">Setup Package</div>
            <div class="seo__card-subtitle">Complete Foundation Setup for a Strong Digital Start</div>
            <div class="seo__card-price">₹15,000</div>
            <div class="seo__card-period">One-Time Payment</div>
            <ul class="seo__feature-list">
              <li>LinkedIn, Instagram + other social media profile generation</li>
              <li>Content for first month</li>
              <li>Branding &amp; profile optimization</li>
              <li>Bio, description &amp; keyword setup</li>
              <li>Contact &amp; lead form setup</li>
              <li>1 Month content calendar</li>
              <li>15 Social media creatives</li>
            </ul>
            <a href="/contact.html" class="btn btn--outline btn--full">Get Started</a>
          </div>
          <div class="seo__card">
            <div class="seo__card-name">Starter Package</div>
            <div class="seo__card-subtitle">Ideal For New Businesses Building Online Presence</div>
            <div class="seo__card-price">₹8,000</div>
            <div class="seo__card-period">per month</div>
            <ul class="seo__feature-list">
              <li>Basic page creation</li>
              <li>Normal content (Articles / Posts)</li>
              <li>Post making (Social Media)</li>
              <li>Basic on-page SEO</li>
              <li>Keyword research (Basic)</li>
              <li>Google Business updates</li>
              <li>Monthly posting schedule</li>
              <li>Monthly performance summary</li>
            </ul>
            <a href="/contact.html" class="btn btn--outline btn--full">Get Started</a>
          </div>
          <div class="seo__card seo__card--popular">
            <div class="seo__card-name">Growth Package</div>
            <div class="seo__card-subtitle">Best Value for Consistent Growth &amp; Better Rankings</div>
            <div class="seo__card-price" style="color:var(--accent-teal);">₹11,000</div>
            <div class="seo__card-period">per month</div>
            <ul class="seo__feature-list">
              <li>Everything in Starter Package</li>
              <li>Advanced content (Blogs / Articles)</li>
              <li>Social media post making with better design</li>
              <li>Advanced on-page SEO</li>
              <li>Keyword research (Advanced)</li>
              <li>Monthly detailed report</li>
              <li>Competitor analysis (Basic)</li>
              <li>Backlink building (Basic)</li>
              <li>Content strategy planning</li>
              <li>Local SEO optimization</li>
            </ul>
            <a href="/contact.html" class="btn btn--primary btn--full" style="background:var(--accent-teal); border-color:var(--accent-teal);">Get Started</a>
          </div>
          <div class="seo__card">
            <div class="seo__card-name">Premium Package</div>
            <div class="seo__card-subtitle">Complete Growth, Leads &amp; Marketing Solutions</div>
            <div class="seo__card-price">₹14,000</div>
            <div class="seo__card-period">per month</div>
            <ul class="seo__feature-list">
              <li>Everything in Growth Package</li>
              <li>Ads generation on YouTube, Google &amp; other SEO platforms</li>
              <li>Higher report (Detailed Analysis)</li>
              <li>Students interest no.'s from ads clicking</li>
              <li>Marketing suggestions</li>
              <li>Lead generation (Inbound)</li>
              <li>Conversion tracking setup</li>
              <li>Priority support &amp; consultation</li>
            </ul>
            <a href="/contact.html" class="btn btn--outline btn--full">Get Started</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">Our SEO Approach</span>
          <h2 class="section__title">From Research to Revenue.</h2>
        </div>
        <div class="approach__steps js-stagger">
          <div class="approach__step"><div class="approach__step-icon">🔍</div><div class="approach__step-title">Keyword Research</div><div class="approach__step-desc">Find what your audience searches for</div></div>
          <div class="approach__step"><div class="approach__step-icon">📄</div><div class="approach__step-title">On-Page SEO</div><div class="approach__step-desc">Optimize every page for maximum visibility</div></div>
          <div class="approach__step"><div class="approach__step-icon">🔗</div><div class="approach__step-title">Quality Backlinks</div><div class="approach__step-desc">Build domain authority and trust signals</div></div>
          <div class="approach__step"><div class="approach__step-icon">📝</div><div class="approach__step-title">Content Strategy</div><div class="approach__step-desc">Consistent content that builds rankings</div></div>
          <div class="approach__step"><div class="approach__step-icon">📈</div><div class="approach__step-title">Ranking Growth</div><div class="approach__step-desc">More traffic, leads, and business growth</div></div>
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container cta-banner__inner js-stagger">
        <div class="cta-banner__label">Ready to Get Started?</div>
        <h2 class="cta-banner__title">Book Your Workshop or Package Today.</h2>
        <p class="cta-banner__sub">Reach out and we will design the perfect solution for your school or business — workshops, SEO, or both.</p>
        <div class="cta-banner__actions">
          <a href="/contact.html" class="btn btn--primary">Contact Us Now</a>
        </div>
        <div class="cta-banner__contact">
          <a href="tel:+916261072872" class="cta-banner__contact-item">📞 +91 62610 72872</a>
          <a href="mailto:hr.futurepilot@gmail.com" class="cta-banner__contact-item">✉️ hr.futurepilot@gmail.com</a>
          <a href="https://futurepilots.vercel.app" target="_blank" class="cta-banner__contact-item">🌐 futurepilots.vercel.app</a>
        </div>
      </div>
    </section>
    `
  },

  // ── TEAM ─────────────────────────────────────────────────────────────────
  'team.html': {
    activeHref: '/team.html',
    content: `
    <section class="section section--hero" style="padding-bottom:var(--space-12);">
      <div class="shape shape--blob1 shape--teal" style="width:300px;height:300px;top:-60px;left:-80px;"></div>
      <div class="container js-stagger" style="position:relative;z-index:2; text-align:center;">
        <p class="hero__tagline" style="display:inline-block; color:var(--accent-teal); background:rgba(13,148,136,0.1);">Leadership</p>
        <h1 class="hero__headline" style="font-size:3rem;">The People Behind<br/>Future Pilots.</h1>
        <p class="hero__sub" style="max-width:560px; margin:0 auto;">Driven by passion for education, guided by deep industry experience, and united by the belief that every student deserves access to future-ready skills.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div id="team-grid" class="team__grid js-stagger"></div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">Our Values</span>
          <h2 class="section__title">What Drives Everything We Do.</h2>
        </div>
        <div class="grid-3 js-stagger">
          <div class="card">
            <div style="font-size:2.5rem; margin-bottom:var(--space-4);">💡</div>
            <h3 style="font-weight:700; margin-bottom:var(--space-3);">Innovation First</h3>
            <p style="color:var(--text-secondary); font-size:var(--text-sm); line-height:1.7;">We believe every student has the potential to innovate. Our programs are designed to unlock that potential through hands-on learning.</p>
          </div>
          <div class="card">
            <div style="font-size:2.5rem; margin-bottom:var(--space-4);">🤝</div>
            <h3 style="font-weight:700; margin-bottom:var(--space-3);">Zero Hassle Promise</h3>
            <p style="color:var(--text-secondary); font-size:var(--text-sm); line-height:1.7;">We handle all the logistics — equipment, curriculum, mentors, and setup. Schools simply provide the space and enthusiastic students.</p>
          </div>
          <div class="card">
            <div style="font-size:2.5rem; margin-bottom:var(--space-4);">📈</div>
            <h3 style="font-weight:700; margin-bottom:var(--space-3);">Results-Driven</h3>
            <p style="color:var(--text-secondary); font-size:var(--text-sm); line-height:1.7;">Every program is designed to produce measurable outcomes — students leave with real skills, real projects, and real certificates.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header js-stagger">
          <span class="section__label">Testimonials</span>
          <h2 class="section__title">What Educators Say About Our Team.</h2>
        </div>
        <div id="testimonials-track" class="grid-2 js-stagger"></div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container cta-banner__inner js-stagger">
        <div class="cta-banner__label">Join the Mission</div>
        <h2 class="cta-banner__title">Want to Work With Future Pilots?</h2>
        <p class="cta-banner__sub">We are always looking for passionate educators, technologists, and innovators to join our growing team of mentors.</p>
        <div class="cta-banner__actions">
          <a href="mailto:hr.futurepilot@gmail.com" class="btn btn--primary">Send Your Resume</a>
          <a href="/contact.html" class="btn btn--outline" style="color:white; border-color:rgba(255,255,255,0.3);">Get In Touch</a>
        </div>
      </div>
    </section>
    `
  },

  // ── TESTIMONIALS ─────────────────────────────────────────────────────────
  'testimonials.html': {
    activeHref: '/testimonials.html',
    content: `
    <section class="section section--hero" style="padding-bottom:var(--space-12);">
      <div class="container js-stagger" style="text-align:center;">
        <p class="hero__tagline" style="display:inline-block; color:var(--accent-orange); background:rgba(249,115,22,0.1);">Success Stories</p>
        <h1 class="hero__headline" style="font-size:3rem;">Trusted by Leading<br/>Schools Across India.</h1>
        <p class="hero__sub" style="max-width:560px; margin:0 auto;">Real feedback from principals, teachers, and schools who have partnered with Future Pilots to transform their students' learning experience.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div id="testimonials-track" class="grid-2 js-stagger"></div>
      </div>
    </section>

    <section class="trusted-by">
      <div class="container">
        <p class="trusted-by__label">Schools We've Partnered With</p>
        <div class="trusted-by__logos">
          <div class="trusted-by__logo-item"><span class="trusted-by__logo-icon">🏛️</span><span class="trusted-by__logo-name">CBSE Schools</span></div>
          <div class="trusted-by__logo-item"><span class="trusted-by__logo-icon">📚</span><span class="trusted-by__logo-name">ICSE Schools</span></div>
          <div class="trusted-by__logo-item"><span class="trusted-by__logo-icon">🎓</span><span class="trusted-by__logo-name">State Board Schools</span></div>
          <div class="trusted-by__logo-item"><span class="trusted-by__logo-icon">📐</span><span class="trusted-by__logo-name">Coaching Institutes</span></div>
          <div class="trusted-by__logo-item"><span class="trusted-by__logo-icon">🌐</span><span class="trusted-by__logo-name">Learning Centers</span></div>
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container cta-banner__inner js-stagger">
        <div class="cta-banner__label">Join the Community</div>
        <h2 class="cta-banner__title">Be the Next Success Story.</h2>
        <p class="cta-banner__sub">Join 25+ schools who have already partnered with Future Pilots. Let's bring the future to your students.</p>
        <div class="cta-banner__actions">
          <a href="/contact.html" class="btn btn--primary">Book a Workshop</a>
          <a href="/education.html" class="btn btn--outline" style="color:white; border-color:rgba(255,255,255,0.3);">Explore Programs</a>
        </div>
      </div>
    </section>
    `
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  'faq.html': {
    activeHref: '/faq.html',
    content: `
    <section class="section section--hero" style="padding-bottom:var(--space-12);">
      <div class="shape shape--blob2 shape--teal" style="width:300px;height:300px;top:-60px;right:-80px;"></div>
      <div class="container js-stagger" style="text-align:center;">
        <p class="hero__tagline" style="display:inline-block; color:var(--accent-teal); background:rgba(13,148,136,0.1);">Support</p>
        <h1 class="hero__headline" style="font-size:3rem;">Frequently Asked Questions.</h1>
        <p class="hero__sub" style="max-width:560px; margin:0 auto;">Everything you need to know about our workshops, pricing, and partnership process. Can't find your answer? Contact us directly.</p>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width:800px;">
        <div id="faq-list" class="faq__list js-stagger"></div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container" style="max-width:700px; text-align:center;">
        <div class="js-stagger">
          <h2 class="section__title" style="margin-bottom:var(--space-4);">Still Have Questions?</h2>
          <p style="color:var(--text-secondary); margin-bottom:var(--space-8);">Our team is available Monday–Saturday, 9am–7pm. We would love to help you design the perfect workshop experience for your students.</p>
          <div style="display:flex; justify-content:center; gap:var(--space-4); flex-wrap:wrap;">
            <a href="tel:+916261072872" class="btn btn--primary">📞 Call Us: +91 62610 72872</a>
            <a href="mailto:hr.futurepilot@gmail.com" class="btn btn--outline">✉️ Email Us</a>
          </div>
        </div>
      </div>
    </section>
    `
  },

  // ── CONTACT ──────────────────────────────────────────────────────────────
  'contact.html': {
    activeHref: '/contact.html',
    content: `
    <section class="section section--hero" style="padding-bottom:var(--space-12);">
      <div class="shape shape--blob1 shape--orange" style="width:350px;height:350px;top:-80px;left:-100px;"></div>
      <div class="shape shape--blob2 shape--teal" style="width:400px;height:400px;bottom:-100px;right:-100px;"></div>
      <div class="container js-stagger" style="position:relative;z-index:2;">
        <p class="hero__tagline">Get In Touch</p>
        <h1 class="hero__headline" style="font-size:3rem;">Book a Consultation.</h1>
        <p class="hero__sub" style="max-width:560px;">Ready to bring Future Pilots to your school? Fill out the form and we'll get back to you within 24 hours to schedule a free consultation.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid-2 js-stagger" style="gap:var(--space-12);">
          <!-- Contact Form -->
          <div>
            <form class="card" id="contact-form" style="position:relative; z-index:2;">
              <h2 style="font-size:var(--text-2xl); font-weight:800; margin-bottom:var(--space-2);">Send us a Message</h2>
              <p style="color:var(--text-secondary); margin-bottom:var(--space-6); font-size:var(--text-sm);">We typically respond within 24 hours on business days.</p>
              <div style="margin-bottom:18px;">
                <label style="display:block; margin-bottom:8px; font-weight:600; font-size:var(--text-sm); color:var(--text-secondary);">Full Name *</label>
                <input type="text" style="width:100%; padding:14px; border:1.5px solid var(--border-strong); border-radius:12px; font-family:inherit; font-size:var(--text-base); outline:none; transition:border-color 0.2s;" required placeholder="Enter your full name">
              </div>
              <div style="margin-bottom:18px;">
                <label style="display:block; margin-bottom:8px; font-weight:600; font-size:var(--text-sm); color:var(--text-secondary);">School / Institution Name *</label>
                <input type="text" style="width:100%; padding:14px; border:1.5px solid var(--border-strong); border-radius:12px; font-family:inherit; font-size:var(--text-base); outline:none; transition:border-color 0.2s;" required placeholder="Your school or institution">
              </div>
              <div style="margin-bottom:18px;">
                <label style="display:block; margin-bottom:8px; font-weight:600; font-size:var(--text-sm); color:var(--text-secondary);">Work Email *</label>
                <input type="email" style="width:100%; padding:14px; border:1.5px solid var(--border-strong); border-radius:12px; font-family:inherit; font-size:var(--text-base); outline:none; transition:border-color 0.2s;" required placeholder="your@email.com">
              </div>
              <div style="margin-bottom:18px;">
                <label style="display:block; margin-bottom:8px; font-weight:600; font-size:var(--text-sm); color:var(--text-secondary);">Phone Number *</label>
                <input type="tel" style="width:100%; padding:14px; border:1.5px solid var(--border-strong); border-radius:12px; font-family:inherit; font-size:var(--text-base); outline:none; transition:border-color 0.2s;" required placeholder="+91 XXXXX XXXXX">
              </div>
              <div style="margin-bottom:18px;">
                <label style="display:block; margin-bottom:8px; font-weight:600; font-size:var(--text-sm); color:var(--text-secondary);">Workshop Interest</label>
                <select style="width:100%; padding:14px; border:1.5px solid var(--border-strong); border-radius:12px; font-family:inherit; font-size:var(--text-base); outline:none; background:white; appearance:none;">
                  <option value="">Select a workshop track...</option>
                  <option>AI/ML &amp; Agentic AI</option>
                  <option>Robotics &amp; IoT</option>
                  <option>Drone Technology</option>
                  <option>Electric Vehicle &amp; Automobile</option>
                  <option>Cyber Security</option>
                  <option>Web &amp; App Development</option>
                  <option>Career Counselling</option>
                  <option>SEO &amp; Digital Marketing</option>
                  <option>Multiple / Custom Workshop</option>
                </select>
              </div>
              <div style="margin-bottom:24px;">
                <label style="display:block; margin-bottom:8px; font-weight:600; font-size:var(--text-sm); color:var(--text-secondary);">Message</label>
                <textarea rows="4" style="width:100%; padding:14px; border:1.5px solid var(--border-strong); border-radius:12px; font-family:inherit; font-size:var(--text-base); outline:none; resize:vertical;" placeholder="Tell us about your school, number of students, preferred dates..."></textarea>
              </div>
              <button type="submit" class="btn btn--primary btn--full" style="font-size:var(--text-base);">Send Enquiry →</button>
            </form>
          </div>

          <!-- Contact Details -->
          <div style="display:flex; flex-direction:column; gap:var(--space-6);">
            <div class="card" style="border-color:rgba(249,115,22,0.2);">
              <div style="font-size:2rem; margin-bottom:var(--space-3);">📞</div>
              <h3 style="font-weight:700; margin-bottom:var(--space-2);">Call Us Directly</h3>
              <a href="tel:+916261072872" style="font-size:var(--text-xl); font-weight:800; color:var(--accent-orange); text-decoration:none;">+91 62610 72872</a>
              <p style="color:var(--text-secondary); font-size:var(--text-sm); margin-top:var(--space-2);">Monday – Saturday, 9am – 7pm</p>
            </div>
            <div class="card">
              <div style="font-size:2rem; margin-bottom:var(--space-3);">✉️</div>
              <h3 style="font-weight:700; margin-bottom:var(--space-2);">Email Us</h3>
              <a href="mailto:hr.futurepilot@gmail.com" style="font-size:var(--text-base); font-weight:700; color:var(--accent-teal); text-decoration:none;">hr.futurepilot@gmail.com</a>
              <p style="color:var(--text-secondary); font-size:var(--text-sm); margin-top:var(--space-2);">We respond within 24 hours</p>
            </div>
            <div class="card">
              <div style="font-size:2rem; margin-bottom:var(--space-3);">🌐</div>
              <h3 style="font-weight:700; margin-bottom:var(--space-2);">Visit Our Website</h3>
              <a href="https://futurepilots.vercel.app" target="_blank" style="font-size:var(--text-base); font-weight:700; color:var(--accent-purple); text-decoration:none;">futurepilots.vercel.app</a>
            </div>
            <div class="card" style="background:var(--bg-dark); border:none;">
              <h3 style="color:white; font-weight:700; margin-bottom:var(--space-3);">Quick Workshop Facts</h3>
              <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:var(--space-2);">
                <li style="color:rgba(255,255,255,0.7); font-size:var(--text-sm);">✓ For Classes 8–12</li>
                <li style="color:rgba(255,255,255,0.7); font-size:var(--text-sm);">✓ CBSE, ICSE &amp; State Board Schools</li>
                <li style="color:rgba(255,255,255,0.7); font-size:var(--text-sm);">✓ Certificate + Prizes included</li>
                <li style="color:rgba(255,255,255,0.7); font-size:var(--text-sm);">✓ Zero operational hassle for school</li>
                <li style="color:rgba(255,255,255,0.7); font-size:var(--text-sm);">✓ Free consultation available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-banner" style="margin-top:var(--space-16);">
      <div class="container cta-banner__inner js-stagger">
        <div class="cta-banner__label">Transforming Students Into Innovators</div>
        <h2 class="cta-banner__title">Let's Build the Future Together!</h2>
        <div class="cta-banner__contact">
          <a href="tel:+916261072872" class="cta-banner__contact-item">📞 +91 62610 72872</a>
          <a href="mailto:hr.futurepilot@gmail.com" class="cta-banner__contact-item">✉️ hr.futurepilot@gmail.com</a>
          <a href="https://futurepilots.vercel.app" target="_blank" class="cta-banner__contact-item">🌐 futurepilots.vercel.app</a>
        </div>
      </div>
    </section>
    `
  }
};

// ── GENERATE ALL PAGES ───────────────────────────────────────────────────────

for (const [filename, pageConfig] of Object.entries(pages)) {
  const shell = buildShell(pageConfig.activeHref, beforeMain, afterMain);
  const finalHtml = shell + '\n' + pageConfig.content + '\n' + afterMain;
  fs.writeFileSync(path.join(__dirname, filename), finalHtml);
  console.log(`✓ Generated ${filename}`);
}

console.log('\n🚀 All pages generated successfully!');
