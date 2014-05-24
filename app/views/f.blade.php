<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="utf-8"/>
    <meta name="robots" content="noindex">
    <meta name="googlebot" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>
        Thêm sản phẩm mới -
        Administration
    </title>
    <!-- Bootstrap framework -->
    <link media="all" type="text/css" rel="stylesheet"
          href="http://project.hn/public/bootstrap/v2.3.1/css/bootstrap.min.css">
    <link media="all" type="text/css" rel="stylesheet"
          href="http://project.hn/public/bootstrap/v2.3.1/css/bootstrap-responsive.min.css">
    <!-- breadcrumbs-->
    <link media="all" type="text/css" rel="stylesheet"
          href="http://project.hn/public/lib/jBreadcrumbs/css/BreadCrumb.css">
    <!-- tooltips-->
    <link media="all" type="text/css" rel="stylesheet" href="http://project.hn/public/lib/qtip2/jquery.qtip.min.css">
    <!-- colorbox -->
    <link media="all" type="text/css" rel="stylesheet" href="http://project.hn/public/lib/colorbox/colorbox.css">
    <!-- code prettify -->
    <link media="all" type="text/css" rel="stylesheet"
          href="http://project.hn/public/lib/google-code-prettify/prettify.css">
    <!-- notifications -->
    <link media="all" type="text/css" rel="stylesheet" href="http://project.hn/public/lib/sticky/sticky.css">
    <!-- splashy icons -->
    <link media="all" type="text/css" rel="stylesheet" href="http://project.hn/public/img/splashy/splashy.css">
    <!-- gebo color theme-->
    <link id="link_theme" media="all" type="text/css" rel="stylesheet"
          href="http://project.hn/public/css/backend/blue.css">
    <link media="all" type="text/css" rel="stylesheet"
          href="http://project.hn/public/bootstrap/bootstrap3-dialog/css/bootstrap-dialog.min.css">
    <!-- main styles -->
    <link media="all" type="text/css" rel="stylesheet" href="http://project.hn/public/css/backend/style.css">
    <link media="all" type="text/css" rel="stylesheet" href="http://project.hn/public/css/backend/custom.css">
    <!-- Customer style -->
    <!-- dynatree -->
    <link media="all" type="text/css" rel="stylesheet"
          href="http://project.hn/public/lib/dynatree/src/skin/ui.dynatree.css">
    <!-- wizard -->
    <link media="all" type="text/css" rel="stylesheet" href="http://project.hn/public/lib/stepy/jquery.stepy.css">
    <script>
        var checkCode = "http://project.hn/admin/products/check-code";
        var checkSlug = "http://project.hn/admin/products/check-slug";
        var getProducts = "http://project.hn/admin/products/product";
        var productTotal = "19";
        var related_products = null;
        var imagesRules = {
            required: true,
            accept: 'image/*'
        };
    </script>
    <!-- Favicon -->
    <link rel="shortcut icon" href="favicon.ico"/>

    <!--[if lte IE 8]>
    <link media="all" type="text/css" rel="stylesheet" href="http://project.hn/public/css/backend/ie.css">
    <script src="http://project.hn/public/js/backend/ie/html5.js"></script>
    <script src="http://project.hn/public/js/backend/ie/respond.min.js"></script>
    <script src="http://project.hn/public/lib/flot/excanvas.min.js"></script>
    <![endif]-->
    <script>
        var backend = "http://project.hn/admin";
        var baseUrl = "http://project.hn/";
        var userId = "1";
        var username = "admin";
        var session_id = "2c9aaca90d1b007623f7caf814a538ffa1b79f91";
        //* hide all elements & show preloader
        //        document.documentElement.className += 'js';
    </script>

</head>
<body class="menu_hover">
<!--<div id="loading_layer" style="display:none"><img src="http://project.hn/public/img/ajax_loader.gif" alt="" /></div>-->

<!-- header -->


<!-- main content -->
<div id="contentwrapper">
<div class="main_content">
<nav>
    <form>
        <input name="url" value="{{Input::get('url')}}" class="span11">
        <button type="submit" class="btn">GET</button>

        <label><input type="checkbox" checked name="save">Lưu ảnh</label>
    </form>
</nav>
<div class="row-fluid">
<div class="span12">
<div class="row-fluid heading">
    <div class="span12">
        <h3>
            Thêm sản phẩm
        </h3>
    </div>
</div>
@include('backend.includes.errors')
<div>{{Session::get('product_message')}}</div>
<div class="row-fluid">
<form method="POST" action="http://project.hn/admin/products/create1/530f6f5b968384680c000029" accept-charset="UTF-8"
      id="frmProduct " class="stepy-form form-horizontal">
<fieldset class="step" title="Thông tin chung">
    <legend>Thông tin chung</legend>
    <div class="control-group">
        <label for="name" class="control-label">
            Tên sản phẩm <span class="f_req"> * </span> :
        </label>

        <div class="controls">
            <input id="name" class="span6" value="{{$data['name']}}" name="name" type="text"></div>
    </div>
    <div class="control-group">
        <label for="code" class="control-label">Mã sản phẩm <span class="f_req"> * </span> :
        </label>

        <div class="controls">
            <input id="code" class="span6" value="{{$data['code']}}" name="code" type="text"></div>
    </div>
    <div class="control-group">
        <label for="slug" class="control-label">Đường dẫn thân thiện <span class="f_req"> * </span> :
        </label>

        <div class="controls">
            <input id="slug" class="span6" value="{{$data['slug']}}" name="slug" type="text"></div>
    </div>
    <div class="control-group">
        <label for="price" class="control-label">Giá <span class="f_req"> * </span> </label>

        <div class="controls">
            <input id="price" class="price" value="{{$data['price']}}" name="price" type="text"></div>
    </div>
    <div class="control-group">
        <label for="special_price" class="control-label">Giá đặc biệt </label>

        <div class="controls">
            <input id="special_price" class="price" value="{{$data['po']}}" name="special_price" type="text"></div>
    </div>
    <div class="control-group">
        <label for="special_from_date" class="control-label">Giá đặc biệt từ ngày </label>

        <div class="controls">
            <div class="input-append date" data-date-format="dd/mm/yyyy">
                <input id="special_from_date" class="datepicker" name="special_from_date" type="text"> <span
                    class="add-on"><i class="splashy-calendar_day"></i></span>
            </div>
        </div>
    </div>
    <div class="control-group">
        <label for="special_to_date" class="control-label">Giá đặc biệt đến ngày </label>

        <div class="controls">
            <div class="input-append date" data-date-format="dd/mm/yyyy">
                <input id="special_to_date" class="datepicker" name="special_to_date" type="text"> <span
                    class="add-on"><i class="splashy-calendar_day"></i></span>
            </div>
        </div>
    </div>
    <div class="control-group">
        <label for="status" class="control-label">Trạng thái :
        </label>

        <div class="controls">
            <select name="status">
                <option value="1">Hiển thị</option>
                <option value="0">Ẩn</option>
            </select></div>
    </div>
    <div class="control-group">
        <label for="short_description" class="control-label">Mô tả ngắn gọn :
        </label>

        <div class="controls">
            <textarea name="short_description" id="short_description" cols="10" rows="4"
                      class=" span10 wysiwg"></textarea>
        </div>
    </div>
    <div class="control-group">
        <label for="description" class="control-label">Mô tả :
        </label>

        <div class="controls">
            <textarea name="description" id="description" cols="10" rows="4"
                      class=" span10 wysiwg">{{$data['content']}}</textarea>
        </div>
    </div>
    <div class="control-group">
        <label for="color" class="control-label">Màu sắc :
        </label>

        <div class="controls">
            <div>
                <div class="span2">
                    <label class="checkbox">
                        <input name="color[]" type="checkbox" value="red"> Đỏ </label>
                </div>
            </div>
            <div>
                <div class="span2">
                    <label class="checkbox">
                        <input name="color[]" type="checkbox" value="white"> Trắng </label>
                </div>
            </div>
            <div>
                <div class="span2">
                    <label class="checkbox">
                        <input name="color[]" type="checkbox" value="yellow"> Vàng </label>
                </div>
            </div>
            <div>
                <div class="span2">
                    <label class="checkbox">
                        <input name="color[]" type="checkbox" value="black"> Đen </label>
                </div>
            </div>
            <div>
                <div class="span2">
                    <label class="checkbox">
                        <input name="color[]" type="checkbox" value="green"> Xanh lá cây </label>
                </div>
            </div>
            <div>
                <div class="span2">
                    <label class="checkbox">
                        <input name="color[]" type="checkbox" value="blue"> Xanh da trời </label>
                </div>
            </div>
            <div>
                <div class="span2">
                    <label class="checkbox">
                        <input name="color[]" type="checkbox" value="orange"> Cam </label>
                </div>
            </div>
            <div>
                <div class="span2">
                    <label class="checkbox">
                        <input name="color[]" type="checkbox" value="violet"> Tím </label>
                </div>
            </div>
            <div>
                <div class="span2">
                    <label class="checkbox">
                        <input name="color[]" type="checkbox" value="orther"> Khác </label>
                </div>
            </div>
        </div>
    </div>
    <div class="control-group">
        <label for="size" class="control-label">Size :
        </label>

        <div class="controls">
            <input id="size" class="span6" value="{{$data['size']}}" name="size" type="text"></div>
    </div>
    <div class="control-group">
        <label for="hot" class="control-label">Hot :
        </label>

        <div class="controls">
            <select name="hot">
                <option value="0">Kh&ocirc;ng</option>
                <option value="1">C&oacute;</option>
            </select></div>
    </div>
    <div class="control-group">
        <label class="control-label">
            Số lượng
            <span class="f_req"> * </span> :
        </label>

        <div class="controls">
            <input id="quantity" class="integer" name="quantity" type="text" value="{{$data['qty']}}"></div>
    </div>
    <div class="control-group">
        <label class="control-label">
            Kho hàng
            <span class="f_req"> * </span> :
        </label>

        <div class="controls">
            <select name="stock">
                <option value="1">C&ograve;n h&agrave;ng</option>
                <option value="0">Hết h&agrave;ng</option>
            </select></div>
    </div>

    <div class="control-group">
        @foreach($data['images'] as $tmpi)
        <div style="display: inline; float: left">
            <label style="display: inline">
                <input type="checkbox" name="image[]" value="{{$tmpi}}" checked>
                <img src="{{$tmpi}}" style="display: inline; width: 100px; height: 100px">
            </label>
        <div>
        @endforeach
       <div style="clear:both"></div>
    </div>
</fieldset>
<fieldset class="step" title="Danh mục">
    <legend>Danh mục sản phẩm</legend>
    <div class="row-fluid">
        <div class="control-group">
            <label class="control-label">Chọn danh mục sản phẩm</label>

            <div class="controls" id="tree">

                <ul class="tree">
                    <li id="1" class="expanded">Thời trang công sở
                        <ul class="tree">
                            <li id="4" class="expanded">Dành cho nam</li>
                            <li id="6" class="expanded">Dành cho nữ</li>
                        </ul>
                    </li>
                    <li id="2" class="expanded">Thời trang dạo phố
                        <ul class="tree">
                            <li id="5" class="expanded">Dành cho nam</li>
                            <li id="8" class="expanded">Dành cho nữ</li>
                        </ul>
                    </li>
                    <li id="9" class="expanded">Thời trang dạ hội
                        <ul class="tree">
                            <li id="12" class="expanded">Dành cho nam</li>
                            <li id="7" class="expanded">Dành cho nữ</li>
                        </ul>
                    </li>
                    <li id="10" class="expanded">Đồ ngủ
                        <ul class="tree">
                            <li id="13" class="expanded">Dành cho nam</li>
                            <li id="11" class="expanded">Dành cho nữ</li>
                        </ul>
                    </li>
                    <li id="3" class="expanded">Phụ kiện</li>
                </ul>
                <input type="hidden" id="category" name="category">
            </div>
        </div>
    </div>
</fieldset>
<fieldset title="Sản phẩm liên quan">
    <legend>Sản phẩm liên quan</legend>
    <div class="row-fluid">
        <div class="control-group">
            <a class="back-top">Back to Bottom</a>
            <table class="table table-striped" id="products">
                <thead>
                <tr>
                    <th class="text-center">Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Nhóm sản phẩm</th>
                    <th>Trạng thái</th>
                    <th>Giá (VNĐ)</th>
                </tr>
                </thead>
                <tbody id="listRelated">
                <?php $products = Product::take(100)->orderBy('created_at', 'DESC')->get(); $i =0; ?>
                @foreach($products as $product)
                <tr>
                    <td class="text_center">
                        <label>
                            {{++$i;}}
                            <input type="checkbox" name="related_products[]" value="{{ $product->_id }}">
                            {{ $product->code }}
                        </label>

                    </td>
                    <td>{{ $product->name }}</td>
                    <td>{{ $product->groupAttribute['name'] }}</td>
                    <td>@if($product->status ==1 ) Hiển thị @else Ẩn @endif</td>
                    <td>{{ number_format($product->price,0,',','.') }}</td>
                </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
</fieldset>
<input id="submit" type="submit" class="finish" value="Thêm mới">
</form>
</div>
<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-header">
        <h3 id="myModalLabel">Đang gửi dữ liệu</h3>
    </div>
    <div class="modal-body">
        <div>
            <div class="ui-progress-bar ui-container" id="progress_bar">
                <div class="ui-progress" id="progressbar" style="width: 0%;">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-footer">
        <div id="back_to_bottom"></div>
    </div>
</div>
</form></div>
</div>
</div>
</div>
<!-- sidebar -->



</div>
</div>
<div class="clearfix" id="footer"></div>

<!--Jquery-->
<script src="http://project.hn/public/js/backend/jquery.min.js"></script>
<script src="http://project.hn/public/js/backend/jquery-migrate.min.js"></script>
<!-- smart resize event -->
<script src="http://project.hn/public/js/backend/jquery.debouncedresize.min.js"></script>
<!-- hidden elements width/height -->
<script src="http://project.hn/public/js/backend/jquery.actual.min.js"></script>
<!-- js cookie plugin -->
<script src="http://project.hn/public/js/backend/jquery_cookie.min.js"></script>
<!-- main bootstrap js -->
<script src="http://project.hn/public/bootstrap/v2.3.1/js/bootstrap.min.js"></script>
<!-- bootstrap plugins -->
<script src="http://project.hn/public/js/backend/bootstrap.plugins.min.js"></script>
<!-- code prettifier -->
<script src="http://project.hn/public/lib/google-code-prettify/prettify.min.js"></script>
<!-- tooltips -->
<script src="http://project.hn/public/lib/qtip2/jquery.qtip.min.js"></script>
<!-- jBreadcrumbs -->
<script src="http://project.hn/public/lib/jBreadcrumbs/js/jquery.jBreadCrumb.1.1.min.js"></script>
<!-- lightbox -->
<script src="http://project.hn/public/lib/colorbox/jquery.colorbox.min.js"></script>
<!-- fix for ios orientation change -->
<script src="http://project.hn/public/js/backend/ios-orientationchange-fix.js"></script>
<!-- scrollbar -->
<script src="http://project.hn/public/lib/antiscroll/antiscroll.js"></script>
<script src="http://project.hn/public/lib/antiscroll/jquery-mousewheel.js"></script>
<!-- to top -->
<script src="http://project.hn/public/lib/UItoTop/jquery.ui.totop.min.js"></script>
<!-- mobile nav -->
<script src="http://project.hn/public/js/backend/selectNav.js"></script>
<!-- common functions -->
<script src="http://project.hn/public/js/backend/gebo_common.js"></script>
<script src="http://project.hn/public/lib/jquery-ui/jquery-ui-1.10.0.custom.min.js"></script>
<!-- touch events for jquery ui-->
<script src="http://project.hn/public/js/backend/forms/jquery.ui.touch-punch.min.js"></script>
<!-- multi-column layout -->
<script src="http://project.hn/public/js/backend/jquery.imagesloaded.min.js"></script>
<script src="http://project.hn/public/js/backend/jquery.wookmark.js"></script>
<!-- responsive table -->
<script src="http://project.hn/public/js/backend/jquery.mediaTable.min.js"></script>
<!-- sortable/filterable list -->
<script src="http://project.hn/public/lib/list_js/list.min.js"></script>
<script src="http://project.hn/public/lib/list_js/plugins/paging/list.paging.js"></script>
<!--jQuery-Storage-API-->
<script src="http://project.hn/public/lib/jQuery-Storage-API/jquery.storageapi.min.js"></script>
<script src="http://project.hn/public/js/backend/project/storage.js"></script>
<!-- sticky messages -->
<script src="http://project.hn/public/lib/sticky/sticky.min.js"></script>
<!-- jquery template -->
<script src="http://project.hn/public/lib/jquery-tmpl/jquery.tmpl.min.js"></script>
<script src="http://project.hn/public/lib/jquery-tmpl/jquery.tmplPlus.min.js"></script>
<!--jquery-dateFormat-->
<script src="http://project.hn/public/js/jquery/jquery-dateFormat.min.js"></script>
<!--datepicker-->
<script src="http://project.hn/public/lib/datepicker/bootstrap-datepicker.min.js"></script>
<!-- validate -->
<script src="http://project.hn/public/lib/validation/jquery.validate.min.js"></script>
<script src="http://project.hn/public/lib/validation/additional-methods.js"></script>
<script src="http://project.hn/public/lib/validation/localization/messages_vi.js"></script>

<script src="http://project.hn/public/bootstrap/bootstrap3-dialog/js/bootstrap-dialog.min.js"></script>
<script src="http://project.hn/public/js/backend/project/common.js"></script>
<script src="http://project.hn/public/js/backend/project/my_sticker.js"></script>
<!--upload-->
<!--counter-->
<script src="http://project.hn/public/js/backend/forms/jquery.counter.min.js"></script>
<script src="http://project.hn/public/js/backend/gebo_gallery.js"></script>
<!-- TinyMce editor -->
<script src="http://project.hn/public/lib/tinymce/tinymce.min.js"></script>
<!--Responsive File manager-->
<script src="http://project.hn/public/file-manager/filemanager/plugin.min.js"></script>
<script src="http://project.hn/public/file-manager/tinymce/plugins/responsivefilemanager/plugin.min.js"></script>
<script src="http://project.hn/public/js/backend/project/tinymce-file-manager.js"></script>
<!--dynatree-->
<script src="http://project.hn/public/lib/dynatree/dist/jquery.dynatree.min.js"></script>
<script src="http://project.hn/public/js/backend/forms/jquery.ui.touch-punch.min.js"></script>
<!-- wizard -->

<!--products-->
<script src="http://project.hn/public/js/jquery/jquery.form.min.js"></script>
<script src="http://project.hn/public/js/jquery/jquery.number.min.js"></script>
<script src="http://project.hn/public/js/backend/project/slug.js"></script>
<script src="http://project.hn/public/lib/stepy/jquery.stepy.min.js"></script>

<script src="http://project.hn/public/js/backend/project/my_product.js"></script>

<script>
    $(document).ready(function () {
        //* show all elements & remove preloader
        setTimeout('$("html").removeClass("js")', 1000);
    });
    $(document).ready(function() {
        /* back-to-top Button */

        $('.back-top').click(function() {
            $('html, body').stop().animate({
                scrollTop: 100000
            }, 500);
        });




    });
</script>
</body>
</html>