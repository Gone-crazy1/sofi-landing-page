// SOFI Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // MOBILE NAVIGATION
    // ===================================
    
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // ===================================
    // SMOOTH SCROLLING
    // ===================================
    
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // NAVBAR SCROLL EFFECT
    // ===================================
    
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ===================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .step, .stat-card');
    animateElements.forEach(el => observer.observe(el));
    
    // ===================================
    // TYPING EFFECT FOR HERO TITLE
    // ===================================
    
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Apply typing effect to hero title (optional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Uncomment the line below if you want typing effect
        // typeWriter(heroTitle, originalText, 50);
    }
    
    // ===================================
    // WHATSAPP CHAT SIMULATION
    // ===================================
    
    function simulateChat() {
        const chatDemo = document.querySelector('.chat-demo');
        if (!chatDemo) return;
        
        const messages = [
            { type: 'user', text: 'Hi SOFI' },
            { type: 'bot', text: '👋 Welcome to SOFI! How can I help you today?' },
            { type: 'user', text: 'Buy 100 naira MTN airtime' },
            { type: 'bot', text: '✅ Airtime purchased successfully!<br>💰 Amount: ₦100<br>📱 Network: MTN<br>📞 Phone: 08012345678' }
        ];
        
        let currentMessage = 0;
        
        function addMessage() {
            if (currentMessage < messages.length) {
                const message = messages[currentMessage];
                const messageElement = document.createElement('div');
                messageElement.className = `chat-message ${message.type}`;
                messageElement.innerHTML = `<p>${message.text}</p>`;
                
                chatDemo.appendChild(messageElement);
                
                // Scroll to bottom
                chatDemo.scrollTop = chatDemo.scrollHeight;
                
                currentMessage++;
                
                // Add next message after delay
                setTimeout(addMessage, 2000);
            } else {
                // Reset animation after all messages
                setTimeout(() => {
                    chatDemo.innerHTML = '';
                    currentMessage = 0;
                    setTimeout(addMessage, 1000);
                }, 5000);
            }
        }
        
        // Start chat simulation
        setTimeout(addMessage, 1000);
    }
    
    // Start chat simulation
    simulateChat();
    
    // ===================================
    // STATS COUNTER ANIMATION
    // ===================================
    
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const countUp = (element, target, duration = 2000) => {
            const increment = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                // Format the number
                if (target.toString().includes('K')) {
                    element.textContent = Math.floor(current / 1000) + 'K+';
                } else if (target.toString().includes('M')) {
                    element.textContent = '₦' + Math.floor(current / 1000000) + 'M+';
                } else if (target.toString().includes('%')) {
                    element.textContent = current.toFixed(1) + '%';
                } else {
                    element.textContent = current.toString();
                }
            }, 16);
        };
        
        // Observe stats section
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statNumbers.forEach(stat => {
                        const text = stat.textContent;
                        let target = 0;
                        
                        if (text.includes('K')) {
                            target = parseInt(text) * 1000;
                        } else if (text.includes('M')) {
                            target = parseInt(text) * 1000000;
                        } else if (text.includes('%')) {
                            target = parseFloat(text);
                        } else {
                            target = parseInt(text) || 0;
                        }
                        
                        if (target > 0) {
                            countUp(stat, target);
                        }
                    });
                    
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        const statsSection = document.querySelector('.about-stats');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }
    }
    
    animateStats();
    
    // ===================================
    // CONTACT FORM HANDLING (if added later)
    // ===================================
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to your backend
            console.log('Contact form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! We\'ll get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // ===================================
    // WHATSAPP LINK TRACKING
    // ===================================
    
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track WhatsApp link clicks
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    event_category: 'engagement',
                    event_label: 'WhatsApp CTA',
                    custom_parameter_1: this.href.includes('2348056487759') ? 'SOFI_Bot' : 'Customer_Support'
                });
            }
            
            console.log('WhatsApp link clicked:', this.href.includes('2348056487759') ? 'SOFI Bot' : 'Customer Support');
        });
    });
    
    // ===================================
    // LAZY LOADING FOR IMAGES
    // ===================================
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
    
    // ===================================
    // PERFORMANCE MONITORING
    // ===================================
    
    // Log page load time
    window.addEventListener('load', function() {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
    });
    
    // ===================================
    // ACCESSIBILITY IMPROVEMENTS
    // ===================================
    
    // Skip to main content
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only';
    skipLink.addEventListener('focus', function() {
        this.classList.remove('sr-only');
    });
    skipLink.addEventListener('blur', function() {
        this.classList.add('sr-only');
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content id to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.id = 'main-content';
    }
    
    // ===================================
    // ERROR HANDLING
    // ===================================
    
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
    });
    
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
    });
    
    console.log('SOFI Landing Page JavaScript loaded successfully! 🚀');
});

// ===================================
// CSS FOR MOBILE MENU (to be added to styles.css)
// ===================================

const mobileMenuCSS = `
@media (max-width: 767px) {
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background-color: var(--white);
        box-shadow: var(--shadow-lg);
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: var(--spacing-2xl);
        transition: var(--transition-normal);
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-toggle.active .bar:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
    }
    
    .nav-toggle.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active .bar:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
    }
    
    .navbar.scrolled {
        background-color: rgba(255, 255, 255, 0.98);
        box-shadow: var(--shadow-md);
    }
}
`;

// Add mobile menu CSS if not already present
if (!document.querySelector('#mobile-menu-styles')) {
    const style = document.createElement('style');
    style.id = 'mobile-menu-styles';
    style.textContent = mobileMenuCSS;
    document.head.appendChild(style);
}
