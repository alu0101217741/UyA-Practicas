// Ejercicio 2: Define una función en javascript en la que se inserte un texto en una tarjeta que el usuario introduce por el teclado.
$(document).ready(function() {

  $("#user_text").keyup(function() {
    var text = $("#user_text").val();
    $("#print_text").text(text);
  });

  
}); 