/**
 * Created by Hoang on 03/03/2014.
 */
$(document).ready(function (){
    validation.ttip();
    project_slug.create('#category_name', '#category_slug');
    $('.newModal').click(function (){
        $('#newModal').modal({
            backdrop: false
        });
    });
});

validation = {
    ttip: function (){
        var ttip_validator = $('.form_validation').validate({
            onkeyup       : false,
            errorClass    : 'error',
            validClass    : 'valid',
            lang          : 'vi',
            highlight     : function (element){
                $(element).closest('div').addClass("f_error");
            },
            unhighlight   : function (element){
                $(element).closest('div').removeClass("f_error");
            },
            rules         : {
                name            : { required: true, maxlength: 100 },
                url_key         : { required: true, maxlength: 100 },
                meta_keyword    : { maxlength: 255 },
                meta_description: { maxlength: 255 }
            },
            messages      : {
                name            : {
                    required : "Mời bạn nhập tên danh mục.",
                    maxlength: jQuery.format("Tên danh mục không được vượt quá {0} kí tự.")
                },
                url_key         : {
                    required : "Mời bạn nhập Url key.",
                    maxlength: jQuery.format("Url key không được vượt quá {0} kí tự.")
                },
                meta_keyword    : {
                    maxlength: jQuery.format("Meta keywords không được vượt quá {0} kí tự.")
                },
                meta_description: {
                    maxlength: jQuery.format("Meta description không được vượt quá {0} kí tự.")
                }
            },
            invalidHandler: function (form, validator){
                $.sticky("Bạn vui lòng kiểm tra lại dữ liệu", {autoclose: 5000, position: "top-right", type: "st-error" });
            },
            errorPlacement: function (error, element){
                // Set positioning based on the elements position in the form
                var elem = $(element);
                // Check we have a valid error message
                if(!error.is(':empty')){
                    if((elem.is(':checkbox')) || (elem.is(':radio'))){
                        // Apply the tooltip only if it isn't valid
                        elem.filter(':not(.valid)').parent('label').parent('div').find('.error_placement').qtip({
                            overwrite: false,
                            content  : error,
                            position : {
                                my      : 'left bottom',
                                at      : 'center right',
                                viewport: $(window),
                                adjust  : {
                                    x: 6
                                }
                            },
                            show     : {
                                event: false,
                                ready: true
                            },
                            hide     : false,
                            style    : {
                                classes: 'ui-tooltip-red ui-tooltip-rounded' // Make it red... the classic error colour!
                            }
                        })// If we have a tooltip on this element already, just update its content
                            .qtip('option', 'content.text', error);
                    }else{
                        // Apply the tooltip only if it isn't valid
                        elem.filter(':not(.valid)').qtip({
                            overwrite: false,
                            content  : error,
                            position : {
                                my      : 'bottom left',
                                at      : 'top right',
                                viewport: $(window),
                                adjust  : { x: -8, y: 6 }
                            },
                            show     : {
                                event: false,
                                ready: true
                            },
                            hide     : false,
                            style    : {
                                classes: 'ui-tooltip-red ui-tooltip-rounded' // Make it red... the classic error colour!
                            }
                        })// If we have a tooltip on this element already, just update its content
                            .qtip('option', 'content.text', error);
                    }
                    ;
                }
                // If the error is empty, remove the qTip
                else{
                    if((elem.is(':checkbox')) || (elem.is(':radio'))){
                        elem.parent('label').parent('div').find('.error_placement').qtip('destroy');
                    }else{
                        elem.qtip('destroy');
                    }
                }
            },
            success       : $.noop // Odd workaround for errorPlacement not firing!
        });
    }
}

