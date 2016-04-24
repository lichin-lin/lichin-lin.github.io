$(document).ready(function(){

    /*$(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            // call feed.next() once the page reaches the bottom
            //Feed.next();
            Feed2.next();
        }
    });*/

    $('.loading-btn').click(function(){
        Feed2.next();
    });
});

var Feed = new Instafeed({
        clientId: '97ae5f4c024c4a91804f959f43f2635f',
        target: 'instafeed',
        get: 'tagged',
        tagName: 'sexy_girls_bd',
        links: true,
        limit: 10,
        sortBy: 'most-liked',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
var Feed2 = new Instafeed({
        clientId: '97ae5f4c024c4a91804f959f43f2635f',
        target: 'instafeed2',
        get: 'user',
        userId: 2060750670,
        links: true,
        limit: 10,
        sortBy: 'most-liked',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
//Feed.run();
Feed2.run();
