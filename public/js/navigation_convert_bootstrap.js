///**
// * Created by Hoang on 24/03/2014.
// */
//
jQuery(document).ready(function (){
    var navigation = $('#navigation');
    navigation.removeClass('no-script');
    var ul_root = navigation.find('ul:first');
    ul_root.addClass('nav navbar-nav').removeClass('dropdown-menu');
//    var li_root = $('ul.nav li');
//    console.log(li_root.length)
//    li_root.each(function(){
//        var tmp_li = $(this);
//        console.log($(this).html())
//
//    })
    var tmp = ul_root.find('a');
    tmp.each(function (){
        if($(this).attr('href') == current_path){
            var li = $(this).parents('li');
            li.addClass('active');
        }
    });
})