jQuery(document).ready(function(){
    articles.init();
    project_slug.create('#title','#slug');
})
articles = {
    init: function(){
        this.delete();
    },
    delete: function(){
        $('.article-delete').each(function (index, elem){
            $(elem).click(function (e){
                e.preventDefault();
                $('#deleteMessage').html('Bạn có muốn xoá bài viết "' +$(elem).data('title')+ '" không?');
                $('#postValue').attr('value', $(elem).data('id'));
                $('#deleteModal').modal('toggle');
            });

        });
    }
}