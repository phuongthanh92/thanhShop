$(document).ready(function (){
    my_permission.init();
});
my_permission = {
    init  : function (){
        my_permission.create();
        my_permission.delete();
    },
    create: function (){
        $('.permission_create').click(function (){
            var permission = $('#permission_clone').clone();
            $('#permissionModal').modal('toggle');
            var url = $('#permissionModal').data('url');

            $('#tab2').html('');
            var role = $('#roles_clone').clone();
            for(var i = 0; i < data.length; i++){
                var tmp = role;
                $('#tab2').append(tmp);
                tmp.find('input[type="checkbox"]').val(data[i].id).append(data[i].display_name).removeAttr('style');
            }
            $('#permission tbody').append(permission);
            permission.find('.permission_name').html('name');
            permission.find('.permission_user').html('user');
            permission.find('.permission_date').html('date');
            permission.find('.permission_edit').attr('data-id', 'id').html('<i class="icon-pencil"></i>');
            permission.find('.permission_delete').attr({'data-id': 'id', 'data-name': 'name'}).html('<i class="icon-trash"></i>');
            permission.removeClass('.permission_clone').show();
        });
    },
    delete: function (){
        $('.permission_delete').each(function (index, elem){
            $(elem).click(function (e){
                e.preventDefault();
                $('#deleteMessage').html('Bạn có muốn xoá quyền "' +$(elem).data('name')+ '" không?');
                $('#postValue').attr('value', $(elem).data('id'));
                $('#deleteModal').modal('toggle');
            });

        });
    }
}
