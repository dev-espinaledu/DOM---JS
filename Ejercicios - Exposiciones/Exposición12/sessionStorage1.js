function guardarDatos() {
    var nombreUsuario = prompt("Ingrese su nombre de usuario:");
    sessionStorage.setItem('usuario', nombreUsuario);
    alert("Nombre de usuario guardado en sessionStorage.");
}

function mostrarDatos() {
    var usuario = sessionStorage.getItem('usuario');
    if (usuario) {
        alert("Nombre de usuario almacenado en sessionStorage: " + usuario);
    } else {
        alert("No se encontró ningún nombre de usuario en sessionStorage.");
    }
}