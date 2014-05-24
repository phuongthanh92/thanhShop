@extends('frontend.layouts.default')

@section('title')
    {{ $title }} :: @parent
@stop

@section('breadcrumb')
<li>{{ link_to_action('CustomerController@getProfile', 'Thông tin cá nhân') }}</li>
<li>Lịch sử mua hàng</li>
@stop
@section('content')
<section id="list-order">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="sidebar">
                    @include('frontend/includes.sidebar_user')
                </div><!-- end .sidebar -->
            </div>
            <div class="col-md-9">
                <div class="col-md-12">
                    <div class="tittle">
                        Danh sách đơn hàng của bạn
                    </div>
                    @if(count($orders)==0)
                            Bạn chưa có đơn hàng nào.
                    @else
                    <table class="table table-responsive cart-table">
                        <thead>
                        <tr>
                            <th>Mã đơn hàng</th>
                            <th>Ngày đặt</th>
                            <th>Số lượng SP</th>
                            <th>Tổng tiền (đ)</th>
                            <th>Trạng thái</th>
                            <th>Chi tiết</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($orders as $order)
                        <tr>
                            <td class="order_id">{{ $order->id + 1000000 }}</td>
                            <td class="date-order">{{ date_format($order->created_at, 'd/m/Y') }}</td>
                            <td class="quantity">{{ $order->total_product }}</td>
                            <td class="total">{{ number_format($order->total_amount, 0, ',', '.') }}</td>
                            <td class="status">@if(isset($status[$order->status])) {{ $status[$order->status] }} @endif</td>
                            <td class="to-more"><a href="{{ action('OrderController@getView', ($order->id+1000000)) }}"><span class="glyphicon glyphicon-eye-open"></span> </a> </td>
                        </tr>
                        @endforeach
                        </tbody>
                    </table>
                    <div class="page">
                        {{ $orders->links() }}
                    </div><!-- end .page -->
                    @endif
                </div>
            </div>
        </div>
    </div>
</section>
@stop