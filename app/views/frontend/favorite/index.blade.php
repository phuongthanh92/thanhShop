@extends('frontend.layouts.default')

@section('title') {{ $title }} :: @parent @stop

@section('breadcrumb')
<li>{{ link_to_action('CustomerController@getProfile', 'Thông tin cá nhân') }} </li>
<li>Sản phẩm yêu thích</li>
@stop

@section('content')
<section id="favorite">
<div class="container">
    <div class="row">
        <div class="col-md-3">
            @include('frontend/includes.sidebar_user')
        <!-- end .sidebar -->
        </div>
        <div class="col-md-9">
            <div class="row">
                @if(count($favorites) == 0)
                    Chưa có sản phẩm
                @else
                <table class="table table-responsive">
                    <tbody>
                    @foreach($favorites as $val)
                    <?php $product = $val->product()->get()->last(); ?>
                    @if(!empty($product))
                    <tr>
                        <td style="vertical-align: middle">
                            <a href="javascript:void(0)" class="remove favorite-delete" data-id="{{ $val->_id }}" data-name="{{ $product->name }}" title="Xóa khỏi danh sách">Xoá</a>
                        </td>
                        <td><img src="{{ url($product->image[0]) }}" class="images-product img-responsive"></td>
                        <td>
                            <div class="short-info">
                                <div class="short-info">
                                    <div class="name-product">
                                        <a href="{{ action('ProductController@getIndex', array('favorite', $product->slug, $product->_id)) }}">{{ $product->name }} ({{ $product->code }})</a>
                                    </div>
                                    <div class="price-product">
                                        @if($product->special_price > 0 && $product->special_price < $product->price && $product->special_to_date > time() && $product->special_from_date < time())
                                        <div class="old-price"><del>{{ number_format($product->price, 0, ',', '.') }} đ</del></div>
                                        <div class="current-price">{{ number_format($product->special_price, 0, ',', '.') }} đ</div>
                                        @else
                                        <div class="current-price">{{ number_format($product->price, 0, ',', '.') }} đ</div>
                                        @endif
                                    </div>
                                    <div class="description">
                                        <h5>Áo thun thời trang nam Mk657</h5>
                                        {{ $product->short_description }}
                                    </div>
                                </div>
                            </div></td>
                    </tr>
                    @endif
                    @endforeach
                    </tbody>
                </table>
                @endif
            </div>
        </div><!-- end .list-product -->
        <div class="page">
            {{ $favorites->links() }}
        </div><!-- end .page -->
    </div>
</div>
<script>var favoriteDelete = "{{ action('FavoriteController@postDelete') }}";</script>
</section>
@stop