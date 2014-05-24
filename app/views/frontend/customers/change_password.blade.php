@extends('frontend.layouts.default')
@section('title')
{{ $title }}  :: @parent
@stop
@section('breadcrumb')
<li>{{ link_to_action('CustomerController@getProfile', 'Thông tin cá nhân') }} </li>
<li>Đổi mật khẩu</li>
@stop

@section('content')
<section id="change-info">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="sidebar">
                    @include('frontend/includes.sidebar_user')
                </div><!-- end .sidebar -->
            </div>
            <div class="col-md-9">
                <div class="col-md-12">
                    {{ Form::open(array('action'=>'CustomerController@postChangePassword')) }}
                        <div class="personal-box">
                            <div class="tittle-pbox">
                                Thay đổi mật khẩu
                            </div>
                            <div class="content-pbox">
                                <div class="col-sm-12">
                                    <label class="control-label col-sm-2">&nbsp;</label>
                                    <div class="col-sm-10">
                                        @include('frontend.includes.errors')
                                        @include('frontend.includes.success')
                                    </div>
                                </div>
                                <label class="control-label col-sm-4" for="pass_old">Mật khẩu cũ</label>
                                <div class="col-sm-6">
                                    <input type="password" id="pass_old" name="pass_old" class="form-control"/>
                                </div>
                                <label class="control-label col-sm-4" for="password">Mật khẩu mới</label>
                                <div class="col-sm-6">
                                    <input type="password" id="password" name="password" class="form-control"/>
                                </div>
                                <label class="control-label col-sm-4" for="confirm">Xác nhận</label>
                                <div class="col-sm-6">
                                    <input type="password" id="confirm" name="confirm" class="form-control"/>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Lưu thay đổi</button>
                    {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>
</section>
@stop