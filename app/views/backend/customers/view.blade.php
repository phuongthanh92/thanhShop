@extends('backend.layouts.default')

@section('breadcrumb')
<li>{{ link_to_action('AdminCustomerController@getIndex', 'Quản lý khách hàng') }}</li>
<li>Thông tin khách hàng</li>
@stop

@section('styles')
{{HTML::style('public/lib/toggle_buttons/bootstrap-toggle-buttons.css')}}
@stop

@section('scripts')
{{HTML::script('public/lib/toggle_buttons/jquery.toggle.buttons.js')}}
{{HTML::script('public/js/backend/project/toggle_buttons.js')}}
{{ HTML::script('public/js/backend/project/user_view.js') }}
@if($errors->any())
<script>$(document).ready(function(){$('.form-user').toggleClass('hidden')})</script>
@endif
@stop

@section('content')
{{ Form::open(array('action' => array('AdminCustomerController@postUpdate', $customer->id), 'id' => 'frm-user')) }}
<div class="row-fluid heading">
    <div class="span12">
        <h3>
            Thông tin khách hàng
            <div class="pull-right">
                <div class="btn-group form-user">
                    <button type="button" class="btn toggle-form">Sửa thông tin khách hàng</button>
                </div>
                <div class="btn-group form-user hidden">
                    <button type="submit" class="btn btn-primary">Cập nhật</button>
                    <button type="reset" class="btn toggle-form">Làm lại</button>
                    <button type="button" id="delete-customer" class="btn btn-danger">Xoá tài khoản khách hàng</button>
                </div>
            </div>
        </h3>
    </div>
</div>
@include('backend.includes.errors')
@include('backend.includes.success')
<div class="row-fluid">
    <div class="vcard">
        <ul>
            <li class="v-heading">Thông tin cơ bản</li>
            <li>
                    <span class="item-key">
                        Tên tài khoản
                    </span>
                <div class="vcard-item">
                    {{ $customer->username }}
                </div>
            </li>
            <li>
                    <span class="item-key">
                        Họ và tên
                    </span>
                <div class="vcard-item">
                    {{ $customer->full_name }}
                </div>
            </li>
            <li>
                <span class="item-key">
                    Email
                </span>
                <div class="vcard-item">
                    <p class="form-user">{{ HTML::mailto($customer->email, $customer->email) }}</p>
                    <p class="form-user hidden">{{ Form::text('email', $customer->email, array('class' => 'span6')) }}<p>
                </div>
            </li>
            <li>
                    <span class="item-key">
                        Trạng thái
                    </span>
                <div class="vcard-item">
                    @if($customer->status === 1)
                    <span  class="form-user">Hoạt động</span>
                    <div class="success-toggle-button hidden form-user">
                        <input type="checkbox" checked="checked" name="status" value="1">
                    </div
                        @else
                    <span class="form-user">Khoá</span>
                    <div class="success-toggle-button form-user hidden">
                        <input type="checkbox" name="status" value="0">
                    </div
                        @endif
                </div>
            </li>
            @if($customer->active === 0)
            <li>
                    <span class="item-key">
                        Kích hoạt email
                    </span>
                <div class="vcard-item">
                    <span class="form-user">Chưa kích hoạt tài khoản</span>
                    <div class="success-toggle-button form-user hidden">
                        <input type="checkbox" name="active" value="1">
                    </div
                </div>
            </li>
            @endif
            <li>
                    <span class="item-key">
                        Thời gian tham gia
                    </span>
                <div class="vcard-item">
                    {{ date_format($customer->created_at, 'd-m-Y H:i:s'); }}
                </div>
            </li>
            <li class="v-heading">Thông tin khác</li>
            @if(empty($meta) || count($meta)===0)
            <li><span class="help-block">Không có thông tin.</span></li>
            @else
            @foreach($meta as $val)
            @if(in_array($val->key, array('facebook','google')))
            <li>
                <span class="item-key">
                    {{ ucfirst($val->key) }}
                </span>

                <div class="vcard-item">
                    @if($val->key==='facebook')
                    {{ link_to('https://www.facebook.com/'.$val->value) }}
                    @else
                    {{ link_to('https://plus.google.com/'.$val->value) }}
                    @endif
                </div>
            </li>
            @endif
            @endforeach
            @endif
            <li class="v-heading">
                Danh sách đơn hàng
            </li>
            <li>
                @if(empty($orders) || count($orders)===0)
                <span class="help-block">Chưa có đơn hàng nào.</span>
                @else
                <table class="table table-striped" data-provides="rowlink">
                    <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Số sản phẩm</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                        <th>Ngày tạo</th>
                        <th>Ngày cập nhật</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($orders as $order)
                    <tr>
                        <td>{{ link_to_action('AdminOrderController@getView', (100000 + $order->id), $order->id) }}</td>
                        <td>{{ number_format($order->total_product,0,',','.') }}</td>
                        <td>{{ number_format($order->total_amount,0,',','.') }}</td>
                        <td>
                            @if(array_key_exists($order->status, $orderStatus))
                            {{ $orderStatus[$order->status] }}
                            @endif
                        </td>
                        <td>{{ date_format($order->created_at,'m-d-Y') }}</td>
                        <td>{{ date_format($order->updated_at,'m-d-Y') }}</td>
                    </tr>
                    @endforeach
                    </tbody>
                </table>
                @if($orders->getLastPage()>1)
                <div style="clear: both; margin-top: 0" class="pagination pagination-left">
                    {{ $orders->links() }}
                </div>
                @endif

                @endif
            </li>
            <li class="v-heading">
                Sổ địa chỉ
            </li>
            <li>
                @if(empty($address) || count($address)===0)
                <span class="help-block">Chưa có địa chỉ nào.</span>
                @else
                <table class="table table-striped table-bordered table-condensed">
                    <thead>
                    <tr>
                        <th>Họ và tên</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Trạng thái</th>
                        <!--                            <th></th>-->
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($address as $add)
                    <tr>
                        <td>{{ $add->full_name }}</td>
                        <td>{{ $add->address }}</td>
                        <td>{{ $add->phone }}</td>
                        <td>@if($add->status===1) Hiển thị @else Đã xoá @endif</td>
                        <!--                            <td></td>-->
                    </tr>
                    @endforeach
                    </tbody>
                </table>
                @endif
            </li>
        </ul>
    </div>
</div>

{{ Form::close() }}
{{ Form::open(array('action' => array('AdminCustomerController@postDelete', $customer->id), 'id' => 'frm-user-delete', 'style'=>'display: none')) }}
{{ Form::close() }}
@stop
