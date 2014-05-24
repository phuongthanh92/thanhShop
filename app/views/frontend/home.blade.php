@extends('frontend.layouts.default')
@section('title')
    {{ $title }} :: @parent
@stop
@section('content')
@if(!Agent::isMobile())
<div class="slide">
    <div class="container">
        <div id="carousel-example-generic">
            <!-- Wrapper for slides -->
            <div class="owl-carousel" id="slide-home">
                @foreach($slides as $key=>$slide)
                @if($slide->status==1)
                <div class="item @if($key===0) @endif">
                    <a href="@if($slide->link===null) # @else {{ url($slide->link) }} @endif">
                        <img src="{{ resizeImage($slide->image, 1150, 300) }}" alt="{{ $slide->title }}">
                    </a>
                    <div class="carousel-caption">
                        <h4>{{ $slide->title }}&nbsp;</h4>
                    </div>
                </div>
                @endif
                @endforeach
            </div>
    </div>
    </div>
</div>
@endif
<div class="focus">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="md-image focus-img">
                    @if(isset($banners[0]))
                    <a href="{{ url($banners[0]->link) }}"><img src="{{ url($banners[0]->image) }}" alt="" class="img-responsive"></a>
                    <div class="more">
                        <a href="{{ url($banners[0]->link) }}">Chi tiết</a>
                    </div>
                    @endif
                </div>
                <div class="sm-image focus-img">
                    @if(isset($banners[1]))
                    <a href="{{ url($banners[1]->link) }}"><img src="{{ url($banners[1]->image) }}" alt="" class="img-responsive"></a>
                    <div class="more">
                        <a href="{{ url($banners[1]->link) }}">Chi tiết</a>
                    </div>
                    @endif
                </div>
            </div>
            <div class="col-sm-4">
                <div class="lag-image focus-img">
                    @if(isset($banners[0]))
                    <a href="{{ url($banners[2]->link) }}"><img src="{{ url($banners[2]->image) }}" alt="" class="img-responsive"></a>
                    <div class="more">
                        <a href="{{ url($banners[2]->link) }}">Chi tiết</a>
                    </div>
                    @endif
                </div>
            </div>
            <div class="col-sm-4">
                <div class="md-image focus-img">
                    @if(isset($banners[0]))
                    <a href="{{ url($banners[3]->link) }}"><img src="{{ url($banners[3]->image) }}" alt="" class="img-responsive"></a>
                    <div class="more">
                        <a href="{{ url($banners[3]->link) }}">Chi tiết</a>
                    </div>
                    @endif
                </div>
                <div class="sm-image focus-img">
                    @if(isset($banners[0]))
                    <a href="{{ url($banners[4]->link) }}"><img src="{{ url($banners[4]->image) }}" alt="" class="img-responsive"></a>
                    <div class="more">
                        <a href="{{ url($banners[4]->link) }}">Chi tiết</a>
                    </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end .focus -->
<div class="product-list">
    <div class="container">
        <ul class="nav nav-pills  nav-justified">
            <li><a href="#hot-product" data-toggle="tab">Sản phẩm HOT nhất</a></li>
            <li class="active"><a href="#new-product" data-toggle="tab">Sản phẩm mới nhất</a></li>
            <li><a href="#article" data-toggle="tab">Xu hướng thời trang</a></li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
            <div class="tab-pane active" id="new-product">
                <div class="row">
                    @if(count($products) > 0)
                    @foreach($products as $key => $new)
                    <div class="col-sm-4 col-md-3">
                        <div class="product product-fix">
                            <div class="img-product">
                                <?php
                                $new_tmp_link = ($new->slug != null) ? 'home/' . $new->slug . '-' . $new->_id : 'home/' . Str::slug($new->name) . '-' . $new->_id;
                                ?>
                                <a href="{{ $new_tmp_link }}">
                                    @if(isset($new->image[0]))
                                    {{ HTML::image(resizeImage($new->image[0], 260  ), $new->name, array('class' =>
                                    'img-responsive', 'title'=>$new->name)) }}
                                    @endif
                                </a>
                                <div class="action">
                                    <a href="javascript: void(0)" class="quick-view" data-id="{{ $new->_id }}">XEM NHANH</a>
                                </div>
                            </div>
                            <!-- end .img item -->
                            <div class="info-product">
                                <div class="name-product">
                                    <a href="{{ $new_tmp_link }}" title="{{ $new->name }}">
                                        {{ $new->name }}
                                    </a>
                                </div>
                                <div class="price-product">
                                    <div class="pull-left code-product">
                                        Mã SP: {{ $new->code }}
                                    </div>
                                    <div class="pull-right">
                                        @if($new->special_price > 0 && $new->special_price < $new->price && $new->special_to_date > time() && $new->special_from_date < time())
                                        <div class="old-price"><del>{{ number_format($new->price, 0, ',', '.') }} VNĐ</del></div>
                                        <div class="current-price">{{ number_format($new->special_price, 0, ',', '.') }} VNĐ</div>
                                        @else
                                        <div class="current-price">{{ number_format($new->price, 0, ',', '.') }} VNĐ</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="group-action">
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="javascript:void(0)" class="add-to-cart" data-send-text="<span class='glyphicon glyphicon-asterisk icon-spin'></span>" title="Cho vào giỏ hàng" data-id="{{ $new->_id }}">
                                                MUA NGAY
                                            </a>
                                        </li>
                                        <li class="pull-right">
                                            <a href="javascript:void(0)" class="to-compare" data-send-text="<span class='glyphicon glyphicon-asterisk icon-spin'></span>" title="So sánh" data-id="{{ $new->_id }}"><span class="glyphicon glyphicon-retweet"></span></a>
                                        </li>
                                        <li class="pull-right">
                                            <a href="javascript:void(0)" class="like" data-send-text="<span class='glyphicon glyphicon-asterisk icon-spin'></span>" title="Yêu thích" data-id="{{ $new->_id }}"><span class="glyphicon glyphicon-heart"></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                    @else
                    Chưa có sản phẩm.
                    @endif
                </div>
            </div>
            <!-- end #new-product -->
            <div class="tab-pane" id="article">
                <div class="row" id="postData">
                    @if(count($articles) == 0)
                    <div class="col-md-4">
                        Chưa có bài viết
                    </div>
                    @else
                    @foreach($articles as $post)
                    <div class="col-md-4">
                        <div class="post">
                            <div class="image-post">
                                <a href="{{ action('ArticlesController@getPost', array($post->slug, $post->id)) }}" style="text-align: center">
                                    <img src="{{ resizeImage($post->image, 350, 250) }}" class="img-responsive text-center">
                                </a>
                            </div>
                            <div class="content-post">
                                <h4>{{ link_to_action('ArticlesController@getPost', $post->title, array($post->slug, $post->id)) }}</h4>
                                <p>
                                    {{ $post->short_description }}
                                </p>
                                <div class="read-more">
                                    {{ link_to_action('ArticlesController@getPost', 'Xem tiếp', array($post->slug, $post->id)) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                    @endif
                </div>
                <div class="row">
                    @if($totalPost>3)
                    <div class="col-md-12" style="text-align: center">
                        <button class="button" data-post="{{$totalPost}}" data-loading-text="Loading..." id="load-post">Tải thêm</button>
                    </div>
                    @endif
                </div>
            </div>
            <!-- end #trend -->
            <div class="tab-pane" id="hot-product">
                <div class="row">
                    @if(count($hots)>0)
                    @foreach($hots as $hot)
                    <div class="col-md-3 col-sm-4">
                        <div class="product product-fix">
                            <div class="img-product">
                                <?php
                                $hot_tmp_link = ($hot->slug != null) ? 'home/' . $hot->slug . '-' . $hot->_id : 'home/' . Str::slug($hot->name) . '-' . $hot->_id;
                                ?>
                                <a href="{{ $hot_tmp_link }}">
                                    @if(isset($hot->image[0]))
                                    {{ HTML::image(resizeImage($hot->image[0],260), $hot->name, array('class' =>
                                    'img-responsive', 'title'=>$hot->name)) }}
                                    @endif
                                </a>
                                <div class="action">
                                    <a href="javascript: void(0)" class="quick-view" data-id="{{ $hot->_id }}">XEM NHANH</a>
                                </div>
                            </div>
                            <!-- end .img item -->
                            <div class="info-product">
                                <div class="name-product">
                                    <a href="{{ $hot_tmp_link }}" title="{{ $hot->name }}">
                                        {{ $hot->name }}
                                    </a>
                                </div>
                                <div class="price-product">
                                    <div class="pull-left code-product">
                                        Mã SP: {{ $hot->code }}
                                    </div>
                                    <div class="pull-right">
                                        @if($hot->special_price > 0 && $hot->special_price < $hot->price && $hot->special_to_date > time() && $hot->special_from_date < time())
                                        <div class="old-price"><del>{{ number_format($hot->price, 0, ',', '.') }} VNĐ</del></div>
                                        <div class="current-price">{{ number_format($hot->special_price, 0, ',', '.') }} VNĐ</div>
                                        @else
                                        <div class="current-price">{{ number_format($hot->price, 0, ',', '.') }} VNĐ</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="group-action">
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="javascript:void(0)" class="add-to-cart" data-send-text="<span class='glyphicon glyphicon-asterisk icon-spin'></span>" title="Cho vào giỏ hàng" data-id="{{ $hot->_id }}">
                                                MUA NGAY
                                            </a>
                                        </li>
                                        <li class="pull-right">
                                            <a href="javascript:void(0)" class="to-compare" data-send-text="<span class='glyphicon glyphicon-asterisk icon-spin'></span>" title="So sánh" data-id="{{ $hot->_id }}"><span class="glyphicon glyphicon-retweet"></span></a>
                                        </li>
                                        <li class="pull-right">
                                            <a href="javascript:void(0)" class="like" data-send-text="<span class='glyphicon glyphicon-asterisk icon-spin'></span>" title="Yêu thích" data-id="{{ $hot->_id }}"><span class="glyphicon glyphicon-heart"></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                    @else
                    Chưa có sản phẩm.
                    @endif
                </div>
            </div>
            <!-- end #hot-product -->
        </div>
    </div>
</div>
<!--end .product-list -->
@stop
