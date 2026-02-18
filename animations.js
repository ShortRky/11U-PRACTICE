// KaliEdu MVP - Animations
// Subtle hover effects and smooth transitions

(function() {
    'use strict';

    // ==================== Initialization ====================
    document.addEventListener('DOMContentLoaded', function() {
        initializeAnimations();
    });

    function initializeAnimations() {
        addButtonHoverEffects();
        addCardHoverEffects();
        addStaggeredAnimations();
        addScrollReveal();
        addFocusEffects();
        addMicroInteractions();
        handleLoadingScreen();
        handleBackgroundMusic();
    }

    // ==================== Background Music ====================
    function handleBackgroundMusic() {
        const music = document.getElementById('backgroundMusic');
        const musicToggle = document.getElementById('musicToggle');
        
        if (!music || !musicToggle) return;
        
        // Set initial volume (quiet background)
        music.volume = 0.25;
        
        // Toggle music on/off
        musicToggle.addEventListener('click', function() {
            if (music.paused) {
                music.play().then(() => {
                    musicToggle.classList.add('playing');
                    musicToggle.querySelector('.music-icon').textContent = '🎵';
                }).catch(err => {
                    console.log('Audio playback failed:', err);
                });
            } else {
                music.pause();
                musicToggle.classList.remove('playing');
                musicToggle.querySelector('.music-icon').textContent = '🔇';
            }
        });
        
        // Update icon when music ends (for looping)
        music.addEventListener('ended', function() {
            musicToggle.querySelector('.music-icon').textContent = '🎵';
        });
    }

    // ==================== Loading Screen ====================
    function handleLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        
        if (!loadingScreen) return;
        
        // Add loading class to body to hide content
        document.body.classList.add('loading');
        
        // Wait for content to load, then fade the loading screen
        window.addEventListener('load', function() {
            // Small delay to ensure smooth transition
            setTimeout(function() {
                loadingScreen.classList.add('fade-complete');
                
                // Show the main content
                document.body.classList.remove('loading');
                
                // Remove the loading screen from DOM after animation completes
                setTimeout(function() {
                    loadingScreen.style.display = 'none';
                }, 800);
            }, 1500); // Show loading screen for 1.5 seconds
        });
    }

    // ==================== Button Hover Effects ====================
    function addButtonHoverEffects() {
        // CTA Button
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('mouseenter', function(e) {
                this.style.transform = 'translateY(-3px) scale(1.02)';
                this.style.boxShadow = '0 12px 28px rgba(61, 54, 50, 0.18)';
            });
            
            ctaButton.addEventListener('mouseleave', function(e) {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
            });
        }

        // Hint and Solution Buttons
        const hintButtons = document.querySelectorAll('.hint-button, .solution-button, .check-answer-button');
        hintButtons.forEach(button => {
            button.addEventListener('mouseenter', function(e) {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function(e) {
                this.style.transform = 'translateY(0)';
            });
            
            // Add ripple effect on click
            button.addEventListener('click', function(e) {
                createRipple(e, this);
            });
        });
    }

    // Ripple effect for buttons
    function createRipple(event, button) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // ==================== Card Hover Effects ====================
    function addCardHoverEffects() {
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', function(e) {
                // Subtle lift
                this.style.transform = 'translateY(-6px)';
                this.style.boxShadow = '0 16px 32px rgba(61, 54, 50, 0.15)';
                
                // Gentle glow
                this.style.borderColor = 'rgba(123, 158, 135, 0.5)';
            });
            
            card.addEventListener('mouseleave', function(e) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '';
                this.style.borderColor = '';
            });
        });

        // Practice question cards
        const practiceQuestions = document.querySelectorAll('.practice-question');
        
        practiceQuestions.forEach(question => {
            question.addEventListener('mouseenter', function(e) {
                this.style.transform = 'translateX(4px)';
            });
            
            question.addEventListener('mouseleave', function(e) {
                this.style.transform = 'translateX(0)';
            });
        });
    }

    // ==================== Staggered Animations ====================
    function addStaggeredAnimations() {
        // Add staggered delay to feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 + (index * 150));
        });

        // Staggered animation for tip boxes
        const tipBoxes = document.querySelectorAll('.tip-box');
        tipBoxes.forEach((box, index) => {
            box.style.opacity = '0';
            box.style.transform = 'translateX(-10px)';
            
            setTimeout(() => {
                box.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                box.style.opacity = '1';
                box.style.transform = 'translateX(0)';
            }, 300 + (index * 100));
        });
    }

    // ==================== Scroll Reveal ====================
    function addScrollReveal() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // Stagger children
                    const children = entry.target.querySelectorAll('.concept-section, .practice-question');
                    children.forEach((child, index) => {
                        child.style.opacity = '0';
                        child.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            child.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                            child.style.opacity = '1';
                            child.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Observe concept sections and practice
        document.querySelectorAll('.concept-section, .practice-section').forEach(section => {
            observer.observe(section);
        });
    }

    // ==================== Focus Effects ====================
    function addFocusEffects() {
        // Input focus animation
        const inputs = document.querySelectorAll('.short-answer-input');
        
        inputs.forEach(input => {
            input.addEventListener('focus', function(e) {
                this.style.transform = 'scale(1.01)';
            });
            
            input.addEventListener('blur', function(e) {
                this.style.transform = 'scale(1)';
            });
        });

        // Navigation link focus
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('focus', function(e) {
                this.style.transform = 'translateX(4px)';
            });
            
            link.addEventListener('blur', function(e) {
                this.style.transform = 'translateX(0)';
            });
        });
    }

    // ==================== Micro Interactions ====================
    function addMicroInteractions() {
        // Logo gentle pulse on hover
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('mouseenter', function(e) {
                this.style.animation = 'logoPulse 0.6s ease';
            });
        }

        // Question number hover effect
        const questionNumbers = document.querySelectorAll('.question-number');
        questionNumbers.forEach(num => {
            num.addEventListener('mouseenter', function(e) {
                this.style.transform = 'scale(1.2)';
            });
            
            num.addEventListener('mouseleave', function(e) {
                this.style.transform = 'scale(1)';
            });
        });

        // Option selection animation
        const optionLabels = document.querySelectorAll('.option-label');
        optionLabels.forEach(label => {
            label.addEventListener('click', function(e) {
                // Subtle bounce
                this.style.animation = 'optionBounce 0.3s ease';
                setTimeout(() => {
                    this.style.animation = '';
                }, 300);
            });
        });

        // Add CSS for these micro-animations dynamically
        addMicroAnimationStyles();
    }

    // ==================== Dynamic Animation Styles ====================
    function addMicroAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes logoPulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            
            @keyframes optionBounce {
                0% { transform: scale(1); }
                50% { transform: scale(0.98); }
                100% { transform: scale(1); }
            }
            
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: rippleAnim 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes rippleAnim {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .concept-section, .practice-question {
                opacity: 1;
                transform: none;
                transition: opacity 0.5s ease, transform 0.5s ease;
            }
            
            .revealed .concept-section,
            .revealed .practice-question {
                opacity: 1;
                transform: none;
            }
        `;
        document.head.appendChild(style);
    }

    // ==================== Page Load Animation ====================
    function animatePageLoad() {
        // Fade in main content
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                mainContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
            }, 100);
        }

        // Animate sidebar
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.style.opacity = '0';
            sidebar.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                sidebar.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                sidebar.style.opacity = '1';
                sidebar.style.transform = 'translateX(0)';
            }, 50);
        }
    }

    // Trigger page load animation when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', animatePageLoad);
    } else {
        animatePageLoad();
    }

})();
