console.log('trabajando desde js')

//para definir los botones y el cuadro
var amarillo = document.querySelector('#coloramarillo');
var azul = document.querySelector('#colorazul');
var rojo = document.querySelector('#colorrojo');
var gris = document.querySelector('#colorgris');
var verde = document.querySelector('#colorverde')
var violeta = document.querySelector('#colorvioleta')
var sincolor = document.querySelector('#sincolor');
var cuadro = document.querySelector('#cuadro');

//estilos para el titulo
var titulo = document.querySelector('h1');
titulo.style.textAlign = "center";

//estilos para el contenedor de los botones
var botonesContainer = document.querySelector('#botones');
botonesContainer.style.display = "flex";
botonesContainer.style.flexDirection = "column";
botonesContainer.style.width = "10vw";
botonesContainer.style.margin = "100px"
botonesContainer.style.gap = "10px";

//los estilos para contenedor principal
var container = document.querySelector('#container');
container.style.height = "80vh";
container.style.display = "flex";

//estilos al cuadro
cuadro.style.border = "1px solid black";
cuadro.style.width = "45vw";
cuadro.style.margin = "100px"
cuadro.style.float = "right"; // Mover el cuadro al lado derecho

//Función para cambiar el color del cuadro
function cambiarColor(color) {
    console.log('buscando color ' + color);
    cuadro.style.backgroundColor = color;
}

//para definir los botones y el cuadro 2
var amarillo2 = document.querySelector('#coloramarillo2');
var azul2 = document.querySelector('#colorazul2');
var rojo2 = document.querySelector('#colorrojo2');
var gris2 = document.querySelector('#colorgris2');
var verde2 = document.querySelector('#colorverde2')
var violeta2 = document.querySelector('#colorvioleta2')
var sincolor2 = document.querySelector('#sincolor2');
var body = document.querySelector('#body');

//estilos para el contenedor de los botones 2
var botonesContainer2 = document.querySelector('#botones2');
botonesContainer2.style.display = "flex";
botonesContainer2.style.flexDirection = "column";
botonesContainer2.style.width = "10vw";
botonesContainer2.style.margin = "100px"
botonesContainer2.style.gap = "10px";

//los estilos para contenedor principal 2
var container2 = document.querySelector('#container2');
container2.style.height = "80vh";

//Función para cambiar el color del cuadro 2
function cambiarColor2(color) {
    console.log('buscando color ' + color);
    body.style.backgroundColor = color;
}

//Añadimos los addEventListene a los botones
amarillo.addEventListener('click', function() {
    cambiarColor('yellow');
});

azul.addEventListener('click', function() {
    cambiarColor('blue');
});

rojo.addEventListener('click', function() {
    cambiarColor('red');
});

gris.addEventListener('click', function() {
    cambiarColor('grey');
});

verde.addEventListener('click', function() {
    cambiarColor('green');
});

violeta.addEventListener('click', function() {
    cambiarColor('violet');
});

sincolor.addEventListener('click', function() {
    cambiarColor('white');
});

//Añadimos los addEventListene a los botones 2
amarillo2.addEventListener('click', function() {
    cambiarColor2('yellow');
});

azul2.addEventListener('click', function() {
    cambiarColor2('blue');
});

rojo2.addEventListener('click', function() {
    cambiarColor2('red');
});

gris2.addEventListener('click', function() {
    cambiarColor2('grey');
});

verde2.addEventListener('click', function() {
    cambiarColor2('green');
});

violeta2.addEventListener('click', function() {
    cambiarColor2('violet');
});

sincolor2.addEventListener('click', function() {
    cambiarColor2('white');
});
