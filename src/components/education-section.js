import { LitElement, html, css } from 'lit';
import { educationData } from '../data/portfolio-data.js';

export class EducationSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: var(--current-bg);
      position: relative;
      overflow: hidden;
    }

    .vit-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .university-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .university-logo {
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
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }

    .university-name {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--current-text);
      margin-bottom: 1rem;
    }

    .university-tagline {
      font-size: 1.2rem;
      color: var(--current-text-secondary);
      margin-bottom: 2rem;
    }

    .academic-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .stat-card {
      background: var(--current-white);
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid var(--current-border);
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--current-primary);
      display: block;
    }

    .stat-label {
      color: var(--current-text-secondary);
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }

    .education-timeline {
      position: relative;
      padding-left: 2rem;
    }

    .timeline-line {
      position: absolute;
      left: 1rem;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(180deg, var(--current-primary), var(--current-secondary));
    }

    .education-item {
      position: relative;
      margin-bottom: 3rem;
      background: var(--current-white);
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border-left: 4px solid var(--current-primary);
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .education-item:hover {
      transform: translateX(15px) translateY(-5px);
      box-shadow: 
        0 15px 40px rgba(0, 0, 0, 0.15),
        0 0 20px var(--current-primary)20;
      border-left-color: var(--current-secondary);
    }

    .timeline-dot {
      position: absolute;
      left: -2.25rem;
      top: 2rem;
      width: 1rem;
      height: 1rem;
      background: var(--current-primary);
      border-radius: 50%;
      border: 3px solid var(--current-white);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .education-header {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .institution-logo {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--current-primary), var(--current-accent));
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: white;
      flex-shrink: 0;
    }

    .education-info {
      flex: 1;
    }

    .institution-name {
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 0.5rem;
    }

    .degree {
      font-size: 1.1rem;
      color: var(--current-primary);
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    .field-of-study {
      color: var(--current-text-secondary);
      margin-bottom: 0.5rem;
    }

    .duration {
      color: var(--current-text-secondary);
      font-size: 0.9rem;
    }

    .grade-container {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 1rem 0;
    }

    .grade {
      background: linear-gradient(135deg, var(--current-primary), var(--current-secondary));
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: 600;
    }

    .grade-label {
      color: var(--current-text-secondary);
      font-size: 0.9rem;
    }

    .skills-section {
      margin-top: 1.5rem;
    }

    .skills-title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 1rem;
    }

    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .skill-tag {
      background: var(--current-primary)15;
      color: var(--current-primary);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid var(--current-primary)30;
    }

    .achievements-section {
      background: linear-gradient(135deg, var(--current-primary)10, var(--current-secondary)10);
      border-radius: 12px;
      padding: 2rem;
      margin-top: 2rem;
    }

    .achievements-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 1rem;
      text-align: center;
    }

    .achievement-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      padding: 1rem;
      background: var(--current-white);
      border-radius: 8px;
    }

    .achievement-icon {
      font-size: 1.5rem;
    }

    .achievement-text {
      color: var(--current-text);
    }

    .floating-academic {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      opacity: 0.05;
    }

    .academic-element {
      position: absolute;
      font-size: 2rem;
      animation: academic-float 25s infinite linear;
    }

    @keyframes academic-float {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10%, 90% {
        opacity: 0.05;
      }
      100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
      }
    }

    @media (max-width: 768px) {
      .vit-container {
        padding: 1rem;
      }
      
      .university-name {
        font-size: 2rem;
      }
      
      .education-timeline {
        padding-left: 1rem;
      }
      
      .timeline-dot {
        left: -1.25rem;
      }
      
      .education-header {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      
      .academic-stats {
        grid-template-columns: 1fr;
      }
    }
  `;

  firstUpdated() {
    this.createFloatingAcademicElements();
  }

  createFloatingAcademicElements() {
    const container = this.shadowRoot.querySelector('.floating-academic');
    const elements = ['🎓', '📚', '🔬', '💡', '🏆', '📊', '⚡', '🚀'];
    
    elements.forEach((element, index) => {
      const div = document.createElement('div');
      div.className = 'academic-element';
      div.textContent = element;
      div.style.left = `${Math.random() * 100}%`;
      div.style.animationDelay = `${index * 3}s`;
      container.appendChild(div);
    });
  }

  render() {
    return html`
      <div class="floating-academic"></div>

      <div class="vit-container">
        <div class="university-header">
          <div class="university-logo">🎓</div>
          <h1 class="university-name">Academic Excellence</h1>
          <div class="university-tagline">Building Tomorrow's Technology Leaders</div>
          
          <div class="academic-stats">
            <div class="stat-card">
              <span class="stat-number">8.84</span>
              <div class="stat-label">CGPA</div>
            </div>
            <div class="stat-card">
              <span class="stat-number">4</span>
              <div class="stat-label">Years</div>
            </div>
            <div class="stat-card">
              <span class="stat-number">50+</span>
              <div class="stat-label">Courses</div>
            </div>
            <div class="stat-card">
              <span class="stat-number">10+</span>
              <div class="stat-label">Projects</div>
            </div>
          </div>
        </div>

        <div class="education-timeline">
          <div class="timeline-line"></div>
          
          ${educationData.map((education, index) => html`
            <div class="education-item interactive-card sparkle-container">
              <div class="timeline-dot"></div>
              
              <div class="education-header">
                <div class="institution-logo">
                  ${index === 0 ? '🏛️' : '🏫'}
                </div>
                
                <div class="education-info">
                  <h3 class="institution-name">${education.institution}</h3>
                  <div class="degree">${education.degree}</div>
                  ${education.field ? html`
                    <div class="field-of-study">${education.field}</div>
                  ` : ''}
                  <div class="duration">${education.duration}</div>
                </div>
              </div>

              <div class="grade-container">
                <div class="grade">Grade: ${education.grade}</div>
                <div class="grade-label">
                  ${education.grade.includes('%') ? 'Percentage' : 'CGPA out of 10'}
                </div>
              </div>

              ${education.skills && education.skills.length > 0 ? html`
                <div class="skills-section">
                  <div class="skills-title">Key Skills & Technologies</div>
                  <div class="skills-grid">
                    ${education.skills.map(skill => html`
                      <span class="skill-tag">${skill}</span>
                    `)}
                  </div>
                </div>
              ` : ''}
            </div>
          `)}
        </div>

        <div class="achievements-section">
          <h3 class="achievements-title">Academic Achievements</h3>
          
          <div class="achievement-item">
            <div class="achievement-icon">🏆</div>
            <div class="achievement-text">Consistently maintained high academic performance</div>
          </div>
          
          <div class="achievement-item">
            <div class="achievement-icon">🔬</div>
            <div class="achievement-text">Published research papers in IEEE conferences</div>
          </div>
          
          <div class="achievement-item">
            <div class="achievement-icon">💡</div>
            <div class="achievement-text">Completed multiple innovative projects in AI and IoT</div>
          </div>
          
          <div class="achievement-item">
            <div class="achievement-icon">🎯</div>
            <div class="achievement-text">Strong foundation in both theoretical and practical aspects</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('education-section', EducationSection);
