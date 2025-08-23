import { LitElement, html, css } from 'lit';
import { projectsData } from '../data/portfolio-data.js';

export class ProjectsSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: var(--current-bg);
      position: relative;
      overflow: hidden;
    }

    .github-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .github-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .github-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: white;
      border: 3px solid var(--current-border);
    }

    .github-info h1 {
      font-size: 2rem;
      color: var(--current-text);
      margin-bottom: 0.5rem;
    }

    .github-bio {
      color: var(--current-text-secondary);
      margin-bottom: 1rem;
    }

    .github-stats {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .stat-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--current-text-secondary);
      font-size: 0.9rem;
    }

    .repositories-section {
      background: var(--current-white);
      border-radius: 8px;
      border: 1px solid var(--current-border);
      padding: 2rem;
    }

    .section-header {
      display: flex;
      justify-content: between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .section-title {
      font-size: 1.5rem;
      color: var(--current-text);
      font-weight: 600;
    }

    .filter-tabs {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .tab {
      padding: 0.5rem 1rem;
      border-radius: 6px;
      background: transparent;
      border: 1px solid var(--current-border);
      color: var(--current-text);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .tab.active {
      background: var(--current-primary);
      color: white;
      border-color: var(--current-primary);
    }

    .repositories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 1.5rem;
    }

    .repository-card {
      border: 1px solid var(--current-border);
      border-radius: 8px;
      padding: 1.5rem;
      background: var(--current-white);
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .repository-card:hover {
      transform: translateY(-8px);
      box-shadow: 
        0 15px 35px rgba(0, 0, 0, 0.15),
        0 0 25px var(--current-primary)20;
      border-color: var(--current-primary);
    }

    .repo-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .repo-icon {
      color: var(--current-text-secondary);
    }

    .repo-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--current-primary);
      text-decoration: none;
    }

    .repo-visibility {
      background: var(--current-border);
      color: var(--current-text-secondary);
      padding: 0.25rem 0.5rem;
      border-radius: 12px;
      font-size: 0.75rem;
      margin-left: auto;
    }

    .repo-description {
      color: var(--current-text-secondary);
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .repo-topics {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .topic {
      background: var(--current-primary)20;
      color: var(--current-primary);
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.8rem;
    }

    .repo-stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .repo-meta {
      display: flex;
      gap: 1rem;
      color: var(--current-text-secondary);
      font-size: 0.9rem;
    }

    .repo-links {
      display: flex;
      gap: 0.5rem;
    }

    .repo-link {
      padding: 0.5rem;
      border-radius: 6px;
      background: var(--current-primary);
      color: white;
      text-decoration: none;
      font-size: 0.8rem;
      transition: all 0.3s ease;
    }

    .repo-link:hover {
      background: var(--current-secondary);
      transform: translateY(-1px);
    }

    .floating-code {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      opacity: 0.05;
      font-family: 'Courier New', monospace;
      font-size: 0.8rem;
      color: var(--current-text);
      overflow: hidden;
    }

    .code-line {
      position: absolute;
      white-space: nowrap;
      animation: float-code 30s infinite linear;
    }

    @keyframes float-code {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100vw);
      }
    }

    @media (max-width: 768px) {
      .github-container {
        padding: 1rem;
      }
      
      .repositories-grid {
        grid-template-columns: 1fr;
      }
      
      .github-stats {
        flex-direction: column;
        gap: 1rem;
      }
      
      .filter-tabs {
        flex-wrap: wrap;
      }
    }
  `;

  static properties = {
    activeTab: { type: String }
  };

  constructor() {
    super();
    this.activeTab = 'all';
  }

  firstUpdated() {
    this.createFloatingCode();
  }

  createFloatingCode() {
    const codeContainer = this.shadowRoot.querySelector('.floating-code');
    const codeLines = [
      'const projects = await fetchProjects();',
      'function createAIModel() { return new NeuralNetwork(); }',
      'import { deepLearning } from "./ai-toolkit";',
      'class RoboticPalm extends AIDevice {',
      'app.use(express.json());',
      'const result = await model.predict(inputData);',
      'git commit -m "feat: add AI vision system"',
      'npm install @tensorflow/tfjs',
    ];

    codeLines.forEach((line, index) => {
      const codeLine = document.createElement('div');
      codeLine.className = 'code-line';
      codeLine.textContent = line;
      codeLine.style.top = `${Math.random() * 100}%`;
      codeLine.style.animationDelay = `${index * 3}s`;
      codeContainer.appendChild(codeLine);
    });
  }

  setActiveTab(tab) {
    this.activeTab = tab;
  }

  getFilteredProjects() {
    if (this.activeTab === 'all') return projectsData;
    if (this.activeTab === 'ai') return projectsData.filter(p => 
      p.skills.some(skill => ['Deep Learning', 'Computer Vision', 'AI', 'Neural Networks'].includes(skill))
    );
    if (this.activeTab === 'web') return projectsData.filter(p => 
      p.skills.some(skill => ['React', 'Node.js', 'MERN Stack', 'JavaScript'].includes(skill))
    );
    if (this.activeTab === 'java') return projectsData.filter(p => 
      p.skills.includes('Java')
    );
    if (this.activeTab === 'iot') return projectsData.filter(p => 
      p.skills.some(skill => ['IoT', 'Arduino', 'Raspberry Pi', 'Embedded Systems'].includes(skill))
    );
    return projectsData;
  }

  render() {
    const filteredProjects = this.getFilteredProjects();

    return html`
      <div class="floating-code"></div>

      <div class="github-container">
        <div class="github-header">
          <div class="github-avatar">👨‍💻</div>
          <div class="github-info">
            <h1>Sandesh Bagmare</h1>
            <div class="github-bio">AI Engineer • Building intelligent solutions with deep learning and IoT</div>
            <div class="github-stats">
              <div class="stat-item">
                📦 ${projectsData.length} repositories
              </div>
              <div class="stat-item">
                ⭐ 47 stars
              </div>
              <div class="stat-item">
                👥 15 followers
              </div>
              <div class="stat-item">
                📍 Pune, Maharashtra
              </div>
            </div>
          </div>
        </div>

        <div class="repositories-section">
          <div class="section-header">
            <h2 class="section-title">Repositories</h2>
          </div>

          <div class="filter-tabs">
            <button 
              class="tab ${this.activeTab === 'all' ? 'active' : ''}"
              @click=${() => this.setActiveTab('all')}
            >
              All Projects
            </button>
            <button 
              class="tab ${this.activeTab === 'ai' ? 'active' : ''}"
              @click=${() => this.setActiveTab('ai')}
            >
              AI/ML
            </button>
            <button 
              class="tab ${this.activeTab === 'web' ? 'active' : ''}"
              @click=${() => this.setActiveTab('web')}
            >
              Web Development
            </button>
            <button 
              class="tab ${this.activeTab === 'java' ? 'active' : ''}"
              @click=${() => this.setActiveTab('java')}
            >
              Java
            </button>
            <button 
              class="tab ${this.activeTab === 'iot' ? 'active' : ''}"
              @click=${() => this.setActiveTab('iot')}
            >
              IoT/Hardware
            </button>
          </div>

          <div class="repositories-grid">
            ${filteredProjects.map(project => html`
              <div class="repository-card interactive-card sparkle-container">
                <div class="repo-header">
                  <span class="repo-icon">📁</span>
                  <a href="${project.github || '#'}" class="repo-name" target="_blank">
                    ${project.title}
                  </a>
                  <span class="repo-visibility">Public</span>
                </div>

                <div class="repo-description">
                  ${project.description}
                </div>

                <div class="repo-topics">
                  ${project.skills.slice(0, 4).map(skill => html`
                    <span class="topic">${skill}</span>
                  `)}
                </div>

                <div class="repo-stats">
                  <div class="repo-meta">
                    <span>⭐ ${Math.floor(Math.random() * 20) + 1}</span>
                    <span>🔄 ${Math.floor(Math.random() * 10)}</span>
                    <span>📅 ${project.duration.split(' - ')[1] || '2024'}</span>
                  </div>
                  
                  <div class="repo-links">
                    ${project.github ? html`
                      <a href="${project.github}" target="_blank" class="repo-link">Code</a>
                    ` : ''}
                    ${project.demo ? html`
                      <a href="${project.demo}" target="_blank" class="repo-link">Demo</a>
                    ` : ''}
                  </div>
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('projects-section', ProjectsSection);
