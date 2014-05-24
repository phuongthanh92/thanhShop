<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 09/04/14
 * Time: 10:59
 */

class ArticlesController extends \BaseController{
    protected $article;
    public $timeExpired = 1800;
    public function __construct(Articles $article){
        $this->article = $article;
    }
    public function getPost($slug, $id){
        $post = $this->article->find($id);
        return View::make('frontend.posts.index', compact('post'));
    }
    public function postLoad(){
        if(Input::has('skip')){
            $data = $this->article->where('type',1)->orderBy('id', 'DESC')->skip(Input::get('skip'))->take(9)->get(array('id', 'slug', 'title', 'short_description', 'image'));
            return Response::json($data);
        }
    }
} 