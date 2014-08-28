<?php
	include_once("includes/database.php");

	if (isset($_GET["codigo"])){
		$codigo = $_GET["codigo"];

		echo "<h1>Notas de estudiante: ".$codigo."</h1><br /><br />";
	} else {
		echo "<h1>Notas de estudiantes</h1><br /><br />";
	}
	
	
	
    
	
	/*$query = "SELECT * FROM estudiantesweb.estudiantes";
	$result = mysqli_query($con,$query);

 	while ($row = mysqli_fetch_array($result)) {
 		echo $row["codigo"]." ".$row["nombre"]." ".$row["apellido"]." ".$row["correo"];
 		echo "<br />";
 	}*/

?>