/**
 * Created by Hoang on 04/03/2014.
 */
$(function (){
    group_attribute.init();
    $('#add_group').click(function (){
        group_attribute.save($(this).data('url'));
    });
});
var group_attribute = {
    init       : function (){
        $("ul.droptrue").sortable({
            connectWith: "ul"
        });
        $("#sortable1, #sortable2").disableSelection();
    },
    loadData   : function (){
        var attributes = new Array();
        $("#sortable1 > li").each(function (index, elem){
            attributes[index] = $(elem).data('attribute');
        });
        var group = $.trim($('#group_name').val());
        if(group.length == 0){
            this.loadError('Tên nhóm thuộc tính không được trống.');
            return false;
        }
        if(attributes.length == 0){
            this.loadError('Bạn chưa chọn thuộc tính.');
            return false;
        }
        if(this.send){
            return false;
        }else{
            this.send = true;
            $('#add_group').attr({'disabled': 'disabled'});
        }
        $('#loading_group').attr('style', '');
        this.groupName = group;
        this.data = attributes;
        return true;
    },
    send       : false,
    groupName  : '',
    data       : {},
    save       : function (url){
        console.log(url);
        if(this.loadData()){
            $.post(url, {group: this.groupName, attributes: JSON.stringify(this.data)}, function (data){

                }).done(function (data){
                    console.log('done ' + data);
                    if(data.success == 'success'){
                        $('#loading_group').attr('style', 'display:none');
                        group_attribute.loadSuccess('Cập nhật thành công.');
                        group_attribute.send = false;
                        $('#add_group').removeAttr('disabled');
                    }else{
                        group_attribute.loadError('Vui lòng thêm mới sau.');
                    }
                }).fail(function (){
                }).always(function (){
                });
        }
    },
    loadError  : function (message){
        var messages = '' + '<div class="alert alert-error">' + '<a class="close" data-dismiss="alert">×</a>' + '<strong>Lỗi! </strong>' + message + '</div>';
        $('#group-error').html(messages);
    },
    loadSuccess: function (message){
        var messages = '' + '<div class="alert alert-success">' + '<a class="close" data-dismiss="alert">×</a>' + '<strong>Thành công! </strong>' + message + '</div>';
        $('#group-error').html(messages);
    }
};
