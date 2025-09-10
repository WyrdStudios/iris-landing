# Iris Personalized Assistant - Landing Page

**Your Personalized Assistant, Built for You.**

This repository contains the complete landing page and marketing website for Iris Personalized Assistant, an intelligent assistant that learns and adapts to individual users' thinking styles and preferences.

## Project Overview

Iris is an intelligent assistant designed around the principle that AI should adapt to you, not the other way around. This website showcases Iris's unique approach to personalized AI assistance, emphasizing privacy, simplicity, and human-centered design.

**Live Site:** [https://meplusiris.com](https://meplusiris.com)

## Repository Structure

```
iris-landing/
├── tools/                 # Build system and development tools
│   ├── package.json      # Node.js dependencies
│   ├── minify.sh         # CSS/JS minification script
│   ├── run_server.py     # Local development server
│   └── README.md         # Build system documentation
├── css/                   # Stylesheets
│   ├── iris-styles.css   # Source stylesheet
│   └── iris-styles.min.css # Minified production version
├── js/                    # JavaScript files
│   ├── iris-main.js      # Core functionality
│   ├── iris-main.min.js  # Minified version
│   ├── include-components.js # Component loader
│   └── include-components.min.js # Minified version
├── components/            # Reusable HTML components
│   ├── header.html       # Navigation component
│   └── footer.html       # Footer with newsletter signup
├── images/                # Website assets and logos
├── index.html             # Homepage
├── waitlist.html          # Waitlist signup page
└── _config.yml            # Jekyll configuration for GitHub Pages
```

## Quick Start

### Prerequisites
- **Node.js** (v14.17.0 or higher)
- **Python 3** (for development server)
- **Modern web browser**

### Development Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd iris-landing
   ```

2. **Install build dependencies:**
   ```bash
   cd tools
   npm install
   cd ..
   ```

3. **Start development server:**
   ```bash
   cd tools
   python3 run_server.py
   ```
   
   The server will automatically open your browser to `http://localhost:8000`

### Production Build

```bash
cd tools
./minify.sh
```

This creates optimized, minified versions of CSS and JavaScript files for production deployment.

## Design System

### Brand Colors
- **Primary**: Sage Green (`#6B7C32`) - Represents growth and intelligence
- **Secondary**: Rose (`#B85A8A`) - Adds warmth and personality  
- **Accent**: Gold (`#D4A017`) - Highlights important elements
- **Error**: Red (`#C94C4C`) - Clear error states

### Typography
- **Headings**: DM Serif Display (elegant, readable)
- **Body**: Lato (clean, modern, accessible)

### Key Design Principles
- **Human-Centered**: Every element serves the user's needs
- **Privacy-First**: Clear messaging about data protection
- **Accessibility**: High contrast, semantic HTML, keyboard navigation
- **Performance**: Optimized assets, fast loading times

## Pages & Features

### Core Pages
- **Homepage** (`index.html`): Main landing page with value proposition
- **Waitlist** (`waitlist.html`): Early access signup with demo

### Key Features
- **Responsive Design**: Mobile-first approach with breakpoints
- **Dark/Light Theme**: System preference detection with manual toggle
- **Interactive Demo**: Live archetype switching (Architect/Catalyst/Scholar)
- **Newsletter Integration**: Email signup with validation
- **Component System**: Reusable header/footer components

## Build System

The website uses a modern build pipeline optimized for performance:

- **CSS Minification**: 29% size reduction using clean-css-cli
- **JavaScript Minification**: 37% size reduction using terser
- **Development Server**: Python-based with hot reload
- **GitHub Pages**: Jekyll configuration for seamless deployment

See `tools/README.md` for detailed build system documentation.

## Development Workflow

### Making Changes

1. **Edit source files** (unminified versions in `css/` and `js/`)
2. **Run minification** after changes:
   ```bash
   cd tools && ./minify.sh
   ```
3. **Test locally** using the development server
4. **Commit changes** with descriptive messages

### File Organization
- **Source files**: Always edit the unminified versions
- **Minified files**: Generated automatically, don't edit directly
- **Components**: Reusable HTML fragments in `components/`
- **Assets**: Optimized images in `images/`

## Contributing

### Internal Team Guidelines
1. **Code Style**: Follow existing patterns and conventions
2. **Testing**: Test changes across different devices and browsers
3. **Minification**: Always run minification script after changes
4. **Commit Messages**: Use descriptive commit messages
5. **Pull Requests**: Create PRs for significant changes

### Review Process
1. **Create feature branch** from main
2. **Make changes** and test locally
3. **Run build process** to ensure minification works
4. **Create pull request** with description
5. **Team review** and approval
6. **Merge to main** for deployment


---

**Built with ❤️ for Iris AI - Your Personalized Assistant, Built for You.**

*This repository is proprietary and confidential. All rights reserved.*
