// Obtener referencia al lienzo y al contexto 2D
const lienzo = document.getElementById('lienzo');
const contexto = lienzo.getContext('2d');

// Bandera para indicar si se está dibujando
let dibujando = false;

// Función para comenzar a dibujar
function iniciarDibujo(evento) {
    dibujando = true;
    contexto.beginPath();
    contexto.moveTo(evento.clientX - lienzo.offsetLeft, evento.clientY - lienzo.offsetTop);
}

// Función para dibujar mientras el mouse se mueve
function dibujar(evento) {
    if (dibujando) {
    contexto.lineTo(evento.clientX - lienzo.offsetLeft, evento.clientY - lienzo.offsetTop);
    contexto.stroke();
}
}

// Función para detener el dibujo
function detenerDibujo() {
    dibujando = false;
}

// Agregar evento mousedown al lienzo
lienzo.addEventListener('mousedown', iniciarDibujo);

// Agregar evento mousemove al lienzo
lienzo.addEventListener('mousemove', dibujar);

// Agregar evento mouseup al lienzo
lienzo.addEventListener('mouseup', detenerDibujo);

// Agregar evento mouseleave al lienzo (por si el mouse sale del área del lienzo mientras se está dibujando)
lienzo.addEventListener('mouseleave', detenerDibujo);