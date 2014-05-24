<?php

class AdminContactController extends \BaseController {
    protected $contact;


    public function __construct(Contact $contact){
        $this->contact = $contact;
    }
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function getIndex()
	{
        $appends = array();
        $limit   = 10;
        if ((Input::has('limit') && (int)Input::get('limit') > 0)) {
            $limit            = (int)Input::get('limit');
            $appends['limit'] = $limit;
        }
        $order = 'new';
        if(Input::has('order') && Input::get('order')=='status'){
            $order = 'status';
            $appends['status'] = $order;
            $contacts = $this->contact->orderBy('status', 'ASC')->paginate($limit, array('id', 'title', 'email', 'created_at', 'status'));
        }else{
            $contacts = $this->contact->paginate($limit, array('id', 'title', 'email', 'created_at', 'status'));
        }
        $title = Lang::get('backend/contact/title.management');
        $contacts->appends($appends)->links();
		return View::make('backend.contact.index', compact('title', 'contacts', 'limit', 'order'));
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function getView($id)
	{
		$contact = $this->contact->find($id);
        if(empty($contact)){
            return Response::view('errors.404', array(), 404);
        }
        $title = $contact->title;
        if($contact->status === 0 ){
            $contact->status = 1;
            $contact->save();
        }
        return View::make('backend.contact.view', compact('contact', 'title'));
	}
    public function postDelete($id){
        $contact = $this->contact->find($id);
        if (empty($contact) || !Input::has('_token') || Session::token() != Input::get('_token')) {
            return Response::view('errors.404', array(), 404);
        }
        $contact->delete();
        return Redirect::action('AdminContactController@getIndex');
    }
    public function postLoadNew(){
        return $this->contact->where('status', 0)->get(array('id', 'title', 'created_at'));
    }
}