$(document).ready(function (){
    my_setting.init();
});
my_setting = {
    init: function (){
        $('#setting').validate({
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
                name            : { required: true, maxlength: 255 },
                email           : { required: true, email: true},
                phone           : { required: true, maxlength: 255},
                text_logo        : {required: true, maxlength: 255},
                map_link        : {required: true, url: true},
                address         : { required: true, maxlength: 255 },
                meta_keyword    : { maxlength: 255 },
                meta_description: { maxlength: 255 },
                meta_title: { maxlength: 255 }
            },
            messages      : {
                name            : {
                    required : "Mời bạn nhập tên web site.",
                    maxlength: jQuery.format("Tên website không được vượt quá {0} kí tự.")
                },
                email         : {
                    required : "Mời bạn nhập email.",
                    email: jQuery.format("Email không hợp lệ.")
                },
                phone    : {
                    required : "Mời bạn nhập số điện thoại.",
                    maxlength: jQuery.format("Số điện thoại không được vượt quá {0} kí tự.")
                },
                address    : {
                    required : "Mời bạn nhập địa chỉ.",
                    maxlength: jQuery.format("Địa chỉ không được vượt quá {0} kí tự.")
                },
                map_link    : {
                    required : "Mời bạn nhập đường dẫn goole maps."
                },
                text_logo    : {
                    required : "Mời bạn nhập Text logo.",
                    maxlength: jQuery.format("Text logo không được vượt quá {0} kí tự.")
                },
                meta_keyword: {
                    maxlength: jQuery.format("Meta description không được vượt quá {0} kí tự.")
                },
                meta_title: {
                    maxlength: jQuery.format("Meta description không được vượt quá {0} kí tự.")
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
};
