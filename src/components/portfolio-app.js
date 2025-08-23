import { LitElement, html, css } from 'lit';

export class PortfolioApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      position: relative;
    }

    .scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--current-primary), var(--current-secondary));
      z-index: 1000;
      transition: width 0.1s ease-out;
    }

    .navigation {
      position: fixed;
      top: 50%;
      right: 2rem;
      transform: translateY(-50%);
      z-index: 100;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .nav-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--current-text-secondary);
      cursor: pointer;
      transition: all 0.3s ease;
      opacity: 0.5;
    }

    .nav-dot.active {
      background: var(--current-primary);
      opacity: 1;
      transform: scale(1.2);
    }

    .nav-dot:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }

    .section {
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }

    .floating-icons {
      position: fixed;
      top: 2rem;
      left: 2rem;
      z-index: 100;
      display: flex;
      gap: 1rem;
    }

    .social-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--current-white);
      box-shadow: var(--shadow-md);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      color: var(--current-primary);
    }

    .social-icon:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    @media (max-width: 768px) {
      .navigation {
        right: 1rem;
      }
      
      .floating-icons {
        left: 1rem;
        top: 1rem;
      }
      
      .social-icon {
        width: 35px;
        height: 35px;
      }
    }
  `;

  static properties = {
    currentSection: { type: Number },
    scrollProgress: { type: Number }
  };

  constructor() {
    super();
    this.currentSection = 0;
    this.scrollProgress = 0;
    this.sections = ['profile', 'projects', 'education', 'experience', 'certifications', 'contact'];
  }

  firstUpdated() {
    this.setupScrollListener();
    this.updateThemeWithTransition();
    this.initializeLoadAnimations();
  }

  initializeLoadAnimations() {
    // Animate sections on initial load
    const sections = this.shadowRoot.querySelectorAll('.section');
    sections.forEach((section, index) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = 'all 1s cubic-bezier(0.23, 1, 0.32, 1)';
      
      setTimeout(() => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, index * 100);
    });

    // Animate navigation dots
    const navDots = this.shadowRoot.querySelectorAll('.nav-dot');
    navDots.forEach((dot, index) => {
      dot.style.opacity = '0';
      dot.style.transform = 'scale(0)';
      setTimeout(() => {
        dot.style.transition = 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
        dot.style.opacity = '1';
        dot.style.transform = 'scale(1)';
      }, 500 + index * 100);
    });

    // Animate floating icons
    const floatingIcons = this.shadowRoot.querySelectorAll('.social-icon');
    floatingIcons.forEach((icon, index) => {
      icon.style.opacity = '0';
      icon.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        icon.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        icon.style.opacity = '1';
        icon.style.transform = 'translateY(0)';
      }, 800 + index * 150);
    });
  }

  setupScrollListener() {
    let ticking = false;
    let lastScrollY = 0;
    
    const updateScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const scrollDelta = Math.abs(scrollTop - lastScrollY);
      
      this.scrollProgress = scrollPercent;
      
      // Smooth theme transitions with intersection observer
      const sectionElements = this.shadowRoot.querySelectorAll('.section');
      sectionElements.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(sectionCenter - viewportHeight / 2);
        
        // Calculate opacity based on distance from viewport center
        const maxDistance = viewportHeight / 2;
        const opacity = Math.max(0.3, 1 - (distanceFromCenter / maxDistance));
        
        // Apply smooth opacity transition
        // section.style.opacity = opacity;
        
        // Trigger theme change when section is in center viewport
        if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
          if (this.currentSection !== index) {
            this.currentSection = index;
            this.updateThemeWithTransition();
          }
        }
      });
      
      // Add parallax effect for background elements
      this.updateParallaxElements(scrollTop, scrollDelta);
      
      lastScrollY = scrollTop;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    // Enhanced scroll with momentum detection
    let scrollTimeout;
    const onScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.handleScrollEnd();
      }, 150);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScrollEnd);
    window.addEventListener('resize', onScroll);
  }

  updateThemeWithTransition() {
    const themes = ['theme-linkedin', 'theme-github', 'theme-vit', 'theme-ptc', 'theme-coursera', 'theme-linkedin'];
    const currentTheme = themes[this.currentSection] || 'theme-linkedin';
    
    // Add transition class before changing theme
    document.body.classList.add('theme-transitioning');
    
    // Change theme with a slight delay for smoother transition
    setTimeout(() => {
      document.body.className = `${currentTheme} theme-transitioning`;
    }, 50);
    
    // Remove transition class after transition completes
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, 1200);
    
    // Update scroll progress bar with theme colors
    const progressBar = this.shadowRoot.querySelector('.scroll-progress');
    if (progressBar) {
      progressBar.style.width = `${this.scrollProgress}%`;
      progressBar.style.transition = 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
    }
    
    // Trigger custom events for sections to update their animations
    this.dispatchEvent(new CustomEvent('theme-changed', {
      detail: { theme: currentTheme, section: this.currentSection }
    }));
  }

  updateParallaxElements(scrollTop, scrollDelta) {
    const sections = this.shadowRoot.querySelectorAll('.section');
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const speed = 0.5 + (index * 0.1);
      const yPos = -(scrollTop * speed);
      
      // Apply parallax to background elements
      const bgElements = section.querySelectorAll('.floating-shapes, .floating-code, .floating-academic');
      bgElements.forEach(element => {
        if (element) {
          element.style.transform = `translateY(${yPos}px)`;
        }
      });
    });
  }

  handleScrollEnd() {
    // Snap to section or apply final animations when scrolling stops
    const sections = this.shadowRoot.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    });
  }

  scrollToSection(index) {
    const section = this.shadowRoot.querySelectorAll('.section')[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    return html`
      <scroll-effects></scroll-effects>
      <div class="scroll-progress" style="width: ${this.scrollProgress}%"></div>
      
      <div class="floating-icons">
        <a href="mailto:sandesh.bagmare@gmail.com" class="social-icon" title="Email">
          📧
        </a>
        <a href="https://linkedin.com/in/sandesh-bagmare" target="_blank" class="social-icon" title="LinkedIn">
          💼
        </a>
        <a href="https://github.com/sandesh-bagmare" target="_blank" class="social-icon" title="GitHub">
          🔗
        </a>
      </div>

      <div class="navigation">
        ${this.sections.map((section, index) => html`
          <div 
            class="nav-dot ${this.currentSection === index ? 'active' : ''}"
            @click=${() => this.scrollToSection(index)}
            title="${section.charAt(0).toUpperCase() + section.slice(1)}"
          ></div>
        `)}
      </div>

      <div class="section decorative-border">
        <profile-section></profile-section>
      </div>

      <div class="section decorative-border">
        <projects-section></projects-section>
      </div>

      <div class="section decorative-border">
        <education-section></education-section>
      </div>

      <div class="section decorative-border">
        <experience-section></experience-section>
      </div>

      <div class="section decorative-border">
        <certifications-section></certifications-section>
      </div>

      <div class="section decorative-border">
        <contact-section></contact-section>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('currentSection') || changedProperties.has('scrollProgress')) {
      this.updateThemeWithTransition();
    }
  }
}

customElements.define('portfolio-app', PortfolioApp);
