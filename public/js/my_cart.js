jQuery(document).ready(function (){
    my_cart.init();
    order.init();
//    $('.quantity').number(true, 0, ',', '.');
});
var globalTimeout = null;
my_cart = {
    init       : function (){
        my_cart.addItem();
        my_cart.deleteItem();
        my_cart.updateItem();
    },
    addItem    : function (){
        $('body').on('click', 'a.add-to-cart', function (){
            var cart = $(this);
            cart.button('send');
//            console.log({'product': cart.data('id')})
            $.post(setUrl('cart/add-item'), {product: cart.data('id')}).done(function (data){
//                    console.log(data)
                    cart.button('reset');
                    if(data.add){
                        $('#cart-total').html(data.total_quantity);
                        BootstrapDialog.show({
                            type   : BootstrapDialog.TYPE_SUCCESS,
                            title  : 'Thêm sản phẩm vào giỏ hàng thành công!',
                            message: '<p><a href="' + setUrl('cart') + '">Click vào đây để</a> đến giỏ hàng</p>',
                            onshow : function (dialogRef){
                                setTimeout(function (){
                                    dialogRef.close()
                                }, 3000)
                            }
                        });
                    }else{
                        BootstrapDialog.show({
                            type   : BootstrapDialog.TYPE_WARNING,
                            title  : 'Lỗi!',
                            message: 'Sản phẩm này đã hết hàng.<br> Bạn vui lòng liên hệ với chúng tôi để nhận hỗ trợ',
                            onshow : function (dialogRef){
                                setTimeout(function (){
                                    dialogRef.close()
                                }, 3000)
                            }
                        });
                    }
            });
        });
    },
    deleteItem : function (){
        $('.cart-delete').tooltip().click(function (){
            var cart = $(this).data('cart');
            var row = $(this).parents('tr');
            row.addClass({opacity: 0.1});
            BootstrapDialog.show({
                title  : 'Xác nhận',
                message: 'Bạn có muốn xoá sản phẩm này không?',
                type   : BootstrapDialog.TYPE_WARNING,
                buttons: [
                    {
                        label   : 'Có',
                        autospin: true,
                        cssClass: 'btn btn-danger',
                        action  : function (dialogRef){
                            setTimeout(function (){
                                dialogRef.close();
                            }, 500);
                            $.post(setUrl('cart/delete-item'), { cart: cart}).done(function (data){
                                if(data.delete){
                                    row.animate({
                                        opacity: 0,
                                        height : "0 px"
                                    }, 1000, 'swing', function (){
                                        row.remove();
                                        if($('.product_on_cart').length == 0){
                                            $('table.cart-table').remove();
                                            $('.carts-empty').show();
                                            $('.checkout-link').remove();
                                        }
                                    });
                                    $('#cart-total').html(data.total_quantity);
                                    $('.total_amount').html(data.total_amount.format(0, 3, '.') + ' đ');
                                    $.sticky("Xoá sản phẩm "+$(row).find('.name').html()+"ra khỏi giỏ hàng thành công", {autoclose : 3000, position: "top-right", type: "st-success" });
                                }
                            });
                        }
                    },
                    {
                        label   : 'Không',
                        cssClass: 'btn btn-success',
                        action  : function (dialogRef){
                            dialogRef.close();
                        }
                    }
                ]
            })
        })
    },
    updateItem : function (){
        $('#info-cart').on("keypress", 'td input.quantity',function (e){
            var td = $(this).parent();
            $(td).find('.change').addClass('glyphicon-save');
            $(this).val($(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                return false;
            }
        });
        $('#info-cart').on('change', 'td .option', function(){
            var td = $(this).parent();
            $(td).find('.change').addClass('glyphicon-save');
        });
        $('#info-cart').on('click', 'td .glyphicon-save', function(){
            var row = $(this).closest('tr');
            var cart = $(this).data('cart');
            var productID = $(this).data('product');
            var quantity = $(row).find('.quantity').val();
            var color = $(row).find('.color').val();
            var size = $(row).find('.size').val();
//            console.log(quantity);console.log(color);console.log(size);
            var change = $(row).find('.change');
            $.ajax({
                type: 'post',
                url: setUrl('cart/update-item'),
                data: {cart: cart, quantity: quantity, color: color, size: size, productID: productID},
                beforeSend: function(){
                    $(change).addClass('glyphicon-refresh icon-spin').removeClass('glyphicon-save');
                }
            }).done(function (data){
                $(change).removeClass('glyphicon-refresh icon-spin').addClass('glyphicon-saved');
                if(data.update){
                    if(quantity != data.quantity){
                        $.sticky("Sản phẩm "+ $(row).find('.name').html() +" chỉ còn "+ data.quantity + " sản phẩm", {autoclose : 3000, position: "top-right", type: "st-warning" });
                    }else{
                        $.sticky("Cập nhật số lượng sản phẩm "+ $(row).find('.name').html() +" thành công", {autoclose : 3000, position: "top-right", type: "st-success" });
                    }
                    $('#cart-total').html(data.total_quantity);
                    $(row).find('.quantity').val(data.quantity);
                    row.find('.price_cart').html(data.price.format(0, 3, '.'));
                    var into_money = data.price * data.quantity;
                    row.find('.t-price').html(into_money.format(0, 3, '.'));
                    $('.total_amount').html(data.total_amount.format(0, 3, '.') + ' VNĐ');
                    if(data.key != data.keyOld){
                        $('tr.'+data.key).animate({
                            opacity: 0,
                            height : "0 px"
                        }, 1000, 'swing', function (){
                            $('tr.'+data.key).remove();
                            if($('.product_on_cart').length == 0){
                                $('table.cart-table').remove();
                                $('.carts-empty').show();
                                $('.checkout-link').remove();
                            }
                        });
                    }
                    setTimeout(function(){$(change).removeClass('glyphicon-saved');},1000);
                    console.log(data)
                }
            });
        });
    }
};
order = {
    init: function(){
        $('#order').stepy({
            legend: false,
            backLabel: '< Quay lại',
            nextLabel: 'Tiếp tục >',
            titleClick : true
        });
        this.address();
    },
    address: function(){
        $('.address-choose').on('click', '.address-option', function(){
            $('.address-option').removeClass('alert-info active');
            $(this).addClass('alert-info active');
            $('input[name="address"]').removeAttr('checked');
            $(this).find('input[type="radio"]').attr('checked', 'checked');
        });
    }
}
Number.prototype.format = function (n, x, s, c){
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')', num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};
