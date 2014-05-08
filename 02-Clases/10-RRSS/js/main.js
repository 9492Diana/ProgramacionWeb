$(document).ready(function() {
	var tag = "cats";
	var contador = 10;
	var token = '48096206.5376aac.27262b3e261d40868dadf6639f65b7ea';
	var parametros = {access_token:token};

	aPorEllas(parametros);

	function aPorEllas(parametros_de_acceso) {
		var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&count=" + contador;

		$.getJSON(url, parametros_de_acceso, cargarImagenes);
	}

	function cargarImagenes(objeto) {
		console.log(objeto);
		console.log(objeto.meta);

		if (objeto.meta.code == 200) {
			var imagenes = objeto.data;

				if (imagenes.length > 0) {
					for (var key in imagenes) {
						var laImagen = imagenes[key];
						$("#target").append('<figure><img src="' + laImagen.images.standard_resolution.url + '" /></figure>' ); 
					}
				}
		}
	}

});