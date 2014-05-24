<?php
class Category extends Eloquent
{
    protected $table = 'categories';
    protected $primaryKey = 'id';
    public $timestamps = true;

    public function setData(){

    }
    public static function getData(){
        return $data = Category::orderBy('order')->get();
    }
}
