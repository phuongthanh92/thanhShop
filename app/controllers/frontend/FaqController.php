<?php

class FaqController extends \BaseController {
    protected $articles;
    protected $timeExpired = 1800;
    public function __construct(Articles $articles){
        $this->articles = $articles;
    }
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function getIndex()
	{
        $faqs = $this->articles->where('type', 2)->get();
        $title = Lang::get('frontend/title.faq');
        return View::make('frontend.faq.index', compact('title', 'faqs'));
	}

}