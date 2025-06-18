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

// Smooth scrolling and navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links with hash
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80; // Account for fixed navbar
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const mobileNavLinks = navMenu.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-section, .security-item, .faq-item, .use-case');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // FAQ item click interaction
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a subtle click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Smooth scrolling for footer links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to footer links
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add click animation to footer buttons
    const allFooterLinks = document.querySelectorAll('.footer-links a');
    allFooterLinks.forEach(link => {
        link.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Add CSS classes for animations
const style = document.createElement('style');
style.textContent = `
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 136, 204, 0.1);
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        gap: 1rem;
        z-index: 999;
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log('%c🚀 Sofi AI Wallet Landing Page', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cPowered by Pip Install AI Technologies', 'color: #764ba2; font-size: 14px;');
console.log('%cBuilding the Future of Fintech in Africa! 🌍', 'color: #ff6b6b; font-size: 12px;');

// Initialize page visibility
document.body.style.opacity = '1';

// Sofi Screenshots Carousel
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Auto-advance carousel
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (currentSlide + 1) % totalSlides;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Manual dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index !== currentSlide) {
                slides[currentSlide].classList.remove('active');
                dots[currentSlide].classList.remove('active');
                
                currentSlide = index;
                
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
            }
        });
    });

    // Auto-advance every 4 seconds
    setInterval(nextSlide, 4000);

    // Pause on hover
    const carousel = document.querySelector('.sofi-carousel');
    let autoAdvance = setInterval(nextSlide, 4000);
    
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoAdvance);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoAdvance = setInterval(nextSlide, 4000);
    });
});