jQuery(document).ready(function (){
    faq.init();
})
faq = {
    init  : function (){
        this.editorFull();
    },
    editorFull: function (){
        tinymce.init({
            selector                 : ".tinyMceFile", theme: "modern",
            plugins                  : [
                "advlist autolink link image lists charmap print preview hr anchor pagebreak", "searchreplace wordcount visualblocks visualchars insertdatetime media nonbreaking", "table contextmenu directionality emoticons paste textcolor responsivefilemanager"
            ],
            toolbar1                 : "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect",
            toolbar2                 : "| responsivefilemanager | link unlink anchor | image media | forecolor backcolor  | print preview code ",
            image_advtab             : true,
            external_filemanager_path: baseUrl + "public/file-manager/filemanager/",
            filemanager_title        : "Filemanager",
            external_plugins         : { "filemanager": "filemanager/plugin.min.js"}
        });
        tinymce.init({
            selector                 : "#description", theme: "modern",
            plugins                  : [
                "advlist autolink link image lists charmap print preview hr anchor pagebreak", "searchreplace wordcount visualblocks visualchars insertdatetime media nonbreaking", "table contextmenu directionality emoticons paste textcolor responsivefilemanager"
            ],
            toolbar1                 : "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect",
            toolbar2                 : "| responsivefilemanager | link unlink anchor | image media | forecolor backcolor  | print preview code ",
            image_advtab             : true,
            external_filemanager_path: baseUrl + "public/file-manager/filemanager/",
            filemanager_title        : "Filemanager",
            external_plugins         : { "filemanager": "filemanager/plugin.min.js"}
        });
        tinymce.init({
            selector                 : "#short_description", theme: "modern",
            toolbar1                 : "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect | link unlink anchor | image media | forecolor backcolor "
        });
    }
}

