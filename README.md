# 🚀 SOFI Landing Page

A beautiful, professional landing page for SOFI - Your WhatsApp Financial Assistant.

## 🎯 **Features**

✅ **Modern Design** - Blue & white theme with clean aesthetics  
✅ **Fully Responsive** - Works perfectly on desktop, tablet, and mobile  
✅ **Meta Compliant** - Privacy Policy & Terms for Tech Provider verification  
✅ **Fast Loading** - Optimized static site with minimal dependencies  
✅ **SEO Optimized** - Meta tags, structured data, and semantic HTML  
✅ **Accessible** - WCAG compliant with keyboard navigation support  

## 📱 **Pages Included**

1. **Home Page** (`index.html`) - Main landing page with features and CTA
2. **Privacy Policy** (`privacy.html`) - Comprehensive privacy policy for Meta compliance
3. **Terms of Service** (`terms.html`) - Legal terms and conditions

## 🛠️ **Tech Stack**

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid & Flexbox
- **Vanilla JavaScript** - No frameworks, pure performance
- **Google Fonts** - Inter font family
- **Font Awesome** - Professional icons

## 📦 **Project Structure**

```
sofi-landing-page/
├── index.html              # Main landing page
├── privacy.html            # Privacy policy page
├── terms.html              # Terms of service page
├── css/
│   └── styles.css          # All styles in one file
├── js/
│   └── script.js           # Interactive functionality
├── assets/
│   ├── README.md           # Assets instructions
│   ├── sofi-logo.png       # Your SOFI logo (add this)
│   └── favicon.ico         # Browser icon (add this)
└── README.md               # This file
```

## 🚀 **Deployment Options**

### Option 1: Netlify (Recommended)
1. Drag and drop the `sofi-landing-page` folder to [Netlify](https://app.netlify.com/drop)
2. Get instant HTTPS domain (e.g., `sofi-landing.netlify.app`)
3. Connect to Git for automatic deployments

### Option 2: Vercel
1. Upload folder to [Vercel](https://vercel.com)
2. Get instant deployment with custom domain support
3. Automatic HTTPS and global CDN

### Option 3: GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Access at `username.github.io/repository-name`

### Option 4: Traditional Web Hosting
1. Upload all files via FTP/cPanel
2. Point domain to hosting directory
3. Configure HTTPS certificate

## 🎨 **Customization**

### Adding Your Logo
1. Save your SOFI logo as `assets/sofi-logo.png` (200x200px recommended)
2. Save favicon as `assets/favicon.ico` (32x32px)
3. The site will automatically use these files

### Updating Contact Information
- **SOFI WhatsApp Number**: Search for `2348056487759` (main SOFI bot)
- **Customer Support**: Search for `2348104611794` (customer support)
- **Email**: Search for `hello@pipinstall.com` and update
- **Company Info**: Update in footer and about sections

### Customizing Colors
Primary colors are defined in CSS variables in `css/styles.css`:
```css
:root {
    --primary-blue: #1E3A8A;     /* Main brand color */
    --light-blue: #3B82F6;       /* Accent color */
    --accent-blue: #60A5FA;      /* Light accent */
}
```

### Adding Analytics
Add Google Analytics or other tracking codes before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📊 **Meta Tech Provider Compliance**

This landing page includes everything needed for Meta Tech Provider verification:

✅ **Company Information**
- Clear company name (Pipinstall Technology Limited)
- Business location (Lagos, Nigeria)
- Contact information

✅ **Legal Pages**
- Comprehensive Privacy Policy
- Detailed Terms of Service
- Data handling procedures

✅ **Service Description**
- Clear explanation of SOFI services
- WhatsApp integration details
- Feature descriptions

✅ **Professional Appearance**
- Modern, trustworthy design
- Responsive layout
- Fast loading times

## 🔧 **Local Development**

To run locally:

```bash
# Navigate to project directory
cd sofi-landing-page

# Start a local server (Python)
python -m http.server 8000

# Or use Node.js
npx serve

# Or use PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🌐 **Domain Setup**

### Custom Domain
1. Purchase domain (e.g., `sofi.pipinstall.com`)
2. Point DNS to your hosting provider
3. Configure SSL certificate
4. Update meta tags with new domain

### Subdomain Setup
If using a subdomain of your main domain:
1. Create CNAME record: `sofi.yourdomain.com`
2. Point to hosting provider
3. Update all references in HTML files

## 📈 **SEO Optimization**

The landing page includes:
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast loading times
- Mobile optimization
- Structured data markup

## 🛡️ **Security Features**

- No backend dependencies
- HTTPS enforced
- No user data collection on landing page
- Secure external links
- Content Security Policy ready

## 📞 **Support**

For questions about the landing page:
- WhatsApp: +234 810 461 1794
- Email: hello@pipinstall.com

## 📝 **License**

This landing page is created specifically for SOFI by Pipinstall Technology Limited.

---

**Ready to deploy!** 🚀 Just add your logo and deploy to your preferred hosting platform.
