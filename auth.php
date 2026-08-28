<?php
session_start();
header('Content-Type: application/json');
$action=$_GET['action']??'check';
if($action==='check'){echo json_encode(['ok'=>isset($_SESSION['admin_id'])]);exit;}
if($action==='login'){
  // Ganti hash ini dengan hasil password_hash('PASSWORD_ANDA', PASSWORD_DEFAULT)
  $username='admin';
  $passwordHash='$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llCq2Yg4oVhYv5lVQeG3u';
  $u=$_POST['username']??'';$p=$_POST['password']??'';
  if($u===$username && password_verify($p,$passwordHash)){session_regenerate_id(true);$_SESSION['admin_id']=1;echo json_encode(['ok'=>true]);}
  else echo json_encode(['ok'=>false,'message'=>'Username atau password salah.']);
  exit;
}
if($action==='logout'){session_unset();session_destroy();echo json_encode(['ok'=>true]);exit;}
echo json_encode(['ok'=>false,'message'=>'Action tidak dikenal']);