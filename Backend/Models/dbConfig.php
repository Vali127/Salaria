<?php
require __DIR__ . '/../vendor/autoload.php';
use Dotenv\Dotenv;

// Charger .env
$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

function dbConnect() {
    $options = [
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ];

    $dsn = 'mysql:host=' . $_ENV['DB_HOST'] . ';dbname=' . $_ENV['DB_NAME'];
    $user = $_ENV['DB_USER'];
    $passwd = $_ENV['DB_PASS'];

    return new PDO($dsn, $user, $passwd, $options);
}
