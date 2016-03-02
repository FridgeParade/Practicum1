var ids = new Array();
var titles = new Array();

$( document ).ready(function() {

  		$.getJSON("https://api.flickr.com/services/rest/?method=flickr.test.echo&name=value&method=flickr.photos.search&format=json&per_page=2&api_key=4b2feceb55fa079c60d2d0689f6f4fa0&tags=online,advertising",
		{
    		console.log('dicks');
		}
		$.each(data.items, function(i,item){

  		function(data) {
          $.each(data.items, function(i,item){
          $("<img/>").attr("src", item.media.m).prependTo("#images");
            if ( i == 10 ) return false;
          });
    	});

  	});
 