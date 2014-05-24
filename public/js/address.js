jQuery(document).ready(function(){
    address.init();
});
address = {
    init: function(){
        this.loadProvinces();
        this.submit();
        this.delete();
        this.update();
        $('select#province_id').change(function(){
            address.loadDistricts($(this).val());
        });
    },
    loadProvinces: function(){
        $.ajax({
            url: provinces,
            type: 'post',
            beforeSend: function(){

            },
            success:function(result){
                $.tmpl($("#tmpl-option"), result).appendTo('select#province_id');
                $.tmpl($("#tmpl-option"), result).appendTo('select#e_province_id');
            }
        });
    },
    loadDistricts: function(province_id){
        $.ajax({
            url: districts + '/' + province_id,
            type: 'post',
            beforeSend: function(){
                $('select#district_id').html('<option value="">Chọn một</option>');
            },
            success:function(result){
                $.tmpl($("#tmpl-option"), result).appendTo('select#districts_id');
            }
        });
    },
    submit: function(){
        $('#formAddress').on('shown.bs.popover',function (){
            $('.popover-content').css({
                color: 'red'
            })
        }).validate({
                onkeyup      : false,
                errorClass   : 'text-danger',
                validClass   : 'text-success',
                highlight    : function (element){
                    $(element).addClass("text-danger");
                },
                unhighlight  : function (element){
                    $(element).removeClass("text-danger");
                },
                rules        : {
                    full_name: { required: true, maxlength: 255},
                    phone: {required: true, maxlength: 20},
                    address:{required:true, maxlength:255},
                    province_id:{required: true},
                    district_id: {required: true}
                }, messages  : {
                    full_name: {
                        required: 'Bạn chưa nhập họ và tên!'
                    },
                    address: {
                        required: 'Bạn chưa nhập địa chỉ!'
                    },
                    phone: {
                        required: 'Bạn chưa nhập số điện thoại!'
                    },
                    province_id: {
                        required: 'Bạn chưa chọn tỉnh/thành phố!'
                    },
                    district_id: {
                        required: 'Bạn chưa chọn quận/huyện!'
                    }
                },
                showErrors   : function (errorMap, errorList){
                    $.each(this.successList, function (index, value){
                        return $(value).popover("hide");
                    });
                    return $.each(errorList, function (index, value){
                        var tmp_popover;
                        tmp_popover = $(value.element).popover({
                            trigger  : "manual",
                            placement: "top",
                            content  : value.message,
                            template : "<div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\"><p></p></div></div></div>"
                        });
                        tmp_popover.data("bs.popover").options.content = value.message;
                        return $(value.element).popover("show");
                    });
                },
                submitHandler: function (form){
                    var btn = $('#addSubmit');
                    $.ajax({
                        type      : 'post',
                        url       : $(form).attr('action'),
                        data      : $(form).serialize(),
                        beforeSend: function (){
                            btn.button('loading')
                        },
                        success   : function (data){
                            location.reload();
                            if(data.success){
                                btn.button('success');
                            }else{
                                btn.button('error')
                            }
                        }
                    });
                    return false;
                }
            });
    },
    delete: function(){
        $('#manage_add').on('click', '.remove-address', function(){
            var id = $(this).data('id');
            var row = $(this).closest('tr');
            BootstrapDialog.show({
                type: BootstrapDialog.TYPE_WARNING,
                title: 'Xác nhận',
                message: 'Bạn có muốn xoá địa chỉ này không?',
                buttons: [{
                    cssClass: 'btn btn-danger',
                    label: 'Có',
                    action: function(dialog){
                        $.ajax({
                            type: 'post',
                            data: {id: id},
                            url: setUrl('address/remove'),
                            success:function(data){
                                if(data.success){
                                    $.sticky('Bạn đã xoá địa chỉ thành công!', {autoclose: 3000, position: "top-right", type: "st-success" });
                                }
                            }
                        })
                        row.remove();
                        dialog.close()
                    }
                },
                    {
                        label   : 'Không',
                        cssClass: 'btn btn-success',
                        action  : function (dialogRef){
                            dialogRef.close();
                        }
                    }]
            })
        })
    },
    update: function(){
        $('.edit-address').click(function(){
            $('#edit-address').modal('show');
            $('#e_full_name').val($(this).data('name'));
            $('#e_phone').val($(this).data('phone'));
            $('#e_address').val($(this).data('address'));
            $('#e_id').val($(this).data('id'));
        });
        $('#formEditAddress').on('shown.bs.popover',function (){
            $('.popover-content').css({
                color: 'red'
            })
        }).validate({
                onkeyup      : false,
                errorClass   : 'text-danger',
                validClass   : 'text-success',
                highlight    : function (element){
                    $(element).addClass("text-danger");
                },
                unhighlight  : function (element){
                    $(element).removeClass("text-danger");
                },
                rules        : {
                    full_name: { required: true, maxlength: 255},
                    phone: {required: true, maxlength: 20},
                    address:{required:true, maxlength:255},
                    province_id:{required: true},
                    district_id: {required: true}
                }, messages  : {
                    full_name: {
                        required: 'Bạn chưa nhập họ và tên!'
                    },
                    address: {
                        required: 'Bạn chưa nhập địa chỉ!'
                    },
                    phone: {
                        required: 'Bạn chưa nhập số điện thoại!'
                    },
                    province_id: {
                        required: 'Bạn chưa chọn tỉnh/thành phố!'
                    },
                    district_id: {
                        required: 'Bạn chưa chọn quận/huyện!'
                    }
                },
                showErrors   : function (errorMap, errorList){
                    $.each(this.successList, function (index, value){
                        return $(value).popover("hide");
                    });
                    return $.each(errorList, function (index, value){
                        var tmp_popover;
                        tmp_popover = $(value.element).popover({
                            trigger  : "manual",
                            placement: "top",
                            content  : value.message,
                            template : "<div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\"><p></p></div></div></div>"
                        });
                        tmp_popover.data("bs.popover").options.content = value.message;
                        return $(value.element).popover("show");
                    });
                },
                submitHandler: function (form){
                    var btn = $('#editSubmit');
                    $.ajax({
                        type      : 'post',
                        url       : $(form).attr('action'),
                        data      : $(form).serialize(),
                        beforeSend: function (){
                            btn.button('loading')
                        },
                        success   : function (data){
                            location.reload();
                            if(data.success){
                                btn.button('success');
                            }else{
                                btn.button('error')
                            }
                        }
                    });
                    return false;
                }
            });
    }
}