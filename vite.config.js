import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        education: resolve(__dirname, 'education.html'),
        digital: resolve(__dirname, 'digital.html'),
        how_we_teach: resolve(__dirname, 'how-we-teach.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        team: resolve(__dirname, 'team.html'),
        testimonials: resolve(__dirname, 'testimonials.html'),
        faq: resolve(__dirname, 'faq.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
