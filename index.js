$(document).ready(function() {
	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?&tagmode=any&format=json&jsoncallback=?";
	  
	$('#button').click(function(){
	    $.getJSON(flickerAPI, {
			tags: $('#input').val(),
		  }).done(function( data ) {
			  $.each( data.items, function(i, item) {
			  	$("<div>").attr("id", i).appendTo("#images");
			  	var div = "#"+i;
				$("<img>").attr("src", item.media.m).appendTo(div);
				$(div).before( "<h3>" + item.title + "</h3>" );
		          });
		});
	});
});    