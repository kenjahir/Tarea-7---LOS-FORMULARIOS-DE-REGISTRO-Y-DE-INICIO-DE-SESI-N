document.addEventListener('DOMContentLoaded', function() {
  // Redireccionar al hacer clic en el botón de "Registrarse"
  document.getElementById('register-button').addEventListener('click', function() {
    window.location.href = 'register.html';
  });

  // Agregar la funcionalidad para el inicio de sesión
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí puedes agregar el código para procesar el inicio de sesión
    alert('¡Inicio de sesión exitoso!');
  });

  // Agregar la funcionalidad para el registro
  document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí puedes agregar el código para procesar el registro
    alert('¡Registro exitoso!');
  });
});





