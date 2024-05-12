const enlace = document.getElementById('enlace');

    enlace.addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir la redirección

      if (confirm('¿Estás seguro de que quieres ir a este enlace?')) {
        // Redirigir al usuario si confirma
        window.location.href = enlace.href;
      }
    });