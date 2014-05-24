@extends('backend.layouts.default')

@section('breadcrumb')
    <li>{{ link_to_action('AdminUserController@getProfile', 'Thông tin cá nhân') }}</li>
    <li>Đổi mật khẩu</li>
@stop

@section('content')
<h3 class="heading">Đổi mật khẩu</h3>
<div class="span6">
    {{ Form::open(array('action' => 'AdminUserController@postChangePassword','id'=>'form_validation_ttip','class'=>'form_validation_ttip')) }}
    <div class="row-fluid">
        <div class="row-fluid">
            <div class="span12">
                @include('backend.includes.errors')
                @include('backend.includes.success')
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Mật khẩu cũ<span class="f_req">*</span></label>
                {{ FORM::password('pass_old',array('class'=>'span8','id'=>'pass_old')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Mật khẩu mới<span class="f_req">*</span></label>
                {{ FORM::password('password',array('class'=>'span8','id'=>'password')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Xác nhận mật khẩu<span class="f_req">*</span></label>
                {{ FORM::password('confirm',array('class'=>'span8','id'=>'confirm')) }}
            </div>
        </div>
    </div>
    <div class="form-actions">
        <button class="btn btn-inverse" type="submit">Đổi mật khẩu</button>
    </div>
    <?php
    ?>
    {{ FORM::close() }}
</div>
@stop