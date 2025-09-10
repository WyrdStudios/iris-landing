# Iris Personalized Assistant Website - Build Tools

This directory contains the build tools and development utilities for the Iris Personalized Assistant website.

## Build Tools Overview

The Iris website uses a modern build system optimized for performance and development efficiency:

- **CSS Minification**: Uses `clean-css-cli` for optimal CSS compression
- **JavaScript Minification**: Uses `terser` for advanced JS minification with compression and mangling
- **Development Server**: Python-based local server with automatic browser opening
- **GitHub Pages Integration**: Jekyll configuration for seamless deployment

## Dependencies

### Required Tools
- **Node.js** (v14.17.0 or higher)
- **npm** (v6.14.13 or higher)
- **Python 3** (for development server)

### Build Dependencies
- `clean-css-cli`: CSS minification and optimization
- `cssnano`: Advanced CSS processing
- `terser`: JavaScript minification and compression

## Getting Started

### 1. Install Dependencies
```bash
cd tools
npm install
```

### 2. Development Workflow

#### Start Development Server
```bash
cd tools
python3 run_server.py
```
The server will automatically:
- Start on `http://localhost:8000`
- Open your browser to the homepage
- Handle HTML file extensions automatically
- Provide graceful shutdown with Ctrl+C

#### Build for Production
```bash
cd tools
./minify.sh
```

**Note:** The build tools are located in the `tools/` directory, but they work with files in the repository root (css/, js/, etc.).

This creates minified versions:
- `css/iris-styles.min.css`
- `js/iris-main.min.js`
- `js/include-components.min.css`

## File Structure

```
iris-landing/              # Repository root
├── tools/                 # Build tools directory
│   ├── package.json      # Node.js dependencies and scripts
│   ├── minify.sh         # Minification script (executable)
│   ├── run_server.py     # Development server
│   ├── README.md         # This documentation
│   └── node_modules/     # Installed dependencies
├── css/                   # Stylesheets (source + minified)
├── js/                    # JavaScript (source + minified)
├── components/            # Reusable HTML components
├── images/                # Website assets
├── index.html             # Main homepage
└── other HTML files       # Additional pages
```

## Build Process

### CSS Minification
- Source: `css/iris-styles.css`
- Output: `css/iris-styles.min.css`
- Features: Compression, optimization, vendor prefix handling

### JavaScript Minification
- Source files:
  - `js/iris-main.js` → `js/iris-main.min.js`
  - `js/include-components.js` → `js/include-components.min.js`
- Features: Compression, mangling, dead code elimination

## Deployment

### GitHub Pages
The website is configured for GitHub Pages deployment with:
- `_config.yml`: Jekyll configuration
- Automatic exclusion of development files
- Optimized build settings

### Production Checklist
1. Run minification: `./minify.sh`
2. Update HTML files to reference `.min.css` and `.min.js` files
3. Test locally with production files
4. Commit and push to repository

## Development Guidelines

### Making Changes
1. **Edit source files** (unminified versions)
2. **Run minification** after changes: `./minify.sh`
3. **Test locally** using development server
4. **Update HTML references** for production deployment

### File Naming Conventions
- Source files: `filename.css`, `filename.js`
- Minified files: `filename.min.css`, `filename.min.js`
- Always keep both versions in repository

## Troubleshooting

### Common Issues

1. **Minification fails**
   - Check Node.js version: `node --version`
   - Reinstall dependencies: `npm install`
   - Verify file paths in minify.sh

2. **Development server won't start**
   - Check Python version: `python3 --version`
   - Verify port 8000 is available
   - Check file permissions on run_server.py

3. **Files not updating**
   - Clear browser cache
   - Restart development server
   - Check file paths and permissions

### Debug Mode
- Check browser developer tools for errors
- Use Network tab to verify resource loading
- Check Console for JavaScript errors

## Performance Benefits

### Minification Results
- **CSS**: ~60-70% size reduction
- **JavaScript**: ~50-60% size reduction
- **Load Time**: Improved page load performance
- **Bandwidth**: Reduced data usage

### Development Benefits
- **Hot Reload**: Automatic browser refresh
- **Error Handling**: Graceful fallbacks
- **Cross-Platform**: Works on macOS, Linux, Windows

## Contributing

### Development Guidelines
1. **Code Style**: Follow existing patterns
2. **Testing**: Test changes across devices
3. **Minification**: Always run after changes
4. **Documentation**: Update README for new features

### Pull Request Process
1. Make changes to source files
2. Run minification script
3. Test locally with development server
4. Create pull request with description

## Support

For technical questions or build issues:
- **Email**: contact@meplusiris.com
- **GitHub Issues**: Repository Issues page

---

**Built with ❤️ for Iris AI - Your Personalized Assistant, Built for You.**
