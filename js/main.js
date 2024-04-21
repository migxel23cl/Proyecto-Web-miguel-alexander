const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function(event) {
  event.preventDefault(); 


  const username = usernameInput.value;
  const password = passwordInput.value;

  
  if (username === '' || password === '') {
    alert('Por favor, ingrese su nombre de usuario y contraseña.');
    return;
  }


  alert('¡Inicio de sesión exitoso!');


  window.location.href = "gustos.html";
});
