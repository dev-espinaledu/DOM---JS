// Obtener referencia al botón
const btn = document.getElementById('btn');

// Agregar evento MouseEnter al botón
btn.addEventListener('mouseenter', () => {
      // Cambiar el color del botón cuando el cursor entra
    btn.style.backgroundColor = 'violet';
});

// Agregar evento MouseLeave al botón
btn.addEventListener('mouseleave', () => {
     // Restaurar el color original del botón cuando el cursor sale
    btn.style.backgroundColor = '';
});