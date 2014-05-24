<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 25/02/2014
 * Time: 23:19
 */
use Jenssegers\Mongodb\Model as MongoEloquent;

class Product extends MongoEloquent{
    protected $connection = 'mongodb';
    protected $collection = 'products';
    protected $primaryKey = '_id';
    public $timestamps = true;
    public $rules = array(
        'image'            => 'required|array',
        'related_products' => 'array',
        'name'             => 'required',
        'code'             => 'required|unique:products:code',
        'price'            => 'required|min:0',
        'quantity'         => 'required|min:0',
        'stock'            => 'required'
    );
    public function orderItem(){
        return $this->hasMany('OrderItem', 'product_id');
    }
    public function related(){
        return $this->hasMany('Product', 'related_products');
    }
    public function favorite(){
        return $this->hasOne('Favorite', 'product_id');
    }
    public function selectList($limit = 9, $where = array(), $whereNot = array(),$whereIn = array(), $orderBy = array('created_at', 'DESC')){
        return $this->where(function($query) use ($where, $whereIn, $whereNot){
            if(!empty($where)){
                foreach($where as $key=>$val){
                    $query->where($key, $val);
                }
            }
            if(!empty($whereNot)){
                foreach($whereNot as $key=>$val){
                    $query->where($key, '!=', $val);
                }
            }
            if(!empty($whereIn)){
                foreach($whereIn as $key=>$val){
                    $query->whereIn($key, $val);
                }
            }
        })->orderBy($orderBy[0], $orderBy[1])->paginate($limit);
    }
}

