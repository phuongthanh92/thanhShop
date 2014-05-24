<?php

class AdminAttributeController extends \BaseController {
    /**
     * @var array
     */
    protected  $attributeNames;
    /**
     * @var array
     */
    protected $rules = array(
        'create'    =>  array(
            'code'  =>  'required|alpha_dash|unique:attribute',
            'label' =>  'required',
            'type'      =>  'required',
            'require'   =>  'required|integer',
            'validate'  =>  'required',
        )
    );
    public function __construct(){
        $this->attributeNames = Lang::get('backend/attributes/attributes');
    }
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function getIndex(){
        $title = Lang::get('backend/attributes/title.management');
        $count =  Attribute::count();
        $pagination = Paginator::make(array(), $count, 15);
        $attributes = Attribute::skip($pagination->getFrom()-1)->take(15)->get();
        return View::make('backend.attributes.index', compact('title','attributes', 'pagination'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
    public function getCreate(){
        $title = Lang::get('backend/attributes/title.create');
        return View::make('backend.attributes.create', compact('title', 'count'));
    }

    /**
     *
     */
    public function postCreate(){
        $inputs = Input::all();
        $valid = Validator::make($inputs, $this->rules['create'], array(), $this->attributeNames);
        $valid->getPresenceVerifier()->setConnection('mongodb');
        if($valid->fails()){
            return Redirect::back()->withInput()->withErrors($valid)->with(array('inputs'=>$inputs));
        }else{
            $att = new Attribute();
            $att->code      = $inputs['code'];
            $att->label     = $inputs['label'];
            $att->type      = $inputs['type'];
            $att->require   = $inputs['require'];
            $att->validate  = $inputs['validate'];
            if(($inputs['type'] === 'select' || $inputs['type'] === 'multiselect')&& isset($inputs['type_data']) && isset($inputs['type_data_label'])){
                $data = array();
                foreach($inputs['type_data'] as $key=>$val){
                    array_push($data,array('data'=>$val, 'label'=>$inputs['type_data_label'][$key]));
                }
                $att->data      = $data;
            }
            $att->save();
            return Redirect::action('AdminAttributeController@getIndex');
        }
    }
    public function getShow($id){

    }
	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function getEdit($id)
	{
        $attribute = Attribute::find($id);
        if(empty($attribute)){
            return Response::view('errors.404', array(), 404);
        }
        $title = Lang::get('backend/attributes/title.update');
        return View::make('backend.attributes.edit', compact('title', 'attribute'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function postUpdate($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function getDelete($id)
	{
        $att = Attribute::find($id);
        if(empty($att)){
            return Response::view('errors.404', array(), 404);
        }else{
            $att->delete();
            return Redirect::action('AdminAttributeController@getIndex');
        }
	}

}