document.getElementById('btnPago').addEventListener('click', function() {
    // Obtener los valores de los campos de la tarjeta de crédito
    const nombreTarjeta = document.querySelector('input[placeholder="sr. juan pérez"]').value;
    const numeroTarjeta = document.querySelector('input[placeholder="1111-2222-3333-4444"]').value;
    const mesExpiracion = document.querySelector('input[placeholder="enero"]').value;
    const anioExpiracion = document.querySelector('input[placeholder="2022"]').value;
    const cvv = document.querySelector('input[placeholder="1234"]').value;
  
    // Verificar si algún campo está vacío
    if (!nombreTarjeta || !numeroTarjeta || !mesExpiracion || !anioExpiracion || !cvv) {
      // Mostrar un mensaje de alerta
      alert('Por favor, complete todos los campos de la información de la tarjeta de crédito.');
    } else {
      // Enviar el formulario
      document.querySelector('form').submit();
    }
  });