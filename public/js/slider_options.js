var $sl = jQuery.noConflict();
$sl(document).ready(function() {

    $sl("#owl-demo").owlCarousel({

        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });




    $sl('#multizoom1').addimagezoom({ // multi-zoom: options same as for previous Featured Image Zoomer's addimagezoom unless noted as '- new'
        descArea: 'none', // description selector (optional - but required if descriptions are used) - new
        speed: 1500, // duration of fade in for new zoomable images (in milliseconds, optional) - new
        descpos: true, // if set to true - description position follows image position at a set distance, defaults to false (optional) - new
        imagevertcenter: true, // zoomable image centers vertically in its container (optional) - new
        magvertcenter: true, // magnified area centers vertically in relation to the zoomable image (optional) - new
        zoomrange: [3, 10],
        magnifiersize: [400,400],
        width:400,
        height:400,
        top:0,
        magnifierpos: 'right',
        cursorshadecolor: '#fdffd5',
        cursorshade: true //<-- No comma after last option!
    });

    $sl("#relatePr").owlCarousel({
        items : 4,
        lazyLoad : true,
        navigation : true
      });
    
});