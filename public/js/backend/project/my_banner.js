jQuery(document).ready(function (){
    my_banner.init();
});
var banner = null;
var loading = null;
var image = null;
var title = null;
var link = null;
var type = null;
my_banner = {
    init    : function (){
        my_banner.setStyle();
        my_banner.edit();
        var dialog = new BootstrapDialog({
            title   : 'Vui lòng đợi',
            message : '<div style="min-height: 100px"><p style="text-align: center"><img src="' + baseUrl + 'public/img/wait.gif"></p><p style="text-align: center">Đang xử lý dữ liệu...</p></div>',
            closable: false
        });
        var options = {
            beforeSubmit   : function (arr, $form, options){
                dialog.realize();
                dialog.getModalHeader().hide();
                dialog.getModalFooter().hide();
                dialog.open();
            },
            beforeSerialize: function ($form, options){

            },
            success        : function (data){
                $('#dialog').modal('hide');
                console.log(data);
                dialog.close();
                var type_dialog = 'type-success'
                var title_dialog = '';
                if(data.update){
                    banner.data('type', data.new.type);
                    banner.data('title', data.new.title);
                    banner.data('url', data.new.link);
                    if(data.new.image != undefined){
                        banner.data('image', data.new.image);
                        $('#banner' + data.new.type).attr('src', baseUrl + data.new.image);
                    }
                }else{
                    type_dialog = 'type-danger'
                    title_dialog = data.errors;
                }
                var tmp = new BootstrapDialog({
                    title   : title_dialog,
                    type    : type_dialog,
                    message : data.messages,
                    closable: true
                });
                tmp.open();
                setTimeout(function (){
                    tmp.close();
                }, 3000)
            }
        };
        $(".modal-form").validate({
            onfocusout    : false,
            errorPlacement: function (error, element){
                error.appendTo(element.closest("div.span12"));
            },
            highlight     : function (element){
                $(element).closest("div.span12").addClass("error f_error");
                var thisStep = $(element).closest('form').prev('ul').find('.current-step');
                thisStep.addClass('error-image');
            },
            unhighlight   : function (element){
                $(element).closest("div.span12").removeClass("error f_error");
                if(!$(element).closest('form').find('div.error').length){
                    var thisStep = $(element).closest('form').prev('ul').find('.current-step');
                    thisStep.removeClass('error-image');
                }
                ;
            },
            rules         : {
                title: {required: true, maxlength: 255},
                link : {
                    required: true
//                    ,url: true
                },
                image: {
                    accept: 'png|gif|jpg|jpeg'
                }
            }, messages   : {
                title: {
                    required : 'Bạn chưa nhập tiêu đề!',
                    maxlength: 'Tiêu đề không được vượt quá {0} ký tự!'
                },
                link : {
                    required: 'Bạn chưa nhập đường dẫn!',
                    url     : 'Đường dẫn không phải là một URL!'
                },
                image: {
                    accept: 'Bạn phải chọn file ảnh'
                }
            },
            ignore        : ':hidden',
            submitHandler : function (form){
                $(form).ajaxSubmit(options);
            }
        });
    },
    setStyle: function (){
        var banner = $('#banner');
        var banner_special = $('.banner-special');
        if(banner.height() < 10){
            banner.css({'min-height': '200px'})
        }
        $('.banner').css({'min-height': '150px'})
        if(banner_special.height() < banner.height()){
            banner_special.css({'min-height': banner.height() + 'px'})
        }
    },
    edit    : function (){
        loading = $('image-old').attr('src');
        $('.banner-edit').click(function (){
            banner = $(this);
            image = banner.data('image');
            link = banner.data('url');
            title = banner.data('title');
            type = banner.data('type');
            $('#dialog').modal({
                backdrop: false
            });
        });
        $('.close-modal').click(function (){
            $('#dialog').modal('hide');
        });
        $('#dialog').on('hidden.bs.modal', function (){
            $('#image-old').attr('src', loading);
            $('#banner-title').val('');
            $('#banner-link').val('');
            $('#banner-type').val('');
            $('#banner-image').val('');
        });
        $('#dialog').on('show.bs.modal', function (){
            $('#image-old').attr('src', image);
            $('#banner-title').val(title);
            $('#banner-link').val(link);
            $('#banner-type').val(type);
        })
    }
}