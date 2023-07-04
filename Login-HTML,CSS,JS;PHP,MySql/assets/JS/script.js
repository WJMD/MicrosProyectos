//Declaracion de Variables
var contenedor__login_Registro = document.querySelector(".contenedor__login-registro");
var formulario_Login = document.querySelector(".formulario__login");
var formulario_Registro = document.querySelector(".formulario__registro");

var caja__trasera_login = document.querySelector(".caja__trasera-login");
var caja__trasera_Registro = document.querySelector(".caja__trasera-registro");

document.getElementById("btn__iniciar-sesion").addEventListener("click",iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click",registro);

//
function iniciarSesion(){

    formulario_Registro.style.display = "none";
    contenedor__login_Registro.style.left= "10px";
    formulario_Login.style.display = "block";
    caja__trasera_Registro.style.opacity = "1";
    caja__trasera_login.style.opacity = "0";

}

//
function registro(){

    formulario_Registro.style.display = "block";
    contenedor__login_Registro.style.left= "410px";
    formulario_Login.style.display = "none";
    caja__trasera_Registro.style.opacity = "0";
    caja__trasera_login.style.opacity = "1";

}


