
var docElem = window.document.documentElement;
var topPosition = $(window).width() - $( '.OldNews_title' ).width() -50;
var bottomPosition = 50;
function scrollY() { return window.pageYOffset || docElem.scrollTop; }

function offset() {
  //console.log($( window ).height());
  //console.log($('body').height());
  //console.log( $('.OldNews_title')[0] );
  var position = $( '.OldNews_title' ).offset();
  var offsetAmount = $( window ).width()/$( window ).height();
  console.log("scrollY:" +  scrollY() + ", body;" +  $('body').height() + ", document:" + $(document).height() + ", screen:" + $(window).height());
  // console.log("the broswer condition: " + $( window ).width() + "& height: " + $( window ).height() );
  // console.log("left:" + position.left);
  if( scrollY() < $( window ).height() ) {
    //console.log('init pos:' + position.left);
    position = topPosition - 2*scrollY()*offsetAmount;
    //console.log('after shift:' + position);
    $('.OldNews_title').css({
      "left": position
    });
  } else if ( (scrollY() + $(window).height() + 150) > ( $(document).height() ) ){
    console.log('final:' + position.left);
    var b = $(window).height()/5;
    $('.OldNews_title').css({
      "left": 0,//(scrollY() + $(window).height() + 150 - $(document).height)
      "bottom": 0,
    });
  }
  else {
    console.log('while:' + position.left);
    $('.OldNews_title').css({
      "left": -3*( $('body').width() )// - $('body').height() - 3* $( '.OldNews_title' ).width() )//- 2* $( '.OldNews_title' ).width())
    });
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
