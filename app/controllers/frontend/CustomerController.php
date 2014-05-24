<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 08/03/2014
 * Time: 03:50
 */

class CustomerController extends BaseController
{
    protected $customer;
    protected $meta;
    protected $attributeNames;
    protected $messages;
    protected $rules = array(
        'register'          => array(
            'username'  => 'required|min:3|max:50|unique:users|alpha_dash',
            'password'  => 'required|min:6',
            'confirm'   => 'required|min:6|same:password',
            'email'     => 'required|email|unique:users',
            'full_name' => 'required|min:2|max:50',
        ),
        'edit'            => array(
            'password'  => 'required|min:6',
            'confirm'   => 'required|min:6|same:password',
            'email'     => 'required|email|unique:users',
            'full_name' => 'required|min:2|max:50',
            'active'    => 'required|numeric',
        ),
        'change_password' => array(
            'pass_old' => 'required|passCheck',
            'password' => 'required|min:6',
            'confirm'  => 'required|min:6|same:password',
        ),
        'login'           => array(
            'username' => 'required|min:3|max:150',
            'password' => 'required|min:6'
        ),
        'profile'         => array(
            'full_name' => 'required|min:2|max:50',
            'gender'    => 'required|min:0:max:1'
        ),
        'forgot'          => array(
            'email' => 'required|email|emailCheck'
        )
    );

    public function __construct(User $user, UserMeta $meta)
    {
        $this->customer       = $user;
        $this->meta           = $meta;
        $this->attributeNames = Lang::get('frontend/customers/attributes');
        $this->messages       = Lang::get('frontend/customers/messages');
    }

    public function getRegister()
    {
        $title = Lang::get('frontend/customers/title.register');
        return View::make('frontend.customers.register', compact('title'));
    }

    public function postRegister()
    {
        $inputs = Input::all();
        $valid  = Validator::make($inputs, $this->rules['register'], $this->messages['validator'], $this->attributeNames);
        if ($valid->fails()) {
            if(Request::ajax()){
                return Response::json(array('register'=> false, 'messages'=>$valid->messages()->first()), 200);
            }
            return Redirect::action('CustomerController@getRegister')->withInput()->withErrors($valid->messages());
        } else {
            $customer            = new User();
            $customer->username  = $inputs['username'];
            $customer->email     = $inputs['email'];
            $customer->password  = Hash::make($inputs['password']);
            $customer->full_name = $inputs['full_name'];
            $customer->status    = 1;
            $customer->active    = 0;
            $customer->group     = 0;
            $customer->save();
            Auth::loginUsingId($customer->id);
            if (Input::has('newsletter')) {
                $newsletter         = new Newsletter();
                $newsletter->email  = $inputs['email'];
                $newsletter->status = 1;
                $newsletter->save();
            }
            Event::fire('Email.send', array('register', array('username'=>$inputs['username'], 'full_name'=>$inputs['full_name'], 'created_at'=>$customer->created_at), $customer->email, $customer->full_name));

            Session::flash('register_success', $this->messages['register_success']);
            if(Request::ajax()){
                return Response::json(array('register'=> true, 'url'=> action('CustomerController@getProfile')), 200);
            }
            return Redirect::action('CustomerController@getProfile');
        }
    }
    public function postForgot(){

    }
    public function getChangePassword(){
        $title = Lang::get('frontend/customers/title.change_password');
        return View::make('frontend.customers.change_password', compact('title'));
    }
    public  function postChangePassword(){
        $inputs = array(
            'pass_old' => Input::get('pass_old'),
            'password' => Input::get('password'),
            'confirm'  => Input::get('confirm')
        );
        Validator::extend('passCheck', function ($attributes, $value, $parameters) {
            if (Hash::check(Input::get('pass_old'), Auth::user()->password)) {
                return true;
            } else {
                return false;
            }
        });
        $valid = Validator::make($inputs, $this->rules['change_password'], $this->messages, $this->attributeNames);
        if ($valid->fails()) {
            return Redirect::back()->withInput()->withErrors($valid);
        } else {
            $user           = Auth::user();
            $user->password = Hash::make($inputs['password']);
            $user->save();
            $success = Lang::get('frontend/customers/messages.change_password_success');
            return Redirect::action('CustomerController@getChangePassword')->with('success', $success);
        }
    }
    public function getResetPassword($user, $token)
    {
        $customer = $this->customer->where('username', $user)->first();
        if (empty($customer)) {
            return Response::view('errors.404', array(), 404);
        } else {
//            var_dump($customer->meta());
        }
//        echo $user;
//        echo '<br>' . $token;
//        var_dump(__METHOD__);
    }

    public function getProfile()
    {
        $customer = Auth::user();
        $title = Lang::get('frontend/customers/title.profile');
        return View::make('frontend.customers.profile', compact('title', 'customer', 'customer_meta'));
    }
    public function getAddress(){
        $address = Auth::user()->address()->where('status', 1)->paginate(20);
        $title = Lang::get('frontend/customers/title.address');
        return View::make('frontend.customers.address', compact('title', 'address'));
    }
    public function getEdit(){
        $title = Lang::get('frontend/customers/title.profile');
        $customer = Auth::user();
        return View::make('frontend.customers.update', compact('title', 'customer'));
    }
    public function postUpdate(){
        $inputs = Input::all();
        $valid = Validator::make($inputs, $this->rules['profile'], array(), $this->attributeNames);
        if($valid->fails()){
            return Redirect::back()->withInput()->withErrors($valid->messages());
        }else{
            $user = Auth::user();
            $user->full_name = $inputs['full_name'];
            $user->gender = $inputs['gender'];
            $user->save();
            return Redirect::action('CustomerController@getProfile');
        }
    }
    public function getActive($username, $token){
        $customer = $this->customer->where('username', $username)->get()->last();
        $title = Lang::get('frontend/customers/title.active');
        if(empty($customer)){
            return View::make('frontend.customers.active', compact('title'))->with('breadcrumb', false)->with('active_error', true);
        }else{
            if(base64_encode($customer->created_at) != $token){
                return View::make('frontend.customers.active', compact('title'))->with('breadcrumb', false)->with('active_error', true);
            }

            $customer->active = 1;
            $customer->save();
            return View::make('frontend.customers.active', compact('title'))->with('breadcrumb', false)->with('active_success', true);
        }
    }
    public function getEmailActive(){
        $customer = Auth::user();
        $title = Lang::get('frontend/customers/title.active');
        Event::fire('Email.send', array('active', array('username'=>$customer->username, 'full_name'=>$customer->full_name, 'created_at'=>$customer->created_at), $customer->email, $customer->full_name));
        return View::make('frontend.customers.active', compact('title'))->with('breadcrumb', false)->with('send', true);
    }
    public function getLogin()
    {
        $title = Lang::get('frontend/customers/title.login');
        return View::make('frontend.customers.login', compact('title'));
    }

    public function postLogin()
    {
        $inputs   = array(
            'username' => Input::get('username'),
            'password' => Input::get('password'),
        );
        $remember = false;
        if (Input::has('remember')) {
            $remember = true;
        }
        $errors = null;
        $session_id = Session::getId();
        $valid  = Validator::make($inputs, $this->rules['login'], array(), $this->attributeNames);
        if ($valid->fails()) {
            if(!Request::ajax()){
                return Redirect::action('CustomerController@getLogin')->withInput($inputs)->withErrors($valid);
            }
            $errors = $valid->messages()->first();
        } else {
            $mail  = Validator::make(array('email' => $inputs['username']), array('email' => 'email'));
            $check = 'email';
            if ($mail->fails()) {
                $auth  = Auth::attempt($inputs, $remember);
                $check = 'username';
            } else {
                $auth = Auth::attempt(array('email' => $inputs['username'], 'password' => $inputs['password']), $remember);
            }
            if (!$auth) {
                $count = $this->customer->where($check, $inputs['username'])->count();
                if ($count == 0) {
                    if ($check == 'username') {
                        $errors = Lang::get('backend/users/messages.login_user_false');
                    } else {
                        $errors = Lang::get('backend/users/messages.login_email_false');
                    }
                } else {
                    $errors = Lang::get('backend/users/messages.login_password_false');
                }
            }
        }
        if (Request::ajax()) {
            if (!is_null($errors)) {
                return Response::json(array('login' => false, 'messages' => $errors), 200);
            }
            $cart = new CartModel();
            $cart->login();
            $user = Auth::user()->getAuthUser();
            $carts = Cart::totalItems();
            $favorite = Favorite::where('status', '!=', '0')->where('user_id', Auth::user()->getAuthIdentifier())->count();
            return Response::json(array('login' => true, 'user' => $user, 'cart' => $carts, 'favorite'=>$favorite), 200);
        }
        if (!is_null($errors)) {
            return Redirect::back()->withInput($inputs)->with('loginE', $errors);
        }
        if(Input::has('checkout')){
            return Redirect::action('OrderController@getCheckout');
        }
        return Redirect::action('CustomerController@getProfile');
    }

    public function getLogout()
    {
        Auth::logout();
        Session::forget('isBackend');
        return Redirect::to('/');
    }
    public function postCheckUsername(){
        if (Request::ajax()) {
            if(Input::has('username')){
                if($this->customer->where('username', Input::get('username'))->count()==0){
                    return 'true';
                }
            }
            return 'false';
        }
        return Response::view('errors.404', array(), 404);
    }
    public function postCheckEmail(){
        if (Request::ajax()) {
            if(Input::has('email')){
                if($this->customer->where('email', Input::get('email'))->count()==0){
                    return 'true';
                }
            }
            return 'false';
        }
        return Response::view('errors.404', array(), 404);
    }
} 