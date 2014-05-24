project_slug = {
    create       : function (begin, to_slug){
        var url;
        var str;
        $(begin).keyup(function (){
            str = $(begin).val();
            url = project_slug.getUrl(str);
            project_slug.setUrl(url, to_slug);
        });
        $(to_slug).blur(function (){
            str = $(to_slug).val();
            url = project_slug.getUrl(str);
            project_slug.setUrl(url, to_slug);
        })
    },
    getUrl       : function (str){
        return project_slug.convertToSlug(str);
    },
    setUrl       : function (url, to_slug){
        $(to_slug).val(url);
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

(function ($) {
    $.fn.extend({
        toSlug: function (options) {
            var defaultVal = {
                parent: null
            };
            var opts = $.extend(defaultVal, options);

            function convertToSlug(str) {
                str = str.toLowerCase();
                str = str.replace(/^\s+\s+$/g, ''); // trim
                var from = "àáạảãâầấậẩẫăằắặẳẵäèéẹẻẽêềếệểễëìíịỉĩïîòóọỏõôồốộổỗơờớợởỡöùúụủũưừứựửữüûñçỳýỵỷỹđ·/_,:;";
                var to = "aaaaaaaaaaaaaaaaaaeeeeeeeeeeeeiiiiiiioooooooooooooooooouuuuuuuuuuuuuncyyyyyd------";
                for (var i = 0, l = from.length; i < l; i++) {
                    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
                }
                return str.replace(/[^a-z0-9-]/g, '-').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^\-+|\-+$/g, "");
            }
            return this.each(function (countObject, obj) {
                if(opts.parent !== null){
                    $(opts.parent).keyup(function (){
                        var str = $(opts.parent).val();
                        $(obj).val(convertToSlug(str));
                    });
                }
                $(obj).blur(function () {
                    var str = $(this).val();
                    $(this).val(convertToSlug(str));
                });

            });
        }
    });
})(jQuery);
$('#t2').toSlug();