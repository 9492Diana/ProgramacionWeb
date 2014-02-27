/*function getRandomColor() {
    var letters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function queCambieDeColor(){
	document.getElementById('elId').style.backgroundColor = getRandomColor();
	queSeMuevaDaleDonOmarQueSeMueva();
}

function queSume() {
	console.log("Sumo");
	document.getElementById('elId').innerHTML = Number(document.getElementById('elId').innerHTML) + 1;
}
function queSeMuevaDaleDonOmarQueSeMueva(){
		//console.log(document.getElementById('elId').style.marginLeft)
		document.getElementById('elId').style.marginLeft = ;
}

function iniciar(){
	console.log("Ya cargó la web");
	var miCuadradoDeCuatroLadosIgualesYRosado = document.getElementById('elId');
	miCuadradoDeCuatroLadosIgualesYRosado.addEventListener('click',queSume);
	document.getElementById('elBoton').addEventListener('click',queCambieDeColor)
}


window.addEventListener("load", iniciar);*/

jQuery(document).ready(function(){
	console.log("ya");

	jQuery('#elId').click(function(){
		jQuery('#elId').css({'background-color':'orange','width':'250px'});
		jQuery('#elId').html(Number(jQuery('#elId').html()) + 1);
	})
});