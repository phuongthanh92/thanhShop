<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 10/03/2014
 * Time: 18:30
 */

class OrderItem extends Eloquent{
    protected $table = 'order_item';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = array('order_id', 'product_id', 'quantity', 'price', 'category_id', 'attributes');
    public function orders(){
        return $this->belongsTo('Order','order_id');
    }
    public function products(){
//        return $this->hasOne('Product','product_id');
        return Product::find($this->product_id);
    }

} 