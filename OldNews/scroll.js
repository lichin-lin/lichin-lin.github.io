
var docElem = window.document.documentElement;
var topPosition = $(window).width() - $( '.OldNews_title' ).width() -50;
var bottomPosition = 50;
function scrollY() { return window.pageYOffset || docElem.scrollTop; }

function offset() {

  var position = $( '.OldNews_title' ).offset();
  var offsetAmount = $( window ).width()/$( window ).height();

  if($(window).width() > 768){
    if( scrollY() < $( window ).height() ) {
      position = topPosition - 2*scrollY()*offsetAmount;
      $('.OldNews_title').css({
        "left": position
      });
    } else {
      $('.OldNews_title').css({
        "left": -3*( $('body').width() );
      });
    }
  }
  $('.OldNews_container').css({
    "-webkit-transform":"translate3d(0," + -scrollY() + "px,0)",
    "-ms-transform":"translate3d(0," + -scrollY() + "px,0)",
    "transform":"translate3d(0," + -scrollY() + "px,0)"
 });
}

document.addEventListener("scroll", function () {
    offset();
}, false);

$( ".FB_btn" ).on( "click", function() {
  FB.login(function(response) {
      if (response.authResponse) {
          //user just authorized your app
          console.log(response.authResponse.accessToken);
          testAPI();
      }
  }, {scope: 'public_profile,user_posts,user_photos,email', return_scopes: true});
});
