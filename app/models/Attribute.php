<?php
use Jenssegers\Mongodb\Model as MongoEloquent;
class Attribute extends MongoEloquent{
    protected $connection = 'mongodb';
    protected $collection = 'attribute';
    protected $primaryKey = '_id';
    public $timestamps = true;


}