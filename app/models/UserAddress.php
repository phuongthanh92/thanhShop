<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 10/03/2014
 * Time: 14:49
 */

class UserAddress extends Eloquent{
    protected $table = 'user_address';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = array('user_id', 'full_name', 'districts_id', 'status', 'address', 'phone');
    public function user(){
        return $this->belongsTo('User','user_id');
    }
    public function districts(){
        return $this->belongsTo('Districts', 'districts_id');
    }
} 