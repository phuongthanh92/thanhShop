@extends('frontend.layouts.default')

@section('title')
@if($category->meta_title === null)
{{ $category->meta_title }} :: @parent
@else
{{ $category->name }} - @parent
@endif
@stop
@section('meta')
<meta name="description" content="{{ $category->meta_description }}"/>
<meta name="keywords" content="{{ $category->meta_keyword }}"/>
@stop
@section('breadcrumb')
{{ $breadcrumb }}
@stop

@section('content')
<section>
    <form method="get" action="{{ action('CategoriesController@getIndex', $category->slug) }}" class="form-horizontal" role="form" id="frm-filters" >
        <div class="container" id="category">
            <div class="row">
                <div class="col-md-3">
                    @widget_sidebar
                    <!-- end .sidebar -->
                </div>
                <div class="col-md-9">
                    <div class="col-md-12">
                        <div class="arrange pull-right">
                            {{ Form::select('order', array(
                            '0'=>'Sản phẩm mới nhất',
                            'price-desc'=>'Giá giảm dần',
                            'price-asc' => 'Giá tăng dần',
                            'name-a-z'=>'Tên a-z',
                            'name-z-a' => 'Tên z-a'
                            ), $order, array('id'=>'filter_order', 'class'=>'h_filter')) }}
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div id="listProduct">
                        <?php $tmpSlug = $category->slug; ?>
                        @include('frontend.products.grid')
                    </div>
                    <div id="viewed">
                        <div class="tittle-box">
                            SẢN PHẨM ĐÃ XEM
                        </div>
                        <div class="content-box">
                            <ul id="list-viewed">

                            </ul>
                            <!--                        <button class="prev"><<</button>-->
                            <!--                        <button class="next">>></button>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</section>
@stop
