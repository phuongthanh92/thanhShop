<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="utf-8"/>
    <meta name="robots" content="noindex">
    <meta name="googlebot" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>
        @if(isset($title))
        {{ $title }} -
        @endif
        Administration
    </title>
    <!-- Bootstrap framework -->
    {{ HTML::style('public/bootstrap/v2.3.1/css/bootstrap.min.css') }}
    {{ HTML::style('public/bootstrap/v2.3.1/css/bootstrap-responsive.min.css') }}
    <!-- breadcrumbs-->
    {{ HTML::style('public/lib/jBreadcrumbs/css/BreadCrumb.css') }}
    <!-- tooltips-->
    {{ HTML::style('public/lib/qtip2/jquery.qtip.min.css') }}
    <!-- colorbox -->
    {{ HTML::style('public/lib/colorbox/colorbox.css') }}
    <!-- code prettify -->
    {{ HTML::style('public/lib/google-code-prettify/prettify.css') }}
    <!-- notifications -->
    {{ HTML::style('public/lib/sticky/sticky.css') }}
    <!-- splashy icons -->
    {{ HTML::style('public/img/splashy/splashy.css') }}
    <!-- gebo color theme-->
    {{ HTML::style('public/css/backend/blue.css', array('id' => 'link_theme')) }}
    {{ HTML::style('public/bootstrap/bootstrap3-dialog/css/bootstrap-dialog.min.css') }}
    <!-- main styles -->
    {{ HTML::style('public/css/backend/style.css') }}
    {{ HTML::style('public/css/backend/custom.css') }}
    <!-- Customer style -->
    @yield('styles')
    <!-- Favicon -->
    <link rel="shortcut icon" href="favicon.ico" />

    <!--[if lte IE 8]>
    {{ HTML::style('public/css/backend/ie.css') }}
    {{ HTML::script('public/js/backend/ie/html5.js') }}
    {{ HTML::script('public/js/backend/ie/respond.min.js') }}
    {{ HTML::script('public/lib/flot/excanvas.min.js') }}
    <![endif]-->
    <script>
        var backend = "{{ route('dashboard') }}";
        var baseUrl = "{{ url() }}/";
        var userId = "{{ Auth::user()->id }}";
        var username = "{{ Auth::user()->username }}";
        var session_id = "{{ Session::getId() }}";
        //* hide all elements & show preloader
//        document.documentElement.className += 'js';
    </script>

</head>
<body class="menu_hover">
<!--<div id="loading_layer" style="display:none"><img src="{{{ asset('public/img/ajax_loader.gif') }}}" alt="" /></div>-->
@include('backend.includes.switcher')
<div id="maincontainer" class="clearfix">
    <!-- header -->
    <header>
        @widget_admin_navigation
    </header>
    <!-- main content -->
    <div id="contentwrapper">
        <div class="main_content">
            <nav>
                <div id="jCrumbs" class="breadCrumb module">
                    <ul>
                        <li>{{ link_to_action('AdminDashboardController@getIndex', '', $parameters = array(),
                            array('class'=>'icon-home','title'=>'Dashboard')) }}
                        </li>
                        @yield('breadcrumb')
                    </ul>
                </div>
            </nav>
            <div class="row-fluid">
                <div class="span12">
                    @yield('content')
                </div>
            </div>
        </div>
        <!-- sidebar -->
        <a href="javascript:void(0)" class="sidebar_switch on_switch ttip_r" title="Hide Sidebar">Sidebar switch</a>
        @include('backend.includes.sidebar')
    </div>
</div>
<div class="clearfix" id="footer"></div>
@include('backend.layouts.tmpl')
<!--Jquery-->
{{ HTML::script('public/js/backend/jquery.min.js') }}
{{ HTML::script('public/js/backend/jquery-migrate.min.js') }}
<!-- smart resize event -->
{{ HTML::script('public/js/backend/jquery.debouncedresize.min.js') }}
<!-- hidden elements width/height -->
{{ HTML::script('public/js/backend/jquery.actual.min.js') }}
<!-- js cookie plugin -->
{{ HTML::script('public/js/backend/jquery_cookie.min.js') }}
<!-- main bootstrap js -->
{{ HTML::script('public/bootstrap/v2.3.1/js/bootstrap.min.js') }}
<!-- bootstrap plugins -->
{{ HTML::script('public/js/backend/bootstrap.plugins.min.js') }}
<!-- code prettifier -->
{{ HTML::script('public/lib/google-code-prettify/prettify.min.js') }}
<!-- tooltips -->
{{ HTML::script('public/lib/qtip2/jquery.qtip.min.js') }}
<!-- jBreadcrumbs -->
{{ HTML::script('public/lib/jBreadcrumbs/js/jquery.jBreadCrumb.1.1.min.js') }}
<!-- lightbox -->
{{ HTML::script('public/lib/colorbox/jquery.colorbox.min.js') }}
<!-- fix for ios orientation change -->
{{ HTML::script('public/js/backend/ios-orientationchange-fix.js') }}
<!-- scrollbar -->
{{ HTML::script('public/lib/antiscroll/antiscroll.js') }}
{{ HTML::script('public/lib/antiscroll/jquery-mousewheel.js') }}
<!-- to top -->
{{ HTML::script('public/lib/UItoTop/jquery.ui.totop.min.js') }}
<!-- mobile nav -->
{{ HTML::script('public/js/backend/selectNav.js') }}
<!-- common functions -->
{{ HTML::script('public/js/backend/gebo_common.js') }}
{{ HTML::script('public/lib/jquery-ui/jquery-ui-1.10.0.custom.min.js') }}
<!-- touch events for jquery ui-->
{{ HTML::script('public/js/backend/forms/jquery.ui.touch-punch.min.js') }}
<!-- multi-column layout -->
{{ HTML::script('public/js/backend/jquery.imagesloaded.min.js') }}
{{ HTML::script('public/js/backend/jquery.wookmark.js') }}
<!-- responsive table -->
{{ HTML::script('public/js/backend/jquery.mediaTable.min.js') }}
<!-- sortable/filterable list -->
{{ HTML::script('public/lib/list_js/list.min.js') }}
{{ HTML::script('public/lib/list_js/plugins/paging/list.paging.js') }}
<!--jQuery-Storage-API-->
{{ HTML::script('public/lib/jQuery-Storage-API/jquery.storageapi.min.js') }}
{{ HTML::script('public/js/backend/project/storage.js') }}
<!-- sticky messages -->
{{ HTML::script('public/lib/sticky/sticky.min.js') }}
<!-- jquery template -->
{{ HTML::script('public/lib/jquery-tmpl/jquery.tmpl.min.js') }}
{{ HTML::script('public/lib/jquery-tmpl/jquery.tmplPlus.min.js') }}
<!--jquery-dateFormat-->
{{ HTML::script('public/js/jquery/jquery-dateFormat.min.js') }}
<!--datepicker-->
{{ HTML::script('public/lib/datepicker/bootstrap-datepicker.min.js') }}
<!-- validate -->
{{ HTML::script('public/lib/validation/jquery.validate.min.js') }}
{{ HTML::script('public/lib/validation/additional-methods.js') }}
{{ HTML::script('public/lib/validation/localization/messages_vi.js') }}

{{ HTML::script('public/bootstrap/bootstrap3-dialog/js/bootstrap-dialog.min.js') }}
{{ HTML::script('public/js/backend/project/common.js') }}
{{ HTML::script('public/js/backend/project/my_sticker.js') }}
@yield('scripts')
<script>
    $(document).ready(function () {
        //* show all elements & remove preloader
        setTimeout('$("html").removeClass("js")', 1000);
    });
</script>
</body>
</html>