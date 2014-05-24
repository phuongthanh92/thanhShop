/**
 * Created by Hoang on 17/03/2014.
 */
var storage = null;
var wish_product = null;
var imgZoom = 400;
jQuery(document).ready(function (){
    storage = $.localStorage;
    my_project.init();
    viewed_products.list();
    sidebar.init();

    login.init();
    newsletter.init();
    favorite.init();
    zoom.init();
    if(desktop){
        quick_view.init();
    }
    register.init();
    slide.init();
    posts.init();
    input_quantity.init();
    pagination.init();
    filter.init();
    jQuery.validator.addMethod("alpha_dash", function(value, element) {
        return this.optional(element) || /^[a-z0-9_]+$/i.test(value);
        }, "Không được chứa các ký tự đặc biệt");
    $( window ).resize(function() {
        img_zoom();
    });
    img_zoom();
});

function img_zoom(){
    if($('#imgZoom').width() != null){
        if(imgZoom < 400){
            imgZoom = $('#imgZoom').width();
        }
    }
    zoom.init();
}

zoom = {
    init: function(){
        $('.multizoom1').find('a').mouseover(function(){$(this).click()});
        $('#multizoom1').addimagezoom({
            descArea: 'none',
            speed: 1000,
            descpos: true,
            imagevertcenter: true,
            zoomrange: [2, 10],
            magnifiersize: [400,400],
            width:imgZoom,
            height:imgZoom,
            disablewheel: true,
            magnifierpos: 'right',
            cursorshadecolor: '#fdffd5',
            cursorshade: true //<-- No comma after last option!
        });
    }
}

slide = {
    init: function(){
        this.home();
        this.relatedProducts();
    },
    home: function(){
        $("#slide-home").owlCarousel({
            autoPlay       : true,
            navigation     : true,
            responsive: true,
            stopOnHover: true,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem     : true,
            transitionStyle: "fade"
        });
    },
    relatedProducts: function(){
    $("#relatePr").owlCarousel({
        items : 4,
        lazyLoad : true
    });
    }
}
input_quantity = {
    init: function(){
        $('button.add').click(function(){
            var btn =$('input.quantity');
            var qty = parseInt(btn.val()) + 1;
            btn.val(qty);
        });
        $('button.sub').click(function(){
            var btn =$('input.quantity');
            var qty = parseInt(btn.val()) - 1;
            if(qty > 0){
                btn.val(qty);
            }
        });
    }
}
login = {
    init       : function (){
        $('.login-link').click(function (){
            if($('#notLogged').html() === undefined){ return true; }
            login.show_form();
            return false;
        });
        this.submit_form();
    },
    show_form  : function (){
        $('#frmLogin').modal({show: true, keyboard: true});
        setTimeout(function (){$('#username').focus();}, 600);
    },
    submit_form: function (){
        $('#formLogin').on('shown.bs.popover',function (){ $('.popover-content').css({ color: 'red' })})
            .validate({
                onkeyup      : false,
                errorClass   : 'text-danger',
                validClass   : 'text-success',
                highlight    : function (element){
                    $(element).closest('div').addClass('has-error');
                },
                unhighlight  : function (element){
                    $(element).closest('div').removeClass('has-error');
                },
                rules        : {
                    username: { required : true, minlength: 3, maxlength: 30 },
                    password: {required : true, minlength: 6 }
                }, messages  : {
                    username: {
                        required : 'Bạn chưa nhập tài khoản!',
                        minlength: 'Tài khoản phải lớn hơn {0} ký tự!',
                        maxlength: 'Tài khoản không được vượt quá {0} ký tự!'
                    },
                    password: {
                        required : 'Bạn chưa nhập mật khẩu!',
                        minlength: 'Mật khẩu phải lớn hơn {0} ký tự!'
                    }
                },
                submitHandler: function (form){
                    var btn = $('#submitLogin');
                    $.ajax({
                        type      : 'post',
                        url       : $(form).attr('action'),
                        data      : $(form).serialize(),
                        beforeSend: function (){ btn.button('loading'); },
                        success   : function (data){
                            btn.button('reset')
                            if(data.login){
                                $('.login-link').html('Xin chào: ' + data.user.username).attr({href: 'thong-tin-ca-nhan', title: data.user.full_name}).removeClass('.login-link');
                                $('.register-link').html('Thoát').attr({'href': 'logout', 'title': 'Logout'});
                                if(data.cart != null){
                                    $('#cart-total').html(data.cart)
                                }
                                if(data.favorite != null){
                                    $('#wishList-total').html(data.favorite);
                                }
                                $('#frmLogin').modal('hide');
                                $.sticky("Đăng nhập thành công", {autoclose: 3000, position: "top-right", type: "st-success" });
                                setTimeout(function (){$('#notLogged').remove();}, 500);
                            }else{
                                BootstrapDialog.show({
                                    title  : 'Lỗi',
                                    message: data.messages,
                                    type   : BootstrapDialog.TYPE_DANGER,
                                    onshow : function (dialogRef){
                                        setTimeout(function (){
                                            dialogRef.close()
                                            login.show_form();
                                        }, 3000)
                                    },
                                    buttons: [
                                        {
                                            label   : 'Đăng nhập lại',
                                            cssClass: 'btn-warning',
                                            action  : function (dialog){
                                                dialog.close();
                                                login.show_form();
                                            }
                                        }
                                    ]
                                });
                            }
                        }
                    });
                    return false;
                },
                showErrors   : function (errorMap, errorList){
                    $.each(this.successList, function (index, value){
                        return $(value).popover("hide");
                    });
                    return $.each(errorList, function (index, value){
                        var tmp_popover;
                        tmp_popover = $(value.element).popover({
                            trigger  : "manual",
                            placement: "top",
                            content  : value.message,
                            template : "<div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\"><p></p></div></div></div>"
                        });
                        // Bootstrap 3:
                        tmp_popover.data("bs.popover").options.content = value.message;
                        // Bootstrap 2.x:
//                    _popover.data("popover").options.content = value.message;
                        return $(value.element).popover("show");
                    });
                }
            });
    }
}
register = {
    init: function(){
        this.submit_form('#formRegister');
        this.submit_form('#frmCheckoutRegister');
        $('.register-link').click(function(){
            if($('#notLogged').html() === undefined){ return true; }
            register.show_form();
            return false;
        });
    },
    show_form: function(){
        $('#frmRegister').modal({show: true, keyboard: true});
        setTimeout(function (){$('#reg_username').focus();}, 600);
    },
    submit_form: function(form){
        $(form).on('shown.bs.popover',function (){$('.popover-content').css({ color: 'red' })})
            .validate({
                onkeyup      : false,
                errorClass   : 'text-danger',
                validClass   : 'text-success',
                highlight    : function (element){
                    $(element).closest('div').addClass('has-error');
                },
                unhighlight  : function (element){
                    $(element).closest('div').removeClass('has-error');
                },
                rules        : {
                    username: { required : true, minlength: 3, maxlength: 30, alpha_dash: true,
                        remote: {
                            url: setUrl('users/check-username'),
                            type: 'post',
                            data: {username: function(){return $(form +' #reg_username').val()}}
                        }
                    },
                    password: { required : true, minlength: 6 },
                    confirm: {required: true, equalTo:'#reg_password'},
                    email: {required: true, email: true,
                        remote: {
                            url: setUrl('users/check-email'),
                            type: 'post',
                            data: {email: function(){return $(form +' #reg_email').val()}}
                        }
                    },
                    full_name:{required:true, minlength:2, maxlength: 50}
                }, messages  : {
                    username: {
                        required : 'Bạn chưa nhập tài khoản!',
                        minlength: 'Tài khoản phải lớn hơn {0} ký tự!',
                        maxlength: 'Tài khoản không được vượt quá {0} ký tự!',
                        alpha_dash: 'Tên tài khoản không được chứa các ký tự đặc biệt',
                        remote: 'Tài khoản đã được đăng ký!'
                    },
                    password: {
                        required : 'Bạn chưa nhập mật khẩu!',
                        minlength: 'Mật khẩu phải lớn hơn {0} ký tự!'
                    },
                    confirm:{
                        required: 'Bạn chưa nhập xác nhận mật khẩu!',
                        equalTo: 'Bạn nhập hai ô mật khẩu không giống nhau!'
                    },
                    email:{
                        required: 'Bạn chưa nhập email!',
                        email: 'Email bạn nhập  không hợp lệ!',
                        remote: 'Email đã được sử dụng!'
                    },
                    full_name: {
                        required : 'Bạn chưa nhập họ tên!',
                        minlength: 'Họ tên phải lớn hơn {0} ký tự!',
                        maxlength: 'Họ tên không được vượt quá {0} ký tự!'
                    }
                },
                submitHandler: function (form){
                    var btn = $('#submitLogin');
                    $.ajax({
                        type      : 'post',
                        url       : $(form).attr('action'),
                        data      : $(form).serialize(),
                        beforeSend: function (){
                            btn.button('loading')
                        },
                        success   : function (data){
                            btn.button('reset')
                            console.log(data);
                            if(data.register){
                                location.href = data.url;
                            }else{
                                BootstrapDialog.show({
                                    title  : 'Lỗi',
                                    message: data.messages,
                                    type   : BootstrapDialog.TYPE_DANGER,
                                    onshow : function (dialogRef){
                                        setTimeout(function (){
                                            dialogRef.close()
                                            register.show_form();
                                        }, 3000)
                                    },
                                    buttons: [
                                        {
                                            label   : 'OK',
                                            cssClass: 'btn-warning',
                                            action  : function (dialog){
                                                dialog.close();
                                                register.show_form();
                                            }
                                        }
                                    ]
                                });
                            }
                        }
                    }).error(function (data){console.log(data)});
                    return false;
                },
                showErrors   : function (errorMap, errorList){
                    $.each(this.successList, function (index, value){
                        return $(value).popover("hide");
                    });
                    return $.each(errorList, function (index, value){
                        var tmp_popover;
                        tmp_popover = $(value.element).popover({
                            trigger  : "manual",
                            placement: "top",
                            content  : value.message,
                            template : "<div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\"><p></p></div></div></div>"
                        });
                        // Bootstrap 3:
                        tmp_popover.data("bs.popover").options.content = value.message;
                        // Bootstrap 2.x:
//                    _popover.data("popover").options.content = value.message;
                        return $(value.element).popover("show");
                    });
                }
            });
    }
}
newsletter = {
    init: function (){
        $('#newsletter-validate').on('shown.bs.popover',function (){
            $('.popover-content').css({
                color: 'red'
            })
        }).validate({
                onkeyup      : false,
                errorClass   : 'text-danger',
                validClass   : 'text-success',
                highlight    : function (element){
                    $(element).addClass("text-danger");
                },
                unhighlight  : function (element){
                    $(element).removeClass("text-danger");
                },
                rules        : {
                    newsletter: {
                        required: true,
                        email   : true
                    }
                }, messages  : {
                    newsletter: {
                        required: 'Bạn chưa nhập email!',
                        email   : 'Email của bạn không hợp lệ!'
                    }
                },
                showErrors   : function (errorMap, errorList){
                    $.each(this.successList, function (index, value){
                        return $(value).popover("hide");
                    });
                    return $.each(errorList, function (index, value){
                        var tmp_popover;
                        tmp_popover = $(value.element).popover({
                            trigger  : "manual",
                            placement: "top",
                            content  : value.message,
                            template : "<div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\"><p></p></div></div></div>"
                        });
                        tmp_popover.data("bs.popover").options.content = value.message;
                        return $(value.element).popover("show");
                    });
                },
                submitHandler: function (form){
                    var btn = $('#newsletter-submit');
                    $.ajax({
                        type      : 'post',
                        url       : $(form).attr('action'),
                        data      : {email: $('#newsletter').val()},
                        beforeSend: function (){
                            btn.button('loading')
                        },
                        success   : function (data){
                            if(data.success){
                                btn.button('success');
                                $.sticky('Bạn đã đang ký nhân tin mới của chúng tôi thành công!', {autoclose: 3000, position: "top-right", type: "st-success" });
                            }else{
                                btn.button('error')
                                $.sticky(data.messages, {autoclose: 3000, position: "top-right", type: "st-error" });
                            }
                        }
                    });
                    return false;
                }
            });
    }
}
my_project = {
    init  : function (){
        my_project.search();
    },
    search: function (){
        $('#submitSearch').click(function (){
            var kw = $('#frmSearch input[name="keyword"]');
            if(!$.trim(kw.val()).length){
                kw.focus();
                return false;
            }
        });
    }
}

viewed_products = {
    init : function (){
        this.list();
    },
    push : function (){
        if(typeof product_id !== "undefined"){
            var products = storage.get('viewed_product');
            if(products != null){
                var count = products.length;
                var tmp = new Array();
                for(var i = 0; i < count && i < 31; i++){
                    if(products[i] !== null && products[i] !== product_id){
                        tmp.push(products[i]);
                    }
                }
                products = tmp;
                products.unshift(product_id);
            }else{
                products = [product_id];
            }
            storage.set('viewed_product', products)
        }
    },
    slide: function(){
        $("#list-viewed").jCarouselLite({
            auto: 800
        });
    },
    list : function (){
        if(storage.isSet('viewed_product') && $('#list-viewed').length > 0){
            var products = storage.get('viewed_product');
            if($.inArray(products)){
                var count = products.length;
                for(var i = 0; i < count && i < 7; i++){
                    if(products[i] !== null){
                        $.ajax({
                            type   : 'post',
                            url    : setUrl('product/' + products[i]),
                            success: function (result){
                                if(result.getData === undefined){
                                    var viewed = $('.tmpl-viewed').clone();
                                    viewed.find('a').attr({href: setUrl('viewed/'+result.slug+'-'+result._id), title: result.name})
                                    viewed.find('img').attr({src: setUrl(result.image), 'data-src': setUrl(result.image)})
//                                    viewed.show();
                                    $('#list-viewed').append(viewed).find('.tmpl-viewed').show().removeClass('tmpl-viewed');
//                                    $.tmpl($("#tmpl-viewed"), result).appendTo('#list-viewed');
                                    viewed_products.slide();
                                }else{
                                    delete products[i];
                                }
                            }
                        });
                    }
                }
                storage.set('viewed_product', products)
            }else{
                storage.remove('viewed_product');
            }
        }
    }
}
quick_view = {
    init: function (){
        var products = $('.product');
        $('body').on('mouseover', '.product', function(){
            $(this).find('.quick-view').finish().fadeIn(200);
        });
        $('body').on('mouseout', '.product', function(){
            $(this).find('.quick-view').finish().fadeOut(700);
        });
        var quick_load = $('#quick-view-content').html();
        $("#tallModal").on("show.bs.modal", function (){
            var height = $(window).height() - 100;
            var width = $(window).width() - 200;
            $(this).find('.modal-dialog').css({'width': width})
            var content = $(this).find(".modal-body");
            content.css("min-height", height);
        });
        $('#tallModal').on('hidden.bs.modal', function (){
            $('#quick-view-content').html(quick_load)
            $('.magnifyarea, .zoomstatus, .featuredimagezoomerhidden, .zoomtracker, .cursorshade').css('display','none').remove();
        });
        this.view();
    },
    view: function (){
        var tmpl_quick_view = $('#tmpl-quick-view');
        $('body').on('click', '.quick-view',function (){
            $("#tallModal").modal({show: true, keyboard: true});
            var product = $(this).data('id');
            $.get(urlQuickView+product).done(function (data){
                $('#quick-view-content').html(data.html);
                img_zoom();
                input_quantity.init();
                setTimeout(function(){$('.multizoom1').find('a:eq(0)').click();},1500)
            });
            $('body').on('click', '.multizoom1 img', function(){
                $('#multizoom1').attr('src', $(this).attr('src'));
                img_zoom();
            });
        })
    }

}
sidebar = {
    init         : function (){
        this.load_quantity();
        this.submit();
    },
    load_quantity: function (){
        var categories = $('#category-bar li');
        if(categories.length > 0){
            categories.each(function (){
                var category = $(this).find('a');
                $.post(setUrl('category/' + category.data('slug'))).done(function (data){
                    if(data.quantity !== undefined){
                        if(data.quantity > 0){
                            category.find('.quantity').html('(' + data.quantity + ')');
                        }else{
                            category.find('.quantity').html('(0)');
                        }
                    }
                })
            });
        }
    },
    submit       : function (){
        $('#frm-filters').on('keyup','.h_price', function(e){
            $(this).val($(this).val().replace(/[^\d].+/, ""));
            var id = $(this).attr('id');
            var price = $(this).val();
            console.log(event.keyCode);
            $('#'+id+'Help').html(price)
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                $('#'+id+'Help').html(price)
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                $('#'+id+'Help').html(price)
                e.preventDefault();
            }
        })
        $('#frm-filters .h_filter').change(function (){
            $('#frm-filters').submit()
        });
        $('#frm-filters').submit(function (){
            var priceFrom = parseInt($('#priceFrom').val());
            if(priceFrom ==0 || $('#priceFrom').val() == ''){
                $('#priceFrom').val('').removeAttr('name');$('#priceFromHelp').html('');
            }else{
                $('#priceFrom').val(priceFrom).attr('name','priceFrom');$('#priceFromHelp').html(priceFrom);
            }
            var priceTo = parseInt($('#priceTo').val());
            if(priceTo == 0 || $('#priceTo').val()==''){
                $('#priceTo').val('').removeAttr('name');$('#priceToHelp').html('');
            }else{
                $('#priceTo').val(priceTo).attr('name','priceTo');$('#priceToHelp').html(priceTo);
            }

            var fSize = new Array();var fColor = new Array();
            $('#frm-filters .h_size:checked').each(function(){
                fSize.push($(this).val());
            });
            $('#frm-filters .h_color:checked').each(function(){
                fColor.push($(this).val());
            });
            if(fSize.length>0){$('#filterSize').attr('name','size').val(fSize.join('-'));}else{$('#filterSize').removeAttr('name')}
            if(fColor.length>0){$('#filterColor').attr('name','color').val(fColor.join('-'));}else{$('#filterColor').removeAttr('name')}
            var url = $(this).attr('action') +'?'+ $(this).serialize();
            window.history.pushState({path:url},'',url);
            $.ajax({
                url: url,
                data: $('#frm-filters').serialize(),
                beforeSend:function(){
                    $('#ajaxProcess').show().animate({width: '50%'}, 300);
                },
                success:function(data){
                    $('#ajaxProcess').show().stop().animate({width: '100%'},500, function(){$(this).hide().css('width',0)});
                    if(data.html != undefined){
                        $('#listProduct').html(data.html)
                        $('html, body').stop().animate({
//                            scrollTop: 150
                            scrollTop: $("#listProduct").offset().top
                        });
                    }
                }
            })
            return false;

        });
    }
}
favorite = {
    init        : function (){
        $('body').on('click', 'a.like', function (){
            var like = $(this);
            $(like).button('send');
            wish_product = $(like).data('id');
            if($('#notLogged').html() === undefined){
                favorite.add_favorite(wish_product, like);
            }else{
                $(like).button('reset');
                favorite.show_login();
            }
            return false;
        });
        $('.favorite-link').click(function (){
            if($('#formLogin').html() === undefined){
                return true;
            }else{
                favorite.show_login();
                return false;
            }
        });
        this.delete();
    },
    show_login  : function (){
        var warming = new BootstrapDialog({
            type   : BootstrapDialog.TYPE_WARNING,
            title  : 'Cảnh báo',
            message: 'Chức năng này cần phải đăng nhập!',
            onshow : function (dialogRef){
                setTimeout(function (){
                    dialogRef.close()
                    login.show_form();
                }, 2000)
            },
            buttons: [
                {
                    label   : 'Ok',
                    cssClass: 'btn btn-info',
                    action  : function (dialogRef){
                        dialogRef.close();
                        login.show_form();
                    }
                }
            ]
        });
        warming.open();
    },
    add_favorite: function (wish_product, object){
        $.ajax({
            type   : 'post',
            url    : setUrl('product/' + wish_product),
            data   : {type: 'favorite' },
            success: function (result){
                $(object).button('reset');
                if(result.getData === undefined){
                    if(result.error === undefined){
                        $('#wishList-total').html(result.favorite);
                        $.sticky("Sản phẩm này đã được thêm vào mục yêu thích của bạn", {autoclose: 3000, position: "top-right", type: "st-success" });
                    }else{
                        if(result.error == 'exists'){
                            $.sticky("Sản phẩm này đã có trong mục yêu thích của bạn", {autoclose: 3000, position: "top-right", type: "st-info" });
                        }else{
                            favorite.show_login();
                        }
                    }
                }else{
                    console.log(result.getData)
                }
            }
        });
    },
    delete: function(){
        $('.favorite-delete').click(function(){
            var row = $(this).closest('tr');
            var name = $(this).data('name');
            var favorite = $(this).data('id');
             BootstrapDialog.show({
                type   : BootstrapDialog.TYPE_DANGER,
                title  : 'Cảnh báo',
                message: 'Bạn có muốn xoá sản phẩm "<b>' + name + '</b>" ra khỏi mục yêu thích?',
                buttons: [
                    {
                        label   : 'Có',
                        cssClass: 'btn btn-danger',
                        action  : function (dialogRef){
                            row.animate({
                                opacity: 0,
                                height : "0 px"
                            }, 1000, 'swing', function (){
                                row.remove();
                            });
                            $.ajax({
                                type: 'post',
                                url: favoriteDelete,
                                data: {favorite: favorite},
                                success: function(data){
                                    if(data.success){
                                        $('#wishList-total').html(data.favorite);
                                        $.sticky("Sản phẩm đã được xoá ra khỏi mục yêu thích của bạn", {autoclose: 3000, position: "top-right", type: "st-info" });
                                    }
                                }
                            });
                            dialogRef.close();
                        }
                    },
                    {
                        label   : 'Không',
                        cssClass: 'btn',
                        action  : function (dialogRef){
                            dialogRef.close();
                        }
                    }
                ]
            });
        });
    }
}
posts = {
    init: function(){
        $('#load-post').click(function(){
            var btn = $(this);
            $(btn).button('loading');
            var post = $(this).data('post');
            var skip = $('.post').length;
            $.ajax({
                type: 'post',
                data: {skip: skip},
                url: setUrl('bai-viet/load'),
                success: function(result){

                    $.template("commentTemplate", $("#tmpl-post"));
                    $.tmpl("commentTemplate", result, {
                        link      : function (order_id){
                            return dashboard + '/orders/view/' + order_id;
                        },
                        code      : function (order_id){
                            return order_id + 1000000;
                        },
                        content   : function (content){
                            if(content.length > 50){
                                return content.substr(0, 50) + '&hellip;';
                            }
                            return content;
                        },
                        dateFormat: function (datetime){
                            return timestamp(datetime, 'd-m-y H:i:s');
                        }
                    }).appendTo('#postData');
                    if(post<= $('.post').length){
                        $(btn).fadeOut().delay(300).remove();
                    }
                }
            })
        });
    }
}
function imgViewedError(image){
    $(image).parent().parent().remove();
}
Number.prototype.format = function (n, x, s, c){
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')', num = this.toFixed(Math.max(0, ~~n));
    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

scrollAjaxProcess();
$(window).scroll(function (){
    scrollAjaxProcess();
});
function scrollAjaxProcess(){
    var top = $(window).scrollTop();
    $('#ajaxProcess').css({'top': top});
}

$(window).bind('popstate', function(event) {
    // if the event has our history data on it, load the page fragment with AJAX
    var state = event.originalEvent.state;
    if (state) {
        location.href = window.location;
    }
});
filter = {
    init: function(){
        var re = /\?/gi;
        if(re.test(urlFull)){
            urlFull += '&';
        }else{
            urlFull += '?';
        }
        $('#price-filter').change(function(){
            window.history.pushState({path:url},'',url);
            $.ajax({
                url: url,
                data: $('#frm-filters').serialize(),
                beforeSend:function(){
                    $('#ajaxProcess').show().animate({width: '50%'}, 300);
                },
                success:function(data){
                    $('#ajaxProcess').show().stop().animate({width: '100%'},500, function(){$(this).hide().css('width',0)});
                    if(data.html != undefined){
                        $('#listProduct').html(data.html)
                        $('html, body').stop().animate({
//                            scrollTop: 150
                            scrollTop: $("#listProduct").offset().top
                        });
                    }
                }
            })
        });
    }
}
var pagination = {
    init: function(){
        $('#listProduct').on('click', '.pagination li a', function(){
            var url = $(this).attr('href');
            window.history.pushState({path:url},'',url);
            $.ajax({
                url: url,
                beforeSend:function(){
                    $('#ajaxProcess').show().animate({width: '50%'}, 300);
                },
                success:function(data){
                    $('#ajaxProcess').show().stop().animate({width: '100%'},500, function(){$(this).hide().css('width',0)});
                    if(data.html != undefined){
                        $('#listProduct').html(data.html)
                        $('html, body').stop().animate({
                            scrollTop: 150
                        });
                    }
                }
            })
            return false;
        });
    }
}