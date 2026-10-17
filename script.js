// ============================================
// Theme Toggle
// ============================================

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

// Get saved theme or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// ============================================
// Navigation & Mobile Menu
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ============================================
// Smooth Scrolling
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Skill Progress Bars Animation
// ============================================

const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bar.style.width = width + '%';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(bar);
    });
};

// Initialize skill bar animations
animateSkillBars();

// ============================================
// Scroll Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.project-card, .timeline-item, .cert-card, .skill-category, .about-text, .about-image'
);

animateElements.forEach(el => observer.observe(el));

// ============================================
// Contact Form Handling
// ============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a backend
    // For now, we'll just show a success message
    console.log('Form submitted:', formData);
    
    // Show success message
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitButton.style.background = 'var(--accent-tertiary)';
    submitButton.disabled = true;
    
    // Reset form
    contactForm.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.style.background = '';
        submitButton.disabled = false;
    }, 3000);
});

// ============================================
// Download CV Handler
// ============================================

const downloadCV = document.getElementById('downloadCV');

downloadCV.addEventListener('click', (e) => {
    e.preventDefault();
    
    // In a real implementation, you would link to an actual CV file
    // For now, we'll create a simple alert
    alert('CV download functionality would be implemented here. In production, this would link to your actual CV PDF file.');
    
    // Example implementation:
    // const link = document.createElement('a');
    // link.href = 'path/to/your/cv.pdf';
    // link.download = 'YourName_CV.pdf';
    // link.click();
});

// ============================================
// Typing Animation for Hero
// ============================================

const typingElement = document.querySelector('.typing-animation');
if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.borderRight = '2px solid var(--code-green)';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            typingElement.style.borderRight = 'none';
        }
    };
    
    // Start typing animation after a short delay
    setTimeout(typeWriter, 500);
}

// ============================================
// Navbar Background on Scroll
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// Project Card Hover Effects
// ============================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// Terminal Window Animation
// ============================================

const terminalWindow = document.querySelector('.terminal-window');

if (terminalWindow) {
    // Add a subtle glow effect on hover
    terminalWindow.addEventListener('mouseenter', () => {
        terminalWindow.style.boxShadow = '0 8px 32px rgba(0, 217, 255, 0.3)';
    });
    
    terminalWindow.addEventListener('mouseleave', () => {
        terminalWindow.style.boxShadow = 'var(--shadow-lg)';
    });
}

// ============================================
// Smooth Page Load
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// Console Easter Egg
// ============================================

console.log('%c👋 Hello Developer!', 'font-size: 20px; font-weight: bold; color: #00d9ff;');
console.log('%cInterested in my code? Check out my GitHub!', 'font-size: 14px; color: #94a3b8;');
console.log('%cPortfolio built with HTML, CSS, and JavaScript', 'font-size: 12px; color: #64748b;');

// ============================================
// Performance Optimization: Lazy Loading Images
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Keyboard Navigation Enhancement
// ============================================

document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// Copy Email to Clipboard (Optional Enhancement)
// ============================================

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Optional: Copy email to clipboard on click
        // Uncomment to enable
        /*
        e.preventDefault();
        const email = link.getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email).then(() => {
            // Show toast notification
            console.log('Email copied to clipboard!');
        });
        */
    });
});


