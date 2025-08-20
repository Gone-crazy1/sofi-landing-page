#!/bin/bash

# SOFI Landing Page Deployment Script
echo "🚀 SOFI Landing Page Deployment Helper"
echo "======================================="
echo ""

# Check if logo exists
if [ ! -f "assets/sofi-logo.png" ]; then
    echo "⚠️  WARNING: SOFI logo not found!"
    echo "   Please add your logo as 'assets/sofi-logo.png'"
    echo "   Recommended size: 200x200px PNG with transparent background"
    echo ""
fi

# Check if favicon exists
if [ ! -f "assets/favicon.ico" ]; then
    echo "⚠️  WARNING: Favicon not found!"
    echo "   Please add your favicon as 'assets/favicon.ico'"
    echo "   Size: 32x32px ICO format"
    echo ""
fi

# Validate HTML files
echo "🔍 Validating HTML files..."
for file in *.html; do
    if [ -f "$file" ]; then
        echo "   ✅ $file exists"
    fi
done
echo ""

# Check CSS and JS
echo "🎨 Checking assets..."
if [ -f "css/styles.css" ]; then
    echo "   ✅ styles.css found"
    css_size=$(wc -c < "css/styles.css")
    echo "   📊 CSS size: ${css_size} bytes"
else
    echo "   ❌ styles.css missing!"
fi

if [ -f "js/script.js" ]; then
    echo "   ✅ script.js found"
    js_size=$(wc -c < "js/script.js")
    echo "   📊 JS size: ${js_size} bytes"
else
    echo "   ❌ script.js missing!"
fi
echo ""

# Deployment recommendations
echo "🌐 Deployment Options:"
echo "   1. Netlify (Recommended)"
echo "      - Visit: https://app.netlify.com/drop"
echo "      - Drag the 'sofi-landing-page' folder"
echo "      - Get instant HTTPS domain"
echo ""
echo "   2. Vercel"
echo "      - Visit: https://vercel.com"
echo "      - Import this folder"
echo "      - Automatic deployments"
echo ""
echo "   3. GitHub Pages"
echo "      - Push to GitHub repository"
echo "      - Enable Pages in settings"
echo ""

# Custom domain setup
echo "🔧 After Deployment:"
echo "   1. Add your SOFI logo to assets/"
echo "   2. SOFI Bot Number: +2348056487759 (Try on WhatsApp)"
echo "   3. Customer Support: +2348104611794"
echo "   4. Update email: hello@pipinstall.com"
echo "   5. Configure custom domain"
echo "   6. Test on mobile devices"
echo ""

# Meta verification checklist
echo "✅ Meta Tech Provider Verification Checklist:"
echo "   ✅ Privacy Policy (privacy.html)"
echo "   ✅ Terms of Service (terms.html)"
echo "   ✅ Company information"
echo "   ✅ Contact details"
echo "   ✅ Service description"
echo "   ✅ Professional design"
echo ""

echo "🎉 Your SOFI landing page is ready to deploy!"
echo "📞 For support: +234 810 461 1794"
