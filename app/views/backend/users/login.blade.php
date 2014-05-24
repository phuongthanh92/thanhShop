<!DOCTYPE html>
<html lang="en" class="login_page">
<head>
    <meta charset="utf-8">
    <meta name="robots" content="nofollow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> {{ $title }} - Administrator</title>
    <!-- Bootstrap framework -->
    {{ HTML::style('public/bootstrap/v2.3.1/css/bootstrap.min.css') }}
    {{ HTML::style('public/bootstrap/v2.3.1/css/bootstrap-responsive.min.css') }}
    <!-- theme color-->
    {{ HTML::style('public/css/backend/blue.css') }}
    <!-- tooltip -->
    {{ HTML::style('public/lib/qtip2/jquery.qtip.min.css') }}
    <!-- main styles -->
    {{ HTML::style('public/css/backend/style.css') }}
    <!-- Favicon -->
    <link rel="shortcut icon" href="{{{ asset('public/favicon.ico') }}}" />
    <!--[if lte IE 8]>
    {{ HTML::script('public/js/backend/ie/html5.js') }}
    {{ HTML::script('public/js/backend/ie/respond.min.js') }}
    <![endif]-->
</head>
<body>
<div class="login_box">
    {{ Form::open($frmLogin) }}
    <div class="top_b">Đăng nhập quản trị</div>
    @if($login_link !== '' && $errors->any())
    <div class="alert alert-block alert-error fade in">
        <a href="#" data-dismiss="alert" class="close">×</a>
        <ul>
            {{ implode('',$errors->all('<li>:message</li>')) }}
        </ul>
    </div>
    @endif
    <div class="cnt_b">
        <div class="formRow">
            <div class="input-prepend">
                <span class="add-on"><i class="icon-user"></i></span>
                {{ Form::text('username','',array('placeholder' => 'Tên tài khoản hoặc email','id'=>'username')) }}
            </div>
        </div>
        <div class="formRow">
            <div class="input-prepend">
                <span class="add-on"><i class="icon-lock"></i></span>
                {{ Form::password('password',array('placeholder' => 'Mật khẩu','id'=>'password')) }}
            </div>
        </div>
        <div class="formRow clearfix">

        </div>
    </div>
    <div class="btm_b clearfix">
        <button class="btn btn-inverse pull-right" type="submit">Đăng nhập</button>
    </div>
    {{ Form::close() }}
    {{ Form::open($frmPassword) }}
    <div class="top_b">Bạn không thể đăng nhập?</div>
    @if($pass_link !== '' && $errors->any())
    <div class="alert alert-block alert-error fade in">
        <a href="#" data-dismiss="alert" class="close">×</a>
        <ul>
            {{ implode('',$errors->all('<li>:message</li>')) }}
        </ul>
    </div>
    @endif
    @if(Session::has('forgot'))
    <div class="alert alert-success alert-block">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h4>{{ Session::get('forgot') }}</h4>
    </div>
    @endif
    <div class="cnt_b">
        <div class="formRow clearfix">
            <div class="input-prepend">
                <span class="add-on">@</span><input type="text" name="email" placeholder="Nhập email của bạn" />
            </div>
        </div>
    </div>
    <div class="btm_b tac">
        <button class="btn btn-inverse" type="submit">Lấy lại mật khẩu</button>
    </div>
    </form>
    <div class="links_b links_btm clearfix">
        <span class="linkform" {{ $pass_link }}><a href="#pass_form">Quên mật khẩu?</a></span>
        <span class="linkform" {{ $login_link }}><a href="#login_form">Đăng nhập</a></span>
    </div>
    @if(isset($success))
    <div class="alert alert-success alert-block">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h4>{{ $success }}</h4>
    </div>
    @endif
</div>
{{ HTML::script('public/js/backend/jquery.min.js') }}
{{ HTML::script('public/js/backend/jquery.actual.min.js') }}
{{ HTML::script('public/lib/validation/jquery.validate.min.js') }}
{{ HTML::script('public/bootstrap/v2.3.1/js/bootstrap.min.js') }}
{{ HTML::script('public/js/backend/project/login.js') }}
</body>
</html>
