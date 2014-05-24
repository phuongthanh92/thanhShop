@extends('backend.layouts.default')
@section('content')
<h3 class="heading">Đổi mật khẩu</h3>
<div class="span6">
    {{ Form::open(array('action' => 'AdminUserController@postPassword','id'=>'form_validation_ttip','class'=>'form_validation_ttip')) }}
    <div class="row-fluid">
        <div class="row-fluid">
            <div class="span12">
                @include('backend.include.error')
                @include('backend.include.success')
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Mật khẩu cũ<span class="f_req">*</span></label>
                {{ FORM::password('passOld',array('class'=>'span8','id'=>'passOld')) }}
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
@section('title')
@if(isset($title))
{{ $title }}
@else
Quản trị thành viên
@endif
@stop
@section('breadCrumb')
<li>{{ HTML::link('admin/user/profile','Thông tin cá nhân') }}</li>
<li>Đổi mật khẩu</li>
@stop