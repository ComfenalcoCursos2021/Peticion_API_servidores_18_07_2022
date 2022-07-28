<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    header('Content-Type: application/json');
    $_DATA = file_get_contents("php://input");
    $_DATA = json_decode($_DATA);


    $headers = explode(",", str_ireplace(" ","", apache_request_headers()["accept"]));
    $_MarcaVerificacion = $_SERVER["REQUEST_TIME"];
    $_restante = (int) $headers[0] - $_MarcaVerificacion;
    $_MarcaVerificacion += ($_restante > 0) ? $_restante : 0;
    $_JSON = file_get_contents("config.json");
    $_JSON = json_decode($_JSON);
    $_Verificar = substr(gmdate("l",(int) $_MarcaVerificacion), 0, 3).gmdate(", d M Y H:i:s T",(int) $_MarcaVerificacion);
    $hash = hash_hmac('sha256', $_Verificar, $_JSON->token_csrf);
    $res = match ($headers[1]){
        $hash => (object) [
            "mensaje" => "ok",
            "estado" => 200,
            "servidor" => $_SERVER['HTTP_HOST'],
            "datos" => $_DATA
        ],
        default => (object) [
            "mensaje" => "Token Caducado",
            "estado" => 300,
            "servidor" => $_SERVER['HTTP_HOST']
        ],
    };
    print_r(json_encode($res, JSON_PRETTY_PRINT));
?>