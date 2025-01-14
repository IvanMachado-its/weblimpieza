let lastScrollTop = 0; // Variable para almacenar la última posición del scroll
const navbar = document.querySelector('.main-nav'); // Selecciona el navbar


window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Obtiene la posición actual del scroll

    const navbar = document.querySelector('.main-nav');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');  // Activa la sombra intensa
    } else {
        navbar.classList.remove('scrolled');  // Desactiva la sombra
    }

    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)'; // Asegura que se vea al principio de la página
    } else if (currentScroll > lastScrollTop && currentScroll > navbar.offsetHeight) {
        // Si el usuario hace scroll hacia abajo y ya ha pasado la altura del navbar, lo ocultamos
        navbar.style.transform = 'translateY(-100%)'; // Mueve el navbar fuera de la vista
    } else if (currentScroll < lastScrollTop) {
        // Si el usuario hace scroll hacia arriba, mostramos el navbar
        navbar.style.transform = 'translateY(0)'; // Muestra el navbar de nuevo
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Actualiza la última posición del scroll
});

const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const menuIcon = document.querySelector('.menu-icon');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuIcon.classList.toggle('open');
});