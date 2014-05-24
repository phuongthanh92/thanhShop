@extends('backend.layouts.default')

@section('breadcrumb')
<li>{{ link_to_action('AdminProductController@getIndex', 'Quản lý Sản phẩm') }}</li>
<li>Cập nhật sản phẩm</li>
@stop

@section('styles')
<!-- dynatree -->
{{ HTML::style('public/lib/dynatree/src/skin/ui.dynatree.css') }}
<!-- wizard -->
{{ HTML::style('public/lib/stepy/jquery.stepy.css') }}
<script>
    var checkCode = "{{ action('AdminProductController@postCheckCode', $product->_id) }}";
    var checkSlug = "{{ action('AdminProductController@postCheckSlug') }}";
    var getProducts = "{{ action('AdminProductController@postProduct') }}";
    var productTotal = "{{ $count }}";
    var related_products = {{$related_products}};
    var imagesRules = {
        accept  : 'image/*'
    };

</script>
@stop
@section('scripts')
<!--datepicker-->
{{ HTML::script('public/js/backend/forms/jquery.counter.min.js') }}
{{ HTML::script('public/js/backend/gebo_gallery.js') }}
@include('backend.includes.filemanager')
<!--dynatree-->
{{ HTML::script('public/lib/dynatree/dist/jquery.dynatree.min.js') }}
{{ HTML::script('public/js/backend/forms/jquery.ui.touch-punch.min.js') }}
<!-- wizard -->

<!--products-->
{{ HTML::script('public/js/jquery/jquery.form.min.js') }}
{{ HTML::script('public/js/jquery/jquery.number.min.js') }}
{{ HTML::script('public/js/backend/project/slug.js') }}
{{ HTML::script('public/lib/stepy/jquery.stepy.min.js') }}

{{ HTML::script('public/js/backend/project/my_product.js') }}

@stop

@section('content')
<div class="row-fluid heading">
    <div class="span12">
        <h3>
            Cập nhật sản phẩm
        </h3>
    </div>
</div>
<?php $general = $images = $price = $seo = $other = array();
foreach ($groups as $key => $val) {
    if (array_key_exists($val, $attributes)) {
        switch ($attributes[$val]->group) {
            case 'general':
                array_push($general, $attributes[$val]);
                break;
            case 'image':
                array_push($images, $attributes[$val]);
                break;
            case 'price':
                array_push($price, $attributes[$val]);
                break;
            case 'seo':
                array_push($seo, $attributes[$val]);
                break;
        }
    }
    $cGeneral = count($general) - 1;
    $cImages  = count($images) - 1;
    $cPrice   = count($price) - 1;
    $cSeo     = count($seo) - 1;

}
?>
@if(Session::has('product_message'))
<div class="row-fluid">
    <div class="alert alert-info">
        <a class="close" data-dismiss="alert">×</a>
        {{Session::get('product_message')}}
    </div>
</div>
@endif
<div class="row-fluid">
{{ Form::model($product, array('action' => array('AdminProductController@postUpdate', $id),'id'=>'frmProduct ', 'class'=>'stepy-form form-horizontal', 'enctype' => 'multipart/form-data')) }}
{{ Form::hidden('_id',null,array('id'=>'_id')) }}
<fieldset title="Thông tin chung">
    <legend>Thông tin cơ bản</legend>
    <div class="row-fluid">
        @foreach($general as $val)
        <div class="control-group">
            <label for="{{ $val->code }}" class="control-label">{{ $val->label }}
                @if($val->require == 1) <span class="f_req"> * </span> @endif
            </label>

            <div class="controls">
                @if($val->type == 'text')
                {{ Form::text($val->code, null, array('id' => $val->code, 'class' =>
                'span6')) }}
                @elseif($val->type == 'select')
                {{ Form::select($val->code, $val->data) }}
                @elseif($val->type == 'price')
                {{ Form::text($val->code, null, array('id' => $val->code, 'class' =>
                'price')) }}
                @elseif($val->type == 'multiselect')
                @foreach($val->data as $key => $label)
                <div>
                    <div class="span2">
                        <label class="checkbox">
                            {{ Form::checkbox($val->code . '[]', $key) }}
                            {{ $label }}
                        </label>
                    </div>
                </div>
                @endforeach
                @elseif($val->type == 'date')
                <div class="input-append date" data-date-format="dd/mm/yyyy">
                    {{ Form::text($val->code, null, array('id' =>
                    $val->code, 'class' => 'datepicker',)) }}
                    <span class="add-on"><i class="splashy-calendar_day"></i></span>
                </div>
                @elseif($val->type == 'textarea')
                <textarea name="{{ $val->code }}" id="{{ $val->code }}" cols="10" rows="4"
                          class="@if($val->require == 1) required @endif span10 wysiwg">{{ $product->{$val->code} }}</textarea>
                @endif
            </div>
        </div>
        @endforeach
        <div class="control-group">
            <label class="control-label">
                Số lượng
                <span class="f_req"> * </span> :
            </label>

            <div class="controls">
                {{ Form::text('quantity', null,array('id'=>'quantity', 'class'=>'integer')) }}
            </div>
        </div>
        <div class="control-group">
            <label class="control-label">
                Kho hàng
                <span class="f_req"> * </span> :
            </label>

            <div class="controls">
                {{ Form::select('stock',array('1'=>'Còn hàng', '0'=>'Hết hàng')) }}
            </div>
        </div>
    </div>
</fieldset>
<fieldset title="Thông tin về giá">
    <legend>Thông tin về giá</legend>
    <div class="row-fluid">
        @foreach($price as $val)
        <div class="control-group">
            <label for="{{ $val->code }}" class="control-label">{{ $val->label }}
                @if($val->require == 1) <span class="f_req"> * </span> @endif
            </label>

            <div class="controls">
                @if($val->type == 'date')
                <div class="input-append date" data-date-format="dd/mm/yyyy">
                    {{ Form::text($val->code, null, array('id' => $val->code,'class'=>'datepicker',))
                    }}
                    <span class="add-on"><i class="splashy-calendar_day"></i></span>
                </div>
                @else
                {{ Form::text($val->code, null, array('id' => $val->code, 'class'=>'price')) }}
                @endif
            </div>
        </div>
        @endforeach
    </div>
</fieldset>
<fieldset title="SEO">
    <legend>SEO</legend>
    @foreach($seo as $val)
    <div class="row-fluid">
        <label for="{{ $val->code }}" class="control-label">{{ $val->label }}
            @if($val->require == 1) <span class="f_req"> * </span> @endif:
        </label>

        <div class="controls">
            @if($val->type == 'textarea')
            <textarea name="{{ $val->code }}" id="{{ $val->code }}" cols="10" rows="4"
                      class="@if($val->require == 1) required @endif span10">{{ $product->{$val->code} }}</textarea>
            @else
            {{ Form::text($val->code, null, array('id' => $val->code, 'class' => 'span10')) }}
            @endif
        </div>
    </div>
    @endforeach
</fieldset>
<fieldset title="Hình ảnh">
    <legend>Hình ảnh</legend>
    @foreach($images as $val)
    <div class="row-fluid">
        <div class="control-group" id="image_control">
            <label for="{{ $val->code }}" class="control-label">{{ $val->label }}
                @if($val->require == 1) <span class="f_req"> * </span> @endif
            </label>
            <div class="controls">
                @if($val->type == 'file')
                {{ Form::file($val->code.'[]', array('id'=>$val->code,  'multiple'=>'multiple','accept'=>'image/*')); }}
                @endif
            </div>
        </div>
    </div>
    <?php
    $thumbnail = null;
    if (isset($product->image) && is_array($product->image)) {
        foreach ($product->image as $val) {
            $thumbnail .= '<li class="thumbnail" style="display: inline-block">';
            $thumbnail .= '<a class="images" href="' . url($val) . '">';
            $thumbnail .= '<img src="' . url($val) . '" style="height:100px;width:100px" />';
            $thumbnail .= '</a>';
            $thumbnail .= '<p><label><a href="javascript:void(0)" title="Xoá">';
            $thumbnail .= '<i class="image-delete icon-trash" data-path="' . $val . '">';
            $thumbnail .= '</i></a><input type="checkbox" name="image_delete[]" value="' . $val . '" style="display: none" ></label></p>';
            $thumbnail .= '</li>';
        }
    }
    ?>
    @endforeach
    <div id="large_grid" class="control-group wmk_grid">
        <h4>Ảnh cũ</h4>
        <ul id="imageUpload" data-url="{{ action('AdminFileController@postDelete') }}">
            {{ $thumbnail }}
        </ul>
    </div>
    <div class="span12">
        <ul id="tmp_images_upload" class="thumbnails">

        </ul>
    </div>
</fieldset>
<fieldset title="Danh mục sản phẩm">
    <legend>Danh mục sản phẩm</legend>
    <div class="row-fluid">
        <div class="control-group">
            <label class="control-label">Chọn danh mục sản phẩm</label>

            <div class="controls" id="tree">
                {{ $tree }}
                <input type="hidden" id="category" name="category">
            </div>
        </div>
    </div>
</fieldset>
<fieldset title="Sản phẩm liên quan">
    <legend>Sản phẩm liên quan</legend>
    <div class="row-fluid">
        <div class="control-group">
            <table class="table table-striped" id="products">
                <thead>
                <tr>
                    <th></th>
                    <th class="text-center">Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Nhóm sản phẩm</th>
                    <th>Trạng thái</th>
                    <th>Giá (VNĐ)</th>
                </tr>
                </thead>
                <tbody id="listRelated">
                @foreach($products as $val)
                <tr>
                    <td class="table_checkbox">
                        <input type="checkbox" name="related_products[]"
                        @if(isset($product->related_products) && is_array($product->related_products) &&
                        array_search($val->_id, $product->related_products))
                        checked="checked"
                        @endif
                        value="{{ $val->_id }}">
                    </td>
                    <td class="text-center">{{ $val->code }}</td>
                    <td>{{ $val->name }}</td>
                    <td>{{ $val->groupAttribute['name'] }}</td>
                    <td>@if($val->status ==1 ) Hiển thị @else Ẩn @endif</td>
                    <td>{{ number_format($val->price,0,',','.') }}</td>
                </tr>
                @endforeach
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="6">
                        <div class="pagination-right">
                            <p id="total"></p>

                            <p><a id="loadProduct" href="javascript: void(0)" style="display: none">Load thêm sản
                                    phẩm</a>
                            </p>
                        </div>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    </div>
</fieldset>
<input id="submit" type="submit" class="finish btn " value="Cập nhật">
{{ Form::close() }}
</div>

@stop

