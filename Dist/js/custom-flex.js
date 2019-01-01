(function($) {
	
	"use strict";
	
	// Cache Selectors
	var mainWindow		=$(window),
		myBody			=$('body'),
		mainSlider		=$('.flexslider');
	
	
	// Flex Slider
	mainWindow.on('load', function(){
		$('.flexslider').flexslider({
			animation: "slide",
			start: function(slider){
			  	$('body').removeClass('loading');
			},
			flexDirectionNav: false,
			controlNav: false,
		});
	});

})(jQuery);