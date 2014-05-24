@extends('backend.layouts.default')

@section('breadcrumb')
<li>Quản lý đơn hàng</li>
@stop
@section('scripts')
{{ HTML::script('public/js/backend/project/my_orders.js') }}
@stop
@section('content')
<div class="row-fluid">
    <div class="span12">
        <h3 class="heading">Quản lý đơn hàng</h3>
    </div>
</div>
<div id="dt_gal_wrapper" class="dataTables_wrapper form-inline" role="grid">
    <div class="row">
        <form action="{{ action('AdminOrderController@postIndex') }}" id="form-order" method="post">
            <div class="span4">
                <div id="dt_gal_length" class="dataTables_length">
                    <label> Hiển thị
                        {{ Form::select('display', array('10'=>10, '25'=>25, '50'=>50), $take, array('id'=>'order-row'))
                        }}
                    </label>
                </div>
            </div>
        </form>
    </div>
</div>
<div class="row-fluid">
    <table class="table table-bordered table-striped" data-provides="rowlink">
        <thead>
        <tr>
            <th>Mã đơn hàng</th>
            <th>Số sản phẩm</th>
            <th>Tổng số tiền</th>
            <th>Trạng thái</th>
            <th>Ngày tạo</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        @foreach($orders as $order)
        <tr>
            <td>{{ link_to_action('AdminOrderController@getView', 1000000+$order->id, $order->id) }}</td>
            <td>{{ number_format($order->total_product,0,',','.') }}</td>
            <td>{{ number_format($order->total_amount,0,',','.') }} đ</td>
            <td>
                @if(array_key_exists($order->status,$status))
                {{ $status[$order->status] }}
                @endif
            </td>
            <td>{{ date_format($order->created_at,'d-m-Y H:i') }}</td>
            <td><a href="{{ action('AdminOrderController@getView', $order->id) }}"><i class="icon-eye-open"
                                                                                      title="View"></i> </a></td>
        </tr>
        @endforeach
        </tbody>
    </table>
</div>
<div class="span12">
    <div class="pagination-right">
        {{ $orders->links() }}
    </div>
</div>
@stop