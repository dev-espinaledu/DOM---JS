document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevenir el clic derecho
    alert('El clic derecho está deshabilitado.');
  });