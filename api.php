<?php
    header('Access-Control-Allow-Origin: *');
    
    $cedula = (int) 0;
    $nombres = (string) "Sistema";
    $apellidos = (string) "Api";
    $email = (string) "xxxx@gmail.com";

    $validarDatos = function() use(&$cedula, &$nombres, &$apellidos, &$email):string{
        $_DATA = file_get_contents("php://input");
        $_DATA = json_decode($_DATA, true);
        extract($_DATA);
        return "EL usuario realizo una peticion POST";
    };
    $mensaje = match($_SERVER["REQUEST_METHOD"]){
        "POST" => $validarDatos(),
        "GET" => (string) "EL usuario realizo una peticion GET"
    };
    echo $mensaje;
    echo "<br>";
    echo "Hola usuario $nombres $apellidos soy el archivo php recolectado tus datos #$cedula tu numero de identificacion y tu correo electronico es $email, servidor = ".$_SERVER['HTTP_HOST'];

?>