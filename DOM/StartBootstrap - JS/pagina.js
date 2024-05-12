console.log('estoy haciendo pruebas');
console.log('todo ta bien');

/* crear elemento header */
let body = document.querySelector('body');
console.log(body);

/* body.style.backgroundColor="blue"; */
body.style.height="100%";
body.style.margin="0";


let main = document.createElement('main');
console.log(main);
body.insertAdjacentElement('afterbegin',main);

/* agregar estilo individual */
main.style.backgroundColor="red";
main.style.height="300px";
main.style.backgroundImage="url('https://img.freepik.com/foto-gratis/concepto-escritorio-vista-superior-laptop_23-2148223095.jpg?t=st=1715534435~exp=1715538035~hmac=2413be6e87469398ca6b4cd2a254949f09694f7e058eead34204b1498280b414&w=1380')";
main.style.backgroundSize="cover";
main.style.height="100vh"

let header = document.createElement('header');
console.log(header);


header.style.display="flex";
/* header.style.backgroundColor="blue"; */
header.style.height="100px";
header.style.width="100%";

let section = document.createElement('section');
console.log(section);
header.append(section);

section.style.width="65%";
section.style.fontSize="65px";
section.style.fontStyle="italic"
section.style.fontWeight="bold"

let text = document.createTextNode('start boostrap');
section.append(text);
/* section.style.backgroundColor="red" */
section.style.paddingTop="20px"
section.style.paddingLeft="50px"
section.style.fontSize="40px"
section.style.color="yellow"


let nav = document.createElement('nav');
console.log(nav);
header.append(nav);

/* nav.style.backgroundColor="pink"; */
nav.style.width="35%";
nav.style.fontSize="25px";
nav.style.paddingRight="30px"


let ul = document.createElement('ul');
console.log(ul);
nav.append(ul);

ul.style.display="flex";
ul.style.justifyContent="space-between";
ul.style.listStyle="none";


let li1 = document.createElement('li');
console.log(li1);
ul.append(li1);
let a1 = document.createElement('a')
a1.href = "#";
console.log(a1)
a1.textContent = "Servicios"
li1.append(a1)

a1.style.textDecoration="none";
a1.style.color="black";


let li2 = document.createElement('li');
console.log(li2);
ul.append(li2);
let a2 = document.createElement('a')
a2.href = "#";
console.log(a2)
a2.textContent = "Portfolio"
li2.append(a2)

a2.style.textDecoration="none";
a2.style.color="black";

let li3 = document.createElement('li');
console.log(li3);
ul.append(li3);
let a3 = document.createElement('a')
a3.href = "#";
console.log(a3)
a3.textContent = "Acerca"
li3.append(a3)

a3.style.textDecoration="none";
a3.style.color="black";

let li4 = document.createElement('li');
console.log(li4);
ul.append(li4);
let a4 = document.createElement('a')
a4.href = "#";
console.log(a4)
a4.textContent = "Equipo"
li4.append(a4)

a4.style.textDecoration="none";
a4.style.color="black";

let li5 = document.createElement('li');
console.log(li5);
ul.append(li5);
let a5 = document.createElement('a')
a5.href = "#";
console.log(a5)
a5.textContent = "Contacto"
li5.append(a5)

a5.style.textDecoration="none";
a5.style.color="black";

let article = document.createElement('article');
console.log(article);

/* article.style.backgroundColor="yellow"; */
article.style.height="100px";
article.style.marginTop="280px";
article.style.textAlign = "center";
article.style.color = "black"
article.style.fontStyle = "italic"
article.style.fontWeight = "bold"

let h1 = document.createElement('h1');
console.log(h1);
article.append(h1)

let text1 = document.createTextNode('¡Bienvenido a nuestro estudio!');
h1.append(text1);

let section3 = document.createElement('section');
console.log(section3);
article.append(section3);

section3.style.fontSize = "55px"

let text2 = document.createTextNode('ES UN GUSTO CONOCERTE');
section3.append(text2);

/* fin del main */

main.insertAdjacentElement('afterbegin',header);
main.insertAdjacentElement('beforeend',article);

let section1 = document.createElement('section');
console.log(section1);
body.insertAdjacentElement('beforeend',section1);

let section2 = document.createElement('section');
console.log(section2);
body.insertAdjacentElement('beforeend',section2);

let footer = document.createElement('footer');
console.log(footer);
body.insertAdjacentElement('beforeend',footer);