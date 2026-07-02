// ============================================
// LOADER — Branded loading screen
// Paper-plane draws itself, real progress %
// ============================================

export class Loader {
  constructor() {
    this.loader = document.getElementById('loader');
    this.progressEl = this.loader?.querySelector('.loader__progress');
    this.assetsTotal = 0;
    this.assetsLoaded = 0;
  }

  start() {
    if (!this.loader) return Promise.resolve();

    // Count assets to track (images, fonts, etc.)
    const images = document.querySelectorAll('img[src]');
    const fonts = document.fonts;
    this.assetsTotal = images.length + 3; // +3 for fonts

    // Track font loading
    if (fonts && fonts.ready) {
      fonts.ready.then(() => {
        this.assetsLoaded += 3;
        this.updateProgress();
      });
    } else {
      this.assetsLoaded += 3;
    }

    // Track image loading
    images.forEach(img => {
      if (img.complete) {
        this.assetsLoaded++;
        this.updateProgress();
      } else {
        img.addEventListener('load', () => {
          this.assetsLoaded++;
          this.updateProgress();
        });
        img.addEventListener('error', () => {
          this.assetsLoaded++;
          this.updateProgress();
        });
      }
    });

    // Minimum display time + max wait time
    return new Promise(resolve => {
      const minTime = 800;
      const maxTime = 2500;
      const startTime = Date.now();

      const checkDone = () => {
        const elapsed = Date.now() - startTime;
        const progress = this.assetsTotal > 0 
          ? this.assetsLoaded / this.assetsTotal 
          : 1;

        if ((progress >= 1 && elapsed >= minTime) || elapsed >= maxTime) {
          this.updateProgressDisplay(100);
          setTimeout(() => {
            this.hide();
            resolve();
          }, 200);
        } else {
          requestAnimationFrame(checkDone);
        }
      };

      requestAnimationFrame(checkDone);
    });
  }

  updateProgress() {
    const pct = this.assetsTotal > 0 
      ? Math.round((this.assetsLoaded / this.assetsTotal) * 100) 
      : 100;
    this.updateProgressDisplay(pct);
  }

  updateProgressDisplay(pct) {
    if (this.progressEl) {
      this.progressEl.textContent = pct + '%';
    }
  }

  hide() {
    if (this.loader) {
      this.loader.classList.add('is-hidden');
      // Remove from DOM after transition
      setTimeout(() => {
        this.loader.remove();
      }, 700);
    }
  }
}
