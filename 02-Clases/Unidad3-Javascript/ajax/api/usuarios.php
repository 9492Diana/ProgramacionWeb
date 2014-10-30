<?php
	include "includes/database.php";

	$result = "";
	$tmp = [];

	$query = "SELECT * FROM users WHERE 1";
	$resultado = mysqli_query($con, $query);

	while ( $row = mysqli_fetch_array($resultado) ) {
		$usuario["id"] = $row["id"];
		$usuario["username"] = $row["username"];

		array_push($tmp, $usuario);
	}

	$result["error"] = false;
	$result["usuarios"] = $tmp;


	echo json_encode($result);
	
?>