<?php
	include_once("includes/database.php");

	
	echo "<h1>Listado de estudiantes</h1><br /><br />";
    
	
	$query = "SELECT * FROM estudiantesweb.estudiantes ORDER BY apellido";
	$result = mysqli_query($con,$query);

 	while ($row = mysqli_fetch_array($result)) {
 		echo $row["codigo"]." ".$row["nombre"]." ".$row["apellido"]." ".$row["correo"];
 		echo "<br />";
 	}

?>