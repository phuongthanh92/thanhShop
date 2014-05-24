<?php

use Illuminate\Support\Facades\Session;
use \HoangVN\String\String;
use \HoangVN\Category\Menu;

class ProductController extends \BaseController{
    protected $product;
    public $timeExpired;
    protected $limit = 9;
    protected $appends = array(), $orderBy = array('created_at', 'DESC');

    public function __construct(Product $product){
        $this->product     = $product;
        $this->timeExpired = 1800; //30 min
        if(Agent::isMobile() || Agent::isTablet()){
            $this->limit = 6;
        }
    }

    public function getIndex($category, $slug, $prod){
        $notSFilter = true;
        $product    = $this->product->find($prod);
        if(empty($product)){
            return Response::view('errors.404', array(), 404);
        }
        $related_products = array();
        if(!empty($product->related_products)){
            $related_products = $this->product->where('status', '!=', 0)->whereIn('_id', $product->related_products)->get(array('_id', 'name', 'image', 'slug'));
        }
        if(Request::ajax()){
            $html = View::make('frontend.products.quickView', compact('product'))->render();
            return Response::json(compact('html'));
        }
        $menu       = new Menu();
        $breadcrumb = $menu->buildBreadcrumb(Category::getData(), $category);
        return View::make('frontend.products.detail', compact('product', 'related_products', 'breadcrumb', 'notSFilter'));
    }

    public function getSearch(){

        $order     = Input::has('order') ? Input::get('order') : 0;
        $orderBy   = array('created_at', 'DESC');
        $appends   = array();
        $tmp_order = array(
            'price-desc' => array('price', 'DESC'),
            'price-asc'  => array('price', 'ASC'),
            'name-a-z'   => array('name', 'ASC'),
            'name-z-a'   => array('name', 'DESC'));
        if($order !== 0 && array_key_exists($order, $tmp_order)){
            $orderBy          = $tmp_order[$order];
            $appends['order'] = $order;
        }
        $keywords           = Input::has('keyword') ? Input::get('keyword') : '';
        $appends['keyword'] = $keywords;

        $products = $this->product->where('name', 'like', '%' . String::asciiToUnicode($keywords) . '%')
            ->where('status', "1")
            ->where(function ($query){
                $priceFrom = (Input::has('priceFrom')) ? (int)Input::get('priceFrom') : null;
                $priceTo   = (Input::has('priceTo')) ? (int)Input::get('priceTo') : 0;
                global $appends;
                if($priceFrom != null){
                    $query->where('price', '>=', $priceFrom);
                    $appends['priceFrom'] = $priceFrom;
                }
                if($priceTo > 0){
                    $query->where('price', '<=', $priceTo);
                    $appends['priceTo'] = $priceTo;
                }
            })
            ->where(function ($query){
                $size      = (Input::has('size')) ? Input::get('size') : null;
                global $appends;
                if($size != null){
                    foreach(explode('-', $size) as $val){
                        $query->orWhere('size', 'regex', new MongoRegex("/(?(?<=\w)[^X]|.{0,0})($val)/i"));
                    }
                    $appends['size'] = $size;
                }
            })
            ->where(function ($query){
                $color     = (Input::has('color')) ? Input::get('color') : null;
                if($color != null){
                    foreach(explode('-', $color) as $val){
                        $query->orWhereRaw(array('color' => $val));
                    }
                    $appends['color'] = $color;
                }
            })
            ->orderBy($orderBy[0], $orderBy[1])
            ->paginate($this->limit, array('_id', 'name', 'slug', 'code', 'image', 'price', 'special_price', 'quantity', 'special_to_date', 'special_from_date'));
        if(Request::ajax()){
            $tmpSlug = 'tim-kiem';
            $html    = View::make('frontend.products.grid', compact('products', 'tmpSlug'))->render();
            return Response::json(compact('html'));
        }
        $title = Lang::get('frontend/title.search');
        return View::make('frontend.products.search', compact('keywords', 'title', 'products', 'order'));
    }

    public function postData($id){
        if(Request::ajax()){
            $product = $this->product->find($id);
            if(empty($product)){
                return Response::json(array('getData' => false, 'messeges' => 'Products not found!'), 404);
            }
            $current = time();
            if(isset($product->special_price)
                && isset($product->special_from_date)
                && isset($product->special_to_date)
                && $product->special_price < $product->price
                && $product->special_from_date < $current
                && $product->special_to_date > $current
            ){
                $special_price = $product->special_price;
                $price         = $product->price;
            }else{
                $special_price = null;
                $price         = $product->price;
            }
            $data = array(
                '_id'           => $product->_id,
                'name'          => $product->name,
                'slug'          => (isset($product->slug)) ? $product->slug : Str::slug($product->name),
                'image'         => $product->image[0],
                'price'         => $price,
                'product'       => $product,
                'special_price' => $special_price
            );

            if(Input::has('type')){
                if(Input::get('type') == 'compare'){
                    if(Session::has('compare')){
                        $compare = Session::get('compare');
                        if(count($compare) >= 3){
                            return Response::json(array('error' => 'Maximum of 3 products'));
                        }
                        if(is_array($compare) && !in_array($id, $compare)){
                            array_push($compare, $id);
                            Session::put('compare', $compare);
                        }else{
                            return Response::json(array('error' => 'exists'));
                        }
                    }else{
                        Session::put('compare', array($id));
                    }
                }
                if(Input::get('type') == 'favorite'){
                    if(Auth::check()){
                        $favorite = new Favorite();
                        if($favorite->where('product_id', $id)->where('user_id', Auth::user()->getAuthIdentifier())->count()){
                            return Response::json(array('error' => 'exists'));
                        }else{
                            $favorite->user_id    = Auth::user()->getAuthIdentifier();
                            $favorite->product_id = $id;
                            $favorite->status     = 1;
                            $favorite->save();
                            $count = $favorite->where('status', '!=', '0')->where('user_id', Auth::user()->getAuthIdentifier())->count();
                            return Response::json(array('favorite' => $count));
                        }
                    }else{
                        return Response::json(array('error' => 'login'));
                    }
                }
            }
            return Response::json($data);
        }
        return Response::view('errors.404', array(), 404);
    }

    public function getCompare(){
        $title    = Lang::get('frontend/title.compare');
        $products = array();
        if(Session::has('compare')){
            $compares = Session::get('compare');
            foreach($compares as $key => $id){
                $product = $this->product->find($id);
                if($product == null){
                    unset($compares[$key]);
                }else{
                    array_push($products, $product);
                }
            }
            Session::put('compare', $compares);
        }
        return View::make('frontend.products.compare', compact('title', 'products'));
    }

    public function postCompareRemove(){
        if(Request::ajax()){
            if(Input::has('id') && Session::has('compare')){
                $compare = Session::get('compare');
                $product = Input::get('id');
                if(array_search($product, $compare, true) !== false){
                    unset($compare[array_search($product, $compare)]);
                }
                Session::put('compare', $compare);
                return Response::json(array('remove' => 'success'));
            }
        }
        return Response::view('errors.404', array(), 404);
    }

    function filer(){
        if(Input::has('keyword') || Input::get('price')){
            $order     = Input::has('order') ? Input::get('order') : 0;
            $orderBy   = array('created_at', 'DESC');
            $appends   = array();
            $tmp_order = array(
                'price-desc' => array('price', 'DESC'),
                'price-asc'  => array('price', 'ASC'),
                'name-a-z'   => array('name', 'ASC'),
                'name-z-a'   => array('name', 'DESC'));
            if($order !== 0 && array_key_exists($order, $tmp_order)){
                $orderBy          = $tmp_order[$order];
                $appends['order'] = $order;
            }
            $keywords           = Input::get('keyword');
            $appends['keyword'] = $keywords;
        }
    }
}