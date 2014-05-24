@extends('backend.layouts.default')

@section('breadcrumb')
<li>{{ link_to_action('AdminUserController@getIndex', 'Quản lý thành viên') }}</li>
<li>Thành viên <strong>{{ $user->username }}</strong></li>
@stop

@section('styles')
{{HTML::style('public/lib/toggle_buttons/bootstrap-toggle-buttons.css')}}
@stop

@section('scripts')
{{HTML::script('public/lib/toggle_buttons/jquery.toggle.buttons.js')}}
{{HTML::script('public/js/backend/project/toggle_buttons.js')}}
{{HTML::script('public/js/backend/project/user_view.js')}}
@if($errors->any())
<script>$(document).ready(function(){$('.form-user').toggleClass('hidden')})</script>
@endif
@stop

@section('content')
<div class="row-fluid heading">
    <div class="span12">
        <h3>
            Thông tin nhân viên
        </h3>
    </div>
</div>

<div class="row-fluid">
    {{ Form::open(array('action' => array('AdminUserController@postUpdate', $user->id), 'id' => 'frm-user')) }}
    @include('backend.includes.errors')
    @include('backend.includes.success')
    <div class="vcard">
        <ul>
            <li class="v-heading">Thông tin nhân viên</li>
            <li>
                <span class="item-key">
                    Tên tài khoản
                </span>
                <div class="vcard-item">
                    {{ $user->username }}
                </div>
            </li>
            <li>
                <span class="item-key">
                    Họ và tên
                </span>
                <div class="vcard-item">
                    <p class="form-user">{{ $user->full_name }}</p>
                    <p class="form-user hidden">{{ Form::text('full_name', $user->full_name, array('class' => 'span6')) }}<p>
                </div>
            </li>
            <li>
                <span class="item-key">
                    Email
                </span>
                <div class="vcard-item">
                    <p class="form-user">{{ HTML::mailto($user->email, $user->email) }}</p>
                    <p class="form-user hidden">{{ Form::text('email', $user->email, array('class' => 'span6')) }}<p>
                </div>
            </li>
            <li>
                <span class="item-key">
                    Tình trạng
                </span>
                <div class="vcard-item">
                    @if($user->status === 1)
                    <span  class="form-user">Hoạt động</span>
                    <div class="success-toggle-button hidden form-user">
                        <input type="checkbox" checked="checked" name="status" value="1">
                    </div
                    @else
                    <span class="form-user">Khoá</span>
                    <div class="success-toggle-button form-user hidden">
                        <input type="checkbox" name="status" value="0">
                    </div
                    @endif
                </div>
            </li>
            <li>
                <span class="item-key">
                    Nhóm quyền
                </span>
                <div class="vcard-item">
                    <ul class="list_a form-user">
                        @foreach($user->roles()->get(array('name')) as $val)
                        <li>{{$val->name}}</li>
                        @endforeach
                    </ul>
                    {{ Form::select('role', $roles, null, array('class' => "form-user hidden")) }}
                </div>
            </li>
            <li class="form-user hidden">
                <span class="item-key">
                    Đăng nhập quản trị
                </span>
                <div class="success-toggle-button">
                    <input type="checkbox" checked="checked" name="group" value="4">
                </div
            </li>
            <li>
                <span class="item-key">
                    Thời gian tham gia
                </span>
                <div class="vcard-item">
                    {{ date_format($user->created_at, 'd-m-Y H:i:s'); }}
                </div>
            </li>
            <li>
                <div class="vcard-item">

                    <div class="btn-group form-user">
                        <button type="button" class="btn toggle-form">Sửa thông tin thành viên</button>
                    </div>
                    <div class="btn-group form-user hidden">
                        <button type="submit" class="btn btn-primary">Cập nhật</button>
                        <button type="reset" class="btn toggle-form">Làm lại</button>
                        <button type="button" id="delete-user" class="btn btn-danger" >Xoá tài khoản nhân viên</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    {{ Form::close() }}
    {{ Form::open(array('action' => array('AdminUserController@postDelete', $user->id), 'id' => 'frm-user-delete', 'style'=>'display: none')) }}
    {{ Form::close() }}
</div>
@stop