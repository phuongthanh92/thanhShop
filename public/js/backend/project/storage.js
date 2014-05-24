/**
 * Created by Hoang on 06/03/2014.
 */
$(document).ready(function (){
    storage.init();

});
var storage = {

    init: function (){
        if($.localStorage.isSet('optionColors')){
            var color_selected = $.localStorage.get('optionColors');
            $('#link_theme').attr('href', baseUrl + 'public/css/backend/' + color_selected + '.css');
            $('.style_switcher .jQclr').removeClass('style_active');
            $('.style_switcher .jQclr[title="' + color_selected + '"]').addClass('style_active');
        }
        if($.localStorage.isSet('optionBackgrounds')){
            if($('.style_switcher .jQptrn').hasClass('jQptrn')){
                var style_selected = $.localStorage.get('optionBackgrounds');
                $('.style_switcher .jQptrn').removeClass('style_active');
                $('.style_switcher .jQptrn[title="' + style_selected + '"]').addClass('style_active');
                $('body').removeClass('ptrn_a ptrn_b ptrn_c ptrn_d ptrn_e').addClass(style_selected);
            }
            ;
        }
        if($.localStorage.isSet('optionLayout')){
            var layout_selected = $.localStorage.get('optionLayout');
            $('body').removeClass('gebo-fixed').addClass(layout_selected);
            if(layout_selected == 'gebo-fixed'){
                $('#ssw_layout_fixed').attr('checked', true);
            }
        }
        if($.localStorage.isSet('optionSidebar')){
            var sidebar_position = $.localStorage.get('optionSidebar');
            $('body').removeClass('sidebar_right').addClass(sidebar_position);
            if(sidebar_position == 'sidebar_right'){
                $('#ssw_sidebar_right').attr('checked', true);
            }
            $(window).resize();
        }
        if($.localStorage.isSet('optionMenuShow')){
            var menu_show = $.localStorage.get('optionMenuShow');
            $('body').removeClass('menu_hover').addClass(menu_show);
            if(menu_show != 'menu_hover'){
                $('#ssw_menu_click').attr('checked', true);
            }
        }
    }
}