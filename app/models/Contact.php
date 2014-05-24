<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 16/03/2014
 * Time: 16:02
 */

class Contact extends Eloquent
{
    protected $table = 'contact';
    protected $primaryKey = 'id';
    public $timestamps = true;
    public $rules = array(
        'title'   => 'required|min:4|max:255',
        'email'   => 'required|email',
        'content' => 'required|min:20',
        'captcha' => 'required|captcha'
    );
} 