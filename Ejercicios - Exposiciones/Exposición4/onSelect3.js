const selectElement = document.getElementById('mySelect');
selectElement.addEventListener('change', (event) => {
  const selectedOption = event.target.value;
  console.log(`Opción seleccionada: ${selectedOption}`);
  // Realizar acciones en función de la opción seleccionada
});
