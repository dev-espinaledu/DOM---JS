const formulario = document.getElementById('formulario');
    const datosSesionElement = document.getElementById('datosSesion');

    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el envío del formulario

      const nombreUsuario = document.getElementById('nombreUsuario').value;
      const contraseña = document.getElementById('contraseña').value;

      // Almacenar datos de inicio de sesión en sessionStorage
      sessionStorage.setItem('nombreUsuario', nombreUsuario);
      sessionStorage.setItem('contraseña', contraseña);

      mostrarDatosSesion();
    });

    function mostrarDatosSesion() {
      const nombreUsuarioAlmacenado = sessionStorage.getItem('nombreUsuario');
      const contraseñaAlmacenada = sessionStorage.getItem('contraseña');

      if (nombreUsuarioAlmacenado && contraseñaAlmacenada) {
        datosSesionElement.textContent = `
          Bienvenido, ${nombreUsuarioAlmacenado}.
          Su contraseña es: ${contraseñaAlmacenada}.
        `;
      } else {
        datosSesionElement.textContent = 'No hay datos de sesión almacenados.';
      }
    }

    // Mostrar datos de sesión al cargar la página
    mostrarDatosSesion();