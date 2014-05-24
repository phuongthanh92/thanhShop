jQuery(document).ready(function (){
    user.init();
})
user = {
    init  : function (){
        user.edit();
        user.update();
        user.active();
        user.delete();
    },
    edit  : function (){
        $('.toggle-form').click(function (){
            $('.form-user').toggleClass('hidden');
        })
    },
    update: function (){
        $('#frm-user').validate({
            onkeyup       : false,
            errorClass    : 'error',
            validClass    : 'valid',
            highlight     : function (element){
                $(element).closest('div').addClass("f_error");
            },
            unhighlight   : function (element){
                $(element).closest('div').removeClass("f_error");
            },
            errorPlacement: function (error, element){
                $(element).closest('div').append(error);
            },
            rules         : {
                full_name: { required: true, minlength: 1 },
                email    : { required: true, email: true },
                role     : { required: true, numeric: true }
            }
//            invalidHandler: function(form, validator) {
////                $.sticky("There are some errors. Please corect them and submit again.", {autoclose : 5000, position: "top-right", type: "st-error" });
//            }
        });
    },
    active: function (){

    },
    delete: function (){
        $('#delete-user').click(function (){
            BootstrapDialog.show({
                title   : 'Xoá tài khoản',
                message : 'Bạn có muốn xoá nhân viên này không?',
                type    : BootstrapDialog.TYPE_DANGER,
                closable: true,
                buttons : [
                    {
                        label   : 'Yes',
                        cssClass: 'btn-danger',
                        action  : function (dialog){
                            $('#frm-user-delete').submit();
                        }
                    },
                    {
                        label : 'No',
                        action: function (dialog){
                            dialog.close();
                        }
                    }
                ]
            });
        });
        $('#delete-customer').click(function (){
            BootstrapDialog.show({
                title   : 'Xoá tài khoản',
                message : 'Bạn có muốn xoá tài khoản khách hàng này không?',
                type    : BootstrapDialog.TYPE_DANGER,
                closable: true,
                buttons : [
                    {
                        label   : 'Yes',
                        cssClass: 'btn-danger',
                        action  : function (dialog){
                            $('#frm-user-delete').submit();
                        }
                    },
                    {
                        label : 'No',
                        action: function (dialog){
                            dialog.close();
                        }
                    }
                ]
            });
        })
    }
}