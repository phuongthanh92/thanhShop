@extends('frontend.layouts.default')
@section('title')
{{ $title }} :: @parent
@stop
@section('content')


<section id="cart">
    <div class="container">
        <div class="tittle">
            Thanh toán
        </div>
        @if(count($carts)==0)
        <div class="carts-empty">
            <p>Giỏ hàng của bạn chưa có sản phẩm. <a href="{{ url() }}">Click vào đây</a> để tiếp tục mua sắm.</p>
        </div>
        @else
        <div class="process">
            <ul class="list-unstyled">
                <li class="active"><a href="{{ action('CartController@getIndex') }}">GIỎ HÀNG</a></li>
                <li><a href="javascript: void(0)">Chọn địa chỉ nhận hàng</a></li>
                <li><a href="javascript: void(0)">THANH TOÁN</a></li>
                <li><a href="javascript: void(0)">Hoàn thành</a></li>
            </ul>
        </div>
        <div id="info-cart">
            <div class="col-md-6">
                <h3>Đăng nhập</h3>
                {{ Form::open(array('action'=>'CustomerController@postLogin', 'role'=>'form', 'class'=>'col-md-10')) }}
                @if(Session::has('loginE'))
                <div class="has-error">
                    <p class="help-block"><b>{{Session::get('loginE')}}</b></p>
                </div>
                <div class="clearfix"></div>
                @endif
                <div class="form-group">
                    <label for="username" class="col-sm-12">Tên tài khoản</label>
                    <input type="text" class="form-control" value="{{Input::old('username')}}" id="username" name="username"
                           placeholder="Tên tài khoản hoặc email">
                </div>
                <div class="has-error">
                    <p class="help-block">{{$errors->first('username')}}</p>
                </div>
                <div class="clearfix"></div>
                <div class="form-group">
                    <label for="password" class="col-sm-12">Mật khẩu</label>
                    <input type="password" class="form-control" id="password" name="password" placeholder="Mật khẩu">
                </div>
                <div class="has-error">
                    <p class="help-block">{{$errors->first('password')}}</p>
                </div>
                <div class="clearfix"></div>
                <div class="checkbox">
                    <label class="col-sm-12">
                        <input type="checkbox" name="remember" value="1" checked="checked"> Ghi nhớ đăng nhập
                    </label>
                </div>
                <input type="hidden" name="checkout" value="1">
                <button type="submit" class="button">Đăng nhập</button>
                {{ Form::close() }}
            </div>
            <div class="col-md-6">
                <h3>Đăng ký tài khoản mới</h3>
                {{ Form::open(array('action'=>'CustomerController@postRegister', 'role'=>'form', 'class'=>'col-md-10'))
                }}
                <div class="form-group">
                    <p class="help-block">
                        Nếu bạn là khách hàng mới. Mời bạn nhập thông tin để tạo tài khoản
                    </p>
                </div>
                <div class="form-group">
                    <label for="reg_username" class="col-sm-12">Tên tài khoản</label>
                    <input type="text" name="username" class="form-control" id="reg_username">
                </div>
                <div class="form-group">
                    <label for="password" class="col-sm-12">Mật khẩu</label>
                    <input type="password" name="password" class="form-control" id="password">
                </div>
                <div class="form-group">
                    <label for="confirm" class="col-sm-12">Xác nhận mật khẩu</label>
                    <input type="password" class="form-control" id="confirm">
                </div>
                <div class="form-group">
                    <label for="reg_email" class="col-sm-12">Email</label>
                    <input type="text" name="email" class="form-control" id="reg_email">
                </div>
                <div class="form-group">
                    <label for="full_name" class="col-sm-12">Họ và tên</label>
                    <input type="text" name="full_name" class="form-control" id="full_name">
                </div>
                <div class="checkbox">
                    <label class="col-sm-12">
                        <input type="checkbox" name="newsletter" value="1" checked="checked"> Đăng ký nhận các tin mới
                    </label>
                </div>
                <button type="submit" class="button">Đăng ký</button>
                {{ Form::close() }}
            </div>
        </div>
        @endif
    </div>
</section>
@stop
