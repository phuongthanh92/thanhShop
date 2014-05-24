@extends('backend.layouts.default')

@section('breadcrumb')
<li>Thống kê</li>
<li>Sản phẩm được bán ra nhiều nhất</li>
@stop

@section('content')
<div class="row-fluid heading">
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
</div>
<div>
    <table class="table table-bordered table-striped table_vam">
        <thead>
        <th class="text-center">Hình ảnh</th>
        <th>Tên sản phẩm</th>
        <th class="text-center">Trạng thái</th>
        <th>Giá (VNĐ)</th>
        <th>SL đã bán</th>
        </thead>
        <tbody>
        @foreach($orders as $val)
        <?php $product = Product::find($val->product_id); ?>
        @if(!empty($product))
        <tr>
            <td style="width: 60px">
                @if(isset($product->image[0]))
                <a href="{{ url($product->image[0]) }}" title="{{ $product->name }}"
                    class="cbox_single thumbnail ext_disabled">
                    {{ HTML::image($product->image[0],"$product->name", array('style'=>'height:50px;width:50px')) }}
                </a>
                @endif
            </td>
            <td>{{ link_to_action('AdminProductController@getEdit', $product->name, $product->_id )}}</td>
            <td class="text-center">@if($product->status == 1) Hiển thị @else Ẩn @endif</td>
            <td>{{ number_format($product->price,0,',','.') }}</td>
            <td>{{ number_format($val->quantity,0,',','.') }}</td>
        </tr>
        @endif
        @endforeach
        </tbody>
        <tfoot>
        </tfoot>
    </table>
</div>
@stop