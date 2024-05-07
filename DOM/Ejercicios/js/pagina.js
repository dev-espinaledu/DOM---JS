console.log("Estoy haciendo pruebas");
console.log("Todo va bien");

let main = document.createElement('main');
console.log(main);
main.style.backgroundColor="red";
main.style.border="1px solid red";
main.style.height="200px";
main.style.backgroundImage="url('img/gamer2.avif')";
main.style.backgroundSize="cover";
main.style.height="100vh"


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
let text = document.createTextNode("Start Bootstrap");
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
link1.textContent = 'Item 1';

link1.style.textDecoration = 'none'
link1.style.color = 'black'

let li2 = document.createElement('li2');
let link2 = document.createElement('a');
link2.href = '#';
link2.textContent = 'Item 2';

link2.style.textDecoration = 'none'
link2.style.color = 'black'

let li3 = document.createElement('li3');
let link3 = document.createElement('a');
link3.href = '#';
link3.textContent = 'Item 3';

link3.style.textDecoration = 'none'
link3.style.color = 'black'

let li4 = document.createElement('li4');
let link4 = document.createElement('a');
link4.href = '#';
link4.textContent = 'Item 4';

link4.style.textDecoration = 'none'
link4.style.color = 'black'

let li5 = document.createElement('li5');
let link5 = document.createElement('a');
link5.href = '#';
link5.textContent = 'Item 5';

link5.style.textDecoration = 'none'
link5.style.color = 'black'

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);

li1.appendChild(link1);
li2.appendChild(link2);
li3.appendChild(link3);
li4.appendChild(link4);
li5.appendChild(link5);

nav.appendChild(ul);
header.appendChild(nav);

header.insertAdjacentElement('afterbegin', sectionA);
header.insertAdjacentElement('beforeend', nav);


let article= document.createElement('article');
console.log(article);
article.style.backgroundColor="pink";
article.style.border="1px solid pink";
article.style.height="100px";


main.insertAdjacentElement('afterbegin', header);
main.insertAdjacentElement('beforeend', article);


/* let section1 = document.createElement('section');
console.log(section1);
body.insertAdjacentElement('beforeend', section1);
section1.style.backgroundColor="yellow";
section1.style.border="1px solid yellow";
section1.style.height="100px";

let section2 = document.createElement('section');
console.log(section2);
body.insertAdjacentElement('beforeend', section2);
section2.style.backgroundColor="purple";
section2.style.border="1px solid purple";
section2.style.height="100px";

let footer =document.createElement('footer');
console.log(footer);
body.insertAdjacentElement('beforeend', footer);

// crear elemento imagen
const img = document.createElement("img");
img.src = "#";
img.alt = "Logo Javascript";
 */