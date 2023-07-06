
setTimeout(() => {
    console.log("Delayed for 1 second.");

    proceso();

  }, "1000");

  function proceso(){
    console.log("Función proceso() ejecutada");
    
    var nombreCompleto = $('#nombre_completo').val();
    var correoRegistro = $('#correo_registro').val();
    var usuario = $('#Usuario').val();
    var contrasenaRegistro = $('#contrasena_registro').val();
 
    //alert("Los Datos se emviaron correctamente"+nombreCompleto+contrasenaRegistro/+correRegistro+usuario)

    $.post('./PHP/registro_usuario_be.php', {
       nombre_completo: nombreCompleto,
       correo: correoRegistro,
       usuario: usuario,
       contrasena: contrasenaRegistro
    }, function(data) {
        console.log("Respuesta del servidor:", data);

       if (data != null) {
          alert("Los datos se enviaron correctamente");
       } else {
          alert("Los datos NO se enviaron correctamente");
       }
    });
 }