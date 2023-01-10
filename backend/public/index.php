<?php

use App\Framework\DIC\DIC;
use App\Framework\Route\Router;

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Headers: authorization, content-type');

session_start();
require_once dirname(__DIR__) . "/vendor/autoload.php";

(new DIC())
    ->injectParameters(dirname(__FILE__, 2) . '/config/parameters.yaml')
    ->run(dirname(__FILE__, 2) . "/src");

(new Router())
    ->getRoutesFromAttributes(dirname(__FILE__, 2) . "/src/Controller")
    ->run();

