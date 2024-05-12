const table = document.querySelector('table');
    
    table.addEventListener('click', (event) => {
    const targetElement = event.target; // Obtiene el elemento donde se hizo clic
    if (targetElement.tagName === 'INPUT') {
        alert('Se ha hecho clic en una casilla de verificación');
    } else if (targetElement.tagName === 'A') {
        alert('Se ha hecho clic en un enlace');
    }
    });