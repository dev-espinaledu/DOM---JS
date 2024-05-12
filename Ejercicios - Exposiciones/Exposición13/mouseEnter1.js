// Obtener referencia al elemento que se va a seguir con el mouse
const elemento = document.getElementById('elemento');

// Agregar evento mousemove al documento
document.addEventListener('mousemove', function(evento) {
    // Obtener las coordenadas del mouse dentro del documento
    const x = evento.clientX;
    const y = evento.clientY;
     // Actualizar la posición del elemento para que siga al mouse
    elemento.style.left = (x - elemento.offsetWidth / 2) + 'px';
    elemento.style.top = (y - elemento.offsetHeight / 2) + 'px';
});