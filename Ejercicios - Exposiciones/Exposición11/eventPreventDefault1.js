const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el envío del formulario

      alert('Formulario no enviado. Valida los datos primero.');
    });