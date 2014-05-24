<?php

class AdminAttGroupController extends \BaseController{
    protected $attributeNames;
    protected $rules = array(
        'create' => array(
            'name'       => 'required',
            'attributes' => 'required|array'
        ),
    );

    public function __construct()
    {
        $this->attributeNames = Lang::get('backend/att-group/attributes');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getIndex()
    {
        $title  = Lang::get('backend/att-group/title.management');
        $groups = AttributeGroup::all();
        return View::make('backend.att-group.index', compact('title', 'groups'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function getCreate()
    {
        $title = Lang::get('backend/att-group/title.create');
        $att   = Attribute::all();
        return View::make('backend.att-group.create', compact('title', 'att'));
    }

    public function postCreate()
    {
        $attributes = json_decode(Input::get('attributes'));
        $group_name = Input::get('group');
        $valid      = Validator::make(array('name' => $group_name, 'attributes' => $attributes), $this->rules['create'], array(), $this->attributeNames);
        if ($valid->fails()) {
            return Response::json(array('create' => 'error'), 400);
        } else {
            $group                   = new AttributeGroup();
            $group->group_name       = $group_name;
            $group->group_attributes = $attributes;
            $group->save();
            return Response::json(array('success' => 'success', 'href' => action('AdminAttGroupController@getIndex')), 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function getEdit($id)
    {
        $group      = AttributeGroup::find($id);
        $attributes = Attribute::all();
        $title      = Lang::get('backend/att-group/title.update');
        if (empty($group)) {
            return Response::view('errors.404', array(), 404);
        }
        return View::make('backend.att-group.edit', compact('title', 'group', 'attributes'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int $id
     * @return Response
     */
    public function postEdit($id)
    {
        $group = AttributeGroup::find($id);
        if (empty($group)) {
            return Response::json(array('create' => 'error'), 400);
        }
        $attributes = json_decode(Input::get('attributes'));
        $group_name = Input::get('group');
        $valid      = Validator::make(array('name' => $group_name, 'attributes' => $attributes), $this->rules['create'], array(), $this->attributeNames);
        if ($valid->fails()) {
            return Response::json(array('create' => 'error'), 400);
        }
        $group->group_name       = $group_name;
        $group->group_attributes = $attributes;
        $group->save();
        return Response::json(array('success' => 'success'), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return Response
     */
    public function getDelete($id)
    {
        //
    }

}