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
        
document.addEventListener("DOMContentLoaded", function() {
    // Inicializar EmailJS con tu User ID
    emailjs.init(Vf-tCReJfgzAO5Ma4); // Reemplázalo con tu USER_ID de EmailJS
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener los valores del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Enviar datos a EmailJS
    emailjs.send (service_eki6jw1,template_n1szq0f), {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        console.log("Correo enviado con éxito:", response);
        document.getElementById("confirmation").textContent = "✅ ¡Mensaje enviado con éxito!";
        document.getElementById("confirmation").classList.remove("hidden");
        document.getElementById("contact-form").reset(); // Limpiar formulario
    }, function(error) {
        console.error("Error al enviar:", error);
        document.getElementById("confirmation").textContent = "❌ Hubo un error al enviar el mensaje.";
        document.getElementById("confirmation").classList.remove("hidden");
    });
});

    });
});
      
      }
    });
  });
});
