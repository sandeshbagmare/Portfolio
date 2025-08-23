import { LitElement, html, css } from 'lit';
import { profileData } from '../data/portfolio-data.js';

export class ProfileSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: var(--current-bg);
      position: relative;
      overflow: hidden;
    }

    .linkedin-container {
      max-width: 1128px;
      margin: 0 auto;
      padding: 0 2rem 2rem;
      background: var(--current-bg);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .profile-header {
      background: var(--current-white);
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      margin-bottom: 1rem;
      overflow: hidden;
    }

    .cover-photo {
      height: 200px;
      background: linear-gradient(135deg, var(--current-primary), var(--current-secondary));
      position: relative;
    }

    .profile-picture-container {
      position: relative;
      margin-top: -80px;
      margin-left: 2rem;
      margin-bottom: 1rem;
    }

    .profile-picture {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      border: 4px solid var(--current-white);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      color: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .profile-info {
      padding: 0 2rem 2rem;
    }

    .name {
      font-size: 2rem;
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 0.5rem;
    }

    .pronouns {
      color: var(--current-text-secondary);
      font-size: 0.9rem;
      margin-left: 0.5rem;
    }

    .title {
      font-size: 1.1rem;
      color: var(--current-text);
      margin-bottom: 0.5rem;
    }

    .location {
      color: var(--current-text-secondary);
      margin-bottom: 1rem;
    }

    .connections {
      color: var(--current-primary);
      font-weight: 500;
      text-decoration: none;
      margin-bottom: 1rem;
      display: inline-block;
    }

    .open-to-work {
      background: #d4f6d4;
      color: #0a7a0a;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      margin-bottom: 1rem;
      display: inline-block;
    }

    .action-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 24px;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
      border: none;
      font-size: 1rem;
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

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .about-section {
      background: var(--current-white);
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      margin-bottom: 1rem;
    }

    .section-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 1rem;
    }

    .about-text {
      color: var(--current-text);
      line-height: 1.6;
    }

    .analytics-section {
      background: var(--current-white);
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      padding: 2rem;
    }

    .analytics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .analytics-item {
      text-align: center;
    }

    .analytics-number {
      font-size: 2rem;
      font-weight: bold;
      color: var(--current-primary);
      display: block;
    }

    .analytics-label {
      color: var(--current-text-secondary);
      font-size: 0.9rem;
    }

    .floating-shapes {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }

    .shape {
      position: absolute;
      opacity: 0.1;
      animation: float 20s infinite linear;
    }

    .shape1 {
      top: 10%;
      left: 10%;
      width: 60px;
      height: 60px;
      background: var(--current-primary);
      border-radius: 50%;
      animation-delay: 0s;
    }

    .shape2 {
      top: 60%;
      right: 10%;
      width: 80px;
      height: 80px;
      background: var(--current-secondary);
      transform: rotate(45deg);
      animation-delay: 5s;
    }

    .shape3 {
      bottom: 20%;
      left: 20%;
      width: 40px;
      height: 40px;
      background: var(--current-accent);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      animation-delay: 10s;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(180deg);
      }
    }

    @media (max-width: 768px) {
      .linkedin-container {
        padding: 1rem;
      }
      
      .profile-info {
        padding: 0 1rem 1rem;
      }
      
      .name {
        font-size: 1.5rem;
      }
      
      .action-buttons {
        flex-direction: column;
      }
      
      .analytics-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  `;

  render() {
    return html`
      <div class="floating-shapes">
        <div class="shape shape1"></div>
        <div class="shape shape2"></div>
        <div class="shape shape3"></div>
      </div>

      <div class="linkedin-container">
        <div class="profile-header">
          <div class="cover-photo"></div>
          
          <div class="profile-picture-container">
            <div class="profile-picture">
              👨‍💻
            </div>
          </div>

          <div class="profile-info">
            <h1 class="name">
              ${profileData.name}
              <span class="pronouns">${profileData.pronouns}</span>
            </h1>
            
            <div class="title">${profileData.title}</div>
            <div class="location">${profileData.location}</div>
            
            <a href="#" class="connections">${profileData.connections} connections</a>
            
            ${profileData.openToWork ? html`
              <div class="open-to-work">
                🟢 Open to work - ${profileData.roles.join(', ')} roles
              </div>
            ` : ''}

            <div class="action-buttons">
              <a href="mailto:${profileData.contact.email}" class="btn btn-primary">
                📧 Contact
              </a>
              <a href="${profileData.contact.linkedin}" target="_blank" class="btn btn-secondary">
                💼 LinkedIn
              </a>
              <a href="${profileData.contact.github}" target="_blank" class="btn btn-secondary">
                🔗 GitHub
              </a>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2 class="section-title">About</h2>
          <p class="about-text">${profileData.about}</p>
        </div>

        <div class="analytics-section">
          <h2 class="section-title">Analytics</h2>
          <div class="analytics-grid">
            <div class="analytics-item">
              <span class="analytics-number">${profileData.profileViews}</span>
              <span class="analytics-label">profile views</span>
            </div>
            <div class="analytics-item">
              <span class="analytics-number">${profileData.postImpressions}</span>
              <span class="analytics-label">post impressions</span>
            </div>
            <div class="analytics-item">
              <span class="analytics-number">${profileData.searchAppearances}</span>
              <span class="analytics-label">search appearances</span>
            </div>
            <div class="analytics-item">
              <span class="analytics-number">${profileData.followers}</span>
              <span class="analytics-label">followers</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('profile-section', ProfileSection);
