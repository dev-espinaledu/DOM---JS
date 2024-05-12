const scrollableContainer = document.getElementById('scrollable-container');
const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
  scrollableContainer.scrollTop = 0; // Realizar acciones en función de la opción seleccionada
});
