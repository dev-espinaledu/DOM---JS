// Crear un arreglo de frutas
const frutas = ["Manzana", "Pera", "Naranja", "Plátano", "Uva"];

// Recorrer el arreglo con `for`
const listaFrutas = document.getElementById('listaFrutas');
for (let i = 0; i < frutas.length; i++) {
  const fruta = frutas[i];
  const elementoLista = document.createElement('li');
  elementoLista.textContent = fruta;
  listaFrutas.appendChild(elementoLista);
}