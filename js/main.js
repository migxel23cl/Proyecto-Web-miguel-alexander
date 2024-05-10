
$(document).ready(function() {
  $('#formularioRegistro').submit(function(e) {
    e.preventDefault();

    var usuario = {
      nombres: $('#nombres').val(),
      apellido: $('#apellido').val(),
      correo: $('#correo').val(),
      password: $('#password').val()
    };

    // Guardar el usuario en localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Limpiar los campos del formulario
    $('#nombres').val('');
    $('#apellido').val('');
    $('#correo').val('');
    $('#password').val('');

    window.location.href = 'login.html';
  });

  $('#login-button').click(function() {
    var username = $('#username').val();
    var password = $('#password').val();

    // Recuperar el usuario de localStorage
    var usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

    if (usuarioGuardado && usuarioGuardado.correo === username && usuarioGuardado.password === password) {
      alert("Inicio de sesión exitoso!");
      window.location.href = 'gustos.html';
    } else {
      alert("Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
    }
  });
  
});

$(document).ready(function() {
  // Array para almacenar los productos en el carrito
  var carrito = [];

  // Función para actualizar el carrito
  function actualizarCarrito() {
    $('#product-image').attr('src', '');
    $('#product-name').text('');
    $('#product-price').text('');
    var ultimoProducto = carrito[carrito.length - 1];
    if (ultimoProducto) {
      $('#product-image').attr('src', ultimoProducto.imagen);
      $('#product-name').text(ultimoProducto.nombre);
      $('#product-price').text(ultimoProducto.precio);
    }
  }

  // Cuando se hace clic en "Agregar Carrito"
  $('#cart-button').click(function() {
    var producto = {
      nombre: $('#product-name').text(),
      precio: $('#product-price').text(),
      imagen: $('#product-image').attr('src')
    };

    // Agregar el producto al carrito
    carrito.push(producto);

    // Actualizar el carrito
    actualizarCarrito();

    // Abrir el offcanvas
    var offcanvasElement = document.getElementById('offcanvasRight');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
    bsOffcanvas.show();
  });
});



//SOLUCIONAR PROBLEMA NO RECONOCE EL PRODUCTO



