
<div id="list-product">
    <div class="row">
        @if(count($products)==0)
        <div class="col-md-4 col-sm-6">
            <div class="product">
                <p>Không có sản phẩm.</p>
            </div>
        </div>
        @else
        @foreach($products as $product)
        <div class="col-md-4 col-sm-6">
            <div class="product product-fix">
                <div class="img-product">
                    <?php
                    $product_tmp_link = ($product->slug != null) ? $tmpSlug . '/' . $product->slug . '-' . $product->_id : $tmpSlug . '/' . Str::slug($product->name) . '-' . $product->_id;
                    ?>
                    <a href="{{ $product_tmp_link }}">
                        @if(isset($product->image[0]))
                        {{ HTML::image(resizeImageAgent($product->image[0],260), $product->name, array('class' =>
                        'img-responsive', 'title'=>$product->name)) }}
                        @endif
                    </a>
                    <div class="action">
                        <a href="javascript: void(0)" class="quick-view" data-id="{{ $product->_id }}" data-toggle="modal" data-target="#view-content">XEM NHANH</a>
                    </div>
                </div>
                <!-- end .img item -->
                <div class="info-product">
                    <div class="name-product">
                        <a href="{{ $product_tmp_link }}" title="{{ $product->name }}">
                            {{ $product->name }}
                        </a>
                    </div>
                    <div class="price-product grid-product">
                        <div class="text-left code-product grid-code">
                            Mã SP: {{ $product->code }}
                        </div>
                        <div class="text-right grid-price">
                            @if($product->special_price > 0 && $product->special_price < $product->price && $product->special_to_date > time() && $product->special_from_date < time())
                            <div class="old-price"><del>{{ number_format($product->price, 0, ',', '.') }} VNĐ</del></div>
                            <div class="current-price">{{ number_format($product->special_price, 0, ',', '.') }} VNĐ</div>
                            @else
                            <div class="current-price">{{ number_format($product->price, 0, ',', '.') }} VNĐ</div>
                            @endif
                        </div>
                    </div>
                    <div class="group-action">
                        <ul class="list-unstyled">
                            <li>
                                <a href="javascript:void(0)" class="add-to-cart" data-send-text="<span class='glyphicon glyphicon-asterisk icon-spin'></span>" title="Cho vào giỏ hàng" data-id="{{ $product->_id }}">
                                    MUA NGAY
                                </a>
                            </li>
                            <li class="pull-right">
                                <a href="javascript:void(0)" class="to-compare" data-send-text="<span class='glyphicon glyphicon-asterisk icon-spin'></span>" title="So sánh" data-id="{{ $product->_id }}"><span class="glyphicon glyphicon-retweet"></span></a>
                            </li>
                            <li class="pull-right">
                                <a href="javascript:void(0)" class="like" data-send-text="<span class='glyphicon glyphicon-asterisk icon-spin'></span>" title="Yêu thích" data-id="{{ $product->_id }}"><span class="glyphicon glyphicon-heart"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        @endforeach
        @endif
    </div>
</div><!-- end .list-product -->
<div class="page">
    {{ $products->links() }}
</div><!-- end .page -->
