jQuery(document).ready(function (){
    product.init();
    project_slug.create('#name','#slug');
    $('.integer').number(true, 0, ',', '.');
    $('.price').number(true, 0, ',', '.');
});
var product = {
    init            : function (){
        this.build_form();
        this.validate();
        this.build_category();
        this.date_picker();
        this.related_products();
        this.images();
        this.limiter();
        this.image_delete();
    },
    build_form      : function (){
        $('.stepy-form').stepy({
            backLabel  : '<< Quay lại',
            nextLabel  : 'Tiếp tục>>',
            description: false,
            titleClick : true,
//            validate   : true,
            errorImage : true
        });
    },
    validate        : function (){
        jQuery.validator.addMethod("alpha_dash", function (value, element){
            return this.optional(element) || /^[a-z0-9\-_]+$/i.test(value);
        }, "Không được chứa ký tự đặc biệt.");
        $('.stepy-form').validate({
            errorPlacement: function (error, element){
                error.appendTo(element.closest("div.controls"));
            },
            highlight     : function (element){
                $(element).closest("div.control-group").addClass("error f_error");
                $('.step').each(function (index){
                    if($(this).find('.f_error').length > 0){
                        $('.stepy-header li:eq(' + index + ')').addClass('error-image');
                    }
                });
            },
            unhighlight   : function (element){
                $(element).closest("div.control-group").removeClass("error f_error");
                $('.step').each(function (index){
                    if($(this).find('.f_error').length < 1){
                        $('.stepy-header li:eq(' + index + ')').removeClass('error-image');
                    }
                });
            }, rules      : {
                name    : 'required',
                code    : {
                    required  : true,
                    alpha_dash: true,
                    remote    : {
                        url : checkCode,
                        type: "post",
                        data: { code: function (){ return $("#code").val(); } }
                    }
                },
                slug    : 'required',
                price   : 'required',
                quantity: 'required',
                'image[]'   : imagesRules
            }, messages   : {
                'name'    : { required: 'Bạn chưa nhập tên sản phẩm!' },
                'code'    : {
                    required  : 'Bạn chưa nhập mã sản phẩm!',
                    alpha_dash: 'Mã sản phẩm không được chứa ký tự đặc biệt!',
                    remote    : 'Mã sản phẩm đã tồn tại!'
                },
                'slug'    : { required: 'Bạn chưa nhập đường dẫn thân thiện!' },
                'price'   : { required: 'Bạn chưa nhập giá sản phẩm!' },
                'quantity': { required: 'Bạn chưa nhập số lượng sản phẩm!' },
                'image[]'     : {
                    required: 'Bạn chưa chọn hình ảnh!',
                    accept  : 'File bạn chọn không đúng định dạng!'
                }
            },
            invalidHandler: function (event, validator){
                var errors = validator.numberOfInvalids();
                if(errors){
                    $('.step').each(function (index){
                        if($(this).find('.error').length > 0){
                            $('.stepy-header li').removeClass('stepy-active');
                            $('.stepy-header li:eq(' + index + ')').addClass('stepy-active');
                            $('.step').css('display', 'none');
                            $(this).css('display', 'block');
                            return false;
                        }
                    });

                }
//            },
//            submitHandler : function (form){
                /*
                $(form).ajaxSubmit({
                    beforeSend    : function (){
                        $('#myModal').modal({
                            show    : true,
                            keyboard: false,
                            backdrop: 'static'
                        });
                        $('#progressbar').css({width: 0}).find('span').html('0%');
                        $('#progress_bar').addClass('blue');
                    },
                    uploadProgress: function (event, position, total, percentComplete){
                        if(percentComplete> 0 || percentComplete < 33){
                            $('#progress_bar').addClass('error').removeClass('warning success');
                        }else{
                            if(percentComplete < 75){
                                $('#progress_bar').addClass('warning').removeClass('error success');
                            }else{
                                $('#progress_bar').addClass('success').removeClass('success success');
                            }
                        }
                        $('#progressbar').width(percentComplete + '%').find('span').html(percentComplete + '%');
                    },
                    success       : function (data){
                        window.location.href = data.url;
                    },
                    complete      : function (){
                        $('#myModal').modal('hide');
                    },
                    error         : function (){
                        BootstrapDialog.show({
                            type   : BootstrapDialog.TYPE_DANGER,
                            title  : 'Lỗi',
                            message: 'Có lỗi trong quá trình xử lý dữ liệu!<br />Bạn vui lòng thử lại!',
                            closable: false,
                            buttons: [
                                {
                                    label   : 'Ok',
                                    cssClass: 'btn btn-warning',
                                    action  : function (dialogRef){
                                        location.reload();
                                        dialogRef.close();
                                    }
                                }
                            ]
                        });

                    }
                });
                */
//                return false;
            }
        });
    },
    build_category  : function (){
        $("#tree").dynatree({
            checkbox  : true,
            selectMode: 3,
            onSelect  : function (select, node){
                var data = $("#tree").dynatree("getSelectedNodes");
                var listKey = new Array();
                $('#category').val('');
                for(var i = 0; i < data.length; i++){
                    listKey.push(data[i].data.key);
                }
                $('#category').val(listKey.join());
            }
        });
    },
    date_picker     : function (){

    },
    related_products: function (){
        var total = $('#products tbody tr').length;
        $('#total').text(total + '/' + productTotal + ' sản phẩm');
        if(total < productTotal){
            $('#loadProduct').attr('style', '');
        }
        $('#loadProduct').click(function (){
            var dialog = new BootstrapDialog({
                title   : 'Đang lấy dữ liệu',
                message : '<p style="text-align: center"><img src="' + baseUrl + 'public/img/wait.gif"></p>',
                closable: false
            });
            var product = $('#products tbody tr').length;
            if(product < productTotal){
                var data = { skip: product };
                if($('#_id').length > 0){
                    data = { skip: product, _id: $('#_id').val() };
                }
                $.ajax({
                    type      : 'post',
                    data      : data,
                    url       : getProducts,
                    beforeSend: function (data){
                        console.log(data);
                        dialog.realize();
                        dialog.getModalHeader().hide();
                        dialog.getModalFooter().hide();
                        dialog.open();
                    },
                    success   : function (data){
                        console.log(data);
                        if(data.success == undefined){
                            var tmplRelated = $('#tmpl-related-products');

                            $.template("relatedTemplate", tmplRelated);
                            $.tmpl("relatedTemplate", data, {
                                status: function (data){
                                    if(data == 1){
                                        return 'Hiển thị';
                                    }
                                    return 'Ẩn';
                                },
                                price : function (price){
                                    return price.format(0, 3, '.')
                                },
                                checked: function(id){
                                    if( related_products !== null && $.isArray(related_products) && $.inArray(id, related_products) > -1){
                                        return 'checked="checked"';
                                    }else{
                                        return '';
                                    }
                                }
                            }).appendTo('#listRelated');
                            total = $('#products tbody tr').length;
                            $('#total').text(total + '/' + productTotal + ' sản phẩm');
                            if(total >= productTotal){
                                $('#loadProduct').attr('style', 'display:none');
                            }
                        }else{

                        }
                        dialog.close();
                    }
                });
            }else{
                return false;
            }
        })
    },
    images          : function (){
        $('#image').change(function (){
            var input = document.getElementById('image');
            var name = '';
            var tmplUpload = $('#tmpl-images-upload');
            $('#tmp_images_upload').html('');
            for(var i = 0; i < input.files.length; i++){
                name = input.files[i].name;
                var reader = new FileReader();
                reader.onload = function (e){
                    $.tmpl(tmplUpload, {name: name, image: e.target.result}).appendTo('#tmp_images_upload');
                }
                reader.readAsDataURL(input.files[i])
            }
        });
    },
    limiter         : function (){
        $("#meta_keyword").counter({ goal: 70 });
        $("#meta_description").counter({ goal: 130 });

    },
    image_delete: function(){
        $('.image-delete').click(function(){
            $(this).toggleClass('icon-trash  icon-remove-circle');
            var thumbnail =  $(this).closest('.thumbnail');
            thumbnail.toggleClass('image-delete');
            var checkBoxes = $(thumbnail).find('input[type="checkbox"]');
            if($(checkBoxes).is(":checked")){
                checkBoxes.removeAttr('checked');
            }else{
                checkBoxes.attr('checked', 'checked');
            }
        })
    }
}


Number.prototype.format = function (n, x, s, c){
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')', num = this.toFixed(Math.max(0, ~~n));
    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};


