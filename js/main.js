$(document).ready(function() {
  $('#formularioRegistro').submit(function(e) {
    e.preventDefault();

    var usuario = {
      nombres: $('#nombres').val(),
      apellido: $('#apellido').val(),
      correo: $('#correo').val(),
      password: $('#password').val()
    };

    // Imprimir datos en la consola
    console.log(usuario);

    // Limpiar los campos del formulario
    $('#nombres').val('');
    $('#apellido').val('');
    $('#correo').val('');
    $('#password').val('');

    // Redirigir a la página de inicio de sesión
    //window.location.href = 'login.html';
  });
});

