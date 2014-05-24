<?php

class AdminSettingController extends \BaseController
{
    protected $settingMeta;

    public function __construct(Setting $setting)
    {
        $this->setting        = $setting;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getIndex()
    {
        $data = $this->setting->all();
        $setting = new stdClass();
        foreach($data as $tmp){
            $setting->{$tmp->key} = $tmp->value;
        }
        $title   = Lang::get('backend/setting/title.management');
        return View::make('backend.setting.index', compact('title', 'setting'));
    }

    public function postUpdate()
    {
        $inputs = Input::all();
        if (!Input::has('_token') || Session::token() != Input::get('_token')) {
            return Redirect::back()->withInput()->withErrors();
        } else {
            unset($inputs['_token']);
            foreach($inputs as $key => $val){
                $this->setting->where('key', $key)->update(array('value' => $val));
            }
            Session::flash('success', Lang::get('backend/setting/messages.update_success'));
            Event::fire('setting', array());
            return Redirect::action('AdminSettingController@getIndex');
        }
    }

}