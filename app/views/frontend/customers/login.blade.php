@extends('frontend.layouts.default')
@section('title')
{{ $title }} :: @parent
@stop
@section('content')
<div class="container">
    <div class="tittle">
        Đănh nhập
    </div>
    <div id="info-cart">
        <div class="col-md-6">
            {{ Form::open(array('action'=>'CustomerController@postLogin', 'role'=>'form', 'class'=>'col-md-10')) }}
            @if(Session::has('loginE'))
            <div class="has-error">
                <p class="help-block"><b>{{Session::get('loginE')}}</b></p>
            </div>
            <div class="clearfix"></div>
            @endif
            <div class="form-group">
                <label for="username" class="col-sm-12">Tài khoản</label>
                <div class="input-group pull-left">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input id="username" name="username" value="{{Input::old('username')}}" class="form-control" placeholder="Tên tài khoản hoặc email" type="text">
                </div>
            </div>
            <div class="has-error">
                <p class="help-block">{{$errors->first('username')}}</p>
            </div>
            <div class="clearfix"></div>
            <div class="form-group">
                <label for="password" class="col-sm-12">Mật khẩu</label>
                <div class="input-group pull-left">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                    <input id="password" name="password" class="form-control"
                           placeholder="Mật khẩu" type="password">
                </div>
            </div>
            <div class="has-error">
                <p class="help-block">{{$errors->first('password')}}</p>
            </div>
            <div class="clearfix"></div>
            <div class="form-group">
                <div class="checkbox">
                    <label class="col-sm-12">
                        <input type="checkbox" id="remember" name="remember"> Ghi nhớ đăng nhập
                    </label>
                </div>
            </div>
            <div class="form-group">
                <a href="{{action('FacebookController@getLogin')}}"><img src="{{url('public/img/facebook_active_600.png')}}"></a>
            </div>
            <button type="submit" class="button">Đăng nhập</button>
            {{ Form::close() }}
        </div>
    </div>
</div>
@stop
