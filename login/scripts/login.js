$(document).ready(principal);

function principal() {
  var fuente = '<input type="text" />'
	jAlert({
      titulo: 'Error COBOL',
      mensaje: fuente,
      autoclose: false
    },function(){
    console.log('El usuario acepto');
    // jAlert_close();
	});
	
  $('#toogleClave').click(toogleClave);

  $('#validarForm').click(function () {
    jAlert({
      titulo: 'Error ingresando',
      mensaje: 'Esto es una prueba de las notificaciones',
      autoclose: false
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
