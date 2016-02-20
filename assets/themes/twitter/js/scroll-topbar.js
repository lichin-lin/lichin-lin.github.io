$(window).scroll(function() {

  if ($(document).scrollTop() > 80) {
    $('.fill').addClass('shrink');
	$('.nav').css('display', 'none');
    if ($(window).width() > 768) {
		$('.brand span').css('display', 'none');
	}else{
		$('.brand span').css('display', 'none');
	}

  } else {
    $('.fill').removeClass('shrink');

    if ($(window).width() > 768) {
	    $('.brand span').css('display', 'inline-block');
	    $('.nav').css('display', 'block');	
	}else{
	    $('.brand span').css('display', 'inline-block');
	}

  }

});