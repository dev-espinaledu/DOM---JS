document.getElementById('inicio').addEventListener('submit', function() {
    let nombreUsuario = document.getElementById('nombreUsuario').value;
    let contraseña = document.getElementById('contraseña').value;

    // Almacenar las credenciales en localStorage
    localStorage.setItem('Nombre de usuario', nombreUsuario);
    localStorage.setItem('Contraseña', contraseña);

    alert('Credenciales almacenadas en localStorage. Puedes verificarlas en la consola.');
});
