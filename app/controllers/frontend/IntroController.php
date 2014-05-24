<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 17/03/2014
 * Time: 10:34
 */

class IntroController extends BaseController{
    protected $intro;
    public function __construct(Articles $intro){
        $this->intro = $intro;
    }
    public function getIndex(){
        $title = Lang::get('frontend/title.intro');
        $intro = $this->intro->where('type', 3)->where('status', 1)->get()->last();
        return View::make('frontend.intro.index', compact('title', 'intro'));
    }

} 