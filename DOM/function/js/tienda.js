document.addEventListener("DOMContentLoaded", function() {
  const buyButtons = document.querySelectorAll('.buy-btn');
  const cartList = document.getElementById('cart-list');
  let cartTotal = 0;

  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.name;
      const price = parseInt(button.dataset.price);

      const li = document.createElement('li');
      li.textContent = `${name} - $${price}`;
      const deleteButton = document.createElement('button'); // Botón eliminar
      deleteButton.textContent = 'Eliminar';
      deleteButton.classList.add('delete-btn');
      li.appendChild(deleteButton); // Agregar botón eliminar al elemento de la lista
      cartList.appendChild(li);

      cartTotal += price;
      document.getElementById('cart-total').textContent = cartTotal;

      // Agregar evento al botón eliminar
      deleteButton.addEventListener('click', () => {
        cartTotal -= price;
        document.getElementById('cart-total').textContent = cartTotal;
        li.remove(); // Eliminar el elemento de la lista
      });
    });
  });

  const cartLink = document.getElementById('cart');
  const cartContainer = document.getElementById('cart-container');
  cartLink.addEventListener('click', (event) => {
    event.preventDefault();
    cartContainer.classList.toggle('show');
  });
});