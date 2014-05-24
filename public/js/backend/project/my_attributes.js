jQuery(document).ready(function (){
    my_attribute.init();
});
var item = null;
var type_data = null;
my_attribute = {
    init            : function (){
        item = $('#type-data-item').clone();
        type_data = $('#type-data');
        my_attribute.change_type();
        my_attribute.remove_data_item();
        my_attribute.delete_attribute();
    },
    remove_data_item: function (){
        $('.span12').on('click', '.remove-data', function (){
            var data = $(this).parent('.span12');
            $(this).remove();
            if($('.type_data').length > 2){
                data.remove();
            }
        });
    },
    change_type     : function (){
        $('#type').change(function (){
            var data = $(this).val();
            if(data == 'select' || data == 'multiselect'){
                type_data.fadeIn(500);
                $('#add-data').fadeIn(500);
                $('.type_data').attr('name', 'type_data[]');
                $('.type_label').attr('name', 'type_data_label[]');
            }else{
                type_data.fadeOut(500);
                $('#add-data').fadeOut(500);
                $('.type_data').removeAttr('name');
                $('.type_label').removeAttr('name');
            }
            if($('.type_data').length == 1){
                type_data.append(item.html());

            }
        });
        $('#add-data').click(function (){
            type_data.append(item.html());
        });
    },
    delete_attribute: function (){
        $('.att-delete').click(function (){
            var attribute = $(this);
            BootstrapDialog.show({
                title   : 'WARNING',
                message : 'Bạn có muốn xoá thuộc tính "<b>' + attribute.data('label') + '</b>" không?',
                type    : BootstrapDialog.TYPE_WARNING,
                closable: true,
                buttons : [
                    {
                        cssClass: 'btn-danger',
                        label   : 'Có',
                        action  : function (dialogRef){
                            dialogRef.enableButtons(false);
                            dialogRef.setClosable(false);
                            location.href = attribute.attr('href');
                            setTimeout(function (){
                                dialogRef.close();
                            }, 5000);
                        }
                    },
                    {
                        label : 'Không',
                        action: function (dialogRef){
                            dialogRef.close();
                        }
                    }
                ]
            });
            return false;
        })
    }
}