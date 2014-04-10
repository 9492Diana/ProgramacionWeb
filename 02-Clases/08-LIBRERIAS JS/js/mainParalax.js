jQuery(document).ready(function(){
	console.log("Ya cargó");
	$(".parallaxbg").each(function(){
		var $obj = $(this);

		$(window).scroll(function() {
	        var yPos = -( $(window).scrollTop() / $obj.data('speed') );
	 		var bgpos = '50% '+ yPos + 'px';
	 		if ( $obj.data("sec") ) {
	 			var ypos2 = -( $(window).scrollTop() / $obj.data('sec') );
	 			bgpos = '50% '+ ypos2 + 'px, ' +bgpos ;
	 		}	        
	 
	        $obj.css('background-position', bgpos );
	  		console.log("Scroll: "+bgpos)
	    });

	})
});