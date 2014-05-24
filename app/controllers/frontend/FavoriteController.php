<?php

class FavoriteController extends \BaseController {
    protected $favorite;
    protected $product;
    protected $user_id;
    public function __construct(Favorite $favorite, Product $product){
        $this->favorite = $favorite;
        $this->product = $product;
        $this->user_id = Auth::user()->getAuthIdentifier();
    }
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function getIndex()
	{
		$title = Lang::get('frontend/title.favorite');
        $favorites = $this->favorite->where('user_id', $this->user_id)->where('status', '!=', '0')->paginate(6);
        return View::make('frontend.favorite.index', compact('title', 'favorites'));
	}
	public function postDelete()
	{
		if(Request::ajax() && Input::has('favorite')){
            $favorite = $this->favorite->find(Input::get('favorite'));
            if(!empty($favorite)){
                $favorite->delete();
                $count = $this->favorite->where('user_id', Auth::user()->getAuthIdentifier())->count();
                return Response::json(array('success'=>true, 'favorite'=>$count));
            }else{
                return Response::json(array('success'=>false));
            }
        }
	}


}
