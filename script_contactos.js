// script_contactos.js

document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const closeMenuToggle = document.querySelector(".close-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuLinks = document.querySelectorAll(".mobile-menu ul li a");

    mobileMenuToggle.addEventListener("click", function() {
        mobileMenu.classList.toggle("open");
    });

    closeMenuToggle.addEventListener("click", function() {
        mobileMenu.classList.remove("open");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            mobileMenu.classList.remove("open");
        });
    });
});
