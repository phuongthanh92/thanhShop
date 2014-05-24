<?php

class ContactController extends \BaseController
{
    protected $contact;
    protected $attributeName;
    protected $messages;

    public function __construct(Contact $contact)
    {
        $this->contact       = $contact;
        $this->messages      = Lang::get('frontend/contact/messages');
        $this->attributeName = Lang::get('frontend/contact/attributes');
    }

    public function getIndex()
    {
        $title = Lang::get('frontend/contact/title.index');
        return View::make('frontend.contact.index', compact('title'));
    }

    public function postCreate()
    {
        $inputs = Input::all();
        $valid = Validator::make($inputs, $this->contact->rules, $this->messages, $this->attributeName);
        if($valid->fails()){
            return Redirect::back()->withInput()->withErrors($valid->messages());
        }
        $this->contact->title = $inputs['title'];
        $this->contact->email = $inputs['email'];
        $this->contact->content = $inputs['content'];
        $this->contact->save();
        return Redirect::back()->with('success', $this->messages['send_success']);
    }

}