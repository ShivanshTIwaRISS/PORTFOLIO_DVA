// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Navbar Background
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 0';
        nav.style.background = 'rgba(5, 7, 10, 0.9)';
        nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.padding = '1.5rem 0';
        nav.style.background = 'transparent';
        nav.style.boxShadow = 'none';
    }
});

// Simple Mouse Parallax for Background Mesh
document.addEventListener('mousemove', (e) => {
    const mesh = document.querySelector('.bg-mesh');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    mesh.style.background = `
        radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(112, 0, 255, 0.15) 0%, transparent 50%),
        radial-gradient(circle at ${(1-x) * 100}% ${(1-y) * 100}%, rgba(0, 242, 255, 0.15) 0%, transparent 50%)
    `;
});

console.log('Shivansh Portfolio Script Initialized');
