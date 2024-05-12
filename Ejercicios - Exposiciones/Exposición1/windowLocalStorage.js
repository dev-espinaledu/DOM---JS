// Propiedad localStorage para almacenar datos localmente en el navegador
// Guardar datos en localStorage
function guardarLocal(){
    const nombre = document.getElementById("nombre").value;
    localStorage.setItem("nombreUsuario", nombre);
  }

// Obtener datos en localStorage
function mostrarLocalStorage(){
  const nombreGuardado = localStorage.getItem("nombreUsuario");
  document.getElementById("guardarNombre").textContent = "Nombre guardado: " + nombreGuardado;
}