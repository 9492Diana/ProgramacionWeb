<?php
	include "includes/database.php";
	$id = $_POST['id'];
	$result = "";
	$tmp = [];

	$query = "SELECT * FROM posts WHERE iduser = $id";
	$resultado = mysqli_query($con, $query);

	while ( $row = mysqli_fetch_array($resultado) ) {
		$posts["id"] = $row["id"];
		$posts["title"] = $row["title"];
		$posts["content"] = $row["content"];

		array_push($tmp, $posts);
	}

	$result["error"] = false;
	$result["posts"] = $tmp;


	echo json_encode($result);
	
?>