$(document).ready(principal);

function principal() {
  $('#toogleClave').click(toogleClave);

  $('#validarForm').click(function () {
    jAlert({
      titulo: 'Error ingresando',
      mensaje: 'Esto es una prueba de las notificaciones'
    }, function () {
      console.log('Prueba callback');
    });
  })

}

function toogleClave() {
  var passwordField = document.getElementById('clave');
  var value = passwordField.value;

  if (passwordField.type == 'password') {
    passwordField.type = 'text';
    $('#toogleClave').attr('class', 'lsf-icon passwordActive');
  }
  else {
    passwordField.type = 'password'; $('#toogleClave').attr('class', 'lsf-icon password');
  }

  passwordField.value = value;
}
