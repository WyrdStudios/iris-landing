#!/bin/bash

# Minification script for Iris Personalized Assistant Website
# Copyright (c) 2025 Iris Personalized Assistant. All rights reserved.
# 
# This software is proprietary and confidential. Unauthorized copying, 
# distribution, modification, public display, or public performance of 
# this software is strictly prohibited.
# 
# This script creates minified versions of CSS and JavaScript files
# For licensing inquiries, contact: contact@meplusiris.com

echo "Starting Iris website minification process..."
echo "Working from tools/ directory, accessing files in root..."

# Minify CSS
echo "Minifying CSS..."
npx clean-css-cli ../css/iris-styles.css -o ../css/iris-styles.min.css

# Minify JavaScript files separately
echo "Minifying JavaScript..."

# Minify iris-main.js
npx terser ../js/iris-main.js -o ../js/iris-main.min.js --compress --mangle

# Minify include-components.js
npx terser ../js/include-components.js -o ../js/include-components.min.js --compress --mangle

echo "Minification complete!"
echo "Generated files:"
echo "  - css/iris-styles.min.css"
echo "  - js/iris-main.min.js"
echo "  - js/include-components.min.js"
echo ""
echo "Remember to update HTML files to reference the minified versions for production."
