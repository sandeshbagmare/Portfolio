import { LitElement, html, css } from 'lit';
import { certificationsData } from '../data/portfolio-data.js';

export class CertificationsSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: var(--current-bg);
      position: relative;
      overflow: hidden;
    }

    .coursera-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .coursera-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .platform-logo {
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

    .platform-name {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--current-text);
      margin-bottom: 1rem;
    }

    .platform-tagline {
      font-size: 1.2rem;
      color: var(--current-text-secondary);
      margin-bottom: 2rem;
    }

    .stats-grid {
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

    .filter-section {
      margin-bottom: 2rem;
      text-align: center;
    }

    .filter-tabs {
      display: inline-flex;
      background: var(--current-white);
      border-radius: 50px;
      padding: 0.5rem;
      gap: 0.5rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid var(--current-border);
    }

    .filter-tab {
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      background: transparent;
      border: none;
      color: var(--current-text-secondary);
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .filter-tab.active {
      background: var(--current-primary);
      color: white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .certificates-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
    }

    .certificate-card {
      background: var(--current-white);
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      border: 1px solid var(--current-border);
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      position: relative;
    }

    .certificate-card:hover {
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
      width: 200%;
      height: 200%;
      background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 20px,
        rgba(255, 255, 255, 0.1) 20px,
        rgba(255, 255, 255, 0.1) 40px
      );
      animation: certificate-shine 15s infinite linear;
    }

    @keyframes certificate-shine {
      0% { transform: translateX(-100%) translateY(-100%); }
      100% { transform: translateX(100%) translateY(100%); }
    }

    .certificate-icon {
      position: relative;
      z-index: 2;
      font-size: 3rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    .certificate-title {
      position: relative;
      z-index: 2;
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1rem;
      line-height: 1.4;
    }

    .card-body {
      padding: 2rem;
    }

    .issuer-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .issuer-logo {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--current-primary)20, var(--current-secondary)20);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }

    .issuer-details h4 {
      color: var(--current-text);
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    .issue-date {
      color: var(--current-text-secondary);
      font-size: 0.9rem;
    }

    .certificate-skills {
      margin-bottom: 1.5rem;
    }

    .skills-title {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 0.75rem;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .skill-tag {
      background: var(--current-primary)15;
      color: var(--current-primary);
      padding: 0.4rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .certificate-actions {
      display: flex;
      gap: 1rem;
    }

    .action-btn {
      flex: 1;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      text-decoration: none;
      text-align: center;
      font-weight: 500;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
    }

    .btn-primary {
      background: var(--current-primary);
      color: white;
    }

    .btn-secondary {
      background: transparent;
      color: var(--current-primary);
      border: 1px solid var(--current-primary);
    }

    .action-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .learning-path {
      background: linear-gradient(135deg, var(--current-primary)10, var(--current-secondary)10);
      border-radius: 16px;
      padding: 2rem;
      margin-top: 3rem;
      text-align: center;
    }

    .path-title {
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 1rem;
    }

    .path-description {
      color: var(--current-text-secondary);
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .floating-certificates {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      opacity: 0.05;
    }

    .cert-element {
      position: absolute;
      font-size: 2rem;
      animation: cert-float 25s infinite linear;
    }

    @keyframes cert-float {
      0% {
        transform: translateY(100vh) translateX(-30px) rotate(0deg);
        opacity: 0;
      }
      10%, 90% {
        opacity: 0.05;
      }
      100% {
        transform: translateY(-100px) translateX(30px) rotate(360deg);
        opacity: 0;
      }
    }

    @media (max-width: 768px) {
      .coursera-container {
        padding: 1rem;
      }
      
      .platform-name {
        font-size: 2rem;
      }
      
      .certificates-grid {
        grid-template-columns: 1fr;
      }
      
      .filter-tabs {
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .certificate-actions {
        flex-direction: column;
      }
    }
  `;

  static properties = {
    activeFilter: { type: String }
  };

  constructor() {
    super();
    this.activeFilter = 'all';
  }

  firstUpdated() {
    this.createFloatingCertificates();
  }

  createFloatingCertificates() {
    const container = this.shadowRoot.querySelector('.floating-certificates');
    const elements = ['🎓', '📜', '🏆', '⭐', '💡', '🔬', '🚀', '📊', '💼', '🎯'];
    
    elements.forEach((element, index) => {
      const div = document.createElement('div');
      div.className = 'cert-element';
      div.textContent = element;
      div.style.left = `${Math.random() * 100}%`;
      div.style.animationDelay = `${index * 2.5}s`;
      container.appendChild(div);
    });
  }

  setActiveFilter(filter) {
    this.activeFilter = filter;
  }

  getFilteredCertifications() {
    if (this.activeFilter === 'all') return certificationsData;
    if (this.activeFilter === 'ai') return certificationsData.filter(cert => 
      cert.title.toLowerCase().includes('ai') || 
      cert.title.toLowerCase().includes('chatbot') ||
      cert.title.toLowerCase().includes('generative')
    );
    if (this.activeFilter === 'cyber') return certificationsData.filter(cert => 
      cert.title.toLowerCase().includes('cyber') ||
      cert.title.toLowerCase().includes('security')
    );
    if (this.activeFilter === 'dev') return certificationsData.filter(cert => 
      cert.title.toLowerCase().includes('development') ||
      cert.title.toLowerCase().includes('javascript') ||
      cert.title.toLowerCase().includes('python')
    );
    if (this.activeFilter === 'cloud') return certificationsData.filter(cert => 
      cert.title.toLowerCase().includes('terraform') ||
      cert.title.toLowerCase().includes('infrastructure')
    );
    return certificationsData;
  }

  getCertificateSkills(title) {
    const skillsMap = {
      'ai': ['Artificial Intelligence', 'Machine Learning', 'Deep Learning'],
      'cybersecurity': ['Network Security', 'Threat Analysis', 'Risk Management'],
      'javascript': ['Web Development', 'Frontend', 'ES6+'],
      'python': ['Programming', 'Data Science', 'Automation'],
      'terraform': ['Infrastructure as Code', 'Cloud Computing', 'DevOps'],
      'generative': ['AI Models', 'LLMs', 'Content Generation'],
      'chatbot': ['NLP', 'Conversational AI', 'Bot Development'],
      'testing': ['QA', 'Automation Testing', 'Software Quality']
    };

    const titleLower = title.toLowerCase();
    for (const [key, skills] of Object.entries(skillsMap)) {
      if (titleLower.includes(key)) {
        return skills;
      }
    }
    return ['Professional Development', 'Technical Skills'];
  }

  render() {
    const filteredCerts = this.getFilteredCertifications();

    return html`
      <div class="floating-certificates"></div>

      <div class="coursera-container">
        <div class="coursera-header">
          <div class="platform-logo">🎓</div>
          <h1 class="platform-name">Professional Certifications</h1>
          <div class="platform-tagline">Continuous Learning • Skill Enhancement • Industry Recognition</div>
          
          <div class="stats-grid">
            <div class="stat-card">
              <span class="stat-number">${certificationsData.length}+</span>
              <div class="stat-label">Certifications</div>
            </div>
            <div class="stat-card">
              <span class="stat-number">5+</span>
              <div class="stat-label">Platforms</div>
            </div>
            <div class="stat-card">
              <span class="stat-number">2024-25</span>
              <div class="stat-label">Latest</div>
            </div>
            <div class="stat-card">
              <span class="stat-number">AI/ML</span>
              <div class="stat-label">Specialty</div>
            </div>
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-tabs">
            <button 
              class="filter-tab ${this.activeFilter === 'all' ? 'active' : ''}"
              @click=${() => this.setActiveFilter('all')}
            >
              All Certifications
            </button>
            <button 
              class="filter-tab ${this.activeFilter === 'ai' ? 'active' : ''}"
              @click=${() => this.setActiveFilter('ai')}
            >
              AI/ML
            </button>
            <button 
              class="filter-tab ${this.activeFilter === 'cyber' ? 'active' : ''}"
              @click=${() => this.setActiveFilter('cyber')}
            >
              Cybersecurity
            </button>
            <button 
              class="filter-tab ${this.activeFilter === 'dev' ? 'active' : ''}"
              @click=${() => this.setActiveFilter('dev')}
            >
              Development
            </button>
            <button 
              class="filter-tab ${this.activeFilter === 'cloud' ? 'active' : ''}"
              @click=${() => this.setActiveFilter('cloud')}
            >
              Cloud/DevOps
            </button>
          </div>
        </div>

        <div class="certificates-grid">
          ${filteredCerts.map(cert => html`
            <div class="certificate-card interactive-card sparkle-container">
              <div class="card-header">
                <div class="certificate-icon">🏆</div>
                <h3 class="certificate-title">${cert.title}</h3>
              </div>
              
              <div class="card-body">
                <div class="issuer-info">
                  <div class="issuer-logo">
                    ${cert.issuer === 'LinkedIn' ? '💼' : 
                      cert.issuer === 'Microsoft' ? '🏢' : 
                      cert.issuer === 'LambdaTest' ? '🧪' : '🎓'}
                  </div>
                  <div class="issuer-details">
                    <h4>${cert.issuer}</h4>
                    <div class="issue-date">Issued ${cert.issueDate}</div>
                  </div>
                </div>

                <div class="certificate-skills">
                  <div class="skills-title">Skills Demonstrated</div>
                  <div class="skill-tags">
                    ${this.getCertificateSkills(cert.title).map(skill => html`
                      <span class="skill-tag">${skill}</span>
                    `)}
                  </div>
                </div>

                <div class="certificate-actions">
                  ${cert.credentialUrl && cert.credentialUrl !== '#' ? html`
                    <a href="${cert.credentialUrl}" target="_blank" class="action-btn btn-primary">
                      View Credential
                    </a>
                  ` : html`
                    <button class="action-btn btn-secondary" disabled>
                      Credential Available
                    </button>
                  `}
                </div>
              </div>
            </div>
          `)}
        </div>

        <div class="learning-path">
          <h2 class="path-title">Continuous Learning Journey</h2>
          <div class="path-description">
            Committed to staying current with emerging technologies and industry best practices. 
            Each certification represents hands-on learning and practical application of cutting-edge skills 
            in AI, cybersecurity, software development, and cloud technologies.
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('certifications-section', CertificationsSection);
