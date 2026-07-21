/* =====================================================
   SIT ARCHIVE - ADVANCED ANIMATION CONTROLLER
   JavaScript for scroll-triggered and interactive animations
   Inspired by Stripe, Linear, Vercel, Apple
   ===================================================== */

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initScrollAnimations();
    initCounterAnimations();
    initStaggeredAnimations();
    initMagneticButtons();
    initTiltCards();
    initRippleEffect();
    initParallax();
    initTextReveal();
    initCursorEffects();
    addLoadedClass();
    initScrollProgress();
    initAmbientCursor();
    initCardSpotlight();
    initAutoReveal();
    initAutoStagger();
    initPageTransitions();
});

// ===== PAGE LOAD ANIMATION =====
function addLoadedClass() {
    document.body.classList.add('page-loaded');

    // Animate hero elements on load
    const heroElements = document.querySelectorAll('.hero-animate');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        el.classList.add('anim-fade-in-up');
    });
}

// ===== SCROLL-TRIGGERED ANIMATIONS =====
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale, .animate-on-scroll-blur'
    );

    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add small delay for staggered effect
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, delay);
            }
        });
    }, {
        threshold: 0,
        rootMargin: '0px 0px -80px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

// ===== STAGGERED ANIMATIONS FOR GRIDS =====
function initStaggeredAnimations() {
    const staggerContainers = document.querySelectorAll('.stagger-children');

    staggerContainers.forEach(container => {
        const children = container.querySelectorAll('.animate-on-scroll, [class*="anim-"]');
        children.forEach((child, index) => {
            child.style.animationDelay = `${index * 0.1}s`;
            child.dataset.delay = index * 100;
        });
    });
}

// ===== COUNTER ANIMATIONS =====
function initCounterAnimations() {
    const counters = document.querySelectorAll('.counter');

    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target')) || parseInt(element.textContent);
    const duration = parseInt(element.getAttribute('data-duration')) || 2000;
    const suffix = element.getAttribute('data-suffix') || '';
    const prefix = element.getAttribute('data-prefix') || '';
    const step = target / (duration / 16);
    let current = 0;

    element.classList.add('counter-animated');

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = prefix + target.toLocaleString() + suffix;
            clearInterval(timer);
        } else {
            element.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
        }
    }, 16);
}

// ===== MAGNETIC BUTTON EFFECT =====
function initMagneticButtons() {
    const magneticElements = document.querySelectorAll('.magnetic, .btn-magnetic');

    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });
}

// ===== 3D TILT EFFECT FOR CARDS =====
function initTiltCards() {
    const tiltCards = document.querySelectorAll('.tilt-card, .card-3d');

    tiltCards.forEach(card => {
        const inner = card.querySelector('.card-3d-inner') || card;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            inner.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// ===== RIPPLE EFFECT FOR BUTTONS =====
function initRippleEffect() {
    document.addEventListener('click', function (e) {
        const button = e.target.closest('.ripple-effect, .btn-ripple');
        if (!button) return;

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 700);
    });
}

// ===== PARALLAX EFFECT =====
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');

    if (parallaxElements.length === 0) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;

                parallaxElements.forEach(el => {
                    const speed = parseFloat(el.getAttribute('data-speed')) || 0.3;
                    const yPos = -(scrolled * speed);
                    el.style.transform = `translate3d(0, ${yPos}px, 0)`;
                });

                ticking = false;
            });

            ticking = true;
        }
    });
}

// ===== TEXT REVEAL ANIMATION =====
function initTextReveal() {
    const textElements = document.querySelectorAll('.text-reveal');

    textElements.forEach(el => {
        const text = el.textContent;
        el.innerHTML = '';

        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${i * 0.03}s`;
            span.classList.add('char-animate');
            el.appendChild(span);
        });
    });

    // Add char-animate styles
    if (!document.getElementById('char-animate-styles')) {
        const style = document.createElement('style');
        style.id = 'char-animate-styles';
        style.textContent = `
            .char-animate {
                display: inline-block;
                opacity: 0;
                transform: translateY(20px);
                animation: charReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            @keyframes charReveal {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== CURSOR EFFECTS =====
function initCursorEffects() {
    const cursorGlow = document.querySelector('.cursor-glow');

    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }

    // Spotlight effect
    const spotlights = document.querySelectorAll('.spotlight');
    spotlights.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            el.style.setProperty('--mouse-x', `${x}px`);
            el.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// ===== TYPING EFFECT =====
function typeText(element, text, speed = 50, callback) {
    let i = 0;
    element.textContent = '';
    element.style.borderRight = '2px solid #C8102E';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            if (callback) callback();
        }
    }

    type();
}

// ===== SMOOTH SCROLL TO ANCHOR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('nav');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.classList.remove('nav-scrolled', 'nav-hidden');
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down - hide navbar
            navbar.classList.add('nav-hidden');
            navbar.classList.remove('nav-scrolled');
        } else {
            // Scrolling up - show navbar with blur
            navbar.classList.remove('nav-hidden');
            if (currentScroll > 50) {
                navbar.classList.add('nav-scrolled');
            }
        }

        lastScroll = currentScroll;
    });
}

// ===== SCROLL PROGRESS INDICATOR =====
function initScrollProgress() {
    // Create progress bar if not in DOM
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
    }

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    });
}

// ===== AMBIENT CURSOR BLOB (Linear / Vercel style) =====
function initAmbientCursor() {
    if (window.matchMedia('(hover: none)').matches) return;

    const blob = document.createElement('div');
    blob.className = 'ambient-cursor';
    document.body.appendChild(blob);

    let curX = window.innerWidth / 2;
    let curY = window.innerHeight / 2;
    let targetX = curX, targetY = curY;

    document.addEventListener('mousemove', e => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    (function animate() {
        curX += (targetX - curX) * 0.07;
        curY += (targetY - curY) * 0.07;
        blob.style.transform = `translate(${curX - 250}px, ${curY - 250}px)`;
        requestAnimationFrame(animate);
    })();
}

// ===== CARD SPOTLIGHT (mouse-tracking inner glow) =====
function initCardSpotlight() {
    function applySpotlight(card) {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    }

    document.querySelectorAll('.card-spotlight').forEach(applySpotlight);

    // Also watch for dynamically added cards (browse page)
    const observer = new MutationObserver(mutations => {
        mutations.forEach(m => {
            m.addedNodes.forEach(node => {
                if (node.nodeType !== 1) return;
                if (node.classList && node.classList.contains('card-spotlight')) applySpotlight(node);
                if (node.querySelectorAll) node.querySelectorAll('.card-spotlight').forEach(applySpotlight);
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

// ===== AUTO REVEAL (auto-detect and animate sections) =====
function initAutoReveal() {
    const targets = [
        ...document.querySelectorAll('section > div > .text-center:not([class*="animate-on-scroll"])'),
        ...document.querySelectorAll('.grid > div:not([class*="animate-on-scroll"]):not([class*="absolute"])'),
        ...document.querySelectorAll('.grid > a:not([class*="animate-on-scroll"])'),
        ...document.querySelectorAll('.space-y-4 > .rounded-xl:not([class*="animate-on-scroll"])'),
        ...document.querySelectorAll('.space-y-6 > .rounded-xl:not([class*="animate-on-scroll"])'),
        ...document.querySelectorAll('.space-y-8 > .rounded-xl:not([class*="animate-on-scroll"])'),
        ...document.querySelectorAll('.space-y-4 > details:not([class*="animate-on-scroll"])'),
        ...document.querySelectorAll('.space-y-3 > .flex.items-start:not([class*="animate-on-scroll"])'),
    ];

    targets.forEach(el => {
        if (!el.closest('nav') && !el.closest('footer') && !el.closest('[id*="mobile"]') && !el.closest('[id*="breadcrumb"]')) {
            el.classList.add('animate-on-scroll');
        }
    });

    initScrollAnimations();
}

// ===== AUTO STAGGER (stagger grid children) =====
function initAutoStagger() {
    document.querySelectorAll('.stagger-children, .grid').forEach(container => {
        const items = container.querySelectorAll(':scope > .animate-on-scroll');
        items.forEach((item, i) => {
            if (!item.dataset.delay) {
                item.dataset.delay = i * 90;
            }
        });
    });
}

// ===== PAGE TRANSITIONS (smooth exit) =====
function initPageTransitions() {
    document.querySelectorAll('a').forEach(link => {
        if (
            link.href &&
            !link.href.startsWith('mailto:') &&
            !link.href.startsWith('javascript:') &&
            !link.hash &&
            !link.hasAttribute('download') &&
            !link.target &&
            link.hostname === window.location.hostname &&
            link.href !== window.location.href
        ) {
            link.addEventListener('click', function (e) {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                const href = this.href;
                document.body.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
                document.body.style.opacity = '0';
                document.body.style.transform = 'translateY(10px)';
                setTimeout(() => { window.location.href = href; }, 230);
            });
        }
    });
}

// ===== INTERSECTION OBSERVER FOR LAZY ANIMATIONS =====
function observeElements(selector, callback, options = {}) {
    const elements = document.querySelectorAll(selector);

    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { ...defaultOptions, ...options });

    elements.forEach(el => observer.observe(el));
}

// ===== DYNAMIC STYLES =====
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    /* Ripple effect */
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple-animation 0.7s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Navbar transitions */
    nav {
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                    box-shadow 0.4s ease,
                    backdrop-filter 0.4s ease;
    }
    
    nav.nav-hidden {
        transform: translateY(-100%);
    }
    
    nav.nav-scrolled {
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
    }
    
    /* Spotlight effect positioning */
    .spotlight::after {
        left: var(--mouse-x, 50%);
        top: var(--mouse-y, 50%);
    }
    
    /* Page loaded state */
    body {
        opacity: 0;
        transition: opacity 0.4s ease;
    }
    
    body.page-loaded {
        opacity: 1;
    }
    
    /* Scroll progress bar (created dynamically) */
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 2.5px;
        width: 0;
        background: linear-gradient(90deg, #C8102E, #ff4d6d, #C8102E);
        background-size: 200% 100%;
        z-index: 99999;
        transition: width 0.08s linear;
        border-radius: 0 2px 2px 0;
        animation: gradientFlow 2s linear infinite;
    }
`;
document.head.appendChild(dynamicStyles);

// ===== EXPORT FUNCTIONS FOR EXTERNAL USE =====
window.SITAnimations = {
    initScrollAnimations,
    initCounterAnimations,
    animateCounter,
    typeText,
    initParallax,
    initMagneticButtons,
    initTiltCards,
    observeElements
};

// ===== REINITIALIZE ON DYNAMIC CONTENT =====
window.reinitAnimations = function () {
    initScrollAnimations();
    initStaggeredAnimations();
    initMagneticButtons();
    initTiltCards();
    initCardSpotlight();
    initAutoReveal();
    initAutoStagger();
};
