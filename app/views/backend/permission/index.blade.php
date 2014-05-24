@extends('backend.layouts.default')

@section('breadcrumb')
<li>Quản lý nhóm quyền</li>
@stop

@section('scripts')
{{ HTML::script('public/js/backend/project/my_permission.js') }}
@stop

@section('content')
<h3>
    Quản lý nhóm quyền
    <div class="pull-right">
        <a href="{{ action('AdminPermissionController@getCreate') }}" class="btn btn-info permission_create"><span class="splashy-add"></span> Tạo mới</a>
    </div>

</h3>
<div class="row-fluid">
    <table class="table table-striped" id="permission">
        <thead>
        <tr>
            <th>Nhóm quyền</th>
            <th>Số thành viên</th>
            <th>Thời gian tạo</th>
            <th>Tuỳ chọn</th>
        </tr>
        </thead>
        <tbody>
        @foreach($roles as $role)
        <tr>
            <td class="permission_name">{{ $role->name }}</td>
            <td class="permission_user">{{ $role->userCount() }}
            </td>
            <td class="permission_date">{{ date_format($role->created_at, 'd-m-Y H:i:s'); }}</td>
            <td>
                <a href="{{ action('AdminPermissionController@getEdit', $role->id) }}" data-id="{{ $role->id }}" class="sepV_a permission_edit" title="Edit"><i class="icon-pencil"></i></a>
                <a href="javascript: void(0)" data-id="{{ $role->id }}" data-name="{{ $role->name }}" class="permission_delete" title="Delete"><i class="icon-trash"></i></a>
            </td>
        </tr>
        @endforeach
        </tbody>
    </table>
</div>
<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            {{ Form::open(array('action'=>'AdminPermissionController@postDelete')) }}
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Xác nhận</h4>
            </div>
            <div class="modal-body">
                <p id="deleteMessage"></p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Không</button>
                <input type="hidden" name="role" id="postValue" value=""/>
                <input type="submit" class="btn btn-danger" value="Xoá nhóm quyền"/>
            </div>
            {{ Form::close(); }}
        </div>
    </div>
</div>
@stop