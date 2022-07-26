<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=UTF-8');
    $_DATA = file_get_contents("php://input");
    $_DATA = json_decode($_DATA, true);
    $_MarcaVerificacion = $_SERVER["REQUEST_TIME"];
    // print_r($_DATA);
    // print_r(apache_request_headers());
    // var_dump( substr(gmdate("l", $_MarcaVerificacion), 0, 3).gmdate(", d M Y H:i:s T", $_SERVER["REQUEST_TIME"]));
    $hash = hash_hmac('sha256', 'Miguel', '111');
    var_dump($hash);

?>