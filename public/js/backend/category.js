$(document).ready(function (){
    var url_key;
    url_key = {
        create       : function (){
            var url;
            var str;
            $('#category_name').keyup(function (){
                str = $('#category_name').val();
                url = url_key.getUrl(str);
                url_key.setUrl(url);
            });
            $('#category_url_key').blur(function (){
                str = $('#category_url_key').val();
                url = url_key.getUrl(str);
                url_key.setUrl(url);
            })
        },
        getUrl       : function (str){
            return url_key.convertToSlug(str);
        },
        setUrl       : function (url){
            $('#category_url_key').val(url);
        },
        convertToSlug: function (str){
            str = str.toLowerCase();
            str = str.replace(/^\s+\s+$/g, ''); // trim
            var from = "àáạảãâầấậẩẫăằắặẳẵäèéẹẻẽêềếệểễëìíịỉĩïîòóọỏõôồốộổỗơờớợởỡöùúụủũưừứựửữüûñçỳýỵỷỹđ·/_,:;";
            var to = "aaaaaaaaaaaaaaaaaaeeeeeeeeeeeeiiiiiiioooooooooooooooooouuuuuuuuuuuuuncyyyyyd------";
            for(var i = 0, l = from.length; i < l; i++){
                str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
            }
            str = str.replace(/[^a-z0-9 -]/g, '-') // remove invalid chars
                .replace(/\s+/g, '-') // collapse whitespace and replace by -
                .replace(/-+/g, '-') // collapse dashes
                .replace(/^\-+|\-+$/g, "");//cắt bỏ ký tự - ở đầu và cuối chuỗi
            return str;
        }
    };
    validation = {
        ttip: function (){
            var ttip_validator = $('.form_validation').validate({
                onkeyup       : false,
                errorClass    : 'error',
                validClass    : 'valid',
                highlight     : function (element){
                    $(element).closest('div').addClass("f_error");
                },
                unhighlight   : function (element){
                    $(element).closest('div').removeClass("f_error");
                },
                rules         : {
                    name            : { required: true, maxlength: 100 },
                    url_key         : { required: true, maxlength: 100 },
                    meta_keyword    : { maxlength: 255 },
                    meta_description: { maxlength: 255 }
                },
                messages      : {
                    name            : {
                        required : "Mời bạn nhập tên danh mục.",
                        maxlength: jQuery.format("Tên danh mục không được vượt quá {0} kí tự.")
                    },
                    url_key         : {
                        required : "Mời bạn nhập Url key.",
                        maxlength: jQuery.format("Url key không được vượt quá {0} kí tự.")
                    },
                    meta_keyword    : {
                        maxlength: jQuery.format("Meta keywords không được vượt quá {0} kí tự.")
                    },
                    meta_description: {
                        maxlength: jQuery.format("Meta description không được vượt quá {0} kí tự.")
                    }
                },
                invalidHandler: function (form, validator){
                    $.sticky("Bạn vui lòng kiểm tra lại dữ liệu", {autoclose: 5000, position: "top-right", type: "st-error" });
                },
                errorPlacement: function (error, element){
                    // Set positioning based on the elements position in the form
                    var elem = $(element);
                    // Check we have a valid error message
                    if(!error.is(':empty')){
                        if((elem.is(':checkbox')) || (elem.is(':radio'))){
                            // Apply the tooltip only if it isn't valid
                            elem.filter(':not(.valid)').parent('label').parent('div').find('.error_placement').qtip({
                                overwrite: false,
                                content  : error,
                                position : {
                                    my      : 'left bottom',
                                    at      : 'center right',
                                    viewport: $(window),
                                    adjust  : {
                                        x: 6
                                    }
                                },
                                show     : {
                                    event: false,
                                    ready: true
                                },
                                hide     : false,
                                style    : {
                                    classes: 'ui-tooltip-red ui-tooltip-rounded' // Make it red... the classic error colour!
                                }
                            })// If we have a tooltip on this element already, just update its content
                                .qtip('option', 'content.text', error);
                        }else{
                            // Apply the tooltip only if it isn't valid
                            elem.filter(':not(.valid)').qtip({
                                overwrite: false,
                                content  : error,
                                position : {
                                    my      : 'bottom left',
                                    at      : 'top right',
                                    viewport: $(window),
                                    adjust  : { x: -8, y: 6 }
                                },
                                show     : {
                                    event: false,
                                    ready: true
                                },
                                hide     : false,
                                style    : {
                                    classes: 'ui-tooltip-red ui-tooltip-rounded' // Make it red... the classic error colour!
                                }
                            })// If we have a tooltip on this element already, just update its content
                                .qtip('option', 'content.text', error);
                        }
                        ;
                    }
                    // If the error is empty, remove the qTip
                    else{
                        if((elem.is(':checkbox')) || (elem.is(':radio'))){
                            elem.parent('label').parent('div').find('.error_placement').qtip('destroy');
                        }else{
                            elem.qtip('destroy');
                        }
                    }
                },
                success       : $.noop // Odd workaround for errorPlacement not firing!
            });
        }
    }
    validation.ttip();
    url_key.create();
    var tree;
    tree = {
        create : function (){
            $('#jstree').jstree({
                "core"   : {
                    "check_callback": true
                },
                "plugins": [ "unique", "dnd", "search", "state"]
            })
        },
        refresh: function (){
            $.jstree.reference('#jstree');
        },
        move   : function (){
            $('#jstree').on('move_node.jstree', function (e, data){
                $('#result_fuck').data.get_json()
            }).jstree();
        }
    };
    tree.create();
    $('#jstree')// listen for event
        .on('changed.jstree', function (e, data){
            var i, j, r = [];
            for(i = 0, j = data.selected.length; i < j; i++){
                r.push(data.instance.get_node(data.selected[i]).id);
            }
            $('#event_result').html('Selected: ' + r.join(', '));
        })// create the instance
        .jstree();
    $('#fuck').on('click', function (){
        $('#jstree').select_all(function (e, data){
            var i, j, r = [];
            for(i = 0, j = data.length; i < j; i++){
//                    r.push(data.instance.get_node(data.selected[i]).id);
            }
//                $('#result_fuck').html('Selected: ' + r.join(', '));
        })// create the instance
            .jstree();
    })
});