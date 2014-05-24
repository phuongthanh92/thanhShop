/**
 * Created by Hoang on 20/03/2014.
 */
jQuery(document).ready(function (){
    my_sticker.init();
})
my_sticker = {
    init: function (){
        var sticker = $("#sticker");
        if(sticker.val() != undefined){
            var btn = sticker.find('.btn-group');
            var pos = sticker.position();
            var stickermax = $(document).outerHeight() - $("#footer").outerHeight() - sticker.outerHeight() - 40; //40 value is the total of the top and bottom margin
            $(window).scroll(function (){
                var windowpos = $(window).scrollTop();
                if(windowpos >= pos.top && windowpos < stickermax){
                    var top = $('#nav-bar-top').height();
                    sticker.attr("style", "").css({width: '100%', 'min-height': '40px ', position: 'fixed', top: top + 'px', 'background-color': '#E0E0E0', opacity: '0.9', 'padding': '0px 7px', 'box-shadow': '#CCCCCC 0px 2px 2px 2px', 'z-index': 99999999999}); //kill absolute positioning - //stick it
                    btn.attr("style", "").css({position: 'fixed', top: top + 'px', right: '30px', padding: '2px 0', 'z-index': 99999999999}); //kill absolute positioning - //stick it
                }else
                    if(windowpos >= stickermax){
                        sticker.attr("style", "").css({position: "absolute", top: stickermax + "px"}); //set sticker right above the footer
                        btn.attr("style", "").css({position: "absolute", top: stickermax + "px", right: '30px'}); //set sticker right above the footer
                    }else{
                        sticker.attr('style', ''); //top of page
                        btn.attr('style', ''); //top of page
                    }
            });
        }
    }
}
