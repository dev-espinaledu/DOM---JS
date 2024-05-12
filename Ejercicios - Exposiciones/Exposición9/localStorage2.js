const formulario = document.getElementById('formulario');
    const body = document.querySelector('body');

    // Cargar el tema seleccionado al iniciar la página
    const temaAlmacenado = localStorage.getItem('tema');
    if (temaAlmacenado) {
      aplicarTema(temaAlmacenado);
    }

    formulario.addEventListener('submit', function(event) {
      event.preventDefault();

      const temaSeleccionado = document.getElementById('tema').value;

      // Almacenar el tema seleccionado en localStorage
      localStorage.setItem('tema', temaSeleccionado);

      aplicarTema(temaSeleccionado);
    });

    function aplicarTema(tema) {
      body.classList.remove('tema-claro', 'tema-oscuro');
      body.classList.add(tema === 'claro' ? 'tema-claro' : 'tema-oscuro');
    }