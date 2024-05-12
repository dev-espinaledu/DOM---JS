// Evento Target
const button = document.getElementById('myButton');
button.addEventListener('click', manejadorClick);

function manejadorClick(event) {
alert("Haz dado click en el botón!");
console.log(`El evento fue activado por:`)
console.log(event.target); // Elemento que activo el evento

console.log(`Este el tipo de evento ▼`)
console.log(event.type);   // "click"
}