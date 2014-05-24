<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 10/03/2014
 * Time: 14:47
 */

class Order extends Eloquent{
    protected $table = 'orders';
    protected $primaryKey = 'id';
    public $timestamps = true;
    public function user(){
        return $this->belongsTo('User','user_id');
    }
    public function address(){
        return $this->belongsTo('UserAddress','address_id');
    }
    public function item(){
        return $this->hasMany('OrderItem','order_id');
    }
    public function comment(){
        return $this->hasMany('OrderComment','order_id');
    }
    public function getLimitOrder() {
        $allOrder = DB::table('orders')->join('users', 'orders.user_id', '=', 'users.id')->select('orders.*', 'users.email', 'users.full_name','users.username')->orderBy('orders.id','desc')->limit(10)->get();
        return $allOrder;
    }
    public function getNewOrderOnDay($from,$to){
        $allorder= DB::table('orders')->whereBetween('orders.updated_at',array($from,$to))->orderBy('id', 'desc')->count();
        return $allorder;
    }
} 