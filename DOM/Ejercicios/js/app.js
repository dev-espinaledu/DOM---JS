// capturar el nodo h1 mediante su ID
let texto = document.getElementById('titulo');
console.log(texto); // mostrar el nodo h1 por consola

// capturar el nodo p mediante su clase
let parrafo = document.getElementsByClassName('parrafo');
console.log(parrafo);

// capturar el nodo p mediante su etiqueta
let item = document.getElementsByTagName('li');
console.log(item);

// capturar el nodo p mediante id, clase, etiqueta
let nombre = document.querySelector('.parrafo');
console.log(nombre);

// capturar el nodo p mediante id, clase, etiqueta (se mostrarán todos)
let items = document.querySelectorAll('li');
console.log(items);

// crear nodo 2
console.log("Crear nodos para HTML");

// paso1: crear el nodo para insertar el DOM (h2)
let texto2 = document.createElement('h2');
console.log(texto2);

// paso2: capturar el nodo por el cual se va a insertar el nodo creado (h2)
let header = document.querySelector('header');
console.log(header);

// paso3: agregar el nodo creado dentro del nodo del DOM (se agrega al final)
header.appendChild(texto2);

// paso4: crear un texto para agregarlo al nodo creado (h2)
let text = document.createTextNode("Hola Mundo");

// paso5: insertar el texto creado dentro del nodo creado (h2)
texto2.appendChild(text);

//
console.log("crear nodos para html");
let div = document.createElement('div');
console.log(div);

let main = document.querySelector('main');
console.log(div)

main.appendChild(div);

let text1 = document.createTextNode("hola div");

div.appendChild(text1);