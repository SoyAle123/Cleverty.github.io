// script.js

// Obtener los elementos del menú
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const closeMenu = document.querySelector('.close-menu-toggle');

// Función para abrir el menú
menuToggle.addEventListener('click', () => {
    navMenu.classList.add('open');
});

// Función para cerrar el menú
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('open');
});

// Cerrar el menú al hacer clic en un enlace
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});
