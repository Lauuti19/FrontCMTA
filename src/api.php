<?php
// archivo: api.php

// Habilita CORS para desarrollo local
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Maneja preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Datos de conexión (puedes usar variables de entorno para mayor seguridad)
$db_host = 'mysql-bdcmta.alwaysdata.net';
$db_user = 'bdcmta';
$db_pass = 'Contradel_BD';
$db_name = 'bdcmta_database';

// Conexión
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibe datos en formato JSON
    $input = json_decode(file_get_contents('php://input'), true);
    $titulo = $input['titulo'] ?? '';
    $imagen = $input['imagen'] ?? '';
    $pie = $input['pie'] ?? '';

    if ($titulo && $imagen && $pie) {
        $stmt = $conn->prepare("INSERT INTO noticias (titulo, imagen, pie) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $titulo, $imagen, $pie);
        if ($stmt->execute()) {
            echo json_encode(["success" => true, "message" => "Noticia agregada"]);
        } else {
            http_response_code(500);
            echo json_encode(["success" => false, "message" => "Error al agregar noticia"]);
        }
        $stmt->close();
    } else {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Datos incompletos"]);
    }
} else {
    // GET: devuelve todas las noticias
    $result = $conn->query("SELECT id, titulo, imagen, pie, fecha FROM noticias ORDER BY fecha DESC");
    $data = [];
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        $result->close();
    }
    echo json_encode($data);
}

$conn->close();
?>