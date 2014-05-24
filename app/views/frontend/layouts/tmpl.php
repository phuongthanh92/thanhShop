<script id="tmpl-option" type="text/x-jquery-tmpl" xmlns="http://www.w3.org/1999/html">
<option value="${id}">${name}</option>
</script>
<li class="tmpl-viewed" style="display: none">
    <a>
        <img class="lazyOwl img-responsive" onerror="imgViewedError(this);" >
    </a>
</li>
<script id="tmpl-viewed" type="text/x-jquery-tmpl">
<li>
<a href="viewed/${slug}-${_id}" title="${name}">
    <img src="${image}" data-src="${image}" class="lazyOwl img-responsive" onerror="imgViewedError(this);" >
</a>
</li>
</script>
<script>
    var urlQuickView = "<?php echo action('ProductController@getIndex', array('san-pham', 'slug')); ?>";
</script>
<script id="tmpl-compare" type="text/x-jquery-tmpl">
<li>
    <div class="compare-product"  data-id="${_id}">
    <button type="button" data-id="${_id}" class="close compare-remove">&times;</button>
        <a href="compare/${slug}-${_id}">
            <span class="name-product">${name}</span>
        </a>
        <a href="compare/${slug}-${_id}">
            <img src="${image}" class="img-responsive" >
        </a>
    </div>
</li>

</script>
<script id="tmpl-post" type="text/x-jquery-tmpl">
<div class="col-md-4">
    <div class="post">
        <div class="image-post">
            <a href="bai-viet/post/${slug}/${id}"><img src="${image}" class="img-responsive"></a>
        </div>
        <div class="content-post">
            <h4><a href="bai-viet/post/${slug}/${id}">${title}</a></h4>
            <p>
                {{html $short_description }}
            </p>
            <div class="read-more">
                <a href="bai-viet/post/${slug}/${id}">Xem tiếp</a>
            </div>
        </div>
    </div>
</div>
</script>