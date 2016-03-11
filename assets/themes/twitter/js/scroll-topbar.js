$(window).scroll(function() {

  if ($(document).scrollTop() > 70) {
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

if ($(window).width() > 1200){
	$('.posts').removeClass('span14');
	//$('.posts').addClass('span16');
}else{
	$('.posts').removeClass('span14');
	//$('.posts').addClass('span14');	
}


$( ".about-tab" ).click(function() {
  var index = $(".about-tab").index(this);

  // ===== tab notification =====

  $(".flex-tabs").children().removeClass("tab-notce").css({
  	"color": "#999cab",
  	"border-bottom": "1px solid #e5e6ea"
  });

  $(".flex-tabs").children().eq(index).addClass("tab-notce").css({
  	"color": "#FC7358",
  	"border-bottom": "1px solid #fff"
  });

  // ===== panel display =====

  $(".panel-content").children().css("display","none");
  $(".panel-content").children().eq(index).css("display","block");

});
