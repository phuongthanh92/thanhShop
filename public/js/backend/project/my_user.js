/**
 * Created by Hoang on 04/03/2014.
 */
$('.delete_toggle').each(function (index, elem){
    $(elem).click(function (e){
        e.preventDefault();
        if($(elem).data('id') == userId){
            alert('Bạn không thể xoá tài khoản của mình');
            return false;
        }else{
            $('#postvalue').attr('value', $(elem).data('id'));
            $('#modal-messages').text('Bạn có muốn xoá tài "' + $(elem).data('user') + '" khoản không?');
        }
        $('#deleteModal').modal('toggle');
    });
});
