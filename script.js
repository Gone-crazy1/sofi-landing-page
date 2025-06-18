// DOM Elements
const carousel = document.getElementById('photoCarousel');
const slides = carousel.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('carouselIndicators');

// Carousel State
let currentSlide = 0;
const totalSlides = slides.length;
let slideInterval;

// Initialize Carousel
function initCarousel() {
    // Create indicators
    createIndicators();
    
    // Set initial active slide
    updateSlide(0);
    
    // Start auto-play
    startAutoPlay();
}

// Create indicator dots
function createIndicators() {
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
}

// Update slide display
function updateSlide(slideIndex) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    document.querySelectorAll('.indicator').forEach(indicator => 
        indicator.classList.remove('active')
    );
    
    // Add active class to current slide and indicator
    slides[slideIndex].classList.add('active');
    document.querySelectorAll('.indicator')[slideIndex].classList.add('active');
    
    currentSlide = slideIndex;
}

// Go to specific slide
function goToSlide(slideIndex) {
    updateSlide(slideIndex);
    resetAutoPlay();
}

// Next slide
function nextSlide() {
    const next = (currentSlide + 1) % totalSlides;
    updateSlide(next);
}

// Previous slide
function prevSlide() {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide(prev);
}

// Auto-play functionality
function startAutoPlay() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopAutoPlay() {
    clearInterval(slideInterval);
}

function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Event Listeners
prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
});

// Pause auto-play on hover
carousel.addEventListener('mouseenter', stopAutoPlay);
carousel.addEventListener('mouseleave', startAutoPlay);

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoPlay();
});

carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoPlay();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide(); // Swipe left - next slide
        } else {
            prevSlide(); // Swipe right - previous slide
        }
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button Click Handlers
const telegramCTAs = document.querySelectorAll('#telegram-cta, #telegram-cta-2');
telegramCTAs.forEach(cta => {
    cta.addEventListener('click', (e) => {
        // The links now work directly - this is just for analytics tracking if needed
        console.log('Telegram CTA clicked - redirecting to: https://t.me/getsofi_bot');
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Page Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Navbar scroll effect (if you want to add a navbar later)
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
    
    lastScrollTop = scrollTop;
});

// Bank logo hover effects
document.addEventListener('DOMContentLoaded', () => {
    const bankLogos = document.querySelectorAll('.bank-logo');
    bankLogos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.1)';
            logo.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'scale(1)';
        });
    });
});

// Social media links (you can customize these URLs)
const socialLinks = {
    linkedin: 'https://linkedin.com/company/pip-install-ai',
    instagram: 'https://instagram.com/pip_install_ai',
    twitter: 'https://twitter.com/pip_install_ai',
    facebook: 'https://facebook.com/pip.install.ai'
};

document.addEventListener('DOMContentLoaded', () => {
    // Update social media links
    const socialElements = document.querySelectorAll('.social-links a');
    socialElements.forEach(link => {
        const icon = link.querySelector('i');
        if (icon) {
            if (icon.classList.contains('fa-linkedin')) {
                link.href = socialLinks.linkedin;
            } else if (icon.classList.contains('fa-instagram')) {
                link.href = socialLinks.instagram;
            } else if (icon.classList.contains('fa-twitter')) {
                link.href = socialLinks.twitter;
            } else if (icon.classList.contains('fa-facebook')) {
                link.href = socialLinks.facebook;
            }
        }
    });
});

// Performance optimization: Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
});

// Statistics counter animation
function animateCounter(element, target, duration = 2000) {
    let startTime = null;
    const startValue = 0;
    
    function updateCounter(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const currentValue = Math.floor(progress * target);
        element.textContent = formatNumber(currentValue);
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = formatNumber(target);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Initialize counters when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate statistics (you can adjust these numbers)
            const stats = [
                { element: document.querySelector('.stat-number'), value: 10000 },
                // Add more stat animations as needed
            ];
            
            // Only animate once
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
    
    // Initialize carousel
    initCarousel();
});

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Fallback for broken images
            this.style.display = 'none';
            console.warn('Image failed to load:', this.src);
        });
    });
});

// Console welcome message
console.log('%c🚀 Sofi AI Wallet Landing Page', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cPowered by Pip Install AI Technologies', 'color: #764ba2; font-size: 14px;');
console.log('%cBuilding the Future of Fintech in Africa! 🌍', 'color: #ff6b6b; font-size: 12px;');

// Initialize page visibility
document.body.style.opacity = '1';