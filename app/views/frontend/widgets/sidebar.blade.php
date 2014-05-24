<div class="sidebar">
    <div class="category">
        <div class="tittle-box">
            DANH MỤC SẢN PHẨM
        </div>
        <div class="content-box">
            <ul class="list-unstyled" id="category-bar">
                @foreach($categories as $val)
                @if($val->parent_id===0)
                <li><a href="{{ url($val->slug) }}" data-slug="{{ $val->slug }}">{{ $val->name }} <span
                            class="quantity">&nbsp;</span></a></li>
                @endif
                @endforeach
            </ul>
        </div>
    </div>
    <div class="filter" id="filter">
        <div class="tittle-box">
            Lọc sản phẩm
        </div>
        <div class="content-box">
            <h3 class="title">Theo khoảng giá (VNĐ)</h3>
            <div class="input-group input-group-sm">
                <span class="input-group-addon">Từ: &nbsp;&nbsp;</span>
                <input type="text" class="form-control h_price text-right" value="{{Input::get('priceFrom')}}" id="priceFrom">
            </div>
            <div class="clearfix"></div>
            <p class="help-block text-right h_price priceHelp" id="priceFromHelp"></p>
            <div class="input-group input-group-sm">
                <span class="input-group-addon">Đến:</span>
                <input type="text" class="form-control h_price text-right" value="{{Input::get('priceTo')}}" id="priceTo">
            </div>
            <div class="clearfix"></div>
            <p class="help-block text-right priceHelp" id="priceToHelp"></p>
            <div class="form-group">
                <div class="col-sm-12">
                    <button type="submit" class="button pull-right">Tìm theo giá</button>
                </div>
            </div>
            <div class="clearfix"></div>
            <h3 class="title">Lọc theo size</h3>
            <?php
            $sizeHTML = null;
            foreach($sizeData as $key => $val){
                $sizeHTML .= '<div class="checkbox"><label class="pull-lef">';
                if(in_array(strtoupper($key), $inputSize)){
                    $sizeHTML .= '<input type="checkbox" name="" class="h_filter h_size" checked="checked" value="' . $key . '">';
                }else{
                    $sizeHTML .= '<input type="checkbox" name="" class="h_filter h_size" value="' . $key . '">';
                }
                $sizeHTML .= $val . '</label></div>';
            }
            echo $sizeHTML;
            ?>
            <input type="hidden" id="filterSize">
            <div class="clearfix"></div>
            <h3 class="title">Lọc theo màu</h3>
            <?php
            $colorHTML = null;
            foreach($colorData as $key => $val){
                $colorHTML .= '<div class="checkbox"><label class="pull-lef">';
                if(in_array(strtoupper($key), $inputColor)){
                    $colorHTML .= '<input type="checkbox" name="" class="h_filter h_color" checked="checked" value="' . $key . '">';
                }else{
                    $colorHTML .= '<input type="checkbox" name="" class="h_filter h_color" value="' . $key . '">';
                }
                $colorHTML .= $val . '</label></div>';
            }
            echo $colorHTML;
            ?>
            <input type="hidden" id="filterColor">
            <div class="clearfix"></div>
        </div>
    </div>
    <div class="compare">
        <div class="tittle-box">
            <a href="{{ action('ProductController@getCompare') }}">So sánh sản phẩm </a>
        </div>
        <div class="content-box">
            <ul class="list-unstyled" id="list-compare">
                @if(!empty($compare))
                <li class="compare-empty" style="display: none">Chưa có sản phẩm</li>
                @foreach($compare as $val)
                <li>
                    <?php
                    $tmp_compare_slug = 'compare/';
                    $tmp_compare_slug .= isset($val->slug) ? $val->slug : Str::slug($val->name);
                    $tmp_compare_slug .= '-' . $val->_id;
                    ?>
                    <div class="compare-product" data-id="{{ $val->_id }}">
                        <button type="button" data-id="{{ $val->_id }}" class="close compare-remove">&times;</button>
                        <a href="{{ url($tmp_compare_slug) }}">
                            <span class="name-product">{{ $val->name }}</span>
                        </a>
                        <a href="{{ url($tmp_compare_slug) }}">
                            <img src="{{ url($val->image[0]) }}" alt="{{ $val->name }}" class="img-responsive">
                        </a>
                    </div>
                </li>
                @endforeach
                @else
                <li class="compare-empty">Chưa có sản phẩm</li>
                @endif
            </ul>
            <div class="clearfix"></div>
            <div class="pull-right">
                <a class="button" href="{{ action('ProductController@getCompare') }}">So sánh </a>
            </div>
            <div class="clearfix" style="padding: 20px"></div>
        </div>
    </div>
    <div class="clearfix"></div>
</div>