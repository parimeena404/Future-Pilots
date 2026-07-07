# Future Pilots

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg?style=for-the-badge)](https://future-pilots.vercel.app/)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Vite](https://img.shields.io/badge/Build%20Tool-Vite-646CFF.svg)](https://vite.dev/)

Future Pilots delivers premium hands-on STEM workshops and digital marketing solutions for schools, coaching institutes, and businesses across India. This repository contains the source code for the **Future Pilots** official website.

The website features a highly interactive and responsive design, complete with custom cursor effects, smooth scrolling powered by **Lenis**, and micro-animations implemented using **GSAP (GreenSock Animation Platform)**.

---

## 🚀 Key Features

- **STEM Workshops (Education):** Dedicated sections detailing workshops in AI/ML, Robotics, EV Engineering, Cyber Security, and more.
- **Digital Solutions (Marketing):** Premium marketing services including Branding, SEO, Social Media management, and Custom Web Development.
- **Premium Aesthetics:** Sleek dark-themed UI, custom-designed grid patterns, glowing color orbs, and glassmorphic panels.
- **Interactive Experiences:** Custom magnetic pointer cursor, scroll progress tracking, smooth inertial scrolling, dynamic pricing plan toggle tabs, and smooth layout entry transitions.
- **Static Page Generator:** A custom JavaScript page builder script (`generate_pages.js`) that synchronizes the layout shell across all subpages.

---

## 📁 Repository Structure

```
├── public/                 # Static assets (images, logos, etc.)
├── src/
│   ├── js/                 # Module components for UI interaction
│   │   ├── animations.js   # GSAP trigger timelines and scroll-based effects
│   │   ├── loader.js       # Preloader / page entry transition triggers
│   │   ├── sections.js     # Rendering helper scripts for dynamic contents
│   │   ├── sidebar.js      # Responsive navigation sidebar logic
│   │   └── smooth-scroll.js# Lenis setup for inertial scrolling
│   ├── styles/
│   │   └── main.css        # Unified design tokens & Tailwind-like CSS framework
│   └── main.js             # Entry point coordinates custom cursor, scroll bars, header scroll effects
├── index.html              # Homepage & main template shell for the page generator
├── generate_pages.js       # Static build script to generate about, education, digital, pricing, contact, etc.
├── vite.config.js          # Vite build configuration
├── package.json            # Scripts & project dependencies
└── LICENSE                 # MIT License details
```

---

## 🛠️ Getting Started

### Prerequisites

You will need [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/parimeena404/Future-Pilots.git
   cd Future-Pilots
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the Vite development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Editing Pages & Generating Output

The project uses `index.html` as the master template shell containing the header, footer, and navigation. 
To modify sub-pages:
1. Open [generate_pages.js](generate_pages.js).
2. Locate the content definitions inside the `pages` object.
3. Edit the HTML template strings for the respective page (e.g., `about.html`, `education.html`, etc.).
4. Run the generator script to compile the changes:
   ```bash
   node generate_pages.js
   ```

### Building for Production

To create a production-optimized build:
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` directory.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
