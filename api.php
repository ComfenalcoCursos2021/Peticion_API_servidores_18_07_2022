<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=UTF-8');
    $_DATA = file_get_contents("php://input");
    $_DATA = json_decode($_DATA, true);
    print_r($_DATA);
    // print_r(apache_request_headers());

?>