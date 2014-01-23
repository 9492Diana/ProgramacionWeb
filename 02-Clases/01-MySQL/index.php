<html>
	<head>
		<meta charset="UTF-8">
	</head>
	<body>
	<style type="text/css">
		.debug {
			display: block;
			color: blue;
			border: solid 1px blue;
			padding: 2px;
		}

	</style>
		Esto es MySQL

		<p class='debug'>
		<?php require_once('includes/database.php'); ?>
		</p>

		<div>
			<p>Clientes</p>
			<?php 
			 $query = "SELECT cedula,nombre,apellido FROM clientes WHERE 1";	
			 echo "<p class='debug'>";
			 $resultado = mysql_query($query) OR die("<p class='error'>Error de query: ".mysql_error()."</p></p>");
			 echo "<br />Query efectuado</p>";

			 while ( $row = mysql_fetch_array($resultado) ) {
			 	echo $row['cedula'].", ".$row['nombre'].", ".utf8_decode($row['apellido'])."<br />";
			 }
			?>
		</div>
	</body>
</html>