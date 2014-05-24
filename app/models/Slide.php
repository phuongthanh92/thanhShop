<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 12/03/2014
 * Time: 04:55
 */

class Slide extends Eloquent
{
    protected $table = 'slide';
    public $rules = array(
        'create' => array(
            'image'  => 'required|image|max:5500',
            'title'  => 'max:255',
            'link'   => 'url|max:255',
            'status' => 'required|integer',
        ),
        'update' => array(
            'id'   => 'required|integer',
            'title'  => 'max:255',
            'link'   => 'url|max:255',
            'status' => 'required|integer',
        ),
    );

    public function setData()
    {

    }

    public static function getData()
    {
        return $data = Slide::orderBy('order','ASC')->get();
    }
} 