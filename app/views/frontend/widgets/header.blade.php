<header>
    <div class="back-top">
        <a href="#"><span class="glyphicon glyphicon-hand-up"></span> </a>
    </div>
    @if(!isset($user) || empty($user))
    <div id="notLogged">
    <div class="modal fade" id="frmLogin" tabindex="-1" role="dialog" aria-labelledby="Đăng nhập" aria-hidden="true">
        <form class="login-form" id="formLogin" action="{{ action('CustomerController@postLogin') }}"
            method="post">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="myModalLabel">Đăng nhập</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="username" class="col-sm-12">Tài khoản</label>
                            <div class="input-group pull-left">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input id="username" name="username" class="form-control" placeholder="Tên tài khoản hoặc email" type="text">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-sm-12">Mật khẩu</label>
                            <div class="input-group pull-left">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                <input id="password" name="password" class="form-control"
                                    placeholder="Mật khẩu" type="password">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="checkbox">
                                <label class="col-sm-12">
                                    <input type="checkbox" id="remember" name="remember"> Ghi nhớ đăng nhập
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="checkbox">
                                <a href="{{action('FacebookController@getLogin')}}"><img src="{{url('public/img/facebook_active_600.png')}}"></a>
                            </div>
                        </div>
                        
                        <div class="form-group">
<!--                            <a href="#frmForgot" data-toggle="modal" data-target="#frmForgot">Quên mật khẩu</a>-->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="reset" data-dismiss="modal">Huỷ</button>
                        <button type="submit" id="submitLogin" data-loading-text="Login...">Đăng
                            nhập
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div class="modal fade" id="frmForgot" tabindex="-1" role="dialog" aria-labelledby="Quên mật khẩu" aria-hidden="true">
        <form class="forgot-form" id="formForgot" action="{{ action('CustomerController@postForgot') }}"
            method="post">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="myForgotLabel">Quên mật khẩu</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="password">Email</label>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                <input name="email" class="form-control"
                                    placeholder="Nhập email của bạn" type="password">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Huỷ</button>
                        <button type="submit" class="btn btn-primary" id="submitForgot" data-loading-text="Login...">Lấy lại mật khẩu
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div class="modal fade" id="frmRegister" tabindex="-1" role="dialog" aria-labelledby="Đăng ký" aria-hidden="true">
        <form class="register-form" role="form" id="formRegister" action="{{ action('CustomerController@postRegister') }}" method="post">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="myLabelRegister">Đăng ký tài khoản</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="reg_username" class="col-sm-12">Tên tài khoản</label>
                            <input id="reg_username" name="username" class="form-control col-md-12" type="text">
                        </div>
                        <div class="form-group">
                            <label for="reg_password" class="col-sm-12">Mật khẩu</label>
                            <input id="reg_password" name="password" class="form-control" type="password">
                        </div>
                        <div class="form-group">
                            <label for="reg_confirm" class="col-sm-12">Xác nhận mật khẩu</label>
                            <input id="reg_confirm" name="confirm" class="form-control" type="password">
                        </div>
                        <div class="form-group">
                            <label for="email" class="col-sm-12">Email</label>
                            <input id="reg_email" name="email" class="form-control" type="text">
                        </div>
                        <div class="form-group">
                            <label for="reg_full_name" class="col-sm-12">Họ và tên</label>
                            <input id="reg_full_name" name="full_name" class="form-control" type="text">
                        </div>
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="reg_newsletter" class="col-sm-12">
                                    <input type="checkbox" id="reg_newsletter" name="newsletter" checked="checked" > Đăng ký nhận bản tin mới
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" data-dismiss="modal">Huỷ</button>
                        <button type="submit" id="submitRegister" data-loading-text="Register...">Đăng ký
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    </div>
    @endif

    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <div class="top-link">
                    <ul class="list-unstyled">
                        @if(isset($user) || !empty($user))
                        <li>
                            <a href="{{ action('CustomerController@getProfile') }}" title="{{ $user->full_name }}">
                                Xin chào: {{ $user->username }}
                            </a>
                        </li>
                        <li>
                            <a href="{{ action('CustomerController@getLogout') }}">Thoát</a>
                        </li>
                        @else
                        <li><a href="{{ action('CustomerController@getLogin') }}" class="login-link">Đăng nhập</a></li>
                        <li><a href="{{ action('CustomerController@getRegister') }}" class="register-link">Đăng ký</a>
                        </li>
                        @endif
                        <li>
                            <a href="{{ action('CartController@getIndex') }}">
                                Giỏ hàng (<strong id="cart-total">{{Cart::totalItems()}}</strong>)
                            </a>
                        </li>
                        <li>
                            <a href="{{ action('FavoriteController@getIndex') }}" class="favorite-link">
                                Yêu thích(<strong id="wishList-total">@if(!empty($favorite)){{$favorite}}@else0@endif</strong>)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <div id="logo">
                    <a href="{{ url('/') }}">
                        <img src="{{ asset('public/img/logo.png') }}" alt="Logo">
                    </a>
                </div>
            </div>
            <div class="col-md-5">
                <div class="search-box">
                    <form id="frmSearch" action="{{ action('ProductController@getSearch') }}" method="get">
                        {{ Form::text('keyword', $keyword, array('placeholder' => "Tìm kiếm sản phẩm")) }}
                        <button type="submit" id="submitSearch"><span class="glyphicon glyphicon-search"></span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</header>