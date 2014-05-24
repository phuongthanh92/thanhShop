$(document).ready(function (){
    var item = 0;
    var attribute = {
        init            : function (){
            this.remove_data_item();
        },
        type_add_data   : function (begin){
            var remove = '<div class="splashy-remove remove-data span1" title="Xoá" style="cursor: pointer"></div>';
            if(begin == 0){
                remove = ''
            }
            item++;
            var html = '<div class="span12 type-data">' + '' + '<div class="span4">' + '<p><input class="span10" name="type_data[]" placeholder="Giá trị" type="text"></p>' + '</div>' + '<div class="span7">' + '<p><input class="span10" name="type_data_label[]" placeholder="Nhãn" type="text"></p>' + '</div>' + remove + '</div>';
            $('.label-data').attr('style', 'display: block');
            return html;
        },
        type_remove_data: function (){
            $('.label-data').attr('style', 'display: none');
            $('#type-data').html('');
        },
        remove_data_item: function (){
            $('.span12').on('click', '.remove-data', function (){
                if($('.type-data').length > 1){
                    var data = $(this).parent('.type-data');
                    data.remove();
                    item--;
                }
            });
        }
    }
    attribute.init();
    $('#type').change(function (){
        var data = $(this).val();
        if(data == 'select' || data == 'checkbox' || data == 'radio'){
            var label = '' + '<div class="row-fluid">' + '<label class="label-data">Thêm giá trị cho thuộc tính<span class="f_req"> *</span> </label>' + '</div>' + '<div class="span12">' + '<div class="span4">' + '<label class="label-data">Giá trị</label>' + '</div>' + '<div class="span6">' + '<label class="label-data">Nhãn</label>' + '</div>' + '</div>';
            $('#type-data').html(label + attribute.type_add_data(item));
        }else{
            item = 0;
            attribute.type_remove_data();
        }
    });
    $('#add-data').click(function (){
        $('#type-data').append(attribute.type_add_data(item));
    });
});
