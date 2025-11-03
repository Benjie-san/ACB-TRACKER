<?php
$host = "mydb-instance.abc123xyz.ap-southeast-1.rds.amazonaws.com"; // Replace with your actual RDS endpoint
$dbname = "information_db";
$username = "admin";
$password = "yourpassword";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>