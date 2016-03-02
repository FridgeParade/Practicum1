var index = 0;
var photos;

function makeFlickrRequest(callBack)
{
  	var url = "https://api.flickr.com/services/rest/?&method=flickr.photos.getRecent&per_page=50&api_key=4b2feceb55fa079c60d2d0689f6f4fa0&jsoncallback=?";

  	var tags = $("#searchtag").val();

  	$.getJSON(url, {format:"json", tags:tags}, callBack);
}

function processFlickrRequest(data, textstatus, jqxhr)
{
	photos = data.photos;
	updateImage();
}

function updateImage()
{
	var imageData = $(photos.photo).get(index);
	
	var url = "https://farm"+imageData.farm+".staticflickr.com/"+imageData.server+"/"+imageData.id+"_"+imageData.secret+"_m.jpg";

	$("#images").html($("<img/>").attr("src", url));
}

$( document ).ready(function()
{
  	makeFlickrRequest(processFlickrRequest);
  	$("#submitbutton").click(onSubmitButtonClick);
  	$("#nextbutton").click(onNextButtonClick);
  	$("#previousbutton").click(onPreviousButtonClick);
});

function onSubmitButtonClick()
{
	index = 0;
	makeFlickrRequest(processFlickrRequest);
}

function onNextButtonClick()
{
	index++;
	updateImage();
}

function onPreviousButtonClick()
{
	if (index > 0)
	{
		index--;
		updateImage();
	}
}