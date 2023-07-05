<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login y Registro</title>
    <link rel="stylesheet" href="./assets/CSS/style.css">
</head>
<body>
    <header></header>
    <main>

        <div class="contenedor__todo">
            <div class="caja__trasera">
                <div class="caja__trasera-login">
                    <h3>Ya tienes una cuenta?</h3>
                    <p>Inicia sesion para entrar a la pagina</p>
                    <button id="btn__iniciar-sesion"  type="submit">Iniciar Sesion</button>
                </div>

                <div class="caja__trasera-registro">
                    <h3>Aun no tienes una cuenta?</h3>
                    <p>Registrate para que puedas Iniciar sesion</p>
                    <button id="btn__registrarse"  type="submit">Registrarse</button>
                </div>
            </div>
            <!--Formularios de Login y registro-->
            <div class="contenedor__login-registro">
                <!--Formulario de Login -->
                <form action="" class="formulario__login">
                    <h2>Iniciar Sesion</h2>
                    <input type="email" placeholder="Correo electronico">
                    <input type="password" placeholder="contraseña">
                    <button  type="submit">Entrar</button>
                </form>
                    <!--Formulario de registro-->
                <form action="./PHP/registro_usuario_be.php" class="formulario__registro">
                    <h2>Registrarse</h2>
                    <input type="text" placeholder="Nombre Completo" method="POST" name="nombre_completo">
                    <input type="email" placeholder="Correo electronico" name="correo">
                    <input type="text" placeholder="Ususario" name="usuario">
                    <input type="password" placeholder="contraseña" name="contrasena">
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    </main>
    <footer></footer>

    <script src="./assets/JS/script.js"></script>
</body>
</html>