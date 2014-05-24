@extends('frontend.layouts.default')

@section('title')
{{ $title }} :: @parent
@stop
@section('breadcrumb')
<li>Thời trang công sở</li>
@stop

@section('content')

<section id="cart">
<div class="container">
<div class="tittle">
    Thanh Toán
</div>
@if(!empty($carts))
{{ Form::open(array('action' => 'OrderController@postCheckout', 'id' => 'order')) }}
<fieldset title="Giỏ hàng của bạn" id="info-cart">
    <legend></legend>
    <div id="info-cart">
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
                                }
                            }
                        }
                        ?>
                    </select>

                    @endif
                </td>
                <td class="price_cart">
                    {{ number_format($tmp_price, 0, ',', '.') }} VNĐ
                </td>
                <td>
                    <p class="text-center">
                        {{ $cart->quantity }}
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
        <div class="page">
            <div class="pagination-right">
                {{ link_to_action('CartController@getIndex', 'Chỉnh sửa giỏ hàng', array()) }}
            </div>
        </div>
    </div>
</fieldset>
<fieldset title="Chọn địa chỉ nhận hàng" id="address">
    <legend></legend>
    <div class="row address-choose" id="address-option">
        @foreach($address as $val)
        <div class="col-sm-12 address-option alert">
            <div class="input-group">
                <input type="radio" name="address_id" style="display: none" id="address-{{ $val->id }}" value="{{ $val->id }}">
                {{ $val->full_name . ' : ' . $val->address }} <a><span class="glyphicon glyphicon-map-marker map-marker"></span></a>
                <span class="help-block">
                    Điện thoại: {{ $val->phone }}
                </span>
            </div>
        </div>
        @endforeach
        <div class="col-sm-12 address-option active alert alert-info">
            <div class="input-group">
                Đến cửa hàng lấy sản phẩm <a><span class="glyphicon glyphicon-map-marker map-marker"></span></a>
                <input type="radio" name="address_id" style="display: none" id="address-0" value="0" checked="checked">
                <span class="help-block">
                    Địa chỉ: {{$w_address}}
                </span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-ms-12">
            <button class="btn btn-info add-address" type="button" data-toggle="modal" data-target="#add-address">
                <span class="glyphicon glyphicon-plus-sign"></span>
                Thêm địa chỉ
            </button>
            {{ link_to_action('CustomerController@getAddress', 'Quản lý địa chỉ sổ địa chỉ') }}
        </div>
    </div>
</fieldset>
<fieldset title="Thanh toán" id="delivery">
    <legend></legend>
    <div class="col-lg-12">
        <div class="radio">
            <label>
                <input type="radio" name="checkout_method" id="checkout-method_0" value="1" >
                Thanh toán qua cổng thanh toán Ngân Lượng
                <div class="method">
                    <img src="{{url('public/img/nganluong.gif')}}" alt="Ngân lượng">
                </div>
            </label>
        </div>
        <div class="radio">
            <label>
                <input type="radio" name="checkout_method" checked id="checkout-method_1" value="3">
                Thanh toán khi nhận hàng
            </label>
        </div>
    </div>
</fieldset>
<fieldset title="Hoàn thành" id="checkout-method">
    <legend></legend>
    <textarea name="note" style="width: 100%;min-height: 100px;" placeholder="Những yêu cầu của bạn khi chúng tôi chuyển hàng: "></textarea>
</fieldset>
<input type="submit" class="btn btn-info" value="Đặt hàng"/>
{{ Form::close() }}
<div class="modal fade addAddress orderAddress" id="add-address" tabindex="-1" role="dialog" aria-labelledby="Thêm địa chỉ nhận hàng" aria-hidden="true">
    <form class="forgot-address modal-form" id="formAddress" action="{{ action('AddressController@postCreate') }}"
        method="post">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel"> Thêm địa chỉ mới</h4>
                </div>
                <div class="modal-body">
                    <div class="row">&nbsp;</div>
                    <div class="row">
                        <label class="control-label col-sm-3" for="full_name">
                            Họ và tên <span class="f_req">(*)</span>
                        </label>
                        <div class="col-sm-9">
                            <input type="text" id="name" name="full_name" class="form-control"/>
                        </div>
                    </div>
                    <div class="row">
                        <label class="control-label col-sm-3" for="address">
                            Địa chỉ <span class="f_req">(*)</span>
                        </label>
                        <div class="col-sm-9">
                            <input type="text" id="address" name="address" class="form-control"/>
                        </div>
                    </div>
                    <div class="row">
                        <label class="control-label col-sm-3" for="phone">
                            Số điện thoại <span class="f_req">(*)</span>
                        </label>
                        <div class="col-sm-9">
                            <input type="text" id="phone" name="phone" class="form-control"/>
                        </div>
                    </div>
                    <div class="row">
                        <label class="control-label col-sm-3" for="province_id">
                            Tỉnh/Thành phố <span class="f_req">(*)</span>
                        </label>
                        <div class="col-sm-3">
                            <select id="province_id" name="province_id">
                                <option value="">Chọn một</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <label class="control-label col-sm-3" for="districts_id">
                            Quận/Huyện <span class="f_req">(*)</span>
                        </label>
                        <div class="col-sm-3">
                            <select id="districts_id" name="districts_id">
                                <option value="0">Chọn một</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">&nbsp;</div>
                </div>
                <div class="modal-footer">
                    <button type="reset" data-dismiss="modal">Huỷ</button>
                    <button type="submit" data-save-text="Saving..." id="addSubmit">Lưu địa chỉ</button>
                </div>
            </div>
        </div>
    </form>
</div>
@endif

@if(isset($orderStatus))
<p>Bạn đã đặt hàng thành công.</p>
<p>Bạn có thể theo dõi đơn hàng này ở mục {{ link_to_action('OrderController@getIndex', 'Quản lý đơn hàng') }}</p>
@endif
@if(isset($orderSuccess))
<p>Bạn đã thanh toán đơn hàng thành công.</p>
<p>Chúng tôi sẽ sớm giao hàng cho bạn.</p>
@endif
</div>
</section>
@stop