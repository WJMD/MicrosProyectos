<?php
$host = "bzujvkqhvdhxbtqgbcez-mysql.services.clever-cloud.com";
$user = "ufqmgf467v7btpob";
$password = "xuNrXV8TMND3N3QYaTyU";
$database = "bzujvkqhvdhxbtqgbcez";
$port = 3306;

$conexion = mysqli_connect($host, $user, $password, $database, $port);

if ($conexion) {
    echo 'Conectado a la base de datos';
} else {
    echo 'No se pudo conectar a la base de datos';
}
?>
