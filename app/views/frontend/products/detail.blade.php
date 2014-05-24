@extends('frontend.layouts.default')

@section('title')
@if($product->meta_title === null)
{{ $product->meta_title }} :: @parent
@else
{{ $product->name }} - @parent
@endif
@stop

@section('scripts')
<script>
    product_id = "{{ $product->_id }}";
    jQuery(document).ready(function () {
        viewed_products.push();
        $('#filter').remove();
    });
</script>
@stop

@section('breadcrumb')
{{ $breadcrumb }}
<li>{{ $product->name }}</li>
@stop

@section('content')
@include('backend.includes.errors')
<div class="container">
<section id="detail">
<div class="container">
<div class="row">
<div class="col-md-3">
    <style>
        #filter{display: none}
    </style>
    @widget_sidebar
    <!-- end .sidebar -->
</div>
<div class="col-md-9">
    <div class="row">
        <div class="col-md-6 col-sm-12 img_product_wrap">
            <div class="images-product" id="imgZoom">
                <div class="targetarea big-size" style="">
                    <img id="multizoom1" alt="{{ $product->name }}" title="" src="{{ url($product->image[0]) }}"/>
                </div>
                <div class="multizoom1 thumbs list-images">
                    @foreach($product->image as $image)
                    <a href="{{ url($image) }}" data-large="{{ url($image) }}">
                        <img src="{{ resizeImage($image,100) }}" alt="" title=""/>
                    </a>
                    @endforeach
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="short-info">
                <div class="name-product">
                    <a>{{ $product->name }} <span class="code-product">{{ $product->code }}</span></a>
                </div>
                <div class="price-product">
                    @if($product->special_price > 0 && $product->special_price < $product->price && $product->special_to_date > time() && $product->special_from_date < time())
                    <div class="old-price"><del>{{ number_format($product->price, 0, ',', '.') }} VNĐ</del></div>
                    <div class="current-price">{{ number_format($product->special_price, 0, ',', '.') }} VNĐ</div>
                    @else
                    <div class="current-price">{{ number_format($product->price, 0, ',', '.') }} VNĐ</div>
                    @endif
                </div>
                <div class="description">
                    @if(isset($product->short_description)) {{ $product->short_description }} @endif
                </div>
                <div class="action">
                    {{ Form::open(array('action'=>'CartController@postAddItem')) }}
                        <input type="hidden" name="product" value="{{ $product->_id }}">
                        @if($product->size !== '')
                        <?php $size = explode(',', $product->size)  ?>
                        <select class="size" name="size">
                            @foreach($size as $tmp)
                                <option value="{{ $tmp }}">{{ $tmp }}</option>
                            @endforeach
                        </select>
                        @endif
                        @if(isset($product->color) && is_array($product->color))
                        <select class="color" name="color">
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
                                    echo '<option value="'.$tmp.'">'.$color[$tmp].'</option>';
                                }
                            }
                            ?>
                        </select>
                        @endif
                        <div>
                            <div class="quan">
                                <label>Số lượng</label>
                                <input type="text" class="quantity" name="quantity" value="1"/>
                                <button type="button" class="add">+</button>
                                <button type="button" class="sub">-</button>
                            </div>
                        </div>
                        <button type="submit">MUA NGAY</button>
                    {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="open-info">
            <ul class="nav nav-tabs">
                <li class="active"><a href="#more-info" data-toggle="tab">Chi tiết sản phẩm</a></li>
                <li><a href="#comment" data-toggle="tab">Bình luận</a></li>
            </ul>

            <div class="tab-content">
                <div class="tab-pane active" id="more-info">
                    @if(isset($product->description)) {{ $product->description }} @endif
                </div>
                <div class="tab-pane" id="comment">
                    <div id="disqus_thread"></div>
                    <script type="text/javascript">
                        var disqus_shortname = 'hoangnham01'; // required: replace example with your forum shortname
                        (function() {
                            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                        })();
                    </script>
                    <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                    <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>

                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="relate-product">
            <div class="tittle-box">
                Sản phẩm liên quan
            </div>
            <div class="content-box">
                <div id="relatePr" class="aowl-carousel">
                    @foreach($related_products as $item)
                    <div class="item">
                        <a href="@if(isset($item->slug)) {{ url('related-product/'.$item->slug.'-'.$item->_id) }} @else {{url('related-product/'.Str::slig($item->name.'-'.$item->_id))}} @endif" title="{{ $item->name }}">
                            <img class="lazyOwl img-responsive" data-src="{{ url($item->image[0]) }}" alt="{{ $item->name }}">
                        </a>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</section>
</div>
@stop
