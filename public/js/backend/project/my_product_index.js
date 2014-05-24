jQuery(document).ready(function (){
    product_index.init();
})
product_index = {
    init  : function (){
        product_index.delete();
        product_index.search();
    },
    search: function (){
        $('.form-search select').change(function (){
            $('#page-hidden').attr('name', 'page');
            var input = $('.form-search input[name="keyword"]');
            if($.trim(input.val()) == ''){
                input.attr('name', '');
            }
            $('.form-search').submit();
        });
        $('.btn-search').click(function (){
            var input = $('.form-search input[name="keyword"]');
            if($.trim(input.val()) == ''){
                input.focus();
                return false;
            }
        })
    },
    delete: function (){
        $('.product-delete').click(function (){
            var product = $(this);
            var row = product.parents('tr');
            BootstrapDialog.show({
                title   : 'Xoá sản phẩm',
                message : 'Bạn có muốn xoá sản phẩm ' + product.data('name') + ' không?',
                type    : BootstrapDialog.TYPE_DANGER,
                autospin: true,
                buttons : [
                    {
                        label   : 'Có',
                        cssClass: 'btn-danger',
                        action  : function (dialog){
                            var $button = this;
                            $button.disable();
                            $button.spin();
                            dialog.setClosable(false);
                            $.ajax({
                                type   : 'post',
                                url    : delete_url + product.data('id'),
                                success: function (data){
                                    console.log(data)
                                    if(data.delete){
                                        row.animate({
                                            opacity: 0.25,
                                            height : 0,
                                            padding: 0,
                                            margin : 0
                                        }, 1000, function (){
                                            row.remove();
                                            dialog.close();
                                        });
                                    }
                                }
                            })
                        }
                    },
                    {
                        label : 'Không',
                        action: function (dialog){
                            dialog.close();
                        }
                    }
                ]

            })
        });
    }
}
