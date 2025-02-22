// Toggle hamburger menu for mobile
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('nav .menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
