@extends('frontend.layouts.default')

@section('title')
    {{ $title }} :: @parent
@stop
@section('breadcrumb')
<li>Tìm kiếm</li>
@stop

@section('content')
@include('backend.includes.errors')
<section>
    <form method="get" action="{{ action('ProductController@getSearch') }}" id="frm-filters" >
    <input type="hidden" name="keyword" value="{{ $keywords }}">
    <div class="container" id="search-list">
        <div class="row">
            <div class="col-md-3">
                @widget_sidebar
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
                    <?php $tmpSlug = 'tim-kiem'; ?>
                    @include('frontend.products.grid')
                </div>

                <div id="viewed">
                    <div class="tittle-box">
                        SẢN PHẨM ĐÃ XEM
                    </div>
                    <div class="content-box">
<!--                        <div class="owl-carousel owl-theme" id="list-viewed">-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
</section>
@stop