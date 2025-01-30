document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navbar = document.getElementById('navbar');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});
