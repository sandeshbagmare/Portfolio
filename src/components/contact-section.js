import { LitElement, html, css } from 'lit';
import { profileData } from '../data/portfolio-data.js';

export class ContactSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: var(--current-bg);
      position: relative;
      overflow: hidden;
    }

    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .contact-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .contact-logo {
      width: 120px;
      height: 120px;
      margin: 0 auto 2rem;
      background: linear-gradient(135deg, var(--current-primary), var(--current-secondary));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      color: white;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
      animation: pulse 3s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-3px); }
    }

    .contact-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--current-text);
      margin-bottom: 1rem;
    }

    .contact-subtitle {
      font-size: 1.2rem;
      color: var(--current-text-secondary);
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .contact-method {
      background: var(--current-white);
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--current-border);
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      position: relative;
      overflow: hidden;
      transform: translateY(0);
    }

    .contact-method:hover {
      transform: translateY(-12px);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
      border-color: var(--current-primary);
    }

    .contact-method::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.6s ease;
    }

    .contact-method:hover::after {
      left: 100%;
    }

    .contact-method::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--current-primary), var(--current-secondary));
    }

    .method-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    .method-title {
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 0.5rem;
      text-align: center;
    }

    .method-description {
      color: var(--current-text-secondary);
      margin-bottom: 1.5rem;
      text-align: center;
      line-height: 1.5;
    }

    .method-action {
      display: block;
      width: 100%;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      background: var(--current-primary);
      color: white;
      text-decoration: none;
      text-align: center;
      font-weight: 500;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
    }

    .method-action:hover {
      background: var(--current-secondary);
      transform: translateY(-2px);
    }

    .social-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .social-card {
      background: var(--current-white);
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid var(--current-border);
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .social-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }

    .social-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, var(--current-primary)05, var(--current-secondary)05);
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .social-card:hover::before {
      opacity: 1;
    }

    .social-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .social-platform {
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 0.5rem;
    }

    .social-handle {
      color: var(--current-text-secondary);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .social-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      background: var(--current-primary)15;
      color: var(--current-primary);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: var(--current-primary);
      color: white;
    }

    .collaboration-section {
      background: linear-gradient(135deg, var(--current-primary)10, var(--current-secondary)10);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
    }

    .collab-title {
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--current-text);
      margin-bottom: 1rem;
    }

    .collab-description {
      color: var(--current-text-secondary);
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }

    .collab-topics {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .topic-tag {
      background: var(--current-white);
      color: var(--current-primary);
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      font-weight: 500;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--current-border);
    }

    .cta-button {
      display: inline-block;
      padding: 1rem 2rem;
      border-radius: 50px;
      background: var(--current-primary);
      color: white;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .cta-button:hover {
      background: var(--current-secondary);
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
    }

    .floating-contacts {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      opacity: 0.05;
    }

    .contact-element {
      position: absolute;
      font-size: 1.5rem;
      animation: contact-float 20s infinite linear;
    }

    @keyframes contact-float {
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

    .footer-section {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid var(--current-border);
      text-align: center;
    }

    .footer-text {
      color: var(--current-text-secondary);
      margin-bottom: 1rem;
    }

    .footer-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .footer-link {
      color: var(--current-primary);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .footer-link:hover {
      color: var(--current-secondary);
    }

    @media (max-width: 768px) {
      .contact-container {
        padding: 1rem;
      }
      
      .contact-title {
        font-size: 2rem;
      }
      
      .contact-grid,
      .social-grid {
        grid-template-columns: 1fr;
      }
      
      .collab-topics {
        flex-direction: column;
        align-items: center;
      }
      
      .footer-links {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `;

  firstUpdated() {
    this.createFloatingContactElements();
  }

  createFloatingContactElements() {
    const container = this.shadowRoot.querySelector('.floating-contacts');
    const elements = ['📧', '💼', '🔗', '📱', '🌐', '💬', '📞', '🤝'];
    
    elements.forEach((element, index) => {
      const div = document.createElement('div');
      div.className = 'contact-element';
      div.textContent = element;
      div.style.left = `${Math.random() * 100}%`;
      div.style.animationDelay = `${index * 2.5}s`;
      container.appendChild(div);
    });
  }

  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      // Could add a toast notification here
      console.log('Copied to clipboard:', text);
    });
  }

  render() {
    const socialLinks = [
      {
        platform: 'LinkedIn',
        icon: '💼',
        handle: 'sandesh-bagmare',
        url: profileData.contact.linkedin,
        description: 'Professional network & career updates'
      },
      {
        platform: 'GitHub',
        icon: '🔗',
        handle: 'sandesh-bagmare',
        url: profileData.contact.github,
        description: 'Code repositories & open source'
      },
      {
        platform: 'Email',
        icon: '📧',
        handle: profileData.contact.email,
        url: `mailto:${profileData.contact.email}`,
        description: 'Direct communication'
      },
      {
        platform: 'Portfolio',
        icon: '🌐',
        handle: 'sandesh-portfolio.com',
        url: '#',
        description: 'This website'
      }
    ];

    return html`
      <div class="floating-contacts"></div>

      <div class="contact-container">
        <div class="contact-header">
          <div class="contact-logo">🤝</div>
          <h1 class="contact-title">Let's Connect</h1>
          <div class="contact-subtitle">
            Ready to collaborate on AI projects, discuss opportunities, or explore innovative solutions together. 
            I'm always open to meaningful conversations and new connections.
          </div>
        </div>

        <div class="contact-grid">
          <div class="contact-method interactive-card sparkle-container">
            <div class="method-icon">📧</div>
            <h3 class="method-title">Email Me</h3>
            <div class="method-description">
              Send me a direct message for project inquiries, collaboration opportunities, or general questions.
            </div>
            <a href="mailto:${profileData.contact.email}" class="method-action">
              ${profileData.contact.email}
            </a>
          </div>

          <div class="contact-method interactive-card sparkle-container">
            <div class="method-icon">💼</div>
            <h3 class="method-title">LinkedIn</h3>
            <div class="method-description">
              Connect with me professionally and stay updated with my latest career milestones and industry insights.
            </div>
            <a href="${profileData.contact.linkedin}" target="_blank" class="method-action">
              Connect on LinkedIn
            </a>
          </div>

          <div class="contact-method interactive-card sparkle-container">
            <div class="method-icon">🔗</div>
            <h3 class="method-title">GitHub</h3>
            <div class="method-description">
              Explore my code repositories, contribute to projects, or collaborate on open-source initiatives.
            </div>
            <a href="${profileData.contact.github}" target="_blank" class="method-action">
              View GitHub Profile
            </a>
          </div>
        </div>

        <div class="social-grid">
          ${socialLinks.map(social => html`
            <div class="social-card">
              <div class="social-icon">${social.icon}</div>
              <div class="social-platform">${social.platform}</div>
              <div class="social-handle">${social.handle}</div>
              <a href="${social.url}" target="_blank" class="social-link">
                Visit ${social.platform}
              </a>
            </div>
          `)}
        </div>

        <div class="collaboration-section">
          <h2 class="collab-title">Open for Collaboration</h2>
          <div class="collab-description">
            I'm passionate about working on innovative projects that make a positive impact. 
            Whether you're looking for an AI engineer, a dedicated team member, or a creative problem solver, 
            I'd love to hear about your ideas and explore how we can work together.
          </div>
          
          <div class="collab-topics">
            <span class="topic-tag">🤖 AI & Machine Learning</span>
            <span class="topic-tag">🌐 Web Development</span>
            <span class="topic-tag">📱 IoT Solutions</span>
            <span class="topic-tag">🔒 Cybersecurity</span>
            <span class="topic-tag">☁️ Cloud Technologies</span>
            <span class="topic-tag">🚀 Startup Projects</span>
          </div>

          <a href="mailto:${profileData.contact.email}?subject=Collaboration Opportunity" class="cta-button">
            Start a Conversation
          </a>
        </div>

        <div class="footer-section">
          <div class="footer-text">
            © 2025 Sandesh Bagmare. Built with ❤️ using Lit Web Components.
          </div>
          <div class="footer-links">
            <a href="#profile" class="footer-link">About</a>
            <a href="#projects" class="footer-link">Projects</a>
            <a href="#education" class="footer-link">Education</a>
            <a href="#experience" class="footer-link">Experience</a>
            <a href="#certifications" class="footer-link">Certifications</a>
            <a href="mailto:${profileData.contact.email}" class="footer-link">Contact</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('contact-section', ContactSection);
