// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize Three.js scene
function initThreeScene() {
    const container = document.getElementById('three-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create floating cubes
    const cubes = [];
    for (let i = 0; i < 50; i++) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x2563eb,
            transparent: true,
            opacity: 0.1
        });
        const cube = new THREE.Mesh(geometry, material);
        
        // Random positions
        cube.position.x = Math.random() * 40 - 20;
        cube.position.y = Math.random() * 40 - 20;
        cube.position.z = Math.random() * 40 - 20;
        
        scene.add(cube);
        cubes.push(cube);
    }

    camera.position.z = 30;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        cubes.forEach(cube => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        });

        renderer.render(scene, camera);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
}

// Initialize Particles.js
function initParticles() {
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
                value: '#ffffff'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
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
                    mode: 'repulse'
                },
                resize: true
            }
        },
        retina_detect: true
    });
}

// Animate features on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Three.js and Particles.js
    initThreeScene();
    initParticles();

    // Animate feature cards
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            y: 60,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.2
        });
    });

    // Parallax effect for the hero section background
    gsap.to('.grid-bg', {
        scrollTrigger: {
            trigger: '.grid-bg',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 200,
        opacity: 0.1
    });

    // Animate headings
    gsap.utils.toArray('h2').forEach(heading => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 0.8
        });
    });

    // Animate CTA buttons on hover
    document.querySelectorAll('.primary-button, .secondary-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Video controls
    const video = document.querySelector('video');
    const playPauseBtn = document.querySelector('.play-pause');
    const muteUnmuteBtn = document.querySelector('.mute-unmute');
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');
    const volumeIcon = muteUnmuteBtn.querySelector('.volume-icon');
    const muteIcon = muteUnmuteBtn.querySelector('.mute-icon');

    // Play/Pause
    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            video.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    });

    // Mute/Unmute
    muteUnmuteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        if (video.muted) {
            volumeIcon.classList.add('hidden');
            muteIcon.classList.remove('hidden');
        } else {
            volumeIcon.classList.remove('hidden');
            muteIcon.classList.add('hidden');
        }
    });

    // Show controls when hovering over video
    const videoContainer = document.querySelector('.aspect-video');
    const controls = document.querySelector('.video-controls');
    
    let timeout;
    videoContainer.addEventListener('mousemove', () => {
        if (controls) {
            controls.style.opacity = '1';
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                controls.style.opacity = '0';
            }, 2000);
        }
    });

    // Add video loading animation
    video.addEventListener('waiting', () => {
        // Add loading spinner if needed
        console.log('Video is loading...');
    });

    // Handle video errors
    video.addEventListener('error', () => {
        console.error('Error loading video');
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add navbar background color change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});
