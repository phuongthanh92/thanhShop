@extends('backend.layouts.default')

@section('breadcrumb')
<li>Thống kê</li>
<li>Thống kê đơn hàng</li>
@stop
@section('content')
<div class="row-fluid">
    <div class="span12">
        <h3 class="">
            <div class="span12">
                <h3>
                    <form method="get" class="pull-right form-inline form-search" id="form-search">
                        <div id="dt_gal_length" class="dataTables_length">
                            <label>
                                Số lượng sản phẩm
                                {{ Form::select('limit', array(20=>20, 30=>30, 50=>50, 100), $row, array('class' => 'limit' )) }}
                            </label>
                            Từ ngày
                            <div class="input-append date" data-date-format="dd/mm/yyyy">
                                <input id="from_date" class="datepicker" name="from_date" value="{{$from}}" type="text">                        <span class="add-on"><i class="splashy-calendar_day"></i></span>
                            </div>
                            Đến ngày
                            <div class="input-append date" data-date-format="dd/mm/yyyy">
                                <input id="to_date" class="datepicker" name="to_date" value="{{$to}}" type="text">                        <span class="add-on"><i class="splashy-calendar_day"></i></span>
                            </div>
                            <input type="submit" value="Lọc">
                        </div>
                        <input type="hidden" id="page-hidden" value="1">
                    </form>
                </h3>
            </div>
        </h3>
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
        </tr>
        </thead>
        <tbody>
        <?php $quantity = $amount = 0; ?>
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
            <?php $quantity +=$order->total_product; $amount += $order->total_amount; ?>
        </tr>
        @endforeach
        </tbody>
        <tfoot>
        <tr>
            <td>Tổng số</td>
            <td><b>{{ number_format($quantity,0,',','.') }}</b></td>
            <td><b>{{ number_format($amount,0,',','.') }} đ</b></td>
            <td colspan="2"></td>
        </tr>
        </tfoot>
    </table>
    <div class="row-fluid">
        <div class="span12">
            <form action="{{ action('AdminStatisticController@getExcel') }}" method="get" target="_blank">
                <div style="display: none">
                    {{ Form::select('limit', array(20=>20, 30=>30, 50=>50, 100), $row, array('class' => 'limit' )) }}
                    <input id="from_date" class="datepicker" name="from_date" value="{{$from}}" type="text">
                    <input id="to_date" class="datepicker" name="to_date" value="{{$to}}" type="text">
                    <input type="text" name="type" value="order">
                    {{ Form::token() }}
                </div>
                <button type="submit" class="btn btn-link">Xuất ra Excel</button>
            </form>
        </div>
    </div>
</div>

@stop