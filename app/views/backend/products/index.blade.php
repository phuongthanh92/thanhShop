@extends('backend.layouts.default')

@section('breadcrumb')
<li>{{ link_to_action('AdminProductController@getIndex', 'Quản lý sản phẩm') }}</li>
@stop

@section('scripts')
<script>
    var delete_url = "{{action('AdminProductController@postDelete')}}/";
</script>
{{ HTML::script('public/js/backend/project/my_product_index.js') }}
@stop
@section('content')

<div class="row-fluid heading">
    <div class="span12">
        <h3>
            <form method="get" class="pull-right form-inline form-search">
                <div id="dt_gal_length" class="dataTables_length">
                    <label>
                        Hiển thị
                        {{ Form::select('limit', array(10=>10, 20=>20, 30=>30, 50=>50), $row, array('class' => 'limit' )) }}
                    </label>
                    <label>
                        Sắp xếp
                        {{ Form::select('order', array('new'=> 'Sản phẩm mới cập nhật', 'quantityASC'=> 'Số lượng tăng', 'quantityDESC'=>'Số lượng giảm', 'status'=>'Trạng thái'), $sortBy, array('size'=>1 )) }}
                    </label>
                    <input type="text" placeholder="Nhập từ khóa muốn tìm..." name="keyword" value="{{ $keyword }}">
                    <button type="submit" class="btn-search">Tìm kiếm</button>
                </div>
                <input type="hidden" id="page-hidden" value="1">
            </form>
            <div class="btn-group pull-left">
                <a href="{{ action('AdminProductController@getGroup') }}" class="btn">
                    <span class="icon-plus-sign"></span> Thêm sản phẩm
                </a>
            </div>
        </h3>
    </div>
</div>
<div>
    <h3>Danh sách sản phẩm</h3>
    <table class="table table-bordered table-striped table_vam">
        <thead>
        <th class="text-center">Hình ảnh</th>
        <th>Tên sản phẩm</th>
        <th>Nhóm</th>
        <th class="text-center">Trạng thái</th>
        <th>Giá (VNĐ)</th>
        <th>Số lượng</th>
        <th>Tuỳ chọn</th>
        </thead>
        <tbody>
        @if(count($products)>0)
        @foreach($products as $product)
        <tr>
            <td style="width: 60px">
                @if(isset($product->image[0]))
                <a href="{{ url($product->image[0]) }}" title="{{ $product->name }}"
                   class="cbox_single thumbnail ext_disabled">
                    {{ HTML::image($product->image[0],"$product->name", array('style'=>'height:50px;width:50px')) }}
                </a>
                @endif
            </td>
            <td>{{ $product->name }}</td>
            <td>{{ $product->groupAttribute['name'] }}</td>
            <td class="text-center">@if($product->status == 1) Hiển thị @else Ẩn @endif</td>
            <td>{{ number_format($product->price,0,',','.') }}</td>
            <td>{{ number_format($product->quantity,0,',','.') }}</td>
            <td>
                <a href="{{ action('AdminProductController@getEdit', $product->id) }}" class="sepV_a" title="Edit"><i
                        class="icon-pencil"></i></a>
                <a href="javascript: void(0)" title="Delete"><i class="icon-trash product-delete"
                                                                data-id="{{ $product->_id }}"
                                                                data-name="{{ $product->name }}"></i></a>
            </td>
        </tr>
        @endforeach
        @else
        <tr><td colspan="7">Không có sản phẩm</td></tr>
        @endif
        </tbody>
        <tfoot>
        </tfoot>
    </table>
</div>
<div class="row-fluid">
    <div class="pagination pagination-right">
        {{ $products->links() }}
    </div>
</div>
@stop