$(document).ready(function() {

  var firebaseConfig = {
    apiKey: "AIzaSyCGbrGzQIEByQNn_d20zqpmzzB5pOOwy7M",
    authDomain: "uya-introduccion-a-firebase.firebaseapp.com",
    databaseURL: "https://uya-introduccion-a-firebase-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "uya-introduccion-a-firebase",
    storageBucket: "uya-introduccion-a-firebase.appspot.com",
    messagingSenderId: "537447051667",
    appId: "1:537447051667:web:3dd685f78e4f12a3007866",
    measurementId: "G-J5ZRD2VWDJ"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


   $("#boton").mouseup(function() {
      //////////////////////////////////////////////////////////////////////////////  
      var database = firebase.database();

        const data = {
            temas: $('#temas').val(),
            fecha: $('#fecha').val(),
            asignatura: $('#asignatura').val()
        };

        var variable = parseInt(Math.random() * 1000000);
        var direccion = '/examenes/' + data.asignatura + variable;
        database.ref(direccion).set(data)
          .then(function(){
            alert('El examen se ha guardado correctamente.'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
          })
          .catch(function(){
            alert('Se ha producido un error guardando el examen.'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
        });

          var ref = database.ref('/examenes');
          ref.on("value", function(snapshot) {
            $("#resultado").text('Los examenes planificados son:');
            var contenido_1 = snapshot.val();
            var contenido = 'Asignatura: ' + snapshot.val().asignatura + '   Temas: ' + snapshot.val().temas + '   Fecha: ' + snapshot.val().fechas + '\n';
            //$("#examenes").textContent(contenido);
            //console.log(contenido);
            $("#examenes").text(JSON.stringify(contenido_1));
            //console.log(contenido_1);
          });
    });
});
