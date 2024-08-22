document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger_icon');
    const menuContainer = document.querySelector('.menu-container');
    const enlacesMenuDerecha = document.querySelectorAll('.enlaces-menu-derecha');

   
    hamburgerIcon.addEventListener('click', function() {
        menuContainer.classList.toggle('menu-open');
    });

   
    enlacesMenuDerecha.forEach(function(enlace) {
        enlace.addEventListener('click', function() {
            menuContainer.classList.remove('menu-open');
        });
    });
});
