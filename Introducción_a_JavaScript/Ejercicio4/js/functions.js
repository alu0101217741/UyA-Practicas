// Define una función en javascript en la que se inserte un texto en una tarjeta que el usuario introduce por el teclado
$(document).ready(function() {
  $("#number_paragraph").text('Cantidad de párrafos: '  + $("p").length);
  $("#number_links").text('Cantidad de enlaces: '  + $("a").length);
  $("#number_divs").text('Cantidad de divs: '  + $("div").length);
}); 