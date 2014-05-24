@extends('frontend.layouts.default')

@section('title')
{{ $title }} :: @parent
@stop

@section('breadcrumb')
    <li>So sánh sản phẩm</li>
@stop
@section('content')
<div class="container">
    <section id="compare">
        <div class="tittle">So sánh sản phẩm</div>
        @if(count($products) == 0)
        Chưa có sản phẩm
        @else
        <?php

            $width = 90;
            switch(count($products)){
                case 2: $width = 45;break;
                case 3: $width = 30;break;
            }
            $product = $image = $name = $price = $size = $code = $color = $description = null;
            foreach($products as $k => $val){
                $product .= "<td width='{$width}%' class='text-center'>Sản phẩm ".($k +1)."</td>";
                $image .= "<td style='text-align:center'><img style='display: inline-block;' src=\"".resizeImage($val->image[0],300)."\" class=\"img-responsive\" alt=\"{$val->name}\"></td>";
                $name .= "<td>" . link_to_action('ProductController@getIndex', $val->name, array('compare', $val->slug, $val->_id)) . "</td>";
                if($val->special_price > 0 && $val->special_price < $val->price && $val->special_to_date > time() && $val->special_from_date < time()){
                    $tmp = "<td><div class=\"old-price\"><del>". number_format($val->price, 0, ',', '.') . " đ</del></div>
                            <div class=\"current-price\">".number_format($val->special_price, 0, ',', '.')." đ</div></td>";
                }else{
                    $tmp = "<td><div class=\"current-price\">" . number_format($val->price, 0, ',', '.') ."  đ</div></td>";
                }
                $price .= $tmp;
                $description .= "<td>{$val->short_description}</td>";
                $code .= "<td>{$val->code}</td>";
                $size .= "<td>{$val->size}</td>";
                $color .= '<td>';
                if(is_array($val->color)){
                    $data1 = array();
                    $colorData = array(
                        'red'    => 'Đỏ',
                        'white'  => 'Trắng',
                        'yellow' => 'Vàng',
                        'black'  => 'Đen',
                        'green'  => 'Xanh lá cây',
                        'blue'   => 'Xanh da trời',
                        'orange' => 'Cam',
                        'violet' => 'Tím',
//        'other' => 'Khác',
                    );
                    foreach($val->color as $val1){
                        if(array_key_exists($val1, $colorData)){
                            array_push($data1, $colorData[$val1]);
                        }
                    }
                    $color .= implode(', ',$data1);
                }

                $color .= '</td>';


            }
        ?>
        <table class="table table-responsive">
            <thead>
            <tr>
                <th width="10%">&nbsp;</th>
                {{ $product }}
            </tr>
            </thead>
            <tbody>
            <tr>
                <th style="vertical-align: middle">Hình ảnh</th>
                {{ $image }}
            </tr>
            <tr>
                <th style="vertical-align: middle">Tên sản phẩm</th>
                {{ $name }}
            </tr>
            <tr>
                <th style="vertical-align: middle">Mã sản phẩm</th>
                {{ $code }}
            </tr>
            <tr>
                <th style="vertical-align: middle">Mô tả</th>
                {{ $description }}
            </tr>
            <tr>
                <th style="vertical-align: middle">Giá sản phẩm</th>
                {{ $price }}
            </tr>
            <tr>
                <th style="vertical-align: middle">Size</th>
                {{ $size }}
            </tr>
            <tr>
                <th style="vertical-align: middle">Màu sắc</th>
                {{ $color }}
            </tr>
            </tbody>
        </table>
        @endif
    </section>
</div>
@stop