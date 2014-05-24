<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 08/03/2014
 * Time: 05:34
 */

class UserMeta extends Eloquent{
    protected $table = 'user_meta';
    protected $fillable = array('user_id','key', 'value');
    public $timestamps = false;
    public function user(){
        return $this->belongsTo('User','user_id');
    }
} 