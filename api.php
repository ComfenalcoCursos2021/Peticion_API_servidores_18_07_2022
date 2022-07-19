<?php
    header('Access-Control-Allow-Origin: *');
    $_DATA = file_get_contents("php://input");
    $_DATA = json_decode($_DATA, true);
    extract($_DATA);
    echo "Hola usuario $nombres $apellidos soy el archivo php recolectado tus datos #$cedula tu numero de identificacion y tu correo electronico es $email, servidor = ".$_SERVER['HTTP_HOST'];
?>