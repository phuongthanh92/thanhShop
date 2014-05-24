<?php

#--------------Backend--------------------
use Illuminate\Support\Facades\Redis;
use \HoangVN\Category\Menu;
$setting = json_decode(File::get(app_path('database/setting.json')));
Widget::register('widget_admin_navigation', function () use($setting){
    if (strlen(Auth::user()->full_name) <= 30) {
        $user = Auth::user()->username . ' (' . Auth::user()->full_name . ')';
    } else {
        $user = Auth::user()->username . ' (' . substr(Auth::user()->full_name, 0, 30) . '...)';
    }
    $full_name = Auth::user()->full_name;
    $home = $setting->text_logo;
    return View::make('backend.widgets.navigation', compact('user', 'full_name', 'home'));
});
Widget::register('widget_admin_sidebar', function () {
    $order_new = Order::where('status', 1)->count();
    return View::make('backend.widgets.sidebar', compact('order_new', 'comment', 'contact'));
});

#--------------Frontend--------------------
Widget::register('widget_navigation', function () {
    $data            = Category::orderBy('order')->get()->toArray();
    $menu            = new Menu();
    $home = array(
        'id'=>-1,
        'parent_id' => 0,
        'name'=> 'Trang chủ',
        'slug'=>'',
        'order'=>0,
        'active'=>1
    );
    $data            = array_merge(array($home), $data);
    $listId = array();
    foreach($data as $val){
        array_push($listId, $val['id']);
    }
    $navigation      = $menu->buildNavigation($data, 0, $listId);

    return View::make('frontend.widgets.navigation', compact('navigation'));
});
Widget::register('widget_footer', function () use($setting) {
    $config = (array) $setting;
    return View::make('frontend.widgets.footer', compact('config'));
});
Widget::register('widget_header', function () {
    $favorite = 0;
    if(Auth::check()){
        $user = Auth::user();
        $user_id = $user->getAuthIdentifier();
        $favorite = Favorite::where('user_id', $user_id)->where('status', '!=', '0')->count();
    }
    $keyword = Input::has('keyword') ? Input::get('keyword') : null;
    return View::make('frontend.widgets.header', compact('user', 'favorite','keyword'));
});
Widget::register('widget_sidebar', function () {
    $compare = array();
    if(Session::has('compare')){
        foreach(Session::get('compare') as $val){
            $product = Product::find($val);
            if(!empty($product) || $product->status != 0){
                array_push($compare, $product);
                continue;
            }
        }
    }
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
    $inputColor = (Input::has('color')) ? Input::get('color') : array();
    $inputColor = (is_array($inputColor)) ? $inputColor : explode('-',strtoupper($inputColor));
    $sizeData = array('S'=>'S','M'=>'M', 'L'=>'L', 'XL'=>'XL', 'XXL'=>'XXL','FreeSize'=>'FreeSize',/*'other'=>'Khác'*/);
    $inputSize = (Input::has('size')) ? Input::get('size') : array();
    $inputSize = (is_array($inputSize)) ? $inputSize : explode('-',strtoupper($inputSize));
    $categories = Category::getData();
    $price= (Input::has('price')) ? Input::get('price') : null;
    return View::make('frontend.widgets.sidebar', compact('compare', 'categories', 'priceData', 'price', 'colorData', 'inputColor', 'sizeData', 'inputSize'));
});