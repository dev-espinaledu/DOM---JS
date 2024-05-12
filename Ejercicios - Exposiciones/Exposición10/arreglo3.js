// Crear un arreglo de frutas
const frutas = ["Manzana", "Pera", "Naranja", "Plátano", "Uva"];

// Recorrer el arreglo con `forEach`
const listaFrutas = document.getElementById('listaFrutas');
frutas.forEach(fruta => {
  const elementoLista = document.createElement('li');
  elementoLista.textContent = fruta;
  listaFrutas.appendChild(elementoLista);
});