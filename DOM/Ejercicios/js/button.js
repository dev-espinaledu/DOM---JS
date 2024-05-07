console.log('Eventos del DOM');

let botonclick = document.querySelector('#btn-click');
    console.log(botonclick);
let inputin = document.querySelector('#btn-click');
    console.log(botonclick);

botonclick.addEventListener('click',
    function alerta (){
        console.log('Hiciste Click en el botón');
    }
);
botonclick.addEventListener('dblclick',
    function alerta (){
        console.log('Hiciste doble Click en el botón');
    }
);
botonclick.addEventListener('mouseenter',
    function alerta (){
        console.log('Entraste a la zona de input');
    }
);