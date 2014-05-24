<?php

class AdminSlideController extends \BaseController
{
    protected $slide;
    protected $attributeNames;

    public function __construct(Slide $slide)
    {
        $this->slide         = $slide;
        $this->attributeNames = Lang::get('backend/slide/attributes');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getIndex()
    {
        $slide = $this->slide->getData();
        $title  = Lang::get('backend/slide/title.management');
        return View::make('backend.slide.index', compact('title', 'slide'));
    }

    public function getCreate()
    {
        $title = Lang::get('backend/slide/title.create');
        return View::make('backend.slide.create', compact('title'));
    }

    public function postCreate()
    {
        $inputs = Input::all();
        $valid  = Validator::make($inputs, $this->slide->rules['create'], array(), $this->attributeNames);
        if ($valid->fails()) {
            return Redirect::back()->withInput()->withErrors($valid->messages());
        }
        $this->slide->title = $inputs['title'];
        $this->slide->link = $inputs['link'];
        $this->slide->status = $inputs['status'];
        $fileName             = uniqid() . '.' . Input::file('image')->getClientOriginalExtension();
        $uploadSuccess        = Input::file('image')->move(public_path('images/slide'), $fileName);
        if ($uploadSuccess) {
            $this->slide->image = 'public/images/slide/' . $fileName;
            if ($this->slide->save()) {
                $this->slide->setData();
                return Redirect::action('AdminSlideController@getIndex');
            }
        }
        return Redirect::back()->withInput()->withErrors('Upload file fails');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function getEdit($id)
    {
        $slide = $this->slide->find($id);
        if (!empty($slide)) {

            $title = Lang::get('backend/slide/title.update');
            return View::make('backend.slide.edit', compact('title', 'slide'));
        }
        return Response::view('errors.404', array(), 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function postUpdate(){
        $inputs = Input::all();
        $valid = Validator::make($inputs, $this->slide->rules['update'], array(), $this->attributeNames);
        if($valid->fails()){
            return Redirect::back()->withInput()->withErrors($valid->messages());
        }
        $slide = $this->slide->find($inputs['id']);
        if(empty($slide)){
            return Response::view('errors.404', array(), 404);
        }
        $slide->title = $inputs['title'];
        $slide->link = $inputs['link'];
        $slide->status = $inputs['status'];
        $slide->save();
        $this->slide->setData();
        return Redirect::action('AdminSlideController@getIndex');
    }

    public function postDelete()
    {
        if (Input::has('slide')) {
            $slide = $this->slide->find(Input::get('slide'));
            if (!empty($slide)) {
                $path = base_path() . '/' . $slide->image;
                if (file_exists($path)) {
                    File::delete($path);
                }
                $slide->delete();
                $this->slide->setData();
                return Redirect::action('AdminSlideController@getIndex');
            }
        }
        return Response::view('errors.404', array(), 404);
    }

}