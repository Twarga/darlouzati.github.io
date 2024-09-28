$(document).ready(function() {
    // Sidebar functionality
    $('#sidebar-toggle').click(function() {
        $('.ui.sidebar').sidebar('toggle');
    });

    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Form validation
    $('.ui.form').form({
        fields: {
            name: 'empty',
            email: 'email',
            message: 'empty'
        }
    });

    // Initialize embed
    $('.ui.embed').embed();

    // Product order functionality
    $('.ui.card .button').on('click', function() {
        var productName = $(this).closest('.card').find('.header').text();
        alert('Commande passée pour ' + productName + '. Nous vous contacterons bientôt pour confirmer votre commande.');
    });

    // Download menu functionality
    $('#download-menu').on('click', function() {
        alert('Le menu sera téléchargé bientôt.');
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
});

document.addEventListener('DOMContentLoaded', () => {
    const floaterToggle = document.getElementById('floater-toggle');
    const floaterMenu = document.getElementById('floater-menu');

    floaterToggle.addEventListener('click', () => {
        floaterMenu.classList.toggle('active');
        floaterToggle.querySelector('i').classList.toggle('fa-plus');
        floaterToggle.querySelector('i').classList.toggle('fa-minus');
    });
});
