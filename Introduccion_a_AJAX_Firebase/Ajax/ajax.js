$(document).ready(function() {
  $("#boton").mouseup(function() {
    if(validacion()) {
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/comments',
        type: 'GET',
        async: true,
        data: $( "form" ).serializeArray(),
        success: function (respuesta) {
          $("#resultado").text(JSON.stringify(respuesta));
        },
        error: function () {
          alert('ERROR: Se ha producido un error al realizar la petición del servicio.');
        }
      });
    }
  });

  function validacion() {
    var valor = $("input").val();
    var correcto = true;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
      alert('ERROR: Es un campo obligatorio, debe introducir un número.');
      correcto = false;
    } else if( isNaN(valor) ) {
        alert('ERROR: Debe introducir un valor numérico.')
        correcto = false;
    }
    return correcto;
    }
});
