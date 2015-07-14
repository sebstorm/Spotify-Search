function onSubmit (event) {
  event.preventDefault();
  console.debug('SUBMITTED');
  // 	var newArtist = {
  // 	name: $('.name').val(),
  // }
  	newArtist = $('.name').val();
  


  	$.ajax({
  	type: 'get',
    url: 'https://api.spotify.com/v1/search?type=artist&query=' + newArtist,
    data: newArtist,
    success: onSaveSuccess,
    error: onSaveFailure,
    dataType: 'json',
  });


  function onSaveSuccess (star) {
    console.debug('We got It', star);
  
	star.artists.items.forEach(function(artist){
		if (artist.images[0] != undefined){
    		$('.artist_list').append('<li>' + artist.name +  "<img src='"+ artist.images[0].url + "'>"+'</li>');
    	}
    	// else{
    	// 	$('.artist_list').append('<li>' + artist.name + '</li>');
    	// }

  	});
}

  function onSaveFailure (err) {
    console.error(err.responseJSON);
  }
}


  $('.js_submit').on('click', onSubmit);