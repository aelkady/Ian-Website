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

	$().prettyPhoto({social_tools: false, modal: true, allow_resize: true});

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

function showVideo(response) {
	if(response.data && response.data.items) {
	    var items = response.data.items;
        if(items.length>0) {
            var item = items[0];
            var videoid = "http://www.youtube.com/embed/"+item.id;
            console.log("Latest ID: '"+videoid+"'");
            var video = "<iframe id='player' src='"+videoid+"' frameborder='0' allowfullscreen webkitAllowFullScreen mozallowfullscreen></iframe>"; 
            $('#static_video').html(video);
        }
    }
}

function showVideoAll(response) {
    if(response.data && response.data.items) {
        var items = response.data.items;
        var video = "";
        for(var i = 1; i<items.length; i++) {
            console.log(video);
            var item = items[i];
            var videoid = "http://www.youtube.com/watch?v="+item.id+"?width=960&height=540";
            console.log("Latest ID: '"+videoid+"'");
            var thumbnailURL = "http://img.youtube.com/vi/"+item.id+"/hqdefault.jpg";
            if(i%2) {
              video += "<div style='display: inline-block; padding:0% 3%'><a href='"+videoid+"' rel='prettyPhoto'><img src='"+thumbnailURL+"' /></a><h3><a href='"+videoid+"' rel='prettyPhoto'>"+item.title+"</a></h3></div>"; 
            }
            else {
              video += "<div style='display: inline-block; padding:0% 3%'><a href='"+videoid+"' rel='prettyPhoto'><img src='"+thumbnailURL+"' /></a><h3><a href='"+videoid+"' rel='prettyPhoto'>"+item.title+"</a></h3></div>"; 
            }
            console.log(video);           
        }
        $('#video').html(video);
    }
}
