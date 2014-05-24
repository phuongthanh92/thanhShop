@extends('backend.layouts.default')

@section('breadcrumb')
<li>{{ link_to_action('AdminContactController@getIndex', 'Quản lý liên hệ') }}</li>
@stop

@section('content')
<div class="row-fluid">
    <div class="span12 heading">
        <h3>
            Danh sách các ý kiến
        </h3>
    </div>
    {{ Form::open(array('action' => 'AdminContactController@getIndex','id'=>'form-search', 'method' => 'get')) }}
    <div class="row-fluid form-search">
        <div class="btn-group pull-right form-inline">
            <label>
                Hiển thị
                {{ Form::select('limit', array(10=>10, 20=>20, 30=>30, 50=>50), $limit, array('class' => 'limit' )) }}
            </label>
            <label>
                Sắp xếp
                {{ Form::select('order', array('new'=>'Liên hệ mới', 'status' => 'Trạng thái'), $order, array('class' => 'order' )) }}
            </label>
        </div>
    </div>
    <table class="table table-bordered">
        <thead>
        <tr>
            <th>Email</th>
            <th>Tiêu đề</th>
            <th>Trạng thái</th>
            <th>Thời gian</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        @if(count($contacts)>0)
        @foreach($contacts as $val)
        <tr>
            <td>{{ HTML::mailto($val->email) }}</td>
            <td>{{ $val->title }}</td>
            <td>
                @if($val->status===1) Đã xem @elseif($val->status===0) Chưa xem @else Đã trả lời @endif
            </td>
            <td>{{ date_format($val->created_at, 'd-m-Y H:i:s'); }}</td>
            <td>
                <a href="{{ action('AdminContactController@getView', $val->id) }}" title="Xem chi tiết"><i
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
        {{ $contacts->links() }}
    </div>
    {{ Form::close() }}
</div>
@stop