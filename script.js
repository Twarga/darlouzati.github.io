document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Language toggle (placeholder function)
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', () => {
        // Implement language switch logic here
        console.log('Language toggled');
    });
});
    // Form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement form validation logic here
        console.log('Form submitted');
    });

    // Download menu (placeholder function)
    const downloadMenu = document.getElementById('download-menu');
    downloadMenu.addEventListener('click', () => {
        // Implement menu download logic here
        console.log('Menu downloaded');
    });

    // Lazy loading images (placeholder function)
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyLoad = (target) => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('fade');
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };
    lazyImages.forEach(lazyLoad);

    // Product slider
    const productSlider = document.querySelector('.product-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    productSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - productSlider.offsetLeft;
        scrollLeft = productSlider.scrollLeft;
    });

    productSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    productSlider.addEventListener('mouseup', () => {
        isDown = false;
    });

    productSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - productSlider.offsetLeft;
        const walk = (x - startX) * 2;
        productSlider.scrollLeft = scrollLeft - walk;
    });

    // Order button functionality
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('h3').textContent;
            alert(`Commande passée pour ${productName}. Nous vous contacterons bientôt pour confirmer votre commande.`);
        });
    });

    // Add more JavaScript functionality as needed
