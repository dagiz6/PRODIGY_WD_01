document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    
    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbar.classList.remove('open');
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(211, 70, 177, 0.7)';
        } else {
            navbar.style.backgroundColor = 'rgba(251, 112, 177, 0.9)';
        }
    });
});
