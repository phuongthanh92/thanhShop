<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 14/03/2014
 * Time: 10:39
 */

class OrderCommentController extends \BaseController
{
    protected $comment;

    public function __construct(OrderComment $comment)
    {
        $this->comment = $comment;
    }
    public function postCreate(){
        if (Request::ajax()){
            $inputs = Input::all();
            $rules = array(
                'order_id' => 'required|integer',
                'content'  => 'required|max:255'
            );
            $valid = Validator::make($inputs, $rules);
            if(!$valid->fails()){
                $inputs['content'] = str_replace ('&nbsp;', ' ', $inputs['content']);
                if(trim($inputs['content']) == ''){
                    return Response::json(array('success' => false), 200);
                }
                $this->comment->user_id = Auth::user()->id;
                $this->comment->order_id = $inputs['order_id'];
                $this->comment->content = $inputs['content'];
                if($this->comment->save()){
                    return Response::json(array('success' => true), 200);
                }
            }
            return Response::json(array('success' => false), 200);
        }
        return Response::view('errors.404', array(), 404);
    }
    public function postLoadNew(){
        return $this->comment->where('status', 0)->get(array('order_id', 'content', 'created_at'))->toJson();
    }
} 