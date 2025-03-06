document.addEventListener('DOMContentLoaded', function() {
  const heladoBtn = document.getElementById('helado-btn');

  if (heladoBtn) {
      heladoBtn.addEventListener('click', function() {
          window.location.href = 'precio-producto.html';
      });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const cantidadInput = document.getElementById('cantidad');
  const precioInput = document.getElementById('precio');
  const subtotalInput = document.getElementById('subtotal');
  const totalInput = document.getElementById('total');
  const calcularButton = document.getElementById('calcular-button');

  function calcularTotal() {
      const cantidad = parseInt(cantidadInput.value);
      const precio = parseFloat(precioInput.value.replace('$', '')); // Elimina el símbolo "$" y convierte a número
      const subtotal = cantidad * precio;
      const total = subtotal; // En este caso, el total es igual al subtotal

      subtotalInput.value = '$' + subtotal.toFixed(2);
      totalInput.value = '$' + total.toFixed(2);
  }

  // Calcula el total al cargar la página
  calcularTotal();

  // Calcula el total cuando se cambia la cantidad
  cantidadInput.addEventListener('change', calcularTotal);

  // Calcula el total cuando se hace clic en el botón "Calcular Pago Total"
  calcularButton.addEventListener('click', calcularTotal);
});



 // Mostrar/Ocultar formulario de tarjeta de crédito (opcional)
 const cashPayment = document.getElementById('cash-payment');
 const creditCardPayment = document.getElementById('credit-card-payment');
 const creditCardForm = document.getElementById('credit-card-form');

 cashPayment.addEventListener('change', function() {
     creditCardForm.style.display = 'none';
 });

 creditCardPayment.addEventListener('change', function() {
     creditCardForm.style.display = 'block';
 });

 document.getElementById('pay-button').addEventListener('click', function() {
    window.location.href = 'tarjeta-credito.html';
});



