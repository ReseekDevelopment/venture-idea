//Speakers show
$('.exit-img').on('click', function() {
	$('.wrapper-item-speaker.speaker-1').removeClass('show');
	$('.wrapper-item-speaker.speaker-2').removeClass('show');
	$('.wrapper-item-speaker.speaker-3').removeClass('show');
});


$('.img-absolute').on('click', function() {
	$('.wrapper-item-speaker.speaker-1').removeClass('show');
	$('.wrapper-item-speaker.speaker-2').removeClass('show');
	$('.wrapper-item-speaker.speaker-3').removeClass('show');
  
});


$('.dot-speaker-1').on('click', function() {

 if(!$('.wrapper-item-speaker.speaker-1').hasClass('show')){   

	if($('.wrapper-item-speaker.speaker-2').hasClass('show')){
	$('.wrapper-item-speaker.speaker-2').removeClass('show');
	}
 	if($('.wrapper-item-speaker.speaker-3').hasClass('show')){
	$('.wrapper-item-speaker.speaker-3').removeClass('show');
	}

	$('.wrapper-item-speaker.speaker-1').addClass('show');

} else {
	$('.wrapper-item-speaker.speaker-1').removeClass('show');
	$('.wrapper-item-speaker.speaker-2').removeClass('show');
	$('.wrapper-item-speaker.speaker-3').removeClass('show');
}

});


$('.dot-speaker-2').on('click', function() {

 if(!$('.wrapper-item-speaker.speaker-2').hasClass('show')){  

 	if($('.wrapper-item-speaker.speaker-1').hasClass('show')){
	$('.wrapper-item-speaker.speaker-1').removeClass('show');
	}
 	if($('.wrapper-item-speaker.speaker-3').hasClass('show')){
	$('.wrapper-item-speaker.speaker-3').removeClass('show');
	}

	$('.wrapper-item-speaker.speaker-2').addClass('show');

} else {
	$('.wrapper-item-speaker.speaker-1').removeClass('show');
	$('.wrapper-item-speaker.speaker-2').removeClass('show');
	$('.wrapper-item-speaker.speaker-3').removeClass('show');
}
   
});


$('.dot-speaker-3').on('click', function() {

 if(!$('.wrapper-item-speaker.speaker-3').hasClass('show')){  


 	if($('.wrapper-item-speaker.speaker-1').hasClass('show')){
	$('.wrapper-item-speaker.speaker-1').removeClass('show');
	}
 	if($('.wrapper-item-speaker.speaker-2').hasClass('show')){
	$('.wrapper-item-speaker.speaker-2').removeClass('show');
	}

	$('.wrapper-item-speaker.speaker-3').addClass('show');
} else {
	$('.wrapper-item-speaker.speaker-1').removeClass('show');
	$('.wrapper-item-speaker.speaker-2').removeClass('show');
	$('.wrapper-item-speaker.speaker-3').removeClass('show');
}
  
});