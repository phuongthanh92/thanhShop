<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 12/03/2014
 * Time: 04:56
 */

class Articles extends Eloquent{
    protected $table = 'articles';
    protected $primaryKey = 'id';
    public $timestamps = true;
    public $rules = array(
        'title' => 'required|min:4|max:255',
        'slug' => 'required|max:255',
        'meta_title' => 'max:255',
        'meta_keyword' => 'max:255',
        'meta_description' => 'max:255',
        'content' => 'required|min:100',
        'status' => 'required|integer',
        'type' => 'required|integer',
        'short_description' => 'required|max:255',
        'image' => 'image|max:15500',
    );

    public function setData(){
    }

    public static function getData(){
        return $data = Articles::where('status', '1')->get();
    }
} 