@extends('backend.layouts.default')

@section('breadcrumb')
    <li>{{ link_to_action('AdminUserController@getIndex', 'Quản lý thành viên') }}</li>
@stop


@section('content')
<div class="row-fluid heading">
    <div class="span12">
        <h3>
            Danh sách thành viên
            <div class="btn-group pull-right">
                <a href="{{ action('AdminUserController@getCreate') }}" class="btn">
                    <span class="icon-plus-sign"></span> Thêm thành viên
                </a>
            </div>
        </h3>
    </div>
</div>

{{ Form::open(array('action' => 'AdminUserController@getIndex','id'=>'form-search', 'method' => 'get')) }}
<div class="row-fluid form-search">
    <div class="btn-group pull-right form-inline">
        <label>
            Hiển thị
            {{ Form::select('limit', array(10=>10, 20=>20, 30=>30, 50=>50), $limit, array('class' => 'limit' )) }}
        </label>
        {{ Form::text('keyword', $keyword, array('placeholder'=>'Tìm theo tài khoản, email, họ tên', 'id' => 'keyword')) }}
        {{ Form::submit('Tìm kiếm', array('class'=>'btn btn-search')) }}
    </div>
</div>
<table class="table table-striped table-bordered">
    <thead>
    <tr>
        <th>Tài khoản</th>
        <th>Họ tên</th>
        <th>Email</th>
        <th class="text-center">Trạng thái</th>
        <th class="text-center">Thời gian tham gia</th>
        <th class="text-center"></th>
    </tr>
    </thead>
    <tbody>
    @if(count($users)>0)
    @foreach($users as $user)
    <tr>
        <td>{{ $user->username }}</td>
        <td>{{ $user->full_name }}</td>
        <td>{{ HTML::mailto($user->email) }}</a></td>
        <td class="text-center">@if($user->status==1)
            Hoạt động
            @else
            Khoá
            @endif
        </td>
        <td class="text-center">
            {{ date_format($user->created_at, 'd-m-Y H:i:s'); }}
        </td>
        <td class="text-center">
            <a href="{{ action('AdminUserController@getView', $user->id) }}" title="Chi tiết"> <i class="icon-eye-open"></i></a>
        </td>
    </tr>
    @endforeach
    @else
    <tr>
        <td colspan="6">Không có tài khoản nào</td>
    </tr>
    @endif
    </tbody>
</table>
{{ Form::close() }}
<div class="pagination pagination-right">
    {{ $users->links() }}
</div>
@stop