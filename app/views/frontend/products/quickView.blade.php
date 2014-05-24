<div class="container">
    <div id="detail">
        <div class="col-md-9">
            <div class="row">
                <div class="col-md-6 img_product_wrap">
                    <div class="images-product" id="imgZoom">
                        <div class="targetarea big-size" style="">
                            <img id="multizoom1" src="{{url($product->image[0])}}" class="img-responsive" />
                        </div>
                        <div class="multizoom1 thumbs list-images">
                            @foreach($product->image as $val)
                            <img src="{{resizeImage($val,100)}}" alt="" onerror="imgError(this);" >
                            @endforeach
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="col-md-6">
                    <div class="short-info">
                        <div class="name-product">
                            <a href={{action('ProductController@getIndex', array('san-pham', $product->slug, $product->_id))}}>{{$product->name}}</a>
                            <p>Mã sản phẩm: <span class="code-product">{{ $product->code }}</span></p>
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
                                    'orther'     =>  'Khác',
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
        </div>
    </div>
</div>