const contadorElement = document.getElementById('contador');

    // Cargar el contador de visitas al iniciar la página
    let visitas = localStorage.getItem('visitas') || 0;
    contadorElement.textContent = `Visitas: ${visitas}`;

    // Incrementar el contador y actualizar la pantalla
    visitas++;
    localStorage.setItem('visitas', visitas);
    contadorElement.textContent = `Visitas: ${visitas}`;