// Smooth scroll for anchor links
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

// Enhanced navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.05,
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

// Add staggered animation to cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .comparison-card, .ecosystem-card, .use-case-card, .workflow-step, .benchmark-item, .step-card, .quick-link-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.03}s, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.03}s`;
        observer.observe(el);
    });
});

// Enhanced code block copy functionality
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.code-block').forEach((block) => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        
        const updateButtonText = () => {
            const copyText = t('copy.button') || '复制';
            copyButton.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span class="copy-text">${copyText}</span>
            `;
        };
        
        updateButtonText();
        
        copyButton.style.cssText = `
            position: absolute;
            top: 12px;
            right: 12px;
            background: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.15);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.875rem;
            font-family: 'Inter', sans-serif;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
            backdrop-filter: blur(10px);
            z-index: 10;
        `;
        
        block.style.position = 'relative';
        block.appendChild(copyButton);
        
        copyButton.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const code = block.querySelector('code').textContent;
            
            try {
                await navigator.clipboard.writeText(code);
                
                // Update button state
                const successText = t('copy.success') || '已复制!';
                
                copyButton.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="copy-text">${successText}</span>
                `;
                
                copyButton.style.background = 'rgba(16, 185, 129, 0.2)';
                copyButton.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                copyButton.style.color = '#10b981';
                
                setTimeout(() => {
                    updateButtonText();
                    copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
                    copyButton.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    copyButton.style.color = 'rgba(255, 255, 255, 0.8)';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
                
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = code;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '0';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                try {
                    const successful = document.execCommand('copy');
                    if (successful) {
                        const successText = t('copy.success') || '已复制!';
                        const copyText = copyButton.querySelector('.copy-text');
                        if (copyText) {
                            copyText.textContent = successText;
                            setTimeout(() => {
                                updateButtonText();
                            }, 2000);
                        }
                    }
                } catch (err2) {
                    console.error('Fallback copy failed: ', err2);
                }
                
                document.body.removeChild(textArea);
            }
        });
        
        copyButton.addEventListener('mouseenter', () => {
            copyButton.style.background = 'rgba(255, 255, 255, 0.2)';
            copyButton.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            copyButton.style.color = 'white';
        });
        
        copyButton.addEventListener('mouseleave', () => {
            if (!copyButton.classList.contains('copied')) {
                copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
                copyButton.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                copyButton.style.color = 'rgba(255, 255, 255, 0.8)';
            }
        });
        
        // Store reference to update function for language changes
        copyButton._updateText = updateButtonText;
    });
});

// Enhanced parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        const elements = hero.querySelectorAll('.hero-content > *');
        elements.forEach((el, index) => {
            el.style.transform = `translateY(${scrolled * (0.1 + index * 0.05)}px)`;
        });
    }
});

// Enhanced stats counter animation
const animateValue = (element, start, end, duration, suffix = '') => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const value = Math.floor(easeOutQuart * (end - start) + start);
        element.textContent = value + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            const text = entry.target.textContent;
            const value = parseFloat(text.replace(/[^0-9.]/g, ''));
            const suffix = text.replace(/[0-9.]/g, '');
            if (value) {
                animateValue(entry.target, 0, value, 2000, suffix);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value, .metric-cortex').forEach(stat => {
    statsObserver.observe(stat);
});

// Add hover effect for gradient text
const addGlowEffect = () => {
    const gradientTexts = document.querySelectorAll('.gradient-text');
    gradientTexts.forEach(text => {
        text.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 30px rgba(165, 180, 252, 0.5)';
        });
        text.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
};

document.addEventListener('DOMContentLoaded', addGlowEffect);

console.log('🧠 Cortex Memory - Enhanced Website Loaded!');
