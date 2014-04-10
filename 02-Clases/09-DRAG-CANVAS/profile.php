<?php 
    require_once('includes/database.php'); 
    $idUser = $_GET["id"];
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>This is the profile of motherfucking website</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
        <style type="text/css">
            .debug {
                display: block;
                color: blue;
                border: solid 1px blue;
                padding: 2px;
            }
        </style>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <header id="elHeader">
            <img id="logo" src="img/logo.png" />
            <h1>This is web</h1>
            <nav>
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="profile.php?id=1">Profile</a></li>
                </ul>
            </nav>
        </header>

        <section>
            <?php
                $query = "SELECT * FROM posts WHERE idUsuario=".$idUser;
                $resultado = mysql_query($query) OR die("<p class='error'>Error de query: ".mysql_error()."</p></p>");

                while ( $row = mysql_fetch_array($resultado) ) {
                    echo "<article>";
                    echo "<p class='username'><a href='profile.php?id=".$row["idUsuario"]."'>";
                    $query = "SELECT nombre FROM users WHERE idUsuario=".$row["idUsuario"];
                    $resultado2 = mysql_query($query) OR die("<p class='error'>Error de query: ".mysql_error()."</p></p>");
                    while ( $row2 = mysql_fetch_array($resultado2)) {
                        echo $row2["nombre"];
                    }
                    echo "</a></p><br />";
                    echo "<img src='img/".$row["urlImagen"]."' />";
                    echo "<p>".$row["texto"]."</p>";
                    echo "<span class='icon-star favs'";
                    if($row["fav"]==1) { echo "style='color:yellow;'"; }
                    echo " ></span>";
                    echo "<div class='votacion'>";
                    echo "<span class='icon-thumbs-up up'></span>";
                    echo "<span class='score'>".$row["score"]."</span>";
                    echo "<span class='icon-thumbs-up2 down'></span>";
                    echo "</div>";
                    echo "</article>";
                }
            ?>

        </section>

        <footer id="elFooter">
            <p>Powered by <a target="_blank" href="http://snowcone.com.co">Snowcone</a></p>
        </footer>

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>
