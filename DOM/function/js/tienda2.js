/* Escuchador para cuando se seleccione "carrito" y que pueda aparecer el aside con los productos que se han comprado */
document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    const cartList = document.getElementById('cart-list');
    let cartTotal = 0;
  
    buyButtons.forEach(button => {
      button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);
  
        const li = document.createElement('li'); /* la lista de productos que aparecerán en el carrito */
        li.textContent = `${name} - $${price}`;
        cartList.appendChild(li);
  /* precio total de los productos en el carrito */
        cartTotal += price;
        document.getElementById('cart-total').textContent = cartTotal;
      });
    });
  /* agregar el event cuando se de click en carrito */
    const cartLink = document.getElementById('cart');
    const cartContainer = document.getElementById('cart-container');
    cartLink.addEventListener('click', (event) => {
      event.preventDefault();
      cartContainer.classList.toggle('show');
    });
  });
  
  function vaciarCarrito() {
    // Obtener la lista de productos del carrito
    var listaProductos = document.getElementById("lista-productos");
    // Eliminar todos los elementos de la lista
    listaProductos.innerHTML = "";
    // Actualizar el total u otras acciones necesarias
    actualizarTotal();
  }

  function actualizarTotal() {
    document.getElementById("total").innerText = "0";

  }