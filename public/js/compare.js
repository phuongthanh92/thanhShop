jQuery(document).ready(function (){
    compare.init();
})
compare = {
    init       : function (){
        this.add_product();
        this.remove();
    },
    add_product: function (){
        var tmpl_compare = $('#tmpl-compare');
        $('body').on('click', 'a.to-compare', function (){
            var comp = $(this);
            var product = $(comp).data('id');
            $(comp).button('send');
            var check_exit = true;
            $('.compare-product').each(function (){
                if($(this).data('id') == product){
                    check_exit = false;
                    return false;
                }
            });
            if(check_exit){
                if($('.compare-product').length >= 3){
                    $(comp).button('reset');
                    compare.message('maximum');
                }else{
                    $.ajax({
                        type   : 'post',
                        url    : setUrl('product/' + product),
                        data   : {type: 'compare' },
                        success: function (result){
                            $(comp).button('reset');
                            if(result.getData === undefined){
                                if(result.error === undefined){
                                    $.tmpl(tmpl_compare, result).appendTo('#list-compare');
                                    $.sticky("Thêm sản phẩm vào mục so sánh thành công", {autoclose : 3000, position: "top-right", type: "st-success" });
                                    if($('.compare-product').length > 0){
                                        $('.compare-empty').hide()
                                    }
                                }else{
                                    if(result.error == 'exists'){
                                        compare.message('exists');
                                    }else{
                                        compare.message('maximum');
                                    }
                                }
                            }else{
                                compare.message('error');
                            }
                        }
                    });
                }
            }else{
                $(comp).button('reset');
                compare.message('exists');
            }
            return false;
        });
    },
    message: function(error){
        if(error == 'maximum'){
            BootstrapDialog.show({
                title  : 'Thông tin sản phẩm',
                message: '<p>Bạn chỉ được so sánh tối đa 3 sản phẩm!</p><p><a href="'+setUrl('compare')+'">Click vào đây</a> để so sánh các sản phẩm đã chọn</p>',
                type: BootstrapDialog.TYPE_INFO,
                onshow : function (dialogRef){
                    setTimeout(function (){
                        dialogRef.close()
                    }, 3000)
                },
                buttons: [
                    {
                        label   : 'Ok',
                        cssClass: 'btn btn-info',
                        action  : function (dialogRef){
                            dialogRef.close();
                        }
                    }
                ]
            });
        }
        if(error == 'exists'){
            $.sticky("Sản phẩm này đã có trong danh mục so sánh", {autoclose : 3000, position: "top-right", type: "st-info" });
        }
        if(error == 'error'){
            $.sticky("Có lỗi trong quá trình thêm sản phẩm vào mục so sánh", {autoclose : 3000, position: "top-right", type: "st-error" });
        }
    },
    remove     : function (){
        $('body').on("click", ".compare-remove", function (){
            var product = $(this).data('id');
            var li = $(this).parents('li');
            $.ajax({
                type      : 'post',
                url       : setUrl('product/compare/remove'),
                data      : {id: product},
                beforeSend: function (){li.hide()},
                success   : function (){
                    $.sticky("Xoá sản phẩm trong mục so sánh thành công", {autoclose : 3000, position: "top-right", type: "st-info" });
                    li.fadeOut(300).delay(300).remove();
                    if($('.compare-product').length == 0){
                        $('.compare-empty').show()
                    }
                }
            })
        })
    }
}
