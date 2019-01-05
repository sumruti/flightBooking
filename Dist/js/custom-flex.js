  $(document).ready(function(){

	
	
	
	// Flex Slider

 		$('.flexslider').flexslider({
			animation: "slide",
			start: function(slider){
			  	$('body').removeClass('loading');
			},
			flexDirectionNav: false,
			controlNav: false,
		});


});