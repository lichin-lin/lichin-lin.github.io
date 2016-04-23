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

$('#changing-word').typeIt({
     strings: ["&nbsp;a Student From NCTU", "&nbsp;a Frontend-developer", "&nbsp;looking for Internship"],
     speed: 100,
     breakLines: false,
     loop:true,
     breakDelay:2500,
     startDelay:300,
     loopDelay:2500
});

$('.about-me').click(function(){
  Julie({
    title: "info!",
    text: "<h3> Thank for watching! </h3> <h4>still building this page.</h4>" + 
    "--" +
    "<h4>skilled for HTML/CSS Customization.<h4>" + 
    "<h4>Design UI by AI/Sketch.</h4>" + 
    "<h4>try my best to learn JS</h4>" +
    "<h4>know some backEnd tech: Rails,python,mySQL.<h4>" ,
    confirmText:"Got It",
    errorText:"",
    Pop:false,
  });
});
