var noscript = document.getElementById('noscript');
var dashboard = $('#dashboard').attr('href');
var url = baseUrl;
if(noscript != undefined){
    noscript.style.display = "none";
}
var keyword = document.getElementById('keyword');
$('.btn-search').click(function (){
    if($.trim(keyword.value) == ''){
        keyword.focus();
        return false;
    }
});
$('.form-search select.limit, .form-search select.order').change(function (){
    var frm = $('#form-search');
    if(frm.val() != undefined){
        var keyword = $('#keyword');
        frm.append('<input type="hidden" name="page" value="1">');
        if(keyword.val() == undefined || $.trim(keyword.val()) == ''){
            keyword.removeAttr('name');
        }
        frm.submit();
    }
});
jQuery(document).ready(function (){
    comment.init()
    contact.init();
    $.fn.datepicker.dates['vi'] = {
        days       : ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy", "Chủ nhật"],
        daysShort  : ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
        daysMin    : ["CN", "T2", "T3", "T4", "T5", "T6", "T7", "CN"],
        months     : ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        monthsShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
        today      : "Hôm nay",
        clear      : "Xóa",
        format     : "dd/mm/yyyy"
    };
    $('.datepicker').datepicker({
        format  : 'dd/mm/yyyy',
        language: 'vi'
    }).attr('style', 'cursor:pointer')
});
var comment = {
    init        : function (){
        this.load_comment();
    },
    load_comment: function (){
        $('#listComment').empty();
        var comment_row = $('#tmpl-comment').html();
        $.ajax({
            type    : 'post',
            url     : url + 'load-new-comment',
            dataType: 'JSON',
            success : function (resultList){
                var n = resultList.length;
                $('#total-comment').html(n);
                var myComment = $('#myComments');
                if(n > 0){
                    myComment.find('table').show();
                    myComment.find('.alert').hide();
                    $.template("commentTemplate", comment_row);
                    $.tmpl("commentTemplate", resultList, {
                        link      : function (order_id){
                            return dashboard + '/orders/view/' + order_id;
                        },
                        code      : function (order_id){
                            return order_id + 1000000;
                        },
                        content   : function (content){
                            if(content.length > 50){
                                return content.substr(0, 50) + '&hellip;';
                            }
                            return content;
                        },
                        dateFormat: function (datetime){
                            return timestamp(datetime, 'd-m-y H:i:s');
                        }
                    }).appendTo('#listComment');
                }else{
                    myComment.find('.alert').show();
                    myComment.find('table').hide();
                }
            }
        });
    }
}
contact = {
    init        : function (){
        this.delete();
        this.reply();
        this.load_contact();
    },
    delete      : function (){
        $('.contact-delete').click(function (){
            BootstrapDialog.show({
                title   : 'Xoá ý kiến',
                message : 'Bạn có muốn xoá ý kiến này không?',
                type    : BootstrapDialog.TYPE_DANGER,
                closable: true,
                buttons : [
                    {
                        label   : 'Yes',
                        cssClass: 'btn-danger',
                        action  : function (dialog){
                            $('#frm-contact-delete').submit();
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
    },
    reply       : function (){
        $('.contact-reply').click(function (){
            $('.mail_reply').fadeIn(200);
            $('#mail_message').focus();
        })
    },
    load_contact: function (){
        $.post(dashboard + '/load-new-contact').done(function (resultList){
            var count = 0;
            if($.isArray(resultList)){
                count = resultList.length;
            }
            $('#total-contact').html(count);
            var myContact = $('#myMail');
            if(count > 0){
                myContact.find('table').show();
                myContact.find('.alert').hide();
                var contact_row = $('#tmpl-contact')
                $.template("contactTemplate", contact_row);
                $.tmpl("contactTemplate", resultList, {
                    link      : function (id){
                        return dashboard + '/contact/view/' + id;
                    },
                    title     : function (title){
                        if(title.length > 100){
                            return title.substr(0, 100) + '&hellip;';
                        }
                        return title;
                    },
                    dateFormat: function (datetime){
                        return timestamp(datetime, 'd-m-y H:i:s');
                    }
                }).appendTo('#listContact');
            }else{
                myContact.find('.alert').show();
                myContact.find('table').hide();
            }
        })
    }
}
var timestamp = function (datetime, format){
    var date = {
        y: datetime.substring(2, 4),
        Y: datetime.substring(0, 4),
        m: datetime.substring(5, 7),
        d: datetime.substring(8, 10),
        H: datetime.substring(11, 13),
        i: datetime.substring(14, 16),
        s: datetime.substring(17, 19)
    };
    switch(format){
        case 'd-m-y H:i:s':
            return date.d + '-' + date.m + '-' + date.y + ' ' + date.H + ':' + date.i + ':' + date.s;
        case 'd-m-Y H:i:s':
            return date.d + '-' + date.m + '-' + date.Y + ' ' + date.H + ':' + date.i + ':' + date.s;
        case 'd/m/y H:i:s':
            return date.d + '/' + date.m + '/' + date.y + ' ' + date.H + ':' + date.i + ':' + date.s;
        case 'd/m/Y H:i:s':
            return date.d + '/' + date.m + '/' + date.Y + ' ' + date.H + ':' + date.i + ':' + date.s;
        case 'd-m-y H:i':
            return date.d + '-' + date.m + '-' + date.y + ' ' + date.H + ':' + date.i;
        case 'd-m-Y H:i':
            return date.d + '-' + date.m + '-' + date.Y + ' ' + date.H + ':' + date.i;
        case 'd/m/y H:i':
            return date.d + '/' + date.m + '/' + date.y + ' ' + date.H + ':' + date.i;
        case 'd/m/Y H:i':
            return date.d + '/' + date.m + '/' + date.Y + ' ' + date.H + ':' + date.i;
        default:
            return date;
    }

}