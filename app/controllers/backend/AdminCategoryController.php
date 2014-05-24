<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 18/02/2014
 * Time: 14:23
 */

class AdminCategoryController extends BaseController{
    protected $attributes = array(
        'name'              =>  'tên danh mục',
        'url_key'           =>  'Url key',
        'meta_keyword'      =>  'Meta keywords',
        'meta_description'  =>  'Meta description',
        'parent'            =>  'danh mục cha',
        'active'            =>  'Hoạt động',
    );
    protected $rules = array(
        'create' => array(
            'name'              =>  'required|max:100',
            'url_key'           =>  'required|regex:"^[a-zA-Z0-9_-]+$"|max:100|unique:category',
            'meta_keyword'      =>  'max:255',
            'meta_description'  =>  'max:255',
            'parent'            =>  'required|integer',
            'active'            =>  'required|integer',
        ),
        'edit' => array(
            'id'                =>  'required|numeric',
            'name'              =>  'required|max:100',
            'url_key'           =>  'required|regex:"^[a-zA-Z0-9_-]+$"|max:100|urlCheck',
            'meta_keyword'      =>  'max:255',
            'meta_description'  =>  'max:255',
            'parent'            =>  'required|integer',
            'active'            =>  'required|integer',
        ),
    );
    public function getIndex(){
        $cate = Category::Tree(10);
        $menu = Category::menuBuild($cate);
        return View::make('backend.categories.index',array('categories'=>$cate, 'menu' => $menu));
    }
    public function getCreate(){
        $parent = array(
            '0' => 'Danh mục gốc'
        );
        $data = Category::Tree(10);
        $menu = Category::menuBuild($data);
        foreach($data as $value){
            $parent[$value->id] = $value->prefix . $value->name;
        }
        return View::make('backend.categories.add',array('parent' => $parent, 'menu'=>$menu));
    }
    public function postCreate(){
        $valid = Validator::make(Input::all(),$this->rules['create']);
        $valid->setAttributeNames($this->attributes);
        if($valid->fails()){
            return Redirect::back()->withInput()->withErrors($valid);
        }else{
            $category = new Category();
            $category->name             = Input::get('name');
            $category->parent           = Input::get('parent');
            $category->url_key          = Input::get('url_key');
            $category->meta_keyword       = Input::get('meta_keyword');
            $category->meta_description = Input::get('meta_description');
            $category->active           = Input::get('active');
            $category->save();
            return Redirect::action('AdminCategoryController@getIndex');
        }
    }
    public function getEdit($id){
        $cate = Category::find($id);
        if(empty($cate)){
            return Redirect::action('AdminCategoryController@getIndex');
        }else{
            $parent = array(
                '0' => 'Danh mục gốc'
            );
            $data = Category::Tree(10);
            $menu = Category::menuBuild($data);
            foreach($data as $value){
                $parent[$value->id] = $value->prefix . $value->name;
            }
            return View::make('backend.categories.edit',array('cate'=>$cate,'parent'=>$parent,'menu'=>$menu));
        }
    }
    public function postEdit(){
        $inputs = Input::all();
        $message = array(
            'url_key.url_check' => 'Url key đã tồn tại trong CSDL.'
        );
        Validator::extend('urlCheck', function($attribute, $value, $parameters)
        {
            $check = Category::where('id','!=', Input::get('id'))->where('url_key', '=', Input::get('url_key'))->count();
            if($check>0){
                return false;
            }else{
                return true;
            }
        });
        $valid = Validator::make(Input::all(),$this->rules['edit'],$message);
        $valid->setAttributeNames($this->attributes);
        if($valid->fails()){
            return Redirect::back()->withInput()->withErrors($valid);
        }else{
            $cate = Category::find(Input::get('id'));
            $cate->name             = Input::get('name');
            $cate->parent           = Input::get('parent');
            $cate->url_key          = Input::get('url_key');
            $cate->meta_keyword       = Input::get('meta_keyword');
            $cate->meta_description = Input::get('meta_description');
            $cate->active           = Input::get('active');
            $cate->save();
            return Redirect::action('AdminCategoryController@getIndex');
        }
    }
    public function getData(){
        $cate = Category::Tree(10);
        $data = array('id'=>'Root','parent'=>'0','text'=>'Fuck');
        foreach($cate as $val){
            array_push($data,array('id' => $val->id, 'parent' => $val->parent, 'text' => $val->name));
        }
        return Response::json($data);
    }
} 