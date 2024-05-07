console.log("Estoy haciendo pruebas");
console.log("Todo va bien");

let main = document.createElement('main');
console.log(main);
main.style.backgroundColor="red";
main.style.border="1px solid red";
main.style.backgroundSize="cover";
main.style.height="20vh"


let body = document.querySelector('body');
console.log(body);
body.style.backgroundColor="blue";
body.style.border="1px solid blue";
body.style.height="100px";

body.insertAdjacentElement('afterbegin', main);

let header = document.createElement('header');
console.log(header);
header.style.backgroundColor="green";
header.style.border="1px solid green";
header.style.height="100px";
header.style.display = 'flex';

let sectionA = document.createElement('sectionA');
console.log(sectionA);
sectionA.style.backgroundColor="white";
sectionA.style.border="1px solid white";
sectionA.style.height="100px";
sectionA.style.width="65%";
let text = document.createTextNode("Galería");
sectionA.append(text);

sectionA.style.fontSize='64px';

let nav = document.createElement('nav');
console.log(nav);
nav.style.backgroundColor="yellow";
nav.style.border="1px solid yellow";
nav.style.height="100px";
nav.style.width="35%";
nav.style.display ='flex';
nav.style.justifyContent='space-between';
nav.style.alignItems = 'center';

let ul = document.createElement('ul');
ul.style.display= 'flex';

ul.style.fontFamily = 'sans, serif';
ul.style.fontSize = '32px';

let li1 = document.createElement('li1');
let link1 = document.createElement('a');
link1.href = '#';
link1.textContent = 'Carrito';

link1.style.textDecoration = 'none'
link1.style.color = 'black'

ul.appendChild(li1);

li1.appendChild(link1);


nav.appendChild(ul);
header.appendChild(nav);

header.insertAdjacentElement('afterbegin', sectionA);
header.insertAdjacentElement('beforeend', nav);


main.insertAdjacentElement('afterbegin', header);

let section1 = document.createElement('section');
console.log(section1);
body.insertAdjacentElement('beforeend', section1);
section1.style.backgroundColor="yellow";
section1.style.border="1px solid yellow";
section1.style.height="100px";
section1.style.width="30vw"
section1.style.margin="10px"
section1.style.display="flex"
section1.style.flexDirection="row"
section1.style.justifyContent="space-beetwen"

let section2 = document.createElement('section');
console.log(section2);
body.insertAdjacentElement('beforeend', section2);
section2.style.backgroundColor="purple";
section2.style.border="1px solid purple";
section2.style.height="100px";
section2.style.width="30vw"
section2.style.margin="10px"
section2.style.display="flex"
section2.style.flexDirection="row"
section2.style.justifyContent="space-between"

let section3 = document.createElement('section');
console.log(section3);
body.insertAdjacentElement('beforeend', section3);
section3.style.backgroundColor="green";
section3.style.border="1px solid green";
section3.style.height="100px";
section3.style.width="30vw"
section3.style.margin="10px"
section3.style.display="flex"
section3.style.flexDirection="row"
section3.style.justifyContent="space-between"

let section4 = document.createElement('section');
console.log(section2);
body.insertAdjacentElement('beforeend', section4);
section4.style.backgroundColor="violet";
section4.style.border="1px solid violet";
section4.style.height="100px";
section4.style.width="30vw"
section4.style.margin="10px"

let section5 = document.createElement('section');
console.log(section5);
body.insertAdjacentElement('beforeend', section5);
section5.style.backgroundColor="white";
section5.style.border="1px solid white";
section5.style.height="100px";
section5.style.width="30vw"
section5.style.margin="10px"

let section6 = document.createElement('section');
console.log(section6);
body.insertAdjacentElement('beforeend', section6);
section6.style.backgroundColor="gray";
section6.style.border="1px solid gray";
section6.style.height="100px";
section6.style.width="30vw"
section6.style.margin="10px"

let footer =document.createElement('footer');
console.log(footer);
footer.style.backgroundColor="black"
footer.style.border="1px solid black";
footer.style.height="100px";

body.insertAdjacentElement('beforeend', footer);