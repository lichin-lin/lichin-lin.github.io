$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.menu').addClass("active");
  } else {
    $('.menu').removeClass("active");
  }
});

function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function randomFromToFloat(from, to){
    return (Math.random() * (to - from + 1) + from);
}

function moveRandom(obj) {
    var cHeight = $('.cubeContent ul').height();
    var cWidth = $('.cubeContent ul').width();
    // set new position
    newY = randomFromTo(0, cHeight);
    newX = randomFromTo(0, cWidth);

    obj.animate({
        top: newY,
        left: newX
        }, 500
    );
    scaleSize = randomFromToFloat(1, 5);
    obj.css({
        '-webkit-transform' : 'scale(' + scaleSize + ')',
        '-moz-transform'    : 'scale(' + scaleSize + ')',
        '-ms-transform'     : 'scale(' + scaleSize + ')',
        '-o-transform'      : 'scale(' + scaleSize + ')',
        'transform'         : 'scale(' + scaleSize + ')',
        'transform'         : 'rotate('+ (scaleSize) * 30 +'deg)',
    });
}

$('.cube').each(function(){ // <= iterates on all blocks
   moveRandom($(this)); // <= pass the block to the moveRandom function
});
