(function($) {
	
	"use strict";
	
	// Cache Selectors
	var mainWindow		=$(window),
		popupAd			=$('#popup-ad');
	
	
	//Popup Ad
	$(window).on('load',function(){
		setTimeout(function(){
			$('#popup-ad').modal('show');
		}, 2500);
	});
			
})(jQuery);
