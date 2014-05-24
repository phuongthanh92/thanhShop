@extends('backend.layouts.default')


@section('breadcrumb')
<li>{{ link_to_action('AdminPermissionController@getIndex', 'Quản lý nhóm quyền') }}</li>
<li>Cập nhật hóm quyền</li>
@stop

@section('content')
<h3 class="heading">Cập nhật nhóm quyền</h3>
<div class="row-fluid">
    {{ Form::model($role, array('action'=>array('AdminPermissionController@postUpdate', $role->id))) }}
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
                    <?php
                        $tmp = array();
                        foreach($role->perms()->get(array('permission_id')) as $a){
                            array_push($tmp, $a->permission_id);
                        }
                    ?>
                    @foreach($permissions as $val)
                    <label class="uni-checkbox" id="roles_clone">
                        <input type="checkbox" value="{{ $val->id }}" name="permissions[]" @if(in_array($val->id, $permission_id) === true) checked="checked" @endif class="uni_style"/>
                        {{ $val->display_name }}
                    </label>
                    @endforeach
                </div>
                <div class="form-actions">
                    <button type="reset" class="btn btn-warning">Làm lại</button>
                    <button type="submit" class="btn btn-success">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>
    {{ Form::close(); }}
</div>
@stop