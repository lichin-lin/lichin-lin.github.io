$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.menu').addClass("active");
  } else {
    $('.menu').removeClass("active");
  }
});
