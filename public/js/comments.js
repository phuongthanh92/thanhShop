$(document).ready(function (){
    my_comment.init();

});
my_comment = {
    init   : function (){
        if(!is_touch_device()){
            chatEditor = $("#comment_editor").cleditor({
                width   : "100%",
                height  : "120px",
                controls: "bold italic underline"
            })[0];
        }
        $('.send_msg').click(function (e){
            my_comment.sendMsg();
            e.preventDefault();
        });
        $('.msg_window').stop().animate({
            scrollTop: $('.chat_msg_body').offset().top
        }, 1000);
        my_comment.change();
    },
    sendMsg: function (){
        if(!is_touch_device()){
            chatEditor.updateTextArea();
        }
        var msg = $("#comment_editor").val(), //* remove first and last <br> from message
            tr_msg = msg.replace(/(^(<div><br><\/div>)+|(<div><br><\/div>)$)/g, "").replace(/(^(<br>)+|(<br>)+$)/g, "");
        if(tr_msg != ""){
            var msg_cloned = $('.msg_clone').clone();
            $('.msg_window').append(msg_cloned);
            var date = new Date();
            var temp = date.getTime();
            var date_str = ('0' + date.getDate()).substr(-2, 2) + '-' + ('0' + date.getMonth()).substr(-2, 2) + '-' + date.getFullYear() + ' ' + ('0' + date.getHours()).substr(-2, 2) + ':' + ('0' + date.getMinutes()).substr(-2, 2) + ':' + ('0' + date.getSeconds()).substr(-2, 2);

            $.ajax({
                type      : 'post',
                url       : commentUrl,
                data      : {content: tr_msg, order_id: orderId},
                beforeSend: function (data){
                    msg_cloned.find('.chat_msg_date').html(date_str);
                    msg_cloned.find('.chat_msg_body').html(tr_msg);
                    msg_cloned.find('.chat_user_name').html(username);
                    msg_cloned.removeClass('msg_clone').show().addClass('temp' + temp);
                    $('.msg_window').stop().animate({
                        scrollTop: msg_cloned.offset().top
                    }, 2000);
//                                        console.log(data)
                },
                success   : function (data){
//                    console.log(data)
                    if(data.success == false){
                        $('.temp' + temp).remove();
                    }
                }
            });
        }
        if(!is_touch_device()){
            chatEditor.clear().focus();
        }
    },
    change : function (){
        $('#order_submit').click(function (){

            BootstrapDialog.show({
                title  : 'Xác nhận',
                message: 'Bạn có muốn thay đổi trạng thái đơn hàng thành ' + $('#order_status option:selected').text() + ' không?',
                buttons: [
                    {
                        label : 'Có',
                        action: function (dialog){
                            $('#frm_order').submit();
                        }
                    },
                    {
                        label : 'Không',
                        action: function (dialog){
                            dialog.close();
                        }
                    }
                ]
            });
            return false;
        });
    }
}