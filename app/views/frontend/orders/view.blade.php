@extends('frontend.layouts.default')

@section('title')
{{ $title }} :: @parent
@stop

@section('breadcrumb')
<li>{{ link_to_action('CustomerController@getProfile', 'Thông tin cá nhân') }}</li>
<li>{{ link_to_action('OrderController@getIndex', 'Lịch sử mua hàng') }}</li>
<li>Đơn hàng {{ ($order->id + 1000000) }}</li>
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
                        Chi tiết đơn hàng {{ ($order->id + 1000000) }}
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            Mã đơn hàng:
                        </div>
                        <div class="col-md-10">
                            <strong>{{ ($order->id + 1000000) }}</strong>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            Ngày tạo:
                        </div>
                        <div class="col-md-10">
                            <strong>{{ date_format($order->created_at, 'd/m/Y') }}</strong>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            Trạng thái:
                        </div>
                        <div class="col-md-10">
                            <strong>{{ $status }}</strong>
                            @if($order->status==1) <a class="fOrderDelete" onclick="return alertF();" href="{{url('huy-don-hang/'.$order->id)}}">Huỷ đơn hàng</a>@endif
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            Địa chỉ nhận hàng
                        </div>
                    </div>
                    @if($order->address_id==0)
                    <div class="row">
                        <div class="col-md-12">
                            Giao dịch tại cửa hàng
                        </div>
                    </div>
                    @else

                    <div class="row">
                        <div class="col-md-2">
                            Họ và tên:
                        </div>
                        <div class="col-md-10">
                            {{ $address->full_name }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            Địa chỉ:
                        </div>
                        <div class="col-md-10">
                            <?php
                                $districts = $address->districts()->get()->last();
                                $provinces = $districts->provinces()->get()->last();
                                $tmp = $districts->name . ' - ' . $provinces->name;
                            ?>
                            {{ $address->address }} - {{ $tmp }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            Điện thoại:
                        </div>
                        <div class="col-md-10">
                            {{ $address->phone }}
                        </div>
                    </div>
                    @endif
                    <div class="row">
                        <div class="col-md-2">
                            Ghi chú:
                        </div>
                        <div class="col-md-10">
                            {{ $order->note }}
                        </div>
                    </div>
                    <div class="row">&nbsp;</div>
                    <div class="row">
                        <table class="table table-responsive">
                            <thead>
                            <tr>
                                <th>SẢN PHẨM</th>
                                <th>ĐƠN GIÁ (VNĐ)</th>
                                <th>SỐ LƯỢNG</th>
                                <th>GHI CHÚ</th>
                                <th>THÀNH TIỀN (VNĐ)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php $current = time(); ?>
                            @foreach($orderItems as $item)
                            <?php
                            $product = $item->products();
                            ?>
                            <tr class="product_on_cart">
                                <td class="product-cart">
                                    <div class="cart-name">
                                        @if(!empty($product))
                                        <p>
                                            {{ $product->name }}
                                        </p>
                                        <p>
                                            Mã sản phẩm: <strong>{{ $product->code }}</strong>
                                        </p>
                                        @else
                                        ID sản phẩm: <strong>{{ $item->product_id }}</strong>
                                        @endif
                                    </div>
                                </td>
                                <td class="price_cart">
                                    {{ number_format($item->price, 0, ',', '.') }}
                                </td>
                                <td>
                                    <p class="text-center">
                                        {{ $item->quantity }}
                                    </p>
                                </td>
                                <td class="note">
                                    {{ $item->attributes }}
                                </td>
                                <td class="text-center">
                                    {{ number_format(($item->price * $item->quantity), 0, ',', '.') }}
                                </td>
                            </tr>
                            @endforeach
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colspan="4">TỔNG TIỀN</td>
                                <td colspan="2" class="total_amount">{{ number_format($order->total_amount, 0, ',', '.') }} đ</td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@stop
@section('scripts')

<script>
    function alertF(){
        var a = confirm('Bạn có muốn huỷ đơn hàng này không?');
        return a;
    }
</script>
@stop