<?php
class AdminUserController extends \BaseController
{
    protected $user;
    protected $meta;
    protected $attributeNames;
    protected $rules = array(
        'create'          => array(
            'username'  => 'required|min:3|max:30|unique:users|alpha_dash',
            'password'  => 'required|min:6',
            'confirm'   => 'required|min:6|same:password',
            'email'     => 'required|email|unique:users',
            'full_name' => 'required|min:2|max:50',
        ),
        'update'            => array(
            'email'     => 'required|email|emailUpdate',
            'full_name' => 'required|min:2|max:50',
            'role'      => 'required|numeric',
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
            'email'     => 'required|email|emailUpdate'
        ),
        'forgot'          => array(
            'email' => 'required|email|emailCheck'
        )
    );
    protected $messages;

    public function __construct(User $user, UserMeta $meta)
    {
        $this->user           = $user;
        $this->meta           = $meta;
        $this->attributeNames = Lang::get('backend/users/attributes');
        $this->messages       = Lang::get('backend/users/messages.validate');

    }
    public function getIndex()
    {
        $title   = Lang::get('backend/users/title.management');
        $keyword = null;
        $appends = array();
        $limit   = 10;
        if ((Input::has('limit') && (int)Input::get('limit') > 0)) {
            $limit            = (int)Input::get('limit');
            $appends['limit'] = $limit;
        }
        if (Input::has('keyword') && Input::get('keyword') != null) {
            $keyword            = Input::get('keyword');
            $users              = $this->user->where('group', '!=', 0)->whereRaw("MATCH(username,email,full_name) AGAINST(? IN BOOLEAN MODE)", array($keyword))->paginate($limit, array('id', 'username', 'full_name', 'email', 'status', 'created_at'));
            $appends['keyword'] = $keyword;
        } else {
            $users = $this->user->where('group', '!=', 0)->paginate($limit, array('id', 'username', 'full_name', 'email', 'status', 'created_at'));
        }
        $users->appends($appends)->links();

        return View::make('backend.users.index', compact('title', 'users', 'keyword', 'limit'));
    }
    public function getView($id)
    {
        $user = $this->user->find($id);
        if (empty($user) || $user->group === 0) {
            return Response::view('errors.404');
        }
        if($user->id == Auth::user()->id){
            return Redirect::action('AdminUserController@getProfile');
        }
        $roles   = array();
        foreach(Role::all(array('id','name')) as $val){
            $roles[$val->id] = $val->name;
        }
        $meta    = $user->meta()->get();
        $title   = Lang::get('backend/users/title.view') . $user->username;
        return View::make('backend.users.view', compact('title', 'user', 'meta', 'roles'));
    }
    public function getCreate()
    {
        $title = Lang::get('backend/users/title.create');
        return View::make('backend.users.create', compact('title'));
    }

    public function postCreate()
    {
        $inputs = Input::all();
        $valid  = Validator::make($inputs, $this->rules['create'], array(), $this->attributeNames);
        if ($valid->fails()) {
            return Redirect::back()->withInput()->withErrors($valid);
        } else {
            $this->user->username  = $inputs['username'];
            $this->user->password  = Hash::make($inputs['password']);
            $this->user->email     = $inputs['email'];
            $this->user->full_name = $inputs['full_name'];
            $this->user->status    = $inputs['status'];
            $this->user->active    = 1;
            $this->user->group     = 4;
            $this->user->save();
            Session::flash('success', Lang::get('backend/users/messages.create_success'));
            return Redirect::action('AdminUserController@getView', $this->user->id);
        }
    }
    public function getProfile()
    {
        $title = Lang::get('backend/users/title.profile');
        $user  = Auth::user();
        return View::make('backend.users.profile', compact('title', 'user'));
    }

    public function postProfile(){
        $inputs = array('full_name' => Input::get('full_name'), 'email' => Input::get('email'));
        Validator::extend('emailUpdate', function ($attributes, $value, $parameters) use ($inputs) {
            if ($this->user->where('email', $inputs['email'])->where('email', '!=', Auth::user()->email)->count() < 1) {
                return true;
            } else {
                return false;
            }
        });
        $valid  = Validator::make($inputs, $this->rules['profile'], $this->messages, $this->attributeNames);
        if ($valid->fails()) {
            return Redirect::back()->withInput()->withErrors($valid);
        } else {
            $title          = Lang::get('backend/users/title.profile');
            $user           = Auth::user();
            $user->full_name = $inputs['full_name'];
            $user->save();
            $success = Lang::get('backend/users/messages.profile_success');
            return View::make('backend.users.profile', compact('title', 'user', 'success'));
        }
    }
    public function postUpdate($id){
        $user = $this->user->find($id);
        if(empty($user)){
            return Response::view('errors.404', array(), 404);
        }
        if($user->group == 7){
            return Response::view('errors.403', array(), 403);
        }
        $inputs = Input::all();
        Validator::extend('emailUpdate', function ($attributes, $value, $parameters) use ($user, $inputs){
            if ($this->user->where('email', Input::get('email'))->where('email','!=', $user->email)->count()>0) {
                return false;
            }
            return true;
        });
        $valid = Validator::make($inputs,$this->rules['update'], $this->messages, $this->attributeNames);
        if($valid->fails()){
            return Redirect::back()->withInput()->withErrors($valid->messages());
        }
        if(Input::has('role')){
            $roleOld = array();
            foreach($user->roles()->get() as $val){
                array_push($roleOld, $val->id);
            }
            if(!empty($roleOld)){
                $user->roles()->detach($roleOld);
            }
            $user->roles()->attach( $inputs['role'] );
        }
        $user->email = $inputs['email'];
        $user->full_name = $inputs['full_name'];
        $user->status = Input::has('status') ? 1 : 0;
        $user->group  = Input::has('group') ? $user->group : 0;
        $user->save();
        Session::flash('success', Lang::get('backend/users/messages.update'));
        if($user->group ===0){
            return Redirect::action('AdminUserController@getIndex');
        }
        return Redirect::action('AdminUserController@getView', $user->id);
    }

    public function getChangePassword()
    {
        $title = Lang::get('backend/users/title.change_password');
        return View::make('backend.users.change_password', compact('title'));
    }

    public function postChangePassword()
    {
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
            $title   = Lang::get('backend/users/title.change_password');
            $success = Lang::get('backend/users/messages.change_password_success');
            return View::make('backend.users.change_password', compact('title', 'success'));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function postDelete($id)
    {
        $user = $this->user->find($id);
        if (empty($user) || !Input::has('_token') || Session::token() != Input::get('_token')  || $user->id == Auth::user()->id) {
            return Response::view('errors.404', array(), 404);
        }
        $user->delete();
        return Redirect::action('AdminUserController@getIndex');
    }

    public function getForgotPassword()
    {
        $frmLogin    = array('action' => 'AdminUserController@postLogin', 'id' => 'login_form', 'style' => 'display:none');
        $frmPassword = array('action' => 'AdminUserController@postForgotPassword', 'id' => 'pass_form');
        $login_link  = '';
        $pass_link   = 'style="display:none"';
        $title       = Lang::get('backend/users/title.forgot_password');
        return View::make('backend.users.login', compact('title', 'frmLogin', 'frmPassword', 'login_link', 'pass_link'));
    }

    public function postForgotPassword(){
        Validator::extend('emailCheck', function ($attributes, $value, $parameters) {
            if ($this->user->where('email', Input::get('email'))->count() > 0) {
                return true;
            } else {
                return false;
            }
        });
        $valid = Validator::make(Input::all(), $this->rules['forgot'], $this->messages, $this->attributeNames);
        if ($valid->fails()) {
            return Redirect::action('AdminUserController@getForgotPassword')->withInput()->withErrors($valid->messages());
        }
        $user = $this->user->where('email', Input::get('email'))->get()->first();
        $mail = new SendMail();
        $data = array(
            'full_name' => $user->full_name,
            'password'  => str_random(8),
        );
        if ($mail->resetPassword($data, $user->email, $user->full_name)) {
            Session::flash('forgot', Lang::get('backend/users/messages.forgot_success'));
            $user->password = Hash::make($data['password']);
            $user->save();
            return Redirect::action('AdminUserController@getForgotPassword');
        } else {
            return Redirect::action('AdminUserController@getForgotPassword')->withInput()->withErrors(Lang::get('backend/users/messages.send_mail'));
        }


    }

    public function getLogin()
    {
        $frmLogin    = array('action' => 'AdminUserController@postLogin', 'id' => 'login_form');
        $login_link  = 'style="display:none"';
        $pass_link   = '';
        $frmPassword = array('action' => 'AdminUserController@postForgotPassword', 'id' => 'pass_form', 'style' => 'display:none');
        $title       = Lang::get('backend/users/title.login');
        return View::make('backend.users.login', compact('title', 'frmLogin', 'frmPassword', 'login_link', 'pass_link'));
    }

    public function postLogin()
    {
        $inputs = array(
            'username' => Input::get('username'),
            'password' => Input::get('password'),
        );
        $valid  = Validator::make($inputs, $this->rules['login'], array(), $this->attributeNames);
        if ($valid->fails()) {
            return Redirect::back()->withInput()->withErrors($valid->messages());
        } else {
            $mail  = Validator::make(array('email' => $inputs['username']), array('email' => 'email'));
            $check = 'email';
            if ($mail->fails()) {
                $auth  = Auth::attempt($inputs, false);
                $check = 'username';
            } else {
                $auth = Auth::attempt(array('email' => $inputs['username'], 'password' => $inputs['password']), false);
            }
            $errors = null;
            if ($auth) {
                if (Auth::user()->group === 0) {
                    Auth::logout();
                    return Response::view('errors.403', array(), 403);
                } else {
                    if (Auth::user()->status === 1) {
                        Session::put('isBackend', true);
                        return Redirect::action('AdminDashboardController@getIndex');
                    } else {
                        Auth::logout();
                        $errors = Lang::get('backend/users/messages.login_status');
                    }
                }
            } else {
                $count = $this->user->where($check, $inputs['username'])->count();
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
            if (!is_null($errors)) {
                return Redirect::action('AdminUserController@getLogin')->withInput()->withErrors($errors);
            }
        }
    }

    public function getLogout()
    {
        Auth::logout();
        Session::forget('isBackend');
        return Redirect::route('admin-login');
    }

}