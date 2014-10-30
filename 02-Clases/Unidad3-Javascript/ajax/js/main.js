$(document).ready(function(){
	$("#btnLogin").click( function(e) {
		e.preventDefault();
		var user = $("#username").val();
		var pass = $("#password").val();

		console.log(user+" "+pass);
		$.ajax({
			type: "POST",
			url: "api/login.php",
			data: { username: user, password: pass }
		}).done(function(){
			console.log("Solicitud enviada al API");
		}).success(function(result){
			console.log("Resultado: "+result);
		}).error(function(error){
			console.log("Error: "+error);
		})
	})

});