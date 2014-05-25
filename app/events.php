<?php
use HoangVN\Mail\SendMail;
$authUser = Auth::user();
Event::listen('user.register', function($user){
    $email = new SendMail($user);
    $email->later(5, 'emails.register', $user->email, 'Đăng ký tài khoản', $user->full_name);
});
Event::listen('setting', function(){
    $setting = Setting::all();
    $file = app_path('database/setting.json');
    $data = array();
    foreach($setting as $val){
        $data[$val->key] = $val->value;
    }
    File::put($file, json_encode($data));
});

Event::flush('newsletter', function($data){
    $newsletter = NewsLetter::where('status', 1)->get(array('email'));

//    $email = new SendMail($data);
    foreach($newsletter as $val){
//        $email->send('emails.newsletter', $val->email, 'Bản tin ' . url(), null);
        Mail::queueOn('queue-name', 'emails.newsletter', array('data'=>$data), function($message) use ($val)
        {
            $message->to($val->email, 'bull')->subject('Bản tin ' . url());
        });
    }
});

Event::listen('Email.send', function($type, $data, $email, $name = ''){
    //            $email = new SendMail($customer);
//            $email->send('emails.register', $customer->email, 'Đăng ký tài khoản', $customer->full_name);
    $mail = new SendMail();
    return ;///Không send mail
    switch($type){
        case 'register':
//            return $mail->later(30,'emails.register', $data, $email,'Đăng ký tài khoản', $name);
            break;
        case 'active':
//            return $mail->later(30, 'emails.register',$data, $email,'Kích hoạt tài khoản', $name);
            break;
        case 'orderCreate':
            $subject = 'Thông tin đơn hàng';
            $orderStatus = Lang::get('backend/orders/status');
            $order      = Order::find($data);
            $orderItems = $order->item()->get();
            $status     = $orderStatus[$order->status];

            $address = $order->address()->get()->first();
//            Send mail khi thanh toán
            Mail::send('emails.order', compact('order', 'orderItems', 'status', 'address'), function($message) use ($email, $subject, $name){
                $message->to($email, $name)->subject($subject);
            });
            break;
        case 'checkoutSuccess':
            $subject = 'Thanh toán thành công';

            $orderStatus = Lang::get('backend/orders/status');
            $order      = Order::find($data);
            $orderItems = $order->item()->get();
            $status     = $orderStatus[$order->status];
//            Send mail khi thanh toán online thành công
            $address = $order->address()->get()->first();
            Mail::send('emails.order', compact('order', 'orderItems', 'status', 'address'), function($message) use ($email, $subject, $name){
                $message->to($email, $name)->subject($subject);
            });
            break;
    }

});
Event::listen('cart', function($type, $data = array()) use ($authUser){
    $cart = new CartModel();
    switch($type){
        case 'login':
            $userID = Auth::user()->getAuthIdentifier();
            if(Cart::totalItems()>0){
                $cart->where('user_id', $userID)->delete();
                foreach(Cart::contents() as $item){
                    $tmp = $item->toArray();
                    $tmp['user_id'] = $userID;
                }
            }else{
                $cart->where('update_at', '<', (time() - (24 * 60 * 60 * 10)))->delete();
                $tmp = $cart->where('user_id', $userID)->get()->toArray();
                foreach($tmp as $val){
                    $product = Product::find($val['product_id']);
                    if(empty($product)){
                        continue;
                    }
                    if(isset($cart->product()->special_price) && $cart->product()->special_from_date < time()
                        && $cart->product()->special_to_date > time() ){
                        $price =  $cart->product()->special_price;
                    }else{
                        $price = $cart->product()->price;
                    }

                    Cart::insert($val);
                }
            }
            break;
    }
//    Cart::insert(array(
//        'id'       => 'foo1',
//        'name'     => 'bar',
//        'price'    => 100,
//        'quantity' => 10000,
//        'option'=>array(
//            'color'=>'RED',
//            'size'=>'L'
//        )
//    ));
});
Event::listen('f', function(){
//    Cart::insert(array(
//        'id'       => '53359023968384040a000029',
//        'name'     => 'bar',
//        'price'    => 100,
//        'd'=>'s',
//        'quantity' => 22,
//        'option'=>array(
//            array('color'=>'RED',
//                  'size'=>'L',
//                  'quantity'=>10
//            ),
//            array('color'=>'RED',
//                  'size'=>'M',
//                  'qty'=>1
//            ),
//            array('color'=>'RED',
//                  'size'=>'L',
//                  'qty'=>1
//            )
//        )
//    ));
});