
  $(document).ready(function() {
  // Definir una lista para almacenar los usuarios
  var listaUsuarios = [];

  $('#formularioRegistro').submit(function(e) {
    e.preventDefault();

    // Crear un objeto usuario con los datos del formulario
    var usuario = {
      nombres: $('#nombres').val(),
      apellido: $('#apellido').val(),
      correo: $('#correo').val(),
      password: $('#password').val()
    };

    // Agregar el usuario a la lista
    listaUsuarios.push(usuario);

    console.log(listaUsuarios)

    // Imprimir la lista de usuarios en la consola
    console.log(usuario)

    // Limpiar los campos del formulario
    $('#nombres').val('');
    $('#apellido').val('');
    $('#correo').val('');
    $('#password').val('');
    

    // Redirigir a la página de inicio de sesión
    //window.location.href = 'login.html';
  });
  
  // Lista de usuarios almacenados
  var listaUsuarios = [
    { nombres: "Miguel", apellido: "Pereira", correo: "Miguel@gmail.com", password: "12345"},
    { nombres: "pepe", apellido: "lava", correo: "diez@gmail.com", password: "123455"},
    { nombres: "jaime", apellido: "pepe", correo: "doce@gmail.com", password: "1225"},
    
    // Agrega más usuarios según sea necesario
  ];

  function verificarCredenciales(username, password) {
    for (var i = 0; i < listaUsuarios.length; i++) {
      if (listaUsuarios[i].correo === username || listaUsuarios[i].nombres === username) {
        if (listaUsuarios[i].password === password) {
          return true; 
        }
      }
    }
    return false;
  }

  // Evento de clic en el botón de inicio de sesión
  $('#login-button').click(function() {
    var username = $('#username').val();
    var password = $('#password').val();

    if (verificarCredenciales(username, password)) {
      alert("Inicio de sesión exitoso!");
      window.location.href = 'gustos.html';
    } else {
      alert("Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
    }
  });
});

