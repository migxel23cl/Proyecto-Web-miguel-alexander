
  $(document).ready(function() {
  var listaUsuarios = [];

  $('#formularioRegistro').submit(function(e) {
    e.preventDefault();

   
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
    

    //window.location.href = 'login.html';
  });
  
  
  var listaUsuarios = [
    { nombres: "Miguel", apellido: "Pereira", correo: "Miguel@gmail.com", password: "12345"},
    { nombres: "pepe", apellido: "lava", correo: "diez@gmail.com", password: "123455"},
    { nombres: "jaime", apellido: "pepe", correo: "doce@gmail.com", password: "1225"},
    

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

