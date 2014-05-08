$(document).ready(function(){
	var tag = "cats";
	var contador = 12;
	var location_id = 63499;
	var token = '48096206.5376aac.27262b3e261d40868dadf6639f65b7ea';
	var access_parameters = {access_token:token};

	aPorLasImages(access_parameters);

	function aPorLasImages(access_parameters) {  
		var url = 'https://api.instagram.com/v1/locations/' + location_id + '/media/recent?callback=?&count='+ contador;

		$.getJSON(url, access_parameters, cargaImagenes);
	}

	function cargaImagenes(data) {  
		console.log(data);
		console.log(data.meta);

		if (data.meta.code == 200) {
			var imagenes = data.data;

			if (imagenes.length > 0) {				
				for (var key in imagenes ){
			        var imagen = imagenes[key];
			        if (key%4 == 0) {
			        	if (key == 0) {
			        		$('#target').append('<div class="row">');
			        	} else {
			        		$('#target').append('</div><div class="row">');
			        	}
			        	$('#target').append('<div class="col-sm-3 col-lg-3 instaIma"><figure><img src="' + imagen.images.standard_resolution.url + '"></figure><div class="imgData"><span class="user">User: ' + imagen.user.username + ' </span><span class="likes">' + imagen.likes.count + ' </span></div></div>');
			        } else {
			        	$('#target').append('<div class="col-sm-3 col-lg-3 instaIma"><figure><img src="' + imagen.images.standard_resolution.url + '"></figure><div class="imgData"><span class="user">User: ' + imagen.user.username + ' </span><span class="likes">' + imagen.likes.count + ' </span></div></div>');
			        }
			        //console.log(imagen);
			        $('#target').append('</div>');
		      	}
			}

		} else {
			var error = data.meta.error_message;
      		$('#target').append("Ay!, Instagram dice que: " + error);
		}
	}
});