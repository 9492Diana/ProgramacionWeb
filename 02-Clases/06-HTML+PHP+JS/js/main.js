jQuery(document).ready(function(){
	console.log("Ya cargó");

	function derecha(){
		jQuery("#laBola").animate({"margin-left":"90%"},3000,izquierda);
	}

	function izquierda() {
		jQuery("#laBola").animate({"margin-left":"0"},3000, derecha);
	}

	derecha();

	/*
	jQuery(".imgPost").dblclick(function(e){
		console.log("hice dobleclick sobre la imagen mothafucka en la imagen "+e.target.id);
	});
	jQuery(".imgPost").mouseover(function(e){
		console.log("Estoy sobre la imagen"+e.target.id);
	});*/

	jQuery(".favs").click(function(e){
		//console.log("Favorito a "+jQuery(this).parent().attr("id"));
		var elValueFav = 1;
		if(jQuery(e.target).hasClass("favorita")){ elValueFav = 0}

		jQuery.ajax({
			type:"POST",
			url:"includes/functions.php",
			data: { idPost : jQuery(this).parent().attr("id"), valueFav: elValueFav  },
			complete: function (response) {
				console.log(response.responseText);
				if(elValueFav==1) { 
					jQuery(e.target).addClass('favorita'); 
				} else { jQuery(e.target).removeClass('favorita') }
				
			},
			error: function (error) {
				console.log("Error: "+error);
			}
		});
	});

	
});