<div class="col-md-9">
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-2">
                Mã đơn hàng:
                <strong>{{ ($order->id + 1000000) }}</strong>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">
                Ngày tạo:
                <strong>{{ date_format($order->created_at, 'd/m/Y') }}</strong>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">
                Trạng thái:
                <strong>{{ $status }}</strong>
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
            <table class="table table-responsive" width="100%" cellpadding="0" cellspacing="0" border="1">
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