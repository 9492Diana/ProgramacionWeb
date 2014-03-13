<?php
require_once('database.php');

$idPost = $_POST["idPost"];
$valueFav = $_POST["valueFav"];

$query = "UPDATE posts SET fav=".$valueFav." WHERE idPost=".$idPost;

$resultado = mysql_query($query) OR die("Error de query: ".mysql_error());
echo "Post ".$idPost." actualizado";
?>