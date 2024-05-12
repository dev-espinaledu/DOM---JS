// ejemplo 2 Mostrar/Ocultar elemento 
document.getElementById('mostrarCheckbox').onchange = function(){
    document.getElementById('elemento').style.display = this.checked? 'block': 'none';
}
