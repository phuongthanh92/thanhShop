<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 25/02/2014
 * Time: 20:52
 */
use Jenssegers\Mongodb\Model as MongoEloquent;
class AttributeGroup extends MongoEloquent{
    protected $connection = 'mongodb';
    protected $collection = 'attribute_group';
    protected $primaryKey = '_id';
    public $timestamps = true;
} 