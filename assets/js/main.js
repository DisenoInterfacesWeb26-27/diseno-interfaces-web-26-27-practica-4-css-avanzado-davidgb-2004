// Formulario de contacto: sin servidor, se muestra un mensaje de confirmación.
(function () {
  "use strict";
  var formulario = document.getElementById("form-contacto");
  var mensaje = document.getElementById("mensaje-ok");
  if (!formulario || !mensaje) {
    return;
  }
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    mensaje.hidden = false;
    formulario.reset();
    document.getElementById("nombre").focus();
  });
})();
