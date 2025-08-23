import { LitElement, html, css } from 'lit';
import { experienceData, honorsData } from '../data/portfolio-data.js';

export class ExperienceSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: var(--current-bg);
      position: relative;
      overflow: hidden;
    }

    .ptc-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .ptc-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .company-logo {
      width: 120px;
      height: 120px;
      margin: 0 auto 2rem;
      background: linear-gradient(135deg, var(--current-primary), var(--current-secondary));
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      color: white;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    }

    .company-name {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--current-text);
      margin-bottom: 1rem;
    }

    .company-tagline {
      font-size: 1.2rem;
      color: var(--current-text-secondary);
      margin-bottom: 2rem;
    }

    .experience-card {
      background: var(--current-white);
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
      overflow: hidden;
      border: 1px solid var(--current-border);
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .experience-card:hover {
      transform: translateY(-12px);
      box-shadow: 
        0 20px 50px rgba(0, 0, 0, 0.2),
        0 0 30px var(--current-primary)25;
      border-color: var(--current-primary);
    }

    .card-header {
      background: linear-gradient(135deg, var(--current-primary), var(--current-secondary));
      color: white;
      padding: 2rem;
      position: relative;
      overflow: hidden;
    }

    .card-header::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(255, 255, 255, 0.1) 10px,
        rgba(255, 255, 255, 0.1) 20px
      );
      animation: slide 20s infinite linear;
    }

    @keyframes slide {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    .header-content {
      position: relative;
      z-index: 2;
    }

    .company-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .company-badge {
      width: 60px;
      height: 60px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }

    .company-details h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .total-duration {
      opacity: 0.9;
      font-size: 0.9rem;
    }

    .positions-list {
      padding: 2rem;
    }

    .position-item {
      border-left: 4px solid var(--current-primary);
      padding-left: 2rem;
      margin-bottom: 2rem;
      position: relative;
    }

    .position-item::before {
      content: '';
      position: absolute;
      left: -8px;
      top: 0;
      width: 12px;
      height: 12px;
      background: var(--current-primary);
      border-radius: 50%;
      border: 3px solid var(--current-white);
    }

    .position-title {
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 0.5rem;
    }

    .position-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .meta-item {
      background: var(--current-primary)15;
      color: var(--current-primary);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .achievements-section {
      background: linear-gradient(135deg, var(--current-primary)10, var(--current-secondary)10);
      border-radius: 12px;
      padding: 2rem;
      margin-top: 2rem;
    }

    .section-title {
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 2rem;
      text-align: center;
    }

    .honors-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .honor-card {
      background: var(--current-white);
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid var(--current-border);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .honor-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }

    .honor-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--current-primary), var(--current-secondary));
    }

    .honor-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .honor-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 0.5rem;
    }

    .honor-issuer {
      color: var(--current-primary);
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    .honor-date {
      color: var(--current-text-secondary);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .honor-description {
      color: var(--current-text-secondary);
      line-height: 1.5;
      font-size: 0.9rem;
    }

    .honor-link {
      display: inline-block;
      margin-top: 1rem;
      color: var(--current-primary);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .honor-link:hover {
      color: var(--current-secondary);
    }

    .floating-tech {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      opacity: 0.05;
    }

    .tech-element {
      position: absolute;
      font-size: 1.5rem;
      animation: tech-float 30s infinite linear;
    }

    @keyframes tech-float {
      0% {
        transform: translateY(100vh) translateX(-20px) rotate(0deg);
        opacity: 0;
      }
      10%, 90% {
        opacity: 0.05;
      }
      100% {
        transform: translateY(-100px) translateX(20px) rotate(360deg);
        opacity: 0;
      }
    }

    .career-progress {
      background: var(--current-white);
      border-radius: 16px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .progress-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 2rem;
      text-align: center;
    }

    .progress-timeline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      margin: 2rem 0;
    }

    .progress-line {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--current-border);
      z-index: 1;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--current-primary), var(--current-secondary));
      width: 70%;
      border-radius: 1px;
    }

    .milestone {
      position: relative;
      z-index: 2;
      background: var(--current-white);
      border: 3px solid var(--current-primary);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }

    .milestone.completed {
      background: var(--current-primary);
      color: white;
    }

    @media (max-width: 768px) {
      .ptc-container {
        padding: 1rem;
      }
      
      .company-name {
        font-size: 2rem;
      }
      
      .position-meta {
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .honors-grid {
        grid-template-columns: 1fr;
      }
      
      .progress-timeline {
        flex-direction: column;
        gap: 2rem;
      }
      
      .progress-line {
        width: 2px;
        height: 100%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  `;

  firstUpdated() {
    this.createFloatingTechElements();
  }

  createFloatingTechElements() {
    const container = this.shadowRoot.querySelector('.floating-tech');
    const elements = ['⚙️', '🔧', '💻', '🚀', '📊', '🔬', '💡', '🎯', '🏆', '📈'];
    
    elements.forEach((element, index) => {
      const div = document.createElement('div');
      div.className = 'tech-element';
      div.textContent = element;
      div.style.left = `${Math.random() * 100}%`;
      div.style.animationDelay = `${index * 2}s`;
      container.appendChild(div);
    });
  }

  render() {
    return html`
      <div class="floating-tech"></div>

      <div class="ptc-container">
        <div class="ptc-header">
          <div class="company-logo">🏢</div>
          <h1 class="company-name">Professional Experience</h1>
          <div class="company-tagline">Driving Innovation • Building Tomorrow's Technology</div>
        </div>

        <div class="career-progress">
          <h3 class="progress-title">Career Journey</h3>
          <div class="progress-timeline">
            <div class="progress-line">
              <div class="progress-fill"></div>
            </div>
            <div class="milestone completed">🎓</div>
            <div class="milestone completed">💼</div>
            <div class="milestone completed">🚀</div>
            <div class="milestone">🎯</div>
          </div>
        </div>

        ${experienceData.map(experience => html`
          <div class="experience-card interactive-card sparkle-container">
            <div class="card-header">
              <div class="header-content">
                <div class="company-info">
                  <div class="company-badge">🏢</div>
                  <div class="company-details">
                    <h3>${experience.company}</h3>
                    <div class="total-duration">${experience.totalDuration}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="positions-list">
              ${experience.positions.map(position => html`
                <div class="position-item">
                  <h4 class="position-title">${position.title}</h4>
                  <div class="position-meta">
                    <span class="meta-item">📅 ${position.duration}</span>
                    <span class="meta-item">💼 ${position.type}</span>
                    <span class="meta-item">📍 ${position.location}</span>
                  </div>
                </div>
              `)}
            </div>
          </div>
        `)}

        <div class="achievements-section">
          <h2 class="section-title">Honors & Awards</h2>
          
          <div class="honors-grid">
            ${honorsData.map(honor => html`
              <div class="honor-card">
                <div class="honor-icon">🏆</div>
                <h4 class="honor-title">${honor.title}</h4>
                <div class="honor-issuer">${honor.issuer}</div>
                <div class="honor-date">${honor.issueDate}</div>
                ${honor.description ? html`
                  <div class="honor-description">${honor.description}</div>
                ` : ''}
                ${honor.url ? html`
                  <a href="${honor.url}" target="_blank" class="honor-link">View Certificate →</a>
                ` : ''}
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('experience-section', ExperienceSection);
