<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 01/04/2014
 * Time: 20:34
 */
use Jenssegers\Mongodb\Model as MongoEloquent;
class Favorite extends MongoEloquent{
    protected $connection = 'mongodb';
    protected $collection = 'favorite';
    protected $primaryKey = '_id';
    public function product(){
        return $this->belongsTo('Product', 'product_id');
    }
}