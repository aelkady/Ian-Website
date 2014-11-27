/*-----------------------------------------------------------------------------------*/
/*	WELCOME FADE IN*/

$(document).ready(function(){
'use strict';
	
	//keeps height of home div same as visitor's monitor height
	$('#home').css({'height':($(window).height())+'px'});
	$(window).resize(function(){
	$('#home').css({'height':($(window).height())+'px'});
	});

	// sticky navigation menu
	$("#nav").sticky({topSpacing:0});

	$("a[rel^='prettyPhoto']").prettyPhoto({social_tools:''});

});

/*-----------------------------------------------------------------------------------*/
/*	OVERLAY MENU
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($){
'use strict';

	$('#overlay-menu').click(function(event) {
		event.preventDefault();
			$('.navigation-wrapper').fadeIn();
			$('.navigation').fadeIn();
	});

	$('.navigation-wrapper ul li a').click(function(event) {
		event.preventDefault();
			$('.navigation-wrapper').fadeOut();
	});

	$('.navigation-wrapper a').click(function(event) {
		event.preventDefault();
			$('.navigation-wrapper').fadeOut();
	});
  
});

