@extends('backend.layouts.default')

@section('breadcrumb')
<li>{{ link_to_action('AdminCustomerController@getIndex', 'Quản lý khách hàng') }}</li>
<li>Quản lý khách hàng</li>
@stop
@section('content')
<h3 class="heading">Thêm khách hàng</h3>
<div class="span8">
    {{ Form::open(array('action' => 'AdminCustomerController@postCreate','id'=>'form_validation_ttip','class'=>'form_validation_ttip', 'autocomplete'=>'off')) }}
    <div class="formSep">
        <div class="row-fluid">
            <div class="span12">
                @include('backend.includes.errors')
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Tên tài khoản <span class="f_req">*</span></label>
                {{ FORM::text('username','',array('class'=>'span8')) }}
                <span class="help-block">Tài khoản bao gồm chữ cái, chữ số và không chứa ký tự đặc biệt </span>
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Mật khẩu <span class="f_req">*</span></label>
                {{ FORM::password('password',array('class'=>'span8','id'=>'password')) }}
                <span class="help-block">Mật khẩu phải lớn hơn 6 ký tự</span>
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Nhập lại mật khẩu <span class="f_req">*</span></label>
                {{ FORM::password('confirm',array('class'=>'span8')) }}
            </div>
        </div>
    </div>
    <div class="row-fluid">
        <div class="row-fluid">
            <div class="span12">
                <label>Email <span class="f_req">*</span></label>
                {{ FORM::text('email','',array('class'=>'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Họ và tên <span class="f_req">*</span></label>
                {{ FORM::text('full_name','',array('class'=>'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Trạng thái <span class="f_req">*</span></label>
                {{ FORM::select('status',array('1'  =>  'Hoạt động', '2'    =>  'Khoá')) }}
            </div>
        </div>
    </div>
    <div class="form-actions">
        <button class="btn btn-inverse" type="submit">Thêm mới</button>
        <button class="btn" type="reset">Làm lại</button>
    </div>
    <?php
    ?>
    {{ FORM::close() }}
</div>
@stop