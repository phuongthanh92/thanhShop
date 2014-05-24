@extends('backend.layouts.default')

@section('breadcrumb')
<li>{{ link_to_action('AdminPermissionController@getIndex', 'Quản lý nhóm quyền') }}</li>
<li>Thêm hóm quyền</li>
@stop

@section('content')
<div class="row-fluid">
    {{ Form::open(array('action'=>'AdminPermissionController@postCreate')) }}
    <div class="span12">
        <div class="span12">
            @include('backend.includes.errors')
            @include('backend.includes.success')
        </div>
    </div>
    <div class="span12">
        <div class="tabbable">
            <ul class="nav nav-tabs">
                <li class="active"><a href="#tab1" data-toggle="tab">Thông tin nhóm quyền</a></li>
                <li class=""><a href="#tab2" data-toggle="tab">Danh sách các quyền</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="tab1">
                    <label for="category_slug">Tên nhóm quyền<span class="f_req"> * </span>
                    </label>
                    {{ Form::text('name',null,array('class'=>'span6', 'id'=>'role_name'))}}
                </div>
                <div class="tab-pane" id="tab2">
                    @foreach($permission as $val)
                    <label class="uni-checkbox" id="roles_clone">
                        <input type="checkbox" value="{{ $val->id }}" name="permissions[]" class="uni_style"/>
                        {{ $val->display_name }}
                    </label>
                    @endforeach
                </div>
                <div class="form-actions">
                    <button type="reset" class="btn btn-warning">Làm lại</button>
                    <button type="submit" class="btn btn-success">Thêm mới</button>
                </div>
            </div>
        </div>
    </div>
    {{ Form::close(); }}
</div>
@stop