var temp = $(window).height();

$(window).scroll(function() {

  if ($(document).scrollTop() > temp-150) {

    $('.fill').addClass('shrink');
    $('.topbar').css("display","block");

  } else {

    $('.fill').removeClass('shrink');
    $('.topbar').css("display","none");

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
