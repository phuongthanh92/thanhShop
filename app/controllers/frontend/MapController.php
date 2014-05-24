<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 17/03/2014
 * Time: 10:03
 */

class MapController extends BaseController{
    protected $setting;
    public function __construct(Setting $setting){
        $this->setting = $setting;
    }
    public function getIndex(){
        $config = $this->setting->getData();
        $title = Lang::get('frontend/title.map');
        return View::make('frontend.map.index', compact('config', 'title'));
    }
} 