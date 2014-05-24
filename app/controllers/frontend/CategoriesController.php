<?php
use HoangVN\Category\Menu;

class CategoriesController extends \BaseController{
    protected $category;
    protected $product;
    public $menu;
    public $timeExpired;
    protected $limit = 9;
    public function __construct(Category $category, Product $product, Menu $menu){
        $this->category    = $category;
        $this->product     = $product;
        $this->menu        = $menu;
        $this->timeExpired = 1800; //30 min
        if(Agent::isMobile() || Agent::isTablet()){
            $this->limit = 6;
        }
    }

    public function getIndex($slug){
        $category = $this->category->where('slug', $slug)->get()->first();
        if(empty($category)){
            return Response::view('errors.404', array(), 404);
        }
        $child      = $this->menu->getChild($this->category->getData(), $category->slug);
        $breadcrumb = $this->menu->buildBreadcrumb($this->category->getData(), $category->slug);
        $order      = Input::has('order') ? Input::get('order') : 0;
        $orderBy    = array('created_at', 'DESC');
        global $appends;
        $appends   = array();
        $tmp_order = array(
            'price-desc' => array('price', 'DESC'),
            'price-asc'  => array('price', 'ASC'),
            'name-a-z'   => array('name', 'DESC'),
            'name-z-a'   => array('name', 'ASC'));
        if($order !== 0 && array_key_exists($order, $tmp_order)){
            $orderBy          = $tmp_order[$order];
            $appends['order'] = $order;
        }
        $products = $this->product->whereIn('category', $child)
            ->where('status', '!=', '0')
            ->where(function ($query){
                $priceFrom     = (Input::has('priceFrom')) ? (int)Input::get('priceFrom') : null;
                $priceTo     = (Input::has('priceTo')) ? (int)Input::get('priceTo') : 0;
                $size      = (Input::has('size')) ? Input::get('size') : null;
                $color     = (Input::has('color')) ? Input::get('color') : null;
                global $appends;
                if($priceFrom!=null){
                    $query->where('price','>=', $priceFrom);
                    $appends['priceFrom'] = $priceFrom;
                }
                if($priceTo > 0){
                    $query->where('price','<=', $priceTo);
                    $appends['priceTo'] = $priceTo;
                }
                if($size!=null){
                    foreach(explode('-', $size) as $val){
                        $query->where('size', 'regex', new MongoRegex("/(?(?<=\w)[^X]|.{0,0})($val)/i"));
                    }
                }
                if($color!=null){
                    foreach(explode('-', $color) as $val){
                        $query->whereRaw(array('color'=>$val));
                    }
                }
            })
            ->orderBy($orderBy[0], $orderBy[1])
            ->paginate($this->limit, array('_id', 'name', 'slug', 'code', 'image', 'price', 'special_price', 'quantity', 'special_to_date', 'special_from_date'));
        $products->appends($appends)->links();
        if(Request::ajax()){
            $tmpSlug = $category->slug;
            $html    = View::make('frontend.products.grid', compact('products', 'tmpSlug'))->render();
            $log = DB::getQueryLog();
            return Response::json(compact('html', 'log'));
        }
        return View::make('frontend.products.category', compact('category', 'products', 'breadcrumb', 'order'));
    }


    public function postLoadQuantity($slug){
        if(Request::ajax()){
            $category = $this->category->where('slug', $slug)->get()->first();
            if(empty($category)){
                return Response::json(array('quantity' => 0));
            }
            $child        = $this->menu->getChild($this->category->getData(), $category->slug);
            $totalProduct = $this->product->whereIn('category', $child)->where('status', '!=', 0)->count();
            return Response::json(array('quantity' => $totalProduct));
        }
        return Response::view('errors.404', array(), 404);
    }
}