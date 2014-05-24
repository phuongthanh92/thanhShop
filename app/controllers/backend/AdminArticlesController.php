<?php

class AdminArticlesController extends \BaseController{

    protected $articles;
    protected $attributeNames;
    protected $messages;

    public function __construct(Articles $articles){
        $this->articles       = $articles;
        $this->attributeNames = Lang::get('backend/articles/attributes');
        $this->messages       = Lang::get('backend/articles/messages');
    }

    public function getIndex(){
        $articles = $this->articles->paginate(20, array('id', 'status', 'title', 'type', 'updated_at'));
        $title    = Lang::get('backend/articles/title.management');
        return View::make('backend.articles.index', compact('articles', 'title'));
    }

    public function getCreate(){
    $title = Lang::get('backend/articles/title.create');
    return View::make('backend.articles.create', compact('title'));
}

    public function postCreate(){
        $inputs = Input::all();
        $valid  = Validator::make($inputs, $this->articles->rules, $this->messages, $this->attributeNames);
        if($valid->fails()){
            return Redirect::back()->withInput()->withErrors($valid->messages());
        }
        $this->articles->status            = $inputs['status'];
        $this->articles->content           = $inputs['content'];
        $this->articles->title             = $inputs['title'];
        $this->articles->short_description = $inputs['short_description'];
        $this->articles->type              = $inputs['type'];
        $this->articles->slug              = Str::slug($inputs['slug']);
        $this->articles->meta_title        = $inputs['meta_title'];
        $this->articles->meta_keyword      = $inputs['meta_keyword'];
        $this->articles->meta_description  = $inputs['meta_description'];
        if(isset($inputs['image']) && !empty($inputs['image'])){
            $fileName      = uniqid() . '.' . Input::file('image')->getClientOriginalExtension();
            $uploadSuccess = Input::file('image')->move(public_path('images/articles'), $fileName);
            if($uploadSuccess){
                $this->articles->image  = 'public/images/articles/' . $fileName;
            }
        }
        $this->articles->save();
        $this->articles->setData();
        Event::fire('articles', array($this->articles));
        return Redirect::action('AdminArticlesController@getEdit', $this->articles->id);
    }

    public function getEdit($id){
        $articles = $this->articles->find($id);
        if(empty($articles)){
            return Response::view('errors.404', array(), 404);
        }
        $title = Lang::get('backend/articles/title.update');
        return View::make('backend.articles.edit', compact('title', 'articles'));
    }

    public function postUpdate($id){
        $articles = $this->articles->find($id);
        if(empty($articles)){
            return Response::view('errors.404', array(), 404);
        }
        $inputs = Input::all();
        $valid  = Validator::make($inputs, $this->articles->rules, $this->messages, $this->attributeNames);
        if($valid->fails()){
            return Redirect::back()->withInput()->withErrors($valid->messages());
        }
        $articles->status            = $inputs['status'];
        $articles->content           = $inputs['content'];
        $articles->title             = $inputs['title'];
        $articles->type              = $inputs['type'];
        $articles->short_description = $inputs['short_description'];
        $articles->slug              = Str::slug($inputs['slug']);
        $articles->meta_title        = $inputs['meta_title'];
        $articles->meta_keyword      = $inputs['meta_keyword'];
        $articles->meta_description  = $inputs['meta_description'];
        if(isset($inputs['image']) && !empty($inputs['image'])){
            $fileName      = uniqid() . '.' . Input::file('image')->getClientOriginalExtension();
            $uploadSuccess = Input::file('image')->move(public_path('images/articles'), $fileName);
            if($uploadSuccess){
                if(File::exists($articles->image)){
                    File::delete(base_path($articles->image));
                }
                $articles->image  = 'public/images/articles/' . $fileName;
            }
        }
        $articles->save();
        Event::fire('articles', array($articles));
        Session::flash('success', $this->messages['update_success']);
        return Redirect::action('AdminArticlesController@getEdit', $articles->id);
    }

    public function postDelete(){
        if(Input::has('id')){
            $id       = Input::get('id');
            $articles = $this->articles->find($id);
            if(empty($articles)){
                return Response::view('errors.404', array(), 404);
            }
            $articles->delete();
            Event::fire('articles', array($id));
        }
        return Redirect::action('AdminArticlesController@getIndex');
    }

}