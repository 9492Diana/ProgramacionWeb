jQuery(document).ready(function(){
	console.log("Ya cargó");
	
	origen = document.getElementById('laImagen');
	destino = document.getElementById('recipiente');
	canvas = document.getElementById('lienzo');
	lienzo = canvas.getContext('2d');

	origen.addEventListener('dragstart', arrastrar, false);
	//origen.addEventListener('drag', arrastrando, false);
	origen.addEventListener('dragend', finalizar, false);

	/*destino.addEventListener('dragenter', entrar, false);
	destino.addEventListener('dragover', sobre, false);
	destino.addEventListener('dragleave', salir, false);
	destino.addEventListener('drop', soltar, false);*/	

	canvas.addEventListener('dragenter',entrarLienzo, false);
	canvas.addEventListener('dragover', sobreLienzo, false);
	canvas.addEventListener('dragleave',salirLienzo, false);
	canvas.addEventListener('drop',soltarLienzo, false);

	

	function arrastrar(event) {
		//var elemento = "<img src='"+origen.getAttribute('src')+"' width='"+origen.getAttribute('width')+"' heigth='"+origen.getAttribute('heigth')+"' />";
		//event.dataTransfer.setData('Text',elemento);
		var elId = event.target.getAttribute('id');
		event.dataTransfer.setData('Text',elId);
		event.dataTransfer.setDragImage(event.target,0,0);
		//console.log(event);
	};

	function arrastrando(event) {
		event.preventDefault();
		//console.log("Me están arrastrando");
	};

	function entrar(event) {
		event.preventDefault();
		$("#recipiente").addClass('sobre');
		//console.log("Aquí me pueden soltar");
	};

	function entrarLienzo(event) {
		event.preventDefault();
		canvas.style.backgroundColor = "grey";
		//console.log("Aquí me pueden soltar");
	};

	function sobre(event) {
		event.preventDefault();
		//console.log("Aquí, aquí");
	};

	function sobreLienzo(event) {
		event.preventDefault();
		//console.log("Aquí, aquí");
	};

	function salir(event) {
		event.preventDefault();
		$("#recipiente").removeClass('sobre');
		//console.log("Ya no");
	};

	function salirLienzo(event) {
		event.preventDefault();
		canvas.style.backgroundColor = "silver";
		//console.log("Aquí me pueden soltar");
	};

	function soltar(event) {
		event.preventDefault();
		/*var codigo = event.dataTransfer.getData('Text');
		destino.innerHTML = codigo;
		console.log("soltado "+codigo);*/
	
	};

	function soltarLienzo(event) {
		event.preventDefault();
		var elId = event.dataTransfer.getData('Text');
		var laImagen = document.getElementById(elId);

		posX = event.pageX - canvas.offsetLeft;
		posY = event.pageY - canvas.offsetTop;
		w = laImagen.getAttribute('width');
		h = laImagen.getAttribute('height');

		lienzo.drawImage(laImagen,posX,posY,w,h);
	};

	function finalizar(event) {
		var elOrigen = event.target;
		elOrigen.style.visibility = 'hidden';
	}

});