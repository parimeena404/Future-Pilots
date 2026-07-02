import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the clean index.html shell
const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

const mainStartRegex = /<main id="main-content" class="main-content">/;
const mainStartIndex = indexHtml.search(mainStartRegex) + '<main id="main-content" class="main-content">'.length;
const mainEndIndex = indexHtml.indexOf('</main>', mainStartIndex);

const beforeMain = indexHtml.substring(0, mainStartIndex);
const afterMain = indexHtml.substring(mainEndIndex);

const pages = {
  'index.html': `
    <!-- Hero -->
    <section id="hero" class="section section--hero">
      <!-- Organic Blobs -->
      <div class="shape shape--blob1 shape--orange" style="width:300px; height:300px; top:-50px; left:-100px;"></div>
      <div class="shape shape--blob2 shape--teal" style="width:400px; height:400px; bottom:-100px; right:-100px;"></div>
      
      <div class="container hero__content js-stagger">
        <div class="hero__text">
          <p class="hero__tagline">Premium EdTech</p>
          <h1 class="hero__headline">Empowering the Next Generation of Innovators.</h1>
          <p class="hero__sub">Experience world-class hands-on workshops in AI/ML, Robotics, and Cyber Security designed to bridge the gap between classroom theory and industry reality.</p>
          <div class="hero__ctas">
            <a href="/contact.html" class="btn btn--primary">Book a Consultation</a>
            <a href="/education.html" class="btn btn--outline">Discover Programs</a>
          </div>
        </div>
        <div class="hero__visual" style="border-radius:24px; overflow:hidden; box-shadow:var(--shadow-lg);">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" alt="Students in modern classroom" style="width:100%; height:100%; object-fit:cover; animation:none;" />
        </div>
      </div>
    </section>

    <!-- Trust Bar -->
    <section id="trust-bar" class="section section--trust" style="background:var(--bg-secondary);">
      <div class="container trust__stats js-stagger">
        <div class="trust__stat">
          <span class="trust__stat-number" style="color:var(--accent-orange);">500+</span>
          <span class="trust__stat-label">Students Trained</span>
        </div>
        <div class="trust__stat">
          <span class="trust__stat-number" style="color:var(--text-primary);">50+</span>
          <span class="trust__stat-label">Workshops Delivered</span>
        </div>
        <div class="trust__stat">
          <span class="trust__stat-number" style="color:var(--accent-teal);">25+</span>
          <span class="trust__stat-label">Partner Schools</span>
        </div>
        <div class="trust__stat">
          <span class="trust__stat-number" style="color:var(--text-primary);">15+</span>
          <span class="trust__stat-label">Curriculum Tracks</span>
        </div>
      </div>
    </section>
  `,
  'about.html': `
    <section class="section">
      <div class="shape shape--blob2 shape--purple" style="width:500px; height:500px; top:-10%; right:-10%;"></div>
      <div class="container section__header js-stagger">
        <p class="section__label">About Future Pilots</p>
        <h1 class="section__title">Shaping the Future of Education</h1>
      </div>
      <div class="container grid-2 js-stagger">
        <div class="card">
          <h3>Our Vision</h3>
          <p>We believe in shifting education from memorisation toward curiosity, experimentation, and real-world application. Our vision is to introduce emerging technologies, innovation-driven thinking, and industry-relevant skills at an early stage.</p>
        </div>
        <div class="card">
          <h3>Our Mission</h3>
          <p>To deliver engaging, hands-on, experiential learning that exposes students to emerging technologies, innovation, entrepreneurship, leadership, and future career pathways — building true innovators.</p>
        </div>
      </div>
    </section>
  `,
  'education.html': `
    <section class="section section--alt">
      <div class="shape shape--blob1 shape--teal" style="width:300px; height:300px; top:10%; left:-5%;"></div>
      <div class="container section__header js-stagger">
        <p class="section__label">Education Vertical</p>
        <h1 class="section__title">Future Pilots Education</h1>
        <p class="section__sub">Premium school and coaching workshops bridging classroom theory and real-world industry skills.</p>
      </div>
      <div class="container grid-2 js-stagger">
        <div class="card">
          <h3 class="vertical-card__title">Core Programs</h3>
          <ul class="vertical-card__list">
            <li>AI/ML & Agentic AI</li>
            <li>Prompt Engineering</li>
            <li>Web & Application Architecture</li>
            <li>Cyber Security Fundamentals</li>
            <li>Robotics & Internet of Things</li>
            <li>Drone Technology</li>
            <li>Electric Vehicle Systems</li>
          </ul>
        </div>
        <div class="card" style="padding:0; border:none; background:transparent; box-shadow:none;">
           <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Education Excellence" style="width:100%; border-radius:24px; margin-bottom:24px; box-shadow:var(--shadow-md);"/>
           <a href="/pricing.html" class="btn btn--primary btn--full">View Education Plans</a>
        </div>
      </div>
    </section>
  `,
  'digital.html': `
    <section class="section">
      <div class="container section__header js-stagger">
        <p class="section__label">Digital Solutions</p>
        <h1 class="section__title">Future Pilots Digital</h1>
        <p class="section__sub">Enterprise-grade website development, SEO strategies, and AI business automation.</p>
      </div>
      <div class="container grid-2 js-stagger">
        <div class="card">
          <h3 class="vertical-card__title">Digital Services</h3>
          <ul class="vertical-card__list">
            <li>Website & Web App Development</li>
            <li>Mobile Application Engineering</li>
            <li>Advanced SEO & Digital Marketing</li>
            <li>AI Automation & Conversational Chatbots</li>
            <li>Voice Agent Integrations</li>
            <li>CRM Workflow Automation</li>
            <li>Cloud Hosting & Maintenance</li>
          </ul>
        </div>
        <div class="card" style="padding:0; border:none; background:transparent; box-shadow:none;">
           <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" alt="Digital Team" style="width:100%; border-radius:24px; margin-bottom:24px; box-shadow:var(--shadow-md);"/>
           <a href="/pricing.html" class="btn btn--primary btn--full">View Service Packages</a>
        </div>
      </div>
    </section>
  `,
  'pricing.html': `
    <section class="section section--alt">
      <div class="shape shape--blob2 shape--orange" style="width:400px; height:400px; top:-100px; right:-100px;"></div>
      <div class="container section__header js-stagger">
        <p class="section__label">Investment</p>
        <h1 class="section__title">Transparent, Value-Driven Plans</h1>
      </div>
      <div class="container js-stagger">
        <div class="pricing__tabs">
          <button class="pricing__tab active" data-tab="education">Education</button>
          <button class="pricing__tab" data-tab="digital">Digital Solutions</button>
        </div>
        <div class="pricing__panels">
          <div class="pricing__panel active" data-panel="education">
            <h3 class="pricing__category-title">Immersive 4-Day Workshop (12-15 hrs)</h3>
            <div class="pricing__cards">
              <div class="card pricing__card">
                <h4>AI/ML & Software</h4>
                <div class="pricing__price">₹8,000</div>
                <p style="color:var(--text-secondary);">per student</p>
              </div>
              <div class="card pricing__card">
                <h4>Hardware & Robotics</h4>
                <div class="pricing__price">₹12,000</div>
                <p style="color:var(--text-secondary);">per student</p>
              </div>
              <div class="card pricing__card">
                <h4>Automobile & EV</h4>
                <div class="pricing__price">₹15,000</div>
                <p style="color:var(--text-secondary);">per student</p>
              </div>
            </div>
          </div>
          <div class="pricing__panel" data-panel="digital">
             <h3 class="pricing__category-title">Growth & SEO Packages</h3>
             <div class="pricing__cards pricing__cards--four">
               <div class="card pricing__card">
                 <h4>Setup Package</h4>
                 <div class="pricing__price">₹15,000</div>
                 <p style="color:var(--text-secondary);">One-Time</p>
               </div>
               <div class="card pricing__card">
                 <h4>Starter Package</h4>
                 <div class="pricing__price">₹8,000</div>
                 <p style="color:var(--text-secondary);">per month</p>
               </div>
               <div class="card pricing__card card--accent-teal" style="border-color:var(--accent-teal);">
                 <h4>Growth Package</h4>
                 <div class="pricing__price" style="color:var(--accent-teal);">₹11,000</div>
                 <p style="color:var(--text-secondary);">per month</p>
               </div>
               <div class="card pricing__card">
                 <h4>Premium Package</h4>
                 <div class="pricing__price">₹14,000</div>
                 <p style="color:var(--text-secondary);">per month</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  `,
  'team.html': `
    <section class="section">
      <div class="container section__header js-stagger">
        <p class="section__label">Leadership</p>
        <h1 class="section__title">The People Behind Future Pilots</h1>
      </div>
      <div class="container js-stagger">
        <div class="team__grid" id="team-grid"></div>
      </div>
    </section>
  `,
  'testimonials.html': `
    <section class="section section--alt">
      <div class="container section__header js-stagger">
        <p class="section__label">Success Stories</p>
        <h1 class="section__title">Trusted by Leading Educators</h1>
      </div>
      <div class="container js-stagger">
        <div class="grid-2" id="testimonials-track"></div>
      </div>
    </section>
  `,
  'faq.html': `
    <section class="section">
      <div class="shape shape--blob1 shape--teal" style="width:200px; height:200px; bottom:10%; right:5%;"></div>
      <div class="container section__header js-stagger">
        <p class="section__label">Support</p>
        <h1 class="section__title">Frequently Asked Questions</h1>
      </div>
      <div class="container js-stagger" style="max-width:800px;">
        <div class="faq__list" id="faq-list"></div>
      </div>
    </section>
  `,
  'contact.html': `
    <section class="section section--alt">
      <div class="shape shape--blob2 shape--orange" style="width:600px; height:600px; top:-200px; left:-200px;"></div>
      <div class="container section__header js-stagger">
        <p class="section__label">Get in Touch</p>
        <h1 class="section__title">Book a Consultation</h1>
      </div>
      <div class="container js-stagger" style="max-width:600px;">
        <form class="card" id="contact-form" style="position:relative; z-index:2; background:rgba(255,255,255,0.95); backdrop-filter:blur(20px);">
          <div style="margin-bottom:20px;">
            <label style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-secondary);">Full Name</label>
            <input type="text" style="width:100%; padding:14px; border:1px solid var(--border-strong); border-radius:12px;" required>
          </div>
          <div style="margin-bottom:20px;">
            <label style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-secondary);">Work Email</label>
            <input type="email" style="width:100%; padding:14px; border:1px solid var(--border-strong); border-radius:12px;" required>
          </div>
          <div style="margin-bottom:24px;">
            <label style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-secondary);">Phone Number</label>
            <input type="tel" style="width:100%; padding:14px; border:1px solid var(--border-strong); border-radius:12px;">
          </div>
          <button type="submit" class="btn btn--primary btn--full">Send Enquiry</button>
        </form>
      </div>
    </section>
  `
};

// Also write index.html because we changed the hero inside the pages map
for (const [filename, content] of Object.entries(pages)) {
  let pageBefore = beforeMain;
  pageBefore = pageBefore.replace('class="header__link active"', 'class="header__link"');
  if (filename === 'index.html') {
      pageBefore = pageBefore.replace('href="/" class="header__link"', 'href="/" class="header__link active"');
  } else {
      pageBefore = pageBefore.replace(`href="/${filename}" class="header__link"`, `href="/${filename}" class="header__link active"`);
  }
  
  const finalHtml = pageBefore + '\n' + content + '\n' + afterMain;
  fs.writeFileSync(path.join(__dirname, filename), finalHtml);
  console.log(`Generated ${filename}`);
}
