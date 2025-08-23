import { LitElement, html, css } from 'lit';

export class ScrollEffects extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }

    .ripple-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, var(--current-primary)30, var(--current-secondary)20, transparent 70%);
      transform: scale(0);
      animation: ripple-animation 2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      opacity: 0.6;
      box-shadow: 0 0 20px var(--current-primary)40;
    }

    @keyframes ripple-animation {
      0% {
        transform: scale(0);
        opacity: 0.6;
      }
      100% {
        transform: scale(4);
        opacity: 0;
      }
    }

    .particle-system {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .particle {
      position: absolute;
      width: 3px;
      height: 3px;
      background: var(--current-primary);
      border-radius: 50%;
      opacity: 0.6;
      animation: particle-float 15s infinite linear;
    }

    @keyframes particle-float {
      0% {
        transform: translateY(100vh) translateX(0);
        opacity: 0;
      }
      10% {
        opacity: 0.6;
      }
      90% {
        opacity: 0.6;
      }
      100% {
        transform: translateY(-100px) translateX(100px);
        opacity: 0;
      }
    }

    .wave-container {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      overflow: hidden;
    }

    .wave {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 200%;
      height: 100px;
      background: linear-gradient(90deg, 
        transparent, 
        var(--current-primary)10, 
        var(--current-secondary)10, 
        transparent
      );
      border-radius: 50%;
      animation: wave-motion 10s ease-in-out infinite;
    }

    @keyframes wave-motion {
      0%, 100% {
        transform: translateX(-50%);
      }
      50% {
        transform: translateX(-50%);
      }
    }

    .geometric-shapes {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .shape {
      position: absolute;
      opacity: 0.1;
      animation: shape-float 20s infinite linear;
    }

    .shape-circle {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--current-primary);
    }

    .shape-square {
      width: 40px;
      height: 40px;
      background: var(--current-secondary);
    }

    .shape-triangle {
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 35px solid var(--current-accent);
    }

    @keyframes shape-float {
      0% {
        transform: translateY(100vh) translateX(-20px);
        opacity: 0;
      }
      10%, 90% {
        opacity: 0.1;
      }
      100% {
        transform: translateY(-100px) translateX(20px);
        opacity: 0;
      }
    }

    .cursor-trail {
      position: absolute;
      width: 6px;
      height: 6px;
      background: var(--current-primary);
      border-radius: 50%;
      pointer-events: none;
      opacity: 0.8;
      animation: cursor-fade 1s ease-out forwards;
    }

    @keyframes cursor-fade {
      0% {
        transform: scale(1);
        opacity: 0.8;
      }
      100% {
        transform: scale(0);
        opacity: 0;
      }
    }

    @media (max-width: 768px) {
      .particle {
        width: 2px;
        height: 2px;
      }
      
      .shape-circle {
        width: 30px;
        height: 30px;
      }
      
      .shape-square {
        width: 25px;
        height: 25px;
      }
    }
  `;

  constructor() {
    super();
    this.particles = [];
    this.shapes = [];
    this.cursorTrails = [];
  }

  firstUpdated() {
    this.initializeEffects();
    this.setupEventListeners();
  }

  initializeEffects() {
    this.createParticles();
    this.createGeometricShapes();
  }

  setupEventListeners() {
    // Mouse move for cursor trail effect
    document.addEventListener('mousemove', (e) => {
      this.createCursorTrail(e.clientX, e.clientY);
    });

    // Click for ripple effect
    document.addEventListener('click', (e) => {
      this.createRipple(e.clientX, e.clientY);
    });

    // Scroll effects
    window.addEventListener('scroll', () => {
      this.updateParticleSpeed();
    });
  }

  createParticles() {
    const particleContainer = this.shadowRoot.querySelector('.particle-system');
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${15 + Math.random() * 10}s`;
      particleContainer.appendChild(particle);
      this.particles.push(particle);
    }
  }

  createGeometricShapes() {
    const shapesContainer = this.shadowRoot.querySelector('.geometric-shapes');
    const shapeTypes = ['shape-circle', 'shape-square', 'shape-triangle'];
    
    for (let i = 0; i < 8; i++) {
      const shape = document.createElement('div');
      const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      shape.className = `shape ${shapeType}`;
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.animationDelay = `${Math.random() * 20}s`;
      shape.style.animationDuration = `${20 + Math.random() * 10}s`;
      shapesContainer.appendChild(shape);
      this.shapes.push(shape);
    }
  }

  createRipple(x, y) {
    const rippleContainer = this.shadowRoot.querySelector('.ripple-container');
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    
    const size = Math.random() * 150 + 100;
    const colors = [
      'radial-gradient(circle, var(--current-primary)30, var(--current-secondary)20, transparent 70%)',
      'radial-gradient(circle, var(--current-secondary)25, var(--current-accent)15, transparent 60%)',
      'radial-gradient(circle, var(--current-accent)20, var(--current-primary)10, transparent 80%)'
    ];
    
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;
    ripple.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    // Add random rotation and scale variation
    const rotation = Math.random() * 360;
    ripple.style.setProperty('--rotation', `${rotation}deg`);
    
    rippleContainer.appendChild(ripple);
    
    // Create multiple smaller ripples for enhanced effect
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        this.createSecondaryRipple(x, y, size * 0.3);
      }, i * 200);
    }
    
    // Remove ripple after animation
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 2000);
  }

  createSecondaryRipple(x, y, baseSize) {
    // This function is now empty to prevent secondary ripples
  }

  createCursorTrail(x, y) {
    if (window.innerWidth <= 768) return; // Skip on mobile
    
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    
    this.shadowRoot.appendChild(trail);
    this.cursorTrails.push(trail);
    
    // Remove trail after animation
    setTimeout(() => {
      if (trail.parentNode) {
        trail.parentNode.removeChild(trail);
      }
      const index = this.cursorTrails.indexOf(trail);
      if (index > -1) {
        this.cursorTrails.splice(index, 1);
      }
    }, 1000);

    // Limit number of trails
    if (this.cursorTrails.length > 10) {
      const oldTrail = this.cursorTrails.shift();
      if (oldTrail && oldTrail.parentNode) {
        oldTrail.parentNode.removeChild(oldTrail);
      }
    }
  }

  updateParticleSpeed() {
    const scrollSpeed = Math.abs(window.pageYOffset - (this.lastScrollY || 0));
    this.lastScrollY = window.pageYOffset;
    
    // Adjust particle animation speed based on scroll
    this.particles.forEach(particle => {
      const currentDuration = parseFloat(particle.style.animationDuration) || 15;
      const newDuration = Math.max(5, currentDuration - scrollSpeed * 0.1);
      particle.style.animationDuration = `${newDuration}s`;
    });
  }

  render() {
    return html`
      <div class="ripple-container"></div>
      <div class="particle-system"></div>
      <div class="wave-container">
        <div class="wave"></div>
      </div>
      <div class="geometric-shapes"></div>
    `;
  }
}

customElements.define('scroll-effects', ScrollEffects);
