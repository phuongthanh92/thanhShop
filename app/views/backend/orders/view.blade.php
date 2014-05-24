@extends('backend.layouts.default')

@section('styles')
{{ HTML::style('public/lib/CLEditor/jquery.cleditor.css') }}
<!-- notifications -->
{{ HTML::style('public/lib/sticky/sticky.css') }}
<!-- splashy icons -->
{{ HTML::style('public/img/splashy/splashy.css') }}
<!-- jQuery UI theme-->
{{ HTML::style('public/lib/jquery-ui/css/Aristo/Aristo.css') }}
@stop
@section('scripts')
<!-- CLEditor -->
{{ HTML::script('public/lib/CLEditor/jquery.cleditor.js') }}
{{ HTML::script('public/lib/CLEditor/jquery.cleditor.icon.min.js') }}
<!-- date library -->
{{ HTML::script('public/lib/moment_js/moment.min.js') }}
<!-- chat functions -->
{{ HTML::script('public/js/comments.js') }}
<script>
    var commentUrl = "{{ action('OrderCommentController@postCreate') }}";
    var orderId = "{{ $order->id }}";
</script>
@stop

@section('breadcrumb')
<li>{{ link_to_action('AdminOrderController@getIndex', 'Quản lý đơn hàng') }}</li>
<li>Chi tiết đơn hàng</li>
@stop
@section('content')
<div class="row-fluid">
    <div class="span12">
        <h1 class="invoice_heading">Đơn hàng {{ (1000000 + $order->id) }}</h1>
    </div>
</div>
<div class="row-fluid">
    <div class="span8">
        <p><strong class="muted">Đơn hàng</strong></p>
        <address>
            <p><span class="muted sepV_b">Mã đơn hàng: </span><strong>{{ (1000000 + $order->id) }}</strong></p>

            <p><span class="muted sepV_b">Ngày tạo: </span><strong>{{ date_format($order->created_at, 'd-m-Y H:i')
                    }}</strong></p>

            <p><span class="muted sepV_b">Trạng thái: </span>
                <strong>
                    @if(array_key_exists($order->status,$status))
                        {{ $status[$order->status] }}
                    @endif
                </strong>
            </p>
        </address>
    </div>
</div>
<div class="row-fluid">
    <div class="span6">
        <p><strong class="muted">Thông tin tài khoản</strong></p>
        <address>
            <p>Tài khoản: <strong>{{ $user->username }}</strong></p>

            <p>Họ và tên: <strong>{{ $user->full_name }}</strong></p>

            <p>Email: <strong>{{ HTML::mailto($user->email) }}</strong></p>
        </address>
    </div>
    <div class="span6">
        <p><strong class="muted">Thông tin giao hàng</strong></p>
        <address>
            @if($order->address_id == 0)
            Giao dịch tai cửa hàng
            @else
            <p>Người nhận: <strong>{{ $address->full_name }}</strong></p>
            <?php
            $districts = $address->districts()->get()->last();
            $provinces = $districts->provinces()->get()->last();
            $tmp = $districts->name . ' - ' . $provinces->name;
            ?>
            <p>Địa chỉ: <strong>{{ $address->address }} - {{ $tmp }}</strong></p>
            <p>Điện thoại: <strong>{{ $address->phone }}</strong></p>
            @endif
        </address>
    </div>
</div>
<div class="row-fluid">
    <div class="span12">
        <table class="table">
            <thead>
            <tr>
                <th>Sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá (đ)</th>
                <th class="invoice_tar">Thành tiền</th>
            </tr>
            </thead>
            <tbody>
            @foreach($items as $item)
            <tr>
                <td>
                    @if(empty($item->products()))
                    ID SP: <strong>{{ $item->product_id }}</strong>
                    @else
                    {{$item->products()->name}}<br>
                    Mã SP: <strong>{{$item->products()->code}}</strong>
                    @endif
                </td>
                <td>{{ number_format($item->quantity,0,',','.') }}</td>
                <td>{{ number_format($item->price,0,',','.') }}</td>
                <td class="invoice_tar">{{ number_format(($item->price*$item->quantity),0,',','.') }} đ</td>
            </tr>
            @endforeach
            </tbody>
            <tfoot>
            <tr>
                <td class="invoice_tar" colspan="4">
                    <div class="span6 text-left">
                        @if($order->status >= 1)
                        {{ Form::open(array('action'=>array('AdminOrderController@postUpdate', $order->id), 'id'=>'frm_order')) }}
                        @if(Session::has('order'))
                        <div class="alert alert-success">
                            <a class="close" data-dismiss="alert">×</a>
                            <strong>{{ Session::get('order') }}</strong>
                        </div>
                        @endif
                        <div class="row-fluid">
                            <div class="span12">
                                {{ Form::select('status', $status, $order->status, array('id'=>'order_status')) }}
                            </div>
                        </div>
                        <div class="row-fluid">
                            <div class="span12">
                                <button class="btn btn-info" id="order_submit" type="submit">Cập nhật đơn hàng</button>
                            </div>
                        </div>
                        {{ Form::close() }}
                        @endif
                    </div>
                    <div class="span6">

                        <p class="sepH_a text-success"><strong><span class="sepV_b">Tổng cộng </span>{{ number_format($order->total_amount,0,',','.') }} đ</strong></p>
                    </div>
                </td>
            </tr>
            </tfoot>
        </table>
    </div>
</div>
<div class="row-fluid">
    <div class="span12">
        <p class="sepH_a"><span class="label label-info">Ghi chú</span></p>

        <p>{{ $order->note }}</p>
    </div>
</div>
<div class="row-fluid">
    <div class="span12">
        <div class="chat_box">
            <div class="row-fluid">
                <div class="span12 chat_content">
                    <div class="chat_heading clearfix">
                        Bình luận:
                    </div>
                    <div class="msg_window">
                        <div class="chat_msg clearfix msg_clone" style="display:none">
                            <div class="chat_msg_heading"><span class="chat_msg_date"></span><span
                                    class="chat_user_name"></span></div>
                            <div class="chat_msg_body"></div>
                        </div>
                        @foreach($comments as $comment)
                        <div class="chat_msg clearfix">
                            <div class="chat_msg_heading">
                                <span class="chat_msg_date">{{ date_format($comment->created_at, 'd-m-Y H:i') }}</span>
                                <span class="chat_user_name">{{ $comment->user->username }}</span>
                            </div>
                            <div class="chat_msg_body">
                                {{ $comment->content }}
                            </div>
                        </div>
                        @endforeach
                    </div>
                    @if($order->status >= 1)
                    <div class="chat_editor_box">
                        {{ Form::textarea('comment_editor',null, array('id'=>'comment_editor', 'cols'=>'30', 'maxlength'=>200, 'rows'=>'3', 'class'=>'span11', 'placeholder'=>'Nhập nội dung')) }}
                        <div class="btn-group send_btns">
                            <a href="javascript:void(0)" class="btn btn-mini send_msg">Gửi</a>
                        </div>
                    </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>

@stop