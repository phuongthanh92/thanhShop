@extends('backend.layouts.default')

@section('breadcrumb')
<li>{{ link_to_action('AdminCustomerController@getIndex', 'Quản lý khách hàng') }}</li>
@stop
@section('content')
<div class="row-fluid">
    <div class="span12 heading">
        <h3>
            Danh sách khách hàng
            <div class="btn-group pull-right">
                <a href="{{ action('AdminCustomerController@getCreate') }}" class="btn">
                    <span class="icon-plus-sign"></span> Thêm khách hàng
                </a>
            </div>
        </h3>
    </div>
    {{ Form::open(array('action' => 'AdminCustomerController@getIndex','id'=>'form-search', 'method' => 'get')) }}
    <div class="row-fluid form-search">
        <div class="btn-group pull-right form-inline">
            <label>
                Hiển thị
                {{ Form::select('limit', array(10=>10, 20=>20, 30=>30, 50=>50), $limit, array('class' => 'limit' )) }}
            </label>
            {{ Form::text('keyword', $keyword, array('placeholder'=>'Tìm theo tài khoản, email, họ tên', 'id' =>'keyword')) }}
            {{ Form::submit('Tìm kiếm', array('class'=>'btn btn-search')) }}
        </div>
    </div>
    <table class="table table-bordered">
        <thead>
        <tr>
            <th>Tên tài khoản</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Thời gian tham gia</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        @if(count($customers)>0)
        @foreach($customers as $val)
        <tr>
            <td>{{ $val->username }}</td>
            <td>{{ $val->full_name }}</td>
            <td>{{ HTML::mailto($val->email,$val->email) }}</td>
            <td>
                @if($val->status===1) Hoạt động @else Khoá @endif
                <span class="help-block">@if($val->active != 1) (Chưa kích hoạt) @endif</span>
            </td>
            <td>{{ date_format($val->created_at, 'd-m-Y H:i:s'); }}</td>
            <td>
                <a href="{{ action('AdminCustomerController@getView', $val->id) }}" title="Xem chi tiết"><i
                        class="icon-eye-open"></i></a>
            </td>
        </tr>
        @endforeach
        @else
        <tr>
            <td colspan="6">Không có khách hàng</td>
        </tr>
        @endif
        </tbody>
        <tfoot>
        </tfoot>
    </table>
    <div class="pagination pagination-right">
        {{ $customers->links() }}
    </div>
    {{ Form::close() }}
</div>
@stop