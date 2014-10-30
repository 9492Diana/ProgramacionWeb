<?php
	include "includes/database.php";
	$user = $_POST['username'];
	$pass = $_POST['password'];

	$result = "";

	$query = "SELECT count(*) FROM users WHERE username = '$user' AND password = '$pass'";
	$resultado = mysqli_query($con, $query);

	while ( $row = mysqli_fetch_array($resultado) ) {
		$valor = $row[0];
	}

	if ($valor == 1) {
		$result["error"] = false;
		$result["message"] = "Usuario y clave correctas";
	} else {
		$result["error"] = true;
		$result["message"] = "El usuario y clave no existen o no coinciden";
	}

	echo json_encode($result);
	
?>