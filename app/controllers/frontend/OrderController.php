<?php

class OrderController extends \BaseController{
    protected $order;
    protected $orderStatus;

    public function __construct(Order $order){
        $this->order       = $order;
        $this->orderStatus = Lang::get('backend/orders/status');
    }

    public function getIndex(){
        $orders = $this->order->where('user_id', Auth::user()->getAuthIdentifier())->orderBy('id', 'DESC')
            ->paginate(20, array('id', 'total_product', 'total_amount', 'status', 'created_at'));
        $title  = Lang::get('frontend/title.order');
        return View::make('frontend.orders.index', compact('orders', 'title'))->with('status', $this->orderStatus);
    }

    public function getView($id){
        $title      = Lang::get('frontend/title.order_detail');
        $order      = $this->order->find((int)$id - 1000000);
        $orderItems = $order->item()->get();
        $status     = $this->orderStatus[$order->status];

        $address = $order->address()->get()->first();
        $order->comment()->where('order_id', $id)->update(array('status' => 1));
        $comments = $order->comment()->where('status', -1)->get();
        return View::make('frontend.orders.view', compact('title', 'order', 'orderItems', 'address', 'status', 'comment'));
    }

    public function getCheckout(){
        $carts = Cart::contents();
        $title = Lang::get('frontend/title.checkout');
        if(!Auth::check()){
            return View::make('frontend.orders.login', compact('carts', 'title'))->with('breadcrumb', false);
        }
        $total_amount = Cart::total();
        $customer     = Auth::user();
        $data         = Setting::where('key', 'address')->get()->last();
        $w_address    = $data['value'];
        $address      = $customer->address()->where('status', 1)->get();
        if(Session::has('orderStatus')){
            $orderStatus = Session::get('orderStatus');
        }
        if(Session::has('orderSuccess')){
            $orderSuccess = Session::get('orderSuccess');
        }
        return View::make('frontend.orders.create', compact('carts','orderSuccess', 'title', 'orderStatus', 'total_amount', 'customer', 'address', 'w_address'))->with('breadcrumb', false);
    }

    public function postCheckout(){
        DB::transaction(function (){
            $cart                       = new CartModel();
            $session_id                 = Session::getId();
            $user_id                    = Auth::check() ? Auth::user()->getAuthIdentifier() : -1;
            $this->order->note          = Input::get('note');
            $this->order->address_id    = Input::get('address_id');
            $this->order->user_id       = $user_id;
            $this->order->total_product = Cart::totalItems();
            $this->order->total_amount  = Cart::total();
            $this->order->status        = 1;
            if(Input::get('checkout_method') == 1){
                $this->order->token = str_random(40);
            }
            $this->order->save();
            $carts = Cart::contents();
            foreach($carts as $val){
                $product = Product::find($val->product_id);
                if(empty($product)){
                    continue;
                }
                $current = time();
                if(isset($product->special_price) && $product->special_form_date < $current && $product->special_to_date > $current){
                    $tmp_price = $product->special_price;
                }else{
                    $tmp_price = $product->price;
                }
                $category = null;
                foreach($product->category as $cate){
                    $category = '|' . $cate . '|';
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
                $attributes = $val->size != null ? 'Size: '.$val->size : null;
                $attributes .= $val->color !=null ? ' Màu: '. $colorData[$val->color] : null;
                $orderItem =
                    array(
                        'order_id'    => $this->order->id,
                        'product_id'  => $val->product_id,
                        'quantity'    => $val->quantity,
                        'price'       => $tmp_price,
                        'category_id' => $category,
                        'attributes'  => $attributes
                    );
                OrderItem::create($orderItem);
            }
            $cart->where('user_id', $user_id)->orWhere('session_id', $session_id)->delete();

        });
        Cart::destroy();
        Event::fire('Email.send', array('orderCreate', $this->order->id, Auth::user()->email));
        if(Input::get('checkout_method') == 1){
            Session::put('paymentNganLuong', array('orderCode' => md5($this->order->id),
                                                   'id'        => $this->order->id,
                                                   'price'     => $this->order->total_amount,
                                                   'orderNote' => Input::get('note'),
                                                   'token'     => $this->order->token . sha1($this->order->id),
            ));
            return Redirect::action('OrderController@getPayment', md5($this->order->id));
        }
        Session::flash('orderStatus', $this->orderStatus[$this->order->status]);
        return Redirect::action('OrderController@getCheckout')->with('status', $this->orderStatus[1]);
    }

    public function getPayment($order){
        $payment = Session::get('paymentNganLuong');
        if(isset($payment['orderCode']) && $order == $payment['orderCode']){
            $url        = 'https://www.nganluong.vn/advance_payment.php';
            $token      = $payment['token'];
            $return_url = action('OrderController@getPaymentSuccess', $token);
            $data       = array(
                'receiver'   => 'hoangnham01@gmail.com',
                'product'    => ($payment['id'] + 1000000),
                'price'      => $payment['price'],
                'comments'   => $payment['orderNote'],
                'return_url' => $return_url
            );
            $options    = array(
                'http' => array(
                    'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                    'method'  => 'POST',
                    'content' => http_build_query($data),
                ),
            );
            $context    = stream_context_create($options);
            $result     = file_get_contents($url, false, $context);
            return $result;
        }else{
            Session::forget('paymentNganLuong');
        }
        return Response::view('errors.404', array(), 404);
    }

    public function getPaymentSuccess($code){
        $token   = substr($code, 0, 40);
        $orderId = substr($code, 40, 80);
        $order   = Order::where('token', $token)->where(DB::raw('sha1(id)'), $orderId)->first();
        if(empty($order)){
            return Response::view('errors.404', array(), 404);
        }
        if($order->status == 1 || $order->status == 2){
            $order->status = 3;
            $order->token  = 1;
            $order->save();
            $items = OrderItem::where('order_id', $order->id)->get();
            foreach($items as $item){
                $product = Product::find($item->product_id);
                if(!empty($product)){
                    $product->quantity = $product->quantity - $item->quantity;
                    $product->save();
                }
            }
            Event::fire('Email.send', array('checkoutSuccess', $order->id, Auth::user()->email));
            Session::flash('orderSuccess', true);
            return Redirect::action('OrderController@getCheckout')->with('status', $this->orderStatus[3]);
        }
        return Response::view('errors.404', array(), 404);
    }
} 