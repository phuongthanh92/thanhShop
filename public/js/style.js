$(document).ready(function() {
    /* back-to-top Button */
    if($(this).scrollTop() <= 100){
        $('.back-top').stop().animate({
            top:'-100px'
        }, 0);
    }
    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $('.back-top').stop().animate({
                top: $(window).height()-100+'px'
            }, 500);
        }
        else{
            $('.back-top').stop().animate({
                top: '-100px'
            }, 500);
        }
    });
    $('.back-top').click(function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500, function() {
            $('.back-top').stop().animate({
                top: '-100px'
            }, 500);
        });
    });




});