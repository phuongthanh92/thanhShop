$(document).ready(function (){
    var wait = false;
    var token = $('#user_form input[name="_token"]').val();
//    alert(token);
    if(!wait){
        $('.delete').live('click', function (){
            wait = true;
            var current = $(this);
            var tr = $(this).parents('tr');
            tr.addClass('tmp');
            if(confirm('Bạn có muốn xoá tài khoản "' + current.data('user') + '" không?')){
                $.ajax({
                    type      : "post",
                    data      : {"id": current.data('id'), "_token": token},
                    url       : baseUrl + '/user/delete',
                    beforeSend: function (){
//                    $(body).append('<div id="wait_ajax" style="width: 100%;height: 100%;position: absolute; background: #adaba9; z-index: 999999"></div>');
                    },
                    success   : function (result){
                        var data = $.parseJSON(result);
                        if(data.error){
                            alert(data.message);
                        }else{
                            tr.children('td').animate({ padding: 0 }).wrapInner('<div />').children().slideUp(function (){ tr.remove(); });
                        }
                    }
                });
                wait = false;
                return false;
            }else{
                tr.removeClass('tmp');
                wait = false;
                return false;
            }
        });
    }else{
        alert('Vui lòng đợi');
    }
});