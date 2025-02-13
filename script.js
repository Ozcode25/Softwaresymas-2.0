// Esperar a que el DOM cargue completamente antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.menu');

  // Función para alternar el menú
  function toggleMenu() {
    menu.classList.toggle('active');
  }

  // Mostrar/ocultar el menú al hacer clic en el botón
  menuButton.addEventListener('click', (event) => {
    toggleMenu();
    event.stopPropagation(); // Evita que el clic cierre inmediatamente el menú
  });

  // Cerrar el menú al hacer clic fuera de él
  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      menu.classList.remove('active');
    }
  });

  // Agregar efecto a los botones y enlaces
  document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('click', (event) => {
      console.log('Elemento de acción clickeado!');

      // Previene el comportamiento predeterminado de los enlaces sin destino
      if (element.tagName === 'A' && !element.getAttribute('href')) {
        event.preventDefault();
      }
    });
  });
});
