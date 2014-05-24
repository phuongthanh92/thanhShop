<!DOCTYPE html>
<html lang="vi">
<head>
    <!-- Website Title -->
    <title>
        @section('title')
<?php
$setting = json_decode(File::get(app_path('database/setting.json')));
if(isset($setting->meta_title)) echo $setting->meta_title;
?>
        @show
    </title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="icon" href="{{ asset('public/img/logo-min.png') }}" type="image/x-icon"/>
    <!-- Meta data for SEO -->
    @yield('meta')
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style>
        <?php if(Agent::isMobile() || Agent::isMobile()){echo '.back-top{display:none}';} ?>
    </style>
    {{ HTML::style('public/bootstrap/css/bootstrap.min.css') }}
    {{ HTML::style('public/bootstrap/css/bootstrap-theme.min.css') }}
    {{ HTML::style('public/bootstrap/bootstrap3-dialog/css/bootstrap-dialog.min.css') }}

    {{ HTML::style('public/css/tinycarousel.css') }}
    {{ HTML::style('public/css/multizoom.css') }}
    {{ HTML::style('public/css/owl.theme.css') }}
    {{ HTML::style('public/css/owl.carousel.css') }}

    {{ HTML::style('public/css/sticky.css') }}

    {{ HTML::style('public/css/style.css') }}
    {{ HTML::style('public/css/custom.css') }}

    <script>
        function setUrl(str){return "{{ url('/') }}/" + str;}
        var current_path = "{{url(Request::segment(1))}}"
        var provinces = "{{ action('AddressController@postProvinces') }}";
        var districts = "{{ action('AddressController@postDistricts') }}";
        var urlFull = "{{URL::full()}}";
        <?php
            $desktop = false;$tablet = false; $mobile= false;
            if(Agent::isMobile()){
                $mobile = true;
            }elseif(Agent::isTablet()){
                $tablet = true;
            }else{
            $desktop = true;
            }
            if($desktop){
                echo 'var desktop = true;';
            }else{
            echo 'var desktop = false;';
            }
            if($tablet){
                echo 'var tablet = true;';
            }else{
            echo 'var tablet = false;';
            }
            if($mobile){
                echo 'var mobile = true;';
            }else{
            echo 'var mobile = false;';
            }
        ?>
//        alert(desktop); alert(tablet);alert(mobile);
    </script>
</head>
<body>
<!-- start header -->
@widget_header
<!-- end header -->
<div class="container">
    <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="#navigation">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse no-script" id="navigation" style="height: 1px;">
                @widget_navigation
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
</div>
@if(!isset($breadcrumb) || $breadcrumb !== false)
<section id="breadcrumb" class="clearfix">
    <div class="container">
        <ol class="breadcrumb">
            <li><a title="Return to Home" href="{{ url('/') }}">Trang chủ</a></li>
            @yield('breadcrumb')
        </ol>
    </div>
</section>
@endif
<div id="mainContent">
    @yield('content')
</div>
<footer>
    @widget_footer
</footer>
<div id="ajaxProcess"></div>
<!-- quick-viewed -->
<div id="tallModal" class="modal modal-wide fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title"><span id="quick-view-title">Xem nhanh sản phẩm </span></h4>
            </div>
            <div class="modal-body">
                <div id="quick-view-content">
                    <p style="text-align: center; padding: 20px"><img src="{{ url('public/img/wait.gif') }}" alt="Loading..."></p>
                </div>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<!-- end quick-viewed -->
@include('frontend/layouts.tmpl')
<!-- add javascript-->
{{ HTML::script('public/js/jquery/jquery-1.11.0.min.js') }}
{{ HTML::script('public/js/jquery/jquery-1.11.0.min.map') }}
<!-- jquery template -->
{{ HTML::script('public/lib/jquery-tmpl/jquery.tmpl.min.js') }}
{{ HTML::script('public/lib/jquery-tmpl/jquery.tmplPlus.min.js') }}

{{ HTML::script('public/js/navigation_convert_bootstrap.js') }}
{{ HTML::script('public/bootstrap/js/bootstrap.min.js') }}
{{ HTML::script('public/bootstrap/js/bootstrap-hover-menu.js') }}
{{ HTML::script('public/bootstrap/bootstrap3-dialog/js/bootstrap-dialog.min.js') }}
{{ HTML::script('public/js/multizoom.js') }}
{{ HTML::script('public/js/owl.carousel.js') }}
{{ HTML::script('public/js/jquery.tinycarousel.min.js') }}
{{ HTML::script('public/js/sticky.js') }}
<!--Storage-->
{{ HTML::script('public/lib/jQuery-Storage-API/jquery.storageapi.min.js') }}
<!-- validate -->
{{ HTML::script('public/lib/stepy/jquery.stepy.min.js') }}
{{ HTML::script('public/lib/validation/jquery.validate.min.js') }}
{{ HTML::script('public/lib/validation/additional-methods.js') }}
{{ HTML::script('public/lib/validation/localization/messages_vi.js') }}

{{ HTML::script('public/js/jquery/jquery.number.min.js') }}
{{ HTML::script('public/js/jcarousellite_1.0.1.min.js') }}
{{ HTML::script('public/js/style.js') }}
{{ HTML::script('public/js/my_project.js') }}
{{ HTML::script('public/js/my_cart.js') }}
{{ HTML::script('public/js/compare.js') }}
{{ HTML::script('public/js/address.js') }}

@yield('scripts')

</body>
</html>