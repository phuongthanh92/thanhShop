<?php
class AdminCustomerController extends \BaseController {
    protected $rules = array(
        'create'          => array(
            'username'  => 'required|min:3|max:50|unique:users|alpha_dash',
            'password'  => 'required|min:6',
            'confirm'   => 'required|min:6|same:password',
            'email'     => 'required|email|unique:users',
            'full_name' => 'required|min:2|max:50',
        ),
        'update'            => array(
            'email'     => 'required|email|emailUpdate',
        ),
    );
    protected $customer;
    protected $attributeNames;
    protected $messages;
    public function __construct(User $customer){
        $this->customer = $customer;
        $this->attributeNames = Lang::get('backend/customers/attributes');
        $this->messages       = Lang::get('backend/customers/messages');
    }
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function getIndex(){
        $title = Lang::get('backend/customers/title.management');
        $keyword = null;
        $limit = 10;
        $appends = array();
        if ((Input::has('limit') && (int)Input::get('limit') > 0)) {
            $limit            = (int)Input::get('limit');
            $appends['limit'] = $limit;
        }
        if (Input::has('keyword') && Input::get('keyword') != null) {
            $keyword            = Input::get('keyword');
            $customers              = $this->customer->whereRaw("MATCH(username,email,full_name) AGAINST(? IN BOOLEAN MODE)", array($keyword))->paginate($limit, array('id', 'username', 'full_name', 'email', 'status', 'active', 'created_at'));
            $appends['keyword'] = $keyword;
        } else {
            $customers = $this->customer->paginate($limit, array('id', 'username', 'full_name', 'email', 'status', 'active','created_at'));
        }
        $customers->appends($appends)->links();
        return View::make('backend.customers.index', compact('title', 'customers', 'keyword', 'limit'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function getCreate()
	{
        $title = Lang::get('backend/customers/title.create');
        return View::make('backend.customers.create', compact('title'));
	}

    public function postCreate(){
        $inputs = Input::all();
        $valid  = Validator::make($inputs, $this->rules['create'], array(), $this->attributeNames);
        if ($valid->fails()) {
            return Redirect::back()->withInput()->withErrors($valid);
        } else {
            $this->customer->username  = $inputs['username'];
            $this->customer->password  = Hash::make($inputs['password']);
            $this->customer->email     = $inputs['email'];
            $this->customer->full_name = $inputs['full_name'];
            $this->customer->status    = $inputs['status'];
            $this->customer->active    = 1;
            $this->customer->save();
            Session::flash('success', Lang::get('backend/customers/messages.create_success'));
            return Redirect::action('AdminCustomerController@getView', $this->customer->id);
        }
    }
	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function getView($id)
	{
		$title = Lang::get('backend/customers/title.view');
        $customer = $this->customer->find($id);
        if(empty($customer)){
            return Response::view('errors.404', array(), 404);
        }
        $meta    = $customer->meta()->get();
        $orders  = $customer->order()->orderBy('id', 'DESC')->paginate(20, array('id', 'total_product', 'total_amount', 'status','created_at', 'updated_at'));
        $orderStatus = Lang::get('backend/orders/status');
        $address = $customer->address()->orderBy('status', 'DESC')->paginate(10, array('full_name', 'address', 'phone', 'status'));
        $title  .= $customer->username;
        return View::make('backend.customers.view', compact('title', 'customer', 'meta', 'orders', 'address', 'orderStatus'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function postUpdate($id)
	{
        $customer = $this->customer->find($id);
        if (empty($customer)) {
            return Response::view('errors.404', array(), 404);
        }
        if($customer->group > 0){
            return Response::view('errors.403', array(), 403);
        }
        $inputs = Input::all();
        Validator::extend('emailUpdate', function ($attributes, $value, $parameters) use ($customer, $inputs){
            if ($this->customer->where('email', Input::get('email'))->where('email','!=', $customer->email)->count()>0) {
                return false;
            }
            return true;
        });
        $valid = Validator::make($inputs,$this->rules['update'], $this->messages['validate'], $this->attributeNames);
        if($valid->fails()){
            return Redirect::back()->withInput()->withErrors($valid->messages());
        }
        $customer->email = $inputs['email'];
        $customer->status = Input::has('status') ? 1 : 0;
        $customer->active = Input::has('active') ? 1 : $customer->active;
        $customer->save();
        Session::flash('success', Lang::get('backend/customers/messages.update'));

        return Redirect::action('AdminCustomerController@getView', $customer->id);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function postDelete($id)
	{
        $customer = $this->customer->find($id);
        if (empty($customer) || !Input::has('_token') || Session::token() != Input::get('_token') || $customer->id == Auth::user()->id) {
//            return Response::view('errors.404', array(), 404);
            var_dump($customer);
        }
        $customer->delete();
        return Redirect::action('AdminCustomerController@getIndex');
	}
    public function getStatistic(){

    }
}