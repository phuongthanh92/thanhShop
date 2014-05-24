<?php

class CartController extends \BaseController{
    protected $product;
    protected $cart;

    public function __construct(CartModel $cart, Product $product){
        $this->cart    = $cart;
        $this->product = $product;

    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getIndex(){
        $carts        = Cart::contents();
        $total_amount = Cart::total(false);
        $title        = Lang::get('frontend/title.cart');
        return View::make('frontend.cart.index', compact('title', 'carts', 'total_amount'))->with('breadcrumb', false);
    }

    public function postAddItem(){
        if(Input::has('product')){
            $qty = Input::has('quantity') ? (int)Input::get('quantity') : 1;
            $data  = array(
                'product_id' => Input::get('product'),
                'quantity'   => $qty,
                'size'       => Input::get('size'),
                'color'      => Input::get('color'),
            );
            if(Request::ajax()){
                $total = $this->cart->addItem($data);
                if($total > 0){
                    return Response::json(array('add' => true, 'total_quantity' => Cart::totalItems()), 200);
                }else{
                    return Response::json(array('add' => false, 'total_quantity' => Cart::totalItems()), 200);
                }
            }
            if(Cart::has('P'.$data['product_id'].'S'.$data['size'].'C'.$data['color'])){
                $this->cart->updateItem($data);
            }else{
                $this->cart->addItem($data);
            }
        }
        return Redirect::action('CartController@getIndex');
    }

    public function postUpdateItem(){
        if(Request::ajax()){
            if(Input::has('cart') && Input::has('quantity')){
                $data = array(
                    'product_id' => Input::get('productID'),
                    'key'      => Input::get('cart'),
                    'quantity' => Input::get('quantity'),
                    'size'     => Input::get('size'),
                    'color'    => Input::get('color')
                );
                $cart = $this->cart->updateItem($data);
                return Response::json(array('update' => true,
                                            'price' => $cart['price'],
                                            'quantity' => $cart['quantity'],
                                            'total_quantity' => Cart::totalItems(),
                                            'total_amount' => Cart::total(),
                    'key'=>$cart['key'], 'keyOld'=>$cart['keyOld']
                ), 200);
            }
            return Response::json(array('update' => true), 404);
        }
        return Redirect::action('CartController@getIndex');
    }

    public function postDeleteItem(){
        if(Input::has('cart')){
            $cart = Input::get('cart');
            $this->cart->deleteItem($cart);
            $total_quantity = Cart::totalItems();
            $total_amount   = Cart::total(false);
            return Response::json(array('delete' => true, 'total_quantity' => $total_quantity, 'total_amount' => $total_amount, 'key'=>$cart), 200);
        }else{
            Response::json(array('delete' => false), 404);
        }
    }
    public function getTest(){
        $data  = array(
            'product_id' => '534845f8968384781800002e',
            'quantity'   => 1,
            'size'       => '',
            'color'      => null,
        );
        echo '<pre>';
        $this->cart->addItem($data);
        //    Cart::destroy();
        foreach(Cart::contents() as $item){
            if($item->id == 'P534845f8968384781800002eSC'){

//            $item->id = 'foo';
            }
            print_r($item->toArray());
        }
    }
}