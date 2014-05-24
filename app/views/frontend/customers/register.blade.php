@extends('frontend.layouts.default')
@section('title')
{{ $title }} :: @parent
@stop
@section('breadcrumb')
<li>Đăng ký tài khoản</li>
@stop
@section('content')
<section id="cart">
    <div class="container">
            <div class="col-md-6">
                <h3>Đăng ký tài khoản mới</h3>
                {{ Form::open(array('action'=>'CustomerController@postRegister', 'role'=>'form', 'class'=>'col-md-10'))
                }}
                <div class="form-group">
                    <p class="help-block">
                        Nếu bạn đã có tài khoản. Mời bạn {{link_to_action('CustomerController@getLogin', 'click vào đây')}} để đăng nhập.

                    </p>
                </div>
                <div class="form-group">
                    <label for="reg_username" class="col-sm-12">Tên tài khoản</label>
                    <input type="text" name="username" value="{{Input::old('username')}}" class="form-control" id="reg_username">
                </div>
                <div class="has-error">
                    <p class="help-block">{{$errors->first('username')}}</p>
                </div>
                <div class="clearfix"></div>
                <div class="form-group">
                    <label for="password" class="col-sm-12">Mật khẩu</label>
                    <input type="password" name="password" class="form-control" id="password">
                </div>
                <div class="has-error">
                    <p class="help-block">{{$errors->first('password')}}</p>
                </div>
                <div class="clearfix"></div>
                <div class="form-group">
                    <label for="confirm" class="col-sm-12">Xác nhận mật khẩu</label>
                    <input type="password" class="form-control" name="confirm" id="confirm">
                </div>
                <div class="has-error">
                    <p class="help-block">{{$errors->first('confirm')}}</p>
                </div>
                <div class="clearfix"></div>
                <div class="form-group">
                    <label for="reg_email" class="col-sm-12">Email</label>
                    <input type="text" name="email" value="{{Input::old('email')}}" class="form-control" id="reg_email">
                </div>
                <div class="has-error">
                    <p class="help-block">{{$errors->first('email')}}</p>
                </div>
                <div class="clearfix"></div>
                <div class="form-group">
                    <label for="full_name" class="col-sm-12">Họ và tên</label>
                    <input type="text" name="full_name" value="{{Input::old('full_name')}}" class="form-control" id="full_name">
                </div>
                <div class="has-error">
                    <p class="help-block">{{$errors->first('full_name')}}</p>
                </div>
                <div class="clearfix"></div>
                <div class="checkbox">
                    <label class="col-sm-12">
                        <input type="checkbox" name="newsletter" value="1" checked="checked"> Đăng ký nhận các tin mới
                    </label>
                </div>
                <button type="submit" class="button">Đăng ký</button>
                {{ Form::close() }}
            </div>
        </div>
    </div>
</section>
@stop
