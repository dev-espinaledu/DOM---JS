console.log("hola soy Pablo");

window.addEventListener('DOMContentLoaded', (event)=>{
    console.log('DOM completamente cargado y analizado');
});

function abrirVentana(){
    window.open('https://www.google.com/', '_blank', 'width.600, height.400')
}