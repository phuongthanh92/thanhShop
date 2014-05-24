@extends('frontend.layouts.default')

@section('title')
{{ $title }} :: @parent
@stop
@section('breadcrumb')
<li>Thời trang công sở</li>
@stop
@section('scripts')
{{ HTML::script('public/lib/stepy/jquery.stepy.min.js') }}
@stop

@section('content')

<section id="cart">
<div class="container">
<div class="tittle">
    Giỏ hàng của bạn
</div>
@if(count($carts) == 0)
    <div class="carts-empty">
        <p>Giỏ hàng của bạn chưa có sản phẩm. <a href="{{ url() }}">Click vào đây</a> để tiếp tục mua sắm.</p>
    </div>
@else
<!-- end .process -->
<div id="info-cart">
    {{Form::open(array('action'=>'CartController@getIndex', 'method'=>'get'))}}
    <table class="cart-table">
        <thead>
        <tr>
            <th>SẢN PHẨM</th>
            <th>TUỲ CHỌN</th>
            <th>ĐƠN GIÁ (đ)</th>
            <th>SỐ LƯỢNG</th>
            <th>THÀNH TIỀN</th>
        </tr>
        </thead>
        <tbody>
        <?php $current = time(); ?>
        @foreach($carts as $cart)
        <?php
        $product = Product::find($cart->product_id);
        ?>
        @if(!empty($product))
        <tr class="product_on_cart {{ $cart->id }}">
            <?php
            $tmp_slug = ($product->slug != null) ? $product->slug . '-' . $product->_id : Str::slug($product->name) . '-' . $product->_id;
            if(isset($product->special_price) && $product->special_form_date < $current && $product->special_to_date > $current){
                $tmp_price = $product->special_price;
            }else{
                $tmp_price = $product->price;
            }
            $into_money = $tmp_price * $cart->quantity;
            ?>
            <td class="product-cart">
                <div class="cart-img"><a href="javascript: void (0)"><img src="{{ url($product->image[0]) }}" alt="{{ $product->name }}" class="img-responsive"></a></div>
                <div class="cart-name">
                    <p>
                        <a class="name" href="{{ url('gio-hang/'.$tmp_slug) }}">{{ $product->name }}</a>
                        <a href="javascript: void(0)" class="cart-delete glyphicon glyphicon-trash" data-cart="{{ $cart->id }}" data-toggle="tooltip" data-placement="top" title="Xoá"></a>
                    </p>
                    <p>
                        Mã sản phẩm: <strong>{{ $product->code }}</strong>
                    </p>
                </div>
            </td>
            <td class="note">
                @if($product->size !== '')
                <select name="size" class="size option">
                <?php
                $size = explode(',', $product->size);
                foreach($size as $val){
                    if($val == $cart->size){
                        echo '<option value="'.$val.'" selected="selected">'.$val.'</option>';
                    }else{
                        echo '<option value="'.$val.'">'.$val.'</option>';
                    }
                }
                ?>
                </select>
                @endif
                @if(isset($product->color) && is_array($product->color))
                <select class="color option">
                    <?php
                    $color = array(
                        'red'       =>  'Đỏ',
                        'white'     =>  'Trắng',
                        'yellow'    =>  'Vàng',
                        'black'     =>  'Đen',
                        'green'     => 'Xanh lá cây',
                        'blue'      =>  'Xanh da trời',
                        'orange'    =>  'Cam',
                        'violet'    =>  'Tím',
                    );
                    foreach($product->color as $tmp){
                        if(array_key_exists($tmp, $color)){
                            if($tmp==$cart->color){
                                echo '<option value="'.$tmp.'" selected="selected">'.$color[$tmp].'</option>';
                            }else{
                                echo '<option value="'.$tmp.'">'.$color[$tmp].'</option>';
                            }
                        }
                    }
                    ?>
                </select>
                <span class="spanChange"><span class="change glyphicon" data-cart="{{ $cart->id }}" data-product="{{$cart->product_id}}"></span></span>
                @endif
            </td>
            <td class="price_cart">
                {{ number_format($tmp_price, 0, ',', '.') }} VNĐ
            </td>
            <td>
                <p class="text-center">
                    <input type="text" class="quantity input-group-addon" name="quantity[]" data-quantity="{{ $cart->quantity }}" value="{{ $cart->quantity }}"/>
                    <span class="spanChange"><span class="change glyphicon" data-cart="{{ $cart->id }}" data-product="{{$cart->product_id}}"></span></span>
                </p>
            </td>
            <td class="t-price">
                {{ number_format($into_money, 0, ',', '.') }} VNĐ
            </td>
        </tr>
        @endif
        @endforeach
        </tbody>
        <tfoot>
        <tr>
            <td colspan="4">TỔNG TIỀN</td>
            <td colspan="2" class="total_amount">{{ number_format($total_amount, 0, ',', '.') }} VNĐ</td>
        </tr>
        </tfoot>
    </table>
    {{Form::close()}}
    <div class="btn-bottom">
        <a class="btn btn-info pull-right checkout-link" href="{{ action('OrderController@getCheckout') }}">Thanh toán</a>
    </div>
</div>
<div class="carts-empty" style="display: none">
    <p>Giỏ hàng của bạn chưa có sản phẩm. <a href="{{ url() }}">Click vào đây</a> để tiếp tục mua sắm.</p>
</div>
<!-- end #info-cart -->
@endif
</section><!--end cart-->
@stop
