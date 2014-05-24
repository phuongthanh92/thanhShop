@extends('backend.layouts.default')

@section('breadcrumb')
    <li>Thông tin cá nhân</li>
@stop
@section('content')
<h3 class="heading">Thông tin thành viên</h3>
<div class="span8">
    {{ Form::model($user, array('action' => array('AdminUserController@postProfile'), 'id' => 'form_validation_ttip', 'class' => 'form_validation_ttip')) }}
    <div class="row-fluid">
        <div class="row-fluid">
            <div class="span12">
                @include('backend.includes.errors')
                @include('backend.includes.success')
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Tên tài khoản <span class="f_req">*</span></label>
                {{ FORM::text('username_disabled', $user['username'], array('class' => 'span8', 'disabled' => 'disabled')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Email <span class="f_req">*</span></label>
                {{ FORM::text('email', $user['email'], array('class' => 'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Họ và tên <span class="f_req">*</span></label>
                {{ FORM::text('full_name', $user['full_name'], array('class' => 'span8')) }}
            </div>
        </div>
    </div>
    <div class="form-actions">
        <button class="btn btn-inverse" type="submit">Cập nhật</button>
        <button class="btn" type="reset">Làm lại</button>
    </div>
    {{ FORM::close() }}
</div>
@stop
