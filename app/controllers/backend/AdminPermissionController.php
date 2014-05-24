<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 15/03/2014
 * Time: 13:30
 */

class AdminPermissionController extends \BaseController
{
    protected $permission;
    protected $role;
    protected $user;
    protected $attributeNames;
    protected $messages;
    protected $rules = array(
        'create' => array(
            'name' => 'required|min:4|max:255|unique:roles',
            'permissions' => 'required'
        ),
        'update' => array(
            'name' => 'required|min:4|max:255|checkRoleName',
            'permissions' => 'required'
        ),
    );

    public function __construct(User $user, Role $role, Permission $permission)
    {
        $this->permission     = $permission;
        $this->role          = $role;
        $this->user           = $user;
        $this->attributeNames = $title = Lang::get('backend/permission/attributes');
        $this->messages       = Lang::get('backend/permission/messages');
    }

    public function getIndex()
    {
        $title = Lang::get('backend/permission/title.management');
        $roles = $this->role->all();
        return View::make('backend.permission.index', compact('title', 'roles'));
    }

    public function getCreate()
    {
        $permission = $this->permission->all();
        $title      = Lang::get('backend/permission/title.create');
        return View::make('backend.permission.create', compact('title', 'permission'));
    }

    public function postCreate()
    {
        $inputs = Input::all();
//        echo '<pre>';
//        var_dump($inputs);
//        exit;
        $valid  = Validator::make($inputs, $this->rules['create'], $this->messages, $this->attributeNames);
        if ($valid->fails()) {
            return Redirect::back()->withInput()->withErrors($valid->messages());
        } else {
            DB::transaction(function() use ($inputs)
            {
                $this->role->name = $inputs['name'];
                $this->role->save();
                $this->role->perms()->sync($inputs['permissions']);
                Session::flash('role_success', $this->messages['create_success']);
            });
            return Redirect::action('AdminPermissionController@getEdit', $this->role->id);
        }
    }

    public function getEdit($id)
    {
        $role = $this->role->find($id);
        if (empty($role)) {
            return Response::view('errors.404', array(), 404);
        }
        $permissions = $this->permission->all();
        $permission_id = array();
        foreach($role->perms()->get(array('permission_id')) as $val){
            array_push($permission_id, $val->permission_id);
        }
        $title      = Lang::get('backend/permission/title.update');
        if (Session::has('role_success')) {
            $success = Session::get('role_success');
        }

        return View::make('backend.permission.edit', compact('title', 'role', 'permissions', 'permission_id', 'success'));
    }

    public function postUpdate($id)
    {
        $inputs = Input::all();
        $role   = $this->role->find($id);
        if (empty($role)) {
            return Response::view('errors.404', array(), 404);
        }
        Validator::extend('checkRoleName', function ($attributes, $value, $parameters) use ($role, $inputs) {
            if ($this->role->where('id', '!=', $role->id)->where('name', $inputs['name'])->count() > 0) {
                return false;
            }
            return true;
        });
        $valid = Validator::make($inputs, $this->rules['update'], $this->messages, $this->attributeNames);
        if ($valid->fails()) {
            return Redirect::back()->withInput()->withErrors($valid->messages());
        } else {
            $role->name = Input::get('name');
            $role->save();
            $role->perms()->sync($inputs['permissions']);

            return Redirect::action('AdminPermissionController@getEdit', $id);
        }
    }
    public function postDelete(){
        if(Input::has('role')){
            $role = $this->role->find(Input::get('role'));
            if(!empty($role)){
                $role->beforeDelete();
                $role->delete();
            }
        }
        return Redirect::action('AdminPermissionController@getIndex');
    }
} 