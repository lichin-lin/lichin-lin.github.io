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
    /* get container position and size
     * -- access method : cPos.top and cPos.left */
    var cPos = $('.cubeContent ul ').offset();
    var cHeight = $('.cubeContent ul').height();
    var cWidth = $('.cubeContent ul').width();
    // get box padding (assume all padding have same value)
    var pad = parseInt($('.cubeContent ul').css('padding-top').replace('px', ''));

    console.log(cPos + ", " + cHeight + ", " + cWidth + ", " + pad) ;
    // get movable box size
    var bHeight = obj.height();
    var bWidth = obj.width();

    // set maximum position
    maxY = cPos.top + cHeight - bHeight - pad;
    maxX = cPos.left + cWidth - bWidth - pad;

    // set minimum position
    minY = cPos.top + pad;
    minX = cPos.left + pad;
    console.log(maxX + ", " + maxY + ", " + minX + ", " + minY) ;
    // set new position
    newY = randomFromTo(0, maxY - cHeight);
    newX = randomFromTo(0, maxX);

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
