// ==========================================
// HERO SECTION JAVASCRIPT
// Typed Effect & Animations
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Typed Text Effect
    const typedTextSpan = document.querySelector(".typed-text-output");
    const textArray = document.querySelector(".typed-text").textContent.split(',');
    const typingDelay = 80;      // Velocidad de escritura (más bajo = más rápido)
    const erasingDelay = 40;     // Velocidad de borrado
    const newTextDelay = 3000;   // Pausa cuando termina de escribir (3 segundos)
    const startDelay = 1000;     // Pausa antes de empezar a borrar
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].trim().length) {
            typedTextSpan.textContent += textArray[textArrayIndex].trim().charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            // Pausa más larga cuando termina de escribir
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].trim().substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            // Pausa antes de comenzar a escribir el siguiente texto
            setTimeout(type, startDelay);
        }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);

    // Stats Counter Animation
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.ceil(start) + '+';
            }
        }, 16);
    }

    // Trigger counter animation when stats are visible
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = document.querySelectorAll('.stat-content h4');
                counters.forEach((counter, index) => {
                    const target = parseInt(counter.textContent);
                    setTimeout(() => {
                        animateCounter(counter, target);
                    }, index * 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats-floating');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Smooth Scroll for Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Parallax Effect for Background Shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.floating-shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add hover effect to profile image
    const profileImage = document.querySelector('.profile-image-wrapper');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', () => {
            profileImage.style.transform = 'scale(1.05) rotate(5deg)';
        });
        
        profileImage.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'scale(1) rotate(0deg)';
        });
    }
});

// ==========================================
// PARTICLES.JS CONFIGURATION (Optional)
// Include particles.js library for enhanced background
// ==========================================

// Uncomment if you want to use particles.js

if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#0DD9B3'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.3,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#0DD9B3',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}
