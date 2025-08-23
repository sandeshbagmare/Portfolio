# 🚀 Sandesh Bagmare - AI Engineer Portfolio

A futuristic, interactive portfolio website built with **Lit Web Components** that dynamically changes themes as you scroll through different sections, each designed to mimic the UI/UX of relevant platforms (LinkedIn, GitHub, VIT, PTC ThingWorx, Coursera).

## ✨ Features

### 🎨 Dynamic Theme Switching
- **LinkedIn-style** Personal section (blue theme)
- **GitHub-style** Projects section (dark theme)
- **VIT-style** Education section (university theme)
- **PTC ThingWorx-style** Experience section (industrial theme)
- **Coursera-style** Certifications section (learning theme)

### 🌊 Interactive Effects
- **Water ripple effects** on click
- **Floating particles** and geometric shapes
- **Cursor trail effects** (desktop only)
- **Animated backgrounds** with floating elements
- **Smooth scroll transitions**

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Progressive enhancement

### 🎯 Professional Content
- Complete profile information
- 7+ detailed project showcases
- Educational background
- Professional experience at PTC
- 10+ certifications
- Contact information and social links

## 🛠️ Tech Stack

- **Lit** - Modern web components framework
- **Vite** - Fast build tool and dev server
- **CSS Custom Properties** - Dynamic theming
- **ES6+ JavaScript** - Modern JavaScript features
- **HTML5** - Semantic markup

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download** this project to your local machine

2. **Navigate to the project directory**:
   ```bash
   cd sandesh-portfolio
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
sandesh-portfolio/
├── src/
│   ├── components/           # Lit web components
│   │   ├── portfolio-app.js     # Main app component
│   │   ├── profile-section.js   # LinkedIn-style profile
│   │   ├── projects-section.js  # GitHub-style projects
│   │   ├── education-section.js # VIT-style education
│   │   ├── experience-section.js# PTC-style experience
│   │   ├── certifications-section.js # Coursera-style certs
│   │   ├── contact-section.js   # Contact information
│   │   └── scroll-effects.js    # Interactive effects
│   ├── data/
│   │   └── portfolio-data.js    # All portfolio data
│   ├── styles/
│   │   └── global.css          # Global styles & themes
│   └── main.js                 # Entry point
├── index.html                  # Main HTML file
├── package.json               # Dependencies & scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🎨 Customization

### Adding Your Photos

1. Create an `images` folder in the `public` directory
2. Add your professional photos:
   - `profile-photo.jpg` - Main profile picture
   - `cover-photo.jpg` - Cover/banner image
   - Any other photos you want to include

3. Update the image references in the components or data files

### Updating Portfolio Data

Edit `src/data/portfolio-data.js` to customize:

- **Personal Information**: Name, title, contact details
- **Projects**: Add/remove/modify your projects
- **Education**: Update educational background
- **Experience**: Modify work experience
- **Certifications**: Add your certifications
- **Skills**: Update your skill set

### Customizing Themes

Modify `src/styles/global.css` to change:

- **Color schemes** for each section
- **Typography** and fonts
- **Spacing** and layout
- **Animation** timings and effects

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component import to `src/main.js`
3. Include the component in `portfolio-app.js`
4. Add corresponding theme variables in `global.css`

## 🌐 Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

1. Connect your repository to Vercel
2. Vercel automatically detects Vite projects
3. Deploy with default settings

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📧 Contact & Social Links

The portfolio includes multiple ways to connect:

- **Email**: [sandesh.bagmare@gmail.com](mailto:sandesh.bagmare@gmail.com)
- **LinkedIn**: [linkedin.com/in/sandesh-bagmare](https://linkedin.com/in/sandesh-bagmare)
- **GitHub**: [github.com/sandesh-bagmare](https://github.com/sandesh-bagmare)

## 🎯 Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

All modern browsers that support Web Components and ES6+ features.

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with ❤️ using **Lit Web Components**
- Inspired by modern design principles
- UI/UX inspired by LinkedIn, GitHub, VIT, PTC, and Coursera
- Thanks to the open-source community

---

**Built by Sandesh (Narendra) Bagmare** - Associate Software Analyst @ PTC | AI Engineer | E&TC VITP' 25

*Last updated: August 2025*
