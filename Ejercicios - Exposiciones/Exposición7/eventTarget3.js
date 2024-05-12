const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonElement = event.target; // Obtiene el elemento botón que se clicó
        buttonElement.style.backgroundColor = generateRandomColor(); // Cambia el color de fondo aleatoriamente
    });
    });

    function generateRandomColor() {
    // Función para generar un color RGB aleatorio
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
    }